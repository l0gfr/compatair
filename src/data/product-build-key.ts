import { createHash } from 'node:crypto';
import { compressors, tools } from './catalog';
import { evidenceHistoryProductHref } from './evidence-history-directory';
import { productSeoTitles, productSeoDescriptions, toolUseSeoTitles } from './product-seo-titles';
import type { Compressor, ToolProfile } from '../domain/catalog';

const digest = (value: unknown) => createHash('sha256').update(JSON.stringify(value)).digest('hex');
export const compressorBuildVersion = digest(compressors);
const toolBuildVersion = digest(tools);
export function compressorAlternatives(compressor: Compressor) {
 const distance = (item: Compressor) => Math.abs(item.maxPressureBar - compressor.maxPressureBar) * 10
  + (compressor.tankLiters === undefined ? 0 : item.tankLiters === undefined ? Number.POSITIVE_INFINITY : Math.abs(item.tankLiters - compressor.tankLiters));
 return compressors.filter(item => item.id !== compressor.id && (item.confidence === 'A' || item.confidence === 'B') && item.fadCurve.length > 0)
  .sort((a, b) => distance(a) === distance(b) ? 0 : distance(a) < distance(b) ? -1 : 1).slice(0, 3);
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
