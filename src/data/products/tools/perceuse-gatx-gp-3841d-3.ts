import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gatx-gp-3841d-3",
	"slug": "perceuse-gatx-gp-3841d-3",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GATX GP-3841D-3",
	"brand": "GATX",
	"model": "GP-3841D-3",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gatx-gp-3841d-3.svg",
		"alt": "Repères techniques : GATX GP-3841D-3",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-3841D-3",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-3841d-3",
		"label": "Modèle GP-3841D-3, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-3841D-3",
			"Free Speed": "3,000 rpm",
			"Motor Power": "0.5 HP"
		}
	},
	"editorial": {
		"overview": "GATX GP-3841D-3. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 3,000 rpm.",
			"Motor Power : 0.5 HP.",
			"Drilling Cap : 10 mm (3/8\").",
			"Air Consumption : 3.5 CFM.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Air Hose : 3/8\".",
			"Length : 210 mm.",
			"Weight : 0.97 kg.",
			"Noise Level : 76 dBA."
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
			"value": "3,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-8350-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "0.5 HP",
			"evidenceIds": [
				"october5-tools-gatx-product-8350-p1"
			]
		},
		{
			"label": "Drilling Cap",
			"value": "10 mm (3/8\")",
			"evidenceIds": [
				"october5-tools-gatx-product-8350-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "3.5 CFM",
			"evidenceIds": [
				"october5-tools-gatx-product-8350-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-8350-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-8350-p1"
			]
		},
		{
			"label": "Air Hose",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-8350-p1"
			]
		},
		{
			"label": "Length",
			"value": "210 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-8350-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.97 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-8350-p1"
			]
		},
		{
			"label": "Noise Level",
			"value": "76 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-8350-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-8350-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-3841D-3",
			"sourceLabel": "GATX : fiche technique GP-3841D-3",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 d46b4e840ed1b2d8faaf53a6affb64e1c327f1335b0896e989a66d4a07ecd2bd. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-8350-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-8350-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-8350-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
