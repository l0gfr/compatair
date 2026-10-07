import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-astro-pneumatic-260",
	"slug": "meuleuse-astro-pneumatic-260",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Astro Pneumatic 260",
	"brand": "Astro Pneumatic",
	"model": "260",
	"mpn": "260",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-astro-pneumatic-260.svg",
		"alt": "Repères techniques : Astro Pneumatic 260",
		"sourceUrl": "https://www.astrotools.com/product/onyx-120-degree-angle-head-die-grinder/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "astro-pneumatic-260",
		"label": "Référence 260",
		"distinguishingAttributes": {
			"reference": "260",
			"Pince": "Chuck: 1/4'' or 6 mm",
			"Vitesse à vide": "20,000 rpm"
		}
	},
	"editorial": {
		"overview": "Astro Pneumatic 260. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Pince : Chuck: 1/4'' or 6 mm.",
			"Vitesse à vide : 20,000 rpm.",
			"Masse : 1.28 lbs. (0.58 kgs).",
			"Consommation publiée, hors calcul : 2.5 cfm (500 l/min)."
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
			"label": "Pince",
			"value": "Chuck: 1/4'' or 6 mm",
			"evidenceIds": [
				"october3d-tools-astro-product-260-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "20,000 rpm",
			"evidenceIds": [
				"october3d-tools-astro-product-260-p1"
			]
		},
		{
			"label": "Masse",
			"value": "1.28 lbs. (0.58 kgs)",
			"evidenceIds": [
				"october3d-tools-astro-product-260-p1"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "2.5 cfm (500 l/min)",
			"evidenceIds": [
				"october3d-tools-astro-product-260-p1"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "2.5 cfm",
			"evidenceIds": [
				"october3d-tools-astro-product-260-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La fiche ne relie pas une pression de mesure à la consommation publiée.",
			"evidenceIds": [
				"october3d-tools-astro-product-260-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-astro-product-260-p1",
			"sourceUrl": "https://www.astrotools.com/product/onyx-120-degree-angle-head-die-grinder/",
			"sourceLabel": "Astro Pneumatic, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 7514e32d1e063f36884e9447a9b43b03a1e0be5b9c134abd5f374e422e5ebaeb. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-astro-product-260-p1"
		],
		"workingPressureBar": [
			"october3d-tools-astro-product-260-p1"
		],
		"demandExplanation": [
			"october3d-tools-astro-product-260-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
