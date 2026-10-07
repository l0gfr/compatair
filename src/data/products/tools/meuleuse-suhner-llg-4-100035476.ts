import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-suhner-llg-4-100035476",
	"slug": "meuleuse-suhner-llg-4-100035476",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Suhner LLG 4 (réf. 100035476)",
	"brand": "Suhner",
	"model": "LLG 4",
	"mpn": "100035476",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-suhner-llg-4-100035476.webp",
		"alt": "Repères techniques : Suhner LLG 4 (réf. 100035476)",
		"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "suhner-llg-4",
		"label": "Référence 100035476",
		"distinguishingAttributes": {
			"reference": "100035476",
			"Vitesse à vide": "4 000 tr/min",
			"Puissance publiée": "900 W"
		}
	},
	"editorial": {
		"overview": "Suhner LLG 4 (réf. 100035476). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 4 000 tr/min. Puissance publiée : 900 W.",
		"verifiedFacts": [
			"Vitesse à vide : 4 000 tr/min.",
			"Puissance publiée : 900 W."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "4 000 tr/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p21"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "900 W",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p21"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression numérique de mesure dans le catalogue 10/2024 EN.",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p21"
			]
		},
		{
			"label": "Consommation à vide, hors calcul",
			"value": "0.600 m3/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p21"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-suhner-pneumatic-p21",
			"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf#page=21",
			"sourceLabel": "Pneumatic power tools, catalogue fabricant EN 10/2024, page PDF 21",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 355401bdbabe6cb5a7bfa85064961b89eabb84f7ebad27a03b193f57bc12f7dd. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-suhner-pneumatic-p21"
		],
		"workingPressureBar": [
			"october2-tools-suhner-pneumatic-p21"
		],
		"demandExplanation": [
			"october2-tools-suhner-pneumatic-p21"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
