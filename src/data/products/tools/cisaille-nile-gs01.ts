import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cisaille-nile-gs01",
	"slug": "cisaille-nile-gs01",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "Nile GS01",
	"brand": "Nile",
	"model": "GS01",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cisaille-nile-gs01.svg",
		"alt": "Repères techniques : Nile GS01",
		"sourceUrl": "https://muromototekko.com/wp/wp-content/themes/muromototekko/assets/pdf/catalog2018.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "nile-gs01",
		"label": "Modèle GS01, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GS01",
			"Length (mm)": "140",
			"Weight (g)": "500"
		}
	},
	"editorial": {
		"overview": "Nile GS01. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Length (mm) : 140.",
			"Weight (g) : 500.",
			"Grip size (mm) : 36.",
			"Air consumption (L/min) : 450.",
			"Air pressure (MPa) : 0.35~0.6.",
			"Exhaust : front exhaust."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"Le régime de consommation et son point de pression ne sont pas tous deux explicitement établis. Aucune consommation moyenne ni pression maximale ne devient une mesure en charge.",
			"La disponibilité commerciale actuelle n’est pas démontrée par la seule présence dans le catalogue.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Length (mm)",
			"value": "140",
			"evidenceIds": [
				"october5-tools-nile-2018-p43"
			]
		},
		{
			"label": "Weight (g)",
			"value": "500",
			"evidenceIds": [
				"october5-tools-nile-2018-p43"
			]
		},
		{
			"label": "Grip size (mm)",
			"value": "36",
			"evidenceIds": [
				"october5-tools-nile-2018-p43"
			]
		},
		{
			"label": "Air consumption (L/min)",
			"value": "450",
			"evidenceIds": [
				"october5-tools-nile-2018-p43"
			]
		},
		{
			"label": "Air pressure (MPa)",
			"value": "0.35~0.6",
			"evidenceIds": [
				"october5-tools-nile-2018-p43"
			]
		},
		{
			"label": "Exhaust",
			"value": "front exhaust",
			"evidenceIds": [
				"october5-tools-nile-2018-p43"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-nile-2018-p43",
			"sourceUrl": "https://muromototekko.com/wp/wp-content/themes/muromototekko/assets/pdf/catalog2018.pdf#page=43",
			"sourceLabel": "Nile : nile-2018, page PDF 43",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 bb8167a334ce062d9e67e8f7ba6f774c9ce4de906b8b4d69c97ebfe1c0f8dfe2. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-nile-2018-p43"
		],
		"workingPressureBar": [
			"october5-tools-nile-2018-p43"
		],
		"demandExplanation": [
			"october5-tools-nile-2018-p43"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
