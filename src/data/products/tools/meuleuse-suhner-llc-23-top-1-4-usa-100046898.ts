import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-suhner-llc-23-top-1-4-usa-100046898",
	"slug": "meuleuse-suhner-llc-23-top-1-4-usa-100046898",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Suhner LLC 23-TOP (1/4\" USA) (réf. 100046898)",
	"brand": "Suhner",
	"model": "LLC 23-TOP (1/4\" USA)",
	"mpn": "100046898",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-suhner-llc-23-top-1-4-usa-100046898.webp",
		"alt": "Repères techniques : Suhner LLC 23-TOP (1/4\" USA) (réf. 100046898)",
		"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "suhner-llc-23-top-1-4-usa",
		"label": "Référence 100046898",
		"distinguishingAttributes": {
			"reference": "100046898",
			"Vitesse à vide": "24 000 tr/min",
			"Puissance publiée": "330 W"
		}
	},
	"editorial": {
		"overview": "Suhner LLC 23-TOP (1/4\" USA) (réf. 100046898). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 24 000 tr/min. Puissance publiée : 330 W.",
		"verifiedFacts": [
			"Vitesse à vide : 24 000 tr/min.",
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
			"value": "24 000 tr/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p19"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "330 W",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p19"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression numérique de mesure dans le catalogue 10/2024 EN.",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p19"
			]
		},
		{
			"label": "Consommation à vide, hors calcul",
			"value": "0.790 m3/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p19"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-suhner-pneumatic-p19",
			"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf#page=19",
			"sourceLabel": "Pneumatic power tools, catalogue fabricant EN 10/2024, page PDF 19",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 355401bdbabe6cb5a7bfa85064961b89eabb84f7ebad27a03b193f57bc12f7dd. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-suhner-pneumatic-p19"
		],
		"workingPressureBar": [
			"october2-tools-suhner-pneumatic-p19"
		],
		"demandExplanation": [
			"october2-tools-suhner-pneumatic-p19"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
