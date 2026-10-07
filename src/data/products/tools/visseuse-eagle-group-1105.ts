import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-eagle-group-1105",
	"slug": "visseuse-eagle-group-1105",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Eagle Group 1105",
	"brand": "Eagle Group",
	"model": "1105",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-eagle-group-1105.svg",
		"alt": "Repères techniques : Eagle Group 1105",
		"sourceUrl": "https://www.eagle-premier.com/online_catalog/Eagle/LIT-E100%20Eagle%20Catalog_07-01-24_low_res.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "eagle-group-1105",
		"label": "Modèle 1105, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "1105",
			"Weight (lb)": "1.5",
			"Weight (kg)": "0.7"
		}
	},
	"editorial": {
		"overview": "Eagle Group 1105. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Weight (lb) : 1.5.",
			"Weight (kg) : 0.7.",
			"Length (inch) : 5.1.",
			"Length (mm) : 130."
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
				"october5-tools-eagle-2024-p25"
			]
		},
		{
			"label": "Weight (kg)",
			"value": "0.7",
			"evidenceIds": [
				"october5-tools-eagle-2024-p25"
			]
		},
		{
			"label": "Length (inch)",
			"value": "5.1",
			"evidenceIds": [
				"october5-tools-eagle-2024-p25"
			]
		},
		{
			"label": "Length (mm)",
			"value": "130",
			"evidenceIds": [
				"october5-tools-eagle-2024-p25"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-eagle-2024-p25",
			"sourceUrl": "https://www.eagle-premier.com/online_catalog/Eagle/LIT-E100%20Eagle%20Catalog_07-01-24_low_res.pdf#page=25",
			"sourceLabel": "Eagle, catalogue officiel 2024, page PDF 25",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 d621dd927ab049875dff453c23e94578658402155feee4892380f9b89688b4c8. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-eagle-2024-p25"
		],
		"workingPressureBar": [
			"october5-tools-eagle-2024-p25"
		],
		"demandExplanation": [
			"october5-tools-eagle-2024-p25"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
