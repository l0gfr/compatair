import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cisaille-pneutec-ut-8606-1-93-220",
	"slug": "cisaille-pneutec-ut-8606-1-93-220",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "Pneutec UT 8606/1 (réf. 93 220)",
	"brand": "Pneutec",
	"model": "UT 8606/1",
	"mpn": "93 220",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cisaille-pneutec-ut-8606-1-93-220.svg",
		"alt": "Repères techniques : Pneutec UT 8606/1 (réf. 93 220)",
		"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "pneutec-ut-8606-1",
		"label": "Référence 93 220",
		"distinguishingAttributes": {
			"reference": "93 220",
			"Weight (kg)": "1,0",
			"Air Consumption (l/s)": "2,0"
		}
	},
	"editorial": {
		"overview": "Pneutec UT 8606/1 (réf. 93 220). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Weight (kg) : 1,0.",
			"Air Consumption (l/s) : 2,0.",
			"Vibration (m/s²) : < 2,5.",
			"Sound Pressure (dB(A)) : 78,0."
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
			"label": "Weight (kg)",
			"value": "1,0",
			"evidenceIds": [
				"october5-tools-pneutec-75-p44"
			]
		},
		{
			"label": "Air Consumption (l/s)",
			"value": "2,0",
			"evidenceIds": [
				"october5-tools-pneutec-75-p44"
			]
		},
		{
			"label": "Vibration (m/s²)",
			"value": "< 2,5",
			"evidenceIds": [
				"october5-tools-pneutec-75-p44"
			]
		},
		{
			"label": "Sound Pressure (dB(A))",
			"value": "78,0",
			"evidenceIds": [
				"october5-tools-pneutec-75-p44"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-pneutec-75-p44",
			"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf#page=44",
			"sourceLabel": "Pneutec : pneutec-75, page PDF 44",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 15627d141058302f218ce59ed34c5b6810663ff92445fe182bf5d24096e91f50. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-pneutec-75-p44"
		],
		"workingPressureBar": [
			"october5-tools-pneutec-75-p44"
		],
		"demandExplanation": [
			"october5-tools-pneutec-75-p44"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
