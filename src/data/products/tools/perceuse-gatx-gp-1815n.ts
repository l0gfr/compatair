import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gatx-gp-1815n",
	"slug": "perceuse-gatx-gp-1815n",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GATX GP-1815N",
	"brand": "GATX",
	"model": "GP-1815N",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gatx-gp-1815n.svg",
		"alt": "Repères techniques : GATX GP-1815N",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-1815N",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-1815n",
		"label": "Modèle GP-1815N, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-1815N",
			"Chuck Size": "1/2\"",
			"Free Speed": "650 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-1815N. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Chuck Size : 1/2\".",
			"Free Speed : 650 rpm.",
			"Motor Power : 680 W (0.9 HP).",
			"Exhaust : Handle.",
			"Air Consumption : 367 L/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Length : 225 mm.",
			"Net Weight : 1.2 kg.",
			"Noise Level : 87 dBA."
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
			"value": "1/2\"",
			"evidenceIds": [
				"october5-tools-gatx-product-5268-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "650 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-5268-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "680 W (0.9 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-5268-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Handle",
			"evidenceIds": [
				"october5-tools-gatx-product-5268-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "367 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-5268-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-5268-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-5268-p1"
			]
		},
		{
			"label": "Length",
			"value": "225 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-5268-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.2 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-5268-p1"
			]
		},
		{
			"label": "Noise Level",
			"value": "87 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-5268-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-5268-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-1815N",
			"sourceLabel": "GATX : fiche technique GP-1815N",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 9bf8b8fc14f80c36544c02fef9b4c75f30b70fb4bcf69d207d1d3221859b427f. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-5268-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-5268-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-5268-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
