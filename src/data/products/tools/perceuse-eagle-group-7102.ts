import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-eagle-group-7102",
	"slug": "perceuse-eagle-group-7102",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Eagle Group 7102",
	"brand": "Eagle Group",
	"model": "7102",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-eagle-group-7102.svg",
		"alt": "Repères techniques : Eagle Group 7102",
		"sourceUrl": "https://www.eagle-premier.com/online_catalog/Eagle/LIT-E100%20Eagle%20Catalog_07-01-24_low_res.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "eagle-group-7102",
		"label": "Modèle 7102, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "7102",
			"Weight (lb)": "3",
			"Weight (kg)": "1.4"
		}
	},
	"editorial": {
		"overview": "Eagle Group 7102. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Weight (lb) : 3.",
			"Weight (kg) : 1.4.",
			"Length (inch) : 7.",
			"Length (mm) : 178."
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
			"value": "3",
			"evidenceIds": [
				"october5-tools-eagle-2024-p33"
			]
		},
		{
			"label": "Weight (kg)",
			"value": "1.4",
			"evidenceIds": [
				"october5-tools-eagle-2024-p33"
			]
		},
		{
			"label": "Length (inch)",
			"value": "7",
			"evidenceIds": [
				"october5-tools-eagle-2024-p33"
			]
		},
		{
			"label": "Length (mm)",
			"value": "178",
			"evidenceIds": [
				"october5-tools-eagle-2024-p33"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-eagle-2024-p33",
			"sourceUrl": "https://www.eagle-premier.com/online_catalog/Eagle/LIT-E100%20Eagle%20Catalog_07-01-24_low_res.pdf#page=33",
			"sourceLabel": "Eagle, catalogue officiel 2024, page PDF 33",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 d621dd927ab049875dff453c23e94578658402155feee4892380f9b89688b4c8. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-eagle-2024-p33"
		],
		"workingPressureBar": [
			"october5-tools-eagle-2024-p33"
		],
		"demandExplanation": [
			"october5-tools-eagle-2024-p33"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
