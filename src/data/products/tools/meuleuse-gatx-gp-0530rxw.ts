import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-0530rxw",
	"slug": "meuleuse-gatx-gp-0530rxw",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-0530RXW",
	"brand": "GATX",
	"model": "GP-0530RXW",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-0530rxw.svg",
		"alt": "Repères techniques : GATX GP-0530RXW",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-0530RXW",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-0530rxw",
		"label": "Modèle GP-0530RXW, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-0530RXW",
			"Collet (option)": "1/4\" or 6 mm",
			"Free Speed": "18,000 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-0530RXW. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Collet (option) : 1/4\" or 6 mm.",
			"Free Speed : 18,000 rpm.",
			"Exhaust : Front.",
			"Air Consumption : 424.5 L/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Hose Size (ID) : 1/4\".",
			"Length : 124 mm.",
			"Weight : 0.45 kg."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"Le constructeur indique une consommation d’air sans préciser systématiquement marche à vide, moyenne ou charge. Les valeurs non qualifiées ne reçoivent pas de verdict conclusif.",
			"Une pression de service indiquée séparément ne devient pas automatiquement une pression de mesure du débit. La liste web ne garantit pas une disponibilité en France.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Collet (option)",
			"value": "1/4\" or 6 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-5835-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "18,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-5835-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Front",
			"evidenceIds": [
				"october5-tools-gatx-product-5835-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "424.5 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-5835-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-5835-p1"
			]
		},
		{
			"label": "Hose Size (ID)",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-5835-p1"
			]
		},
		{
			"label": "Length",
			"value": "124 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-5835-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.45 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-5835-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-5835-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-0530RXW",
			"sourceLabel": "GATX : fiche technique GP-0530RXW",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 248caf2749476ba718da48d344819d9ae3763df4a74152f61ccdf64dc60991d3. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-5835-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-5835-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-5835-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
