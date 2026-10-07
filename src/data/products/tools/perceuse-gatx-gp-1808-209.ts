import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gatx-gp-1808-209",
	"slug": "perceuse-gatx-gp-1808-209",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GATX GP-1808-209",
	"brand": "GATX",
	"model": "GP-1808-209",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gatx-gp-1808-209.svg",
		"alt": "Repères techniques : GATX GP-1808-209",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-1808-209",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-1808-209",
		"label": "Modèle GP-1808-209, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-1808-209",
			"Chuck Size": "1/4\" Jacobs Ind. Keyed Chuck",
			"Free Speed": "2,600 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-1808-209. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Chuck Size : 1/4\" Jacobs Ind. Keyed Chuck.",
			"Free Speed : 2,600 rpm.",
			"Exhaust : Rear.",
			"Air Consumption : 113 L/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Hose Size : 3/8\".",
			"Length : 14.8 cm.",
			"Net Weight : 0.7 kg.",
			"Noise Level : 84 dBA."
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
			"value": "1/4\" Jacobs Ind. Keyed Chuck",
			"evidenceIds": [
				"october5-tools-gatx-product-5436-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "2,600 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-5436-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Rear",
			"evidenceIds": [
				"october5-tools-gatx-product-5436-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "113 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-5436-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-5436-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-5436-p1"
			]
		},
		{
			"label": "Hose Size",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-5436-p1"
			]
		},
		{
			"label": "Length",
			"value": "14.8 cm",
			"evidenceIds": [
				"october5-tools-gatx-product-5436-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.7 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-5436-p1"
			]
		},
		{
			"label": "Noise Level",
			"value": "84 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-5436-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-5436-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-1808-209",
			"sourceLabel": "GATX : fiche technique GP-1808-209",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 834974e50e6c69c89fc6056e1602a99f69d20f0c90e94a41a97eb4dea704dbc0. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-5436-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-5436-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-5436-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
