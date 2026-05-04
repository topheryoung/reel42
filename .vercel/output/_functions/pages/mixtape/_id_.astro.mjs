import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_D8TWmgWf.mjs';
import 'kleur/colors';
import { g as getEntry, r as renderEntry, f as findIndex, b as buildDisplayId } from '../../chunks/displayId_Bz8tNYz8.mjs';
import { $ as $$Picture } from '../../chunks/_astro_assets_CPlONmn1.mjs';
import { $ as $$Layout } from '../../chunks/Layout_KMIK8ZNh.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

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
  const { Content } = await renderEntry(mixtape);
  const entryIndex = await findIndex(id);
  const { title, cover, genre, href, date } = mixtape.data;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Reel42 | ${title}`, "`": true, "data-astro-cid-d2w6uk6e": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mixtape-container" data-astro-cid-d2w6uk6e> <section class="mixtape-cover" data-astro-cid-d2w6uk6e> ${renderComponent($$result2, "Picture", $$Picture, { "src": cover.default, "alt": title, "class": "cover-image", "widths": [480, 720, 960, 1200], "sizes": "(max-width: 811px) 100vw, 50vw", "formats": ["avif", "webp"], "quality": 80, "loading": "eager", "fetchpriority": "high", "decoding": "async", "data-astro-cid-d2w6uk6e": true })} </section> <section class="mixtape-details" data-astro-cid-d2w6uk6e> <a href="/" class="back-link" data-astro-cid-d2w6uk6e>back</a> <h1 data-astro-cid-d2w6uk6e>${title}</h1> <div data-astro-cid-d2w6uk6e> <h3 class="mixtape-id" data-astro-cid-d2w6uk6e>${buildDisplayId(date, title, entryIndex)}</h3> <h3 class="mixtape-info" data-astro-cid-d2w6uk6e>${genre.join(", ")}</h3> </div> <div class="md-content" data-astro-cid-d2w6uk6e> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-d2w6uk6e": true })} </div> <div class="listen-btn-container" data-astro-cid-d2w6uk6e> ${href.apple && renderTemplate`<a${addAttribute(href.apple, "href")} class="listen-btn" target="_blank" data-astro-cid-d2w6uk6e>
Listen on Apple Music
</a>`} ${href.youtube && renderTemplate`<a${addAttribute(href.youtube, "href")} class="listen-btn" target="_blank" data-astro-cid-d2w6uk6e>
Listen on Youtube
</a>`} ${href.spotify && renderTemplate`<a${addAttribute(href.spotify, "href")} class="listen-btn" target="_blank" data-astro-cid-d2w6uk6e>
Listen on Spotify
</a>`} </div> </section> </main> ` })} `;
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
