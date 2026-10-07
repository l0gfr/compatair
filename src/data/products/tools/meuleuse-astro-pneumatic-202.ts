import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-astro-pneumatic-202",
	"slug": "meuleuse-astro-pneumatic-202",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Astro Pneumatic 202",
	"brand": "Astro Pneumatic",
	"model": "202",
	"mpn": "202",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-astro-pneumatic-202.svg",
		"alt": "Repères techniques : Astro Pneumatic 202",
		"sourceUrl": "https://www.astrotools.com/product/onyx-composite-body-1-4-medium-die-grinder-22-000rpm-rear-exhaust/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "astro-pneumatic-202",
		"label": "Référence 202",
		"distinguishingAttributes": {
			"reference": "202",
			"Pince": "1/4\"",
			"Vitesse à vide": "22,000rpm"
		}
	},
	"editorial": {
		"overview": "Astro Pneumatic 202. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Pince : 1/4\".",
			"Vitesse à vide : 22,000rpm.",
			"Longueur hors tout : 6-3/4\" (171mm).",
			"Masse nette : 1.4lbs (.63kgs).",
			"Filetage d’arrivée d’air : 1/4\".",
			"Diamètre intérieur du flexible : 3/8\" (10mm).",
			"Consommation moyenne, hors calcul : 3cfm.",
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
				"october3d-tools-astro-product-202-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "22,000rpm",
			"evidenceIds": [
				"october3d-tools-astro-product-202-p1"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "6-3/4\" (171mm)",
			"evidenceIds": [
				"october3d-tools-astro-product-202-p1"
			]
		},
		{
			"label": "Masse nette",
			"value": "1.4lbs (.63kgs)",
			"evidenceIds": [
				"october3d-tools-astro-product-202-p1"
			]
		},
		{
			"label": "Filetage d’arrivée d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"october3d-tools-astro-product-202-p1"
			]
		},
		{
			"label": "Diamètre intérieur du flexible",
			"value": "3/8\" (10mm)",
			"evidenceIds": [
				"october3d-tools-astro-product-202-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "3cfm",
			"evidenceIds": [
				"october3d-tools-astro-product-202-p1"
			]
		},
		{
			"label": "Pression d’air publiée",
			"value": "90-120psi",
			"evidenceIds": [
				"october3d-tools-astro-product-202-p1"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "3 cfm",
			"evidenceIds": [
				"october3d-tools-astro-product-202-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90-120psi",
			"evidenceIds": [
				"october3d-tools-astro-product-202-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-astro-product-202-p1",
			"sourceUrl": "https://www.astrotools.com/product/onyx-composite-body-1-4-medium-die-grinder-22-000rpm-rear-exhaust/",
			"sourceLabel": "Astro Pneumatic, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 8f09cea786e84623beb79186893b79aeca8e1778dfecc4e1cd77107f17a32bfc. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-astro-product-202-p1"
		],
		"workingPressureBar": [
			"october3d-tools-astro-product-202-p1"
		],
		"demandExplanation": [
			"october3d-tools-astro-product-202-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
