import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "marteau-a-river-jet-jns-2060",
	"slug": "marteau-a-river-jet-jns-2060",
	"categoryId": "marteau-a-river",
	"category": "marteau-a-river",
	"label": "JET JNS-2060",
	"brand": "JET",
	"model": "JNS-2060",
	"mpn": "JNS-2060",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/marteau-a-river-jet-jns-2060.webp",
		"alt": "Repères techniques : JET JNS-2060",
		"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jet-jns-2060",
		"label": "Référence JNS-2060",
		"distinguishingAttributes": {
			"reference": "JNS-2060",
			"Masse publiée": "3 lbs",
			"Ligne technique constructeur": "JNS-2060 2-5/8 3/4 3000 .401 parker 5 1/4 3/8 8.4 111 5-1/4 3"
		}
	},
	"editorial": {
		"overview": "JET JNS-2060. Le JNS-2060 est un marteau à river à course moyenne 2⅝ pouces et queue 0,401 Parker, retenue à changement rapide. Le jeu de burins de remplacement présenté ensuite n’est pas ajouté au contenu livré. Les 5 CFM ne deviennent ni un volume par rivet ni une demande de pointe.",
		"verifiedFacts": [
			"Masse publiée : 3 lbs.",
			"Ligne technique constructeur : JNS-2060 2-5/8 3/4 3000 .401 parker 5 1/4 3/8 8.4 111 5-1/4 3.",
			"Queue : 0,401 pouce Parker.",
			"Course : 2⅝ pouces.",
			"Alésage : 3/4 pouce.",
			"Cadence : 3 000 coups/min."
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
			"value": "3 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p73"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "JNS-2060 2-5/8 3/4 3000 .401 parker 5 1/4 3/8 8.4 111 5-1/4 3",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p73"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de la consommation de la ligne n’est pas établie.",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p73"
			]
		},
		{
			"label": "Queue",
			"value": "0,401 pouce Parker",
			"evidenceIds": [
				"marteau-a-river-jet-jns-2060-reserved-20261103-1"
			]
		},
		{
			"label": "Course",
			"value": "2⅝ pouces",
			"evidenceIds": [
				"marteau-a-river-jet-jns-2060-reserved-20261103-1"
			]
		},
		{
			"label": "Alésage",
			"value": "3/4 pouce",
			"evidenceIds": [
				"marteau-a-river-jet-jns-2060-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence",
			"value": "3 000 coups/min",
			"evidenceIds": [
				"marteau-a-river-jet-jns-2060-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-jet-catalog-pdf-p73",
			"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf#page=73",
			"sourceLabel": "JET, catalogue industriel constructeur archivé, section Air Tools, page PDF 73",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9381736270fc03a7d3233abbb4c97f401cc4f8f453822e2b9eabc85c4e4f6ec6. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "marteau-a-river-jet-jns-2060-reserved-20261103-1",
			"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf#page=73",
			"sourceLabel": "JET : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 9381736270fc03a7d3233abbb4c97f401cc4f8f453822e2b9eabc85c4e4f6ec6. Le JNS-2060 est un marteau à river à course moyenne 2⅝ pouces et queue 0,401 Parker, retenue à changement rapide. Le jeu de burins de remplacement présenté ensuite n’est pas ajouté au contenu livré. Les 5 CFM ne deviennent ni un volume par rivet ni une demande de pointe."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-jet-catalog-pdf-p73"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-jet-catalog-pdf-p73"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-jet-catalog-pdf-p73"
		],
		"editorial": [
			"marteau-a-river-jet-jns-2060-reserved-20261103-1"
		],
		"specifications": [
			"marteau-a-river-jet-jns-2060-reserved-20261103-1"
		]
	},
	"notes": [
		"Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul."
	]
};

export default product;
