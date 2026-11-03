import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "marteau-a-river-npk-nbh-400",
	"slug": "marteau-a-river-npk-nbh-400",
	"categoryId": "marteau-a-river",
	"category": "marteau-a-river",
	"label": "NPK NBH-400",
	"brand": "NPK",
	"model": "NBH-400",
	"mpn": "NBH-400",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La consommation moyenne déclarée ne fournit pas la demande maximale à un point de pression de mesure identifié. Aucun débit en charge n’est reconstitué.",
	"confidence": "B",
	"image": {
		"src": "/images/products/marteau-a-river-npk-nbh-400.webp",
		"alt": "Repères techniques : NPK NBH-400",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/15-NPK.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "npk-nbh-400",
		"label": "Référence NBH-400",
		"distinguishingAttributes": {
			"reference": "NBH-400",
			"Masse publiée": "3.1 lbs",
			"Consommation documentaire, hors calcul": "4 cfm"
		}
	},
	"editorial": {
		"overview": "NPK NBH-400. Le NBH-400 reçoit une queue 0,401 pouce et rive jusqu’à 1/4 pouce en duralumin ou 3/16 en acier selon cette table. Le NBH-600A passe à 0,498 pouce et d’autres capacités. Les 1 600 coups/min et les 4 CFM moyens ne fournissent pas un volume par rivet.",
		"verifiedFacts": [
			"Masse publiée : 3.1 lbs.",
			"Consommation documentaire, hors calcul : 4 cfm.",
			"Queue : 0,401 pouce.",
			"Capacité duralumin : 1/4 pouce.",
			"Capacité acier : 3/16 pouce.",
			"Course : 3¾ pouces."
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
			"value": "3.1 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-15-npk-pdf-p3"
			]
		},
		{
			"label": "Consommation documentaire, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-15-npk-pdf-p3"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de consommation n’est pas établie par le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-15-npk-pdf-p3"
			]
		},
		{
			"label": "Queue",
			"value": "0,401 pouce",
			"evidenceIds": [
				"marteau-a-river-npk-nbh-400-reserved-20261103-1"
			]
		},
		{
			"label": "Capacité duralumin",
			"value": "1/4 pouce",
			"evidenceIds": [
				"marteau-a-river-npk-nbh-400-reserved-20261103-1"
			]
		},
		{
			"label": "Capacité acier",
			"value": "3/16 pouce",
			"evidenceIds": [
				"marteau-a-river-npk-nbh-400-reserved-20261103-1"
			]
		},
		{
			"label": "Course",
			"value": "3¾ pouces",
			"evidenceIds": [
				"marteau-a-river-npk-nbh-400-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-15-npk-pdf-p3",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/15-NPK.pdf#page=3",
			"sourceLabel": "NPK, catalogue technique constructeur publié par Michigan Pneumatic, importateur exclusif indiqué dans le document, page PDF 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 8991587b6147dedde29a8ca888682d24a45127a873a1fb3a753e048fd2696462. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "marteau-a-river-npk-nbh-400-reserved-20261103-1",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/15-NPK.pdf#page=3",
			"sourceLabel": "NPK : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 8991587b6147dedde29a8ca888682d24a45127a873a1fb3a753e048fd2696462. Le NBH-400 reçoit une queue 0,401 pouce et rive jusqu’à 1/4 pouce en duralumin ou 3/16 en acier selon cette table. Le NBH-600A passe à 0,498 pouce et d’autres capacités. Les 1 600 coups/min et les 4 CFM moyens ne fournissent pas un volume par rivet."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-15-npk-pdf-p3"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-15-npk-pdf-p3"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-15-npk-pdf-p3"
		],
		"editorial": [
			"marteau-a-river-npk-nbh-400-reserved-20261103-1"
		],
		"specifications": [
			"marteau-a-river-npk-nbh-400-reserved-20261103-1"
		]
	},
	"notes": [
		"La consommation moyenne déclarée ne fournit pas la demande maximale à un point de pression de mesure identifié. Aucun débit en charge n’est reconstitué."
	]
};

export default product;
