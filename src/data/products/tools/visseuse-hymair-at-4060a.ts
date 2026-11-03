import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-hymair-at-4060a",
	"slug": "visseuse-hymair-at-4060a",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Hymair AT-4060A",
	"brand": "Hymair",
	"model": "AT-4060A",
	"mpn": "AT-4060A",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-hymair-at-4060a.webp",
		"alt": "Repères techniques : Hymair AT-4060A",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-4060a",
		"label": "Référence AT-4060A",
		"distinguishingAttributes": {
			"reference": "AT-4060A",
			"Vitesse à vide": "9,000 rpm",
			"Masse publiée (kg/lb)": "0.78/1.72"
		}
	},
	"editorial": {
		"overview": "Hymair AT-4060A. La AT-4060A est la visseuse 1/4 pouce à 9 000 tr/min ; la AT-4055 est donnée pour 1 000 tr/min et une autre présentation du couple. La plage 0–480 est en in-lb, elle n’est pas recopiée en Nm. Les 4,5 CFM sont explicitement moyens ; le moteur conserve un état non conclusif.",
		"verifiedFacts": [
			"Entraînement : Hexagonal 1/4 pouce, colonne 6,35 mm.",
			"Plage de couple publiée : 0–480 in-lb.",
			"Vitesse à vide : 9 000 tr/min.",
			"Dimensions : 191 × 74 mm.",
			"Masse : 0,78 kg.",
			"Consommation moyenne publiée : 4,5 CFM."
		],
		"limitations": [
			"Consommation moyenne publiée conservée dans les spécifications ; aucun débit maximal ni volume par action déduit.",
			"Catalogue constructeur identifié ; configuration et disponibilité actuelles à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Entraînement",
			"value": "Hexagonal 1/4 pouce, colonne 6,35 mm",
			"evidenceIds": [
				"visseuse-hymair-at-4060a-reserved-20261103-1"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "0–480 in-lb",
			"evidenceIds": [
				"visseuse-hymair-at-4060a-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "9 000 tr/min",
			"evidenceIds": [
				"visseuse-hymair-at-4060a-reserved-20261103-1"
			]
		},
		{
			"label": "Dimensions",
			"value": "191 × 74 mm",
			"evidenceIds": [
				"visseuse-hymair-at-4060a-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,78 kg",
			"evidenceIds": [
				"visseuse-hymair-at-4060a-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation moyenne publiée",
			"value": "4,5 CFM",
			"evidenceIds": [
				"visseuse-hymair-at-4060a-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-2-p36",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=36",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Professional, page PDF 36",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "visseuse-hymair-at-4060a-reserved-20261103-1",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=36",
			"sourceLabel": "Hymair : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. La AT-4060A est la visseuse 1/4 pouce à 9 000 tr/min ; la AT-4055 est donnée pour 1 000 tr/min et une autre présentation du couple. La plage 0–480 est en in-lb, elle n’est pas recopiée en Nm. Les 4,5 CFM sont explicitement moyens ; le moteur conserve un état non conclusif."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-2-p36"
		],
		"workingPressureBar": [
			"october2-tools-steed-2-p36"
		],
		"demandExplanation": [
			"october2-tools-steed-2-p36"
		],
		"editorial": [
			"visseuse-hymair-at-4060a-reserved-20261103-1"
		],
		"specifications": [
			"visseuse-hymair-at-4060a-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
