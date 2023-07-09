export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.7b420b8b.js","imports":["_app/immutable/entry/start.7b420b8b.js","_app/immutable/chunks/index.e145b144.js","_app/immutable/chunks/singletons.2385f33f.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.303624fc.js","imports":["_app/immutable/entry/app.303624fc.js","_app/immutable/chunks/index.e145b144.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js'),
			() => import('./nodes/18.js'),
			() => import('./nodes/19.js'),
			() => import('./nodes/20.js'),
			() => import('./nodes/21.js'),
			() => import('./nodes/22.js'),
			() => import('./nodes/23.js'),
			() => import('./nodes/24.js'),
			() => import('./nodes/25.js'),
			() => import('./nodes/26.js'),
			() => import('./nodes/27.js'),
			() => import('./nodes/28.js'),
			() => import('./nodes/29.js'),
			() => import('./nodes/30.js'),
			() => import('./nodes/31.js')
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

export const prerendered = new Set([]);
