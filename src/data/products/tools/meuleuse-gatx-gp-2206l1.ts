import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-2206l1",
	"slug": "meuleuse-gatx-gp-2206l1",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-2206L1",
	"brand": "GATX",
	"model": "GP-2206L1",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-2206l1.svg",
		"alt": "Repères techniques : GATX GP-2206L1",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2206L1",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2206l1",
		"label": "Modèle GP-2206L1, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2206L1",
			"Free Speed": "20,000 rpm",
			"Collet (Option)": "1/8\", 1/4\", 3 or 6mm"
		}
	},
	"editorial": {
		"overview": "GATX GP-2206L1. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 20,000 rpm.",
			"Collet (Option) : 1/8\", 1/4\", 3 or 6mm.",
			"Power : 0.3 HP (0.23 kw).",
			"Max Run-out : 0.08 mm.",
			"Exhaust : Rear.",
			"Air Consumption : 250 l/min.",
			"Air Pressure : 6.2 Bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Dia x Length : 32 x 224 mm.",
			"Net Weight : 0.74 kg."
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
				"october5-tools-gatx-product-6382-p1"
			]
		},
		{
			"label": "Collet (Option)",
			"value": "1/8\", 1/4\", 3 or 6mm",
			"evidenceIds": [
				"october5-tools-gatx-product-6382-p1"
			]
		},
		{
			"label": "Power",
			"value": "0.3 HP (0.23 kw)",
			"evidenceIds": [
				"october5-tools-gatx-product-6382-p1"
			]
		},
		{
			"label": "Max Run-out",
			"value": "0.08 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-6382-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Rear",
			"evidenceIds": [
				"october5-tools-gatx-product-6382-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "250 l/min",
			"evidenceIds": [
				"october5-tools-gatx-product-6382-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 Bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-6382-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-6382-p1"
			]
		},
		{
			"label": "Dia x Length",
			"value": "32 x 224 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-6382-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.74 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-6382-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-6382-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2206L1",
			"sourceLabel": "GATX : fiche technique GP-2206L1",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 fe99bdc25b0b86924eb84e0937a9d5613d4ff7efedd93f809d5f586bf897771a. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-6382-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-6382-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-6382-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
