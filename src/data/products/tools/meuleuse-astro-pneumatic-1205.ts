import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-astro-pneumatic-1205",
	"slug": "meuleuse-astro-pneumatic-1205",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Astro Pneumatic 1205",
	"brand": "Astro Pneumatic",
	"model": "1205",
	"mpn": "1205",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-astro-pneumatic-1205.svg",
		"alt": "Repères techniques : Astro Pneumatic 1205",
		"sourceUrl": "https://www.astrotools.com/product/composite-body-1-4-mini-die-grinder-with-safety-lever-25-000rpm/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "astro-pneumatic-1205",
		"label": "Référence 1205",
		"distinguishingAttributes": {
			"reference": "1205",
			"Pince": "1/4\"",
			"Vitesse à vide": "25,000rpm"
		}
	},
	"editorial": {
		"overview": "Astro Pneumatic 1205. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Pince : 1/4\".",
			"Vitesse à vide : 25,000rpm.",
			"Longueur hors tout : 4-3/4\" (120mm).",
			"Masse nette : 13/16lbs. (.37kg).",
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
				"october3d-tools-astro-product-1205-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "25,000rpm",
			"evidenceIds": [
				"october3d-tools-astro-product-1205-p1"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "4-3/4\" (120mm)",
			"evidenceIds": [
				"october3d-tools-astro-product-1205-p1"
			]
		},
		{
			"label": "Masse nette",
			"value": "13/16lbs. (.37kg)",
			"evidenceIds": [
				"october3d-tools-astro-product-1205-p1"
			]
		},
		{
			"label": "Filetage d’arrivée d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"october3d-tools-astro-product-1205-p1"
			]
		},
		{
			"label": "Diamètre intérieur du flexible",
			"value": "3/8\" (10mm)",
			"evidenceIds": [
				"october3d-tools-astro-product-1205-p1"
			]
		},
		{
			"label": "Pression d’air publiée",
			"value": "90-120psi",
			"evidenceIds": [
				"october3d-tools-astro-product-1205-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90-120psi",
			"evidenceIds": [
				"october3d-tools-astro-product-1205-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-astro-product-1205-p1",
			"sourceUrl": "https://www.astrotools.com/product/composite-body-1-4-mini-die-grinder-with-safety-lever-25-000rpm/",
			"sourceLabel": "Astro Pneumatic, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 26074eadbf64b0287069968941aa4ba26519b68707057dee48535aac639932a0. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-astro-product-1205-p1"
		],
		"workingPressureBar": [
			"october3d-tools-astro-product-1205-p1"
		],
		"demandExplanation": [
			"october3d-tools-astro-product-1205-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
