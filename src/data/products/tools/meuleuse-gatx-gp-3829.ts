import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-3829",
	"slug": "meuleuse-gatx-gp-3829",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-3829",
	"brand": "GATX",
	"model": "GP-3829",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-3829.svg",
		"alt": "Repères techniques : GATX GP-3829",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-3829",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-3829",
		"label": "Modèle GP-3829, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-3829",
			"Collet Size": "1/4\" ; 6mm ; 1/8\" ; 3mm",
			"Free Speed": "23,000 RPM"
		}
	},
	"editorial": {
		"overview": "GATX GP-3829. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Collet Size : 1/4\" ; 6mm ; 1/8\" ; 3mm.",
			"Free Speed : 23,000 RPM.",
			"Motor Power : 373 W (0.5 HP).",
			"Air Consumption : 113 l/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Hose Size : 3/8\".",
			"Exhaust : Rear.",
			"Sound Pressure : 83 dBA.",
			"Overall Length : 170 mm.",
			"Net Weight : 0.56 kg."
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
			"label": "Collet Size",
			"value": "1/4\" ; 6mm ; 1/8\" ; 3mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7196-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "23,000 RPM",
			"evidenceIds": [
				"october5-tools-gatx-product-7196-p1"
			]
		},
		{
			"label": "Motor Power",
			"value": "373 W (0.5 HP)",
			"evidenceIds": [
				"october5-tools-gatx-product-7196-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "113 l/min",
			"evidenceIds": [
				"october5-tools-gatx-product-7196-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-7196-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7196-p1"
			]
		},
		{
			"label": "Hose Size",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7196-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Rear",
			"evidenceIds": [
				"october5-tools-gatx-product-7196-p1"
			]
		},
		{
			"label": "Sound Pressure",
			"value": "83 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-7196-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "170 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7196-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.56 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-7196-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7196-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-3829",
			"sourceLabel": "GATX : fiche technique GP-3829",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 faf5d0c009d07d6f6185db7e3d55391f3187b146eafe42ae368256594351552f. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7196-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7196-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7196-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
