import { CATALOG_VERIFIED_AT, compressors, tools } from './catalog';
import { documentQualityLedger } from './document-quality-ledger';
import { referenceRegistry } from './reference-registry';
import { createDocumentQualityObservatory } from '../domain/document-quality-observatory';
import { documentQualityHistorySchema } from '../domain/document-quality-observatory';
import historySnapshot from './document-quality-observatory-history.snapshot.json';

export const documentQualityHistory = documentQualityHistorySchema.parse(historySnapshot);

export const documentQualityObservatory = createDocumentQualityObservatory(
	compressors,
	tools,
	documentQualityLedger,
	referenceRegistry,
	CATALOG_VERIFIED_AT,
	documentQualityHistory,
);
