const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-8a0843e3.js","js":["start-8a0843e3.js","chunks/index-40f0526c.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "api/random",
				pattern: /^\/api\/random\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/random.js'))
			},
			{
				type: 'endpoint',
				id: "api/last",
				pattern: /^\/api\/last\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/last.js'))
			},
			{
				type: 'endpoint',
				id: "api/[comic]",
				pattern: /^\/api\/([^/]+?)\/?$/,
				names: ["comic"],
				types: [null],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/_comic_.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
