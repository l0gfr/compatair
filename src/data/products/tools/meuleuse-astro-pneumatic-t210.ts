import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-astro-pneumatic-t210",
	"slug": "meuleuse-astro-pneumatic-t210",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Astro Pneumatic T210",
	"brand": "Astro Pneumatic",
	"model": "T210",
	"mpn": "T210",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-astro-pneumatic-t210.svg",
		"alt": "Repères techniques : Astro Pneumatic T210",
		"sourceUrl": "https://www.astrotools.com/product/1-4-medium-die-grinder-with-safety-lever-rear-exhaust-japan-bearings-22-000rpm/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "astro-pneumatic-t210",
		"label": "Référence T210",
		"distinguishingAttributes": {
			"reference": "T210",
			"Pince": "1/4\"",
			"Vitesse à vide": "22,000rpm"
		}
	},
	"editorial": {
		"overview": "Astro Pneumatic T210. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Pince : 1/4\".",
			"Vitesse à vide : 22,000rpm.",
			"Longueur hors tout : 6-3/4\" (171mm).",
			"Masse nette : 1-1/4lbs. (.6kg).",
			"Filetage d’arrivée d’air : 1/4\".",
			"Diamètre intérieur du flexible : 3/8\" (10mm).",
			"Consommation moyenne, hors calcul : 4cfm.",
			"Pression d’air publiée : 90-120psi."
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
			"value": "1/4\"",
			"evidenceIds": [
				"october3d-tools-astro-product-t210-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "22,000rpm",
			"evidenceIds": [
				"october3d-tools-astro-product-t210-p1"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "6-3/4\" (171mm)",
			"evidenceIds": [
				"october3d-tools-astro-product-t210-p1"
			]
		},
		{
			"label": "Masse nette",
			"value": "1-1/4lbs. (.6kg)",
			"evidenceIds": [
				"october3d-tools-astro-product-t210-p1"
			]
		},
		{
			"label": "Filetage d’arrivée d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"october3d-tools-astro-product-t210-p1"
			]
		},
		{
			"label": "Diamètre intérieur du flexible",
			"value": "3/8\" (10mm)",
			"evidenceIds": [
				"october3d-tools-astro-product-t210-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4cfm",
			"evidenceIds": [
				"october3d-tools-astro-product-t210-p1"
			]
		},
		{
			"label": "Pression d’air publiée",
			"value": "90-120psi",
			"evidenceIds": [
				"october3d-tools-astro-product-t210-p1"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october3d-tools-astro-product-t210-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90-120psi",
			"evidenceIds": [
				"october3d-tools-astro-product-t210-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-astro-product-t210-p1",
			"sourceUrl": "https://www.astrotools.com/product/1-4-medium-die-grinder-with-safety-lever-rear-exhaust-japan-bearings-22-000rpm/",
			"sourceLabel": "Astro Pneumatic, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 aabccb7f3eeff0c46dd4e2a3bb21e0760835da9829c17460f8c47e0b8c05292d. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-astro-product-t210-p1"
		],
		"workingPressureBar": [
			"october3d-tools-astro-product-t210-p1"
		],
		"demandExplanation": [
			"october3d-tools-astro-product-t210-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
