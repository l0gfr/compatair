import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-pneutec-ut-8724-g-92-003",
	"slug": "meuleuse-pneutec-ut-8724-g-92-003",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Pneutec UT 8724 G (réf. 92 003)",
	"brand": "Pneutec",
	"model": "UT 8724 G",
	"mpn": "92 003",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-pneutec-ut-8724-g-92-003.svg",
		"alt": "Repères techniques : Pneutec UT 8724 G (réf. 92 003)",
		"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "pneutec-ut-8724-g",
		"label": "Référence 92 003",
		"distinguishingAttributes": {
			"reference": "92 003",
			"Speed / frequency (min-1)": "20.000",
			"Power (kW)": "0,4"
		}
	},
	"editorial": {
		"overview": "Pneutec UT 8724 G (réf. 92 003). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Speed / frequency (min-1) : 20.000.",
			"Power (kW) : 0,4.",
			"Weight (kg) : 0,8.",
			"Air Consumption (l/s) : 1,9.",
			"Vibration (m/s²) : < 2,5.",
			"Sound Pressure (dB(A)) : 80,0."
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
				"october5-tools-pneutec-75-p28"
			]
		},
		{
			"label": "Power (kW)",
			"value": "0,4",
			"evidenceIds": [
				"october5-tools-pneutec-75-p28"
			]
		},
		{
			"label": "Weight (kg)",
			"value": "0,8",
			"evidenceIds": [
				"october5-tools-pneutec-75-p28"
			]
		},
		{
			"label": "Air Consumption (l/s)",
			"value": "1,9",
			"evidenceIds": [
				"october5-tools-pneutec-75-p28"
			]
		},
		{
			"label": "Vibration (m/s²)",
			"value": "< 2,5",
			"evidenceIds": [
				"october5-tools-pneutec-75-p28"
			]
		},
		{
			"label": "Sound Pressure (dB(A))",
			"value": "80,0",
			"evidenceIds": [
				"october5-tools-pneutec-75-p28"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-pneutec-75-p28",
			"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf#page=28",
			"sourceLabel": "Pneutec : pneutec-75, page PDF 28",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 15627d141058302f218ce59ed34c5b6810663ff92445fe182bf5d24096e91f50. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-pneutec-75-p28"
		],
		"workingPressureBar": [
			"october5-tools-pneutec-75-p28"
		],
		"demandExplanation": [
			"october5-tools-pneutec-75-p28"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
