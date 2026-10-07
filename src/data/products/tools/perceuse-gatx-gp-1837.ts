import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gatx-gp-1837",
	"slug": "perceuse-gatx-gp-1837",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GATX GP-1837",
	"brand": "GATX",
	"model": "GP-1837",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gatx-gp-1837.svg",
		"alt": "Repères techniques : GATX GP-1837",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-1837",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-1837",
		"label": "Modèle GP-1837, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-1837",
			"Chuck Size": "3/8\"",
			"Free Speed": "1,200 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-1837. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Chuck Size : 3/8\".",
			"Free Speed : 1,200 rpm.",
			"Motor Power : 370 W (0.5 HP).",
			"Air Consumption : 99.2 L/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Hose Size : 3/8\".",
			"Length : 205 mm.",
			"Net Weight : 0.9 kg.",
			"Noise Level : 88~90 dBA.",
			"Vibration : <0.8 m/s2."
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
			"label": "Chuck Size",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-5180-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "1,200 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-5180-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "370 W (0.5 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-5180-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "99.2 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-5180-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-5180-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-5180-p1"
			]
		},
		{
			"label": "Hose Size",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-5180-p1"
			]
		},
		{
			"label": "Length",
			"value": "205 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-5180-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.9 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-5180-p1"
			]
		},
		{
			"label": "Noise Level",
			"value": "88~90 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-5180-p1"
			]
		},
		{
			"label": "Vibration",
			"value": "<0.8 m/s2",
			"evidenceIds": [
				"october5-tools-gatx-product-5180-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-5180-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-1837",
			"sourceLabel": "GATX : fiche technique GP-1837",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 073932f6e7bc932f125e024830ec427209456103304cee2097f497d527cb06ac. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-5180-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-5180-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-5180-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
