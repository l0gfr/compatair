import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-suhner-lsb-20-1-4-usa-100054373",
	"slug": "meuleuse-suhner-lsb-20-1-4-usa-100054373",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Suhner LSB 20 (1/4\" USA) (réf. 100054373)",
	"brand": "Suhner",
	"model": "LSB 20 (1/4\" USA)",
	"mpn": "100054373",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-suhner-lsb-20-1-4-usa-100054373.webp",
		"alt": "Repères techniques : Suhner LSB 20 (1/4\" USA) (réf. 100054373)",
		"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "suhner-lsb-20-1-4-usa",
		"label": "Référence 100054373",
		"distinguishingAttributes": {
			"reference": "100054373",
			"Vitesse à vide": "24 000 tr/min",
			"Puissance publiée": "270 W"
		}
	},
	"editorial": {
		"overview": "Suhner LSB 20 (1/4\" USA) (réf. 100054373). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 24 000 tr/min. Puissance publiée : 270 W.",
		"verifiedFacts": [
			"Vitesse à vide : 24 000 tr/min.",
			"Puissance publiée : 270 W."
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
				"october2-tools-suhner-pneumatic-p7"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "270 W",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p7"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression numérique de mesure dans le catalogue 10/2024 EN.",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p7"
			]
		},
		{
			"label": "Consommation à vide, hors calcul",
			"value": "0.660 m3/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p7"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-suhner-pneumatic-p7",
			"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf#page=7",
			"sourceLabel": "Pneumatic power tools, catalogue fabricant EN 10/2024, page PDF 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 355401bdbabe6cb5a7bfa85064961b89eabb84f7ebad27a03b193f57bc12f7dd. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-suhner-pneumatic-p7"
		],
		"workingPressureBar": [
			"october2-tools-suhner-pneumatic-p7"
		],
		"demandExplanation": [
			"october2-tools-suhner-pneumatic-p7"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
