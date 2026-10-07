import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-suhner-lpb-12-100043942",
	"slug": "meuleuse-suhner-lpb-12-100043942",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Suhner LPB 12 (réf. 100043942)",
	"brand": "Suhner",
	"model": "LPB 12",
	"mpn": "100043942",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-suhner-lpb-12-100043942.webp",
		"alt": "Repères techniques : Suhner LPB 12 (réf. 100043942)",
		"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "suhner-lpb-12",
		"label": "Référence 100043942",
		"distinguishingAttributes": {
			"reference": "100043942",
			"Vitesse à vide": "12 000 tr/min",
			"Puissance publiée": "250 W"
		}
	},
	"editorial": {
		"overview": "Suhner LPB 12 (réf. 100043942). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 12 000 tr/min. Puissance publiée : 250 W.",
		"verifiedFacts": [
			"Vitesse à vide : 12 000 tr/min.",
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
			"value": "12 000 tr/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p33"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "250 W",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p33"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression numérique de mesure dans le catalogue 10/2024 EN.",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p33"
			]
		},
		{
			"label": "Consommation à vide, hors calcul",
			"value": "0.600 m3/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p33"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-suhner-pneumatic-p33",
			"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf#page=33",
			"sourceLabel": "Pneumatic power tools, catalogue fabricant EN 10/2024, page PDF 33",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 355401bdbabe6cb5a7bfa85064961b89eabb84f7ebad27a03b193f57bc12f7dd. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-suhner-pneumatic-p33"
		],
		"workingPressureBar": [
			"october2-tools-suhner-pneumatic-p33"
		],
		"demandExplanation": [
			"october2-tools-suhner-pneumatic-p33"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
