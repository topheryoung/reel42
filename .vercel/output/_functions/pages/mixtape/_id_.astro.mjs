import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent, e as renderScript, d as createAstro } from '../../chunks/astro/server_BDohZQyH.mjs';
import 'kleur/colors';
import { g as getCollection, b as buildDisplayId, a as getEntry, f as findIndex } from '../../chunks/displayId_ClqQfej1.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_3vkGUGii.mjs';
import { $ as $$Layout } from '../../chunks/Layout_P2Uc3DSg.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Filmstrip = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Filmstrip;
  const { currentId } = Astro2.props;
  const entries = await getCollection("mixtapes");
  entries.sort((a, b) => a.data.date - b.data.date);
  const tapes = entries.map((entry, i) => ({
    id: entry.id,
    title: entry.data.title,
    cover: entry.data.cover.default,
    displayId: buildDisplayId(entry.data.date, entry.data.title, i + 1),
    index: i + 1
  }));
  const total = tapes.length;
  const activeIdx = tapes.findIndex((t) => t.id === currentId);
  const prev = tapes[(activeIdx - 1 + total) % total];
  const next = tapes[(activeIdx + 1) % total];
  return renderTemplate`${maybeRenderHead()}<section class="filmstrip"${addAttribute(`/mixtape/${prev.id}`, "data-prev-href")}${addAttribute(`/mixtape/${next.id}`, "data-next-href")} data-astro-cid-5uazxlrs> <header class="filmstrip-header" data-astro-cid-5uazxlrs> <span class="filmstrip-caption" data-astro-cid-5uazxlrs>Reel · ${total} frames · scroll →</span> <div class="filmstrip-nav" data-astro-cid-5uazxlrs> <a${addAttribute(`/mixtape/${prev.id}`, "href")} class="nav-btn" data-astro-prefetch data-astro-cid-5uazxlrs>
← ${prev.displayId} </a> <a${addAttribute(`/mixtape/${next.id}`, "href")} class="nav-btn" data-astro-prefetch data-astro-cid-5uazxlrs> ${next.displayId} →
</a> </div> </header> <div class="filmstrip-track" data-astro-cid-5uazxlrs> <div class="filmstrip-row" data-astro-cid-5uazxlrs> ${tapes.map((t) => renderTemplate`<a${addAttribute(`/mixtape/${t.id}`, "href")}${addAttribute(["thumb", t.id === currentId && "is-active"], "class:list")}${addAttribute(t.id, "data-id")} data-astro-prefetch${addAttribute(`${t.title} \u2014 ${t.displayId}`, "aria-label")} data-astro-cid-5uazxlrs> ${renderComponent($$result, "Image", $$Image, { "src": t.cover, "alt": t.title, "width": 176, "height": 176, "loading": "lazy", "data-astro-cid-5uazxlrs": true })} <span class="thumb-label" data-astro-cid-5uazxlrs> ${String(t.index).padStart(3, "0")} </span> </a>`)} </div> </div> </section>  ${renderScript($$result, "/Users/christopheryoung/Development/reel42/src/components/Filmstrip.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/christopheryoung/Development/reel42/src/components/Filmstrip.astro", void 0);

function parseTracks(body) {
  return body.split("\n").map((l) => l.trim()).filter((l) => l.startsWith("- ")).map((l) => {
    const line = l.slice(2).trim();
    const sep = line.indexOf(" - ");
    if (sep === -1) return { artist: "", title: line };
    return { artist: line.slice(0, sep), title: line.slice(sep + 3) };
  });
}

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  if (id === void 0) {
    return Astro2.redirect("/404");
  }
  const mixtape = await getEntry("mixtapes", id);
  if (mixtape === void 0) {
    return Astro2.redirect("/404");
  }
  const { title, cover, genre, href, date } = mixtape.data;
  const entryIndex = await findIndex(id);
  const displayId = buildDisplayId(date, title, entryIndex);
  const year = 2e3 + Math.floor(date / 100);
  const tracks = parseTracks(mixtape.body ?? "");
  const half = Math.ceil(tracks.length / 2);
  const sideA = tracks.slice(0, half);
  const sideB = tracks.slice(half);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Reel42 | ${title}`, "data-astro-cid-d2w6uk6e": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="detail" data-astro-cid-d2w6uk6e> <nav class="breadcrumb" data-astro-cid-d2w6uk6e> <a href="/" data-astro-prefetch data-astro-cid-d2w6uk6e>← Index</a> <span class="sep" data-astro-cid-d2w6uk6e>/</span> <span class="current" data-astro-cid-d2w6uk6e>${displayId}</span> </nav> <section class="hero" data-astro-cid-d2w6uk6e> <div class="cover-frame" data-astro-cid-d2w6uk6e> ${renderComponent($$result2, "Image", $$Image, { "src": cover.default, "alt": title, "class": "cover-image", "loading": "eager", "data-astro-cid-d2w6uk6e": true })} </div> <div class="meta" data-astro-cid-d2w6uk6e> <div class="eyebrow" data-astro-cid-d2w6uk6e>Frame · ${displayId}</div> <h1 class="title" data-astro-cid-d2w6uk6e>${title}</h1> <dl class="info" data-astro-cid-d2w6uk6e> <dt data-astro-cid-d2w6uk6e>Year</dt><dd data-astro-cid-d2w6uk6e>${year}</dd> <dt data-astro-cid-d2w6uk6e>Genre</dt><dd data-astro-cid-d2w6uk6e>${genre.join(", ")}</dd> <dt data-astro-cid-d2w6uk6e>Tracks</dt><dd data-astro-cid-d2w6uk6e>${tracks.length}</dd> <dt data-astro-cid-d2w6uk6e>Runtime</dt><dd data-astro-cid-d2w6uk6e>—</dd> </dl> <div class="listen" data-astro-cid-d2w6uk6e> ${href.apple && renderTemplate`<a${addAttribute(href.apple, "href")} class="listen-btn" target="_blank" rel="noopener" data-astro-cid-d2w6uk6e>
Apple Music
</a>`} ${href.spotify && renderTemplate`<a${addAttribute(href.spotify, "href")} class="listen-btn" target="_blank" rel="noopener" data-astro-cid-d2w6uk6e>
Spotify
</a>`} ${href.youtube && renderTemplate`<a${addAttribute(href.youtube, "href")} class="listen-btn" target="_blank" rel="noopener" data-astro-cid-d2w6uk6e>
YouTube
</a>`} </div> </div> </section> <section${addAttribute(["tracklist", sideB.length === 0 && "single"], "class:list")} data-astro-cid-d2w6uk6e> <div class="side" data-astro-cid-d2w6uk6e> <div class="side-label" data-astro-cid-d2w6uk6e>Side A — Tracklist</div> <ol data-astro-cid-d2w6uk6e> ${sideA.map((t, i) => renderTemplate`<li data-astro-cid-d2w6uk6e> <span class="num" data-astro-cid-d2w6uk6e>${String(i + 1).padStart(2, "0")}</span> <span class="track" data-astro-cid-d2w6uk6e> <strong data-astro-cid-d2w6uk6e>${t.title}</strong> ${t.artist && renderTemplate`<span class="artist" data-astro-cid-d2w6uk6e> — ${t.artist}</span>`} </span> </li>`)} </ol> </div> ${sideB.length > 0 && renderTemplate`<div class="side" data-astro-cid-d2w6uk6e> <div class="side-label" data-astro-cid-d2w6uk6e>Side B — Tracklist</div> <ol data-astro-cid-d2w6uk6e> ${sideB.map((t, i) => renderTemplate`<li data-astro-cid-d2w6uk6e> <span class="num" data-astro-cid-d2w6uk6e>${String(half + i + 1).padStart(2, "0")}</span> <span class="track" data-astro-cid-d2w6uk6e> <strong data-astro-cid-d2w6uk6e>${t.title}</strong> ${t.artist && renderTemplate`<span class="artist" data-astro-cid-d2w6uk6e> — ${t.artist}</span>`} </span> </li>`)} </ol> </div>`} </section> ${renderComponent($$result2, "Filmstrip", $$Filmstrip, { "currentId": id, "data-astro-cid-d2w6uk6e": true })} </main> ` })} `;
}, "/Users/christopheryoung/Development/reel42/src/pages/mixtape/[id].astro", void 0);

const $$file = "/Users/christopheryoung/Development/reel42/src/pages/mixtape/[id].astro";
const $$url = "/mixtape/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
