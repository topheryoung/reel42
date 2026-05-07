import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BDohZQyH.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_P2Uc3DSg.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Reel42 | About", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-kh7btl4r> <h1 data-astro-cid-kh7btl4r>
About Reel<span style="color: var(--tertiary)" data-astro-cid-kh7btl4r>4</span><span style="color: var(--primary)" data-astro-cid-kh7btl4r>2</span> </h1> <hr data-astro-cid-kh7btl4r> <div class="content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
Reel42 is an experimental, creative playground made for the sole purpose
        of exploring the collision between two of my favorite hobbies: music and
        art. This idea was born out of my nostalgia of burning CDs back before
        streaming services took over. It was a way for me to grow my musical
        tastes and share them with people that shared my love of music.
</p> <p data-astro-cid-kh7btl4r>
The idea is quite simple: build a playlist and create album art for it.
        I do adhere to some parameters to keep things interesting and add
        cohesion to the project. Mixtapes should be able to be pressed on a
        single LP vinyl record (~ 45 minutes) and End of Year (EOY) loosies, a
        cheeky way of refering to songs, are capped at 9 tracks mainly to keep
        the cover collage aethetically pleasing. Mixtapes tend to have a
        specific genre, theme, or narrative but they aren't required to. There
        is an attempt to find smaller, more independent artists to add in but
        when inspiration strikes, well-known songs/bands make an appearance.
</p> <p data-astro-cid-kh7btl4r>
The artwork is all done by me. I have always had a passion for album art
        and consider it to be the genesis of my interest in art and graphic
        design. Storm Thorgerson (and Hipgnosis) is/was a massive influence and
        should be considered the GOAT. I try to create the album artwork
        post-mixtape creation but sometimes an image or design will inspire and
        will dictate the music of the underlying mixtape.
</p> <p data-astro-cid-kh7btl4r>
Disclaimer: this site is purely for personal artistic expression. Reel42
        doesn&apos;t claim ownership of the music or any mixtape organization.
        No items are for sale, and no data is being harvested. However, the
        artwork is made by me, so please be cool and don&apos;t steal it.
</p> <p data-astro-cid-kh7btl4r>
If you&apos;ve made it this far, I appreciate you sticking around and
        sharing these passions with me. Keep on rockin&apos;.
</p> </div> </main> ` })} `;
}, "/Users/christopheryoung/Development/reel42/src/pages/about.astro", void 0);

const $$file = "/Users/christopheryoung/Development/reel42/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
