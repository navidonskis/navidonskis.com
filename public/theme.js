/*
  Theme: system by default, with an explicit light or dark override in localStorage.

  Served as a classic script from /public and loaded synchronously in <head>, because
  the CSP sets script-src 'self' with no 'unsafe-inline', so an inline script is not an
  option. Running before the body is parsed keeps the first paint on the right theme.
*/
(function () {
  var KEY = 'theme';
  var ORDER = ['system', 'light', 'dark'];
  var LABELS = {
    system: 'Theme: system default. Switch to light.',
    light: 'Theme: light. Switch to dark.',
    dark: 'Theme: dark. Switch to system default.',
  };

  var root = document.documentElement;
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  var theme = 'system';

  try {
    var stored = localStorage.getItem(KEY);
    if (stored === 'light' || stored === 'dark') theme = stored;
  } catch (e) {
    /* Storage blocked: stay on the system default. */
  }

  function apply() {
    if (theme === 'system') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', theme);

    var resolved = theme === 'system' ? (prefersDark.matches ? 'dark' : 'light') : theme;
    var metas = document.querySelectorAll('meta[name="theme-color"]');
    for (var i = 0; i < metas.length; i++) {
      metas[i].setAttribute('media', metas[i].dataset.scheme === resolved ? 'all' : 'not all');
    }

    var button = document.querySelector('[data-theme-toggle]');
    if (button) button.setAttribute('aria-label', LABELS[theme]);
  }

  // Marks that the toggle has a script behind it, so CSS can reveal the control.
  root.setAttribute('data-theme-js', '');
  apply();

  prefersDark.addEventListener('change', apply);

  document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('[data-theme-toggle]');
    if (!button) return;

    button.setAttribute('aria-label', LABELS[theme]);
    button.addEventListener('click', function () {
      theme = ORDER[(ORDER.indexOf(theme) + 1) % ORDER.length];
      try {
        if (theme === 'system') localStorage.removeItem(KEY);
        else localStorage.setItem(KEY, theme);
      } catch (e) {
        /* Storage blocked: the choice applies to this page only. */
      }
      apply();
    });
  });
})();
