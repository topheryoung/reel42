import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_D8TWmgWf.mjs';
import 'kleur/colors';
import { g as getEntry, f as findIndex, b as buildDisplayId } from '../../chunks/displayId_ZqwuUv2c.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_rKSIVEKf.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CHdTI61d.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Reel42 | ${title}`, "data-astro-cid-d2w6uk6e": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="detail" data-astro-cid-d2w6uk6e> <nav class="breadcrumb" data-astro-cid-d2w6uk6e> <a href="/" data-astro-prefetch data-astro-cid-d2w6uk6e>← Mixtapes</a> <span class="sep" data-astro-cid-d2w6uk6e>/</span> <span class="current" data-astro-cid-d2w6uk6e>${title}</span> </nav> <section class="hero" data-astro-cid-d2w6uk6e> <div class="cover-frame" data-astro-cid-d2w6uk6e> ${renderComponent($$result2, "Image", $$Image, { "src": cover.default, "alt": title, "class": "cover", "loading": "eager", "data-astro-cid-d2w6uk6e": true })} ${renderComponent($$result2, "Image", $$Image, { "src": cover.retro, "alt": title, "class": "retro-cover", "loading": "eager", "data-astro-cid-d2w6uk6e": true })} </div> <div class="meta" data-astro-cid-d2w6uk6e> <div class="eyebrow" data-astro-cid-d2w6uk6e>${displayId}</div> <h1 class="title" data-astro-cid-d2w6uk6e>${title}</h1> <dl class="info" data-astro-cid-d2w6uk6e> <dt data-astro-cid-d2w6uk6e>Year</dt><dd data-astro-cid-d2w6uk6e>${year}</dd> <dt data-astro-cid-d2w6uk6e>Genre</dt><dd data-astro-cid-d2w6uk6e>${genre.join(", ")}</dd> <!-- <dt>Tracks</dt><dd>{tracks.length}</dd>
          <dt>Runtime</dt><dd>—</dd> --> </dl> <section${addAttribute(["tracklist"], "class:list")} data-astro-cid-d2w6uk6e> <div class="side" data-astro-cid-d2w6uk6e> <div class="side-label" data-astro-cid-d2w6uk6e>Tracklist</div> <ol data-astro-cid-d2w6uk6e> ${tracks.map((t, i) => renderTemplate`<li data-astro-cid-d2w6uk6e> <span class="num" data-astro-cid-d2w6uk6e>${String(i + 1).padStart(2, "0")}</span> <span class="track" data-astro-cid-d2w6uk6e> <strong data-astro-cid-d2w6uk6e>${t.title}</strong> ${t.artist && renderTemplate`<span class="artist" data-astro-cid-d2w6uk6e> — ${t.artist}</span>`} </span> </li>`)} </ol> </div> </section> <div class="listen-label" data-astro-cid-d2w6uk6e>Listen</div> <div class="listen" data-astro-cid-d2w6uk6e> ${href.apple && renderTemplate`<a${addAttribute(href.apple, "href")} class="listen-btn" target="_blank" rel="noopener" data-astro-cid-d2w6uk6e>
Apple Music
</a>`} ${href.spotify && renderTemplate`<a${addAttribute(href.spotify, "href")} class="listen-btn" target="_blank" rel="noopener" data-astro-cid-d2w6uk6e>
Spotify
</a>`} ${href.youtube && renderTemplate`<a${addAttribute(href.youtube, "href")} class="listen-btn" target="_blank" rel="noopener" data-astro-cid-d2w6uk6e>
YouTube
</a>`} </div> </div> </section> <!-- <Filmstrip currentId={id} /> --> </main> ` })} `;
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
