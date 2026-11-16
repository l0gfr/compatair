import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-bande-tranmax-tpt-474",
	"slug": "ponceuse-bande-tranmax-tpt-474",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "Tranmax TPT-474",
	"brand": "Tranmax",
	"model": "TPT-474",
	"mpn": "TPT-474",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La consommation publiée est une moyenne en charge, sans pression de mesure associée dans le tableau. Elle reste documentaire et ne donne pas un maximum de dimensionnement.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-bande-tranmax-tpt-474-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Tranmax TPT-474",
		"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "tranmax-tpt-474",
		"label": "Référence TPT-474",
		"distinguishingAttributes": {
			"reference": "TPT-474",
			"Masse publiée": "2.1 kg (4.6 lb)",
			"Longueur hors tout publiée": "390 mm (15.4 inch)"
		}
	},
	"editorial": {
		"overview": "La TPT-474 utilise une bande large de 30 × 540 mm à 13 000 tr/min pour 2,1 kg. La TPT-476 passe à 20 × 520 mm et la TPT-469 à 60 × 260 mm ; le format de bande et la portée diffèrent avant toute considération de consommation.",
		"verifiedFacts": [
			"Bande : 30 × 540 mm.",
			"Vitesse à vide : 13 000 tr/min.",
			"Longueur et masse : 390 mm ; 2,1 kg.",
			"Consommation moyenne en charge : 85 L/min (3 cfm) ; pression de mesure non indiquée.",
			"Arrivée d’air et flexible : 1/4 NPTF ; flexible 3/8 pouce (10 mm)."
		],
		"limitations": [
			"La consommation publiée est une moyenne en charge, sans pression de mesure associée dans le tableau. Elle reste documentaire et ne donne pas un maximum de dimensionnement.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Bande",
			"value": "30 × 540 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:ponceuse-bande-tranmax-tpt-474:0"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "13 000 tr/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:ponceuse-bande-tranmax-tpt-474:0"
			]
		},
		{
			"label": "Longueur et masse",
			"value": "390 mm ; 2,1 kg",
			"evidenceIds": [
				"review:2026-11-16-reviews:ponceuse-bande-tranmax-tpt-474:0"
			]
		},
		{
			"label": "Consommation moyenne en charge",
			"value": "85 L/min (3 cfm) ; pression de mesure non indiquée",
			"evidenceIds": [
				"review:2026-11-16-reviews:ponceuse-bande-tranmax-tpt-474:0"
			]
		},
		{
			"label": "Arrivée d’air et flexible",
			"value": "1/4 NPTF ; flexible 3/8 pouce (10 mm)",
			"evidenceIds": [
				"review:2026-11-16-reviews:ponceuse-bande-tranmax-tpt-474:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-tranmax-tp-pdf-p27",
			"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf#page=27",
			"sourceLabel": "Tranmax, catalogue pneumatique officiel publié par Tranmax, page PDF 27",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : c2e29dbb1f9d433e1d65568bc327d3ea21eadd7d39f8edbb0d98145850f7c7d2. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:ponceuse-bande-tranmax-tpt-474:0",
			"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf",
			"sourceLabel": "Tranmax, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La TPT-474 utilise une bande large de 30 × 540 mm à 13 000 tr/min pour 2,1 kg. La TPT-476 passe à 20 × 520 mm et la TPT-469 à 60 × 260 mm ; le format de bande et la portée diffèrent avant toute considération de consommation. GET complet SHA-256 c2e29dbb1f9d433e1d65568bc327d3ea21eadd7d39f8edbb0d98145850f7c7d2. Pages PDF lues : 27."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reviews:ponceuse-bande-tranmax-tpt-474:0"
		],
		"demandExplanation": [
			"review:2026-11-16-reviews:ponceuse-bande-tranmax-tpt-474:0"
		],
		"workingPressureBar": [
			"review:2026-11-16-reviews:ponceuse-bande-tranmax-tpt-474:0"
		]
	},
	"notes": [
		"La consommation publiée est une moyenne en charge, sans pression de mesure associée dans le tableau. Elle reste documentaire et ne donne pas un maximum de dimensionnement."
	]
};

export default product;
