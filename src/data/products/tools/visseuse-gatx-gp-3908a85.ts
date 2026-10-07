import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-gatx-gp-3908a85",
	"slug": "visseuse-gatx-gp-3908a85",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "GATX GP-3908A85",
	"brand": "GATX",
	"model": "GP-3908A85",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-gatx-gp-3908a85.svg",
		"alt": "Repères techniques : GATX GP-3908A85",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-3908A85",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-3908a85",
		"label": "Modèle GP-3908A85, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-3908A85",
			"Free Speed": "1,800 rpm",
			"Torque Range": "0.49 ~ 4.41 Nm ±3%"
		}
	},
	"editorial": {
		"overview": "GATX GP-3908A85. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 1,800 rpm.",
			"Torque Range : 0.49 ~ 4.41 Nm ±3%.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Weight : 1.1 KG."
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
			"value": "1,800 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-7921-p1"
			]
		},
		{
			"label": "Torque Range",
			"value": "0.49 ~ 4.41 Nm ±3%",
			"evidenceIds": [
				"october5-tools-gatx-product-7921-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-7921-p1"
			]
		},
		{
			"label": "Weight",
			"value": "1.1 KG",
			"evidenceIds": [
				"october5-tools-gatx-product-7921-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7921-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-3908A85",
			"sourceLabel": "GATX : fiche technique GP-3908A85",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 0967c96c8c119d2c4ff6e0cc93e58e58302043519f5257bd414ba268b802d9f1. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7921-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7921-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7921-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
