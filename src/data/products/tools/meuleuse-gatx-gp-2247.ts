import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-2247",
	"slug": "meuleuse-gatx-gp-2247",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-2247",
	"brand": "GATX",
	"model": "GP-2247",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-2247.svg",
		"alt": "Repères techniques : GATX GP-2247",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2247",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2247",
		"label": "Modèle GP-2247, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2247",
			"Free Speed": "70,000 rpm",
			"Collet (Option)": "1/8\"  or 3 mm"
		}
	},
	"editorial": {
		"overview": "GATX GP-2247. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 70,000 rpm.",
			"Collet (Option) : 1/8\"  or 3 mm.",
			"Exhaust : Rear.",
			"Air Consumption : 43 L/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Hose Size : 1/4\".",
			"Length : 181 mm.",
			"Net Weight : 0.1 kg."
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
			"value": "70,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-7795-p1"
			]
		},
		{
			"label": "Collet (Option)",
			"value": "1/8\"  or 3 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7795-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Rear",
			"evidenceIds": [
				"october5-tools-gatx-product-7795-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "43 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-7795-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-7795-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7795-p1"
			]
		},
		{
			"label": "Hose Size",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7795-p1"
			]
		},
		{
			"label": "Length",
			"value": "181 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7795-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.1 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-7795-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7795-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2247",
			"sourceLabel": "GATX : fiche technique GP-2247",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 a2b74f2dcc06f9593e3c9310300712296bc9f5d0b20ce903734599e4e189b05e. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7795-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7795-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7795-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
