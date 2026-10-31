import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "lime-alternative-suhner-lfc-11-100035547",
	"slug": "lime-alternative-suhner-lfc-11-100035547",
	"categoryId": "lime-alternative",
	"category": "lime-alternative",
	"label": "Suhner LFC 11 (réf. 100035547)",
	"brand": "Suhner",
	"model": "LFC 11",
	"mpn": "100035547",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/lime-alternative-suhner-lfc-11-100035547.webp",
		"alt": "Repères techniques : Suhner LFC 11 (réf. 100035547)",
		"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "suhner-lfc-11",
		"label": "Référence 100035547",
		"distinguishingAttributes": {
			"reference": "100035547",
			"Désignation de la version": "LFC 11",
			"Configuration technique imprimée": "300 12 000 2 – 11 < 2.5 112 014 01"
		}
	},
	"editorial": {
		"overview": "Suhner LFC 11. LFC 11 : consommation à vide 0,230 m³/min, puissance 300 W, fréquence 12 000 min⁻¹ et course réglable de 2 à 11 mm. Distinguer l’outil 100035547 du coffret LFC 11 SET 100035548. Désignation de la version : LFC 11.",
		"verifiedFacts": [
			"Désignation de la version : LFC 11.",
			"LFC 11 : consommation à vide 0,230 m³/min, puissance 300 W, fréquence 12 000 min⁻¹ et course réglable de 2 à 11 mm. Distinguer l’outil 100035547 du coffret LFC 11 SET 100035548."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Désignation de la version",
			"value": "LFC 11",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p44"
			]
		},
		{
			"label": "Configuration technique imprimée",
			"value": "300 12 000 2 – 11 < 2.5 112 014 01",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p44"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression numérique de mesure dans le catalogue 10/2024 EN.",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p44"
			]
		},
		{
			"label": "Consommation à vide, hors calcul",
			"value": "0.230 m3/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p44"
			]
		},
		{
			"label": "Lecture du tableau constructeur",
			"value": "LFC 11 : consommation à vide 0,230 m³/min, puissance 300 W, fréquence 12 000 min⁻¹ et course réglable de 2 à 11 mm. Distinguer l’outil 100035547 du coffret LFC 11 SET 100035548.",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p44",
				"lime-alternative-suhner-lfc-11-100035547-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-suhner-pneumatic-p44",
			"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf#page=44",
			"sourceLabel": "Pneumatic power tools, catalogue fabricant EN 10/2024, page PDF 44",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 355401bdbabe6cb5a7bfa85064961b89eabb84f7ebad27a03b193f57bc12f7dd. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "lime-alternative-suhner-lfc-11-100035547-reserved-20261031-1",
			"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf#page=44",
			"sourceLabel": "Suhner LFC 11 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 355401bdbabe6cb5a7bfa85064961b89eabb84f7ebad27a03b193f57bc12f7dd. LFC 11 : consommation à vide 0,230 m³/min, puissance 300 W, fréquence 12 000 min⁻¹ et course réglable de 2 à 11 mm. Distinguer l’outil 100035547 du coffret LFC 11 SET 100035548."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-suhner-pneumatic-p44"
		],
		"workingPressureBar": [
			"october2-tools-suhner-pneumatic-p44"
		],
		"demandExplanation": [
			"october2-tools-suhner-pneumatic-p44"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
