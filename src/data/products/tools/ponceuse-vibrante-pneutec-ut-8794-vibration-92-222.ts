import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-vibrante-pneutec-ut-8794-vibration-92-222",
	"slug": "ponceuse-vibrante-pneutec-ut-8794-vibration-92-222",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "Pneutec UT 8794 Vibration (réf. 92 222)",
	"brand": "Pneutec",
	"model": "UT 8794 Vibration",
	"mpn": "92 222",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-vibrante-pneutec-ut-8794-vibration-92-222.svg",
		"alt": "Repères techniques : Pneutec UT 8794 Vibration (réf. 92 222)",
		"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "pneutec-ut-8794-vibration",
		"label": "Référence 92 222",
		"distinguishingAttributes": {
			"reference": "92 222",
			"Speed / frequency (min-1)": "8.000",
			"Weight (kg)": "2,1"
		}
	},
	"editorial": {
		"overview": "Pneutec UT 8794 Vibration (réf. 92 222). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Speed / frequency (min-1) : 8.000.",
			"Weight (kg) : 2,1.",
			"Air Consumption (l/s) : 6,0.",
			"Vibration (m/s²) : 3,3.",
			"Sound Pressure (dB(A)) : 85,4."
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
			"value": "8.000",
			"evidenceIds": [
				"october5-tools-pneutec-75-p35"
			]
		},
		{
			"label": "Weight (kg)",
			"value": "2,1",
			"evidenceIds": [
				"october5-tools-pneutec-75-p35"
			]
		},
		{
			"label": "Air Consumption (l/s)",
			"value": "6,0",
			"evidenceIds": [
				"october5-tools-pneutec-75-p35"
			]
		},
		{
			"label": "Vibration (m/s²)",
			"value": "3,3",
			"evidenceIds": [
				"october5-tools-pneutec-75-p35"
			]
		},
		{
			"label": "Sound Pressure (dB(A))",
			"value": "85,4",
			"evidenceIds": [
				"october5-tools-pneutec-75-p35"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-pneutec-75-p35",
			"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf#page=35",
			"sourceLabel": "Pneutec : pneutec-75, page PDF 35",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 15627d141058302f218ce59ed34c5b6810663ff92445fe182bf5d24096e91f50. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-pneutec-75-p35"
		],
		"workingPressureBar": [
			"october5-tools-pneutec-75-p35"
		],
		"demandExplanation": [
			"october5-tools-pneutec-75-p35"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
