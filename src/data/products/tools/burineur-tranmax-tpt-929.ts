import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-tranmax-tpt-929",
	"slug": "burineur-tranmax-tpt-929",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Tranmax TPT-929",
	"brand": "Tranmax",
	"model": "TPT-929",
	"mpn": "TPT-929",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La consommation publiée est une moyenne en charge, sans pression de mesure associée dans le tableau. Elle reste documentaire et ne donne pas un maximum de dimensionnement.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-tranmax-tpt-929-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Tranmax TPT-929",
		"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "tranmax-tpt-929",
		"label": "Référence TPT-929",
		"distinguishingAttributes": {
			"reference": "TPT-929",
			"Masse publiée": "40 kg (88 lb)",
			"Longueur hors tout publiée": "541 mm (21.3 inch)"
		}
	},
	"editorial": {
		"overview": "Le TPT-929 est un décapeur à burin de 541 mm et 4,0 kg, avec course de 26 mm à 2 400 coups/min. L’ancien relevé 40 kg est corrigé depuis la cellule 4,0 kg / 8,8 lb. Le TPT-928 est plus léger et plus rapide ; le TPT-932 est un burineur court plus lourd.",
		"verifiedFacts": [
			"Longueur et masse : 541 mm ; 4,0 kg (8,8 lb).",
			"Cadence et course : 2 400 coups/min ; 26 mm.",
			"Consommation moyenne en charge : 221 L/min (7,8 cfm) ; pression de mesure non indiquée.",
			"Arrivée d’air et flexible : 3/8 NPTF ; flexible 3/8 pouce (10 mm)."
		],
		"limitations": [
			"La consommation publiée est une moyenne en charge, sans pression de mesure associée dans le tableau. Elle reste documentaire et ne donne pas un maximum de dimensionnement.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Longueur et masse",
			"value": "541 mm ; 4,0 kg (8,8 lb)",
			"evidenceIds": [
				"review:2026-11-16-reviews:burineur-tranmax-tpt-929:0"
			]
		},
		{
			"label": "Cadence et course",
			"value": "2 400 coups/min ; 26 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:burineur-tranmax-tpt-929:0"
			]
		},
		{
			"label": "Consommation moyenne en charge",
			"value": "221 L/min (7,8 cfm) ; pression de mesure non indiquée",
			"evidenceIds": [
				"review:2026-11-16-reviews:burineur-tranmax-tpt-929:0"
			]
		},
		{
			"label": "Arrivée d’air et flexible",
			"value": "3/8 NPTF ; flexible 3/8 pouce (10 mm)",
			"evidenceIds": [
				"review:2026-11-16-reviews:burineur-tranmax-tpt-929:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-tranmax-tp-pdf-p32",
			"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf#page=32",
			"sourceLabel": "Tranmax, catalogue pneumatique officiel publié par Tranmax, page PDF 32",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : c2e29dbb1f9d433e1d65568bc327d3ea21eadd7d39f8edbb0d98145850f7c7d2. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:burineur-tranmax-tpt-929:0",
			"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf",
			"sourceLabel": "Tranmax, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Le TPT-929 est un décapeur à burin de 541 mm et 4,0 kg, avec course de 26 mm à 2 400 coups/min. L’ancien relevé 40 kg est corrigé depuis la cellule 4,0 kg / 8,8 lb. Le TPT-928 est plus léger et plus rapide ; le TPT-932 est un burineur court plus lourd. GET complet SHA-256 c2e29dbb1f9d433e1d65568bc327d3ea21eadd7d39f8edbb0d98145850f7c7d2. Pages PDF lues : 32."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reviews:burineur-tranmax-tpt-929:0"
		],
		"demandExplanation": [
			"review:2026-11-16-reviews:burineur-tranmax-tpt-929:0"
		],
		"workingPressureBar": [
			"review:2026-11-16-reviews:burineur-tranmax-tpt-929:0"
		]
	},
	"notes": [
		"La consommation publiée est une moyenne en charge, sans pression de mesure associée dans le tableau. Elle reste documentaire et ne donne pas un maximum de dimensionnement."
	]
};

export default product;
