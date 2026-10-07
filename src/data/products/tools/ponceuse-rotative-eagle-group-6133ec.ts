import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-rotative-eagle-group-6133ec",
	"slug": "ponceuse-rotative-eagle-group-6133ec",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Eagle Group 6133EC",
	"brand": "Eagle Group",
	"model": "6133EC",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-rotative-eagle-group-6133ec.svg",
		"alt": "Repères techniques : Eagle Group 6133EC",
		"sourceUrl": "https://www.eagle-premier.com/online_catalog/Eagle/LIT-E100%20Eagle%20Catalog_07-01-24_low_res.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "eagle-group-6133ec",
		"label": "Modèle 6133EC, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "6133EC",
			"Weight (lb)": "1.05",
			"Weight (kg)": "0.48"
		}
	},
	"editorial": {
		"overview": "Eagle Group 6133EC. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Weight (lb) : 1.05.",
			"Weight (kg) : 0.48.",
			"Length (inch) : 6.75.",
			"Length (mm) : 171."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"Le catalogue indique Air Usage (cfm), sans protocole de consommation ni point de pression associé. Ce chiffre reste documentaire et ne devient pas un débit en charge.",
			"L’appellation General duty ou Industrial duty décrit une gamme commerciale ; elle ne qualifie pas la mesure de consommation.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Weight (lb)",
			"value": "1.05",
			"evidenceIds": [
				"october5-tools-eagle-2024-p14"
			]
		},
		{
			"label": "Weight (kg)",
			"value": "0.48",
			"evidenceIds": [
				"october5-tools-eagle-2024-p14"
			]
		},
		{
			"label": "Length (inch)",
			"value": "6.75",
			"evidenceIds": [
				"october5-tools-eagle-2024-p14"
			]
		},
		{
			"label": "Length (mm)",
			"value": "171",
			"evidenceIds": [
				"october5-tools-eagle-2024-p14"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-eagle-2024-p14",
			"sourceUrl": "https://www.eagle-premier.com/online_catalog/Eagle/LIT-E100%20Eagle%20Catalog_07-01-24_low_res.pdf#page=14",
			"sourceLabel": "Eagle, catalogue officiel 2024, page PDF 14",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 d621dd927ab049875dff453c23e94578658402155feee4892380f9b89688b4c8. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-eagle-2024-p14"
		],
		"workingPressureBar": [
			"october5-tools-eagle-2024-p14"
		],
		"demandExplanation": [
			"october5-tools-eagle-2024-p14"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
