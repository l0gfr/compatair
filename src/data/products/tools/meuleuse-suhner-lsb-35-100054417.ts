import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-suhner-lsb-35-100054417",
	"slug": "meuleuse-suhner-lsb-35-100054417",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Suhner LSB 35 (réf. 100054417)",
	"brand": "Suhner",
	"model": "LSB 35",
	"mpn": "100054417",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-suhner-lsb-35-100054417.webp",
		"alt": "Repères techniques : Suhner LSB 35 (réf. 100054417)",
		"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "suhner-lsb-35",
		"label": "Référence 100054417",
		"distinguishingAttributes": {
			"reference": "100054417",
			"Vitesse à vide": "40 000 tr/min",
			"Puissance publiée": "220 W"
		}
	},
	"editorial": {
		"overview": "Suhner LSB 35 (réf. 100054417). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 40 000 tr/min. Puissance publiée : 220 W.",
		"verifiedFacts": [
			"Vitesse à vide : 40 000 tr/min.",
			"Puissance publiée : 220 W."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "40 000 tr/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p8"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "220 W",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p8"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression numérique de mesure dans le catalogue 10/2024 EN.",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p8"
			]
		},
		{
			"label": "Consommation à vide, hors calcul",
			"value": "0.600 m3/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p8"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-suhner-pneumatic-p8",
			"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf#page=8",
			"sourceLabel": "Pneumatic power tools, catalogue fabricant EN 10/2024, page PDF 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 355401bdbabe6cb5a7bfa85064961b89eabb84f7ebad27a03b193f57bc12f7dd. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-suhner-pneumatic-p8"
		],
		"workingPressureBar": [
			"october2-tools-suhner-pneumatic-p8"
		],
		"demandExplanation": [
			"october2-tools-suhner-pneumatic-p8"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
