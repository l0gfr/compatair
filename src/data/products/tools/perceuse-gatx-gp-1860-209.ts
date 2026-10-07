import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gatx-gp-1860-209",
	"slug": "perceuse-gatx-gp-1860-209",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GATX GP-1860-209",
	"brand": "GATX",
	"model": "GP-1860-209",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gatx-gp-1860-209.svg",
		"alt": "Repères techniques : GATX GP-1860-209",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-1860-209",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-1860-209",
		"label": "Modèle GP-1860-209, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-1860-209",
			"Chuck Size": "1/4\" Jacob Industrial Keyed Chuck",
			"Free Speed": "18,000 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-1860-209. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Chuck Size : 1/4\" Jacob Industrial Keyed Chuck.",
			"Free Speed : 18,000 rpm.",
			"Speed Control : Variable.",
			"Motor Power : 450 W (0.6 HP).",
			"Spindle Thread : 3/8\"-24.",
			"Exhaust : Handle.",
			"Air Consumption : 400 L/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Hose Size : 3/8\".",
			"Length : 185 mm.",
			"Net Weight : 1.0 kg.",
			"Noise Level : 83 dBA."
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
			"label": "Chuck Size",
			"value": "1/4\" Jacob Industrial Keyed Chuck",
			"evidenceIds": [
				"october5-tools-gatx-product-5746-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "18,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-5746-p1"
			]
		},
		{
			"label": "Speed Control",
			"value": "Variable",
			"evidenceIds": [
				"october5-tools-gatx-product-5746-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "450 W (0.6 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-5746-p1"
			]
		},
		{
			"label": "Spindle Thread",
			"value": "3/8\"-24",
			"evidenceIds": [
				"october5-tools-gatx-product-5746-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Handle",
			"evidenceIds": [
				"october5-tools-gatx-product-5746-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "400 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-5746-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-5746-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-5746-p1"
			]
		},
		{
			"label": "Hose Size",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-5746-p1"
			]
		},
		{
			"label": "Length",
			"value": "185 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-5746-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.0 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-5746-p1"
			]
		},
		{
			"label": "Noise Level",
			"value": "83 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-5746-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-5746-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-1860-209",
			"sourceLabel": "GATX : fiche technique GP-1860-209",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 d9bae52859e5b563ae3502d49070474f7d3c323e0afe3fedae758a9dc3cc8f97. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-5746-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-5746-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-5746-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
