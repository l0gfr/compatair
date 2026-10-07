import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gatx-gp-3840d8-212",
	"slug": "perceuse-gatx-gp-3840d8-212",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GATX GP-3840D8-212",
	"brand": "GATX",
	"model": "GP-3840D8-212",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gatx-gp-3840d8-212.svg",
		"alt": "Repères techniques : GATX GP-3840D8-212",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-3840D8-212",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-3840d8-212",
		"label": "Modèle GP-3840D8-212, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-3840D8-212",
			"Chuck Size": "1/2\" Jacobs Standard Keyless Chuck",
			"Free Speed": "800 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-3840D8-212. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Chuck Size : 1/2\" Jacobs Standard Keyless Chuck.",
			"Free Speed : 800 rpm.",
			"Motor Power : 0.5HP.",
			"Drilling Cap. : 1/2\".",
			"Air Consumption : 4 CFM.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Hose Size : 3/8\".",
			"Length : 245 mm.",
			"Weight : 1.4 KG.",
			"Noise Level : 79 dBA."
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
			"value": "1/2\" Jacobs Standard Keyless Chuck",
			"evidenceIds": [
				"october5-tools-gatx-product-8109-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "800 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-8109-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "0.5HP",
			"evidenceIds": [
				"october5-tools-gatx-product-8109-p1"
			]
		},
		{
			"label": "Drilling Cap.",
			"value": "1/2\"",
			"evidenceIds": [
				"october5-tools-gatx-product-8109-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "4 CFM",
			"evidenceIds": [
				"october5-tools-gatx-product-8109-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-8109-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-8109-p1"
			]
		},
		{
			"label": "Hose Size",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-8109-p1"
			]
		},
		{
			"label": "Length",
			"value": "245 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-8109-p1"
			]
		},
		{
			"label": "Weight",
			"value": "1.4 KG",
			"evidenceIds": [
				"october5-tools-gatx-product-8109-p1"
			]
		},
		{
			"label": "Noise Level",
			"value": "79 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-8109-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-8109-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-3840D8-212",
			"sourceLabel": "GATX : fiche technique GP-3840D8-212",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 050d372a2761136adb1b83af2e052bec072eaee09ee3d03e8fcf6dcfe61536f2. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-8109-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-8109-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-8109-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
