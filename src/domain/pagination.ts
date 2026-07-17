export const DIRECTORY_PAGE_SIZE = 20;

export type PaginationItem =
	| { type: 'page'; page: number }
	| { type: 'ellipsis'; key: string };

export function paginate<T>(items: T[], page: number, pageSize = DIRECTORY_PAGE_SIZE) {
	if (!Number.isInteger(page) || page < 1) throw new Error('Le numéro de page doit être un entier positif.');
	if (!Number.isInteger(pageSize) || pageSize < 1) throw new Error('La taille de page doit être un entier positif.');
	const totalItems = items.length;
	const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
	if (page > totalPages) throw new Error(`La page ${page} dépasse les ${totalPages} pages disponibles.`);
	const offset = (page - 1) * pageSize;
	const pageItems = items.slice(offset, offset + pageSize);
	return {
		items: pageItems,
		page,
		pageSize,
		totalItems,
		totalPages,
		firstItem: totalItems === 0 ? 0 : offset + 1,
		lastItem: offset + pageItems.length,
	};
}

export function paginationItems(currentPage: number, totalPages: number): PaginationItem[] {
	if (!Number.isInteger(currentPage) || !Number.isInteger(totalPages) || currentPage < 1 || totalPages < 1 || currentPage > totalPages) {
		throw new Error('Pagination invalide.');
	}
	const visiblePages = [...new Set([1, currentPage - 1, currentPage, currentPage + 1, totalPages])]
		.filter((page) => page >= 1 && page <= totalPages)
		.sort((a, b) => a - b);
	const items: PaginationItem[] = [];
	for (const [index, page] of visiblePages.entries()) {
		const previous = visiblePages[index - 1];
		if (previous !== undefined && page - previous > 1) items.push({ type: 'ellipsis', key: `${previous}-${page}` });
		items.push({ type: 'page', page });
	}
	return items;
}

export function directoryPageHref(basePath: string, page: number) {
	if (!Number.isInteger(page) || page < 1) throw new Error('Le numéro de page doit être un entier positif.');
	const normalizedBase = `/${basePath.replace(/^\/+|\/+$/g, '')}/`;
	return page === 1 ? normalizedBase : `${normalizedBase}page/${page}/`;
}
