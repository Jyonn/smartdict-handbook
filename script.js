const handbook = window.HANDBOOK_CONTENT;
const pageId = document.body.getAttribute("data-page");
const siteNav = document.getElementById("site-nav");
const navToggle = document.querySelector(".nav-toggle");
const mainRoot = document.querySelector("main.page");
const footerRoot = document.querySelector("footer.site-footer");

const DEFAULT_LOCALE = "en";
const LOCALE_STORAGE_KEY = "smartdict-handbook-locale";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function t(value, locale) {
  if (value == null) {
    return "";
  }

  if (typeof value === "string") {
    return value;
  }

  if (typeof value === "object") {
    return value[locale] ?? value[DEFAULT_LOCALE] ?? Object.values(value)[0] ?? "";
  }

  return String(value);
}

function detectLocale() {
  const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  const supported = new Set(handbook.locales.map((item) => item.code));
  if (saved && supported.has(saved)) {
    return saved;
  }

  const browserLocales = [navigator.language, ...(navigator.languages || [])].filter(Boolean);
  for (const locale of browserLocales) {
    if (supported.has(locale)) {
      return locale;
    }

    const matched = handbook.locales.find((item) => locale.startsWith(item.code));
    if (matched) {
      return matched.code;
    }

    if (locale.startsWith("zh")) {
      return /tw|hk|hant/i.test(locale) ? "zh-TW" : "zh-CN";
    }
  }

  return DEFAULT_LOCALE;
}

let currentLocale = detectLocale();

function highlightBlock(block) {
  if (!window.hljs || !block) {
    return;
  }

  if (block.dataset.highlighted === "yes") {
    delete block.dataset.highlighted;
  }

  window.hljs.highlightElement(block);
}

function formatValue(value) {
  if (value === undefined) {
    return "undefined";
  }

  return JSON.stringify(
    value,
    (key, item) => {
      if (item === undefined) {
        return "__undefined__";
      }
      if (typeof item === "function") {
        return `[Function ${item.name || "anonymous"}]`;
      }
      return item;
    },
    2
  ).replace(/"__undefined__"/g, "undefined");
}

function formatError(error) {
  const payload = {
    error: error?.name || "Error",
    message: error?.message || String(error),
  };

  if (error?.stage) {
    payload.stage = error.stage;
  }

  if (error?.path) {
    payload.path = error.path;
  }

  if (error?.unresolved) {
    payload.unresolved = Array.from(error.unresolved);
  }

  return JSON.stringify(payload, null, 2);
}

function evaluateSource(source) {
  try {
    return Function(`"use strict"; return (${source}\n);`)();
  } catch (expressionError) {
    return Function(`"use strict"; ${source}`)();
  }
}

function renderHero(hero, locale) {
  const actions = (hero.actions || [])
    .map((action) => `<a class="button ${action.secondary ? "button-secondary" : "button-primary"}" href="${action.href}">${escapeHtml(t(action.label, locale))}</a>`)
    .join("");

  const aside = hero.aside?.length
    ? `
      <div class="hero-card hero-mini">
        <div class="hero-mini-head">${escapeHtml(t(handbook.ui.interactiveHint, locale))}</div>
        <pre><code class="language-javascript">${escapeHtml(hero.aside.join("\n"))}</code></pre>
      </div>
    `
    : "";

  return `
    <section class="${pageId === "home" ? "hero" : "page-hero"}">
      <div class="${pageId === "home" ? "hero-copy" : "page-hero-copy"}">
        <p class="eyebrow">${escapeHtml(t(hero.eyebrow, locale))}</p>
        <h1>${escapeHtml(t(hero.title, locale))}</h1>
        <p class="${pageId === "home" ? "hero-text" : "page-hero-text"}">${escapeHtml(t(hero.text, locale))}</p>
        ${actions ? `<div class="hero-actions">${actions}</div>` : ""}
      </div>
      ${aside}
    </section>
  `;
}

function renderCardsSection(section, locale) {
  const cards = section.cards
    .map((card) => `
      <article class="card">
        <h3>${escapeHtml(t(card.title, locale))}</h3>
        <p>${escapeHtml(t(card.text, locale))}</p>
        ${card.href ? `<a class="text-link" href="${card.href}">${escapeHtml(t(handbook.ui.nav[card.href.includes("reference") ? "references" : card.href.includes("defaults") ? "defaults" : card.href.includes("pipelines") ? "pipelines" : card.href.includes("modes") ? "modes" : card.href.includes("recipes") ? "recipes" : "playground"], locale))}</a>` : ""}
      </article>
    `)
    .join("");

  return `
    <section class="section">
      <div class="section-heading">
        <p class="section-kicker">${escapeHtml(t(section.kicker, locale))}</p>
        <h2>${escapeHtml(t(section.title, locale))}</h2>
        ${section.body ? `<p class="section-lead">${escapeHtml(t(section.body, locale))}</p>` : ""}
      </div>
      <div class="grid feature-grid">${cards}</div>
    </section>
  `;
}

function renderInstallSection(section, locale) {
  const blocks = (section.blocks || [{
    codeLabel: section.codeLabel,
    code: section.code,
  }]).map((block) => `
    <div class="code-block">
      <div class="code-block-head">
        <span>${escapeHtml(block.codeLabel)}</span>
        <button class="copy-button" data-copy-text="${escapeHtml(block.code)}">${escapeHtml(t(handbook.ui.copy, locale))}</button>
      </div>
      <pre><code class="language-bash">${escapeHtml(block.code)}</code></pre>
    </div>
  `).join("");

  return `
    <section class="section">
      <div class="section-heading">
        <p class="section-kicker">${escapeHtml(t(section.kicker, locale))}</p>
        <h2>${escapeHtml(t(section.title, locale))}</h2>
        ${section.body ? `<p class="section-lead">${escapeHtml(t(section.body, locale))}</p>` : ""}
      </div>
      <div class="install-grid">${blocks}</div>
      <div class="callout">
        <strong>${escapeHtml(t(handbook.ui.note, locale))}:</strong>
        ${escapeHtml(t(section.note, locale))}
      </div>
    </section>
  `;
}

function renderCase(caseDef, locale, index) {
  const mode = caseDef.mode || "strict";
  const iterations = caseDef.iterations || 2;

  return `
    <article class="case-lab" data-mode="${mode}" data-iterations="${iterations}">
      <div class="case-lab-head">
        <div class="case-lab-copy">
          <p class="case-index">${String(index + 1).padStart(2, "0")}</p>
          <h3>${escapeHtml(t(caseDef.title, locale))}</h3>
          <p>${escapeHtml(t(caseDef.summary, locale))}</p>
        </div>
        <div class="case-lab-tools">
          <label class="case-control">
            <span>${escapeHtml(t(handbook.ui.parseMode, locale))}</span>
            <select class="case-mode">
              <option value="strict"${mode === "strict" ? " selected" : ""}>${escapeHtml(t(handbook.ui.strict, locale))}</option>
              <option value="partial"${mode === "partial" ? " selected" : ""}>${escapeHtml(t(handbook.ui.partial, locale))}</option>
              <option value="iterative"${mode === "iterative" ? " selected" : ""}>${escapeHtml(t(handbook.ui.iterative, locale))}</option>
            </select>
          </label>
          <label class="case-control case-iterations-wrap${mode === "iterative" ? "" : " is-hidden"}">
            <span>${escapeHtml(t(handbook.ui.iterations, locale))}</span>
            <input class="case-iterations" type="number" min="1" value="${iterations}">
          </label>
          <button class="button button-flat case-reset" type="button">${escapeHtml(t(handbook.ui.reset, locale))}</button>
        </div>
      </div>
      <div class="case-lab-body">
        <section class="case-pane">
          <div class="case-pane-head">
            <span>${escapeHtml(t(handbook.ui.input, locale))}.js</span>
            <button class="copy-button" data-copy-role="source">${escapeHtml(t(handbook.ui.copy, locale))}</button>
          </div>
          <div class="editor-shell">
            <pre class="editor-highlight"><code class="language-javascript"></code></pre>
            <textarea class="editor-input" spellcheck="false" wrap="off">${escapeHtml(caseDef.source)}</textarea>
          </div>
        </section>
        <section class="case-pane">
          <div class="case-pane-head">
            <span>${escapeHtml(t(handbook.ui.result, locale))}.json</span>
            <button class="copy-button" data-copy-role="output">${escapeHtml(t(handbook.ui.copy, locale))}</button>
          </div>
          <pre class="case-output"><code class="language-json"></code></pre>
        </section>
      </div>
      <p class="case-status" data-state="ready">${escapeHtml(t(handbook.ui.ready, locale))}</p>
      <p class="case-hint">${escapeHtml(t(handbook.ui.autoRunHint, locale))}</p>
    </article>
  `;
}

function renderCasesSection(section, locale) {
  const cases = section.cases
    .map((caseDef, index) => renderCase(caseDef, locale, index))
    .join("");

  return `
    <section class="section">
      <div class="section-heading">
        <p class="section-kicker">${escapeHtml(t(section.kicker, locale))}</p>
        <h2>${escapeHtml(t(section.title, locale))}</h2>
        ${section.body ? `<p class="section-lead">${escapeHtml(t(section.body, locale))}</p>` : ""}
      </div>
      <div class="case-stack">${cases}</div>
    </section>
  `;
}

function renderSection(section, locale) {
  if (section.type === "cards") {
    return renderCardsSection(section, locale);
  }

  if (section.type === "install") {
    return renderInstallSection(section, locale);
  }

  if (section.type === "cases") {
    return renderCasesSection(section, locale);
  }

  return "";
}

function ensureLocaleControl(locale) {
  let controls = document.querySelector(".site-controls");
  if (!controls) {
    controls = document.createElement("div");
    controls.className = "site-controls";
    controls.innerHTML = `
      <label class="site-locale">
        <span class="sr-only site-locale-label"></span>
        <span class="site-locale-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm6.93 9h-3.1a15.78 15.78 0 0 0-1.35-5A8.03 8.03 0 0 1 18.93 11ZM12 4.04c.84 1.05 1.88 3.17 2.37 6h-4.74c.49-2.83 1.53-4.95 2.37-6ZM9.52 6a15.78 15.78 0 0 0-1.35 5h-3.1A8.03 8.03 0 0 1 9.52 6ZM5.07 13h3.1a15.78 15.78 0 0 0 1.35 5A8.03 8.03 0 0 1 5.07 13ZM12 19.96c-.84-1.05-1.88-3.17-2.37-6h4.74c-.49 2.83-1.53 4.95-2.37 6Zm2.48-1.96a15.78 15.78 0 0 0 1.35-5h3.1A8.03 8.03 0 0 1 14.48 18Z"></path>
          </svg>
        </span>
        <select id="site-locale"></select>
      </label>
    `;

    const header = document.querySelector(".site-header");
    if (header) {
      header.append(controls);
    }
  }

  const label = controls.querySelector(".site-locale-label");
  const select = controls.querySelector("#site-locale");
  label.textContent = t(handbook.ui.language, locale);

  select.innerHTML = handbook.locales
    .map((item) => `<option value="${item.code}"${item.code === locale ? " selected" : ""}>${item.label}</option>`)
    .join("");

  if (!select.dataset.bound) {
    select.dataset.bound = "yes";
    select.addEventListener("change", (event) => {
      currentLocale = event.target.value;
      window.localStorage.setItem(LOCALE_STORAGE_KEY, currentLocale);
      render(currentLocale);
    });
  }
}

function syncNavigation(locale) {
  if (!siteNav) {
    return;
  }

  siteNav.querySelectorAll("[data-nav]").forEach((link) => {
    const key = link.getAttribute("data-nav");
    link.textContent = t(handbook.ui.nav[key], locale);
    link.classList.toggle("is-active", key === pageId);
  });

  if (navToggle) {
    navToggle.textContent = t(handbook.ui.menu, locale);
  }

}

function initCaseLab(card, locale) {
  const editor = card.querySelector(".editor-input");
  const highlightCode = card.querySelector(".editor-highlight code");
  const outputCode = card.querySelector(".case-output code");
  const resetButton = card.querySelector(".case-reset");
  const modeSelect = card.querySelector(".case-mode");
  const iterationsWrap = card.querySelector(".case-iterations-wrap");
  const iterationsInput = card.querySelector(".case-iterations");
  const status = card.querySelector(".case-status");
  const initialSource = editor.value;
  const initialMode = card.dataset.mode || "strict";
  const initialIterations = card.dataset.iterations || "2";

  function syncIterationsVisibility() {
    iterationsWrap.classList.toggle("is-hidden", modeSelect.value !== "iterative");
  }

  function syncHighlight() {
    highlightCode.textContent = editor.value;
    highlightBlock(highlightCode);
  }

  function syncScroll() {
    const pre = card.querySelector(".editor-highlight");
    pre.scrollTop = editor.scrollTop;
    pre.scrollLeft = editor.scrollLeft;
  }

  function setStatus(text, state = "ready") {
    status.dataset.state = state;
    status.textContent = text;
  }

  function run() {
    syncIterationsVisibility();

    try {
      if (!window.smartdict) {
        throw new Error("smartdict-js browser bundle is not available on this page.");
      }

      const input = evaluateSource(editor.value);
      let output;

      if (modeSelect.value === "partial") {
        output = window.smartdict.partialParse(input);
      } else if (modeSelect.value === "iterative") {
        output = window.smartdict.iterativeParse(input, Number(iterationsInput.value));
      } else {
        output = window.smartdict.parse(input);
      }

      outputCode.textContent = formatValue(output);
      highlightBlock(outputCode);
      setStatus(`${t(handbook.ui.compiled, locale)} · ${t(handbook.ui[modeSelect.value], locale)}`, "success");
    } catch (error) {
      outputCode.textContent = formatError(error);
      highlightBlock(outputCode);
      setStatus(error?.message || t(handbook.ui.compileError, locale), "error");
    }
  }

  card.querySelectorAll("[data-copy-role]").forEach((button) => {
    button.addEventListener("click", async () => {
      const target = button.dataset.copyRole === "source" ? editor.value : outputCode.textContent;
      const original = button.textContent;

      try {
        await navigator.clipboard.writeText(target);
        button.textContent = t(handbook.ui.copied, locale);
      } catch {
        button.textContent = t(handbook.ui.compileError, locale);
      }

      window.setTimeout(() => {
        button.textContent = original;
      }, 1200);
    });
  });

  resetButton.addEventListener("click", () => {
    editor.value = initialSource;
    modeSelect.value = initialMode;
    iterationsInput.value = initialIterations;
    syncHighlight();
    syncScroll();
    run();
  });

  modeSelect.addEventListener("change", run);
  iterationsInput.addEventListener("change", run);
  editor.addEventListener("input", () => {
    syncHighlight();
    syncScroll();
    setStatus(t(handbook.ui.ready, locale), "ready");
  });
  editor.addEventListener("blur", run);
  editor.addEventListener("scroll", syncScroll);
  editor.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
      run();
    }
  });

  syncIterationsVisibility();
  syncHighlight();
  syncScroll();
  run();
}

function bindStaticCopyButtons(locale) {
  document.querySelectorAll(".copy-button[data-copy-text]").forEach((button) => {
    if (button.dataset.bound === "yes") {
      return;
    }

    button.dataset.bound = "yes";
    button.addEventListener("click", async () => {
      const original = button.textContent;
      try {
        await navigator.clipboard.writeText(button.dataset.copyText || "");
        button.textContent = t(handbook.ui.copied, locale);
      } catch {
        button.textContent = t(handbook.ui.compileError, locale);
      }

      window.setTimeout(() => {
        button.textContent = original;
      }, 1200);
    });
  });
}

function render(locale) {
  const page = handbook.pages[pageId];
  if (!page || !mainRoot || !footerRoot) {
    return;
  }

  document.documentElement.lang = locale;
  document.title = t(page.title, locale);

  ensureLocaleControl(locale);
  syncNavigation(locale);

  const sectionsHtml = page.sections.map((section) => renderSection(section, locale)).join("");
  mainRoot.innerHTML = `${renderHero(page.hero, locale)}${sectionsHtml}`;

  footerRoot.innerHTML = `
    <p>${escapeHtml(t(page.footer, locale))}</p>
    <p>${escapeHtml(t(handbook.ui.footerDocs, locale))}</p>
    <p>
      ${escapeHtml(t(handbook.ui.sourceLinks, locale))}:
      <a href="https://github.com/Jyonn/smartdict">smartdict-python</a> ·
      <a href="https://github.com/Jyonn/smartdict-js">smartdict-js</a> ·
      <a href="https://github.com/Jyonn/smartdict-handbook">smartdict-handbook</a>
    </p>
  `;

  bindStaticCopyButtons(locale);
  mainRoot.querySelectorAll("pre code").forEach((block) => {
    highlightBlock(block);
  });
  mainRoot.querySelectorAll(".case-lab").forEach((card) => {
    initCaseLab(card, locale);
  });
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const next = !siteNav.classList.contains("is-open");
    siteNav.classList.toggle("is-open", next);
    navToggle.setAttribute("aria-expanded", String(next));
  });
}

if (handbook) {
  render(currentLocale);
}
