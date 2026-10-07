import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-3825g",
	"slug": "meuleuse-gatx-gp-3825g",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-3825G",
	"brand": "GATX",
	"model": "GP-3825G",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-3825g.svg",
		"alt": "Repères techniques : GATX GP-3825G",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-3825G",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-3825g",
		"label": "Modèle GP-3825G, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-3825G",
			"Collet Size": "1/4\"",
			"Variable Speed": "18,000 RPM"
		}
	},
	"editorial": {
		"overview": "GATX GP-3825G. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Collet Size : 1/4\".",
			"Variable Speed : 18,000 RPM.",
			"Power : 335.56 W (0.45 HP).",
			"Air Consumption : 99.11 L/Min..",
			"Air Pressure : 6.2 Bar (90 PSI).",
			"Air Inlet : 6.35 mm (1/4\").",
			"Hose Size : 9.5 mm (3/8\").",
			"Exhaust : Handle.",
			"Noise Level : 84 dBA.",
			"Overall Length : 155 mm.",
			"Weight : 0.7 Kg."
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
			"label": "Collet Size",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7233-p1"
			]
		},
		{
			"label": "Variable Speed",
			"value": "18,000 RPM",
			"evidenceIds": [
				"october5-tools-gatx-product-7233-p1"
			]
		},
		{
			"label": "Power",
			"value": "335.56 W (0.45 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-7233-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "99.11 L/Min.",
			"evidenceIds": [
				"october5-tools-gatx-product-7233-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 Bar (90 PSI)",
			"evidenceIds": [
				"october5-tools-gatx-product-7233-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "6.35 mm (1/4\")",
			"evidenceIds": [
				"october5-tools-gatx-product-7233-p1"
			]
		},
		{
			"label": "Hose Size",
			"value": "9.5 mm (3/8\")",
			"evidenceIds": [
				"october5-tools-gatx-product-7233-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Handle",
			"evidenceIds": [
				"october5-tools-gatx-product-7233-p1"
			]
		},
		{
			"label": "Noise Level",
			"value": "84 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-7233-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "155 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7233-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.7 Kg",
			"evidenceIds": [
				"october5-tools-gatx-product-7233-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7233-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-3825G",
			"sourceLabel": "GATX : fiche technique GP-3825G",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 2d5a6591de113fbf154360517f0f78a8c43c6dcad92fef54ef22564f21b64e21. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7233-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7233-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7233-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
