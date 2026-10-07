import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "tronconneuse-astro-pneumatic-208",
	"slug": "tronconneuse-astro-pneumatic-208",
	"categoryId": "tronconneuse",
	"category": "tronconneuse",
	"label": "Astro Pneumatic 208",
	"brand": "Astro Pneumatic",
	"model": "208",
	"mpn": "208",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/tronconneuse-astro-pneumatic-208.svg",
		"alt": "Repères techniques : Astro Pneumatic 208",
		"sourceUrl": "https://www.astrotools.com/product/onyx-3-cut-off-tool/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "astro-pneumatic-208",
		"label": "Référence 208",
		"distinguishingAttributes": {
			"reference": "208",
			"Diamètre de meule": "3\"",
			"Vitesse à vide": "20,000rpm"
		}
	},
	"editorial": {
		"overview": "Astro Pneumatic 208. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Diamètre de meule : 3\".",
			"Vitesse à vide : 20,000rpm.",
			"Longueur hors tout : 7\" (180mm).",
			"Masse nette : 1-3/4lbs. (0.84kg).",
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
			"label": "Diamètre de meule",
			"value": "3\"",
			"evidenceIds": [
				"october3d-tools-astro-product-208-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "20,000rpm",
			"evidenceIds": [
				"october3d-tools-astro-product-208-p1"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "7\" (180mm)",
			"evidenceIds": [
				"october3d-tools-astro-product-208-p1"
			]
		},
		{
			"label": "Masse nette",
			"value": "1-3/4lbs. (0.84kg)",
			"evidenceIds": [
				"october3d-tools-astro-product-208-p1"
			]
		},
		{
			"label": "Filetage d’arrivée d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"october3d-tools-astro-product-208-p1"
			]
		},
		{
			"label": "Diamètre intérieur du flexible",
			"value": "3/8\" (10mm)",
			"evidenceIds": [
				"october3d-tools-astro-product-208-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4cfm",
			"evidenceIds": [
				"october3d-tools-astro-product-208-p1"
			]
		},
		{
			"label": "Pression d’air publiée",
			"value": "90-120psi",
			"evidenceIds": [
				"october3d-tools-astro-product-208-p1"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october3d-tools-astro-product-208-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90-120psi",
			"evidenceIds": [
				"october3d-tools-astro-product-208-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-astro-product-208-p1",
			"sourceUrl": "https://www.astrotools.com/product/onyx-3-cut-off-tool/",
			"sourceLabel": "Astro Pneumatic, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 a30ecc541fb92b55a7ede2b342a538ed7d4fee7d8dc7390aedb357d63330c78e. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-astro-product-208-p1"
		],
		"workingPressureBar": [
			"october3d-tools-astro-product-208-p1"
		],
		"demandExplanation": [
			"october3d-tools-astro-product-208-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
