import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-eagle-group-4010",
	"slug": "burineur-eagle-group-4010",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Eagle Group 4010",
	"brand": "Eagle Group",
	"model": "4010",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-eagle-group-4010.svg",
		"alt": "Repères techniques : Eagle Group 4010",
		"sourceUrl": "https://www.eagle-premier.com/online_catalog/Eagle/LIT-E100%20Eagle%20Catalog_07-01-24_low_res.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "eagle-group-4010",
		"label": "Modèle 4010, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "4010",
			"Weight (lb)": "17.8",
			"Weight (kg)": "8.1"
		}
	},
	"editorial": {
		"overview": "Eagle Group 4010. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Weight (lb) : 17.8.",
			"Weight (kg) : 8.1.",
			"Length (inch) : 16.3.",
			"Length (mm) : 413."
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
			"value": "17.8",
			"evidenceIds": [
				"october5-tools-eagle-2024-p36"
			]
		},
		{
			"label": "Weight (kg)",
			"value": "8.1",
			"evidenceIds": [
				"october5-tools-eagle-2024-p36"
			]
		},
		{
			"label": "Length (inch)",
			"value": "16.3",
			"evidenceIds": [
				"october5-tools-eagle-2024-p36"
			]
		},
		{
			"label": "Length (mm)",
			"value": "413",
			"evidenceIds": [
				"october5-tools-eagle-2024-p36"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-eagle-2024-p36",
			"sourceUrl": "https://www.eagle-premier.com/online_catalog/Eagle/LIT-E100%20Eagle%20Catalog_07-01-24_low_res.pdf#page=36",
			"sourceLabel": "Eagle, catalogue officiel 2024, page PDF 36",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 d621dd927ab049875dff453c23e94578658402155feee4892380f9b89688b4c8. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-eagle-2024-p36"
		],
		"workingPressureBar": [
			"october5-tools-eagle-2024-p36"
		],
		"demandExplanation": [
			"october5-tools-eagle-2024-p36"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
