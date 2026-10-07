import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-npk-nge-050lw",
	"slug": "meuleuse-npk-nge-050lw",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "NPK NGE-050LW",
	"brand": "NPK",
	"model": "NGE-050LW",
	"mpn": "NGE-050LW",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La consommation moyenne déclarée ne fournit pas la demande maximale à un point de pression de mesure identifié. Aucun débit en charge n’est reconstitué.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-npk-nge-050lw.webp",
		"alt": "Repères techniques : NPK NGE-050LW",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/15-NPK.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "npk-nge-050lw",
		"label": "Référence NGE-050LW",
		"distinguishingAttributes": {
			"reference": "NGE-050LW",
			"Masse publiée": "1.55 lbs",
			"Consommation documentaire, hors calcul": "17 cfm"
		}
	},
	"editorial": {
		"overview": "NPK NGE-050LW. La consommation moyenne déclarée ne fournit pas la demande maximale à un point de pression de mesure identifié. Aucun débit en charge n’est reconstitué. Masse publiée : 1.55 lbs. Consommation documentaire, hors calcul : 17 cfm.",
		"verifiedFacts": [
			"Masse publiée : 1.55 lbs.",
			"Consommation documentaire, hors calcul : 17 cfm."
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
			"value": "1.55 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-15-npk-pdf-p17"
			]
		},
		{
			"label": "Consommation documentaire, hors calcul",
			"value": "17 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-15-npk-pdf-p17"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de consommation n’est pas établie par le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-15-npk-pdf-p17"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-15-npk-pdf-p17",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/15-NPK.pdf#page=17",
			"sourceLabel": "NPK, catalogue technique constructeur publié par Michigan Pneumatic, importateur exclusif indiqué dans le document, page PDF 17",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 8991587b6147dedde29a8ca888682d24a45127a873a1fb3a753e048fd2696462. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-15-npk-pdf-p17"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-15-npk-pdf-p17"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-15-npk-pdf-p17"
		]
	},
	"notes": [
		"La consommation moyenne déclarée ne fournit pas la demande maximale à un point de pression de mesure identifié. Aucun débit en charge n’est reconstitué."
	]
};

export default product;
