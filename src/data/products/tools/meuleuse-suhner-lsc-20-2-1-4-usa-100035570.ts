import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-suhner-lsc-20-2-1-4-usa-100035570",
	"slug": "meuleuse-suhner-lsc-20-2-1-4-usa-100035570",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Suhner LSC 20-2 (1/4\" USA) (réf. 100035570)",
	"brand": "Suhner",
	"model": "LSC 20-2 (1/4\" USA)",
	"mpn": "100035570",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-suhner-lsc-20-2-1-4-usa-100035570.webp",
		"alt": "Repères techniques : Suhner LSC 20-2 (1/4\" USA) (réf. 100035570)",
		"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "suhner-lsc-20-2-1-4-usa",
		"label": "Référence 100035570",
		"distinguishingAttributes": {
			"reference": "100035570",
			"Vitesse à vide": "20 000 tr/min",
			"Puissance publiée": "350 W"
		}
	},
	"editorial": {
		"overview": "Suhner LSC 20-2 (1/4\" USA) (réf. 100035570). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 20 000 tr/min. Puissance publiée : 350 W.",
		"verifiedFacts": [
			"Vitesse à vide : 20 000 tr/min.",
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
			"value": "20 000 tr/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p13"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "350 W",
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
			"value": "0.280 m3/min",
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
