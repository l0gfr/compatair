import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import sharp from 'sharp';
import { compressors, tools } from '../../data/catalog';
import { evaluateCompatibility } from '../../domain/compatibility';
import { renderSocialCardSvg, socialCardKey, type SocialCard } from '../../domain/social-card';
import { toolDemandLabel, toolPressureLabel } from '../../domain/tool-demand';

const staticCards: SocialCard[] = [
	{ path: '/', kicker: 'Compatibilité pneumatique', title: 'Le bon débit, à la bonne pression', subtitle: 'Verdicts déterministes fondés sur le FAD documenté' },
	{ path: '/404.html', kicker: 'Navigation', title: 'Page introuvable', subtitle: 'Retrouvez le catalogue et les guides CompatAir', accent: '#e39a5e' },
	{ path: '/410/', kicker: 'Navigation', title: 'Contenu retiré', subtitle: 'Cette ressource ne possède pas de remplacement direct', accent: '#e39a5e' },
	{ path: '/affiliation/', kicker: 'Indépendance', title: 'Affiliation et verdict technique', subtitle: 'Une commission ne modifie jamais la compatibilité' },
	{ path: '/barometre-transparence/', kicker: 'Édition 2026', title: 'Baromètre de transparence documentaire', subtitle: 'Un score de documentation, jamais de qualité produit' },
	{ path: '/calculateur/', kicker: 'Moteur CompatAir', title: 'Dimensionner une installation pneumatique', subtitle: 'Débit, pression, fréquence et limites explicites' },
	{ path: '/comparateur/', kicker: 'Comparaison', title: 'Comparer des compresseurs', subtitle: 'Caractéristiques et données manquantes côte à côte' },
	{ path: '/comparatifs/', kicker: 'Comparatifs', title: 'Comparer sans confondre les chiffres', subtitle: 'FAD, pression et confiance documentaire' },
	{ path: '/comparatifs/compresseurs-debit-restitue/', kicker: 'Comparatif factuel', title: 'Compresseurs par débit restitué', subtitle: 'Chaque valeur reste liée à sa pression publiée' },
	{ path: '/compresseurs/', kicker: 'Catalogue', title: 'Compresseurs documentés', subtitle: 'Débit restitué, pression, cuve et limites' },
	{ path: '/confidentialite/', kicker: 'Confiance', title: 'Politique de confidentialité', subtitle: 'Données traitées, finalités et droits' },
	{ path: '/contact/', kicker: 'Correction', title: 'Signaler une donnée', subtitle: 'Proposer une source ou corriger une caractéristique' },
	{ path: '/cookies/', kicker: 'Confidentialité', title: 'Politique relative aux cookies', subtitle: 'Aucun cookie publicitaire côté navigateur' },
	{ path: '/corrections/', kicker: 'Traçabilité', title: 'Journal public des corrections', subtitle: 'Valeurs, verdicts et promesses mesurables' },
	{ path: '/glossaire/', kicker: 'Référentiel', title: 'Glossaire de l’air comprimé', subtitle: 'FAD, pression, débit et qualité de l’air' },
	{ path: '/guides/', kicker: 'Documentation', title: 'Guides techniques CompatAir', subtitle: 'Comprendre, choisir, installer et utiliser' },
	{ path: '/marques/', kicker: 'Fabricants', title: 'Marques documentées', subtitle: 'Références reliées à des sources identifiées' },
	{ path: '/mcp-documentation/', kicker: 'Interface agents', title: 'Serveur MCP CompatAir', subtitle: 'Catalogue et moteur déterministe en lecture seule' },
	{ path: '/mentions-legales/', kicker: 'Éditeur', title: 'Mentions légales', subtitle: 'Identité, hébergement et responsabilité' },
	{ path: '/methodologie/', kicker: 'Transparence', title: 'Méthodologie de dimensionnement', subtitle: 'Calculs, hypothèses et niveaux de confiance' },
	{ path: '/offres/', kicker: 'Données marchandes', title: 'Offres vérifiées', subtitle: 'Prix et liens séparés des verdicts techniques' },
	{ path: '/outils-pneumatiques/', kicker: 'Catalogue', title: 'Outils pneumatiques documentés', subtitle: 'Consommation, pression et limites publiées' },
	{ path: '/preuves/', kicker: 'AirGraph · traçabilité', title: 'Historique complet des preuves', subtitle: 'Sources, versions, dates et empreintes vérifiables' },
	{ path: '/recherche/', kicker: 'Navigation', title: 'Recherche technique', subtitle: 'Produits, guides et définitions CompatAir' },
	{ path: '/securite/', kicker: 'Sécurité', title: 'Signaler une vulnérabilité', subtitle: 'Canal de signalement responsable', accent: '#e39a5e' },
	{ path: '/sources-fiabilite/', kicker: 'Traçabilité', title: 'Sources et niveaux de fiabilité', subtitle: 'Origine, fraîcheur et confiance des données' },
];

function buildCards(guides: Awaited<ReturnType<typeof getCollection<'guides'>>>): SocialCard[] {
	const productCards: SocialCard[] = [
		...compressors.map((compressor) => ({ path: `/compresseurs/${compressor.slug}/`, kicker: `Compresseur · confiance ${compressor.confidence}`, title: `${compressor.brand} ${compressor.model}`, subtitle: `${compressor.tankLiters} L · ${compressor.maxPressureBar} bar · FAD documenté` })),
		...tools.map((tool) => ({ path: `/outils-pneumatiques/${tool.slug}/`, kicker: `Outil pneumatique · confiance ${tool.confidence}`, title: tool.label, subtitle: `${toolDemandLabel(tool)} · ${toolPressureLabel(tool)}` })),
	];
	const usageCards = tools.map((tool) => ({ path: `/quel-compresseur-pour/${tool.slug}/`, kicker: 'Guide de compatibilité', title: `Quel compresseur pour ${tool.model} ?`, subtitle: `${toolDemandLabel(tool)} · ${toolPressureLabel(tool)}` }));
	const compatibilityCards = compressors.flatMap((compressor) => tools.flatMap((tool) => {
		const result = evaluateCompatibility(compressor, tool);
		if (result.verdict === 'insufficient_data') return [];
		const verdict = result.verdict === 'continuous' ? 'Compatible en continu' : result.verdict === 'intermittent' ? 'Compatible par intermittence' : 'Incompatible';
		return [{ path: `/compatibilite/${compressor.slug}--${tool.slug}/`, kicker: verdict, title: `${compressor.model} avec ${tool.model}`, subtitle: `Verdict moteur ${result.calculationVersion} · sources affichées`, accent: result.verdict === 'continuous' ? '#d3eb56' : '#e39a5e' }];
	}));
	const guideCards = guides.map((guide) => ({ path: `/guides/${guide.id}/`, kicker: `Guide · ${guide.data.category}`, title: guide.data.title, subtitle: `${guide.data.readingTime} min · sources et hypothèses explicites` }));
	const brands = [...new Set([...compressors, ...tools].map((item) => item.brand))];
	const brandCards = brands.map((brand) => ({ path: `/marques/${brand.toLowerCase().replaceAll(' ', '-')}/`, kicker: 'Fabricant documenté', title: brand, subtitle: 'Compresseurs, outils, sources et limites' }));
	return [...staticCards, ...productCards, ...usageCards, ...compatibilityCards, ...guideCards, ...brandCards];
}

export const getStaticPaths: GetStaticPaths = async () => {
	const cards = buildCards(await getCollection('guides'));
	const keys = new Set<string>();
	return cards.map((card) => {
		const key = socialCardKey(card.path);
		if (keys.has(key)) throw new Error(`Carte sociale dupliquée : ${key}`);
		keys.add(key);
		return { params: { card: key }, props: { card } };
	});
};

export const GET: APIRoute = async ({ props }) => {
	const svg = renderSocialCardSvg(props.card as SocialCard);
	const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9, palette: true }).toBuffer();
	return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=31536000, immutable' } });
};
