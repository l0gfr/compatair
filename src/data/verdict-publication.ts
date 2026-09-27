import { createVerdictPublication } from '../../server/verdict-publication.mjs';
import archive from '../../config/legacy-verdict-archive.json';
import { createCatalogSnapshot } from '../domain/snapshots';
import { CATALOG_VERIFIED_AT, compressors, tools } from './catalog';
import { toolTaxonomy } from './taxonomy';

export const publicationCatalog = createCatalogSnapshot({ compressors, tools, toolTaxonomy, verifiedAt: CATALOG_VERIFIED_AT });
export const verdictPublication = createVerdictPublication(publicationCatalog, archive);
export const historicalVerdictAudit = { ...archive.metadata, publishedAt: archive.manifest.createdAt };
