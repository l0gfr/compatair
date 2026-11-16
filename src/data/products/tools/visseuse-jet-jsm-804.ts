import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-jet-jsm-804",
	"slug": "visseuse-jet-jsm-804",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "JET JSM-804",
	"brand": "JET",
	"model": "JSM-804",
	"mpn": "JSM-804",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le catalogue publie une consommation en CFM sans régime ni pression de mesure associés. Cette valeur reste documentaire et la compatibilité demeure indéterminée.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-jet-jsm-804-technical-20261116-reviews.svg",
		"alt": "Repères techniques : JET JSM-804",
		"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "jet-jsm-804",
		"label": "Référence JSM-804",
		"distinguishingAttributes": {
			"reference": "JSM-804",
			"Masse publiée": "2-1/3 lbs",
			"Ligne technique constructeur": "JSm-804 positive 1/4 1/2 1800 115 4 1/4 3/8 0.6 99 7 2-1/3"
		}
	},
	"editorial": {
		"overview": "JET JSM-804 : visseuse réversible pour embout hexagonal 1/4 pouce, 1 800 tr/min et type « Positive » dans la colonne du fabricant. La JSM-802 porte le type « Adjustable » et une plage 45–115 dans la colonne Torque, contre 115 pour la 804. Le catalogue libelle cette colonne en ft-lb ; l’unité doit être confirmée avant de choisir un couple de serrage.",
		"verifiedFacts": [
			"Porte-embout : Hexagonal 1/4 pouce.",
			"Type, libellé fabricant : Positive.",
			"Puissance publiée : 1/2 hp.",
			"Vitesse à vide : 1 800 tr/min.",
			"Couple, colonne fabricant : 115 ft-lb ; unité à confirmer.",
			"Longueur : 7 pouces.",
			"Masse : 2⅓ lb.",
			"Consommation documentaire : 4 CFM, régime non précisé."
		],
		"limitations": [
			"Le catalogue publie une consommation en CFM sans régime ni pression de mesure associés. Cette valeur reste documentaire et la compatibilité demeure indéterminée.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer.",
			"La colonne de couple est imprimée en ft-lb. Aucune conversion en Nm ni assimilation à des in-lb n’est faite pour cette valeur atypique."
		]
	},
	"specifications": [
		{
			"label": "Porte-embout",
			"value": "Hexagonal 1/4 pouce",
			"evidenceIds": [
				"review:2026-11-16-reviews:visseuse-jet-jsm-804:0"
			]
		},
		{
			"label": "Type, libellé fabricant",
			"value": "Positive",
			"evidenceIds": [
				"review:2026-11-16-reviews:visseuse-jet-jsm-804:0"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "1/2 hp",
			"evidenceIds": [
				"review:2026-11-16-reviews:visseuse-jet-jsm-804:0"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1 800 tr/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:visseuse-jet-jsm-804:0"
			]
		},
		{
			"label": "Couple, colonne fabricant",
			"value": "115 ft-lb ; unité à confirmer",
			"evidenceIds": [
				"review:2026-11-16-reviews:visseuse-jet-jsm-804:0"
			]
		},
		{
			"label": "Longueur",
			"value": "7 pouces",
			"evidenceIds": [
				"review:2026-11-16-reviews:visseuse-jet-jsm-804:0"
			]
		},
		{
			"label": "Masse",
			"value": "2⅓ lb",
			"evidenceIds": [
				"review:2026-11-16-reviews:visseuse-jet-jsm-804:0"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "4 CFM, régime non précisé",
			"evidenceIds": [
				"review:2026-11-16-reviews:visseuse-jet-jsm-804:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-jet-catalog-pdf-p69",
			"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf#page=69",
			"sourceLabel": "JET, catalogue industriel constructeur archivé, section Air Tools, page PDF 69",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9381736270fc03a7d3233abbb4c97f401cc4f8f453822e2b9eabc85c4e4f6ec6. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:visseuse-jet-jsm-804:0",
			"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf",
			"sourceLabel": "JET, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "JET JSM-804 : visseuse réversible pour embout hexagonal 1/4 pouce, 1 800 tr/min et type « Positive » dans la colonne du fabricant. La JSM-802 porte le type « Adjustable » et une plage 45–115 dans la colonne Torque, contre 115 pour la 804. Le catalogue libelle cette colonne en ft-lb ; l’unité doit être confirmée avant de choisir un couple de serrage. GET complet SHA-256 9381736270fc03a7d3233abbb4c97f401cc4f8f453822e2b9eabc85c4e4f6ec6. Pages PDF lues : 69."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reviews:visseuse-jet-jsm-804:0"
		],
		"demandExplanation": [
			"review:2026-11-16-reviews:visseuse-jet-jsm-804:0"
		],
		"workingPressureBar": [
			"review:2026-11-16-reviews:visseuse-jet-jsm-804:0"
		]
	},
	"notes": [
		"Le catalogue publie une consommation en CFM sans régime ni pression de mesure associés. Cette valeur reste documentaire et la compatibilité demeure indéterminée."
	]
};

export default product;
