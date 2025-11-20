// /JS/include-html.js
document.addEventListener("DOMContentLoaded", () => {
  const includes = document.querySelectorAll('[data-include]');
  includes.forEach(el => {
    const url = el.getAttribute('data-include');
    if (!url) return;
    fetch(url)
      .then(r => {
        if (!r.ok) throw new Error('Include failed: ' + url);
        return r.text();
      })
      .then(html => el.innerHTML = html)
      .catch(err => {
        console.error(err);
        el.innerHTML = '';
      });
  });
});
