import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-hvlp-hymair-s970g",
	"slug": "pistolet-peinture-hvlp-hymair-s970g",
	"categoryId": "pistolet-peinture-hvlp",
	"category": "pistolet-peinture-hvlp",
	"label": "Hymair S970G",
	"brand": "Hymair",
	"model": "S970G",
	"mpn": "S970G",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 2.5,
		"max": 3.5
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-hvlp-hymair-s970g.webp",
		"alt": "Repères techniques : Hymair S970G",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SZUfKpLkrMNq&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-s970g",
		"label": "Référence S970G",
		"distinguishingAttributes": {
			"reference": "S970G",
			"Capacité du godet": "1000 ml",
			"Buse standard déclarée": "1.8 mm"
		}
	},
	"editorial": {
		"overview": "S970G : godet de 1 000 ml, buse standard de 1,8 mm et jet annoncé de 160 à 220 mm. Le H897 voisin utilise 600 ml et annonce 240 mm. Le volume préparé et la géométrie du jet sont donc deux choix distincts ; le plus grand godet ne démontre pas un jet plus large. Les 7,5 cfm de la ligne S970G restent documentaires, sans point de mesure apparié à la plage de 2,5 à 3,5 bar.",
		"verifiedFacts": [
			"Capacité du godet : 1000 ml.",
			"Buse standard déclarée : 1.8 mm.",
			"Largeur de jet publiée : 160~220 mm."
		],
		"limitations": [
			"Les buses optionnelles de 1,4 à 2,0 mm ne constituent pas des essais de consommation séparés. La compatibilité du revêtement et son réglage doivent suivre la notice.",
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Capacité du godet",
			"value": "1000 ml",
			"evidenceIds": [
				"october2-tools-steed-7-p5"
			]
		},
		{
			"label": "Buse standard déclarée",
			"value": "1.8 mm",
			"evidenceIds": [
				"october2-tools-steed-7-p5"
			]
		},
		{
			"label": "Largeur de jet publiée",
			"value": "160~220 mm",
			"evidenceIds": [
				"october2-tools-steed-7-p5"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure: 2.5~3.5 bar",
			"evidenceIds": [
				"october2-tools-steed-7-p5"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "7.5 cfm",
			"evidenceIds": [
				"october2-tools-steed-7-p5"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-7-p5",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SZUfKpLkrMNq&dp=GvUApKfKKUAU#page=5",
			"sourceLabel": "Hymair, documentation technique fabricant, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 971e9f3f662af10d3c638d5e9c29c8847ee04672c40e29957ad4ca4eb13d61c1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "october2-tools-steed-7-p2",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SZUfKpLkrMNq&dp=GvUApKfKKUAU#page=2",
			"sourceLabel": "Hymair, documentation technique fabricant, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 971e9f3f662af10d3c638d5e9c29c8847ee04672c40e29957ad4ca4eb13d61c1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-7-p5"
		],
		"workingPressureBar": [
			"october2-tools-steed-7-p5"
		],
		"demandExplanation": [
			"october2-tools-steed-7-p5"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
