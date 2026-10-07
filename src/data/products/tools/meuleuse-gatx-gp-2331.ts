import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-2331",
	"slug": "meuleuse-gatx-gp-2331",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-2331",
	"brand": "GATX",
	"model": "GP-2331",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-2331.svg",
		"alt": "Repères techniques : GATX GP-2331",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2331",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2331",
		"label": "Modèle GP-2331, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2331",
			"Free Speed": "65,000rpm",
			"Collet Size (Option)": "1/8\" or 3 mm"
		}
	},
	"editorial": {
		"overview": "GATX GP-2331. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 65,000rpm.",
			"Collet Size (Option) : 1/8\" or 3 mm.",
			"Air Consumption : 200 L/min.",
			"Air Inlet : 1/4 NPT.",
			"Hose Size : 5 mm.",
			"Length : 120 mm.",
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
			"value": "65,000rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-7771-p1"
			]
		},
		{
			"label": "Collet Size (Option)",
			"value": "1/8\" or 3 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7771-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "200 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-7771-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4 NPT",
			"evidenceIds": [
				"october5-tools-gatx-product-7771-p1"
			]
		},
		{
			"label": "Hose Size",
			"value": "5 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7771-p1"
			]
		},
		{
			"label": "Length",
			"value": "120 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7771-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.1 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-7771-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7771-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2331",
			"sourceLabel": "GATX : fiche technique GP-2331",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b4f6c6de6b60734095f25cb5714536470ff6d14a3f4c74391216920e4aec6f5c. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7771-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7771-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7771-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
