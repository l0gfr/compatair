import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-hymair-as-j4001",
	"slug": "pistolet-peinture-hymair-as-j4001",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Hymair AS-J4001",
	"brand": "Hymair",
	"model": "AS-J4001",
	"mpn": "AS-J4001",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4.5,
		"max": 6
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-hymair-as-j4001.webp",
		"alt": "Repères techniques : Hymair AS-J4001",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SZUfKpLkrMNq&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-as-j4001",
		"label": "Référence AS-J4001",
		"distinguishingAttributes": {
			"reference": "AS-J4001",
			"Capacité du godet": "1000 ml",
			"Buse standard déclarée": "1.8 mm"
		}
	},
	"editorial": {
		"overview": "Hymair AS-J4001. La marque n’est pas déduite de l’hébergement du catalogue. La référence reste sous réserve d’identité, avec débit hors calcul et sans assimilation à un pistolet visuellement proche. Provenance de marque : Le document hébergé par Steed identifie AS-J4001 ; le rattachement à Hymair reste non confirmé.",
		"verifiedFacts": [
			"Capacité du godet : 1000 ml.",
			"Buse standard déclarée : 1.8 mm.",
			"Largeur de jet publiée : 280 mm.",
			"Provenance de marque : Le document hébergé par Steed identifie AS-J4001 ; le rattachement à Hymair reste non confirmé."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Capacité du godet",
			"value": "1000 ml",
			"evidenceIds": [
				"october2-tools-steed-7-p6"
			]
		},
		{
			"label": "Buse standard déclarée",
			"value": "1.8 mm",
			"evidenceIds": [
				"october2-tools-steed-7-p6"
			]
		},
		{
			"label": "Largeur de jet publiée",
			"value": "280 mm",
			"evidenceIds": [
				"october2-tools-steed-7-p6"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure: 4.5~6 bar",
			"evidenceIds": [
				"october2-tools-steed-7-p6"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "14.2 cfm",
			"evidenceIds": [
				"october2-tools-steed-7-p6"
			]
		},
		{
			"label": "Provenance de marque",
			"value": "Le document hébergé par Steed identifie AS-J4001 ; le rattachement à Hymair reste non confirmé",
			"evidenceIds": [
				"pistolet-peinture-hymair-as-j4001-reserved-20261101-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-7-p6",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SZUfKpLkrMNq&dp=GvUApKfKKUAU#page=6",
			"sourceLabel": "Hymair, documentation technique fabricant, page PDF 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 971e9f3f662af10d3c638d5e9c29c8847ee04672c40e29957ad4ca4eb13d61c1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "pistolet-peinture-hymair-as-j4001-reserved-20261101-1",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SZUfKpLkrMNq&dp=GvUApKfKKUAU#page=6",
			"sourceLabel": "Hymair : revue factuelle du 1 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-01",
			"confidence": "B",
			"notes": "Corps complet GET HTTP200 SHA-256 971e9f3f662af10d3c638d5e9c29c8847ee04672c40e29957ad4ca4eb13d61c1. Passage page=6. Lecture de la référence et des configurations voisines, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-7-p6"
		],
		"workingPressureBar": [
			"october2-tools-steed-7-p6"
		],
		"demandExplanation": [
			"october2-tools-steed-7-p6"
		],
		"editorial": [
			"pistolet-peinture-hymair-as-j4001-reserved-20261101-1"
		],
		"specifications": [
			"pistolet-peinture-hymair-as-j4001-reserved-20261101-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
