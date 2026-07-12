const root = document.documentElement;
const themeToggle = document.querySelector('[data-theme-toggle]');
const menuButton = document.querySelector('[data-menu-button]');
const nav = document.querySelector('[data-nav]');
const menuNav = document.querySelector('#site-nav');
const copyStatus = document.querySelector('[data-copy-status]');

function preferredTheme() {
  const saved = localStorage.getItem('nycu-life-theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function setTheme(theme, persist = true) {
  root.dataset.theme = theme;
  const brandLogo = document.querySelector('[data-brand-logo]');
  const footerLogo = document.querySelector('[data-footer-logo]');
  const assetPrefix = root.dataset.assetPrefix || '';
  if (brandLogo) brandLogo.src = theme === 'dark'
    ? `${assetPrefix}assets/brand/lockup-horizontal-white.svg`
    : `${assetPrefix}assets/brand/lockup-horizontal-blue.svg`;
  if (footerLogo) footerLogo.src = theme === 'dark'
    ? `${assetPrefix}assets/brand/lockup-horizontal-white.svg`
    : `${assetPrefix}assets/brand/lockup-horizontal-blue.svg`;
  document.querySelectorAll('[data-theme-logo]').forEach((logo) => {
    const nextSource = theme === 'dark' ? logo.dataset.darkSrc : logo.dataset.lightSrc;
    if (nextSource) logo.src = nextSource;
  });
  themeToggle?.setAttribute('aria-pressed', String(theme === 'dark'));
  themeToggle?.setAttribute('aria-label', theme === 'dark' ? '切換淺色模式' : '切換深色模式');
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#000000' : '#0922E7');
  if (persist) localStorage.setItem('nycu-life-theme', theme);
}

setTheme(preferredTheme(), false);

themeToggle?.addEventListener('click', () => {
  setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
});

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  if (menuNav) menuNav.dataset.open = String(!open);
});

menuNav?.addEventListener('click', (event) => {
  if (!event.target.closest('a')) return;
  menuButton?.setAttribute('aria-expanded', 'false');
  menuNav.dataset.open = 'false';
});

document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const value = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(value);
      if (copyStatus) copyStatus.textContent = `已複製 ${value}`;
      if (button.matches('.install-command button')) {
        const original = button.textContent;
        button.textContent = '已複製';
        window.setTimeout(() => { button.textContent = original; }, 1600);
      }
    } catch {
      if (copyStatus) copyStatus.textContent = `請手動複製：${value}`;
    }
  });
});

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('[data-nav] a[href^="#"]')];

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => {
      const active = link.getAttribute('href') === `#${visible.target.id}`;
      if (active) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-20% 0px -65%', threshold: [0, 0.2, 0.5] });
  sections.forEach((section) => observer.observe(section));
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();
