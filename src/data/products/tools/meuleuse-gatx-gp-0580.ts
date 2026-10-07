import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-0580",
	"slug": "meuleuse-gatx-gp-0580",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-0580",
	"brand": "GATX",
	"model": "GP-0580",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-0580.svg",
		"alt": "Repères techniques : GATX GP-0580",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-0580",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-0580",
		"label": "Modèle GP-0580, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-0580",
			"Free Speed": "30,000 bpm",
			"Stroke": "1.2 mm"
		}
	},
	"editorial": {
		"overview": "GATX GP-0580. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 30,000 bpm.",
			"Stroke : 1.2 mm.",
			"Sleeve (Option) : Thin (Standard), Medium, Large.",
			"Tip Angle (Option) : 45° (Standard) or 20 °.",
			"Air Consumption : 70 L/min (Max.).",
			"Length : 160 mm.",
			"Net Weight : 0.3 kg.",
			"Noise Level : 75 dBA.",
			"Vibration : 2.9 m/s2."
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
			"value": "30,000 bpm",
			"evidenceIds": [
				"october5-tools-gatx-product-3082-p1"
			]
		},
		{
			"label": "Stroke",
			"value": "1.2 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-3082-p1"
			]
		},
		{
			"label": "Sleeve (Option)",
			"value": "Thin (Standard), Medium, Large",
			"evidenceIds": [
				"october5-tools-gatx-product-3082-p1"
			]
		},
		{
			"label": "Tip Angle (Option)",
			"value": "45° (Standard) or 20 °",
			"evidenceIds": [
				"october5-tools-gatx-product-3082-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "70 L/min (Max.)",
			"evidenceIds": [
				"october5-tools-gatx-product-3082-p1"
			]
		},
		{
			"label": "Length",
			"value": "160 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-3082-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.3 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-3082-p1"
			]
		},
		{
			"label": "Noise Level",
			"value": "75 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-3082-p1"
			]
		},
		{
			"label": "Vibration",
			"value": "2.9 m/s2",
			"evidenceIds": [
				"october5-tools-gatx-product-3082-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-3082-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-0580",
			"sourceLabel": "GATX : fiche technique GP-0580",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 024bf845772646f28e4e84dfc43a3b83f4ca31a7ac01eff113e0d06ec00e4e76. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-3082-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-3082-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-3082-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
