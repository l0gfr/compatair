import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-suhner-llc-20-1-4-usa-100035574",
	"slug": "meuleuse-suhner-llc-20-1-4-usa-100035574",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Suhner LLC 20 (1/4\" USA) (réf. 100035574)",
	"brand": "Suhner",
	"model": "LLC 20 (1/4\" USA)",
	"mpn": "100035574",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-suhner-llc-20-1-4-usa-100035574.webp",
		"alt": "Repères techniques : Suhner LLC 20 (1/4\" USA) (réf. 100035574)",
		"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "suhner-llc-20-1-4-usa",
		"label": "Référence 100035574",
		"distinguishingAttributes": {
			"reference": "100035574",
			"Vitesse à vide": "20 000 tr/min",
			"Puissance publiée": "350 W"
		}
	},
	"editorial": {
		"overview": "Suhner LLC 20 (1/4\" USA). La LLC20 USA, article 100035574, est livrée en pince1/4 pouce, distincte de la LLC20 métrique100035573 en6 mm. La LLC35 tourne à35 000 tr/min contre 20 000, malgré350 W communs. Les 0,800 m³/min de cette table sont explicitement à vide ; la régulation de vitesse ne les transforme pas en demande d’usinage.",
		"verifiedFacts": [
			"Vitesse à vide : 20 000 tr/min.",
			"Puissance publiée : 350 W.",
			"Pince de ce code : 1/4 pouce USA.",
			"Pince du code 100035573 : 6 mm.",
			"Consommation à vide : 0,800 m³/min.",
			"Vitesse à vide : 20 000 tr/min."
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
				"october2-tools-suhner-pneumatic-p17"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "350 W",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p17"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression numérique de mesure dans le catalogue 10/2024 EN.",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p17"
			]
		},
		{
			"label": "Consommation à vide, hors calcul",
			"value": "0.800 m3/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p17"
			]
		},
		{
			"label": "Pince de ce code",
			"value": "1/4 pouce USA",
			"evidenceIds": [
				"meuleuse-suhner-llc-20-1-4-usa-100035574-reserved-20261103-1"
			]
		},
		{
			"label": "Pince du code 100035573",
			"value": "6 mm",
			"evidenceIds": [
				"meuleuse-suhner-llc-20-1-4-usa-100035574-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation à vide",
			"value": "0,800 m³/min",
			"evidenceIds": [
				"meuleuse-suhner-llc-20-1-4-usa-100035574-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "20 000 tr/min",
			"evidenceIds": [
				"meuleuse-suhner-llc-20-1-4-usa-100035574-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-suhner-pneumatic-p17",
			"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf#page=17",
			"sourceLabel": "Pneumatic power tools, catalogue fabricant EN 10/2024, page PDF 17",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 355401bdbabe6cb5a7bfa85064961b89eabb84f7ebad27a03b193f57bc12f7dd. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "meuleuse-suhner-llc-20-1-4-usa-100035574-reserved-20261103-1",
			"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf#page=17",
			"sourceLabel": "Suhner : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 355401bdbabe6cb5a7bfa85064961b89eabb84f7ebad27a03b193f57bc12f7dd. La LLC20 USA, article 100035574, est livrée en pince1/4 pouce, distincte de la LLC20 métrique100035573 en6 mm. La LLC35 tourne à35 000 tr/min contre 20 000, malgré350 W communs. Les 0,800 m³/min de cette table sont explicitement à vide ; la régulation de vitesse ne les transforme pas en demande d’usinage."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-suhner-pneumatic-p17"
		],
		"workingPressureBar": [
			"october2-tools-suhner-pneumatic-p17"
		],
		"demandExplanation": [
			"october2-tools-suhner-pneumatic-p17"
		],
		"editorial": [
			"meuleuse-suhner-llc-20-1-4-usa-100035574-reserved-20261103-1"
		],
		"specifications": [
			"meuleuse-suhner-llc-20-1-4-usa-100035574-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
