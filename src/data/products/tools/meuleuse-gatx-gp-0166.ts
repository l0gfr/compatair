import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-0166",
	"slug": "meuleuse-gatx-gp-0166",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-0166",
	"brand": "GATX",
	"model": "GP-0166",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-0166.svg",
		"alt": "Repères techniques : GATX GP-0166",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-0166",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-0166",
		"label": "Modèle GP-0166, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-0166",
			"Free Speed": "13,500 bpm",
			"Bushing Size": "3.175 mm"
		}
	},
	"editorial": {
		"overview": "GATX GP-0166. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 13,500 bpm.",
			"Bushing Size : 3.175 mm.",
			"Bore Size : 5.8 mm.",
			"Stroke : 8.2 mm.",
			"Air Consumption : 31 L/min..",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Hose Size : 6.35 mm (1/4\").",
			"Length : 122 mm.",
			"Net Weight : 0.1 kg."
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
			"value": "13,500 bpm",
			"evidenceIds": [
				"october5-tools-gatx-product-7116-p1"
			]
		},
		{
			"label": "Bushing Size",
			"value": "3.175 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7116-p1"
			]
		},
		{
			"label": "Bore Size",
			"value": "5.8 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7116-p1"
			]
		},
		{
			"label": "Stroke",
			"value": "8.2 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7116-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "31 L/min.",
			"evidenceIds": [
				"october5-tools-gatx-product-7116-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-7116-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7116-p1"
			]
		},
		{
			"label": "Hose Size",
			"value": "6.35 mm (1/4\")",
			"evidenceIds": [
				"october5-tools-gatx-product-7116-p1"
			]
		},
		{
			"label": "Length",
			"value": "122 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7116-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.1 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-7116-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7116-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-0166",
			"sourceLabel": "GATX : fiche technique GP-0166",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 85eaa81722d18e4f6b59789c628ae468b2dbdb2a0a4c33fc5ed988674b4297c5. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7116-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7116-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7116-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
