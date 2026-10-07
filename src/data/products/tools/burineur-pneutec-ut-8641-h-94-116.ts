import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-pneutec-ut-8641-h-94-116",
	"slug": "burineur-pneutec-ut-8641-h-94-116",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Pneutec UT 8641 H (réf. 94 116)",
	"brand": "Pneutec",
	"model": "UT 8641 H",
	"mpn": "94 116",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-pneutec-ut-8641-h-94-116.svg",
		"alt": "Repères techniques : Pneutec UT 8641 H (réf. 94 116)",
		"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "pneutec-ut-8641-h",
		"label": "Référence 94 116",
		"distinguishingAttributes": {
			"reference": "94 116",
			"Speed / frequency (min-1)": "2.500",
			"Weight (kg)": "5,8"
		}
	},
	"editorial": {
		"overview": "Pneutec UT 8641 H (réf. 94 116). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Speed / frequency (min-1) : 2.500.",
			"Weight (kg) : 5,8.",
			"Air Consumption (l/s) : 6,0.",
			"Vibration (m/s²) : 10,4.",
			"Sound Pressure (dB(A)) : 93,2."
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
			"value": "2.500",
			"evidenceIds": [
				"october5-tools-pneutec-75-p51"
			]
		},
		{
			"label": "Weight (kg)",
			"value": "5,8",
			"evidenceIds": [
				"october5-tools-pneutec-75-p51"
			]
		},
		{
			"label": "Air Consumption (l/s)",
			"value": "6,0",
			"evidenceIds": [
				"october5-tools-pneutec-75-p51"
			]
		},
		{
			"label": "Vibration (m/s²)",
			"value": "10,4",
			"evidenceIds": [
				"october5-tools-pneutec-75-p51"
			]
		},
		{
			"label": "Sound Pressure (dB(A))",
			"value": "93,2",
			"evidenceIds": [
				"october5-tools-pneutec-75-p51"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-pneutec-75-p51",
			"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf#page=51",
			"sourceLabel": "Pneutec : pneutec-75, page PDF 51",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 15627d141058302f218ce59ed34c5b6810663ff92445fe182bf5d24096e91f50. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-pneutec-75-p51"
		],
		"workingPressureBar": [
			"october5-tools-pneutec-75-p51"
		],
		"demandExplanation": [
			"october5-tools-pneutec-75-p51"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
