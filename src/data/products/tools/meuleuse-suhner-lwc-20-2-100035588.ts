import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-suhner-lwc-20-2-100035588",
	"slug": "meuleuse-suhner-lwc-20-2-100035588",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Suhner LWC 20-2 (réf. 100035588)",
	"brand": "Suhner",
	"model": "LWC 20-2",
	"mpn": "100035588",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-suhner-lwc-20-2-100035588.webp",
		"alt": "Repères techniques : Suhner LWC 20-2 (réf. 100035588)",
		"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "suhner-lwc-20-2",
		"label": "Référence 100035588",
		"distinguishingAttributes": {
			"reference": "100035588",
			"Vitesse à vide": "21000 tr/min",
			"Puissance publiée": "350 W"
		}
	},
	"editorial": {
		"overview": "Suhner LWC 20-2 (réf. 100035588). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 21000 tr/min. Puissance publiée : 350 W.",
		"verifiedFacts": [
			"Vitesse à vide : 21000 tr/min.",
			"Puissance publiée : 350 W."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "21000 tr/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p27"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "350 W",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p27"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression numérique de mesure dans le catalogue 10/2024 EN.",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p27"
			]
		},
		{
			"label": "Consommation à vide, hors calcul",
			"value": "0.80 m3/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p27"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-suhner-pneumatic-p27",
			"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf#page=27",
			"sourceLabel": "Pneumatic power tools, catalogue fabricant EN 10/2024, page PDF 27",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 355401bdbabe6cb5a7bfa85064961b89eabb84f7ebad27a03b193f57bc12f7dd. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-suhner-pneumatic-p27"
		],
		"workingPressureBar": [
			"october2-tools-suhner-pneumatic-p27"
		],
		"demandExplanation": [
			"october2-tools-suhner-pneumatic-p27"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
