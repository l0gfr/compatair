import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-pneutec-ut-8772-92-202",
	"slug": "ponceuse-orbitale-pneutec-ut-8772-92-202",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Pneutec UT 8772 (réf. 92 202)",
	"brand": "Pneutec",
	"model": "UT 8772",
	"mpn": "92 202",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-pneutec-ut-8772-92-202.svg",
		"alt": "Repères techniques : Pneutec UT 8772 (réf. 92 202)",
		"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "pneutec-ut-8772",
		"label": "Référence 92 202",
		"distinguishingAttributes": {
			"reference": "92 202",
			"Speed / frequency (min-1)": "11.000",
			"Weight (kg)": "0,9"
		}
	},
	"editorial": {
		"overview": "Pneutec UT 8772 (réf. 92 202). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Speed / frequency (min-1) : 11.000.",
			"Weight (kg) : 0,9.",
			"Air Consumption (l/s) : 4,6.",
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
			"label": "Speed / frequency (min-1)",
			"value": "11.000",
			"evidenceIds": [
				"october5-tools-pneutec-75-p34"
			]
		},
		{
			"label": "Weight (kg)",
			"value": "0,9",
			"evidenceIds": [
				"october5-tools-pneutec-75-p34"
			]
		},
		{
			"label": "Air Consumption (l/s)",
			"value": "4,6",
			"evidenceIds": [
				"october5-tools-pneutec-75-p34"
			]
		},
		{
			"label": "Vibration (m/s²)",
			"value": "< 2,5",
			"evidenceIds": [
				"october5-tools-pneutec-75-p34"
			]
		},
		{
			"label": "Sound Pressure (dB(A))",
			"value": "78,0",
			"evidenceIds": [
				"october5-tools-pneutec-75-p34"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-pneutec-75-p34",
			"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf#page=34",
			"sourceLabel": "Pneutec : pneutec-75, page PDF 34",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 15627d141058302f218ce59ed34c5b6810663ff92445fe182bf5d24096e91f50. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-pneutec-75-p34"
		],
		"workingPressureBar": [
			"october5-tools-pneutec-75-p34"
		],
		"demandExplanation": [
			"october5-tools-pneutec-75-p34"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
