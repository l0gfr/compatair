import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-suhner-lwc-16-top-1-4-usa-100046899",
	"slug": "meuleuse-suhner-lwc-16-top-1-4-usa-100046899",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Suhner LWC 16-TOP (1/4\" USA) (réf. 100046899)",
	"brand": "Suhner",
	"model": "LWC 16-TOP (1/4\" USA)",
	"mpn": "100046899",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-suhner-lwc-16-top-1-4-usa-100046899.webp",
		"alt": "Repères techniques : Suhner LWC 16-TOP (1/4\" USA) (réf. 100046899)",
		"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "suhner-lwc-16-top-1-4-usa",
		"label": "Référence 100046899",
		"distinguishingAttributes": {
			"reference": "100046899",
			"Vitesse à vide": "18 000 tr/min",
			"Puissance publiée": "330 W"
		}
	},
	"editorial": {
		"overview": "Suhner LWC 16-TOP (1/4\" USA) (réf. 100046899). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 18 000 tr/min. Puissance publiée : 330 W.",
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
				"october2-tools-suhner-pneumatic-p29"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "330 W",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p29"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression numérique de mesure dans le catalogue 10/2024 EN.",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p29"
			]
		},
		{
			"label": "Consommation à vide, hors calcul",
			"value": "0.790 m3/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p29"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-suhner-pneumatic-p29",
			"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf#page=29",
			"sourceLabel": "Pneumatic power tools, catalogue fabricant EN 10/2024, page PDF 29",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 355401bdbabe6cb5a7bfa85064961b89eabb84f7ebad27a03b193f57bc12f7dd. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-suhner-pneumatic-p29"
		],
		"workingPressureBar": [
			"october2-tools-suhner-pneumatic-p29"
		],
		"demandExplanation": [
			"october2-tools-suhner-pneumatic-p29"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
