import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-tranmax-tpt-607",
	"slug": "perceuse-tranmax-tpt-607",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Tranmax TPT-607",
	"brand": "Tranmax",
	"model": "TPT-607",
	"mpn": "TPT-607",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La consommation publiée est une moyenne en charge, sans pression de mesure associée dans le tableau. Elle reste documentaire et ne donne pas un maximum de dimensionnement.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-tranmax-tpt-607-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Tranmax TPT-607",
		"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "tranmax-tpt-607",
		"label": "Référence TPT-607",
		"distinguishingAttributes": {
			"reference": "TPT-607",
			"Masse publiée": "1.8 kg (4.0 lb)",
			"Longueur hors tout publiée": "228 mm (9.0 inch)"
		}
	},
	"editorial": {
		"overview": "La TPT-607 est une perceuse non réversible à mandrin 1/2 pouce, 500 tr/min et 228 mm. La TPT-606 garde le mandrin 1/2 mais tourne à 800 tr/min dans 203 mm ; la TPT-608 est une 3/8 plus légère à 1 500 tr/min.",
		"verifiedFacts": [
			"Mandrin : 1/2 pouce.",
			"Sens : Non réversible.",
			"Vitesse à vide : 500 tr/min.",
			"Puissance publiée : 0,5 hp ; 0,4 kW.",
			"Longueur et masse : 228 mm ; 1,8 kg.",
			"Consommation moyenne en charge : 241 L/min (8,5 cfm) ; pression de mesure non indiquée."
		],
		"limitations": [
			"La consommation publiée est une moyenne en charge, sans pression de mesure associée dans le tableau. Elle reste documentaire et ne donne pas un maximum de dimensionnement.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Mandrin",
			"value": "1/2 pouce",
			"evidenceIds": [
				"review:2026-11-16-reviews:perceuse-tranmax-tpt-607:0"
			]
		},
		{
			"label": "Sens",
			"value": "Non réversible",
			"evidenceIds": [
				"review:2026-11-16-reviews:perceuse-tranmax-tpt-607:0"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "500 tr/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:perceuse-tranmax-tpt-607:0"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "0,5 hp ; 0,4 kW",
			"evidenceIds": [
				"review:2026-11-16-reviews:perceuse-tranmax-tpt-607:0"
			]
		},
		{
			"label": "Longueur et masse",
			"value": "228 mm ; 1,8 kg",
			"evidenceIds": [
				"review:2026-11-16-reviews:perceuse-tranmax-tpt-607:0"
			]
		},
		{
			"label": "Consommation moyenne en charge",
			"value": "241 L/min (8,5 cfm) ; pression de mesure non indiquée",
			"evidenceIds": [
				"review:2026-11-16-reviews:perceuse-tranmax-tpt-607:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-tranmax-tp-pdf-p29",
			"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf#page=29",
			"sourceLabel": "Tranmax, catalogue pneumatique officiel publié par Tranmax, page PDF 29",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : c2e29dbb1f9d433e1d65568bc327d3ea21eadd7d39f8edbb0d98145850f7c7d2. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:perceuse-tranmax-tpt-607:0",
			"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf",
			"sourceLabel": "Tranmax, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La TPT-607 est une perceuse non réversible à mandrin 1/2 pouce, 500 tr/min et 228 mm. La TPT-606 garde le mandrin 1/2 mais tourne à 800 tr/min dans 203 mm ; la TPT-608 est une 3/8 plus légère à 1 500 tr/min. GET complet SHA-256 c2e29dbb1f9d433e1d65568bc327d3ea21eadd7d39f8edbb0d98145850f7c7d2. Pages PDF lues : 29."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reviews:perceuse-tranmax-tpt-607:0"
		],
		"demandExplanation": [
			"review:2026-11-16-reviews:perceuse-tranmax-tpt-607:0"
		],
		"workingPressureBar": [
			"review:2026-11-16-reviews:perceuse-tranmax-tpt-607:0"
		]
	},
	"notes": [
		"La consommation publiée est une moyenne en charge, sans pression de mesure associée dans le tableau. Elle reste documentaire et ne donne pas un maximum de dimensionnement."
	]
};

export default product;
