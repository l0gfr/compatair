import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-pneutec-ut-8716-hp-92-025",
	"slug": "meuleuse-pneutec-ut-8716-hp-92-025",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Pneutec UT 8716 HP (réf. 92 025)",
	"brand": "Pneutec",
	"model": "UT 8716 HP",
	"mpn": "92 025",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-pneutec-ut-8716-hp-92-025.svg",
		"alt": "Repères techniques : Pneutec UT 8716 HP (réf. 92 025)",
		"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "pneutec-ut-8716-hp",
		"label": "Référence 92 025",
		"distinguishingAttributes": {
			"reference": "92 025",
			"Speed / frequency (min-1)": "12.000",
			"Power (kW)": "0,7"
		}
	},
	"editorial": {
		"overview": "Pneutec UT 8716 HP (réf. 92 025). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Speed / frequency (min-1) : 12.000.",
			"Power (kW) : 0,7.",
			"Weight (kg) : 1,1.",
			"Air Consumption (l/s) : 2,5.",
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
			"value": "12.000",
			"evidenceIds": [
				"october5-tools-pneutec-75-p30"
			]
		},
		{
			"label": "Power (kW)",
			"value": "0,7",
			"evidenceIds": [
				"october5-tools-pneutec-75-p30"
			]
		},
		{
			"label": "Weight (kg)",
			"value": "1,1",
			"evidenceIds": [
				"october5-tools-pneutec-75-p30"
			]
		},
		{
			"label": "Air Consumption (l/s)",
			"value": "2,5",
			"evidenceIds": [
				"october5-tools-pneutec-75-p30"
			]
		},
		{
			"label": "Vibration (m/s²)",
			"value": "< 2,5",
			"evidenceIds": [
				"october5-tools-pneutec-75-p30"
			]
		},
		{
			"label": "Sound Pressure (dB(A))",
			"value": "89,0",
			"evidenceIds": [
				"october5-tools-pneutec-75-p30"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-pneutec-75-p30",
			"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf#page=30",
			"sourceLabel": "Pneutec : pneutec-75, page PDF 30",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 15627d141058302f218ce59ed34c5b6810663ff92445fe182bf5d24096e91f50. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-pneutec-75-p30"
		],
		"workingPressureBar": [
			"october5-tools-pneutec-75-p30"
		],
		"demandExplanation": [
			"october5-tools-pneutec-75-p30"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
