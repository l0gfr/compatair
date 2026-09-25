import { z } from 'zod';
import { compressors } from './catalog';

const allowedHosts = new Set(['www.fnac.com', 'www.sotel.de', 'www.mecafer.com', 'shop.scheppach.com']);
export const directPurchaseLinkSchema = z.object({
	productId: z.string().min(1),
	merchant: z.string().min(1),
	url: z.url().refine((value) => {
		const url = new URL(value);
		return url.protocol === 'https:' && allowedHosts.has(url.hostname) && !url.username && !url.password && !url.port && !url.search && !url.hash;
	}, 'Lien direct HTTPS sur un hôte autorisé, sans redirection ni suivi.'),
	ean: z.string().regex(/^\d{13}$/),
	checkedAt: z.iso.date(),
	note: z.string().min(1),
}).strict();

// Pages produit appariées par EAN. Aucun prix, stock ou accord commercial n’est déduit.
export const directPurchaseLinks = z.array(directPurchaseLinkSchema).parse([
	{ productId: 'einhell-tc-ac-240-50-10-of', merchant: 'Fnac Marketplace', url: 'https://www.fnac.com/mp28853330/Compresseur-d-air-TH-AC-240-50-10-sans-huile-Einhell/w-4', ean: '4006825597295', checkedAt: '2026-09-25', note: 'Vendeurs tiers : vérifier le vendeur effectif et les conditions de livraison.' },
	{ productId: 'einhell-tc-ac-240-50-10-of', merchant: 'Sotel', url: 'https://www.sotel.de/en/Tools-DIY/Power-Tools/Staplers-Nailers/Einhell-TC-AC-240-50-10-OF-air-compressor-1500-W-240-l-min.html', ean: '4006825597295', checkedAt: '2026-09-25', note: 'Boutique allemande : vérifier les frais et la livraison à votre adresse.' },
	{ productId: 'mecafer-fifty-50l-2hp', merchant: 'Mecafer', url: 'https://www.mecafer.com/compresseurs/compresseur-fifty-50l-2hp', ean: '3283494250909', checkedAt: '2026-09-25', note: 'Boutique fabricant : vérifier les conditions de vente et la référence 425090.' },
	{ productId: 'scheppach-hc51v', merchant: 'Scheppach', url: 'https://shop.scheppach.com/Kompressor-stehend-HC51V-scheppach-10-bar-50L-Kessel-230V-1500W-oelfrei-wartungsarm/59061649969', ean: '4046664230588', checkedAt: '2026-09-25', note: 'Boutique fabricant allemande : vérifier la livraison et la référence 59061649969.' },
]);

export function purchaseLinksForProduct(productId: string, now = new Date()) {
	const product = compressors.find((item) => item.id === productId);
	return directPurchaseLinks.filter((link) => {
		const age = now.getTime() - Date.parse(`${link.checkedAt}T00:00:00Z`);
		return link.productId === productId && link.ean === product?.ean && age >= 0 && age <= 90 * 86_400_000;
	});
}
