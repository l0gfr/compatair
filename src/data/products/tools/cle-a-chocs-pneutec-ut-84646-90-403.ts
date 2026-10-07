import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-pneutec-ut-84646-90-403",
	"slug": "cle-a-chocs-pneutec-ut-84646-90-403",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Pneutec UT 84646 (réf. 90 403)",
	"brand": "Pneutec",
	"model": "UT 84646",
	"mpn": "90 403",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-pneutec-ut-84646-90-403.svg",
		"alt": "Repères techniques : Pneutec UT 84646 (réf. 90 403)",
		"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "pneutec-ut-84646",
		"label": "Référence 90 403",
		"distinguishingAttributes": {
			"reference": "90 403",
			"Speed / frequency (min-1)": "5.500",
			"Weight (kg)": "7,7"
		}
	},
	"editorial": {
		"overview": "Pneutec UT 84646 (réf. 90 403). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Speed / frequency (min-1) : 5.500.",
			"Weight (kg) : 7,7.",
			"Air Consumption (l/s) : 5,6.",
			"Vibration (m/s²) : 11,4.",
			"Sound Pressure (dB(A)) : 107,5."
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
			"value": "5.500",
			"evidenceIds": [
				"october5-tools-pneutec-75-p18"
			]
		},
		{
			"label": "Weight (kg)",
			"value": "7,7",
			"evidenceIds": [
				"october5-tools-pneutec-75-p18"
			]
		},
		{
			"label": "Air Consumption (l/s)",
			"value": "5,6",
			"evidenceIds": [
				"october5-tools-pneutec-75-p18"
			]
		},
		{
			"label": "Vibration (m/s²)",
			"value": "11,4",
			"evidenceIds": [
				"october5-tools-pneutec-75-p18"
			]
		},
		{
			"label": "Sound Pressure (dB(A))",
			"value": "107,5",
			"evidenceIds": [
				"october5-tools-pneutec-75-p18"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-pneutec-75-p18",
			"sourceUrl": "https://blaetterkatalog.rapid-group.de/pneutec/epaper/PneutecKatalog75.pdf#page=18",
			"sourceLabel": "Pneutec : pneutec-75, page PDF 18",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 15627d141058302f218ce59ed34c5b6810663ff92445fe182bf5d24096e91f50. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-pneutec-75-p18"
		],
		"workingPressureBar": [
			"october5-tools-pneutec-75-p18"
		],
		"demandExplanation": [
			"october5-tools-pneutec-75-p18"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
