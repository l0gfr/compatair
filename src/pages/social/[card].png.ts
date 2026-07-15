import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import sharp from 'sharp';
import { renderSocialCardSvg, socialCardKey, type SocialCard } from '../../domain/social-card';

const staticCards: SocialCard[] = [
	{ path: '/', kicker: 'Compatibilité pneumatique', title: 'Le bon débit, à la bonne pression', subtitle: 'Résultats reproductibles fondés sur le débit restitué' },
	{ path: '/404.html', kicker: 'Navigation', title: 'Page introuvable', subtitle: 'Retrouvez le catalogue et les guides CompatAir', accent: '#e39a5e' },
	{ path: '/410/', kicker: 'Navigation', title: 'Contenu retiré', subtitle: 'Cette ressource ne possède pas de remplacement direct', accent: '#e39a5e' },
	{ path: '/affiliation/', kicker: 'Indépendance', title: 'Affiliation et résultat technique', subtitle: 'Une commission ne modifie jamais la compatibilité' },
	{ path: '/api/', kicker: 'CompatAir API 1.0', title: 'API de compatibilité pneumatique', subtitle: 'Verdicts, versions et sources en consultation uniquement' },
	{ path: '/barometre-transparence/', kicker: 'Édition 2026', title: 'Baromètre de transparence documentaire', subtitle: 'Un score de documentation, jamais de qualité produit' },
	{ path: '/calculateur/', kicker: 'Vérification CompatAir', title: 'Quel compresseur pour vos outils ?', subtitle: 'Débit, pression, fréquence et limites expliquées' },
	{ path: '/passeport/', kicker: 'Dossier daté', title: 'Votre fiche de configuration', subtitle: 'Installation, calculs, sources, marges et limites' },
	{ path: '/professionnels/', kicker: 'Solutions professionnelles', title: 'Module et API pour marchands', subtitle: 'Une réponse technique sur la fiche produit' },
	{ path: '/comparateur/', kicker: 'Comparaison', title: 'Comparer des compresseurs', subtitle: 'Caractéristiques et données manquantes côte à côte' },
	{ path: '/comparatifs/', kicker: 'Comparatifs', title: 'Comparer sans confondre les chiffres', subtitle: 'Débit restitué, pression et fiabilité des données' },
	{ path: '/comparatifs/compresseurs-debit-restitue/', kicker: 'Comparatif factuel', title: 'Compresseurs par débit restitué', subtitle: 'Chaque valeur reste liée à sa pression publiée' },
	{ path: '/compatibilite/', kicker: 'Compatibilité CompatAir', title: 'Compresseur et outil pneumatique', subtitle: 'Résultat, débit, pression, limites et sources' },
	{ path: '/compresseurs/', kicker: 'Catalogue', title: 'Compresseurs documentés', subtitle: 'Débit restitué, pression, cuve et limites' },
	{ path: '/confidentialite/', kicker: 'Confiance', title: 'Politique de confidentialité', subtitle: 'Données traitées, finalités et droits' },
	{ path: '/contact/', kicker: 'Correction', title: 'Signaler une donnée', subtitle: 'Proposer une source ou corriger une caractéristique' },
	{ path: '/cookies/', kicker: 'Confidentialité', title: 'Politique relative aux cookies', subtitle: 'Aucun cookie publicitaire côté navigateur' },
	{ path: '/corrections/', kicker: 'Suivi public', title: 'Journal public des corrections', subtitle: 'Valeurs, résultats et promesses mesurables' },
	{ path: '/glossaire/', kicker: 'Référentiel', title: 'Glossaire de l’air comprimé', subtitle: 'FAD, pression, débit et qualité de l’air' },
	{ path: '/guides/', kicker: 'Documentation', title: 'Guides techniques CompatAir', subtitle: 'Comprendre, choisir, installer et utiliser' },
	{ path: '/marques/', kicker: 'Fabricants', title: 'Marques documentées', subtitle: 'Références reliées à des sources identifiées' },
	{ path: '/mcp-documentation/', kicker: 'Accès pour assistants', title: 'Serveur MCP CompatAir', subtitle: 'Catalogue et calculs en consultation uniquement' },
	{ path: '/mentions-legales/', kicker: 'Éditeur', title: 'Mentions légales', subtitle: 'Identité, hébergement et responsabilité' },
	{ path: '/methodologie/', kicker: 'Transparence', title: 'Comment CompatAir vérifie', subtitle: 'Calculs, hypothèses et fiabilité des données' },
	{ path: '/offres/', kicker: 'Données marchandes', title: 'Offres vérifiées', subtitle: 'Prix et liens séparés des résultats techniques' },
	{ path: '/outils-pneumatiques/', kicker: 'Catalogue', title: 'Outils pneumatiques documentés', subtitle: 'Consommation, pression et limites publiées' },
	{ path: '/preuves/', kicker: 'Documents vérifiés', title: 'Historique complet des sources', subtitle: 'Documents, dates et corrections' },
	{ path: '/recherche/', kicker: 'Navigation', title: 'Recherche technique', subtitle: 'Produits, guides et définitions CompatAir' },
	{ path: '/securite/', kicker: 'Sécurité', title: 'Signaler une vulnérabilité', subtitle: 'Canal de signalement responsable', accent: '#e39a5e' },
	{ path: '/scanner/', kicker: 'Scanner et vérifier', title: 'Une plaque propose, les sources décident', subtitle: 'Référence fabricant, code produit et confirmation obligatoire' },
	{ path: '/sources-fiabilite/', kicker: 'Traçabilité', title: 'Sources et niveaux de fiabilité', subtitle: 'Origine, fraîcheur et confiance des données' },
];

function buildCards(guides: Awaited<ReturnType<typeof getCollection<'guides'>>>): SocialCard[] {
	const guideCards = guides.map((guide) => ({ path: `/guides/${guide.id}/`, kicker: `Guide · ${guide.data.category}`, title: guide.data.title, subtitle: `${guide.data.readingTime} min · sources et hypothèses explicites` }));
	return [...staticCards, ...guideCards];
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
