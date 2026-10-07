import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-gatx-gp-0968m",
	"slug": "visseuse-gatx-gp-0968m",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "GATX GP-0968M",
	"brand": "GATX",
	"model": "GP-0968M",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-gatx-gp-0968m.svg",
		"alt": "Repères techniques : GATX GP-0968M",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-0968M",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-0968m",
		"label": "Modèle GP-0968M, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-0968M",
			"Mechanisim": "Two Hammer",
			"Cap.": "M6 ~ M8"
		}
	},
	"editorial": {
		"overview": "GATX GP-0968M. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Mechanisim : Two Hammer.",
			"Cap. : M6 ~ M8.",
			"Free Speed : 8,000 rpm.",
			"Air Consumption : 130 l/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Torque @0.5 sec. : 58 Nm.",
			"Torque @2 sec. : 60 Nm.",
			"Air Inlet (NPT) : 1/4\".",
			"Min. Hose Size : 1/4\" (6.35 mm).",
			"Length : 155 mm.",
			"Weight : 1.2 kg."
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
			"label": "Mechanisim",
			"value": "Two Hammer",
			"evidenceIds": [
				"october5-tools-gatx-product-4773-p1"
			]
		},
		{
			"label": "Cap.",
			"value": "M6 ~ M8",
			"evidenceIds": [
				"october5-tools-gatx-product-4773-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "8,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-4773-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "130 l/min",
			"evidenceIds": [
				"october5-tools-gatx-product-4773-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-4773-p1"
			]
		},
		{
			"label": "Torque @0.5 sec.",
			"value": "58 Nm",
			"evidenceIds": [
				"october5-tools-gatx-product-4773-p1"
			]
		},
		{
			"label": "Torque @2 sec.",
			"value": "60 Nm",
			"evidenceIds": [
				"october5-tools-gatx-product-4773-p1"
			]
		},
		{
			"label": "Air Inlet (NPT)",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-4773-p1"
			]
		},
		{
			"label": "Min. Hose Size",
			"value": "1/4\" (6.35 mm)",
			"evidenceIds": [
				"october5-tools-gatx-product-4773-p1"
			]
		},
		{
			"label": "Length",
			"value": "155 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-4773-p1"
			]
		},
		{
			"label": "Weight",
			"value": "1.2 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-4773-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-4773-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-0968M",
			"sourceLabel": "GATX : fiche technique GP-0968M",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 176e3bb6babd7fe5abadf94e84ac07b2901d5ac19f7b1eb7652420551472f10a. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-4773-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-4773-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-4773-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
