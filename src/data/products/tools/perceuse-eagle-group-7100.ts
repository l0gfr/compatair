import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-eagle-group-7100",
	"slug": "perceuse-eagle-group-7100",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Eagle Group 7100",
	"brand": "Eagle Group",
	"model": "7100",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-eagle-group-7100.svg",
		"alt": "Repères techniques : Eagle Group 7100",
		"sourceUrl": "https://www.eagle-premier.com/online_catalog/Eagle/LIT-E100%20Eagle%20Catalog_07-01-24_low_res.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "eagle-group-7100",
		"label": "Modèle 7100, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "7100",
			"Weight (lb)": "2.3",
			"Weight (kg)": "1"
		}
	},
	"editorial": {
		"overview": "Eagle Group 7100. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Weight (lb) : 2.3.",
			"Weight (kg) : 1.",
			"Length (inch) : 9.",
			"Length (mm) : 229."
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
			"value": "2.3",
			"evidenceIds": [
				"october5-tools-eagle-2024-p32"
			]
		},
		{
			"label": "Weight (kg)",
			"value": "1",
			"evidenceIds": [
				"october5-tools-eagle-2024-p32"
			]
		},
		{
			"label": "Length (inch)",
			"value": "9",
			"evidenceIds": [
				"october5-tools-eagle-2024-p32"
			]
		},
		{
			"label": "Length (mm)",
			"value": "229",
			"evidenceIds": [
				"october5-tools-eagle-2024-p32"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-eagle-2024-p32",
			"sourceUrl": "https://www.eagle-premier.com/online_catalog/Eagle/LIT-E100%20Eagle%20Catalog_07-01-24_low_res.pdf#page=32",
			"sourceLabel": "Eagle, catalogue officiel 2024, page PDF 32",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 d621dd927ab049875dff453c23e94578658402155feee4892380f9b89688b4c8. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-eagle-2024-p32"
		],
		"workingPressureBar": [
			"october5-tools-eagle-2024-p32"
		],
		"demandExplanation": [
			"october5-tools-eagle-2024-p32"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
