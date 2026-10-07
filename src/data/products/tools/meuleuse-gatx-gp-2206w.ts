import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-2206w",
	"slug": "meuleuse-gatx-gp-2206w",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-2206W",
	"brand": "GATX",
	"model": "GP-2206W",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-2206w.svg",
		"alt": "Repères techniques : GATX GP-2206W",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2206W",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2206w",
		"label": "Modèle GP-2206W, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2206W",
			"Free Speed": "20,000 rpm",
			"Collet (Option)": "1/8\", 1/4\", 3 or 6mm"
		}
	},
	"editorial": {
		"overview": "GATX GP-2206W. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 20,000 rpm.",
			"Collet (Option) : 1/8\", 1/4\", 3 or 6mm.",
			"Motor Power : 230 W (0.3 HP).",
			"Max Run-out : < 0.08 mm.",
			"Exhaust : Rear.",
			"Air Consumption : 250 L/min.",
			"Air Pressure : 6.2 Bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Length : 200 mm.",
			"Net Weight : 0.55 kg."
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
				"october5-tools-gatx-product-5117-p1"
			]
		},
		{
			"label": "Collet (Option)",
			"value": "1/8\", 1/4\", 3 or 6mm",
			"evidenceIds": [
				"october5-tools-gatx-product-5117-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "230 W (0.3 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-5117-p1"
			]
		},
		{
			"label": "Max Run-out",
			"value": "< 0.08 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-5117-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Rear",
			"evidenceIds": [
				"october5-tools-gatx-product-5117-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "250 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-5117-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 Bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-5117-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-5117-p1"
			]
		},
		{
			"label": "Length",
			"value": "200 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-5117-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.55 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-5117-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-5117-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2206W",
			"sourceLabel": "GATX : fiche technique GP-2206W",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 383334fd579cc21e785ae61aa1111d05b0ccf0d84ed2e7f754e56d318c7189dd. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-5117-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-5117-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-5117-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
