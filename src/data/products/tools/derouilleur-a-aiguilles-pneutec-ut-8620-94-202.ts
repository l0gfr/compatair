import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "derouilleur-a-aiguilles-pneutec-ut-8620-94-202",
	"slug": "derouilleur-a-aiguilles-pneutec-ut-8620-94-202",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Pneutec UT 8620 (réf. 94 202)",
	"brand": "Pneutec",
	"model": "UT 8620",
	"mpn": "94 202",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/derouilleur-a-aiguilles-pneutec-ut-8620-94-202.svg",
		"alt": "Repères techniques : Pneutec UT 8620 (réf. 94 202)",
		"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "pneutec-ut-8620",
		"label": "Référence 94 202",
		"distinguishingAttributes": {
			"reference": "94 202",
			"Speed / frequency (min-1)": "3.000",
			"Weight (kg)": "2,5"
		}
	},
	"editorial": {
		"overview": "Pneutec UT 8620 (réf. 94 202). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Speed / frequency (min-1) : 3.000.",
			"Weight (kg) : 2,5.",
			"Air Consumption (l/s) : 2,6.",
			"Vibration (m/s²) : 10,2.",
			"Sound Pressure (dB(A)) : 100,3.",
			"Body form : Stabform."
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
			"value": "3.000",
			"evidenceIds": [
				"october5-tools-pneutec-75-p52"
			]
		},
		{
			"label": "Weight (kg)",
			"value": "2,5",
			"evidenceIds": [
				"october5-tools-pneutec-75-p52"
			]
		},
		{
			"label": "Air Consumption (l/s)",
			"value": "2,6",
			"evidenceIds": [
				"october5-tools-pneutec-75-p52"
			]
		},
		{
			"label": "Vibration (m/s²)",
			"value": "10,2",
			"evidenceIds": [
				"october5-tools-pneutec-75-p52"
			]
		},
		{
			"label": "Sound Pressure (dB(A))",
			"value": "100,3",
			"evidenceIds": [
				"october5-tools-pneutec-75-p52"
			]
		},
		{
			"label": "Body form",
			"value": "Stabform",
			"evidenceIds": [
				"october5-tools-pneutec-75-p52"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-pneutec-75-p52",
			"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf#page=52",
			"sourceLabel": "Pneutec : pneutec-75, page PDF 52",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 15627d141058302f218ce59ed34c5b6810663ff92445fe182bf5d24096e91f50. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-pneutec-75-p52"
		],
		"workingPressureBar": [
			"october5-tools-pneutec-75-p52"
		],
		"demandExplanation": [
			"october5-tools-pneutec-75-p52"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
