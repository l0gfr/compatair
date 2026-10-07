import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-0596sw",
	"slug": "meuleuse-gatx-gp-0596sw",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-0596SW",
	"brand": "GATX",
	"model": "GP-0596SW",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-0596sw.svg",
		"alt": "Repères techniques : GATX GP-0596SW",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-0596SW",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-0596sw",
		"label": "Modèle GP-0596SW, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-0596SW",
			"Free Speed": "20,000 rpm",
			"Collet (option)": "1/4\"  or 6 mm"
		}
	},
	"editorial": {
		"overview": "GATX GP-0596SW. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 20,000 rpm.",
			"Collet (option) : 1/4\"  or 6 mm.",
			"Power : 190 W (0.25 HP).",
			"Exhaust : Rear.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Overall Length : 270 mm.",
			"Net Weight : 0.83 kg."
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
			"value": "20,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-2629-p1"
			]
		},
		{
			"label": "Collet (option)",
			"value": "1/4\"  or 6 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-2629-p1"
			]
		},
		{
			"label": "Power",
			"value": "190 W (0.25 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-2629-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Rear",
			"evidenceIds": [
				"october5-tools-gatx-product-2629-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-2629-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "270 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-2629-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.83 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-2629-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-2629-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-0596SW",
			"sourceLabel": "GATX : fiche technique GP-0596SW",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 09bf0f2a65ccdebe99d911385131c6fd42ce96587ef7d34bd3c03612c8d8656b. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-2629-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-2629-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-2629-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
