import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-suhner-lle-18-top-1-4-usa-100046520",
	"slug": "meuleuse-suhner-lle-18-top-1-4-usa-100046520",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Suhner LLE 18-TOP (1/4\" USA) (réf. 100046520)",
	"brand": "Suhner",
	"model": "LLE 18-TOP (1/4\" USA)",
	"mpn": "100046520",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-suhner-lle-18-top-1-4-usa-100046520.webp",
		"alt": "Repères techniques : Suhner LLE 18-TOP (1/4\" USA) (réf. 100046520)",
		"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "suhner-lle-18-top-1-4-usa",
		"label": "Référence 100046520",
		"distinguishingAttributes": {
			"reference": "100046520",
			"Vitesse à vide": "20 000 tr/min",
			"Puissance publiée": "600 W"
		}
	},
	"editorial": {
		"overview": "Suhner LLE 18-TOP (1/4\" USA) (réf. 100046520). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 20 000 tr/min. Puissance publiée : 600 W.",
		"verifiedFacts": [
			"Vitesse à vide : 20 000 tr/min.",
			"Puissance publiée : 600 W."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "20 000 tr/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p20"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "600 W",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p20"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression numérique de mesure dans le catalogue 10/2024 EN.",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p20"
			]
		},
		{
			"label": "Consommation à vide, hors calcul",
			"value": "1.300 m3/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p20"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-suhner-pneumatic-p20",
			"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf#page=20",
			"sourceLabel": "Pneumatic power tools, catalogue fabricant EN 10/2024, page PDF 20",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 355401bdbabe6cb5a7bfa85064961b89eabb84f7ebad27a03b193f57bc12f7dd. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-suhner-pneumatic-p20"
		],
		"workingPressureBar": [
			"october2-tools-suhner-pneumatic-p20"
		],
		"demandExplanation": [
			"october2-tools-suhner-pneumatic-p20"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
