import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-pneutec-ut-8023-a-90-001",
	"slug": "cle-a-chocs-pneutec-ut-8023-a-90-001",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Pneutec UT 8023 A (réf. 90 001)",
	"brand": "Pneutec",
	"model": "UT 8023 A",
	"mpn": "90 001",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-pneutec-ut-8023-a-90-001.svg",
		"alt": "Repères techniques : Pneutec UT 8023 A (réf. 90 001)",
		"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "pneutec-ut-8023-a",
		"label": "Référence 90 001",
		"distinguishingAttributes": {
			"reference": "90 001",
			"Speed / frequency (min-1)": "12.000",
			"Weight (kg)": "0,5"
		}
	},
	"editorial": {
		"overview": "Pneutec UT 8023 A (réf. 90 001). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Speed / frequency (min-1) : 12.000.",
			"Weight (kg) : 0,5.",
			"Air Consumption (l/s) : 1,0.",
			"Vibration (m/s²) : 3,0.",
			"Sound Pressure (dB(A)) : 98,0."
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
			"value": "12.000",
			"evidenceIds": [
				"october5-tools-pneutec-75-p13"
			]
		},
		{
			"label": "Weight (kg)",
			"value": "0,5",
			"evidenceIds": [
				"october5-tools-pneutec-75-p13"
			]
		},
		{
			"label": "Air Consumption (l/s)",
			"value": "1,0",
			"evidenceIds": [
				"october5-tools-pneutec-75-p13"
			]
		},
		{
			"label": "Vibration (m/s²)",
			"value": "3,0",
			"evidenceIds": [
				"october5-tools-pneutec-75-p13"
			]
		},
		{
			"label": "Sound Pressure (dB(A))",
			"value": "98,0",
			"evidenceIds": [
				"october5-tools-pneutec-75-p13"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-pneutec-75-p13",
			"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf#page=13",
			"sourceLabel": "Pneutec : pneutec-75, page PDF 13",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 15627d141058302f218ce59ed34c5b6810663ff92445fe182bf5d24096e91f50. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-pneutec-75-p13"
		],
		"workingPressureBar": [
			"october5-tools-pneutec-75-p13"
		],
		"demandExplanation": [
			"october5-tools-pneutec-75-p13"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
