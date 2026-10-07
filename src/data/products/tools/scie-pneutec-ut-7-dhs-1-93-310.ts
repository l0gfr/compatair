import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "scie-pneutec-ut-7-dhs-1-93-310",
	"slug": "scie-pneutec-ut-7-dhs-1-93-310",
	"categoryId": "scie",
	"category": "scie",
	"label": "Pneutec UT 7 DHS 1 (réf. 93 310)",
	"brand": "Pneutec",
	"model": "UT 7 DHS 1",
	"mpn": "93 310",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/scie-pneutec-ut-7-dhs-1-93-310.svg",
		"alt": "Repères techniques : Pneutec UT 7 DHS 1 (réf. 93 310)",
		"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "pneutec-ut-7-dhs-1",
		"label": "Référence 93 310",
		"distinguishingAttributes": {
			"reference": "93 310",
			"Weight (kg)": "1,1",
			"Air Consumption (l/s)": "5,0"
		}
	},
	"editorial": {
		"overview": "Pneutec UT 7 DHS 1 (réf. 93 310). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Weight (kg) : 1,1.",
			"Air Consumption (l/s) : 5,0.",
			"Vibration (m/s²) : < 2,5.",
			"Sound Pressure (dB(A)) : 87,1."
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
			"value": "1,1",
			"evidenceIds": [
				"october5-tools-pneutec-75-p47"
			]
		},
		{
			"label": "Air Consumption (l/s)",
			"value": "5,0",
			"evidenceIds": [
				"october5-tools-pneutec-75-p47"
			]
		},
		{
			"label": "Vibration (m/s²)",
			"value": "< 2,5",
			"evidenceIds": [
				"october5-tools-pneutec-75-p47"
			]
		},
		{
			"label": "Sound Pressure (dB(A))",
			"value": "87,1",
			"evidenceIds": [
				"october5-tools-pneutec-75-p47"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-pneutec-75-p47",
			"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf#page=47",
			"sourceLabel": "Pneutec : pneutec-75, page PDF 47",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 15627d141058302f218ce59ed34c5b6810663ff92445fe182bf5d24096e91f50. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-pneutec-75-p47"
		],
		"workingPressureBar": [
			"october5-tools-pneutec-75-p47"
		],
		"demandExplanation": [
			"october5-tools-pneutec-75-p47"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
