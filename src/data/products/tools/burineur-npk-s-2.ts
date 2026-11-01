import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-npk-s-2",
	"slug": "burineur-npk-s-2",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "NPK S-2",
	"brand": "NPK",
	"model": "S-2",
	"mpn": "S-2",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La consommation moyenne déclarée ne fournit pas la demande maximale à un point de pression de mesure identifié. Aucun débit en charge n’est reconstitué.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-npk-s-2.webp",
		"alt": "Repères techniques : NPK S-2",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/15-NPK.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "npk-s-2",
		"label": "Référence S-2",
		"distinguishingAttributes": {
			"reference": "S-2",
			"Masse publiée": "4.6 lbs",
			"Consommation documentaire, hors calcul": "14.1 cfm"
		}
	},
	"editorial": {
		"overview": "NPK S-2. S-2L partage course et cadence, mais mesure 19-1/2 pouces pour 5,9 lb. Le S-2 est la version plus légère de cette table ; la moyenne 14,1 cfm partagée reste hors dimensionnement faute de point qualifié. Course : 9/16 pouce. Diamètre de piston : 1-3/16 pouce. Cadence : 3 500 coups/min.",
		"verifiedFacts": [
			"Masse publiée : 4.6 lbs.",
			"Consommation documentaire, hors calcul : 14.1 cfm.",
			"Course : 9/16 pouce.",
			"Diamètre de piston : 1-3/16 pouce.",
			"Cadence : 3 500 coups/min.",
			"Longueur : 19-5/16 pouces.",
			"Masse publiée : 4,6 lb."
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
			"value": "4.6 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-15-npk-pdf-p4"
			]
		},
		{
			"label": "Consommation documentaire, hors calcul",
			"value": "14.1 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-15-npk-pdf-p4"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de consommation n’est pas établie par le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-15-npk-pdf-p4"
			]
		},
		{
			"label": "Course",
			"value": "9/16 pouce",
			"evidenceIds": [
				"burineur-npk-s-2-reserved-20261101-1"
			]
		},
		{
			"label": "Diamètre de piston",
			"value": "1-3/16 pouce",
			"evidenceIds": [
				"burineur-npk-s-2-reserved-20261101-1"
			]
		},
		{
			"label": "Cadence",
			"value": "3 500 coups/min",
			"evidenceIds": [
				"burineur-npk-s-2-reserved-20261101-1"
			]
		},
		{
			"label": "Longueur",
			"value": "19-5/16 pouces",
			"evidenceIds": [
				"burineur-npk-s-2-reserved-20261101-1"
			]
		},
		{
			"label": "Masse publiée",
			"value": "4,6 lb",
			"evidenceIds": [
				"burineur-npk-s-2-reserved-20261101-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-15-npk-pdf-p4",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/15-NPK.pdf#page=4",
			"sourceLabel": "NPK, catalogue technique constructeur publié par Michigan Pneumatic, importateur exclusif indiqué dans le document, page PDF 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 8991587b6147dedde29a8ca888682d24a45127a873a1fb3a753e048fd2696462. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "burineur-npk-s-2-reserved-20261101-1",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/15-NPK.pdf#page=4",
			"sourceLabel": "NPK : revue factuelle du 1 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-01",
			"confidence": "B",
			"notes": "Corps complet GET HTTP200 SHA-256 8991587b6147dedde29a8ca888682d24a45127a873a1fb3a753e048fd2696462. Passage page=4. Lecture de la référence et des configurations voisines, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-15-npk-pdf-p4"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-15-npk-pdf-p4"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-15-npk-pdf-p4"
		],
		"editorial": [
			"burineur-npk-s-2-reserved-20261101-1"
		],
		"specifications": [
			"burineur-npk-s-2-reserved-20261101-1"
		]
	},
	"notes": [
		"La consommation moyenne déclarée ne fournit pas la demande maximale à un point de pression de mesure identifié. Aucun débit en charge n’est reconstitué."
	]
};

export default product;
