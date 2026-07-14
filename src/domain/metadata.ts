export const MAX_DOCUMENT_TITLE_LENGTH = 60;

export function fitDocumentTitle(title: string, maximumLength = MAX_DOCUMENT_TITLE_LENGTH): string {
	if (title.length <= maximumLength) return title;
	const siteSuffix = title.endsWith(' | CompatAir') ? ' | CompatAir' : '';
	const source = siteSuffix ? title.slice(0, -siteSuffix.length) : title;
	const available = maximumLength - siteSuffix.length - 1;
	if (available < 1) return title.slice(0, maximumLength);
	const candidate = source.slice(0, available + 1);
	const boundary = candidate.lastIndexOf(' ');
	const shortened = (boundary >= Math.floor(available * .6) ? candidate.slice(0, boundary) : source.slice(0, available)).trimEnd();
	return `${shortened}…${siteSuffix}`;
}
