var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e4abd81b = require("../../chunks/index-e4abd81b.js");
const ComicCard = (0, import_index_e4abd81b.c)(($$result, $$props, $$bindings, slots) => {
  let { xkcdComic } = $$props;
  if ($$props.xkcdComic === void 0 && $$bindings.xkcdComic && xkcdComic !== void 0)
    $$bindings.xkcdComic(xkcdComic);
  return `




<div class="${"mt-5"}"><p class="${"text-3xl text-center"}" style="${"font-family: 'Shadows Into Light', cursive;"}">${(0, import_index_e4abd81b.e)(xkcdComic.num)} - ${(0, import_index_e4abd81b.e)(xkcdComic.title)}</p>

    <img class="${"mx-auto object-contain my-5"}"${(0, import_index_e4abd81b.a)("src", xkcdComic.img, 0)} alt="${"comic"}">

    <p class="${"text-sm text-center mt-5"}" style="${"font-family: 'Shadows Into Light', cursive;"}">Source: <a href="${"https://xkcd.com/" + (0, import_index_e4abd81b.e)(xkcdComic.num)}" target="${"_blank"}">https://xkcd.com/${(0, import_index_e4abd81b.e)(xkcdComic.num)}</a></p></div>

`;
});
async function load({ fetch }) {
  const apiUrl = `api/last`;
  let comic = await fetch(apiUrl).then((res) => res.json());
  let lastComic = comic.num;
  return { props: { comic, lastComic } };
}
const Routes = (0, import_index_e4abd81b.c)(($$result, $$props, $$bindings, slots) => {
  let { comic } = $$props;
  let { lastComic } = $$props;
  if ($$props.comic === void 0 && $$bindings.comic && comic !== void 0)
    $$bindings.comic(comic);
  if ($$props.lastComic === void 0 && $$bindings.lastComic && lastComic !== void 0)
    $$bindings.lastComic(lastComic);
  return `






<div class="${"max-w-2xl mx-auto my-8 grid grid-cols-1 sm:hidden"}"><button class="${"w-20 mx-auto text-2xl border border-black rounded"}" style="${"font-family: 'Shadows Into Light', cursive;"}">Random
    </button></div>

<div class="${"max-w-2xl mx-auto my-8 grid grid-cols-4 sm:grid-cols-5"}"><button class="${"w-16 mx-auto text-2xl border border-black rounded"}" style="${"font-family: 'Shadows Into Light', cursive;"}">First
    </button>

    <button class="${"w-16 mx-auto text-2xl border border-black rounded"}" style="${"font-family: 'Shadows Into Light', cursive;"}">\u2190
    </button>

    <button class="${"w-20 mx-auto text-2xl border hidden sm:block border-black rounded"}" style="${"font-family: 'Shadows Into Light', cursive;"}">Random
    </button>

    <button class="${"w-16 mx-auto text-2xl border border-black rounded"}" style="${"font-family: 'Shadows Into Light', cursive;"}">\u2192
    </button>

    <button class="${"w-16 mx-auto text-2xl border border-black rounded"}" style="${"font-family: 'Shadows Into Light', cursive;"}">Last
    </button></div>

${(0, import_index_e4abd81b.v)(ComicCard, "ComicCard").$$render($$result, { xkcdComic: comic }, {}, {})}

`;
});
