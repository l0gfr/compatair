import { compressors, tools } from './catalog';
import { brandSlug } from '../domain/brand';

export const BRAND_DIRECTORY_PAGE_SIZE = 48;

// Alphabetical pages keep every manufacturer reachable without putting the
// entire directory in one HTML document. Counts describe this corpus only.
export const brandDirectory = [...new Set([...compressors.map(item => item.brand), ...tools.map(item => item.brand)])]
	.sort((left, right) => left.localeCompare(right, 'fr'))
	.map(brand => {
		const brandCompressors = compressors.filter(item => item.brand === brand);
		const brandTools = tools.filter(item => item.brand === brand);
		return {
			brand,
			slug: brandSlug(brand),
			compressors: brandCompressors.length,
			tools: brandTools.length,
			documentedFad: brandCompressors.filter(item => item.fadCurve.length > 0).length,
			total: brandCompressors.length + brandTools.length,
		};
	});

export const brandDirectoryTotalPages = Math.max(1, Math.ceil(brandDirectory.length / BRAND_DIRECTORY_PAGE_SIZE));
