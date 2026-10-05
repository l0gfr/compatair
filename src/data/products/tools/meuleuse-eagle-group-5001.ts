const product: unknown = {
	"id": "meuleuse-eagle-group-5001",
	"slug": "meuleuse-eagle-group-5001",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Eagle Group 5001",
	"brand": "Eagle Group",
	"model": "5001",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-eagle-group-5001.svg",
		"alt": "Repères techniques : Eagle Group 5001",
		"sourceUrl": "https://www.eagle-premier.com/online_catalog/Eagle/LIT-E100%20Eagle%20Catalog_07-01-24_low_res.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "eagle-group-5001",
		"label": "Modèle 5001, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "5001",
			"Weight (lb)": "1.3",
			"Weight (kg)": "0.6"
		}
	},
	"editorial": {
		"overview": "Eagle Group 5001. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Weight (lb) : 1.3.",
			"Weight (kg) : 0.6.",
			"Length (inch) : 6.5.",
			"Length (mm) : 165."
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
			"value": "1.3",
			"evidenceIds": [
				"october5-tools-eagle-2024-p6"
			]
		},
		{
			"label": "Weight (kg)",
			"value": "0.6",
			"evidenceIds": [
				"october5-tools-eagle-2024-p6"
			]
		},
		{
			"label": "Length (inch)",
			"value": "6.5",
			"evidenceIds": [
				"october5-tools-eagle-2024-p6"
			]
		},
		{
			"label": "Length (mm)",
			"value": "165",
			"evidenceIds": [
				"october5-tools-eagle-2024-p6"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-eagle-2024-p6",
			"sourceUrl": "https://www.eagle-premier.com/online_catalog/Eagle/LIT-E100%20Eagle%20Catalog_07-01-24_low_res.pdf#page=6",
			"sourceLabel": "Eagle, catalogue officiel 2024, page PDF 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 d621dd927ab049875dff453c23e94578658402155feee4892380f9b89688b4c8. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-eagle-2024-p6"
		],
		"workingPressureBar": [
			"october5-tools-eagle-2024-p6"
		],
		"demandExplanation": [
			"october5-tools-eagle-2024-p6"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
