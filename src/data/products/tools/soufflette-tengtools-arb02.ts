import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "soufflette-tengtools-arb02",
	"slug": "soufflette-tengtools-arb02",
	"categoryId": "soufflette",
	"category": "soufflette",
	"label": "TengTools ARB02",
	"brand": "TengTools",
	"model": "ARB02",
	"mpn": "ARB02",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Cette fiche précise la buse, la longueur et le raccord d’entrée, mais ne publie pas la consommation de la soufflette ni son point de pression. Aucun débit n’est déduit de la seule géométrie.",
	"confidence": "B",
	"image": {
		"src": "/images/products/soufflette-tengtools-arb02.webp",
		"alt": "Repères techniques : TengTools ARB02",
		"sourceUrl": "https://www.tengtools.com/en-gb/collections/air-tools/products/air-blow-gun-300mm",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "tengtools-arb02",
		"label": "Référence ARB02",
		"distinguishingAttributes": {
			"reference": "ARB02",
			"Product Type": "Air Blow Guns",
			"Nozzle length (mm)": "270"
		}
	},
	"editorial": {
		"overview": "TengTools ARB02. Cette fiche précise la buse, la longueur et le raccord d’entrée, mais ne publie pas la consommation de la soufflette ni son point de pression. Aucun débit n’est déduit de la seule géométrie. Product Type : Air Blow Guns. Nozzle length (mm) : 270.",
		"verifiedFacts": [
			"Product Type : Air Blow Guns.",
			"Nozzle length (mm) : 270.",
			"Air inlet (inch) : 1/4.",
			"Item weight (g) : 128.",
			"Length : 360 mm."
		],
		"limitations": [
			"Cette fiche précise la buse, la longueur et le raccord d’entrée, mais ne publie pas la consommation de la soufflette ni son point de pression. Aucun débit n’est déduit de la seule géométrie.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Product Type",
			"value": "Air Blow Guns",
			"evidenceIds": [
				"october3c-tools-teng-product-13-p1"
			]
		},
		{
			"label": "Nozzle length (mm)",
			"value": "270",
			"evidenceIds": [
				"october3c-tools-teng-product-13-p1"
			]
		},
		{
			"label": "Air inlet (inch)",
			"value": "1/4",
			"evidenceIds": [
				"october3c-tools-teng-product-13-p1"
			]
		},
		{
			"label": "Item weight (g)",
			"value": "128",
			"evidenceIds": [
				"october3c-tools-teng-product-13-p1"
			]
		},
		{
			"label": "Length",
			"value": "360 mm",
			"evidenceIds": [
				"october3c-tools-teng-product-13-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Point de mesure de consommation non établi dans la fiche exacte.",
			"evidenceIds": [
				"october3c-tools-teng-product-13-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-teng-product-13-p1",
			"sourceUrl": "https://www.tengtools.com/en-gb/collections/air-tools/products/air-blow-gun-300mm",
			"sourceLabel": "Fiche fabricant TengTools, référence exacte",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 389ad586028dd0b6da67e07d8e3cef327f8bbf31f2eb866853bf138a44c86cdc. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-teng-product-13-p1"
		],
		"workingPressureBar": [
			"october3c-tools-teng-product-13-p1"
		],
		"demandExplanation": [
			"october3c-tools-teng-product-13-p1"
		]
	},
	"notes": [
		"Cette fiche précise la buse, la longueur et le raccord d’entrée, mais ne publie pas la consommation de la soufflette ni son point de pression. Aucun débit n’est déduit de la seule géométrie."
	]
};

export default product;
