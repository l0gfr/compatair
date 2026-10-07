import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-npk-nhg-65lklwa-20",
	"slug": "meuleuse-npk-nhg-65lklwa-20",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "NPK NHG-65LKLWA-20",
	"brand": "NPK",
	"model": "NHG-65LKLWA-20",
	"mpn": "NHG-65LKLWA-20",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La consommation moyenne déclarée ne fournit pas la demande maximale à un point de pression de mesure identifié. Aucun débit en charge n’est reconstitué.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-npk-nhg-65lklwa-20.webp",
		"alt": "Repères techniques : NPK NHG-65LKLWA-20",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/15-NPK.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "npk-nhg-65lklwa-20",
		"label": "Référence NHG-65LKLWA-20",
		"distinguishingAttributes": {
			"reference": "NHG-65LKLWA-20",
			"Masse publiée": "3.5 lbs",
			"Consommation documentaire, hors calcul": "19.4 cfm"
		}
	},
	"editorial": {
		"overview": "NPK NHG-65LKLWA-20. La consommation moyenne déclarée ne fournit pas la demande maximale à un point de pression de mesure identifié. Aucun débit en charge n’est reconstitué. Masse publiée : 3.5 lbs. Consommation documentaire, hors calcul : 19.4 cfm.",
		"verifiedFacts": [
			"Masse publiée : 3.5 lbs.",
			"Consommation documentaire, hors calcul : 19.4 cfm."
		],
		"limitations": [
			"La consommation moyenne déclarée ne fournit pas la demande maximale à un point de pression de mesure identifié. Aucun débit en charge n’est reconstitué.",
			"Document de caractéristiques NPK publié par l’importateur exclusif Michigan Pneumatic ; édition archivée, disponibilité à vérifier.",
			"Palans, vibrateurs, aspirateurs, arbres, accessoires, moteurs seuls et codes de configuration sans modèle imprimé sont exclus.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "3.5 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-15-npk-pdf-p15"
			]
		},
		{
			"label": "Consommation documentaire, hors calcul",
			"value": "19.4 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-15-npk-pdf-p15"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de consommation n’est pas établie par le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-15-npk-pdf-p15"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-15-npk-pdf-p15",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/15-NPK.pdf#page=15",
			"sourceLabel": "NPK, catalogue technique constructeur publié par Michigan Pneumatic, importateur exclusif indiqué dans le document, page PDF 15",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 8991587b6147dedde29a8ca888682d24a45127a873a1fb3a753e048fd2696462. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-15-npk-pdf-p15"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-15-npk-pdf-p15"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-15-npk-pdf-p15"
		]
	},
	"notes": [
		"La consommation moyenne déclarée ne fournit pas la demande maximale à un point de pression de mesure identifié. Aucun débit en charge n’est reconstitué."
	]
};

export default product;
