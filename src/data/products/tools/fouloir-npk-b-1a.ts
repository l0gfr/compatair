import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fouloir-npk-b-1a",
	"slug": "fouloir-npk-b-1a",
	"categoryId": "fouloir",
	"category": "fouloir",
	"label": "NPK B-1A",
	"brand": "NPK",
	"model": "B-1A",
	"mpn": "B-1A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La consommation moyenne déclarée ne fournit pas la demande maximale à un point de pression de mesure identifié. Aucun débit en charge n’est reconstitué.",
	"confidence": "B",
	"image": {
		"src": "/images/products/fouloir-npk-b-1a-technical-20261116-reviews.svg",
		"alt": "Repères techniques : NPK B-1A",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/15-NPK.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "npk-b-1a",
		"label": "Référence B-1A",
		"distinguishingAttributes": {
			"reference": "B-1A",
			"Masse publiée": "12.5 lbs",
			"Consommation documentaire, hors calcul": "14.1 cfm"
		}
	},
	"editorial": {
		"overview": "NPK B-1A : fouloir de sable pour compactage lourd et travaux de four, semelle caoutchouc de 2 1/2 pouces sur cône ML. Sa course de 4 1/2 pouces et ses 850 coups/min diffèrent du B-0A, plus court, et du F-2 à longue portée. Les semelles optionnelles ne remplacent pas la semelle standard dans la fiche.",
		"verifiedFacts": [
			"Masse publiée : 12.5 lbs.",
			"Consommation documentaire, hors calcul : 14.1 cfm.",
			"Semelle / cône : Caoutchouc 2 1/2 pouces / ML.",
			"Course / cadence : 4 1/2 pouces / 850 coups/min.",
			"Longueur / masse : 19 1/8 pouces / 12,5 lb.",
			"Consommation moyenne explicite : 14,1 CFM."
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
			"value": "12.5 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-15-npk-pdf-p5"
			]
		},
		{
			"label": "Consommation documentaire, hors calcul",
			"value": "14.1 cfm",
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
			"label": "Semelle / cône",
			"value": "Caoutchouc 2 1/2 pouces / ML",
			"evidenceIds": [
				"review:2026-11-16-reviews:fouloir-npk-b-1a:0"
			]
		},
		{
			"label": "Course / cadence",
			"value": "4 1/2 pouces / 850 coups/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:fouloir-npk-b-1a:0"
			]
		},
		{
			"label": "Longueur / masse",
			"value": "19 1/8 pouces / 12,5 lb",
			"evidenceIds": [
				"review:2026-11-16-reviews:fouloir-npk-b-1a:0"
			]
		},
		{
			"label": "Consommation moyenne explicite",
			"value": "14,1 CFM",
			"evidenceIds": [
				"review:2026-11-16-reviews:fouloir-npk-b-1a:0"
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
			"id": "review:2026-11-16-reviews:fouloir-npk-b-1a:0",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/15-NPK.pdf",
			"sourceLabel": "NPK, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "NPK B-1A : fouloir de sable pour compactage lourd et travaux de four, semelle caoutchouc de 2 1/2 pouces sur cône ML. Sa course de 4 1/2 pouces et ses 850 coups/min diffèrent du B-0A, plus court, et du F-2 à longue portée. Les semelles optionnelles ne remplacent pas la semelle standard dans la fiche. GET complet SHA-256 8991587b6147dedde29a8ca888682d24a45127a873a1fb3a753e048fd2696462. Pages PDF lues : 5."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-15-npk-pdf-p5"
		],
		"workingPressureBar": [
			"review:2026-11-16-reviews:fouloir-npk-b-1a:0"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-15-npk-pdf-p5"
		]
	},
	"notes": [
		"La consommation moyenne déclarée ne fournit pas la demande maximale à un point de pression de mesure identifié. Aucun débit en charge n’est reconstitué."
	]
};

export default product;
