import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "soufflette-tengtools-arb01",
	"slug": "soufflette-tengtools-arb01",
	"categoryId": "soufflette",
	"category": "soufflette",
	"label": "TengTools ARB01",
	"brand": "TengTools",
	"model": "ARB01",
	"mpn": "ARB01",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Cette fiche précise la buse, la longueur et le raccord d’entrée, mais ne publie pas la consommation de la soufflette ni son point de pression. Aucun débit n’est déduit de la seule géométrie.",
	"confidence": "B",
	"image": {
		"src": "/images/products/soufflette-tengtools-arb01.webp",
		"alt": "Repères techniques : TengTools ARB01",
		"sourceUrl": "https://www.tengtools.com/en-gb/collections/air-tools/products/air-blow-gun-127mm",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "tengtools-arb01",
		"label": "Référence ARB01",
		"distinguishingAttributes": {
			"reference": "ARB01",
			"Product Type": "Air Blow Guns",
			"Nozzle length (mm)": "100"
		}
	},
	"editorial": {
		"overview": "TengTools ARB01. Cette fiche précise la buse, la longueur et le raccord d’entrée, mais ne publie pas la consommation de la soufflette ni son point de pression. Aucun débit n’est déduit de la seule géométrie. Product Type : Air Blow Guns. Nozzle length (mm) : 100.",
		"verifiedFacts": [
			"Product Type : Air Blow Guns.",
			"Nozzle length (mm) : 100.",
			"Air inlet (inch) : 1/4.",
			"Item weight (g) : 101.",
			"Length : 212 mm."
		],
		"limitations": [
			"Cette fiche précise la buse, la longueur et le raccord d’entrée, mais ne publie pas la consommation de la soufflette ni son point de pression. Aucun débit n’est déduit de la seule géométrie.",
			"Le titre nomme 127 mm, tandis que la cellule Nozzle length indique 100 mm. Les deux mentions restent distinctes ; aucune correction ou conversion implicite.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Product Type",
			"value": "Air Blow Guns",
			"evidenceIds": [
				"october3c-tools-teng-product-14-p1"
			]
		},
		{
			"label": "Nozzle length (mm)",
			"value": "100",
			"evidenceIds": [
				"october3c-tools-teng-product-14-p1"
			]
		},
		{
			"label": "Air inlet (inch)",
			"value": "1/4",
			"evidenceIds": [
				"october3c-tools-teng-product-14-p1"
			]
		},
		{
			"label": "Item weight (g)",
			"value": "101",
			"evidenceIds": [
				"october3c-tools-teng-product-14-p1"
			]
		},
		{
			"label": "Length",
			"value": "212 mm",
			"evidenceIds": [
				"october3c-tools-teng-product-14-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Point de mesure de consommation non établi dans la fiche exacte.",
			"evidenceIds": [
				"october3c-tools-teng-product-14-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-teng-product-14-p1",
			"sourceUrl": "https://www.tengtools.com/en-gb/collections/air-tools/products/air-blow-gun-127mm",
			"sourceLabel": "Fiche fabricant TengTools, référence exacte",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 02f9d138079a946477e8221c2bc36853f6428fea0edfb9af3bc42cb7b33b6161. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-teng-product-14-p1"
		],
		"workingPressureBar": [
			"october3c-tools-teng-product-14-p1"
		],
		"demandExplanation": [
			"october3c-tools-teng-product-14-p1"
		]
	},
	"notes": [
		"Cette fiche précise la buse, la longueur et le raccord d’entrée, mais ne publie pas la consommation de la soufflette ni son point de pression. Aucun débit n’est déduit de la seule géométrie."
	]
};

export default product;
