import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-pneutec-ut-8742-rsb-92-044",
	"slug": "perceuse-pneutec-ut-8742-rsb-92-044",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Pneutec UT 8742 RSB (réf. 92 044)",
	"brand": "Pneutec",
	"model": "UT 8742 RSB",
	"mpn": "92 044",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-pneutec-ut-8742-rsb-92-044.svg",
		"alt": "Repères techniques : Pneutec UT 8742 RSB (réf. 92 044)",
		"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "pneutec-ut-8742-rsb",
		"label": "Référence 92 044",
		"distinguishingAttributes": {
			"reference": "92 044",
			"Speed / frequency (min-1)": "4.000",
			"Weight (kg)": "0,9"
		}
	},
	"editorial": {
		"overview": "Pneutec UT 8742 RSB (réf. 92 044). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Speed / frequency (min-1) : 4.000.",
			"Weight (kg) : 0,9.",
			"Air Consumption (l/s) : 1,9.",
			"Vibration (m/s²) : < 2,5.",
			"Sound Pressure (dB(A)) : 89,0."
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
			"value": "4.000",
			"evidenceIds": [
				"october5-tools-pneutec-75-p43"
			]
		},
		{
			"label": "Weight (kg)",
			"value": "0,9",
			"evidenceIds": [
				"october5-tools-pneutec-75-p43"
			]
		},
		{
			"label": "Air Consumption (l/s)",
			"value": "1,9",
			"evidenceIds": [
				"october5-tools-pneutec-75-p43"
			]
		},
		{
			"label": "Vibration (m/s²)",
			"value": "< 2,5",
			"evidenceIds": [
				"october5-tools-pneutec-75-p43"
			]
		},
		{
			"label": "Sound Pressure (dB(A))",
			"value": "89,0",
			"evidenceIds": [
				"october5-tools-pneutec-75-p43"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-pneutec-75-p43",
			"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf#page=43",
			"sourceLabel": "Pneutec : pneutec-75, page PDF 43",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 15627d141058302f218ce59ed34c5b6810663ff92445fe182bf5d24096e91f50. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-pneutec-75-p43"
		],
		"workingPressureBar": [
			"october5-tools-pneutec-75-p43"
		],
		"demandExplanation": [
			"october5-tools-pneutec-75-p43"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
