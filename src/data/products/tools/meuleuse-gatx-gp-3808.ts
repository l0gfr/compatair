import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-3808",
	"slug": "meuleuse-gatx-gp-3808",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-3808",
	"brand": "GATX",
	"model": "GP-3808",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-3808.svg",
		"alt": "Repères techniques : GATX GP-3808",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-3808",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-3808",
		"label": "Modèle GP-3808, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-3808",
			"Collet (option)": "1/8\",1/4\",3  or 6 mm",
			"Free Speed": "20,000 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-3808. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Collet (option) : 1/8\",1/4\",3  or 6 mm.",
			"Free Speed : 20,000 rpm.",
			"Motor Power : 210W (0.28 HP).",
			"Exhaust : Rear.",
			"Air Consumption : 113 L/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Length : 194 mm.",
			"Net Weight : 0.5 kg."
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
			"label": "Collet (option)",
			"value": "1/8\",1/4\",3  or 6 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-6511-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "20,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-6511-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "210W (0.28 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-6511-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Rear",
			"evidenceIds": [
				"october5-tools-gatx-product-6511-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "113 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-6511-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-6511-p1"
			]
		},
		{
			"label": "Length",
			"value": "194 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-6511-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.5 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-6511-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-6511-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-3808",
			"sourceLabel": "GATX : fiche technique GP-3808",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 7d8d00eb7262acbaf6fdd352f696f2ba1f327c58631c4746220eda9415c72621. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-6511-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-6511-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-6511-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
