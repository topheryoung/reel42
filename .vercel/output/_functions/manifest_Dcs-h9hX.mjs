import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_COMm-S-k.mjs';
import 'es-module-lexer';
import { f as decodeKey } from './chunks/astro/server_BDohZQyH.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/christopheryoung/Development/reel42/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.V2R8AmkL.js"}],"styles":[{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;object-fit:var(--fit);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.V2R8AmkL.js"}],"styles":[{"type":"inline","content":"main[data-astro-cid-kh7btl4r]{margin:64px auto;padding:1rem;font-size:16px;line-height:1.6;display:grid;grid-template-rows:auto auto 1fr;justify-items:center;gap:32px}h1[data-astro-cid-kh7btl4r]{text-transform:uppercase;font-size:clamp(8vw,13vw,20vw);color:var(--header-text);margin:0;line-height:1.2;text-align:center;width:100%;overflow-wrap:break-word;word-wrap:break-word}hr[data-astro-cid-kh7btl4r]{width:180px;border:none;border-top:1px solid var(--card-accent);margin:0}.content[data-astro-cid-kh7btl4r]{display:flex;flex-direction:column;align-items:center;gap:24px}.content[data-astro-cid-kh7btl4r] p[data-astro-cid-kh7btl4r]{max-width:700px;margin:0;color:var(--primary-text)}\n"},{"type":"external","src":"/_astro/about.DPvHIHHZ.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.V2R8AmkL.js"}],"styles":[{"type":"external","src":"/_astro/about.DPvHIHHZ.css"},{"type":"external","src":"/_astro/_id_.B11uY2HY.css"},{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;object-fit:var(--fit);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"route":"/mixtape/[id]","isIndex":false,"type":"page","pattern":"^\\/mixtape\\/([^/]+?)\\/?$","segments":[[{"content":"mixtape","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/mixtape/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.V2R8AmkL.js"}],"styles":[{"type":"external","src":"/_astro/about.DPvHIHHZ.css"},{"type":"inline","content":"a[data-astro-cid-dohjnao5]{text-decoration:none;color:transparent}.cover-frame[data-astro-cid-dohjnao5]{position:relative;background:var(--secondary-text);display:flex;aspect-ratio:1}.card-title[data-astro-cid-dohjnao5]{color:var(--primary-text);font-size:18px;margin-top:6px;margin-bottom:0;line-height:22px}.card-details[data-astro-cid-dohjnao5]{display:flex;color:var(--secondary-text);justify-content:space-between;align-items:flex-end;margin:0 auto 12px}.card-details[data-astro-cid-dohjnao5] h3[data-astro-cid-dohjnao5]{margin:0;font-weight:400;font-size:13px}.card-id[data-astro-cid-dohjnao5]{display:none;position:absolute;top:10px;left:16px;color:var(--primary-text);text-shadow:0px 0px 2px var(--bg);font-family:var(--mono);font-size:12px}.cover[data-astro-cid-dohjnao5],.retro-cover[data-astro-cid-dohjnao5]{width:100%;height:auto;aspect-ratio:1;color:transparent}.retro-cover[data-astro-cid-dohjnao5]{display:none}@media (max-width: 480px){.card-details[data-astro-cid-dohjnao5]{flex-direction:column-reverse}}main[data-astro-cid-j7pv25f6]{margin:1rem auto;padding:16px 32px;color:#fff;font-size:20px;line-height:1.6}.card-grid[data-astro-cid-j7pv25f6]{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));column-gap:24px;row-gap:40px}@media (max-width: 1200px){.card-grid[data-astro-cid-j7pv25f6]{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (max-width: 811px){.card-grid[data-astro-cid-j7pv25f6]{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (max-width: 480px){main[data-astro-cid-j7pv25f6]{margin:8px auto}.card-grid[data-astro-cid-j7pv25f6]{grid-template-columns:1fr}}\n[data-astro-image]{width:100%;height:auto;object-fit:var(--fit);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/christopheryoung/Development/reel42/src/components/Filmstrip.astro",{"propagation":"in-tree","containsHead":false}],["/Users/christopheryoung/Development/reel42/src/pages/mixtape/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/mixtape/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/christopheryoung/Development/reel42/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/christopheryoung/Development/reel42/src/utils/displayId.ts",{"propagation":"in-tree","containsHead":false}],["/Users/christopheryoung/Development/reel42/src/pages/about.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/mixtape/[id]@_@astro":"pages/mixtape/_id_.astro.mjs","/Users/christopheryoung/Development/reel42/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CZYjlAr5.mjs","/Users/christopheryoung/Development/reel42/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_CzcvEwnO.mjs","\u0000@astrojs-manifest":"manifest_Dcs-h9hX.mjs","/Users/christopheryoung/Development/reel42/.astro/content-assets.mjs":"chunks/content-assets_Drf-Hazj.mjs","/Users/christopheryoung/Development/reel42/src/components/Filmstrip.astro?astro&type=script&index=0&lang.ts":"_astro/Filmstrip.astro_astro_type_script_index_0_lang.BWDUPbDE.js","/Users/christopheryoung/Development/reel42/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.BaXdWEvT.js","astro:scripts/page.js":"_astro/page.V2R8AmkL.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/christopheryoung/Development/reel42/src/components/Filmstrip.astro?astro&type=script&index=0&lang.ts","const i=document.querySelector(\".filmstrip\");if(i){const n=i.querySelector(\".filmstrip-track\"),o=i.querySelector(\".thumb.is-active\");if(n&&o){const e=n.clientWidth,t=o.clientWidth;n.scrollTo({left:o.offsetLeft-e/2+t/2,behavior:\"instant\"})}const r=i.dataset.prevHref,c=i.dataset.nextHref,a=e=>{const t=e.target;t&&(t.tagName===\"INPUT\"||t.tagName===\"TEXTAREA\"||t.isContentEditable)||(e.key===\"ArrowLeft\"&&r&&(window.location.href=r),e.key===\"ArrowRight\"&&c&&(window.location.href=c))};window.addEventListener(\"keydown\",a)}"],["/Users/christopheryoung/Development/reel42/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts","var l=\"@vercel/analytics\",f=\"1.4.1\",v=()=>{window.va||(window.va=function(...r){(window.vaq=window.vaq||[]).push(r)})};function d(){return typeof window<\"u\"}function u(){try{const e=\"production\"}catch{}return\"production\"}function w(e=\"auto\"){if(e===\"auto\"){window.vam=u();return}window.vam=e}function m(){return(d()?window.vam:u())||\"production\"}function c(){return m()===\"development\"}function p(e,r){if(!e||!r)return e;let n=e;try{const t=Object.entries(r);for(const[a,o]of t)if(!Array.isArray(o)){const i=s(o);i.test(n)&&(n=n.replace(i,`/[${a}]`))}for(const[a,o]of t)if(Array.isArray(o)){const i=s(o.join(\"/\"));i.test(n)&&(n=n.replace(i,`/[...${a}]`))}return n}catch{return e}}function s(e){return new RegExp(`/${y(e)}(?=[/?#]|$)`)}function y(e){return e.replace(/[.*+?^${}()|[\\]\\\\]/g,\"\\\\$&\")}var b=\"https://va.vercel-scripts.com/v1/script.debug.js\",g=\"/_vercel/insights/script.js\";function h(e={debug:!0}){var r;if(!d())return;w(e.mode),v(),e.beforeSend&&((r=window.va)==null||r.call(window,\"beforeSend\",e.beforeSend));const n=e.scriptSrc||(c()?b:g);if(document.head.querySelector(`script[src*=\"${n}\"]`))return;const t=document.createElement(\"script\");t.src=n,t.defer=!0,t.dataset.sdkn=l+(e.framework?`/${e.framework}`:\"\"),t.dataset.sdkv=f,e.disableAutoTrack&&(t.dataset.disableAutoTrack=\"1\"),e.endpoint&&(t.dataset.endpoint=e.endpoint),e.dsn&&(t.dataset.dsn=e.dsn),t.onerror=()=>{const a=c()?\"Please check if any ad blockers are enabled and try again.\":\"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.\";console.log(`[Vercel Web Analytics] Failed to load script from ${n}. ${a}`)},c()&&e.debug===!1&&(t.dataset.debug=\"false\"),document.head.appendChild(t)}function k({route:e,path:r}){var n;(n=window.va)==null||n.call(window,\"pageview\",{route:e,path:r})}customElements.define(\"vercel-analytics\",class extends HTMLElement{constructor(){super();try{const r=JSON.parse(this.dataset.props??\"{}\"),n=JSON.parse(this.dataset.params??\"{}\");h({...r,disableAutoTrack:!0,framework:\"astro\",beforeSend:window.webAnalyticsBeforeSend});const t=this.dataset.pathname;k({route:p(t??\"\",n),path:t})}catch(r){throw new Error(`Failed to parse WebAnalytics properties: ${r}`)}}});"]],"assets":["/_astro/space-mono-vietnamese-400-normal.BheU2kqM.woff2","/_astro/space-mono-latin-ext-400-normal.Bp3uBQji.woff2","/_astro/space-mono-latin-400-normal.DqLRVAG3.woff2","/_astro/space-mono-vietnamese-400-normal.DhEK1QBQ.woff","/_astro/space-mono-latin-ext-400-normal.dAQ_Ruki.woff","/_astro/space-mono-latin-400-normal.C13IqrZg.woff","/_astro/briefcase_tacos.BiOVrcGA.jpg","/_astro/gloom.C3god3OW.jpg","/_astro/atmos.rl2nAhqu.jpg","/_astro/lights_over_anderson.D5VVUd1T.jpg","/_astro/merlot.g3K-0xu4.jpg","/_astro/2023.CeFvHB4G.jpg","/_astro/playa_fortuna.p9P-vevB.jpg","/_astro/2024.BDaaEAh_.jpg","/_astro/2021.CwhKa08s.jpg","/_astro/2022.BHEcGcKj.jpg","/_astro/2025.Cq--cDD9.jpg","/_astro/spring_st_grow_room.vUV2xBdK.jpg","/_astro/stalled_at_a_crossroad.BpLZdmDk.jpg","/_astro/river_lethe.D9bL_iuM.jpg","/_astro/lw843.7C0dyWAg.jpg","/_astro/2020.ByEhZVmP.jpg","/_astro/tempests_of_titan.CRymL_r2.jpg","/_astro/pitt_wentworth.CieRrEXZ.jpg","/_astro/2024.DAoe7zAa.png","/_astro/spring_st_grow_room.Baouo5va.png","/_astro/train_to_hakone.DtZkiGDx.jpg","/_astro/two_pink_transformers.jpFhySu6.jpg","/_astro/pitt_wentworth.BeZFfh2w.png","/_astro/_id_.B11uY2HY.css","/_astro/about.DPvHIHHZ.css","/favicon.svg","/og-image.png","/_astro/page.V2R8AmkL.js","/fonts/hanken-grotesk-variable.woff2","/_astro/page.V2R8AmkL.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"odkqjgjhiZj2YkxsyL8TzSZDr8quxxPJ57lCb8EBzAo="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
