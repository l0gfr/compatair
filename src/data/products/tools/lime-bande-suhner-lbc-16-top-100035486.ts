import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "lime-bande-suhner-lbc-16-top-100035486",
	"slug": "lime-bande-suhner-lbc-16-top-100035486",
	"categoryId": "lime-bande",
	"category": "lime-bande",
	"label": "Suhner LBC 16 TOP (réf. 100035486)",
	"brand": "Suhner",
	"model": "LBC 16 TOP",
	"mpn": "100035486",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/lime-bande-suhner-lbc-16-top-100035486.webp",
		"alt": "Repères techniques : Suhner LBC 16 TOP (réf. 100035486)",
		"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "suhner-lbc-16-top",
		"label": "Référence 100035486",
		"distinguishingAttributes": {
			"reference": "100035486",
			"Vitesse à vide": "18 000 tr/min",
			"Puissance publiée": "330 W"
		}
	},
	"editorial": {
		"overview": "Suhner LBC 16 TOP (réf. 100035486). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 18 000 tr/min. Puissance publiée : 330 W.",
		"verifiedFacts": [
			"Vitesse à vide : 18 000 tr/min.",
			"Puissance publiée : 330 W."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "18 000 tr/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p40"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "330 W",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p40"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression numérique de mesure dans le catalogue 10/2024 EN.",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p40"
			]
		},
		{
			"label": "Consommation à vide, hors calcul",
			"value": "0.650 m3/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p40"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-suhner-pneumatic-p40",
			"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf#page=40",
			"sourceLabel": "Pneumatic power tools, catalogue fabricant EN 10/2024, page PDF 40",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 355401bdbabe6cb5a7bfa85064961b89eabb84f7ebad27a03b193f57bc12f7dd. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-suhner-pneumatic-p40"
		],
		"workingPressureBar": [
			"october2-tools-suhner-pneumatic-p40"
		],
		"demandExplanation": [
			"october2-tools-suhner-pneumatic-p40"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
