import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-vibrante-eagle-group-6009",
	"slug": "ponceuse-vibrante-eagle-group-6009",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "Eagle Group 6009",
	"brand": "Eagle Group",
	"model": "6009",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-vibrante-eagle-group-6009.svg",
		"alt": "Repères techniques : Eagle Group 6009",
		"sourceUrl": "https://www.eagle-premier.com/online_catalog/Eagle/LIT-E100%20Eagle%20Catalog_07-01-24_low_res.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "eagle-group-6009",
		"label": "Modèle 6009, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "6009",
			"Weight (lb)": "4.3",
			"Weight (kg)": "2"
		}
	},
	"editorial": {
		"overview": "Eagle Group 6009. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Weight (lb) : 4.3.",
			"Weight (kg) : 2.",
			"Length (inch) : 8.",
			"Length (mm) : 203."
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
			"value": "4.3",
			"evidenceIds": [
				"october5-tools-eagle-2024-p15"
			]
		},
		{
			"label": "Weight (kg)",
			"value": "2",
			"evidenceIds": [
				"october5-tools-eagle-2024-p15"
			]
		},
		{
			"label": "Length (inch)",
			"value": "8",
			"evidenceIds": [
				"october5-tools-eagle-2024-p15"
			]
		},
		{
			"label": "Length (mm)",
			"value": "203",
			"evidenceIds": [
				"october5-tools-eagle-2024-p15"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-eagle-2024-p15",
			"sourceUrl": "https://www.eagle-premier.com/online_catalog/Eagle/LIT-E100%20Eagle%20Catalog_07-01-24_low_res.pdf#page=15",
			"sourceLabel": "Eagle, catalogue officiel 2024, page PDF 15",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 d621dd927ab049875dff453c23e94578658402155feee4892380f9b89688b4c8. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-eagle-2024-p15"
		],
		"workingPressureBar": [
			"october5-tools-eagle-2024-p15"
		],
		"demandExplanation": [
			"october5-tools-eagle-2024-p15"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
