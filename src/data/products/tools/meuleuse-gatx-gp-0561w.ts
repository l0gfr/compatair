import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-0561w",
	"slug": "meuleuse-gatx-gp-0561w",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-0561W",
	"brand": "GATX",
	"model": "GP-0561W",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-0561w.svg",
		"alt": "Repères techniques : GATX GP-0561W",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-0561W",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-0561w",
		"label": "Modèle GP-0561W, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-0561W",
			"Free Speed": "25,000 rpm",
			"Collet (option)": "1/4\"  or 6 mm"
		}
	},
	"editorial": {
		"overview": "GATX GP-0561W. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 25,000 rpm.",
			"Collet (option) : 1/4\"  or 6 mm.",
			"Motor Power : 190 W (0.25 HP).",
			"Exhaust : Rear.",
			"Air Consumption : 300 L/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Length : 150 mm.",
			"Net Weight : 0.6 kg."
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
			"value": "25,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-2638-p1"
			]
		},
		{
			"label": "Collet (option)",
			"value": "1/4\"  or 6 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-2638-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "190 W (0.25 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-2638-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Rear",
			"evidenceIds": [
				"october5-tools-gatx-product-2638-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "300 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-2638-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-2638-p1"
			]
		},
		{
			"label": "Length",
			"value": "150 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-2638-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.6 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-2638-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-2638-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-0561W",
			"sourceLabel": "GATX : fiche technique GP-0561W",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 cd472200039b546a124c224f7c66665681afe098a6950d45ac98e09bb90791c6. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-2638-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-2638-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-2638-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
