import { createHash } from 'node:crypto';
import { compressors, tools } from './catalog';
import { evidenceHistoryProductHref } from './evidence-history-directory';
import { productSeoTitles, productSeoDescriptions, toolUseSeoTitles } from './product-seo-titles';
import type { Compressor, ToolProfile } from '../domain/catalog';

const digest = (value: unknown) => createHash('sha256').update(JSON.stringify(value)).digest('hex');
export const compressorBuildVersion = digest(compressors);
const toolBuildVersion = digest(tools);
export function compressorAlternatives(compressor: Compressor) {
 return compressors.filter(item => item.id !== compressor.id && (item.confidence === 'A' || item.confidence === 'B') && item.fadCurve.length > 0)
  .sort((a, b) => (Math.abs(a.tankLiters - compressor.tankLiters) + Math.abs(a.maxPressureBar - compressor.maxPressureBar) * 10) - (Math.abs(b.tankLiters - compressor.tankLiters) + Math.abs(b.maxPressureBar - compressor.maxPressureBar) * 10)).slice(0, 3);
}
export function relatedToolsFor(tool: ToolProfile) {
 return tools.filter(item => item.id !== tool.id && item.categoryId === tool.categoryId)
  .sort((a, b) => (a.brand === tool.brand ? 0 : 1) - (b.brand === tool.brand ? 0 : 1) || a.label.localeCompare(b.label, 'fr')).slice(0, 3);
}
export function productBuildData(product: Compressor | ToolProfile, kind: 'compressor' | 'tool' | 'use') {
 return {
  product, historyHref: evidenceHistoryProductHref(product.id),
  title: productSeoTitles[product.id], description: productSeoDescriptions[product.id], useTitle: toolUseSeoTitles[product.id],
  oppositeCatalog: kind === 'compressor' ? toolBuildVersion : compressorBuildVersion,
  related: kind === 'compressor' ? compressorAlternatives(product as Compressor) : kind === 'use' ? relatedToolsFor(product as ToolProfile) : undefined,
 };
}
