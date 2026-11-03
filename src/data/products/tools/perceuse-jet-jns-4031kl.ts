import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-jet-jns-4031kl",
	"slug": "perceuse-jet-jns-4031kl",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "JET JNS-4031KL",
	"brand": "JET",
	"model": "JNS-4031KL",
	"mpn": "JNS-4031KL",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-jet-jns-4031kl.webp",
		"alt": "Repères techniques : JET JNS-4031KL",
		"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jet-jns-4031kl",
		"label": "Référence JNS-4031KL",
		"distinguishingAttributes": {
			"reference": "JNS-4031KL",
			"Masse publiée": "2-1/2 lbs",
			"Ligne technique constructeur": "JNS-4031kl yeS 3/8 3/8-24 1/4 1800 4 1/4 3/8 5.4 78 8 2-1/2"
		}
	},
	"editorial": {
		"overview": "JET JNS-4031KL. La JNS-4031KL est une perceuse réversible à mandrin sans clé 3/8, 1 800 tr/min et 2½ lb. La JNS-4041KL passe à 1/2, 400 tr/min et 3½ lb ; la gâchette variable ne supprime pas cette différence de rapport. Les 4 CFM ne sont pas qualifiés à un régime de mesure.",
		"verifiedFacts": [
			"Masse publiée : 2-1/2 lbs.",
			"Ligne technique constructeur : JNS-4031kl yeS 3/8 3/8-24 1/4 1800 4 1/4 3/8 5.4 78 8 2-1/2.",
			"Mandrin : Sans clé, 3/8 pouce.",
			"Vitesse à vide : 1 800 tr/min.",
			"Broche : 3/8-24.",
			"Sens : Réversible."
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
				"october2b-tools-oct2b-jet-catalog-pdf-p67"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "JNS-4031kl yeS 3/8 3/8-24 1/4 1800 4 1/4 3/8 5.4 78 8 2-1/2",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p67"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de la consommation de la ligne n’est pas établie.",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p67"
			]
		},
		{
			"label": "Mandrin",
			"value": "Sans clé, 3/8 pouce",
			"evidenceIds": [
				"perceuse-jet-jns-4031kl-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1 800 tr/min",
			"evidenceIds": [
				"perceuse-jet-jns-4031kl-reserved-20261103-1"
			]
		},
		{
			"label": "Broche",
			"value": "3/8-24",
			"evidenceIds": [
				"perceuse-jet-jns-4031kl-reserved-20261103-1"
			]
		},
		{
			"label": "Sens",
			"value": "Réversible",
			"evidenceIds": [
				"perceuse-jet-jns-4031kl-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-jet-catalog-pdf-p67",
			"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf#page=67",
			"sourceLabel": "JET, catalogue industriel constructeur archivé, section Air Tools, page PDF 67",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9381736270fc03a7d3233abbb4c97f401cc4f8f453822e2b9eabc85c4e4f6ec6. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "perceuse-jet-jns-4031kl-reserved-20261103-1",
			"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf#page=67",
			"sourceLabel": "JET : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 9381736270fc03a7d3233abbb4c97f401cc4f8f453822e2b9eabc85c4e4f6ec6. La JNS-4031KL est une perceuse réversible à mandrin sans clé 3/8, 1 800 tr/min et 2½ lb. La JNS-4041KL passe à 1/2, 400 tr/min et 3½ lb ; la gâchette variable ne supprime pas cette différence de rapport. Les 4 CFM ne sont pas qualifiés à un régime de mesure."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-jet-catalog-pdf-p67"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-jet-catalog-pdf-p67"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-jet-catalog-pdf-p67"
		],
		"editorial": [
			"perceuse-jet-jns-4031kl-reserved-20261103-1"
		],
		"specifications": [
			"perceuse-jet-jns-4031kl-reserved-20261103-1"
		]
	},
	"notes": [
		"Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul."
	]
};

export default product;
