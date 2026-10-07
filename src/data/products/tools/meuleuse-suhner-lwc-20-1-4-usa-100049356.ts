import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-suhner-lwc-20-1-4-usa-100049356",
	"slug": "meuleuse-suhner-lwc-20-1-4-usa-100049356",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Suhner LWC 20 (1/4\" USA) (réf. 100049356)",
	"brand": "Suhner",
	"model": "LWC 20 (1/4\" USA)",
	"mpn": "100049356",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-suhner-lwc-20-1-4-usa-100049356.webp",
		"alt": "Repères techniques : Suhner LWC 20 (1/4\" USA) (réf. 100049356)",
		"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "suhner-lwc-20-1-4-usa",
		"label": "Référence 100049356",
		"distinguishingAttributes": {
			"reference": "100049356",
			"Vitesse à vide": "22 000 tr/min",
			"Puissance publiée": "350 W"
		}
	},
	"editorial": {
		"overview": "Suhner LWC 20 (1/4\" USA) (réf. 100049356). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 22 000 tr/min. Puissance publiée : 350 W.",
		"verifiedFacts": [
			"Vitesse à vide : 22 000 tr/min.",
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
			"value": "22 000 tr/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p28"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "350 W",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p28"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression numérique de mesure dans le catalogue 10/2024 EN.",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p28"
			]
		},
		{
			"label": "Consommation à vide, hors calcul",
			"value": "0.730 m3/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p28"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-suhner-pneumatic-p28",
			"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf#page=28",
			"sourceLabel": "Pneumatic power tools, catalogue fabricant EN 10/2024, page PDF 28",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 355401bdbabe6cb5a7bfa85064961b89eabb84f7ebad27a03b193f57bc12f7dd. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-suhner-pneumatic-p28"
		],
		"workingPressureBar": [
			"october2-tools-suhner-pneumatic-p28"
		],
		"demandExplanation": [
			"october2-tools-suhner-pneumatic-p28"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
