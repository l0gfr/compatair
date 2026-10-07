import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-0501ss",
	"slug": "meuleuse-gatx-gp-0501ss",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-0501SS",
	"brand": "GATX",
	"model": "GP-0501SS",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-0501ss.svg",
		"alt": "Repères techniques : GATX GP-0501SS",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-0501SS",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-0501ss",
		"label": "Modèle GP-0501SS, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-0501SS",
			"Free Speed": "15,000 rpm",
			"Collet (option)": "1/4\" or 6 mm"
		}
	},
	"editorial": {
		"overview": "GATX GP-0501SS. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 15,000 rpm.",
			"Collet (option) : 1/4\" or 6 mm.",
			"Motor Power : 263 W (0.35 hp).",
			"Max Run-Out : 0.18 mm.",
			"Exhaust : Side.",
			"Avg. consumption : 340 l/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Dia. x Length : 35 x 159 mm.",
			"Weight : 0.6 kg.",
			"Vibration : 4.4 m/s².",
			"Sound Pressure : 88 dBA."
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
			"value": "15,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-6225-p1"
			]
		},
		{
			"label": "Collet (option)",
			"value": "1/4\" or 6 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-6225-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "263 W (0.35 hp)",
			"evidenceIds": [
				"october5-tools-gatx-product-6225-p1"
			]
		},
		{
			"label": "Max Run-Out",
			"value": "0.18 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-6225-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Side",
			"evidenceIds": [
				"october5-tools-gatx-product-6225-p1"
			]
		},
		{
			"label": "Avg. consumption",
			"value": "340 l/min",
			"evidenceIds": [
				"october5-tools-gatx-product-6225-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-6225-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-6225-p1"
			]
		},
		{
			"label": "Dia. x Length",
			"value": "35 x 159 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-6225-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.6 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-6225-p1"
			]
		},
		{
			"label": "Vibration",
			"value": "4.4 m/s²",
			"evidenceIds": [
				"october5-tools-gatx-product-6225-p1"
			]
		},
		{
			"label": "Sound Pressure",
			"value": "88 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-6225-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-6225-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-0501SS",
			"sourceLabel": "GATX : fiche technique GP-0501SS",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 5bbf2e77c4708ddbb60108ca805f9200a80359b564f4bd91318844c54c2a330d. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-6225-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-6225-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-6225-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
