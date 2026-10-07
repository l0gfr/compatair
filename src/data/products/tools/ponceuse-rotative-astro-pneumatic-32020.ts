import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-rotative-astro-pneumatic-32020",
	"slug": "ponceuse-rotative-astro-pneumatic-32020",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Astro Pneumatic 32020",
	"brand": "Astro Pneumatic",
	"model": "32020",
	"mpn": "32020",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les unités de consommation publiées sont contradictoires ; aucune valeur n’est arbitrée pour calculer un débit.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-rotative-astro-pneumatic-32020.svg",
		"alt": "Repères techniques : Astro Pneumatic 32020",
		"sourceUrl": "https://www.astrotools.com/product/onyx-flex-head-2-micro-air-sander/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "astro-pneumatic-32020",
		"label": "Référence 32020",
		"distinguishingAttributes": {
			"reference": "32020",
			"Puissance": "0.35 hp",
			"Dimension du plateau": "2\""
		}
	},
	"editorial": {
		"overview": "Astro Pneumatic 32020. Les unités de consommation publiées sont contradictoires ; aucune valeur n’est arbitrée pour calculer un débit.",
		"verifiedFacts": [
			"Puissance : 0.35 hp.",
			"Dimension du plateau : 2\".",
			"Orbite : None.",
			"Vitesse à vide : 19,000 rpm.",
			"Pression et puissance sonores : 80/91dBA.",
			"Masse : 1.43lb/0.65kg.",
			"Hauteur avec plateau : 3.24\"/82.4mm.",
			"Consommation à 90 psi, régime inconnu : 3.14cfm / 88L/mm.",
			"Arrivée d’air : 1/4\".",
			"Diamètre minimal du flexible : 3/8\"(10mm)."
		],
		"limitations": [
			"Les unités de consommation publiées sont contradictoires ; aucune valeur n’est arbitrée pour calculer un débit.",
			"La consommation moyenne ou sans régime publié reste hors calcul ; aucun débit en charge à pression de mesure connue n’est extrapolé.",
			"Une pression recommandée ou de service n’est pas un point de mesure de la consommation.",
			"La fiche écrit 3.14 cfm / 88 L/mm : L/mm n’est pas corrigé en L/min. Le point à 90 psi est conservé comme texte de mesure, avec régime non établi et aucune demande numérique retenue.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Puissance",
			"value": "0.35 hp",
			"evidenceIds": [
				"october3d-tools-astro-product-32020-p1"
			]
		},
		{
			"label": "Dimension du plateau",
			"value": "2\"",
			"evidenceIds": [
				"october3d-tools-astro-product-32020-p1"
			]
		},
		{
			"label": "Orbite",
			"value": "None",
			"evidenceIds": [
				"october3d-tools-astro-product-32020-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "19,000 rpm",
			"evidenceIds": [
				"october3d-tools-astro-product-32020-p1"
			]
		},
		{
			"label": "Pression et puissance sonores",
			"value": "80/91dBA",
			"evidenceIds": [
				"october3d-tools-astro-product-32020-p1"
			]
		},
		{
			"label": "Masse",
			"value": "1.43lb/0.65kg",
			"evidenceIds": [
				"october3d-tools-astro-product-32020-p1"
			]
		},
		{
			"label": "Hauteur avec plateau",
			"value": "3.24\"/82.4mm",
			"evidenceIds": [
				"october3d-tools-astro-product-32020-p1"
			]
		},
		{
			"label": "Consommation à 90 psi, régime inconnu",
			"value": "3.14cfm / 88L/mm",
			"evidenceIds": [
				"october3d-tools-astro-product-32020-p1"
			]
		},
		{
			"label": "Arrivée d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"october3d-tools-astro-product-32020-p1"
			]
		},
		{
			"label": "Diamètre minimal du flexible",
			"value": "3/8\"(10mm)",
			"evidenceIds": [
				"october3d-tools-astro-product-32020-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption @90psi: 3.14cfm / 88L/mm",
			"evidenceIds": [
				"october3d-tools-astro-product-32020-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-astro-product-32020-p1",
			"sourceUrl": "https://www.astrotools.com/product/onyx-flex-head-2-micro-air-sander/",
			"sourceLabel": "Astro Pneumatic, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 3c4e66b1565d5f22d7ae8261d5c956e7dcf0e82b12f4c2df1ed6b3af71549baa. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-astro-product-32020-p1"
		],
		"workingPressureBar": [
			"october3d-tools-astro-product-32020-p1"
		],
		"demandExplanation": [
			"october3d-tools-astro-product-32020-p1"
		]
	},
	"notes": [
		"Les unités de consommation publiées sont contradictoires ; aucune valeur n’est arbitrée pour calculer un débit."
	]
};

export default product;
