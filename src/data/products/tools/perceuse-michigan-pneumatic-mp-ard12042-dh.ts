import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-michigan-pneumatic-mp-ard12042-dh",
	"slug": "perceuse-michigan-pneumatic-mp-ard12042-dh",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Michigan Pneumatic MP-ARD12042-DH",
	"brand": "Michigan Pneumatic",
	"model": "MP-ARD12042-DH",
	"mpn": "MP-ARD12042-DH",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-michigan-pneumatic-mp-ard12042-dh.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-ARD12042-DH",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/9-Drills_V2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-ard12042-dh",
		"label": "Référence MP-ARD12042-DH",
		"distinguishingAttributes": {
			"reference": "MP-ARD12042-DH",
			"Masse publiée": "3.88 lbs",
			"Ligne technique constructeur": "MP-ARD12042-DH 1/2\" 400 rpm 3/8\"-24 11-3/16\" 3.88 lbs 1/4\" 3/8\" 15 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-ARD12042-DH. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 3.88 lbs. Ligne technique constructeur : MP-ARD12042-DH 1/2\" 400 rpm 3/8\"-24 11-3/16\" 3.88 lbs 1/4\" 3/8\" 15 cfm.",
		"verifiedFacts": [
			"Masse publiée : 3.88 lbs.",
			"Ligne technique constructeur : MP-ARD12042-DH 1/2\" 400 rpm 3/8\"-24 11-3/16\" 3.88 lbs 1/4\" 3/8\" 15 cfm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Données du catalogue constructeur archivé ; consommation moyenne ou de régime non précisé, sans certification du besoin maximal en charge.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "3.88 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-9-pdf-p3"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-ARD12042-DH 1/2\" 400 rpm 3/8\"-24 11-3/16\" 3.88 lbs 1/4\" 3/8\" 15 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-9-pdf-p3"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-9-pdf-p3"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "15 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-9-pdf-p3"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-9-pdf-p3",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/9-Drills_V2.pdf#page=3",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 9, page PDF 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 551c618f343aa18c70a0d669a0bd9c70065142f614e83cf879859d6835562ad2. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-9-pdf-p3"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-9-pdf-p3"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-9-pdf-p3"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
