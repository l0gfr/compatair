import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-eagle-group-5000",
	"slug": "meuleuse-eagle-group-5000",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Eagle Group 5000",
	"brand": "Eagle Group",
	"model": "5000",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-eagle-group-5000.svg",
		"alt": "Repères techniques : Eagle Group 5000",
		"sourceUrl": "https://www.eagle-premier.com/online_catalog/Eagle/LIT-E100%20Eagle%20Catalog_07-01-24_low_res.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "eagle-group-5000",
		"label": "Modèle 5000, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "5000",
			"Weight (kg)": "0.3",
			"Length (mm)": "133"
		}
	},
	"editorial": {
		"overview": "Eagle Group 5000. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Weight (kg) : 0.3.",
			"Length (mm) : 133.",
			"Collet Size (inch) : 1/8.",
			"Approx. Power (hp) : 0.1.",
			"Approx. Speed (rpm) : 54,000."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"Le catalogue indique Air Usage (cfm), sans protocole de consommation ni point de pression associé. Ce chiffre reste documentaire et ne devient pas un débit en charge.",
			"L’appellation General duty ou Industrial duty décrit une gamme commerciale ; elle ne qualifie pas la mesure de consommation.",
			"Les panneaux individuels sont transcrits par cellules propres au modèle ; le reste du texte promotionnel de la page n’est pas réutilisé.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Weight (kg)",
			"value": "0.3",
			"evidenceIds": [
				"october5-tools-eagle-2024-p6"
			]
		},
		{
			"label": "Length (mm)",
			"value": "133",
			"evidenceIds": [
				"october5-tools-eagle-2024-p6"
			]
		},
		{
			"label": "Collet Size (inch)",
			"value": "1/8",
			"evidenceIds": [
				"october5-tools-eagle-2024-p6"
			]
		},
		{
			"label": "Approx. Power (hp)",
			"value": "0.1",
			"evidenceIds": [
				"october5-tools-eagle-2024-p6"
			]
		},
		{
			"label": "Approx. Speed (rpm)",
			"value": "54,000",
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
