import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-2341",
	"slug": "meuleuse-gatx-gp-2341",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-2341",
	"brand": "GATX",
	"model": "GP-2341",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-2341.svg",
		"alt": "Repères techniques : GATX GP-2341",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2341",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2341",
		"label": "Modèle GP-2341, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2341",
			"Collet (option)": "1/4\" or 6 mm",
			"Free Speed": "22,000 RPM"
		}
	},
	"editorial": {
		"overview": "GATX GP-2341. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Collet (option) : 1/4\" or 6 mm.",
			"Free Speed : 22,000 RPM.",
			"Power : 373 W (0.5 HP).",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Consumption : 99 L/min.",
			"Exhaust : Rear.",
			"Air Inlet : 1/4\".",
			"Hose Size : 3/8\".",
			"Length : 180 mm.",
			"Net Weight : 0.6 kg."
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
			"value": "1/4\" or 6 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7090-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "22,000 RPM",
			"evidenceIds": [
				"october5-tools-gatx-product-7090-p1"
			]
		},
		{
			"label": "Power",
			"value": "373 W (0.5 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-7090-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-7090-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "99 L/min",
			"evidenceIds": [
				"october5-tools-gatx-product-7090-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Rear",
			"evidenceIds": [
				"october5-tools-gatx-product-7090-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7090-p1"
			]
		},
		{
			"label": "Hose Size",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7090-p1"
			]
		},
		{
			"label": "Length",
			"value": "180 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7090-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.6 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-7090-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7090-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2341",
			"sourceLabel": "GATX : fiche technique GP-2341",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 1be84500d776ce9c6456913213c657414d8e1b91ffb4f7c7956c0ff3d5ac663d. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7090-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7090-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7090-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
