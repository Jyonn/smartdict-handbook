const copyButtons = document.querySelectorAll(".copy-button");
const bodyPage = document.body.getAttribute("data-page");
const activeNav = bodyPage ? document.querySelector(`[data-nav="${bodyPage}"]`) : null;
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.getElementById("site-nav");

if (activeNav) {
  activeNav.classList.add("is-active");
}

function highlightBlock(block) {
  if (!window.hljs || !block) {
    return;
  }

  if (block.dataset.highlighted === "yes") {
    delete block.dataset.highlighted;
  }

  window.hljs.highlightElement(block);
}

if (window.hljs) {
  document.querySelectorAll("pre code").forEach((block) => {
    highlightBlock(block);
  });
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const next = !siteNav.classList.contains("is-open");
    siteNav.classList.toggle("is-open", next);
    navToggle.setAttribute("aria-expanded", String(next));
  });
}

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const targetId = button.getAttribute("data-copy-target");
    const target = targetId ? document.getElementById(targetId) : button.closest(".code-block, .code-card")?.querySelector("code");
    if (!target) return;

    const original = button.textContent;
    try {
      await navigator.clipboard.writeText(target.textContent);
      button.textContent = "Copied";
      window.setTimeout(() => {
        button.textContent = original;
      }, 1400);
    } catch {
      button.textContent = "Failed";
      window.setTimeout(() => {
        button.textContent = original;
      }, 1400);
    }
  });
});

function formatPlaygroundValue(value) {
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

function formatPlaygroundError(error) {
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

function evaluatePlaygroundSource(source) {
  return Function(`"use strict"; return (${source}\n);`)();
}

function initPlaygroundCard(card) {
  const textarea = card.querySelector(".playground-textarea");
  const previewCode = card.querySelector(".playground-preview code");
  const outputCode = card.querySelector(".playground-pane:last-child code");
  const status = card.querySelector(".playground-status");
  const toggleButton = card.querySelector(".playground-toggle");
  const resetButton = card.querySelector(".playground-reset");
  const modeSelect = card.querySelector(".playground-select");
  const iterationsInput = card.querySelector(".playground-iterations");
  const initialSource = textarea.value;

  function syncIterationVisibility() {
    const enabled = modeSelect.value === "iterative";
    iterationsInput.classList.toggle("is-hidden", !enabled);
  }

  function syncPreview() {
    previewCode.textContent = textarea.value.trim();
    highlightBlock(previewCode);
  }

  function compile() {
    syncIterationVisibility();
    syncPreview();

    try {
      if (!window.smartdict) {
        throw new Error("smartdict-js browser bundle is not available on this page.");
      }

      const input = evaluatePlaygroundSource(textarea.value);
      let output;

      if (modeSelect.value === "partial") {
        output = window.smartdict.partialParse(input);
      } else if (modeSelect.value === "iterative") {
        output = window.smartdict.iterativeParse(input, Number(iterationsInput.value));
      } else {
        output = window.smartdict.parse(input);
      }

      outputCode.textContent = formatPlaygroundValue(output);
      status.dataset.state = "success";
      status.textContent = `compiled with ${modeSelect.value} mode`;
    } catch (error) {
      outputCode.textContent = formatPlaygroundError(error);
      status.dataset.state = "error";
      status.textContent = error?.message || "compile failed";
    }

    highlightBlock(outputCode);
  }

  if (card.dataset.defaultMode) {
    modeSelect.value = card.dataset.defaultMode;
  }

  syncIterationVisibility();
  syncPreview();
  compile();

  toggleButton.addEventListener("click", () => {
    const next = !card.classList.contains("is-editing");
    card.classList.toggle("is-editing", next);
    toggleButton.textContent = next ? "Preview" : "Edit";
  });

  resetButton.addEventListener("click", () => {
    textarea.value = initialSource;
    compile();
  });

  textarea.addEventListener("input", compile);
  modeSelect.addEventListener("change", compile);
  iterationsInput.addEventListener("input", compile);
}

document.querySelectorAll(".playground-card").forEach((card) => {
  initPlaygroundCard(card);
});
