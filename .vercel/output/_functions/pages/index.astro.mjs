import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, b as createAstro, F as Fragment } from '../chunks/astro/server_D8TWmgWf.mjs';
import 'kleur/colors';
import { a as getCollection, b as buildDisplayId } from '../chunks/displayId_Bz8tNYz8.mjs';
import { $ as $$Layout } from '../chunks/Layout_KMIK8ZNh.mjs';
import { $ as $$Picture } from '../chunks/_astro_assets_CPlONmn1.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const {
    title,
    id,
    displayID,
    genre,
    cover,
    alt,
    loading = "lazy",
    fetchpriority
  } = Astro2.props;
  const formatGenres = (genres) => genres.join(", ");
  return renderTemplate`${maybeRenderHead()}<div class="card-item" data-astro-cid-dohjnao5> <a${addAttribute(`/mixtape/${id}`, "href")} data-astro-prefetch data-astro-cid-dohjnao5> <h2 class="card-title" data-astro-cid-dohjnao5> ${title} </h2> <div class="card-details" data-astro-cid-dohjnao5> <h3 data-astro-cid-dohjnao5>${formatGenres(genre)}</h3> <h3 class="card-id" data-astro-cid-dohjnao5>${displayID}</h3> </div> <div class="cover-art" data-astro-cid-dohjnao5> <div class="cover-frame" data-astro-cid-dohjnao5> ${renderComponent($$result, "Picture", $$Picture, { "src": cover.default, "alt": alt, "class": "cover", "widths": [240, 360, 540, 720, 900], "sizes": "(max-width: 480px) 100vw, (max-width: 811px) 50vw, 33vw", "formats": ["avif", "webp"], "quality": 75, "loading": loading, "decoding": "async", ...fetchpriority && { fetchpriority }, "data-astro-cid-dohjnao5": true })} </div> </div> </a> </div> `;
}, "/Users/christopheryoung/Development/reel42/src/components/Card.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const fetchedMixtapes = await getCollection("mixtapes");
  const mixtapes = fetchedMixtapes.sort((a, b) => b.data.date - a.data.date);
  const EAGER_COUNT = 3;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Reel42", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <section role="list" class="card-grid" data-astro-cid-j7pv25f6> ${mixtapes.map((mix, index) => {
    const inverseIndex = mixtapes.length - index;
    const loadingMode = index < EAGER_COUNT ? "eager" : "lazy";
    const fetchPriority = index < EAGER_COUNT ? "high" : void 0;
    return renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "href": mix.data.href, "title": mix.data.title, "genre": mix.data.genre, "displayID": buildDisplayId(
      mix.data.date,
      mix.data.title,
      inverseIndex
    ), "cover": mix.data.cover, "alt": mix.data.title, "id": mix.id, "loading": loadingMode, "fetchpriority": fetchPriority, "data-astro-cid-j7pv25f6": true })} ` })}`;
  })} </section> </main> ` })} `;
}, "/Users/christopheryoung/Development/reel42/src/pages/index.astro", void 0);

const $$file = "/Users/christopheryoung/Development/reel42/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
