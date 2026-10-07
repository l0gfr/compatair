import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-2218",
	"slug": "meuleuse-gatx-gp-2218",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-2218",
	"brand": "GATX",
	"model": "GP-2218",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-2218.svg",
		"alt": "Repères techniques : GATX GP-2218",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2218",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2218",
		"label": "Modèle GP-2218, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2218",
			"Free Speed": "3,800 bpm",
			"Working Pressure": "6.2 bar (90 psi)"
		}
	},
	"editorial": {
		"overview": "GATX GP-2218. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 3,800 bpm.",
			"Working Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Length : 160 mm.",
			"Weight : 0.24kg."
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
			"value": "3,800 bpm",
			"evidenceIds": [
				"october5-tools-gatx-product-8048-p1"
			]
		},
		{
			"label": "Working Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-8048-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-8048-p1"
			]
		},
		{
			"label": "Length",
			"value": "160 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-8048-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.24kg",
			"evidenceIds": [
				"october5-tools-gatx-product-8048-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-8048-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2218",
			"sourceLabel": "GATX : fiche technique GP-2218",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 1988c5b5116993cfb5a7214c012eb58d7fc54e18ca589c80b5b674004842660b. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-8048-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-8048-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-8048-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
