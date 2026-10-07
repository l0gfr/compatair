import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-2341l14",
	"slug": "meuleuse-gatx-gp-2341l14",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-2341L14",
	"brand": "GATX",
	"model": "GP-2341L14",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-2341l14.svg",
		"alt": "Repères techniques : GATX GP-2341L14",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2341L14",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2341l14",
		"label": "Modèle GP-2341L14, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2341L14",
			"Collet (Option)": "1/4\" or 6 mm",
			"Free Speed": "22,000 RPM"
		}
	},
	"editorial": {
		"overview": "GATX GP-2341L14. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Collet (Option) : 1/4\" or 6 mm.",
			"Free Speed : 22,000 RPM.",
			"Power : 373 W (0.5 HP).",
			"Air Pressure : 6.2 bar (90 PSI).",
			"Air Consumption : 99.2 L/min.",
			"Exhaust : Rear.",
			"Air Inlet : 1/4\".",
			"Min Hose Size : 10mm (3/8\").",
			"Weight : 0.8 kg.",
			"Length : 285 mm."
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
			"label": "Collet (Option)",
			"value": "1/4\" or 6 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7411-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "22,000 RPM",
			"evidenceIds": [
				"october5-tools-gatx-product-7411-p1"
			]
		},
		{
			"label": "Power",
			"value": "373 W (0.5 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-7411-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 PSI)",
			"evidenceIds": [
				"october5-tools-gatx-product-7411-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "99.2 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-7411-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Rear",
			"evidenceIds": [
				"october5-tools-gatx-product-7411-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7411-p1"
			]
		},
		{
			"label": "Min Hose Size",
			"value": "10mm (3/8\")",
			"evidenceIds": [
				"october5-tools-gatx-product-7411-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.8 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-7411-p1"
			]
		},
		{
			"label": "Length",
			"value": "285 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7411-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7411-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2341L14",
			"sourceLabel": "GATX : fiche technique GP-2341L14",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 8bd9798166f97aca26dd755b6882e5c079cc3dbeeddc4a666fd2e1501ddbcced. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7411-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7411-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7411-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
