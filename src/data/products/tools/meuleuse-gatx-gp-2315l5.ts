import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-2315l5",
	"slug": "meuleuse-gatx-gp-2315l5",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-2315L5",
	"brand": "GATX",
	"model": "GP-2315L5",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-2315l5.svg",
		"alt": "Repères techniques : GATX GP-2315L5",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2315L5",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2315l5",
		"label": "Modèle GP-2315L5, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2315L5",
			"Free Speed": "22,000 rpm",
			"Collect (option)": "1/4\" or 6 mm"
		}
	},
	"editorial": {
		"overview": "GATX GP-2315L5. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 22,000 rpm.",
			"Collect (option) : 1/4\" or 6 mm.",
			"Power : 223 W (0.3 HP).",
			"Exhaust : Rear Exhaust.",
			"Air Inlet : 1/4\".",
			"Min Hose Size : 3/8\" (9.5 mm).",
			"Overall Length : 241 mm.",
			"Weight : 0.6 kg."
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
			"value": "22,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-7444-p1"
			]
		},
		{
			"label": "Collect (option)",
			"value": "1/4\" or 6 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7444-p1"
			]
		},
		{
			"label": "Power",
			"value": "223 W (0.3 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-7444-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Rear Exhaust",
			"evidenceIds": [
				"october5-tools-gatx-product-7444-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7444-p1"
			]
		},
		{
			"label": "Min Hose Size",
			"value": "3/8\" (9.5 mm)",
			"evidenceIds": [
				"october5-tools-gatx-product-7444-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "241 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7444-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.6 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-7444-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7444-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2315L5",
			"sourceLabel": "GATX : fiche technique GP-2315L5",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 69bbe569bb94e63236b91b44e50b4c334c431267cb8a466e780a2433c32da556. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7444-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7444-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7444-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
