import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-gatx-gp-0908-b",
	"slug": "visseuse-gatx-gp-0908-b",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "GATX GP-0908-B",
	"brand": "GATX",
	"model": "GP-0908-B",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-gatx-gp-0908-b.svg",
		"alt": "Repères techniques : GATX GP-0908-B",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-0908-B",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-0908-b",
		"label": "Modèle GP-0908-B, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-0908-B",
			"Free Speed": "800 rpm",
			"Torque": "3 ~ 11 Nm (30 ~ 95 in.lbs)"
		}
	},
	"editorial": {
		"overview": "GATX GP-0908-B. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 800 rpm.",
			"Torque : 3 ~ 11 Nm (30 ~ 95 in.lbs).",
			"Air Consumption : 113 L/min.",
			"Air Inlet : 1/4\".",
			"Air Pressure : 6.2 bar (90 psi).",
			"Net Weight : 1.4 kg.",
			"GP-0908 : - do -  w/o Rubber Grip."
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
				"october5-tools-gatx-product-3293-p1"
			]
		},
		{
			"label": "Torque",
			"value": "3 ~ 11 Nm (30 ~ 95 in.lbs)",
			"evidenceIds": [
				"october5-tools-gatx-product-3293-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "113 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-3293-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-3293-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-3293-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.4 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-3293-p1"
			]
		},
		{
			"label": "GP-0908",
			"value": "- do -  w/o Rubber Grip",
			"evidenceIds": [
				"october5-tools-gatx-product-3293-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-3293-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-0908-B",
			"sourceLabel": "GATX : fiche technique GP-0908-B",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 e7d0bcf202534feed16ef54b8b7a9276c069de3b0e97fcfc194b2ba6df18d67a. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-3293-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-3293-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-3293-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
