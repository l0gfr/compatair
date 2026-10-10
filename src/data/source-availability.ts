// Observed link availability is separate from historical technical evidence.
// This snapshot does not classify URLs that have not been confirmed unavailable.
export interface SourceAvailabilityObservation {
	sourceUrl: string;
	sourceLabel: string;
	observedAt: string;
	httpStatus: 404;
	method: 'GET';
	recovery?: {
		observedAt: string;
		httpStatus: 200;
		method: 'GET';
		sha256: string;
		bytes: number;
	};
	archive: {
		sourceId: string;
		retrievedAt: string;
		sha256: string;
		bytes: number;
		retainedForTraceability: true;
		publicDownload: false;
	};
}

export const sourceAvailabilityObservations: readonly SourceAvailabilityObservation[] = [{
	sourceUrl: 'https://www.almig.de/fileadmin/user_upload/Prospekte/Schraubenbroschuere/ALMiG_Screwcpressor_catalog_20260706_en.pdf',
	sourceLabel: 'ALMiG, catalogue juillet 2026',
	observedAt: '2026-10-02',
	httpStatus: 404,
	method: 'GET',
	recovery: {
		observedAt: '2026-10-10',
		httpStatus: 200,
		method: 'GET',
		sha256: 'f5ca167dedaab25352808dc5001ba9badc7acffb2c37168c6d9f89182b752a0e',
		bytes: 4383400,
	},
	archive: {
		sourceId: 'almig-2026',
		retrievedAt: '2026-09-30',
		sha256: 'f5ca167dedaab25352808dc5001ba9badc7acffb2c37168c6d9f89182b752a0e',
		bytes: 4383400,
		retainedForTraceability: true,
		publicDownload: false,
	},
}];


/** A PDF page fragment identifies the same document; any other URL change does not. */
export function sourceAvailabilityForUrl(sourceUrl: string): SourceAvailabilityObservation | undefined {
	const documentUrl = sourceUrl.split('#', 1)[0];
	return sourceAvailabilityObservations.find((observation) => observation.sourceUrl === documentUrl);
}

/** Plain text is also used by the scanner, which inserts it with textContent. */
export function sourceAvailabilityMessage(sourceUrl: string): string | undefined {
	const observation = sourceAvailabilityForUrl(sourceUrl);
	if (!observation) return undefined;
	const observedDate = observation.observedAt.split('-').reverse().join('/');
	const retrievedDate = observation.archive.retrievedAt.split('-').reverse().join('/');
	if (observation.recovery) {
		const recoveryDate = observation.recovery.observedAt.split('-').reverse().join('/');
		return `Document constructeur rétabli le ${recoveryDate} (HTTP 200), identique à la source historique consultée le ${retrievedDate}. L’incident HTTP 404 du ${observedDate} et la copie de traçabilité sont conservés (SHA-256 ${observation.archive.sha256}). Aucun téléchargement public de cette archive n’est proposé.`;
	}
	return `Source historique : ${observation.sourceLabel}. URL constructeur en erreur HTTP ${observation.httpStatus} lors du contrôle du ${observedDate}. Une copie du document consulté le ${retrievedDate} est conservée pour la traçabilité (SHA-256 ${observation.archive.sha256}). Aucun téléchargement public de cette archive n’est proposé.`;
}
