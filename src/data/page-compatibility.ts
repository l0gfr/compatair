import { compressors, tools } from './catalog';
import { evaluateCompatibility } from '../domain/compatibility';
import { PageCalculationCache, type PageCacheOptions } from '../domain/page-calculation-cache';
import type { Compressor, ToolProfile } from '../domain/catalog';

declare const __COMPATAIR_PAGE_CALCULATIONS__: PageCacheOptions | undefined;
let cache: PageCalculationCache | undefined;
export function evaluatePageCompatibility(compressor: Compressor, tool: ToolProfile) {
 if (typeof __COMPATAIR_PAGE_CALCULATIONS__ === 'undefined') return evaluateCompatibility(compressor, tool);
 cache ??= new PageCalculationCache(compressors, tools, __COMPATAIR_PAGE_CALCULATIONS__);
 return cache.evaluate(compressor, tool);
}
export function flushPageCalculations() { cache?.flush(); }
