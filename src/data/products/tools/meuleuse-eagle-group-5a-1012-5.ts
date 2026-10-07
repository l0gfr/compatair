import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-eagle-group-5a-1012-5",
	"slug": "meuleuse-eagle-group-5a-1012-5",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Eagle Group 5A-1012-5",
	"brand": "Eagle Group",
	"model": "5A-1012-5",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-eagle-group-5a-1012-5.svg",
		"alt": "Repères techniques : Eagle Group 5A-1012-5",
		"sourceUrl": "https://www.eagle-premier.com/online_catalog/Eagle/LIT-E100%20Eagle%20Catalog_07-01-24_low_res.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "eagle-group-5a-1012-5",
		"label": "Modèle 5A-1012-5, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "5A-1012-5",
			"Weight (lb)": "4.0",
			"Weight (kg)": "1.8"
		}
	},
	"editorial": {
		"overview": "Eagle Group 5A-1012-5. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Weight (lb) : 4.0.",
			"Weight (kg) : 1.8.",
			"Length (inch) : 11.",
			"Length (mm) : 279."
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
			"value": "4.0",
			"evidenceIds": [
				"october5-tools-eagle-2024-p11"
			]
		},
		{
			"label": "Weight (kg)",
			"value": "1.8",
			"evidenceIds": [
				"october5-tools-eagle-2024-p11"
			]
		},
		{
			"label": "Length (inch)",
			"value": "11",
			"evidenceIds": [
				"october5-tools-eagle-2024-p11"
			]
		},
		{
			"label": "Length (mm)",
			"value": "279",
			"evidenceIds": [
				"october5-tools-eagle-2024-p11"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-eagle-2024-p11",
			"sourceUrl": "https://www.eagle-premier.com/online_catalog/Eagle/LIT-E100%20Eagle%20Catalog_07-01-24_low_res.pdf#page=11",
			"sourceLabel": "Eagle, catalogue officiel 2024, page PDF 11",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 d621dd927ab049875dff453c23e94578658402155feee4892380f9b89688b4c8. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-eagle-2024-p11"
		],
		"workingPressureBar": [
			"october5-tools-eagle-2024-p11"
		],
		"demandExplanation": [
			"october5-tools-eagle-2024-p11"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
