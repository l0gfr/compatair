import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-hvlp-astro-pneumatic-hvlp509",
	"slug": "pistolet-peinture-hvlp-astro-pneumatic-hvlp509",
	"categoryId": "pistolet-peinture-hvlp",
	"category": "pistolet-peinture-hvlp",
	"label": "Astro Pneumatic HVLP509",
	"brand": "Astro Pneumatic",
	"model": "HVLP509",
	"mpn": "HVLP509",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-hvlp-astro-pneumatic-hvlp509.svg",
		"alt": "Repères techniques : Astro Pneumatic HVLP509",
		"sourceUrl": "https://www.astrotools.com/product/hvlp-gravity-feed-spray-gun-1-9mm-nozzle-with-aluminum-cup/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "astro-pneumatic-hvlp509",
		"label": "Référence HVLP509",
		"distinguishingAttributes": {
			"reference": "HVLP509",
			"Buse": "1.9mm",
			"Pression de fonctionnement": "41-44psi"
		}
	},
	"editorial": {
		"overview": "Astro Pneumatic HVLP509. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Buse : 1.9mm.",
			"Pression de fonctionnement : 41-44psi.",
			"Masse nette : 3lbs. (1.36kg).",
			"Consommation moyenne, hors calcul : 10cfm.",
			"Filetage d’arrivée d’air : 1/4\".",
			"Puissance compresseur recommandée, hors calcul : 3hp.",
			"Diamètre intérieur du flexible : 4-6mm."
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
			"label": "Buse",
			"value": "1.9mm",
			"evidenceIds": [
				"october3d-tools-astro-product-hvlp509-p1"
			]
		},
		{
			"label": "Pression de fonctionnement",
			"value": "41-44psi",
			"evidenceIds": [
				"october3d-tools-astro-product-hvlp509-p1"
			]
		},
		{
			"label": "Masse nette",
			"value": "3lbs. (1.36kg)",
			"evidenceIds": [
				"october3d-tools-astro-product-hvlp509-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "10cfm",
			"evidenceIds": [
				"october3d-tools-astro-product-hvlp509-p1"
			]
		},
		{
			"label": "Filetage d’arrivée d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"october3d-tools-astro-product-hvlp509-p1"
			]
		},
		{
			"label": "Puissance compresseur recommandée, hors calcul",
			"value": "3hp",
			"evidenceIds": [
				"october3d-tools-astro-product-hvlp509-p1"
			]
		},
		{
			"label": "Diamètre intérieur du flexible",
			"value": "4-6mm",
			"evidenceIds": [
				"october3d-tools-astro-product-hvlp509-p1"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "10 cfm",
			"evidenceIds": [
				"october3d-tools-astro-product-hvlp509-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operation Pressure: 41-44psi",
			"evidenceIds": [
				"october3d-tools-astro-product-hvlp509-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-astro-product-hvlp509-p1",
			"sourceUrl": "https://www.astrotools.com/product/hvlp-gravity-feed-spray-gun-1-9mm-nozzle-with-aluminum-cup/",
			"sourceLabel": "Astro Pneumatic, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 1c923f4e8331b0eeb277f2ffb8ba086683d39a98d20b652d87a27dc540f92b58. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-astro-product-hvlp509-p1"
		],
		"workingPressureBar": [
			"october3d-tools-astro-product-hvlp509-p1"
		],
		"demandExplanation": [
			"october3d-tools-astro-product-hvlp509-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
