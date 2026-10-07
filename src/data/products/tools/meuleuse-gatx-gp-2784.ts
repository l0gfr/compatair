import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-2784",
	"slug": "meuleuse-gatx-gp-2784",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-2784",
	"brand": "GATX",
	"model": "GP-2784",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-2784.svg",
		"alt": "Repères techniques : GATX GP-2784",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2784",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2784",
		"label": "Modèle GP-2784, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2784",
			"Free Speed": "60,000 rpm",
			"Collet (Option)": "3/32\", 1/8\" or  3 mm"
		}
	},
	"editorial": {
		"overview": "GATX GP-2784. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 60,000 rpm.",
			"Collet (Option) : 3/32\", 1/8\" or  3 mm.",
			"Exhaust : Rear.",
			"Air Consumption : 180 L/min.",
			"Air Pressure : 6.2 bar ( 90 psi).",
			"Air Inlet : 1/4\".",
			"Hose Length : 1500 mm.",
			"Tool Dimension : 19 mm.",
			"Overall Length : 120 mm.",
			"Net Weight : 0.2 kg."
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
			"value": "60,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-7768-p1"
			]
		},
		{
			"label": "Collet (Option)",
			"value": "3/32\", 1/8\" or  3 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7768-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Rear",
			"evidenceIds": [
				"october5-tools-gatx-product-7768-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "180 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-7768-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar ( 90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-7768-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7768-p1"
			]
		},
		{
			"label": "Hose Length",
			"value": "1500 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7768-p1"
			]
		},
		{
			"label": "Tool Dimension",
			"value": "19 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7768-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "120 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7768-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.2 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-7768-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7768-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2784",
			"sourceLabel": "GATX : fiche technique GP-2784",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 9ad522a7829fb61ffdac6c1b55cbb06f98dd73f1f062dfaaf1e70213a86dce89. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7768-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7768-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7768-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
