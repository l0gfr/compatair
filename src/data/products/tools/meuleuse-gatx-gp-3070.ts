import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-3070",
	"slug": "meuleuse-gatx-gp-3070",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-3070",
	"brand": "GATX",
	"model": "GP-3070",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-3070.svg",
		"alt": "Repères techniques : GATX GP-3070",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-3070",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-3070",
		"label": "Modèle GP-3070, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-3070",
			"Free Speed": "22,000 rpm",
			"Collet (Option)": "1/4\" or 6 mm"
		}
	},
	"editorial": {
		"overview": "GATX GP-3070. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 22,000 rpm.",
			"Collet (Option) : 1/4\" or 6 mm.",
			"Motor Power : 375 W (0.5 HP).",
			"Exhaust : Rear.",
			"Air Consumption : 114 L/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Hose Size : 3/8\".",
			"Length : 170 mm.",
			"Net Weight : 0.7 kg."
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
			"value": "22,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-8573-p1"
			]
		},
		{
			"label": "Collet (Option)",
			"value": "1/4\" or 6 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-8573-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "375 W (0.5 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-8573-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Rear",
			"evidenceIds": [
				"october5-tools-gatx-product-8573-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "114 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-8573-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-8573-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-8573-p1"
			]
		},
		{
			"label": "Hose Size",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-8573-p1"
			]
		},
		{
			"label": "Length",
			"value": "170 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-8573-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.7 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-8573-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-8573-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-3070",
			"sourceLabel": "GATX : fiche technique GP-3070",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 6258b2b5c24602cdd90554b89d165cc919e4302fb90fac0c198492b320b8ebcf. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-8573-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-8573-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-8573-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
