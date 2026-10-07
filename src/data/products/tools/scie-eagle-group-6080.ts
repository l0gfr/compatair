import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "scie-eagle-group-6080",
	"slug": "scie-eagle-group-6080",
	"categoryId": "scie",
	"category": "scie",
	"label": "Eagle Group 6080",
	"brand": "Eagle Group",
	"model": "6080",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/scie-eagle-group-6080.svg",
		"alt": "Repères techniques : Eagle Group 6080",
		"sourceUrl": "https://www.eagle-premier.com/online_catalog/Eagle/LIT-E100%20Eagle%20Catalog_07-01-24_low_res.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "eagle-group-6080",
		"label": "Modèle 6080, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "6080",
			"Weight (lb)": "1.37",
			"Weight (kg)": "0.62"
		}
	},
	"editorial": {
		"overview": "Eagle Group 6080. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Weight (lb) : 1.37.",
			"Weight (kg) : 0.62.",
			"Length (inch) : 8.9.",
			"Length (mm) : 227."
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
			"value": "1.37",
			"evidenceIds": [
				"october5-tools-eagle-2024-p40"
			]
		},
		{
			"label": "Weight (kg)",
			"value": "0.62",
			"evidenceIds": [
				"october5-tools-eagle-2024-p40"
			]
		},
		{
			"label": "Length (inch)",
			"value": "8.9",
			"evidenceIds": [
				"october5-tools-eagle-2024-p40"
			]
		},
		{
			"label": "Length (mm)",
			"value": "227",
			"evidenceIds": [
				"october5-tools-eagle-2024-p40"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-eagle-2024-p40",
			"sourceUrl": "https://www.eagle-premier.com/online_catalog/Eagle/LIT-E100%20Eagle%20Catalog_07-01-24_low_res.pdf#page=40",
			"sourceLabel": "Eagle, catalogue officiel 2024, page PDF 40",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 d621dd927ab049875dff453c23e94578658402155feee4892380f9b89688b4c8. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-eagle-2024-p40"
		],
		"workingPressureBar": [
			"october5-tools-eagle-2024-p40"
		],
		"demandExplanation": [
			"october5-tools-eagle-2024-p40"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
