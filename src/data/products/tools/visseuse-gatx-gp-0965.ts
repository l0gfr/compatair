import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-gatx-gp-0965",
	"slug": "visseuse-gatx-gp-0965",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "GATX GP-0965",
	"brand": "GATX",
	"model": "GP-0965",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-gatx-gp-0965.svg",
		"alt": "Repères techniques : GATX GP-0965",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-0965",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-0965",
		"label": "Modèle GP-0965, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-0965",
			"Mechanism": "Two Hammer",
			"Capacity": "6 ~ 8 mm"
		}
	},
	"editorial": {
		"overview": "GATX GP-0965. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Mechanism : Two Hammer.",
			"Capacity : 6 ~ 8 mm.",
			"Free Speed : 8,500 rpm.",
			"Max Torque : 57 Nm (42 ft-lbs) in 2 sec.",
			"Air Consumption : 165 l/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4 inch.",
			"Min. Hose Size : 1/4\"  (6.35 mm).",
			"Overall Length : 172 mm.",
			"Net Weight : 1.05 kg."
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
				"october5-tools-gatx-product-3305-p1"
			]
		},
		{
			"label": "Capacity",
			"value": "6 ~ 8 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-3305-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "8,500 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-3305-p1"
			]
		},
		{
			"label": "Max Torque",
			"value": "57 Nm (42 ft-lbs) in 2 sec",
			"evidenceIds": [
				"october5-tools-gatx-product-3305-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "165 l/min",
			"evidenceIds": [
				"october5-tools-gatx-product-3305-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-3305-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4 inch",
			"evidenceIds": [
				"october5-tools-gatx-product-3305-p1"
			]
		},
		{
			"label": "Min. Hose Size",
			"value": "1/4\"  (6.35 mm)",
			"evidenceIds": [
				"october5-tools-gatx-product-3305-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "172 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-3305-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.05 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-3305-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-3305-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-0965",
			"sourceLabel": "GATX : fiche technique GP-0965",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 ec752a0ae6b913adc0e08802091c46530aba8b5b277498295b0f5b081eb1436e. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-3305-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-3305-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-3305-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
