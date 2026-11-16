import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-tranmax-tpt-501",
	"slug": "meuleuse-tranmax-tpt-501",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Tranmax TPT-501",
	"brand": "Tranmax",
	"model": "TPT-501",
	"mpn": "TPT-501",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La consommation publiée est une moyenne en charge, sans pression de mesure associée dans le tableau. Elle reste documentaire et ne donne pas un maximum de dimensionnement.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-tranmax-tpt-501-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Tranmax TPT-501",
		"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "tranmax-tpt-501",
		"label": "Référence TPT-501",
		"distinguishingAttributes": {
			"reference": "TPT-501",
			"Masse publiée": "0.4 kg (0.9 lb)",
			"Longueur hors tout publiée": "142 mm (5.6 inch)"
		}
	},
	"editorial": {
		"overview": "La TPT-501 est une mini-meuleuse droite de 142 mm, pince de 1/4 pouce (6 mm selon la colonne alternative) et 25 000 tr/min. La TPT-501A est coudée et tourne à 22 000 tr/min ; les TPT-507/508 sont des meuleuses à disque, pas des montages en pince.",
		"verifiedFacts": [
			"Pince : tailles publiées : 1/4 pouce ; 6 mm, configuration à confirmer.",
			"Vitesse à vide : 25 000 tr/min.",
			"Puissance publiée : 0,3 hp ; 0,2 kW.",
			"Longueur et masse : 142 mm ; 0,4 kg.",
			"Consommation moyenne en charge : 270 L/min (9,5 cfm) ; pression de mesure non indiquée."
		],
		"limitations": [
			"La consommation publiée est une moyenne en charge, sans pression de mesure associée dans le tableau. Elle reste documentaire et ne donne pas un maximum de dimensionnement.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Pince : tailles publiées",
			"value": "1/4 pouce ; 6 mm, configuration à confirmer",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-tranmax-tpt-501:0"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "25 000 tr/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-tranmax-tpt-501:0"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "0,3 hp ; 0,2 kW",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-tranmax-tpt-501:0"
			]
		},
		{
			"label": "Longueur et masse",
			"value": "142 mm ; 0,4 kg",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-tranmax-tpt-501:0"
			]
		},
		{
			"label": "Consommation moyenne en charge",
			"value": "270 L/min (9,5 cfm) ; pression de mesure non indiquée",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-tranmax-tpt-501:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-tranmax-tp-pdf-p19",
			"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf#page=19",
			"sourceLabel": "Tranmax, catalogue pneumatique officiel publié par Tranmax, page PDF 19",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : c2e29dbb1f9d433e1d65568bc327d3ea21eadd7d39f8edbb0d98145850f7c7d2. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:meuleuse-tranmax-tpt-501:0",
			"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf",
			"sourceLabel": "Tranmax, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La TPT-501 est une mini-meuleuse droite de 142 mm, pince de 1/4 pouce (6 mm selon la colonne alternative) et 25 000 tr/min. La TPT-501A est coudée et tourne à 22 000 tr/min ; les TPT-507/508 sont des meuleuses à disque, pas des montages en pince. GET complet SHA-256 c2e29dbb1f9d433e1d65568bc327d3ea21eadd7d39f8edbb0d98145850f7c7d2. Pages PDF lues : 19."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reviews:meuleuse-tranmax-tpt-501:0"
		],
		"demandExplanation": [
			"review:2026-11-16-reviews:meuleuse-tranmax-tpt-501:0"
		],
		"workingPressureBar": [
			"review:2026-11-16-reviews:meuleuse-tranmax-tpt-501:0"
		]
	},
	"notes": [
		"La consommation publiée est une moyenne en charge, sans pression de mesure associée dans le tableau. Elle reste documentaire et ne donne pas un maximum de dimensionnement."
	]
};

export default product;
