import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-3048",
	"slug": "meuleuse-gatx-gp-3048",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-3048",
	"brand": "GATX",
	"model": "GP-3048",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-3048.svg",
		"alt": "Repères techniques : GATX GP-3048",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-3048",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-3048",
		"label": "Modèle GP-3048, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-3048",
			"Collet (Option)": "1/4\", 1/8\", 3mm, 6mm 8mm",
			"Free Speed": "25,000 RPM"
		}
	},
	"editorial": {
		"overview": "GATX GP-3048. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Collet (Option) : 1/4\", 1/8\", 3mm, 6mm 8mm.",
			"Free Speed : 25,000 RPM.",
			"Max Run-out : 0.05 mm.",
			"Air Pressure : 6.0 bar (87 psi).",
			"Air Consumption : 300 l/min.",
			"Air Inlet : 1/4\".",
			"Air Hose : 5 mm.",
			"Dia. x Length : 33 x 170  mm.",
			"Weight : 0.55 kg.",
			"Noise Level : 70 dBA.",
			"Vibration : 2.3 m/s2."
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
			"label": "Collet (Option)",
			"value": "1/4\", 1/8\", 3mm, 6mm 8mm",
			"evidenceIds": [
				"october5-tools-gatx-product-6471-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "25,000 RPM",
			"evidenceIds": [
				"october5-tools-gatx-product-6471-p1"
			]
		},
		{
			"label": "Max Run-out",
			"value": "0.05 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-6471-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.0 bar (87 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-6471-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "300 l/min",
			"evidenceIds": [
				"october5-tools-gatx-product-6471-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-6471-p1"
			]
		},
		{
			"label": "Air Hose",
			"value": "5 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-6471-p1"
			]
		},
		{
			"label": "Dia. x Length",
			"value": "33 x 170  mm",
			"evidenceIds": [
				"october5-tools-gatx-product-6471-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.55 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-6471-p1"
			]
		},
		{
			"label": "Noise Level",
			"value": "70 dBA",
			"evidenceIds": [
				"october5-tools-gatx-product-6471-p1"
			]
		},
		{
			"label": "Vibration",
			"value": "2.3 m/s2",
			"evidenceIds": [
				"october5-tools-gatx-product-6471-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-6471-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-3048",
			"sourceLabel": "GATX : fiche technique GP-3048",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 679ac3f3d5b232727ce2c17604c9330e4915ea313d210f2aecf25043ea5174b2. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-6471-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-6471-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-6471-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
