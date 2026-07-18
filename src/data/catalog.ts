import { compressorSchema, toolProfileSchema } from '../domain/catalog';
import { rawCompressors } from './products/compressors';
import { rawTools } from './products/tools';

export const CATALOG_VERIFIED_AT = '2026-07-18';

export const compressors = rawCompressors.map((item) => compressorSchema.parse(item));
export const tools = rawTools.map((item) => toolProfileSchema.parse(item));

export const getCompressor = (slug: string) => compressors.find((item) => item.slug === slug);
export const getTool = (slug: string) => tools.find((item) => item.slug === slug);
