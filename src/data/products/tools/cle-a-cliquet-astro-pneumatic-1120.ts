import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-astro-pneumatic-1120",
	"slug": "cle-a-cliquet-astro-pneumatic-1120",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Astro Pneumatic 1120",
	"brand": "Astro Pneumatic",
	"model": "1120",
	"mpn": "1120",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-astro-pneumatic-1120.svg",
		"alt": "Repères techniques : Astro Pneumatic 1120",
		"sourceUrl": "https://www.astrotools.com/product/onyx-22-inch-long-reach-3-8-air-ratchet-85ft-lbs-280rpm/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "astro-pneumatic-1120",
		"label": "Référence 1120",
		"distinguishingAttributes": {
			"reference": "1120",
			"Carré d’entraînement": "3/8\"",
			"Vitesse à vide": "280 rpm"
		}
	},
	"editorial": {
		"overview": "Astro Pneumatic 1120. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Carré d’entraînement : 3/8\".",
			"Vitesse à vide : 280 rpm.",
			"Couple maximal : 85 ft-lb / 115 Nm.",
			"Arrivée d’air : 1/4\".",
			"Flexible : I.D.: 3/8\".",
			"Consommation moyenne, hors calcul : 4.0 cfm / 113 L/min.",
			"Masse nette : 4.72 lb / 2.14 kg."
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
			"label": "Carré d’entraînement",
			"value": "3/8\"",
			"evidenceIds": [
				"october3d-tools-astro-product-1120-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "280 rpm",
			"evidenceIds": [
				"october3d-tools-astro-product-1120-p1"
			]
		},
		{
			"label": "Couple maximal",
			"value": "85 ft-lb / 115 Nm",
			"evidenceIds": [
				"october3d-tools-astro-product-1120-p1"
			]
		},
		{
			"label": "Arrivée d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"october3d-tools-astro-product-1120-p1"
			]
		},
		{
			"label": "Flexible",
			"value": "I.D.: 3/8\"",
			"evidenceIds": [
				"october3d-tools-astro-product-1120-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4.0 cfm / 113 L/min",
			"evidenceIds": [
				"october3d-tools-astro-product-1120-p1"
			]
		},
		{
			"label": "Masse nette",
			"value": "4.72 lb / 2.14 kg",
			"evidenceIds": [
				"october3d-tools-astro-product-1120-p1"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october3d-tools-astro-product-1120-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La fiche ne relie pas une pression de mesure à la consommation publiée.",
			"evidenceIds": [
				"october3d-tools-astro-product-1120-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-astro-product-1120-p1",
			"sourceUrl": "https://www.astrotools.com/product/onyx-22-inch-long-reach-3-8-air-ratchet-85ft-lbs-280rpm/",
			"sourceLabel": "Astro Pneumatic, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 4f3f8349b0b51c6a65869c1008a5f5c04399ecb5df2428551dd1f2d090f90ca1. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-astro-product-1120-p1"
		],
		"workingPressureBar": [
			"october3d-tools-astro-product-1120-p1"
		],
		"demandExplanation": [
			"october3d-tools-astro-product-1120-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
