import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-pneutec-ut-8750-m-92-423",
	"slug": "meuleuse-pneutec-ut-8750-m-92-423",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Pneutec UT 8750 M (réf. 92 423)",
	"brand": "Pneutec",
	"model": "UT 8750 M",
	"mpn": "92 423",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-pneutec-ut-8750-m-92-423.svg",
		"alt": "Repères techniques : Pneutec UT 8750 M (réf. 92 423)",
		"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "pneutec-ut-8750-m",
		"label": "Référence 92 423",
		"distinguishingAttributes": {
			"reference": "92 423",
			"Speed / frequency (min-1)": "12.000",
			"Power (kW)": "0,4"
		}
	},
	"editorial": {
		"overview": "Pneutec UT 8750 M (réf. 92 423). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Speed / frequency (min-1) : 12.000.",
			"Power (kW) : 0,4.",
			"Weight (kg) : 2,0.",
			"Air Consumption (l/s) : 10,8.",
			"Vibration (m/s²) : 5,1.",
			"Sound Pressure (dB(A)) : 82,9."
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
				"october5-tools-pneutec-75-p36"
			]
		},
		{
			"label": "Power (kW)",
			"value": "0,4",
			"evidenceIds": [
				"october5-tools-pneutec-75-p36"
			]
		},
		{
			"label": "Weight (kg)",
			"value": "2,0",
			"evidenceIds": [
				"october5-tools-pneutec-75-p36"
			]
		},
		{
			"label": "Air Consumption (l/s)",
			"value": "10,8",
			"evidenceIds": [
				"october5-tools-pneutec-75-p36"
			]
		},
		{
			"label": "Vibration (m/s²)",
			"value": "5,1",
			"evidenceIds": [
				"october5-tools-pneutec-75-p36"
			]
		},
		{
			"label": "Sound Pressure (dB(A))",
			"value": "82,9",
			"evidenceIds": [
				"october5-tools-pneutec-75-p36"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-pneutec-75-p36",
			"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf#page=36",
			"sourceLabel": "Pneutec : pneutec-75, page PDF 36",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 15627d141058302f218ce59ed34c5b6810663ff92445fe182bf5d24096e91f50. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-pneutec-75-p36"
		],
		"workingPressureBar": [
			"october5-tools-pneutec-75-p36"
		],
		"demandExplanation": [
			"october5-tools-pneutec-75-p36"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
