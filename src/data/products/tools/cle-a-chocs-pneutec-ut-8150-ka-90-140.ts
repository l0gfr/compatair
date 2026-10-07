import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-pneutec-ut-8150-ka-90-140",
	"slug": "cle-a-chocs-pneutec-ut-8150-ka-90-140",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Pneutec UT 8150 KA (réf. 90 140)",
	"brand": "Pneutec",
	"model": "UT 8150 KA",
	"mpn": "90 140",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-pneutec-ut-8150-ka-90-140.svg",
		"alt": "Repères techniques : Pneutec UT 8150 KA (réf. 90 140)",
		"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "pneutec-ut-8150-ka",
		"label": "Référence 90 140",
		"distinguishingAttributes": {
			"reference": "90 140",
			"Speed / frequency (min-1)": "7.000",
			"Weight (kg)": "1,9"
		}
	},
	"editorial": {
		"overview": "Pneutec UT 8150 KA (réf. 90 140). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Speed / frequency (min-1) : 7.000.",
			"Weight (kg) : 1,9.",
			"Air Consumption (l/s) : 1,8.",
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
			"value": "7.000",
			"evidenceIds": [
				"october5-tools-pneutec-75-p15"
			]
		},
		{
			"label": "Weight (kg)",
			"value": "1,9",
			"evidenceIds": [
				"october5-tools-pneutec-75-p15"
			]
		},
		{
			"label": "Air Consumption (l/s)",
			"value": "1,8",
			"evidenceIds": [
				"october5-tools-pneutec-75-p15"
			]
		},
		{
			"label": "Vibration (m/s²)",
			"value": "< 2,5",
			"evidenceIds": [
				"october5-tools-pneutec-75-p15"
			]
		},
		{
			"label": "Sound Pressure (dB(A))",
			"value": "83,0",
			"evidenceIds": [
				"october5-tools-pneutec-75-p15"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-pneutec-75-p15",
			"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf#page=15",
			"sourceLabel": "Pneutec : pneutec-75, page PDF 15",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 15627d141058302f218ce59ed34c5b6810663ff92445fe182bf5d24096e91f50. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-pneutec-75-p15"
		],
		"workingPressureBar": [
			"october5-tools-pneutec-75-p15"
		],
		"demandExplanation": [
			"october5-tools-pneutec-75-p15"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
