import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fouloir-npk-b-00a",
	"slug": "fouloir-npk-b-00a",
	"categoryId": "fouloir",
	"category": "fouloir",
	"label": "NPK B-00A",
	"brand": "NPK",
	"model": "B-00A",
	"mpn": "B-00A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La consommation moyenne déclarée ne fournit pas la demande maximale à un point de pression de mesure identifié. Aucun débit en charge n’est reconstitué.",
	"confidence": "B",
	"image": {
		"src": "/images/products/fouloir-npk-b-00a.webp",
		"alt": "Repères techniques : NPK B-00A",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/15-NPK.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "npk-b-00a",
		"label": "Référence B-00A",
		"distinguishingAttributes": {
			"reference": "B-00A",
			"Masse publiée": "4.5 lbs",
			"Consommation documentaire, hors calcul": "7.1 cfm"
		}
	},
	"editorial": {
		"overview": "NPK B-00A. Le B-00A est un fouloir de fonderie pour petits et moyens châssis sur établi, semelle caoutchouc 1 9/16 pouce et 4,5 lb selon cette édition. Le B-0A utilise une semelle 2 pouces, 750 coups/min et 7 lb. Le B-00A(R) du catalogue actuel est un libellé distinct ; ses valeurs ne sont pas fusionnées. Les 7,1 CFM moyens restent documentaires.",
		"verifiedFacts": [
			"Masse publiée : 4.5 lbs.",
			"Consommation documentaire, hors calcul : 7.1 cfm.",
			"Semelle : Caoutchouc, diamètre 1 9/16 pouce.",
			"Course : 2⅜ pouces.",
			"Cadence : 1 600 coups/min."
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
			"value": "4.5 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-15-npk-pdf-p5"
			]
		},
		{
			"label": "Consommation documentaire, hors calcul",
			"value": "7.1 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-15-npk-pdf-p5"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de consommation n’est pas établie par le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-15-npk-pdf-p5"
			]
		},
		{
			"label": "Semelle",
			"value": "Caoutchouc, diamètre 1 9/16 pouce",
			"evidenceIds": [
				"fouloir-npk-b-00a-reserved-20261103-1"
			]
		},
		{
			"label": "Course",
			"value": "2⅜ pouces",
			"evidenceIds": [
				"fouloir-npk-b-00a-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence",
			"value": "1 600 coups/min",
			"evidenceIds": [
				"fouloir-npk-b-00a-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-15-npk-pdf-p5",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/15-NPK.pdf#page=5",
			"sourceLabel": "NPK, catalogue technique constructeur publié par Michigan Pneumatic, importateur exclusif indiqué dans le document, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 8991587b6147dedde29a8ca888682d24a45127a873a1fb3a753e048fd2696462. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "fouloir-npk-b-00a-reserved-20261103-1",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/15-NPK.pdf#page=5",
			"sourceLabel": "NPK : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 8991587b6147dedde29a8ca888682d24a45127a873a1fb3a753e048fd2696462. Le B-00A est un fouloir de fonderie pour petits et moyens châssis sur établi, semelle caoutchouc 1 9/16 pouce et 4,5 lb selon cette édition. Le B-0A utilise une semelle 2 pouces, 750 coups/min et 7 lb. Le B-00A(R) du catalogue actuel est un libellé distinct ; ses valeurs ne sont pas fusionnées. Les 7,1 CFM moyens restent documentaires."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-15-npk-pdf-p5"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-15-npk-pdf-p5"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-15-npk-pdf-p5"
		],
		"editorial": [
			"fouloir-npk-b-00a-reserved-20261103-1"
		],
		"specifications": [
			"fouloir-npk-b-00a-reserved-20261103-1"
		]
	},
	"notes": [
		"La consommation moyenne déclarée ne fournit pas la demande maximale à un point de pression de mesure identifié. Aucun débit en charge n’est reconstitué."
	]
};

export default product;
