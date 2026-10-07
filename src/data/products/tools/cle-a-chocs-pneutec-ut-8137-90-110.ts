import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-pneutec-ut-8137-90-110",
	"slug": "cle-a-chocs-pneutec-ut-8137-90-110",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Pneutec UT 8137 (réf. 90 110)",
	"brand": "Pneutec",
	"model": "UT 8137",
	"mpn": "90 110",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-pneutec-ut-8137-90-110.svg",
		"alt": "Repères techniques : Pneutec UT 8137 (réf. 90 110)",
		"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "pneutec-ut-8137",
		"label": "Référence 90 110",
		"distinguishingAttributes": {
			"reference": "90 110",
			"Speed / frequency (min-1)": "6.500",
			"Weight (kg)": "2,1"
		}
	},
	"editorial": {
		"overview": "Pneutec UT 8137 (réf. 90 110). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Speed / frequency (min-1) : 6.500.",
			"Weight (kg) : 2,1.",
			"Air Consumption (l/s) : 2,9.",
			"Vibration (m/s²) : 6,7.",
			"Sound Pressure (dB(A)) : 85,0."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"Le catalogue indique un débit en L/s, sans lier sa valeur à une pression de mesure ni préciser charge, moyenne ou marche à vide. Ce débit reste hors verdict conclusif.",
			"Les coffrets et déclinaisons de kits sont exclus. La date de capture ne prouve pas la disponibilité actuelle.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Speed / frequency (min-1)",
			"value": "6.500",
			"evidenceIds": [
				"october5-tools-pneutec-75-p14"
			]
		},
		{
			"label": "Weight (kg)",
			"value": "2,1",
			"evidenceIds": [
				"october5-tools-pneutec-75-p14"
			]
		},
		{
			"label": "Air Consumption (l/s)",
			"value": "2,9",
			"evidenceIds": [
				"october5-tools-pneutec-75-p14"
			]
		},
		{
			"label": "Vibration (m/s²)",
			"value": "6,7",
			"evidenceIds": [
				"october5-tools-pneutec-75-p14"
			]
		},
		{
			"label": "Sound Pressure (dB(A))",
			"value": "85,0",
			"evidenceIds": [
				"october5-tools-pneutec-75-p14"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-pneutec-75-p14",
			"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf#page=14",
			"sourceLabel": "Pneutec : pneutec-75, page PDF 14",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 15627d141058302f218ce59ed34c5b6810663ff92445fe182bf5d24096e91f50. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-pneutec-75-p14"
		],
		"workingPressureBar": [
			"october5-tools-pneutec-75-p14"
		],
		"demandExplanation": [
			"october5-tools-pneutec-75-p14"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
