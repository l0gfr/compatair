import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "tronconneuse-pneutec-ut-5760-b-92-021",
	"slug": "tronconneuse-pneutec-ut-5760-b-92-021",
	"categoryId": "tronconneuse",
	"category": "tronconneuse",
	"label": "Pneutec UT 5760 B (réf. 92 021)",
	"brand": "Pneutec",
	"model": "UT 5760 B",
	"mpn": "92 021",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/tronconneuse-pneutec-ut-5760-b-92-021.svg",
		"alt": "Repères techniques : Pneutec UT 5760 B (réf. 92 021)",
		"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "pneutec-ut-5760-b",
		"label": "Référence 92 021",
		"distinguishingAttributes": {
			"reference": "92 021",
			"Speed / frequency (min-1)": "20.000",
			"Power (kW)": "0,3"
		}
	},
	"editorial": {
		"overview": "Pneutec UT 5760 B (réf. 92 021). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Speed / frequency (min-1) : 20.000.",
			"Power (kW) : 0,3.",
			"Weight (kg) : 0,7.",
			"Air Consumption (l/s) : 3,0.",
			"Vibration (m/s²) : < 2,5.",
			"Sound Pressure (dB(A)) : 84,0."
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
			"value": "20.000",
			"evidenceIds": [
				"october5-tools-pneutec-75-p29"
			]
		},
		{
			"label": "Power (kW)",
			"value": "0,3",
			"evidenceIds": [
				"october5-tools-pneutec-75-p29"
			]
		},
		{
			"label": "Weight (kg)",
			"value": "0,7",
			"evidenceIds": [
				"october5-tools-pneutec-75-p29"
			]
		},
		{
			"label": "Air Consumption (l/s)",
			"value": "3,0",
			"evidenceIds": [
				"october5-tools-pneutec-75-p29"
			]
		},
		{
			"label": "Vibration (m/s²)",
			"value": "< 2,5",
			"evidenceIds": [
				"october5-tools-pneutec-75-p29"
			]
		},
		{
			"label": "Sound Pressure (dB(A))",
			"value": "84,0",
			"evidenceIds": [
				"october5-tools-pneutec-75-p29"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-pneutec-75-p29",
			"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf#page=29",
			"sourceLabel": "Pneutec : pneutec-75, page PDF 29",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 15627d141058302f218ce59ed34c5b6810663ff92445fe182bf5d24096e91f50. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-pneutec-75-p29"
		],
		"workingPressureBar": [
			"october5-tools-pneutec-75-p29"
		],
		"demandExplanation": [
			"october5-tools-pneutec-75-p29"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
