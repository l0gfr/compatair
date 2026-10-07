import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "graveur-suhner-lgs-30-100045553",
	"slug": "graveur-suhner-lgs-30-100045553",
	"categoryId": "graveur",
	"category": "graveur",
	"label": "Suhner LGS 30 (réf. 100045553)",
	"brand": "Suhner",
	"model": "LGS 30",
	"mpn": "100045553",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/graveur-suhner-lgs-30-100045553.webp",
		"alt": "Repères techniques : Suhner LGS 30 (réf. 100045553)",
		"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "suhner-lgs-30",
		"label": "Référence 100045553",
		"distinguishingAttributes": {
			"reference": "100045553",
			"Désignation de la version": "LGS 30",
			"Configuration technique imprimée": "4 30 000 057 950 01"
		}
	},
	"editorial": {
		"overview": "Suhner LGS 30 (réf. 100045553). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Désignation de la version : LGS 30. Configuration technique imprimée : 4 30 000 057 950 01.",
		"verifiedFacts": [
			"Désignation de la version : LGS 30.",
			"Configuration technique imprimée : 4 30 000 057 950 01."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Désignation de la version",
			"value": "LGS 30",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p43"
			]
		},
		{
			"label": "Configuration technique imprimée",
			"value": "4 30 000 057 950 01",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p43"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression numérique de mesure dans le catalogue 10/2024 EN.",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p43"
			]
		},
		{
			"label": "Consommation à vide, hors calcul",
			"value": "0.030 m3/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p43"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-suhner-pneumatic-p43",
			"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf#page=43",
			"sourceLabel": "Pneumatic power tools, catalogue fabricant EN 10/2024, page PDF 43",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 355401bdbabe6cb5a7bfa85064961b89eabb84f7ebad27a03b193f57bc12f7dd. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-suhner-pneumatic-p43"
		],
		"workingPressureBar": [
			"october2-tools-suhner-pneumatic-p43"
		],
		"demandExplanation": [
			"october2-tools-suhner-pneumatic-p43"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
