import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-0587sw",
	"slug": "meuleuse-gatx-gp-0587sw",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-0587SW",
	"brand": "GATX",
	"model": "GP-0587SW",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-0587sw.svg",
		"alt": "Repères techniques : GATX GP-0587SW",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-0587SW",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-0587sw",
		"label": "Modèle GP-0587SW, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-0587SW",
			"Free Speed": "2,300 rpm",
			"Collet (option)": "1/4\"  or 6 mm"
		}
	},
	"editorial": {
		"overview": "GATX GP-0587SW. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 2,300 rpm.",
			"Collet (option) : 1/4\"  or 6 mm.",
			"Power : 190 W (0.25 HP).",
			"Exhaust : Rear.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Length : 262 mm.",
			"Net Weight : 1.15 kg.",
			"GP-0588SW   -do- : Speed : 3,200 rpm."
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
			"value": "2,300 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-2628-p1"
			]
		},
		{
			"label": "Collet (option)",
			"value": "1/4\"  or 6 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-2628-p1"
			]
		},
		{
			"label": "Power",
			"value": "190 W (0.25 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-2628-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Rear",
			"evidenceIds": [
				"october5-tools-gatx-product-2628-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-2628-p1"
			]
		},
		{
			"label": "Length",
			"value": "262 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-2628-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.15 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-2628-p1"
			]
		},
		{
			"label": "GP-0588SW   -do-",
			"value": "Speed : 3,200 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-2628-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-2628-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-0587SW",
			"sourceLabel": "GATX : fiche technique GP-0587SW",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 2c9f400a3892adbfe20b0883095b23785791347aedabf038a911f877f745ed38. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-2628-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-2628-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-2628-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
