import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-3851",
	"slug": "meuleuse-gatx-gp-3851",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-3851",
	"brand": "GATX",
	"model": "GP-3851",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-3851.svg",
		"alt": "Repères techniques : GATX GP-3851",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-3851",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-3851",
		"label": "Modèle GP-3851, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-3851",
			"Free Speed": "18,000 RPM",
			"Collet (option)": "1/4\", 6 or 8 mm"
		}
	},
	"editorial": {
		"overview": "GATX GP-3851. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 18,000 RPM.",
			"Collet (option) : 1/4\", 6 or 8 mm.",
			"Power : 750 W (1.0 HP).",
			"Air Consumption : 127 L/min.",
			"Air Pressure : 6.2 bar (90 PSI).",
			"Air Inlet : 1/4\".",
			"Air Hose : 3/8\".",
			"Overall Length : 215mm.",
			"Net Weight : 0.9 kg."
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
			"label": "Free Speed",
			"value": "18,000 RPM",
			"evidenceIds": [
				"october5-tools-gatx-product-8382-p1"
			]
		},
		{
			"label": "Collet (option)",
			"value": "1/4\", 6 or 8 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-8382-p1"
			]
		},
		{
			"label": "Power",
			"value": "750 W (1.0 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-8382-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "127 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-8382-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 PSI)",
			"evidenceIds": [
				"october5-tools-gatx-product-8382-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-8382-p1"
			]
		},
		{
			"label": "Air Hose",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-8382-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "215mm",
			"evidenceIds": [
				"october5-tools-gatx-product-8382-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.9 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-8382-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-8382-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-3851",
			"sourceLabel": "GATX : fiche technique GP-3851",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 d373698cd4ab1cccd6471a6c599425a6dba7d572cef486c43a84b1fb3ae06242. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-8382-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-8382-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-8382-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
