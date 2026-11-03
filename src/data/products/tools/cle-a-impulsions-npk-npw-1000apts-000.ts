import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-impulsions-npk-npw-1000apts-000",
	"slug": "cle-a-impulsions-npk-npw-1000apts-000",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "NPK NPW-1000APTS-000",
	"brand": "NPK",
	"model": "NPW-1000APTS-000",
	"mpn": "NPW-1000APTS-000",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La consommation moyenne déclarée ne fournit pas la demande maximale à un point de pression de mesure identifié. Aucun débit en charge n’est reconstitué.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-impulsions-npk-npw-1000apts-000.webp",
		"alt": "Repères techniques : NPK NPW-1000APTS-000",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/15-NPK.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "npk-npw-1000apts-000",
		"label": "Référence NPW-1000APTS-000",
		"distinguishingAttributes": {
			"reference": "NPW-1000APTS-000",
			"Masse publiée": "4.2 lbs",
			"Consommation documentaire, hors calcul": "19.4 cfm"
		}
	},
	"editorial": {
		"overview": "NPK NPW-1000APTS-000. La NPW-1000APTS-000 annonce 52–81 ft-lb et 5 300 tr/min, contre 66–101 ft-lb et 4 200 tr/min NPW-1200APTS-000. Les 19,4 CFM sont moyens, pas un débit maximal déduit de la fréquence d’impulsions. Le code complet garde sa configuration distincte.",
		"verifiedFacts": [
			"Masse publiée : 4.2 lbs.",
			"Consommation documentaire, hors calcul : 19.4 cfm.",
			"Carré : 1/2 pouce, retenue par goupille.",
			"Plage de couple : 52–81 ft-lb.",
			"Vitesse à vide : 5 300 tr/min."
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
			"value": "4.2 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-15-npk-pdf-p9"
			]
		},
		{
			"label": "Consommation documentaire, hors calcul",
			"value": "19.4 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-15-npk-pdf-p9"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de consommation n’est pas établie par le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-15-npk-pdf-p9"
			]
		},
		{
			"label": "Carré",
			"value": "1/2 pouce, retenue par goupille",
			"evidenceIds": [
				"cle-a-impulsions-npk-npw-1000apts-000-reserved-20261103-1"
			]
		},
		{
			"label": "Plage de couple",
			"value": "52–81 ft-lb",
			"evidenceIds": [
				"cle-a-impulsions-npk-npw-1000apts-000-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "5 300 tr/min",
			"evidenceIds": [
				"cle-a-impulsions-npk-npw-1000apts-000-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-15-npk-pdf-p9",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/15-NPK.pdf#page=9",
			"sourceLabel": "NPK, catalogue technique constructeur publié par Michigan Pneumatic, importateur exclusif indiqué dans le document, page PDF 9",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 8991587b6147dedde29a8ca888682d24a45127a873a1fb3a753e048fd2696462. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "cle-a-impulsions-npk-npw-1000apts-000-reserved-20261103-1",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/15-NPK.pdf#page=9",
			"sourceLabel": "NPK : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 8991587b6147dedde29a8ca888682d24a45127a873a1fb3a753e048fd2696462. La NPW-1000APTS-000 annonce 52–81 ft-lb et 5 300 tr/min, contre 66–101 ft-lb et 4 200 tr/min NPW-1200APTS-000. Les 19,4 CFM sont moyens, pas un débit maximal déduit de la fréquence d’impulsions. Le code complet garde sa configuration distincte."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-15-npk-pdf-p9"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-15-npk-pdf-p9"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-15-npk-pdf-p9"
		],
		"editorial": [
			"cle-a-impulsions-npk-npw-1000apts-000-reserved-20261103-1"
		],
		"specifications": [
			"cle-a-impulsions-npk-npw-1000apts-000-reserved-20261103-1"
		]
	},
	"notes": [
		"La consommation moyenne déclarée ne fournit pas la demande maximale à un point de pression de mesure identifié. Aucun débit en charge n’est reconstitué."
	]
};

export default product;
