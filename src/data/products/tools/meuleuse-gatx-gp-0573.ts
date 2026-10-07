import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-0573",
	"slug": "meuleuse-gatx-gp-0573",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-0573",
	"brand": "GATX",
	"model": "GP-0573",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-0573.svg",
		"alt": "Repères techniques : GATX GP-0573",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-0573",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-0573",
		"label": "Modèle GP-0573, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-0573",
			"Free Speed": "70,000 rpm",
			"Collet (option)": "3/32'' , 1/8\" or 3 mm"
		}
	},
	"editorial": {
		"overview": "GATX GP-0573. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 70,000 rpm.",
			"Collet (option) : 3/32'' , 1/8\" or 3 mm.",
			"Run-out : 0.05 mm.",
			"Exhaust : Rear.",
			"Air Consumption : 250 l/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Dia. x Length : 17 x 145 mm.",
			"Weight : 0.1 kg."
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
			"value": "70,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-2611-p1"
			]
		},
		{
			"label": "Collet (option)",
			"value": "3/32'' , 1/8\" or 3 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-2611-p1"
			]
		},
		{
			"label": "Run-out",
			"value": "0.05 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-2611-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Rear",
			"evidenceIds": [
				"october5-tools-gatx-product-2611-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "250 l/min",
			"evidenceIds": [
				"october5-tools-gatx-product-2611-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-2611-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-2611-p1"
			]
		},
		{
			"label": "Dia. x Length",
			"value": "17 x 145 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-2611-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.1 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-2611-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-2611-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-0573",
			"sourceLabel": "GATX : fiche technique GP-0573",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 d825422d1c3f027ac26151fd496d626db7bbebcb08cc1f0621d5eba051a0a9d2. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-2611-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-2611-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-2611-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
