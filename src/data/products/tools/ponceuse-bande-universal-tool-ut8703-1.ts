import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-bande-universal-tool-ut8703-1",
	"slug": "ponceuse-bande-universal-tool-ut8703-1",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "Universal Tool UT8703-1",
	"brand": "Universal Tool",
	"model": "UT8703-1",
	"mpn": "UT8703-1",
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
		"src": "/images/products/ponceuse-bande-universal-tool-ut8703-1.webp",
		"alt": "Repères techniques : Universal Tool UT8703-1",
		"sourceUrl": "https://continentaltoolgroup.com/product/belt-sander-7/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "universal-tool-ut8703-1",
		"label": "Référence UT8703-1",
		"distinguishingAttributes": {
			"reference": "UT8703-1",
			"Masse publiée": "1.3 kg",
			"Longueur publiée": "390 mm"
		}
	},
	"editorial": {
		"overview": "Universal Tool UT8703-1. La UT8703-1 utilise la bande 3/4 × 20,5 pouces et un corps de 390 mm. Les UT8701 et UT8702-1 sont des machines plus courtes de 279 mm ; leur équipement de bande ne se déduit pas de ce modèle. La fiche indique 4 CFM dans les deux champs général et moyen, sans régime maximal ni pression exacte de mesure ; aucun maximum n’en est déduit.",
		"verifiedFacts": [
			"Bande : 3/4 pouce × 20,5 pouces.",
			"Vitesse : 18 000 tr/min.",
			"Puissance : 0,3 HP.",
			"Longueur : 390 mm.",
			"Consommation publiée et moyenne : 4 CFM dans les deux champs."
		],
		"limitations": [
			"Régime et pression de mesure non suffisamment documentés ; les valeurs restent hors calcul conclusif.",
			"Les colonnes contradictoires éventuelles restent attribuées à la source, sans correction devinée."
		]
	},
	"specifications": [
		{
			"label": "Bande",
			"value": "3/4 pouce × 20,5 pouces",
			"evidenceIds": [
				"ponceuse-bande-universal-tool-ut8703-1-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse",
			"value": "18 000 tr/min",
			"evidenceIds": [
				"ponceuse-bande-universal-tool-ut8703-1-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance",
			"value": "0,3 HP",
			"evidenceIds": [
				"ponceuse-bande-universal-tool-ut8703-1-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "390 mm",
			"evidenceIds": [
				"ponceuse-bande-universal-tool-ut8703-1-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation publiée et moyenne",
			"value": "4 CFM dans les deux champs",
			"evidenceIds": [
				"ponceuse-bande-universal-tool-ut8703-1-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-272-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/belt-sander-7/",
			"sourceLabel": "Universal Tool, fiche fabricant de la référence UT8703-1",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b08cd3c3126d7c1c6fe2bf8104e88e60433647780b4e4231ec37c4f7600740c1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "ponceuse-bande-universal-tool-ut8703-1-reserved-20261103-1",
			"sourceUrl": "https://continentaltoolgroup.com/product/belt-sander-7/",
			"sourceLabel": "Universal Tool : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 b17580ac4c602e2d37103fe32f678f3ed449a407ad093f00da6932d20272208d. La UT8703-1 utilise la bande 3/4 × 20,5 pouces et un corps de 390 mm. Les UT8701 et UT8702-1 sont des machines plus courtes de 279 mm ; leur équipement de bande ne se déduit pas de ce modèle. La fiche indique 4 CFM dans les deux champs général et moyen, sans régime maximal ni pression exacte de mesure ; aucun maximum n’en est déduit."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-272-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-272-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-272-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-272-p1"
		],
		"editorial": [
			"ponceuse-bande-universal-tool-ut8703-1-reserved-20261103-1"
		],
		"specifications": [
			"ponceuse-bande-universal-tool-ut8703-1-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
