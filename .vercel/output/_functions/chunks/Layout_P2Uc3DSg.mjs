import { c as createComponent, r as renderTemplate, a as renderComponent, e as renderScript, d as createAstro, m as maybeRenderHead, b as addAttribute, j as renderHead, k as renderSlot } from './astro/server_BDohZQyH.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';

const $$Astro$2 = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/Users/christopheryoung/Development/reel42/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/christopheryoung/Development/reel42/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a class="logo" href="/" data-astro-prefetch data-astro-cid-tvrurpns>
Reel<span class="fortyTwo" data-astro-cid-tvrurpns>042</span> </a> `;
}, "/Users/christopheryoung/Development/reel42/src/components/Logo.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Dark = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", `<button class="control-btn dark-mode-button" id="themeToggle">
dark <span class="keyboard-shortcut">(d)</span> </button> <script>
  const theme = (() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  })();

  const applyTheme = (theme) => {
    const element = document.documentElement;
    const button = document.getElementById('themeToggle');

    if (theme === 'dark') {
      element.classList.add('dark');
      button.classList.add('is-active');
    } else {
      element.classList.remove('dark');
      button.classList.remove('is-active');
    }

    localStorage.setItem('theme', theme);
  };

  applyTheme(theme);

  const handleToggleClick = () => {
    const newTheme = document.documentElement.classList.contains('dark')
      ? 'light'
      : 'dark';
    applyTheme(newTheme);
  };

  document
    .getElementById('themeToggle')
    .addEventListener('click', handleToggleClick);

  document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'd') {
      handleToggleClick();
    }
  });
<\/script>`])), maybeRenderHead());
}, "/Users/christopheryoung/Development/reel42/src/components/modes/Dark.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Mono = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<button class="control-btn mono-mode-button" id="monoToggle">
mono <span class="keyboard-shortcut">(m)</span> </button> <script>
  const applyMonoMode = (isMono) => {
    const element = document.documentElement;
    const button = document.getElementById('monoToggle');

    if (isMono) {
      element.classList.add('mono');
      button.classList.add('is-active');
    } else {
      element.classList.remove('mono');
      button.classList.remove('is-active');
    }

    localStorage.setItem('mono', isMono ? 'mono' : 'color');
  };

  const handleMonoToggle = () => {
    const isCurrentlyMono = document.documentElement.classList.contains('mono');
    applyMonoMode(!isCurrentlyMono);
  };

  const savedMono = localStorage.getItem('mono') === 'mono';
  applyMonoMode(savedMono);

  document
    .getElementById('monoToggle')
    .addEventListener('click', handleMonoToggle);

  document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'm') {
      handleMonoToggle();
    }
  });
<\/script>`])), maybeRenderHead());
}, "/Users/christopheryoung/Development/reel42/src/components/modes/Mono.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Retro = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<button class="control-btn retro-mode-button" id="retroToggle">
retro (r)
</button> <script>
  const applyRetroMode = (isRetroMode) => {
    const element = document.documentElement;
    const button = document.getElementById('retroToggle');

    if (isRetroMode) {
      element.classList.add('retro-mode');
      button.classList.add('is-active');
    } else {
      element.classList.remove('retro-mode');
      button.classList.remove('is-active');
    }

    localStorage.setItem('retro-mode', isRetroMode);
  };

  const handleRetroToggle = () => {
    const isCurrentlyRetroMode =
      document.documentElement.classList.contains('retro-mode');
    applyRetroMode(!isCurrentlyRetroMode);
  };

  const savedRetroMode = localStorage.getItem('retro-mode') === 'true';
  applyRetroMode(savedRetroMode);

  document
    .getElementById('retroToggle')
    .addEventListener('click', handleRetroToggle);

  document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'r') {
      handleRetroToggle();
    }
  });
<\/script>`])), maybeRenderHead());
}, "/Users/christopheryoung/Development/reel42/src/components/modes/Retro.astro", void 0);

const $$Astro$1 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const isAboutPage = Astro2.url.pathname === "/about";
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <div class="logo" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Logo", $$Logo, { "data-astro-cid-3ef6ksr2": true })} </div> <nav data-astro-cid-3ef6ksr2> <a href="/"${addAttribute(!isAboutPage ? "active" : "", "class")} data-astro-prefetch data-astro-cid-3ef6ksr2>
Mixtapes
</a> <a href="/about"${addAttribute(isAboutPage ? "active" : "", "class")} data-astro-prefetch data-astro-cid-3ef6ksr2>
About
</a> </nav> <div class="controls" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Dark", $$Dark, { "data-astro-cid-3ef6ksr2": true })} ${renderComponent($$result, "Mono", $$Mono, { "data-astro-cid-3ef6ksr2": true })} ${renderComponent($$result, "Retro", $$Retro, { "data-astro-cid-3ef6ksr2": true })} </div> </header>  `;
}, "/Users/christopheryoung/Development/reel42/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <div class="copyright" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>&copy;</p> <p style="color: var(--primary-text)" data-astro-cid-sz7xmlte>${currentYear}</p> </div> <div class="end-of-reel" data-astro-cid-sz7xmlte> <button class="control-btn" onclick="window.scrollTo({ top: 0, behavior: 'smooth' })" data-astro-cid-sz7xmlte>
Rewind Reel
</button> </div> <div class="colophon" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>Designed and Developed in BCN</p> <a style="color: var(--primary-text)" href="mailto:info@reel42.com" data-astro-cid-sz7xmlte>info@reel42.com</a> </div> </footer> `;
}, "/Users/christopheryoung/Development/reel42/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Reel42 is an experimental, creative playground exploring the intersection of music and art."><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preload" href="/fonts/hanken-grotesk-variable.woff2" as="font" type="font/woff2" crossorigin><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="keywords" content="mixtapes, curated playlists, album art, graphic design, vinyl, vinyl records"><meta name="author" content="Christopher Young | hellotopher.com"><meta name="robots" content="index, follow"><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description" content="Reel42 is an experimental, creative playground exploring the intersection of music and art."><meta property="og:url" content="https://reel42.com"><meta property="og:image" content="https://reel42.com/og-image.png"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description" content="Reel42 is an experimental, creative playground exploring the intersection of music and art."><meta name="twitter:image" content="https://reel42.com/og-image.png">${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "Analytics", $$Index, {})} </body></html>`;
}, "/Users/christopheryoung/Development/reel42/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
