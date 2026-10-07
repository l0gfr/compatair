import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-suhner-lsb-44-e-100045161",
	"slug": "meuleuse-suhner-lsb-44-e-100045161",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Suhner LSB 44-E (réf. 100045161)",
	"brand": "Suhner",
	"model": "LSB 44-E",
	"mpn": "100045161",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-suhner-lsb-44-e-100045161.webp",
		"alt": "Repères techniques : Suhner LSB 44-E (réf. 100045161)",
		"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "suhner-lsb-44-e",
		"label": "Référence 100045161",
		"distinguishingAttributes": {
			"reference": "100045161",
			"Vitesse à vide": "44 000 tr/min",
			"Puissance publiée": "250 W"
		}
	},
	"editorial": {
		"overview": "Suhner LSB 44-E (réf. 100045161). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 44 000 tr/min. Puissance publiée : 250 W.",
		"verifiedFacts": [
			"Vitesse à vide : 44 000 tr/min.",
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
			"value": "44 000 tr/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p11"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "250 W",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p11"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression numérique de mesure dans le catalogue 10/2024 EN.",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p11"
			]
		},
		{
			"label": "Consommation à vide, hors calcul",
			"value": "0.600 m3/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p11"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-suhner-pneumatic-p11",
			"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf#page=11",
			"sourceLabel": "Pneumatic power tools, catalogue fabricant EN 10/2024, page PDF 11",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 355401bdbabe6cb5a7bfa85064961b89eabb84f7ebad27a03b193f57bc12f7dd. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-suhner-pneumatic-p11"
		],
		"workingPressureBar": [
			"october2-tools-suhner-pneumatic-p11"
		],
		"demandExplanation": [
			"october2-tools-suhner-pneumatic-p11"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
