import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-pneutec-ut-84128-90-408",
	"slug": "cle-a-chocs-pneutec-ut-84128-90-408",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Pneutec UT 84128 (réf. 90 408)",
	"brand": "Pneutec",
	"model": "UT 84128",
	"mpn": "90 408",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-pneutec-ut-84128-90-408.svg",
		"alt": "Repères techniques : Pneutec UT 84128 (réf. 90 408)",
		"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "pneutec-ut-84128",
		"label": "Référence 90 408",
		"distinguishingAttributes": {
			"reference": "90 408",
			"Speed / frequency (min-1)": "3.500",
			"Weight (kg)": "13,8"
		}
	},
	"editorial": {
		"overview": "Pneutec UT 84128 (réf. 90 408). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Speed / frequency (min-1) : 3.500.",
			"Weight (kg) : 13,8.",
			"Air Consumption (l/s) : 5,0.",
			"Vibration (m/s²) : 4,9.",
			"Sound Pressure (dB(A)) : 93,0."
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
			"value": "3.500",
			"evidenceIds": [
				"october5-tools-pneutec-75-p18"
			]
		},
		{
			"label": "Weight (kg)",
			"value": "13,8",
			"evidenceIds": [
				"october5-tools-pneutec-75-p18"
			]
		},
		{
			"label": "Air Consumption (l/s)",
			"value": "5,0",
			"evidenceIds": [
				"october5-tools-pneutec-75-p18"
			]
		},
		{
			"label": "Vibration (m/s²)",
			"value": "4,9",
			"evidenceIds": [
				"october5-tools-pneutec-75-p18"
			]
		},
		{
			"label": "Sound Pressure (dB(A))",
			"value": "93,0",
			"evidenceIds": [
				"october5-tools-pneutec-75-p18"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-pneutec-75-p18",
			"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf#page=18",
			"sourceLabel": "Pneutec : pneutec-75, page PDF 18",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 15627d141058302f218ce59ed34c5b6810663ff92445fe182bf5d24096e91f50. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-pneutec-75-p18"
		],
		"workingPressureBar": [
			"october5-tools-pneutec-75-p18"
		],
		"demandExplanation": [
			"october5-tools-pneutec-75-p18"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
