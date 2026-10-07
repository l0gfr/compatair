import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gatx-gp-2788l",
	"slug": "perceuse-gatx-gp-2788l",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GATX GP-2788L",
	"brand": "GATX",
	"model": "GP-2788L",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gatx-gp-2788l.svg",
		"alt": "Repères techniques : GATX GP-2788L",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2788L",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2788l",
		"label": "Modèle GP-2788L, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2788L",
			"Chuck Size": "0.5 - 4 mm",
			"Free Speed": "35,000 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-2788L. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Chuck Size : 0.5 - 4 mm.",
			"Free Speed : 35,000 rpm.",
			"Air Consumption : 85 l/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Hose Size : 5 mm.",
			"Hose Length : 1.45 m.",
			"Length : 175 mm.",
			"Weight : 0.52 kg."
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
			"value": "0.5 - 4 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7111-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "35,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-7111-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "85 l/min",
			"evidenceIds": [
				"october5-tools-gatx-product-7111-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-7111-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7111-p1"
			]
		},
		{
			"label": "Hose Size",
			"value": "5 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7111-p1"
			]
		},
		{
			"label": "Hose Length",
			"value": "1.45 m",
			"evidenceIds": [
				"october5-tools-gatx-product-7111-p1"
			]
		},
		{
			"label": "Length",
			"value": "175 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7111-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.52 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-7111-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7111-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2788L",
			"sourceLabel": "GATX : fiche technique GP-2788L",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 f742805c7f5fd57eda96c87e622a176c12ff08e5359f5df1728e757d2d1cc729. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7111-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7111-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7111-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
