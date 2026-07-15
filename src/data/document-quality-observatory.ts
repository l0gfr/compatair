import { CATALOG_VERIFIED_AT, compressors, tools } from './catalog';
import { documentQualityLedger } from './document-quality-ledger';
import { referenceRegistry } from './reference-registry';
import { createDocumentQualityObservatory } from '../domain/document-quality-observatory';

export const documentQualityObservatory = createDocumentQualityObservatory(
	compressors,
	tools,
	documentQualityLedger,
	referenceRegistry,
	CATALOG_VERIFIED_AT,
);
