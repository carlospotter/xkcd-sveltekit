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
async function get() {
  const urlPrefix = `https://xkcd.com/`;
  const urlSuffix = `info.0.json`;
  try {
    const resLastComic = await fetch(urlPrefix + urlSuffix);
    const jsonLastComic = await resLastComic.json();
    const lastComic = jsonLastComic.num;
    const randomIndex = Math.floor(Math.random() * lastComic);
    const resRandomComic = await fetch(urlPrefix + randomIndex + `/` + urlSuffix);
    const jsonRandomComic = await resRandomComic.json();
    const randomComic = {
      title: jsonRandomComic.title,
      num: jsonRandomComic.num,
      img: jsonRandomComic.img
    };
    return {
      status: 200,
      body: randomComic
    };
  } catch {
    return {
      status: 500
    };
  }
}
