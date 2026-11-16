import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-vibrante-astro-pneumatic-888s",
	"slug": "ponceuse-vibrante-astro-pneumatic-888s",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "Astro Pneumatic 888S",
	"brand": "Astro Pneumatic",
	"model": "888S",
	"mpn": "888S",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-vibrante-astro-pneumatic-888s-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Astro Pneumatic 888S",
		"sourceUrl": "https://www.astrotools.com/product/short-straight-line-sander/",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "astro-pneumatic-888s",
		"label": "Référence 888S",
		"distinguishingAttributes": {
			"reference": "888S",
			"Cadence à vide déclarée": "3,000 Strokes per minute",
			"Longueur hors tout": "12\""
		}
	},
	"editorial": {
		"overview": "La 888S est la ponceuse rectiligne courte à semelle 2¾ × 11 pouces, 3 000 courses/min, longueur 12 pouces et masse 1,9 kg. La KUANI KI-6671 utilise une semelle 64 × 407 mm et 2 500 courses/min : la surface d’appui et la cadence diffèrent. Le mouvement rectiligne ne remplace pas une orbitale. Les 4 cfm ne sont pas reliés à une pression de mesure et restent hors dimensionnement.",
		"verifiedFacts": [
			"Cadence à vide déclarée : 3,000 Strokes per minute.",
			"Longueur hors tout : 12\".",
			"Consommation publiée, hors calcul : 4cfm."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"La consommation moyenne ou sans régime publié reste hors calcul ; aucun débit en charge à pression de mesure connue n’est extrapolé.",
			"Une pression recommandée ou de service n’est pas un point de mesure de la consommation.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Cadence à vide déclarée",
			"value": "3,000 Strokes per minute",
			"evidenceIds": [
				"october3d-tools-astro-product-888s-p1"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "12\"",
			"evidenceIds": [
				"october3d-tools-astro-product-888s-p1"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "4cfm",
			"evidenceIds": [
				"october3d-tools-astro-product-888s-p1"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october3d-tools-astro-product-888s-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La fiche ne relie pas une pression de mesure à la consommation publiée.",
			"evidenceIds": [
				"october3d-tools-astro-product-888s-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-astro-product-888s-p1",
			"sourceUrl": "https://www.astrotools.com/product/short-straight-line-sander/",
			"sourceLabel": "Astro Pneumatic, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 9cc958830a0f6ee2a54229a7ae7e2ab0201e272115561313632c602fbe504399. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:ponceuse-vibrante-astro-pneumatic-888s:0",
			"sourceUrl": "https://www.astrotools.com/product/short-straight-line-sander/",
			"sourceLabel": "Astro Pneumatic, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La 888S est la ponceuse rectiligne courte à semelle 2¾ × 11 pouces, 3 000 courses/min, longueur 12 pouces et masse 1,9 kg. La KUANI KI-6671 utilise une semelle 64 × 407 mm et 2 500 courses/min : la surface d’appui et la cadence diffèrent. Le mouvement rectiligne ne remplace pas une orbitale. Les 4 cfm ne sont pas reliés à une pression de mesure et restent hors dimensionnement. GET complet SHA-256 370779340b2cc7f678fb53415be944545a03ce9a137032a9fcc3be65154e7554. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-astro-product-888s-p1"
		],
		"workingPressureBar": [
			"october3d-tools-astro-product-888s-p1"
		],
		"demandExplanation": [
			"october3d-tools-astro-product-888s-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
