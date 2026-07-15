import { CATALOG_VERIFIED_AT, compressors, tools } from './catalog';
import { documentQualityLedger } from './document-quality-ledger';
import { createContradictionRadar } from '../domain/contradiction-radar';

export const contradictionRadar = createContradictionRadar(compressors, tools, documentQualityLedger, CATALOG_VERIFIED_AT);
