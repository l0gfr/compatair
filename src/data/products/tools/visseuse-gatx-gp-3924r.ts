import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-gatx-gp-3924r",
	"slug": "visseuse-gatx-gp-3924r",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "GATX GP-3924R",
	"brand": "GATX",
	"model": "GP-3924R",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-gatx-gp-3924r.svg",
		"alt": "Repères techniques : GATX GP-3924R",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-3924R",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-3924r",
		"label": "Modèle GP-3924R, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-3924R",
			"Free Speed": "500 rpm",
			"Motor Power": "1.0 HP"
		}
	},
	"editorial": {
		"overview": "GATX GP-3924R. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 500 rpm.",
			"Motor Power : 1.0 HP.",
			"Torque : 25 Nm (18 ft-lbs).",
			"Air Consumption : 113 L/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Hose Size : 3/8\".",
			"Length : 320 mm.",
			"Net Weight : 1.7 kg.",
			"Noise Level : 75 dBA."
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
			"value": "500 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-8394-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "1.0 HP",
			"evidenceIds": [
				"october5-tools-gatx-product-8394-p1"
			]
		},
		{
			"label": "Torque",
			"value": "25 Nm (18 ft-lbs)",
			"evidenceIds": [
				"october5-tools-gatx-product-8394-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "113 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-8394-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-8394-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-8394-p1"
			]
		},
		{
			"label": "Hose Size",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-8394-p1"
			]
		},
		{
			"label": "Length",
			"value": "320 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-8394-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.7 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-8394-p1"
			]
		},
		{
			"label": "Noise Level",
			"value": "75 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-8394-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-8394-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-3924R",
			"sourceLabel": "GATX : fiche technique GP-3924R",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 6c25a711e147e4dbf4ba6b98d80997126535bcd053b20a16cd7328d8b99c137b. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-8394-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-8394-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-8394-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
