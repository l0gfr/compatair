import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-gatx-gp-2006",
	"slug": "visseuse-gatx-gp-2006",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "GATX GP-2006",
	"brand": "GATX",
	"model": "GP-2006",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-gatx-gp-2006.svg",
		"alt": "Repères techniques : GATX GP-2006",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2006",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2006",
		"label": "Modèle GP-2006, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2006",
			"Mechanism": "Two Hammer",
			"Free Speed": "13,000 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-2006. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Mechanism : Two Hammer.",
			"Free Speed : 13,000 rpm.",
			"Working Torque : 25 Nm (18 ft-lbs).",
			"Max Torque : 35 Nm (26 ft-lbs).",
			"Screw Size Cap. : 4 - 5 mm.",
			"Air Consumption : 170 l/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Overall Length : 155 mm.",
			"Net Weight : 0.86 kg.",
			"Package : 12 pcs / 13.2 kg / 1.1 cuft."
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
			"label": "Mechanism",
			"value": "Two Hammer",
			"evidenceIds": [
				"october5-tools-gatx-product-5458-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "13,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-5458-p1"
			]
		},
		{
			"label": "Working Torque",
			"value": "25 Nm (18 ft-lbs)",
			"evidenceIds": [
				"october5-tools-gatx-product-5458-p1"
			]
		},
		{
			"label": "Max Torque",
			"value": "35 Nm (26 ft-lbs)",
			"evidenceIds": [
				"october5-tools-gatx-product-5458-p1"
			]
		},
		{
			"label": "Screw Size Cap.",
			"value": "4 - 5 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-5458-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "170 l/min",
			"evidenceIds": [
				"october5-tools-gatx-product-5458-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-5458-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-5458-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "155 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-5458-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.86 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-5458-p1"
			]
		},
		{
			"label": "Package",
			"value": "12 pcs / 13.2 kg / 1.1 cuft",
			"evidenceIds": [
				"october5-tools-gatx-product-5458-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-5458-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2006",
			"sourceLabel": "GATX : fiche technique GP-2006",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 cdfcae80a3963be9be88bd77eb7645d5b4f9a8f38731953566f23c15e947783c. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-5458-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-5458-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-5458-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
