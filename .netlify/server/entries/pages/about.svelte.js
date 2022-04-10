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
  default: () => About
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e4abd81b = require("../../chunks/index-e4abd81b.js");
const About = (0, import_index_e4abd81b.c)(($$result, $$props, $$bindings, slots) => {
  return `<p class="${"text-center text-2xl mt-10"}" style="${"font-family: 'Shadows Into Light', cursive;"}">This very simple website is built with Sveltekit and Tailwind CSS for learning (and fun) purposes. 

</p>



<p class="${"text-center text-2xl mt-5"}" style="${"font-family: 'Shadows Into Light', cursive;"}">You can (and should, the comics are amazing) access the XKCD official website <a href="${"https://xkcd.com/"}" target="${"_blank"}">here</a>. The comics on this website are extracted from the <a href="${"https://xkcd.com/json.html"}" target="${"_blank"}">XKCD API</a>.

</p>`;
});
