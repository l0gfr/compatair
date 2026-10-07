import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-suhner-lsc-20-100049391",
	"slug": "meuleuse-suhner-lsc-20-100049391",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Suhner LSC 20 (réf. 100049391)",
	"brand": "Suhner",
	"model": "LSC 20",
	"mpn": "100049391",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-suhner-lsc-20-100049391.webp",
		"alt": "Repères techniques : Suhner LSC 20 (réf. 100049391)",
		"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "suhner-lsc-20",
		"label": "Référence 100049391",
		"distinguishingAttributes": {
			"reference": "100049391",
			"Vitesse à vide": "25 000 tr/min",
			"Puissance publiée": "350 W"
		}
	},
	"editorial": {
		"overview": "Suhner LSC 20 (réf. 100049391). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 25 000 tr/min. Puissance publiée : 350 W.",
		"verifiedFacts": [
			"Vitesse à vide : 25 000 tr/min.",
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
			"value": "25 000 tr/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p9"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "350 W",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p9"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression numérique de mesure dans le catalogue 10/2024 EN.",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p9"
			]
		},
		{
			"label": "Consommation à vide, hors calcul",
			"value": "0.730 m3/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p9"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-suhner-pneumatic-p9",
			"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf#page=9",
			"sourceLabel": "Pneumatic power tools, catalogue fabricant EN 10/2024, page PDF 9",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 355401bdbabe6cb5a7bfa85064961b89eabb84f7ebad27a03b193f57bc12f7dd. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-suhner-pneumatic-p9"
		],
		"workingPressureBar": [
			"october2-tools-suhner-pneumatic-p9"
		],
		"demandExplanation": [
			"october2-tools-suhner-pneumatic-p9"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
