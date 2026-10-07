import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-universal-tool-ut8893-5",
	"slug": "perceuse-universal-tool-ut8893-5",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Universal Tool UT8893-5",
	"brand": "Universal Tool",
	"model": "UT8893-5",
	"mpn": "UT8893-5",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/4-in. (Air Inlet  (NPT / BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-universal-tool-ut8893-5.webp",
		"alt": "Repères techniques : Universal Tool UT8893-5",
		"sourceUrl": "https://continentaltoolgroup.com/product/aircraft-angle-drill-500-rpm/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "universal-tool-ut8893-5",
		"label": "Référence UT8893-5",
		"distinguishingAttributes": {
			"reference": "UT8893-5",
			"Masse contradictoire publiée": "2.5 lb / 0.65 kg",
			"Longueur publiée": "278 mm"
		}
	},
	"editorial": {
		"overview": "Universal Tool UT8893-5. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse contradictoire publiée : 2.5 lb / 0.65 kg. Longueur publiée : 278 mm.",
		"verifiedFacts": [
			"Masse contradictoire publiée : 2.5 lb / 0.65 kg.",
			"Longueur publiée : 278 mm.",
			"Vitesse publiée : 500 tr/min.",
			"Puissance publiée : 0.9 HP.",
			"Échappement : Rear."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Les masses en livres et en kilogrammes publiées sur cette fiche sont incompatibles. Masse utilisable à confirmer auprès du fabricant ; aucune valeur corrigée supposée.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse contradictoire publiée",
			"value": "2.5 lb / 0.65 kg",
			"evidenceIds": [
				"october2-tools-ctg-pdp-399-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "278 mm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-399-p1"
			]
		},
		{
			"label": "Vitesse publiée",
			"value": "500 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-399-p1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "0.9 HP",
			"evidenceIds": [
				"october2-tools-ctg-pdp-399-p1"
			]
		},
		{
			"label": "Échappement",
			"value": "Rear",
			"evidenceIds": [
				"october2-tools-ctg-pdp-399-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet  (NPT / BSP)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-399-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-399-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Rec. Air Pressure: 90 psi-6.2 bar",
			"evidenceIds": [
				"october2-tools-ctg-pdp-399-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "4.5 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-399-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-399-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/aircraft-angle-drill-500-rpm/",
			"sourceLabel": "Universal Tool, fiche fabricant de la référence UT8893-5",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : f2bc94b7dfc51d1daf2cd779da09ac99a1cd7ff8f08bac6e8f16f6b5effb4411. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-399-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-399-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-399-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-399-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
