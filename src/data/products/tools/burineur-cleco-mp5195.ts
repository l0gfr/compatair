import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-cleco-mp5195",
	"slug": "burineur-cleco-mp5195",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Cleco MP5195",
	"brand": "Cleco",
	"model": "MP5195",
	"mpn": "MP5195",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-cleco-mp5195-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Cleco MP5195",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "cleco-mp5195",
		"label": "Référence MP5195",
		"distinguishingAttributes": {
			"reference": "MP5195",
			"Masse publiée": "5.2 kg",
			"Longueur publiée": "1524 mm",
			"Cadence publiée": "2,200 coups/min"
		}
	},
	"editorial": {
		"overview": "Le MP5195 est un décapeur à longue portée de 1 524 mm destiné au retrait de revêtements, colles et résines. Les B1-C-LT et B1-C-PT mesurent 262 et 305 mm : ils répondent à des accès différents. La cadence de frappe ne fournit pas la consommation d’air manquante.",
		"verifiedFacts": [
			"Longueur et masse : 1 524 mm ; 5,2 kg.",
			"Cadence de frappe : 2 200 coups/min.",
			"Piston : diamètre et course : 29 mm ; 39 mm.",
			"Burin indiqué en équipement standard : 51741 ; largeur 4 pouces ; queue hexagonale 5/8 pouce.",
			"Consommation : Absente du tableau ; besoin en air indéterminé."
		],
		"limitations": [
			"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Longueur et masse",
			"value": "1 524 mm ; 5,2 kg",
			"evidenceIds": [
				"review:2026-11-16-reviews:burineur-cleco-mp5195:0"
			]
		},
		{
			"label": "Cadence de frappe",
			"value": "2 200 coups/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:burineur-cleco-mp5195:0"
			]
		},
		{
			"label": "Piston : diamètre et course",
			"value": "29 mm ; 39 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:burineur-cleco-mp5195:0"
			]
		},
		{
			"label": "Burin indiqué en équipement standard",
			"value": "51741 ; largeur 4 pouces ; queue hexagonale 5/8 pouce",
			"evidenceIds": [
				"review:2026-11-16-reviews:burineur-cleco-mp5195:0"
			]
		},
		{
			"label": "Consommation",
			"value": "Absente du tableau ; besoin en air indéterminé",
			"evidenceIds": [
				"review:2026-11-16-reviews:burineur-cleco-mp5195:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october-dotco-p103",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=103",
			"sourceLabel": "Cleco/Dotco, Material Removal SP-102EN, page 103",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:burineur-cleco-mp5195:0",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf",
			"sourceLabel": "Cleco, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Le MP5195 est un décapeur à longue portée de 1 524 mm destiné au retrait de revêtements, colles et résines. Les B1-C-LT et B1-C-PT mesurent 262 et 305 mm : ils répondent à des accès différents. La cadence de frappe ne fournit pas la consommation d’air manquante. GET complet SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Pages PDF lues : 103."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reviews:burineur-cleco-mp5195:0"
		],
		"demandExplanation": [
			"review:2026-11-16-reviews:burineur-cleco-mp5195:0"
		],
		"workingPressureBar": [
			"review:2026-11-16-reviews:burineur-cleco-mp5195:0"
		]
	},
	"notes": [
		"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
	]
};

export default product;
