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
  get: () => get
});
module.exports = __toCommonJS(stdin_exports);
async function get({ params }) {
  const comic = params.comic;
  const urlPrefix = `https://xkcd.com/`;
  const urlSuffix = `info.0.json`;
  try {
    const resNumComic = await fetch(urlPrefix + comic + "/" + urlSuffix);
    const jsonNumComic = await resNumComic.json();
    const numComic = {
      title: jsonNumComic.title,
      num: jsonNumComic.num,
      img: jsonNumComic.img
    };
    return {
      status: 200,
      body: numComic
    };
  } catch {
    return {
      status: 500
    };
  }
}
