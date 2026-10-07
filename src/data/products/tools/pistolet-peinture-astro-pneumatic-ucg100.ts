import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-astro-pneumatic-ucg100",
	"slug": "pistolet-peinture-astro-pneumatic-ucg100",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Astro Pneumatic UCG100",
	"brand": "Astro Pneumatic",
	"model": "UCG100",
	"mpn": "UCG100",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-astro-pneumatic-ucg100.svg",
		"alt": "Repères techniques : Astro Pneumatic UCG100",
		"sourceUrl": "https://www.astrotools.com/product/air-undercoat-gun/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "astro-pneumatic-ucg100",
		"label": "Référence UCG100",
		"distinguishingAttributes": {
			"reference": "UCG100",
			"Filetage d’arrivée d’air": "1/4\"",
			"Consommation moyenne, hors calcul": "6-12cfm"
		}
	},
	"editorial": {
		"overview": "Astro Pneumatic UCG100. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Filetage d’arrivée d’air : 1/4\".",
			"Consommation moyenne, hors calcul : 6-12cfm.",
			"Pression d’air publiée : 40psi.",
			"Masse nette : 1.65lbs.."
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
			"label": "Filetage d’arrivée d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"october3d-tools-astro-product-ucg100-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "6-12cfm",
			"evidenceIds": [
				"october3d-tools-astro-product-ucg100-p1"
			]
		},
		{
			"label": "Pression d’air publiée",
			"value": "40psi",
			"evidenceIds": [
				"october3d-tools-astro-product-ucg100-p1"
			]
		},
		{
			"label": "Masse nette",
			"value": "1.65lbs.",
			"evidenceIds": [
				"october3d-tools-astro-product-ucg100-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 40psi",
			"evidenceIds": [
				"october3d-tools-astro-product-ucg100-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-astro-product-ucg100-p1",
			"sourceUrl": "https://www.astrotools.com/product/air-undercoat-gun/",
			"sourceLabel": "Astro Pneumatic, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 506e1f02d97d8c75afe93b1f6d3c967d6263c71b0c31ac9292b4071977ac8e9d. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-astro-product-ucg100-p1"
		],
		"workingPressureBar": [
			"october3d-tools-astro-product-ucg100-p1"
		],
		"demandExplanation": [
			"october3d-tools-astro-product-ucg100-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
