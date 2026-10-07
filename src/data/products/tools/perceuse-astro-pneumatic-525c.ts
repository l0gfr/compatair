import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-astro-pneumatic-525c",
	"slug": "perceuse-astro-pneumatic-525c",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Astro Pneumatic 525C",
	"brand": "Astro Pneumatic",
	"model": "525C",
	"mpn": "525C",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-astro-pneumatic-525c.svg",
		"alt": "Repères techniques : Astro Pneumatic 525C",
		"sourceUrl": "https://www.astrotools.com/product/3-8-reversible-air-drill-1-800rpm/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "astro-pneumatic-525c",
		"label": "Référence 525C",
		"distinguishingAttributes": {
			"reference": "525C",
			"Vitesse à vide": "1,800rpm",
			"Longueur hors tout": "7-7/8\" (200mm)"
		}
	},
	"editorial": {
		"overview": "Astro Pneumatic 525C. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Vitesse à vide : 1,800rpm.",
			"Longueur hors tout : 7-7/8\" (200mm).",
			"Masse nette : 2-1/2lbs. (1.1kg).",
			"Filetage d’arrivée d’air : 1/4\".",
			"Diamètre intérieur du flexible : 3/8\" (10mm).",
			"Consommation moyenne, hors calcul : 7cfm.",
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
			"label": "Vitesse à vide",
			"value": "1,800rpm",
			"evidenceIds": [
				"october3d-tools-astro-product-525c-p1"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "7-7/8\" (200mm)",
			"evidenceIds": [
				"october3d-tools-astro-product-525c-p1"
			]
		},
		{
			"label": "Masse nette",
			"value": "2-1/2lbs. (1.1kg)",
			"evidenceIds": [
				"october3d-tools-astro-product-525c-p1"
			]
		},
		{
			"label": "Filetage d’arrivée d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"october3d-tools-astro-product-525c-p1"
			]
		},
		{
			"label": "Diamètre intérieur du flexible",
			"value": "3/8\" (10mm)",
			"evidenceIds": [
				"october3d-tools-astro-product-525c-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "7cfm",
			"evidenceIds": [
				"october3d-tools-astro-product-525c-p1"
			]
		},
		{
			"label": "Pression d’air publiée",
			"value": "90-120psi",
			"evidenceIds": [
				"october3d-tools-astro-product-525c-p1"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "7 cfm",
			"evidenceIds": [
				"october3d-tools-astro-product-525c-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90-120psi",
			"evidenceIds": [
				"october3d-tools-astro-product-525c-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-astro-product-525c-p1",
			"sourceUrl": "https://www.astrotools.com/product/3-8-reversible-air-drill-1-800rpm/",
			"sourceLabel": "Astro Pneumatic, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 af1ac4591b55c200d382af546dee83720093e0449c49c53982f624eb45e394ba. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-astro-product-525c-p1"
		],
		"workingPressureBar": [
			"october3d-tools-astro-product-525c-p1"
		],
		"demandExplanation": [
			"october3d-tools-astro-product-525c-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
