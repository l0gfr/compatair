import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-eagle-group-5205-2ec",
	"slug": "meuleuse-eagle-group-5205-2ec",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Eagle Group 5205-2EC",
	"brand": "Eagle Group",
	"model": "5205-2EC",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-eagle-group-5205-2ec.svg",
		"alt": "Repères techniques : Eagle Group 5205-2EC",
		"sourceUrl": "https://www.eagle-premier.com/online_catalog/Eagle/LIT-E100%20Eagle%20Catalog_07-01-24_low_res.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "eagle-group-5205-2ec",
		"label": "Modèle 5205-2EC, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "5205-2EC",
			"Weight (lb)": "1.5",
			"Weight (kg)": "0.68"
		}
	},
	"editorial": {
		"overview": "Eagle Group 5205-2EC. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Weight (lb) : 1.5.",
			"Weight (kg) : 0.68.",
			"Length (inch) : 8.25.",
			"Length (mm) : 210."
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
			"value": "1.5",
			"evidenceIds": [
				"october5-tools-eagle-2024-p10"
			]
		},
		{
			"label": "Weight (kg)",
			"value": "0.68",
			"evidenceIds": [
				"october5-tools-eagle-2024-p10"
			]
		},
		{
			"label": "Length (inch)",
			"value": "8.25",
			"evidenceIds": [
				"october5-tools-eagle-2024-p10"
			]
		},
		{
			"label": "Length (mm)",
			"value": "210",
			"evidenceIds": [
				"october5-tools-eagle-2024-p10"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-eagle-2024-p10",
			"sourceUrl": "https://www.eagle-premier.com/online_catalog/Eagle/LIT-E100%20Eagle%20Catalog_07-01-24_low_res.pdf#page=10",
			"sourceLabel": "Eagle, catalogue officiel 2024, page PDF 10",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 d621dd927ab049875dff453c23e94578658402155feee4892380f9b89688b4c8. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-eagle-2024-p10"
		],
		"workingPressureBar": [
			"october5-tools-eagle-2024-p10"
		],
		"demandExplanation": [
			"october5-tools-eagle-2024-p10"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
