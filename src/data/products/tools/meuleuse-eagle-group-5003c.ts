import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-eagle-group-5003c",
	"slug": "meuleuse-eagle-group-5003c",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Eagle Group 5003C",
	"brand": "Eagle Group",
	"model": "5003C",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-eagle-group-5003c.svg",
		"alt": "Repères techniques : Eagle Group 5003C",
		"sourceUrl": "https://www.eagle-premier.com/online_catalog/Eagle/LIT-E100%20Eagle%20Catalog_07-01-24_low_res.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "eagle-group-5003c",
		"label": "Modèle 5003C, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "5003C",
			"Weight (lb)": "1.0",
			"Weight (kg)": "0.5"
		}
	},
	"editorial": {
		"overview": "Eagle Group 5003C. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Weight (lb) : 1.0.",
			"Weight (kg) : 0.5.",
			"Length (inch) : 6.3.",
			"Length (mm) : 159."
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
			"value": "1.0",
			"evidenceIds": [
				"october5-tools-eagle-2024-p9"
			]
		},
		{
			"label": "Weight (kg)",
			"value": "0.5",
			"evidenceIds": [
				"october5-tools-eagle-2024-p9"
			]
		},
		{
			"label": "Length (inch)",
			"value": "6.3",
			"evidenceIds": [
				"october5-tools-eagle-2024-p9"
			]
		},
		{
			"label": "Length (mm)",
			"value": "159",
			"evidenceIds": [
				"october5-tools-eagle-2024-p9"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-eagle-2024-p9",
			"sourceUrl": "https://www.eagle-premier.com/online_catalog/Eagle/LIT-E100%20Eagle%20Catalog_07-01-24_low_res.pdf#page=9",
			"sourceLabel": "Eagle, catalogue officiel 2024, page PDF 9",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 d621dd927ab049875dff453c23e94578658402155feee4892380f9b89688b4c8. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-eagle-2024-p9"
		],
		"workingPressureBar": [
			"october5-tools-eagle-2024-p9"
		],
		"demandExplanation": [
			"october5-tools-eagle-2024-p9"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
