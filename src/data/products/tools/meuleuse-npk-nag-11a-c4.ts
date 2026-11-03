import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-npk-nag-11a-c4",
	"slug": "meuleuse-npk-nag-11a-c4",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "NPK NAG-11A-C4",
	"brand": "NPK",
	"model": "NAG-11A-C4",
	"mpn": "NAG-11A-C4",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La consommation moyenne déclarée ne fournit pas la demande maximale à un point de pression de mesure identifié. Aucun débit en charge n’est reconstitué.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-npk-nag-11a-c4.webp",
		"alt": "Repères techniques : NPK NAG-11A-C4",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/15-NPK.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "npk-nag-11a-c4",
		"label": "Référence NAG-11A-C4",
		"distinguishingAttributes": {
			"reference": "NAG-11A-C4",
			"Masse publiée": "2.9 lbs",
			"Consommation documentaire, hors calcul": "28 cfm"
		}
	},
	"editorial": {
		"overview": "NPK NAG-11A-C4. La NAG-11A-C4 utilise une pince ER11 de 1/4 pouce ; la NAG-11A-U5 emploie un filetage 5/8-11 et une meule Type27 de 5 pouces. Leurs masses 2,9 et 4,5 lb diffèrent. Ne pas substituer les références actuelles NAG-11A-04/-05. Les 28 CFM moyens ne donnent pas un débit continu en charge.",
		"verifiedFacts": [
			"Masse publiée : 2.9 lbs.",
			"Consommation documentaire, hors calcul : 28 cfm.",
			"Pince : ER11, 1/4 pouce.",
			"Capacités annoncées : Fraise carbure 1 pouce, meule 2 pouces.",
			"Vitesse à vide : 12 000 tr/min."
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
			"value": "2.9 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-15-npk-pdf-p17"
			]
		},
		{
			"label": "Consommation documentaire, hors calcul",
			"value": "28 cfm",
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
		},
		{
			"label": "Pince",
			"value": "ER11, 1/4 pouce",
			"evidenceIds": [
				"meuleuse-npk-nag-11a-c4-reserved-20261103-1"
			]
		},
		{
			"label": "Capacités annoncées",
			"value": "Fraise carbure 1 pouce, meule 2 pouces",
			"evidenceIds": [
				"meuleuse-npk-nag-11a-c4-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"meuleuse-npk-nag-11a-c4-reserved-20261103-1"
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
		},
		{
			"id": "meuleuse-npk-nag-11a-c4-reserved-20261103-1",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/15-NPK.pdf#page=17",
			"sourceLabel": "NPK : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 8991587b6147dedde29a8ca888682d24a45127a873a1fb3a753e048fd2696462. La NAG-11A-C4 utilise une pince ER11 de 1/4 pouce ; la NAG-11A-U5 emploie un filetage 5/8-11 et une meule Type27 de 5 pouces. Leurs masses 2,9 et 4,5 lb diffèrent. Ne pas substituer les références actuelles NAG-11A-04/-05. Les 28 CFM moyens ne donnent pas un débit continu en charge."
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
		],
		"editorial": [
			"meuleuse-npk-nag-11a-c4-reserved-20261103-1"
		],
		"specifications": [
			"meuleuse-npk-nag-11a-c4-reserved-20261103-1"
		]
	},
	"notes": [
		"La consommation moyenne déclarée ne fournit pas la demande maximale à un point de pression de mesure identifié. Aucun débit en charge n’est reconstitué."
	]
};

export default product;
