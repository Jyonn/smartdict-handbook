const copyButtons = document.querySelectorAll(".copy-button");
const bodyPage = document.body.getAttribute("data-page");
const activeNav = bodyPage ? document.querySelector(`[data-nav="${bodyPage}"]`) : null;
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.getElementById("site-nav");

if (activeNav) {
  activeNav.classList.add("is-active");
}

if (window.hljs) {
  document.querySelectorAll("pre code").forEach((block) => {
    window.hljs.highlightElement(block);
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
