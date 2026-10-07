import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-eagle-group-2010",
	"slug": "cle-a-chocs-eagle-group-2010",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Eagle Group 2010",
	"brand": "Eagle Group",
	"model": "2010",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-eagle-group-2010.svg",
		"alt": "Repères techniques : Eagle Group 2010",
		"sourceUrl": "https://www.eagle-premier.com/online_catalog/Eagle/LIT-E100%20Eagle%20Catalog_07-01-24_low_res.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "eagle-group-2010",
		"label": "Modèle 2010, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "2010",
			"Weight (lb)": "2.8",
			"Weight (kg)": "1.3"
		}
	},
	"editorial": {
		"overview": "Eagle Group 2010. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Weight (lb) : 2.8.",
			"Weight (kg) : 1.3.",
			"Length (inch) : 6.4.",
			"Length (mm) : 163."
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
			"value": "2.8",
			"evidenceIds": [
				"october5-tools-eagle-2024-p19"
			]
		},
		{
			"label": "Weight (kg)",
			"value": "1.3",
			"evidenceIds": [
				"october5-tools-eagle-2024-p19"
			]
		},
		{
			"label": "Length (inch)",
			"value": "6.4",
			"evidenceIds": [
				"october5-tools-eagle-2024-p19"
			]
		},
		{
			"label": "Length (mm)",
			"value": "163",
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
