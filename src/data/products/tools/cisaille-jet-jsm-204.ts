import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cisaille-jet-jsm-204",
	"slug": "cisaille-jet-jsm-204",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "JET JSM-204",
	"brand": "JET",
	"model": "JSM-204",
	"mpn": "JSM-204",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cisaille-jet-jsm-204.webp",
		"alt": "Repères techniques : JET JSM-204",
		"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jet-jsm-204",
		"label": "Référence JSM-204",
		"distinguishingAttributes": {
			"reference": "JSM-204",
			"Masse publiée": "6 lbs",
			"Ligne technique constructeur": "JSm-204 18 2200 90 4 1/4 3/8 4.2 8-1/4 6"
		}
	},
	"editorial": {
		"overview": "JET JSM-204. Le tableau JSM-204 exprime la capacité en gauge sans identifier la matière dans cette cellule : aucune épaisseur en millimètres n’est calculée. La capacité 18 gauge et le jeu de mâchoires remplacent la ligne brute de catalogue ; débit 4 cfm et pression 90 psi restent documentaires. Capacité métal publiée : 18 gauge, matériau non précisé par cette cellule. Cadence à vide publiée : 2 200 par minute. Longueur totale : 8-1/4 pouces.",
		"verifiedFacts": [
			"Masse publiée : 6 lbs.",
			"Ligne technique constructeur : JSm-204 18 2200 90 4 1/4 3/8 4.2 8-1/4 6.",
			"Capacité métal publiée : 18 gauge, matériau non précisé par cette cellule.",
			"Cadence à vide publiée : 2 200 par minute.",
			"Longueur totale : 8-1/4 pouces.",
			"Masse publiée : 6 lb."
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
			"value": "6 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p75"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "JSm-204 18 2200 90 4 1/4 3/8 4.2 8-1/4 6",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p75"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de la consommation de la ligne n’est pas établie.",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p75"
			]
		},
		{
			"label": "Capacité métal publiée",
			"value": "18 gauge, matériau non précisé par cette cellule",
			"evidenceIds": [
				"cisaille-jet-jsm-204-reserved-20261101-1"
			]
		},
		{
			"label": "Cadence à vide publiée",
			"value": "2 200 par minute",
			"evidenceIds": [
				"cisaille-jet-jsm-204-reserved-20261101-1"
			]
		},
		{
			"label": "Longueur totale",
			"value": "8-1/4 pouces",
			"evidenceIds": [
				"cisaille-jet-jsm-204-reserved-20261101-1"
			]
		},
		{
			"label": "Masse publiée",
			"value": "6 lb",
			"evidenceIds": [
				"cisaille-jet-jsm-204-reserved-20261101-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-jet-catalog-pdf-p75",
			"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf#page=75",
			"sourceLabel": "JET, catalogue industriel constructeur archivé, section Air Tools, page PDF 75",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9381736270fc03a7d3233abbb4c97f401cc4f8f453822e2b9eabc85c4e4f6ec6. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "cisaille-jet-jsm-204-reserved-20261101-1",
			"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf#page=75",
			"sourceLabel": "JET : revue factuelle du 1 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-01",
			"confidence": "B",
			"notes": "Corps complet GET HTTP200 SHA-256 9381736270fc03a7d3233abbb4c97f401cc4f8f453822e2b9eabc85c4e4f6ec6. Passage page=75. Lecture de la référence et des configurations voisines, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-jet-catalog-pdf-p75"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-jet-catalog-pdf-p75"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-jet-catalog-pdf-p75"
		],
		"editorial": [
			"cisaille-jet-jsm-204-reserved-20261101-1"
		],
		"specifications": [
			"cisaille-jet-jsm-204-reserved-20261101-1"
		]
	},
	"notes": [
		"Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul."
	]
};

export default product;
