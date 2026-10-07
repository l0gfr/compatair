import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-0507cw",
	"slug": "meuleuse-gatx-gp-0507cw",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-0507CW",
	"brand": "GATX",
	"model": "GP-0507CW",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-0507cw.svg",
		"alt": "Repères techniques : GATX GP-0507CW",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-0507CW",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-0507cw",
		"label": "Modèle GP-0507CW, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-0507CW",
			"Collet (option)": "1/4\"  or 6 mm",
			"Free Speed": "25,000 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-0507CW. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Collet (option) : 1/4\"  or 6 mm.",
			"Free Speed : 25,000 rpm.",
			"Power : 0.22 kW (0.3 HP).",
			"Air Consumption : 481 l/min.",
			"Air Pressure : 6.2 bar (90 psi ).",
			"Air Inlet : 1/4\".",
			"Exhaust : Front.",
			"Dia. x Length : 120 mm.",
			"Net Weight : 0.33 kg."
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
			"value": "1/4\"  or 6 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7409-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "25,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-7409-p1"
			]
		},
		{
			"label": "Power",
			"value": "0.22 kW (0.3 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-7409-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "481 l/min",
			"evidenceIds": [
				"october5-tools-gatx-product-7409-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi )",
			"evidenceIds": [
				"october5-tools-gatx-product-7409-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7409-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Front",
			"evidenceIds": [
				"october5-tools-gatx-product-7409-p1"
			]
		},
		{
			"label": "Dia. x Length",
			"value": "120 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7409-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.33 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-7409-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7409-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-0507CW",
			"sourceLabel": "GATX : fiche technique GP-0507CW",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 fdb0299f49937bb6bff17b9aca75be4eeaca76c08d41001f7a951a53cfdebc6c. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7409-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7409-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7409-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
