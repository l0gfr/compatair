import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-suhner-lsb-25-100035554",
	"slug": "meuleuse-suhner-lsb-25-100035554",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Suhner LSB 25 (réf. 100035554)",
	"brand": "Suhner",
	"model": "LSB 25",
	"mpn": "100035554",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-suhner-lsb-25-100035554.webp",
		"alt": "Repères techniques : Suhner LSB 25 (réf. 100035554)",
		"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "suhner-lsb-25",
		"label": "Référence 100035554",
		"distinguishingAttributes": {
			"reference": "100035554",
			"Vitesse à vide": "25 000 tr/min",
			"Puissance publiée": "250 W"
		}
	},
	"editorial": {
		"overview": "Suhner LSB 25 (réf. 100035554). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 25 000 tr/min. Puissance publiée : 250 W.",
		"verifiedFacts": [
			"Vitesse à vide : 25 000 tr/min.",
			"Puissance publiée : 250 W."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "25 000 tr/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p13"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "250 W",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p13"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression numérique de mesure dans le catalogue 10/2024 EN.",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p13"
			]
		},
		{
			"label": "Consommation à vide, hors calcul",
			"value": "0.330 m3/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p13"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-suhner-pneumatic-p13",
			"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf#page=13",
			"sourceLabel": "Pneumatic power tools, catalogue fabricant EN 10/2024, page PDF 13",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 355401bdbabe6cb5a7bfa85064961b89eabb84f7ebad27a03b193f57bc12f7dd. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-suhner-pneumatic-p13"
		],
		"workingPressureBar": [
			"october2-tools-suhner-pneumatic-p13"
		],
		"demandExplanation": [
			"october2-tools-suhner-pneumatic-p13"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
