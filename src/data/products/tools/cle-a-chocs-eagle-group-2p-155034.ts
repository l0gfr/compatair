import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-eagle-group-2p-155034",
	"slug": "cle-a-chocs-eagle-group-2p-155034",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Eagle Group 2P-155034",
	"brand": "Eagle Group",
	"model": "2P-155034",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-eagle-group-2p-155034.svg",
		"alt": "Repères techniques : Eagle Group 2P-155034",
		"sourceUrl": "https://www.eagle-premier.com/online_catalog/Eagle/LIT-E100%20Eagle%20Catalog_07-01-24_low_res.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "eagle-group-2p-155034",
		"label": "Modèle 2P-155034, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "2P-155034",
			"Weight (lb)": "6.7",
			"Weight (kg)": "3.05"
		}
	},
	"editorial": {
		"overview": "Eagle Group 2P-155034. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Weight (lb) : 6.7.",
			"Weight (kg) : 3.05.",
			"Length (inch) : 8.2.",
			"Length (mm) : 209."
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
			"value": "6.7",
			"evidenceIds": [
				"october5-tools-eagle-2024-p19"
			]
		},
		{
			"label": "Weight (kg)",
			"value": "3.05",
			"evidenceIds": [
				"october5-tools-eagle-2024-p19"
			]
		},
		{
			"label": "Length (inch)",
			"value": "8.2",
			"evidenceIds": [
				"october5-tools-eagle-2024-p19"
			]
		},
		{
			"label": "Length (mm)",
			"value": "209",
			"evidenceIds": [
				"october5-tools-eagle-2024-p19"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-eagle-2024-p19",
			"sourceUrl": "https://www.eagle-premier.com/online_catalog/Eagle/LIT-E100%20Eagle%20Catalog_07-01-24_low_res.pdf#page=19",
			"sourceLabel": "Eagle, catalogue officiel 2024, page PDF 19",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 d621dd927ab049875dff453c23e94578658402155feee4892380f9b89688b4c8. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-eagle-2024-p19"
		],
		"workingPressureBar": [
			"october5-tools-eagle-2024-p19"
		],
		"demandExplanation": [
			"october5-tools-eagle-2024-p19"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
