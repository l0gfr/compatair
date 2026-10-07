import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-astro-pneumatic-as8s",
	"slug": "pistolet-peinture-astro-pneumatic-as8s",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Astro Pneumatic AS8S",
	"brand": "Astro Pneumatic",
	"model": "AS8S",
	"mpn": "AS8S",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-astro-pneumatic-as8s.svg",
		"alt": "Repères techniques : Astro Pneumatic AS8S",
		"sourceUrl": "https://www.astrotools.com/product/spray-gun-with-cup-silver-handle-1-7mm-nozzle/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "astro-pneumatic-as8s",
		"label": "Référence AS8S",
		"distinguishingAttributes": {
			"reference": "AS8S",
			"Buse": "1.7mm",
			"Pression de fonctionnement": "50-60psi"
		}
	},
	"editorial": {
		"overview": "Astro Pneumatic AS8S. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Buse : 1.7mm.",
			"Pression de fonctionnement : 50-60psi.",
			"Masse nette : 3lbs. (1.36kg).",
			"Consommation moyenne, hors calcul : 7-12cfm.",
			"Filetage d’arrivée d’air : 1/4\".",
			"Puissance compresseur recommandée, hors calcul : 3hp.",
			"Diamètre intérieur du flexible : 6-8mm."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"La consommation moyenne ou sans régime publié reste hors calcul ; aucun débit en charge à pression de mesure connue n’est extrapolé.",
			"Une pression recommandée ou de service n’est pas un point de mesure de la consommation.",
			"L’unité ou la valeur de consommation ne permet pas une normalisation sûre ; seul le texte documentaire est conservé.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Buse",
			"value": "1.7mm",
			"evidenceIds": [
				"october3d-tools-astro-product-as8s-p1"
			]
		},
		{
			"label": "Pression de fonctionnement",
			"value": "50-60psi",
			"evidenceIds": [
				"october3d-tools-astro-product-as8s-p1"
			]
		},
		{
			"label": "Masse nette",
			"value": "3lbs. (1.36kg)",
			"evidenceIds": [
				"october3d-tools-astro-product-as8s-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "7-12cfm",
			"evidenceIds": [
				"october3d-tools-astro-product-as8s-p1"
			]
		},
		{
			"label": "Filetage d’arrivée d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"october3d-tools-astro-product-as8s-p1"
			]
		},
		{
			"label": "Puissance compresseur recommandée, hors calcul",
			"value": "3hp",
			"evidenceIds": [
				"october3d-tools-astro-product-as8s-p1"
			]
		},
		{
			"label": "Diamètre intérieur du flexible",
			"value": "6-8mm",
			"evidenceIds": [
				"october3d-tools-astro-product-as8s-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operation Pressure: 50-60psi",
			"evidenceIds": [
				"october3d-tools-astro-product-as8s-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-astro-product-as8s-p1",
			"sourceUrl": "https://www.astrotools.com/product/spray-gun-with-cup-silver-handle-1-7mm-nozzle/",
			"sourceLabel": "Astro Pneumatic, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 cf6c12b2f6ce8c41d6e2c95432ec10760b3d0abba50ced7e46827b6506d312bf. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-astro-product-as8s-p1"
		],
		"workingPressureBar": [
			"october3d-tools-astro-product-as8s-p1"
		],
		"demandExplanation": [
			"october3d-tools-astro-product-as8s-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
