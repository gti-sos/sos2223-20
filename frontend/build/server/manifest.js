const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.7b420b8b.js","imports":["_app/immutable/entry/start.7b420b8b.js","_app/immutable/chunks/index.e145b144.js","_app/immutable/chunks/singletons.2385f33f.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.303624fc.js","imports":["_app/immutable/entry/app.303624fc.js","_app/immutable/chunks/index.e145b144.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-3bba31e8.js'),
			() => import('./chunks/1-4bbe0aa0.js'),
			() => import('./chunks/2-a2eaab97.js'),
			() => import('./chunks/3-634cf5cb.js'),
			() => import('./chunks/4-9f1fb94e.js'),
			() => import('./chunks/5-da06b663.js'),
			() => import('./chunks/6-20b5c784.js'),
			() => import('./chunks/7-5957d6e5.js'),
			() => import('./chunks/8-bb051ee4.js'),
			() => import('./chunks/9-b5fc1c02.js'),
			() => import('./chunks/10-4b91897c.js'),
			() => import('./chunks/11-ab8fbed7.js'),
			() => import('./chunks/12-3ccf7686.js'),
			() => import('./chunks/13-ef2a074f.js'),
			() => import('./chunks/14-65a09261.js'),
			() => import('./chunks/15-481e9f43.js'),
			() => import('./chunks/16-df7e26a5.js'),
			() => import('./chunks/17-cc2fa959.js'),
			() => import('./chunks/18-8ace143a.js'),
			() => import('./chunks/19-c529a04f.js'),
			() => import('./chunks/20-ce0b06cc.js'),
			() => import('./chunks/21-09a8ccd8.js'),
			() => import('./chunks/22-f0d798d9.js'),
			() => import('./chunks/23-5e44b656.js'),
			() => import('./chunks/24-4e0ba3a8.js'),
			() => import('./chunks/25-dba9a634.js'),
			() => import('./chunks/26-a1ed6f94.js'),
			() => import('./chunks/27-f433d85e.js'),
			() => import('./chunks/28-4747d4a8.js'),
			() => import('./chunks/29-cd5a144d.js'),
			() => import('./chunks/30-863b0552.js'),
			() => import('./chunks/31-58fff341.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/analytics",
				pattern: /^\/analytics\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/api/v2/andalusian-campings",
				pattern: /^\/api\/v2\/andalusian-campings\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/api/v2/blood-donations",
				pattern: /^\/api\/v2\/blood-donations\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/api/v2/immovables",
				pattern: /^\/api\/v2\/immovables\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/integrations",
				pattern: /^\/integrations\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/integrations/lmp/api-immovables/highcharts",
				pattern: /^\/integrations\/lmp\/api-immovables\/highcharts\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/integrations/lmp/api-immovables/jscharting",
				pattern: /^\/integrations\/lmp\/api-immovables\/jscharting\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/integrations/lmp/api-immovables/morris",
				pattern: /^\/integrations\/lmp\/api-immovables\/morris\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/integrations/lmp/api-sos/con-proxy",
				pattern: /^\/integrations\/lmp\/api-sos\/con-proxy\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/integrations/lmp/api-sos/sin-proxy",
				pattern: /^\/integrations\/lmp\/api-sos\/sin-proxy\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/integrations/lmp/apis-externas/google/grafica",
				pattern: /^\/integrations\/lmp\/apis-externas\/google\/grafica\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/integrations/lmp/apis-externas/google/tabla",
				pattern: /^\/integrations\/lmp\/apis-externas\/google\/tabla\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/integrations/lmp/apis-externas/paises",
				pattern: /^\/integrations\/lmp\/apis-externas\/paises\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/integrations/lmp/apis-externas/pokemon",
				pattern: /^\/integrations\/lmp\/apis-externas\/pokemon\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/integrations/lmp/apis-externas/youtube",
				pattern: /^\/integrations\/lmp\/apis-externas\/youtube\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/integrations/lmp/together",
				pattern: /^\/integrations\/lmp\/together\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/integrations/mas/api-andalusian-campings/api-sos",
				pattern: /^\/integrations\/mas\/api-andalusian-campings\/api-sos\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/integrations/mas/api-andalusian-campings/external-api/advice",
				pattern: /^\/integrations\/mas\/api-andalusian-campings\/external-api\/advice\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/integrations/mas/api-andalusian-campings/external-api/currency",
				pattern: /^\/integrations\/mas\/api-andalusian-campings\/external-api\/currency\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/integrations/mas/api-andalusian-campings/external-api/food",
				pattern: /^\/integrations\/mas\/api-andalusian-campings\/external-api\/food\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/integrations/mas/api-andalusian-campings/external-api/music",
				pattern: /^\/integrations\/mas\/api-andalusian-campings\/external-api\/music\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/integrations/mas/api-andalusian-campings/external-api/science",
				pattern: /^\/integrations\/mas\/api-andalusian-campings\/external-api\/science\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/integrations/mas/api-andalusian-campings/external-api/space",
				pattern: /^\/integrations\/mas\/api-andalusian-campings\/external-api\/space\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/integrations/mas/api-andalusian-campings/external-api/university",
				pattern: /^\/integrations\/mas\/api-andalusian-campings\/external-api\/university\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/integrations/mas/api-andalusian-campings/google_chart",
				pattern: /^\/integrations\/mas\/api-andalusian-campings\/google_chart\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/integrations/mas/api-andalusian-campings/highcharts",
				pattern: /^\/integrations\/mas\/api-andalusian-campings\/highcharts\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/integrations/mas/api-andalusian-campings/together",
				pattern: /^\/integrations\/mas\/api-andalusian-campings\/together\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 31 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
