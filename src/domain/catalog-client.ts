import { z } from 'zod';
import { CALCULATION_VERSION } from '../../server/air-sizing.mjs';
import { runtimeCatalogSchema, type RuntimeCatalog } from './runtime-catalog';

const searchSchema = z.object({
 catalogVersion: z.string().regex(/^[a-f0-9]{64}$/), catalogVerifiedAt: z.iso.date(),
 items: z.array(z.object({ id: z.string().regex(/^[a-z0-9-]{1,160}$/), type: z.enum(['compressor', 'tool']), title: z.string().max(500), identifiers: z.array(z.string().max(500)).max(100), demand: z.record(z.string(), z.union([z.string(), z.number()])).optional() })).max(50),
});
async function request(path: string, params: URLSearchParams) {
 const response = await fetch(`/api/v1/search/${path}?${params}`, { headers: { Accept: 'application/json' }, signal: AbortSignal.timeout(15_000) });
 if (response.status === 409) throw new Error('Le catalogue a changé. Rechargez la page pour utiliser une seule version.');
 if (!response.ok) throw new Error('Les références demandées sont momentanément indisponibles.');
 const value = await response.json();
 if (value?.calculationVersion !== CALCULATION_VERSION) throw new Error('Le moteur a changé. Rechargez la page avant de poursuivre ce calcul.');
 return value;
}
export async function searchCatalogProducts(query: string, type: 'compressor' | 'tool') {
 return searchSchema.parse(await request('catalog', new URLSearchParams({ q: query, type, limit: '20' })));
}
export async function loadRuntimeProducts(ids: string[], catalogVersion?: string): Promise<RuntimeCatalog> {
 const unique = [...new Set(ids.filter(id => id && id !== 'custom'))];
 if (!unique.length || unique.length > 50) throw new Error('Sélection de références invalide.');
 const catalog = runtimeCatalogSchema.parse(await request('products', new URLSearchParams({ ids: unique.join(','), ...(catalogVersion ? { catalogVersion } : {}) })));
 const received = [...catalog.compressors, ...catalog.tools].map(item => item.id);
 if (received.length !== unique.length || new Set(received).size !== unique.length || unique.some(id => !received.includes(id)) || (catalogVersion && catalog.catalogVersion !== catalogVersion)) throw new Error('Les références reçues ne correspondent pas à cette configuration.');
 return catalog;
}
export async function loadCandidateCompressors(need: { requiredPressureBar: number; peakFlowLpm: number; averageFlowLpm: number; recommendedFadLpm: number }, context: { powerSupply: string; mobility: string; maximumBudgetEur?: number }, catalogVersion?: string) {
 const value = await request('alternatives', new URLSearchParams({ pressure: String(need.requiredPressureBar), flow: String(need.peakFlowLpm), average: String(need.averageFlowLpm), recommended: String(need.recommendedFadLpm), ...(context.maximumBudgetEur !== undefined ? { budget: String(context.maximumBudgetEur) } : {}), phase: context.powerSupply === 'single-phase-230v' ? 'single-phase' : 'any', mobility: context.mobility, limit: '50', ...(catalogVersion ? { catalogVersion } : {}) }));
 return { catalog: runtimeCatalogSchema.parse(value), selection: z.object({ eligible: z.number().int().nonnegative(), returned: z.number().int().min(0).max(50), exhaustive: z.boolean() }).parse(value.selection) };
}

export async function loadConfigurationProducts(configuration: { selectedCompressor?: string; demands: { id: string }[]; catalogVersion?: string; calculationVersion?: string }, extraIds: string[] = []): Promise<RuntimeCatalog> {
 if (configuration.calculationVersion && configuration.calculationVersion !== CALCULATION_VERSION) throw new Error('Ce lien utilise une autre version du moteur. Ouvrez le Passeport original ou recommencez une configuration avec le moteur actuel.');
 const ids = [...new Set([configuration.selectedCompressor, ...configuration.demands.map(item => item.id), ...extraIds].filter((id): id is string => Boolean(id) && id !== 'custom'))];
 return ids.length ? loadRuntimeProducts(ids, configuration.catalogVersion) : runtimeCatalogSchema.parse(await request('metadata', new URLSearchParams()));
}
