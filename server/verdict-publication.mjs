import { createHash } from 'node:crypto';
import { CALCULATION_VERSION } from './air-sizing.mjs';
import { evaluateCompatibility } from './air-compatibility.mjs';

export const VERDICT_PUBLICATION_VERSION = '2.0.0';
export function decisionVersion(catalogVersion) {
 if (!/^[a-f0-9]{64}$/.test(catalogVersion)) throw new Error('invalid_catalog_version');
 return createHash('sha256').update(JSON.stringify({ catalogVersion, calculationVersion: CALCULATION_VERSION, mode: 'on-demand-v1' })).digest('hex');
}

// Describes reproducible, requested calculations. No Cartesian product is built.
export function createVerdictPublication(catalog, archive) {
 const publication = {
  schemaVersion: VERDICT_PUBLICATION_VERSION, mode: 'on-demand',
  verdictVersion: decisionVersion(catalog.catalogVersion), catalogVersion: catalog.catalogVersion,
  calculationVersion: CALCULATION_VERSION, verifiedAt: catalog.verifiedAt, scope: catalog.scope,
  materializedPairCount: 0, aggregateVerdicts: { status: 'not_materialized' },
  calculation: { endpoint: '/api/v1/compatibility', compressorParameter: 'compressorId', toolParameter: 'toolId', catalog: '/data/catalog.json', missingData: 'insufficient_data' },
  legacyArchive: { releaseSha: archive.releaseSha, catalogVersion: archive.metadata.catalogVersion, verdictVersion: archive.metadata.verdictVersion,
   verifiedAt: archive.metadata.verifiedAt, status: 'frozen_historical_snapshot',
   verdicts: `${archive.basePath}/verdicts.json`, catalog: `${archive.basePath}/catalog.json`, signatures: `${archive.basePath}/signatures.json` },
 };
 validateVerdictPublication(publication, catalog);
 return publication;
}

export function validateVerdictPublication(value, catalog) {
 if (value?.schemaVersion !== VERDICT_PUBLICATION_VERSION || value.mode !== 'on-demand' || value.materializedPairCount !== 0 || 'pairs' in value || 'summary' in value || 'conclusive' in value
  || !/^\d{4}-\d{2}-\d{2}$/.test(value.verifiedAt) || value.aggregateVerdicts?.status !== 'not_materialized' || Object.keys(value.aggregateVerdicts).length !== 1 || value.calculationVersion !== CALCULATION_VERSION
  || value.verdictVersion !== decisionVersion(value.catalogVersion)) throw new Error('invalid_verdict_publication');
 const s = value.scope;
 for (const key of ['compressor_count','tool_count','fixed_flow_tool_count','parametric_tool_count','explorable_combination_count','fixed_verdict_count','parametric_combination_count']) {
  if (!Number.isSafeInteger(s?.[key]) || s[key] < 0) throw new Error('invalid_verdict_scope');
 }
 if (s.tool_count !== s.fixed_flow_tool_count + s.parametric_tool_count || s.explorable_combination_count !== s.compressor_count * s.tool_count
  || s.fixed_verdict_count !== s.compressor_count * s.fixed_flow_tool_count || s.parametric_combination_count !== s.compressor_count * s.parametric_tool_count) throw new Error('invalid_verdict_scope');
 if (catalog && (value.catalogVersion !== catalog.catalogVersion || value.verifiedAt !== catalog.verifiedAt || JSON.stringify(s) !== JSON.stringify(catalog.scope))) throw new Error('verdict_catalog_mismatch');
 const archive = value.legacyArchive;
 if (!/^[a-f0-9]{40}$/.test(archive?.releaseSha) || !/^[a-f0-9]{64}$/.test(archive.catalogVersion) || !/^[a-f0-9]{64}$/.test(archive.verdictVersion)
  || archive.status !== 'frozen_historical_snapshot' || !/^\d{4}-\d{2}-\d{2}$/.test(archive.verifiedAt)) throw new Error('invalid_verdict_archive');
 for (const file of ['verdicts','catalog','signatures']) if (archive[file] !== `/data/archives/${archive.releaseSha}/${file}.json`) throw new Error('invalid_verdict_archive_path');
 if (value.calculation?.endpoint !== '/api/v1/compatibility' || value.calculation.catalog !== '/data/catalog.json' || value.calculation.compressorParameter !== 'compressorId'
  || value.calculation.toolParameter !== 'toolId' || value.calculation.missingData !== 'insufficient_data') throw new Error('invalid_verdict_calculation_contract');
 return value;
}

export function evaluatePair(compressor, tool) {
 return { id: `${compressor.id}--${tool.id}`, compressorId: compressor.id, toolId: tool.id, ...evaluateCompatibility(compressor, tool) };
}

// Reports evaluate only tools with an observable privacy-safe demand cohort.
export function demandVerdicts(catalog, aggregates, minimumCohort = 5) {
 if (!Number.isInteger(minimumCohort) || minimumCohort < 5) throw new Error('invalid_minimum_cohort');
 const selected = catalog.tools.filter(tool => tool.demandModel === 'fixed-flow' && Number.isInteger(aggregates.dimensions?.tools?.[tool.id]) && aggregates.dimensions.tools[tool.id] >= minimumCohort);
 return { catalogVersion: catalog.catalogVersion, verdictVersion: decisionVersion(catalog.catalogVersion),
  pairs: { *[Symbol.iterator]() { for (const tool of selected) for (const compressor of catalog.compressors) yield evaluatePair(compressor, tool); } } };
}
