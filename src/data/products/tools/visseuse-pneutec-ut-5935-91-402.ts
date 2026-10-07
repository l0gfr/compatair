import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-pneutec-ut-5935-91-402",
	"slug": "visseuse-pneutec-ut-5935-91-402",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Pneutec UT 5935 (réf. 91 402)",
	"brand": "Pneutec",
	"model": "UT 5935",
	"mpn": "91 402",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-pneutec-ut-5935-91-402.svg",
		"alt": "Repères techniques : Pneutec UT 5935 (réf. 91 402)",
		"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "pneutec-ut-5935",
		"label": "Référence 91 402",
		"distinguishingAttributes": {
			"reference": "91 402",
			"Speed / frequency (min-1)": "1.800",
			"Weight (kg)": "1,5"
		}
	},
	"editorial": {
		"overview": "Pneutec UT 5935 (réf. 91 402). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Speed / frequency (min-1) : 1.800.",
			"Weight (kg) : 1,5.",
			"Air Consumption (l/s) : 2,0.",
			"Vibration (m/s²) : < 2,5.",
			"Sound Pressure (dB(A)) : 86,8."
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
			"value": "1.800",
			"evidenceIds": [
				"october5-tools-pneutec-75-p40"
			]
		},
		{
			"label": "Weight (kg)",
			"value": "1,5",
			"evidenceIds": [
				"october5-tools-pneutec-75-p40"
			]
		},
		{
			"label": "Air Consumption (l/s)",
			"value": "2,0",
			"evidenceIds": [
				"october5-tools-pneutec-75-p40"
			]
		},
		{
			"label": "Vibration (m/s²)",
			"value": "< 2,5",
			"evidenceIds": [
				"october5-tools-pneutec-75-p40"
			]
		},
		{
			"label": "Sound Pressure (dB(A))",
			"value": "86,8",
			"evidenceIds": [
				"october5-tools-pneutec-75-p40"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-pneutec-75-p40",
			"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf#page=40",
			"sourceLabel": "Pneutec : pneutec-75, page PDF 40",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 15627d141058302f218ce59ed34c5b6810663ff92445fe182bf5d24096e91f50. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-pneutec-75-p40"
		],
		"workingPressureBar": [
			"october5-tools-pneutec-75-p40"
		],
		"demandExplanation": [
			"october5-tools-pneutec-75-p40"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
