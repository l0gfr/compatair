import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gatx-gp-3736-207",
	"slug": "perceuse-gatx-gp-3736-207",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GATX GP-3736-207",
	"brand": "GATX",
	"model": "GP-3736-207",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gatx-gp-3736-207.svg",
		"alt": "Repères techniques : GATX GP-3736-207",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-3736-207",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-3736-207",
		"label": "Modèle GP-3736-207, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-3736-207",
			"Chuck Size": "1/2\" Jacobs Ind. Keyed Chuck",
			"Free Speed": "1,000 rpm"
		}
	},
	"editorial": {
		"overview": "GATX GP-3736-207. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Chuck Size : 1/2\" Jacobs Ind. Keyed Chuck.",
			"Free Speed : 1,000 rpm.",
			"Motor Power : 450W (0.6 HP).",
			"Spindle Thread : 3/8\"-24.",
			"Air Consumption : 283 L/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Length : 230 mm.",
			"Net Weight : 1.6 kg.",
			"Noise Level : 88 dBA."
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
			"value": "1/2\" Jacobs Ind. Keyed Chuck",
			"evidenceIds": [
				"october5-tools-gatx-product-6412-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "1,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-6412-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "450W (0.6 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-6412-p1"
			]
		},
		{
			"label": "Spindle Thread",
			"value": "3/8\"-24",
			"evidenceIds": [
				"october5-tools-gatx-product-6412-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "283 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-6412-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-6412-p1"
			]
		},
		{
			"label": "Length",
			"value": "230 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-6412-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.6 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-6412-p1"
			]
		},
		{
			"label": "Noise Level",
			"value": "88 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-6412-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-6412-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-3736-207",
			"sourceLabel": "GATX : fiche technique GP-3736-207",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 092d909fdee6ee2259d8798507aa382b98f2bff1044a3250482ac56aeb01a1ef. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-6412-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-6412-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-6412-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
