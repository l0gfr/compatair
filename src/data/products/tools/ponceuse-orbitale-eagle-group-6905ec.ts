import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-eagle-group-6905ec",
	"slug": "ponceuse-orbitale-eagle-group-6905ec",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Eagle Group 6905EC",
	"brand": "Eagle Group",
	"model": "6905EC",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-eagle-group-6905ec.svg",
		"alt": "Repères techniques : Eagle Group 6905EC",
		"sourceUrl": "https://www.eagle-premier.com/online_catalog/Eagle/LIT-E100%20Eagle%20Catalog_07-01-24_low_res.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "eagle-group-6905ec",
		"label": "Modèle 6905EC, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "6905EC",
			"Weight (kg)": "0.9",
			"Length (mm)": "175"
		}
	},
	"editorial": {
		"overview": "Eagle Group 6905EC. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Weight (kg) : 0.9.",
			"Length (mm) : 175.",
			"Pad Size (inch) : 5.",
			"Orbit (inch) : 3/16.",
			"Approx. Speed (rpm) : 12,000."
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
			"value": "0.9",
			"evidenceIds": [
				"october5-tools-eagle-2024-p15"
			]
		},
		{
			"label": "Length (mm)",
			"value": "175",
			"evidenceIds": [
				"october5-tools-eagle-2024-p15"
			]
		},
		{
			"label": "Pad Size (inch)",
			"value": "5",
			"evidenceIds": [
				"october5-tools-eagle-2024-p15"
			]
		},
		{
			"label": "Orbit (inch)",
			"value": "3/16",
			"evidenceIds": [
				"october5-tools-eagle-2024-p15"
			]
		},
		{
			"label": "Approx. Speed (rpm)",
			"value": "12,000",
			"evidenceIds": [
				"october5-tools-eagle-2024-p15"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-eagle-2024-p15",
			"sourceUrl": "https://www.eagle-premier.com/online_catalog/Eagle/LIT-E100%20Eagle%20Catalog_07-01-24_low_res.pdf#page=15",
			"sourceLabel": "Eagle, catalogue officiel 2024, page PDF 15",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 d621dd927ab049875dff453c23e94578658402155feee4892380f9b89688b4c8. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-eagle-2024-p15"
		],
		"workingPressureBar": [
			"october5-tools-eagle-2024-p15"
		],
		"demandExplanation": [
			"october5-tools-eagle-2024-p15"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
