import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-pneutec-ut-8450-90-424",
	"slug": "cle-a-chocs-pneutec-ut-8450-90-424",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Pneutec UT 8450 (réf. 90 424)",
	"brand": "Pneutec",
	"model": "UT 8450",
	"mpn": "90 424",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-pneutec-ut-8450-90-424.svg",
		"alt": "Repères techniques : Pneutec UT 8450 (réf. 90 424)",
		"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "pneutec-ut-8450",
		"label": "Référence 90 424",
		"distinguishingAttributes": {
			"reference": "90 424",
			"Speed / frequency (min-1)": "6.000",
			"Weight (kg)": "3,4"
		}
	},
	"editorial": {
		"overview": "Pneutec UT 8450 (réf. 90 424). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Speed / frequency (min-1) : 6.000.",
			"Weight (kg) : 3,4.",
			"Air Consumption (l/s) : 2,0.",
			"Vibration (m/s²) : < 2,5.",
			"Sound Pressure (dB(A)) : 83,0."
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
			"value": "6.000",
			"evidenceIds": [
				"october5-tools-pneutec-75-p19"
			]
		},
		{
			"label": "Weight (kg)",
			"value": "3,4",
			"evidenceIds": [
				"october5-tools-pneutec-75-p19"
			]
		},
		{
			"label": "Air Consumption (l/s)",
			"value": "2,0",
			"evidenceIds": [
				"october5-tools-pneutec-75-p19"
			]
		},
		{
			"label": "Vibration (m/s²)",
			"value": "< 2,5",
			"evidenceIds": [
				"october5-tools-pneutec-75-p19"
			]
		},
		{
			"label": "Sound Pressure (dB(A))",
			"value": "83,0",
			"evidenceIds": [
				"october5-tools-pneutec-75-p19"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-pneutec-75-p19",
			"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf#page=19",
			"sourceLabel": "Pneutec : pneutec-75, page PDF 19",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 15627d141058302f218ce59ed34c5b6810663ff92445fe182bf5d24096e91f50. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-pneutec-75-p19"
		],
		"workingPressureBar": [
			"october5-tools-pneutec-75-p19"
		],
		"demandExplanation": [
			"october5-tools-pneutec-75-p19"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
