import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-eagle-group-738p-3200",
	"slug": "perceuse-eagle-group-738p-3200",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Eagle Group 738P-3200",
	"brand": "Eagle Group",
	"model": "738P-3200",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-eagle-group-738p-3200.svg",
		"alt": "Repères techniques : Eagle Group 738P-3200",
		"sourceUrl": "https://www.eagle-premier.com/online_catalog/Eagle/LIT-E100%20Eagle%20Catalog_07-01-24_low_res.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "eagle-group-738p-3200",
		"label": "Modèle 738P-3200, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "738P-3200",
			"Weight (lb)": "2.65",
			"Weight (kg)": "1.2"
		}
	},
	"editorial": {
		"overview": "Eagle Group 738P-3200. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Weight (lb) : 2.65.",
			"Weight (kg) : 1.2.",
			"Length (inch) : 7.25.",
			"Length (mm) : 184."
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
			"value": "2.65",
			"evidenceIds": [
				"october5-tools-eagle-2024-p33"
			]
		},
		{
			"label": "Weight (kg)",
			"value": "1.2",
			"evidenceIds": [
				"october5-tools-eagle-2024-p33"
			]
		},
		{
			"label": "Length (inch)",
			"value": "7.25",
			"evidenceIds": [
				"october5-tools-eagle-2024-p33"
			]
		},
		{
			"label": "Length (mm)",
			"value": "184",
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
