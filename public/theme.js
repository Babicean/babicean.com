// Runs before first paint (blocking, in <head>) so dark-mode visitors never see
// a flash of the light theme. Kept as its own file so the CSP needs no
// 'unsafe-inline'. The toggle itself lives in the page script.
(function () {
  var theme;
  try {
    theme = localStorage.getItem('bb-theme');
  } catch (e) {}
  if (theme !== 'dark' && theme !== 'light') {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.documentElement.dataset.theme = theme;
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#151b18' : '#f6f7f4');
})();
