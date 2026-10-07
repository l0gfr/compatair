import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-suhner-leb-20-100035615",
	"slug": "meuleuse-suhner-leb-20-100035615",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Suhner LEB 20 (réf. 100035615)",
	"brand": "Suhner",
	"model": "LEB 20",
	"mpn": "100035615",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-suhner-leb-20-100035615.webp",
		"alt": "Repères techniques : Suhner LEB 20 (réf. 100035615)",
		"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "suhner-leb-20",
		"label": "Référence 100035615",
		"distinguishingAttributes": {
			"reference": "100035615",
			"Vitesse à vide": "24 000 tr/min",
			"Puissance publiée": "270 W"
		}
	},
	"editorial": {
		"overview": "Suhner LEB 20 (réf. 100035615). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 24 000 tr/min. Puissance publiée : 270 W.",
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
				"october2-tools-suhner-pneumatic-p47"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "270 W",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p47"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression numérique de mesure dans le catalogue 10/2024 EN.",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p47"
			]
		},
		{
			"label": "Consommation à vide, hors calcul",
			"value": "0.660 m3/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p47"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-suhner-pneumatic-p47",
			"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf#page=47",
			"sourceLabel": "Pneumatic power tools, catalogue fabricant EN 10/2024, page PDF 47",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 355401bdbabe6cb5a7bfa85064961b89eabb84f7ebad27a03b193f57bc12f7dd. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-suhner-pneumatic-p47"
		],
		"workingPressureBar": [
			"october2-tools-suhner-pneumatic-p47"
		],
		"demandExplanation": [
			"october2-tools-suhner-pneumatic-p47"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
