(() => {
  const STORAGE_KEY = "lang";
  const DEFAULT_LANG = "en";
  const SUPPORTED = new Set(["en", "de"]);
  const $toggle = document.getElementById("lang-toggle");

  function loadDict(lang) {
    return new Promise((resolve, reject) => {
      // schon geladen?
      if (window.I18N && window.I18N[lang]) return resolve(window.I18N[lang]);
      // dynamisch <script> einf�gen
      const s = document.createElement("script");
      s.src = `i18n/${lang}.js`;
      s.onload = () => {
        if (window.I18N && window.I18N[lang]) resolve(window.I18N[lang]);
        else reject(new Error(`i18n dict missing for ${lang}`));
      };
      s.onerror = () => reject(new Error(`failed to load i18n/${lang}.js`));
      document.head.appendChild(s);
    });
  }

  function applyDict(dict) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(el => {
      const spec = el.getAttribute("data-i18n-attr");
      spec.split(",").forEach(pair => {
        const [attr, key] = pair.split(":").map(s => s.trim());
        if (attr && key && dict[key] != null) el.setAttribute(attr, dict[key]);
      });
    });
  }

  function setHtmlLang(lang){ document.documentElement.setAttribute("lang", lang); }

  async function setLanguage(lang) {
    if (!SUPPORTED.has(lang)) lang = DEFAULT_LANG;
    localStorage.setItem(STORAGE_KEY, lang);
    setHtmlLang(lang);
    const dict = await loadDict(lang);
    applyDict(dict);
    if ($toggle && dict["ui.langToggle"]) $toggle.textContent = dict["ui.langToggle"];
  }

  function nextLang(current){ return current === "en" ? "de" : "en"; }

  document.addEventListener("DOMContentLoaded", async () => {
    let lang = localStorage.getItem(STORAGE_KEY) || navigator.language.slice(0,2).toLowerCase();
    if (!SUPPORTED.has(lang)) lang = DEFAULT_LANG;
    await setLanguage(lang);

    $toggle?.addEventListener("click", async () => {
      const newLang = nextLang(localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG);
      await setLanguage(newLang);
      $toggle.setAttribute("aria-pressed", String(newLang === "de"));
    });
  });
})();

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('home');
    const sentinel = document.getElementById('shrink-sentinel');
    if (!header || !sentinel) return;

    const obs = new IntersectionObserver(
        ([entry]) => {
            // sobald der Sentinel NICHT mehr sichtbar ist -> compact = true
            header.classList.toggle('compact', !entry.isIntersecting);
        },
        {
            root: null,
            threshold: 0,
            rootMargin: '-64px 0px 0px 0px'
        }
    );

    obs.observe(sentinel);
});
