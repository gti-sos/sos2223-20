export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28'),
	() => import('./nodes/29'),
	() => import('./nodes/30'),
	() => import('./nodes/31')
];

export const server_loads = [];

export const dictionary = {
		"/": [3],
		"/about": [4],
		"/analytics": [5],
		"/api/v2/andalusian-campings": [6],
		"/api/v2/blood-donations": [7],
		"/api/v2/immovables": [8],
		"/integrations": [9,[2]],
		"/integrations/lmp/api-immovables/highcharts": [10,[2]],
		"/integrations/lmp/api-immovables/jscharting": [11,[2]],
		"/integrations/lmp/api-immovables/morris": [12,[2]],
		"/integrations/lmp/api-sos/con-proxy": [13,[2]],
		"/integrations/lmp/api-sos/sin-proxy": [14,[2]],
		"/integrations/lmp/apis-externas/google/grafica": [15,[2]],
		"/integrations/lmp/apis-externas/google/tabla": [16,[2]],
		"/integrations/lmp/apis-externas/paises": [17,[2]],
		"/integrations/lmp/apis-externas/pokemon": [18,[2]],
		"/integrations/lmp/apis-externas/youtube": [19,[2]],
		"/integrations/lmp/together": [20,[2]],
		"/integrations/mas/api-andalusian-campings/api-sos": [21,[2]],
		"/integrations/mas/api-andalusian-campings/external-api/advice": [22,[2]],
		"/integrations/mas/api-andalusian-campings/external-api/currency": [23,[2]],
		"/integrations/mas/api-andalusian-campings/external-api/food": [24,[2]],
		"/integrations/mas/api-andalusian-campings/external-api/music": [25,[2]],
		"/integrations/mas/api-andalusian-campings/external-api/science": [26,[2]],
		"/integrations/mas/api-andalusian-campings/external-api/space": [27,[2]],
		"/integrations/mas/api-andalusian-campings/external-api/university": [28,[2]],
		"/integrations/mas/api-andalusian-campings/google_chart": [29,[2]],
		"/integrations/mas/api-andalusian-campings/highcharts": [30,[2]],
		"/integrations/mas/api-andalusian-campings/together": [31,[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';