import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-eagle-group-714p-2100r",
	"slug": "perceuse-eagle-group-714p-2100r",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Eagle Group 714P-2100R",
	"brand": "Eagle Group",
	"model": "714P-2100R",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-eagle-group-714p-2100r.svg",
		"alt": "Repères techniques : Eagle Group 714P-2100R",
		"sourceUrl": "https://www.eagle-premier.com/online_catalog/Eagle/LIT-E100%20Eagle%20Catalog_07-01-24_low_res.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "eagle-group-714p-2100r",
		"label": "Modèle 714P-2100R, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "714P-2100R",
			"Weight (lb)": "1.6",
			"Weight (kg)": "0.73"
		}
	},
	"editorial": {
		"overview": "Eagle Group 714P-2100R. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Weight (lb) : 1.6.",
			"Weight (kg) : 0.73.",
			"Length (inch) : 6.87.",
			"Length (mm) : 175."
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
			"value": "1.6",
			"evidenceIds": [
				"october5-tools-eagle-2024-p33"
			]
		},
		{
			"label": "Weight (kg)",
			"value": "0.73",
			"evidenceIds": [
				"october5-tools-eagle-2024-p33"
			]
		},
		{
			"label": "Length (inch)",
			"value": "6.87",
			"evidenceIds": [
				"october5-tools-eagle-2024-p33"
			]
		},
		{
			"label": "Length (mm)",
			"value": "175",
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
