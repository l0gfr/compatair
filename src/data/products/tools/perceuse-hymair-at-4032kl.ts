import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-hymair-at-4032kl",
	"slug": "perceuse-hymair-at-4032kl",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Hymair AT-4032KL",
	"brand": "Hymair",
	"model": "AT-4032KL",
	"mpn": "AT-4032KL",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-hymair-at-4032kl.webp",
		"alt": "Repères techniques : Hymair AT-4032KL",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-4032kl",
		"label": "Référence AT-4032KL",
		"distinguishingAttributes": {
			"reference": "AT-4032KL",
			"Vitesse à vide": "2,200 rpm",
			"Masse publiée (kg/lb)": "1.48/3.26"
		}
	},
	"editorial": {
		"overview": "Hymair AT-4032KL. La AT-4032KL possède le mandrin sans clé, pour 185 mm et 1,48 kg. La AT-4032 standard mesure 178 mm et pèse 1,45 kg, à la même vitesse 2 200 tr/min et au même débit moyen. Le suffixe KL décrit l’équipement du mandrin, sans justifier une nouvelle demande d’air maximale.",
		"verifiedFacts": [
			"Mandrin : Sans clé, capacité 3/8 pouce.",
			"Sens : Réversible.",
			"Vitesse à vide : 2 200 tr/min.",
			"Longueur : 185 mm.",
			"Masse : 1,48 kg.",
			"Consommation moyenne publiée : 5,5 CFM."
		],
		"limitations": [
			"Consommation moyenne publiée conservée dans les spécifications ; aucun débit maximal ni volume par action déduit.",
			"Catalogue constructeur identifié ; configuration et disponibilité actuelles à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Mandrin",
			"value": "Sans clé, capacité 3/8 pouce",
			"evidenceIds": [
				"perceuse-hymair-at-4032kl-reserved-20261103-1"
			]
		},
		{
			"label": "Sens",
			"value": "Réversible",
			"evidenceIds": [
				"perceuse-hymair-at-4032kl-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2 200 tr/min",
			"evidenceIds": [
				"perceuse-hymair-at-4032kl-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "185 mm",
			"evidenceIds": [
				"perceuse-hymair-at-4032kl-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,48 kg",
			"evidenceIds": [
				"perceuse-hymair-at-4032kl-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation moyenne publiée",
			"value": "5,5 CFM",
			"evidenceIds": [
				"perceuse-hymair-at-4032kl-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-2-p19",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=19",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Professional, page PDF 19",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "perceuse-hymair-at-4032kl-reserved-20261103-1",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=19",
			"sourceLabel": "Hymair : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. La AT-4032KL possède le mandrin sans clé, pour 185 mm et 1,48 kg. La AT-4032 standard mesure 178 mm et pèse 1,45 kg, à la même vitesse 2 200 tr/min et au même débit moyen. Le suffixe KL décrit l’équipement du mandrin, sans justifier une nouvelle demande d’air maximale."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-2-p19"
		],
		"workingPressureBar": [
			"october2-tools-steed-2-p19"
		],
		"demandExplanation": [
			"october2-tools-steed-2-p19"
		],
		"editorial": [
			"perceuse-hymair-at-4032kl-reserved-20261103-1"
		],
		"specifications": [
			"perceuse-hymair-at-4032kl-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
