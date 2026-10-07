import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-pneutec-ut-8004-91-104",
	"slug": "cle-a-cliquet-pneutec-ut-8004-91-104",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Pneutec UT 8004 (réf. 91 104)",
	"brand": "Pneutec",
	"model": "UT 8004",
	"mpn": "91 104",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-pneutec-ut-8004-91-104.svg",
		"alt": "Repères techniques : Pneutec UT 8004 (réf. 91 104)",
		"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "pneutec-ut-8004",
		"label": "Référence 91 104",
		"distinguishingAttributes": {
			"reference": "91 104",
			"Speed / frequency (min-1)": "250",
			"Weight (kg)": "0,6"
		}
	},
	"editorial": {
		"overview": "Pneutec UT 8004 (réf. 91 104). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Speed / frequency (min-1) : 250.",
			"Weight (kg) : 0,6.",
			"Air Consumption (l/s) : 3,2.",
			"Vibration (m/s²) : 8,4.",
			"Sound Pressure (dB(A)) : 88,6."
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
			"value": "250",
			"evidenceIds": [
				"october5-tools-pneutec-75-p27"
			]
		},
		{
			"label": "Weight (kg)",
			"value": "0,6",
			"evidenceIds": [
				"october5-tools-pneutec-75-p27"
			]
		},
		{
			"label": "Air Consumption (l/s)",
			"value": "3,2",
			"evidenceIds": [
				"october5-tools-pneutec-75-p27"
			]
		},
		{
			"label": "Vibration (m/s²)",
			"value": "8,4",
			"evidenceIds": [
				"october5-tools-pneutec-75-p27"
			]
		},
		{
			"label": "Sound Pressure (dB(A))",
			"value": "88,6",
			"evidenceIds": [
				"october5-tools-pneutec-75-p27"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-pneutec-75-p27",
			"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf#page=27",
			"sourceLabel": "Pneutec : pneutec-75, page PDF 27",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 15627d141058302f218ce59ed34c5b6810663ff92445fe182bf5d24096e91f50. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-pneutec-75-p27"
		],
		"workingPressureBar": [
			"october5-tools-pneutec-75-p27"
		],
		"demandExplanation": [
			"october5-tools-pneutec-75-p27"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
