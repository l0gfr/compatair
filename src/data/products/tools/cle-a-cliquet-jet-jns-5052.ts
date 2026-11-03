import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-jet-jns-5052",
	"slug": "cle-a-cliquet-jet-jns-5052",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "JET JNS-5052",
	"brand": "JET",
	"model": "JNS-5052",
	"mpn": "JNS-5052",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-jet-jns-5052.webp",
		"alt": "Repères techniques : JET JNS-5052",
		"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jet-jns-5052",
		"label": "Référence JNS-5052",
		"distinguishingAttributes": {
			"reference": "JNS-5052",
			"Masse publiée": "2-1/2 lbs",
			"Ligne technique constructeur": "JNS-5052 3/8 3/8 ball 50 160 4 1/4 3/8 7.2 108 11-2/3 2-1/2"
		}
	},
	"editorial": {
		"overview": "JET JNS-5052. La JNS-5052 mesure 11⅔ pouces et tourne à 160 tr/min. La JSM-30 est donnée pour 10 pouces et 150 tr/min, malgré un maximum commun de 50 ft-lb. Le fabricant vise des travaux légers intermittents ; les 4 CFM ne sont pas un débit continu qualifié.",
		"verifiedFacts": [
			"Masse publiée : 2-1/2 lbs.",
			"Ligne technique constructeur : JNS-5052 3/8 3/8 ball 50 160 4 1/4 3/8 7.2 108 11-2/3 2-1/2.",
			"Carré : 3/8 pouce, retenue à bille.",
			"Vitesse à vide : 160 tr/min.",
			"Couple maximal : 50 ft-lb.",
			"Usage annoncé : Applications légères et intermittentes."
		],
		"limitations": [
			"Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul.",
			"Catalogue industriel JET archivé. Référence physique explicitement listée dans une ligne technique ; aucun kit, jeu de burins, adaptateur ou accessoire n’est ajouté.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "2-1/2 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p61"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "JNS-5052 3/8 3/8 ball 50 160 4 1/4 3/8 7.2 108 11-2/3 2-1/2",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p61"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de la consommation de la ligne n’est pas établie.",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p61"
			]
		},
		{
			"label": "Carré",
			"value": "3/8 pouce, retenue à bille",
			"evidenceIds": [
				"cle-a-cliquet-jet-jns-5052-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "160 tr/min",
			"evidenceIds": [
				"cle-a-cliquet-jet-jns-5052-reserved-20261103-1"
			]
		},
		{
			"label": "Couple maximal",
			"value": "50 ft-lb",
			"evidenceIds": [
				"cle-a-cliquet-jet-jns-5052-reserved-20261103-1"
			]
		},
		{
			"label": "Usage annoncé",
			"value": "Applications légères et intermittentes",
			"evidenceIds": [
				"cle-a-cliquet-jet-jns-5052-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-jet-catalog-pdf-p61",
			"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf#page=61",
			"sourceLabel": "JET, catalogue industriel constructeur archivé, section Air Tools, page PDF 61",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9381736270fc03a7d3233abbb4c97f401cc4f8f453822e2b9eabc85c4e4f6ec6. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "cle-a-cliquet-jet-jns-5052-reserved-20261103-1",
			"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf#page=61",
			"sourceLabel": "JET : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 9381736270fc03a7d3233abbb4c97f401cc4f8f453822e2b9eabc85c4e4f6ec6. La JNS-5052 mesure 11⅔ pouces et tourne à 160 tr/min. La JSM-30 est donnée pour 10 pouces et 150 tr/min, malgré un maximum commun de 50 ft-lb. Le fabricant vise des travaux légers intermittents ; les 4 CFM ne sont pas un débit continu qualifié."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-jet-catalog-pdf-p61"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-jet-catalog-pdf-p61"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-jet-catalog-pdf-p61"
		],
		"editorial": [
			"cle-a-cliquet-jet-jns-5052-reserved-20261103-1"
		],
		"specifications": [
			"cle-a-cliquet-jet-jns-5052-reserved-20261103-1"
		]
	},
	"notes": [
		"Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul."
	]
};

export default product;
