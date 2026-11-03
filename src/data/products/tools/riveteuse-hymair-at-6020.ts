import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-hymair-at-6020",
	"slug": "riveteuse-hymair-at-6020",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "Hymair AT-6020",
	"brand": "Hymair",
	"model": "AT-6020",
	"mpn": "AT-6020",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-hymair-at-6020.webp",
		"alt": "Repères techniques : Hymair AT-6020",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-6020",
		"label": "Référence AT-6020",
		"distinguishingAttributes": {
			"reference": "AT-6020",
			"Masse publiée (kg/lb)": "1.60/3.52",
			"Longueur × hauteur": "295x118 mm"
		}
	},
	"editorial": {
		"overview": "Hymair AT-6020. La AT-6020 accepte les rivets 4,0, 4,8 et 6,4 mm avec course 20 mm ; la AT-6019 accepte 2,4 à 4,8 mm avec une traction publiée inférieure. La colonne 0,03 CFM est une consommation moyenne, pas 0,03 pied cube par rivet : aucun volume par action n’en est déduit. La matière des rivets n’est pas ventilée dans cette table.",
		"verifiedFacts": [
			"Type : Riveteuse hydropneumatique pour rivets aveugles.",
			"Capacités : 4,0 / 4,8 / 6,4 mm.",
			"Course : 20 mm.",
			"Traction, colonne constructeur : 1 600 kg.",
			"Consommation moyenne publiée : 0,03 CFM.",
			"Pression de service publiée : 3–7 bar."
		],
		"limitations": [
			"Consommation moyenne publiée conservée dans les spécifications ; aucun débit maximal ni volume par action déduit.",
			"Catalogue constructeur identifié ; configuration et disponibilité actuelles à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Type",
			"value": "Riveteuse hydropneumatique pour rivets aveugles",
			"evidenceIds": [
				"riveteuse-hymair-at-6020-reserved-20261103-1"
			]
		},
		{
			"label": "Capacités",
			"value": "4,0 / 4,8 / 6,4 mm",
			"evidenceIds": [
				"riveteuse-hymair-at-6020-reserved-20261103-1"
			]
		},
		{
			"label": "Course",
			"value": "20 mm",
			"evidenceIds": [
				"riveteuse-hymair-at-6020-reserved-20261103-1"
			]
		},
		{
			"label": "Traction, colonne constructeur",
			"value": "1 600 kg",
			"evidenceIds": [
				"riveteuse-hymair-at-6020-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation moyenne publiée",
			"value": "0,03 CFM",
			"evidenceIds": [
				"riveteuse-hymair-at-6020-reserved-20261103-1"
			]
		},
		{
			"label": "Pression de service publiée",
			"value": "3–7 bar",
			"evidenceIds": [
				"riveteuse-hymair-at-6020-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-2-p35",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=35",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Professional, page PDF 35",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "riveteuse-hymair-at-6020-reserved-20261103-1",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=35",
			"sourceLabel": "Hymair : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. La AT-6020 accepte les rivets 4,0, 4,8 et 6,4 mm avec course 20 mm ; la AT-6019 accepte 2,4 à 4,8 mm avec une traction publiée inférieure. La colonne 0,03 CFM est une consommation moyenne, pas 0,03 pied cube par rivet : aucun volume par action n’en est déduit. La matière des rivets n’est pas ventilée dans cette table."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-2-p35"
		],
		"workingPressureBar": [
			"october2-tools-steed-2-p35"
		],
		"demandExplanation": [
			"october2-tools-steed-2-p35"
		],
		"editorial": [
			"riveteuse-hymair-at-6020-reserved-20261103-1"
		],
		"specifications": [
			"riveteuse-hymair-at-6020-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
