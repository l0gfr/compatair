import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-gatx-gp-0999",
	"slug": "visseuse-gatx-gp-0999",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "GATX GP-0999",
	"brand": "GATX",
	"model": "GP-0999",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-gatx-gp-0999.svg",
		"alt": "Repères techniques : GATX GP-0999",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-0999",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-0999",
		"label": "Modèle GP-0999, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-0999",
			"Free Speed": "800 rpm",
			"Hex Drive Capacity": "1/4\""
		}
	},
	"editorial": {
		"overview": "GATX GP-0999. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 800 rpm.",
			"Hex Drive Capacity : 1/4\".",
			"Power : 0.5 HP.",
			"Air Consumption : 113 l/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Hose Size (I.D.) : 3/8\"  (9.5 mm).",
			"Air Inlet (NPT) : 1/4\".",
			"Length : 198 mm.",
			"Net Weight : 1.2 kg."
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
			"value": "800 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-5262-p1"
			]
		},
		{
			"label": "Hex Drive Capacity",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-5262-p1"
			]
		},
		{
			"label": "Power",
			"value": "0.5 HP",
			"evidenceIds": [
				"october5-tools-gatx-product-5262-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "113 l/min",
			"evidenceIds": [
				"october5-tools-gatx-product-5262-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-5262-p1"
			]
		},
		{
			"label": "Hose Size (I.D.)",
			"value": "3/8\"  (9.5 mm)",
			"evidenceIds": [
				"october5-tools-gatx-product-5262-p1"
			]
		},
		{
			"label": "Air Inlet (NPT)",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-5262-p1"
			]
		},
		{
			"label": "Length",
			"value": "198 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-5262-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.2 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-5262-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-5262-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-0999",
			"sourceLabel": "GATX : fiche technique GP-0999",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 2ebd5b6579760caa6f01a9929fe34e4f24c4eea31d1e240436622010614211b3. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-5262-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-5262-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-5262-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
