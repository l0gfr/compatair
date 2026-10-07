import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-eagle-group-5i-10202x",
	"slug": "meuleuse-eagle-group-5i-10202x",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Eagle Group 5I-10202X",
	"brand": "Eagle Group",
	"model": "5I-10202X",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-eagle-group-5i-10202x.svg",
		"alt": "Repères techniques : Eagle Group 5I-10202X",
		"sourceUrl": "https://www.eagle-premier.com/online_catalog/Eagle/LIT-E100%20Eagle%20Catalog_07-01-24_low_res.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "eagle-group-5i-10202x",
		"label": "Modèle 5I-10202X, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "5I-10202X",
			"Weight (lb)": "4.5",
			"Weight (kg)": "2"
		}
	},
	"editorial": {
		"overview": "Eagle Group 5I-10202X. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Weight (lb) : 4.5.",
			"Weight (kg) : 2.",
			"Length (inch) : 14.5.",
			"Length (mm) : 368."
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
			"value": "4.5",
			"evidenceIds": [
				"october5-tools-eagle-2024-p8"
			]
		},
		{
			"label": "Weight (kg)",
			"value": "2",
			"evidenceIds": [
				"october5-tools-eagle-2024-p8"
			]
		},
		{
			"label": "Length (inch)",
			"value": "14.5",
			"evidenceIds": [
				"october5-tools-eagle-2024-p8"
			]
		},
		{
			"label": "Length (mm)",
			"value": "368",
			"evidenceIds": [
				"october5-tools-eagle-2024-p8"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-eagle-2024-p8",
			"sourceUrl": "https://www.eagle-premier.com/online_catalog/Eagle/LIT-E100%20Eagle%20Catalog_07-01-24_low_res.pdf#page=8",
			"sourceLabel": "Eagle, catalogue officiel 2024, page PDF 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 d621dd927ab049875dff453c23e94578658402155feee4892380f9b89688b4c8. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-eagle-2024-p8"
		],
		"workingPressureBar": [
			"october5-tools-eagle-2024-p8"
		],
		"demandExplanation": [
			"october5-tools-eagle-2024-p8"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
