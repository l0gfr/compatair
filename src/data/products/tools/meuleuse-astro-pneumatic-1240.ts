import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-astro-pneumatic-1240",
	"slug": "meuleuse-astro-pneumatic-1240",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Astro Pneumatic 1240",
	"brand": "Astro Pneumatic",
	"model": "1240",
	"mpn": "1240",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-astro-pneumatic-1240.svg",
		"alt": "Repères techniques : Astro Pneumatic 1240",
		"sourceUrl": "https://www.astrotools.com/product/blue-composite-body-1-4-90-angle-die-grinder-front-exhaust-20-000rpm/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "astro-pneumatic-1240",
		"label": "Référence 1240",
		"distinguishingAttributes": {
			"reference": "1240",
			"Pince": "1/4\"",
			"Vitesse à vide": "20,000rpm"
		}
	},
	"editorial": {
		"overview": "Astro Pneumatic 1240. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Pince : 1/4\".",
			"Vitesse à vide : 20,000rpm.",
			"Longueur hors tout : 5-3/4\" (146mm).",
			"Masse nette : 1lbs. (.45kg).",
			"Filetage d’arrivée d’air : 1/4\".",
			"Diamètre intérieur du flexible : 3/8\" (10mm).",
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
				"october3d-tools-astro-product-1240-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "20,000rpm",
			"evidenceIds": [
				"october3d-tools-astro-product-1240-p1"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "5-3/4\" (146mm)",
			"evidenceIds": [
				"october3d-tools-astro-product-1240-p1"
			]
		},
		{
			"label": "Masse nette",
			"value": "1lbs. (.45kg)",
			"evidenceIds": [
				"october3d-tools-astro-product-1240-p1"
			]
		},
		{
			"label": "Filetage d’arrivée d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"october3d-tools-astro-product-1240-p1"
			]
		},
		{
			"label": "Diamètre intérieur du flexible",
			"value": "3/8\" (10mm)",
			"evidenceIds": [
				"october3d-tools-astro-product-1240-p1"
			]
		},
		{
			"label": "Pression d’air publiée",
			"value": "90-120psi",
			"evidenceIds": [
				"october3d-tools-astro-product-1240-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90-120psi",
			"evidenceIds": [
				"october3d-tools-astro-product-1240-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-astro-product-1240-p1",
			"sourceUrl": "https://www.astrotools.com/product/blue-composite-body-1-4-90-angle-die-grinder-front-exhaust-20-000rpm/",
			"sourceLabel": "Astro Pneumatic, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 eb8cec25cf4508ad9f9b2a8fc3c50d535e2299eff2c316f728deb5735e88c4da. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-astro-product-1240-p1"
		],
		"workingPressureBar": [
			"october3d-tools-astro-product-1240-p1"
		],
		"demandExplanation": [
			"october3d-tools-astro-product-1240-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
