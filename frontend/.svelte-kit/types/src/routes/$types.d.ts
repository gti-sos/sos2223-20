import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
type RouteParams = {  }
type RouteId = '/';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = EnsureDefined<LayoutData>;
type LayoutRouteId = RouteId | "/" | "/about" | "/analytics" | "/api/v2/andalusian-campings" | "/api/v2/blood-donations" | "/api/v2/immovables" | "/integrations" | "/integrations/lmp/api-immovables/highcharts" | "/integrations/lmp/api-immovables/jscharting" | "/integrations/lmp/api-immovables/morris" | "/integrations/lmp/api-sos/con-proxy" | "/integrations/lmp/api-sos/sin-proxy" | "/integrations/lmp/apis-externas/google/grafica" | "/integrations/lmp/apis-externas/google/tabla" | "/integrations/lmp/apis-externas/paises" | "/integrations/lmp/apis-externas/pokemon" | "/integrations/lmp/apis-externas/youtube" | "/integrations/lmp/together" | "/integrations/mas/api-andalusian-campings/api-sos" | "/integrations/mas/api-andalusian-campings/external-api/advice" | "/integrations/mas/api-andalusian-campings/external-api/currency" | "/integrations/mas/api-andalusian-campings/external-api/food" | "/integrations/mas/api-andalusian-campings/external-api/music" | "/integrations/mas/api-andalusian-campings/external-api/science" | "/integrations/mas/api-andalusian-campings/external-api/space" | "/integrations/mas/api-andalusian-campings/external-api/university" | "/integrations/mas/api-andalusian-campings/google_chart" | "/integrations/mas/api-andalusian-campings/highcharts" | "/integrations/mas/api-andalusian-campings/together" | null
type LayoutParams = RouteParams & {  }
type LayoutParentData = EnsureDefined<{}>;

export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type LayoutServerData = null;
export type LayoutData = Expand<LayoutParentData>;