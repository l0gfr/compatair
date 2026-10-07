import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-astro-pneumatic-217",
	"slug": "meuleuse-astro-pneumatic-217",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Astro Pneumatic 217",
	"brand": "Astro Pneumatic",
	"model": "217",
	"mpn": "217",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-astro-pneumatic-217.svg",
		"alt": "Repères techniques : Astro Pneumatic 217",
		"sourceUrl": "https://www.astrotools.com/product/onyx-13-extended-shaft-die-grinder-1-4-collet/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "astro-pneumatic-217",
		"label": "Référence 217",
		"distinguishingAttributes": {
			"reference": "217",
			"Pince": "1/4\"",
			"Vitesse à vide": "20,000RPM"
		}
	},
	"editorial": {
		"overview": "Astro Pneumatic 217. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Pince : 1/4\".",
			"Vitesse à vide : 20,000RPM.",
			"Masse nette : 2.9lbs (1.3kgs).",
			"Filetage d’arrivée d’air : 1/4\".",
			"Diamètre intérieur du flexible : 3/8\".",
			"Consommation moyenne, hors calcul : 4CFM.",
			"Pression d’air publiée : 90PSI."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"La consommation moyenne ou sans régime publié reste hors calcul ; aucun débit en charge à pression de mesure connue n’est extrapolé.",
			"Une pression recommandée ou de service n’est pas un point de mesure de la consommation.",
			"Cellules écartées sans arbitrage en raison d’une incohérence d’unité, de conversion ou de libellé : Overall Length: 13\" (340mm). Les originaux sont conservés pour vérification.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Pince",
			"value": "1/4\"",
			"evidenceIds": [
				"october3d-tools-astro-product-217-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "20,000RPM",
			"evidenceIds": [
				"october3d-tools-astro-product-217-p1"
			]
		},
		{
			"label": "Masse nette",
			"value": "2.9lbs (1.3kgs)",
			"evidenceIds": [
				"october3d-tools-astro-product-217-p1"
			]
		},
		{
			"label": "Filetage d’arrivée d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"october3d-tools-astro-product-217-p1"
			]
		},
		{
			"label": "Diamètre intérieur du flexible",
			"value": "3/8\"",
			"evidenceIds": [
				"october3d-tools-astro-product-217-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4CFM",
			"evidenceIds": [
				"october3d-tools-astro-product-217-p1"
			]
		},
		{
			"label": "Pression d’air publiée",
			"value": "90PSI",
			"evidenceIds": [
				"october3d-tools-astro-product-217-p1"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october3d-tools-astro-product-217-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90PSI",
			"evidenceIds": [
				"october3d-tools-astro-product-217-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-astro-product-217-p1",
			"sourceUrl": "https://www.astrotools.com/product/onyx-13-extended-shaft-die-grinder-1-4-collet/",
			"sourceLabel": "Astro Pneumatic, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 8ff7ff825bff5134f3c557f4622f32fab34e4815ef44f8ab1d50fd88bcead37f. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-astro-product-217-p1"
		],
		"workingPressureBar": [
			"october3d-tools-astro-product-217-p1"
		],
		"demandExplanation": [
			"october3d-tools-astro-product-217-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
