import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-hymair-at-2050lbsg",
	"slug": "burineur-hymair-at-2050lbsg",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Hymair AT-2050LBSG",
	"brand": "Hymair",
	"model": "AT-2050LBSG",
	"mpn": "AT-2050LBSG",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-hymair-at-2050lbsg.webp",
		"alt": "Repères techniques : Hymair AT-2050LBSG",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=aGAfKUBkhgoV&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-2050lbsg",
		"label": "Référence AT-2050LBSG",
		"distinguishingAttributes": {
			"reference": "AT-2050LBSG",
			"Masse publiée (kg/lb)": "1.49/3.28",
			"Longueur × hauteur": "200x145 mm"
		}
	},
	"editorial": {
		"overview": "Hymair AT-2050LBSG. Le AT-2050LBSG est le marteau court à changement rapide, course 41 mm et 4 500 coups/min. Le AT-2060LBSG est plus long, course 66 mm et 3 000 coups/min, avec cinq burins au lieu de quatre. La consommation moyenne n’est pas transformée en débit maximal ni en volume par coup.",
		"verifiedFacts": [
			"Type : Marteau à canon court, mandrin rapide.",
			"Emmanchement : 0,401 pouce, colonne métrique 10,185 mm.",
			"Course : 41 mm.",
			"Cadence : 4 500 coups/min.",
			"Burins fournis : 4 à queue ronde.",
			"Consommation moyenne publiée : 5,25 CFM."
		],
		"limitations": [
			"Consommation moyenne publiée conservée dans les spécifications ; aucun débit maximal ni volume par action déduit.",
			"Catalogue constructeur identifié ; configuration et disponibilité actuelles à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Type",
			"value": "Marteau à canon court, mandrin rapide",
			"evidenceIds": [
				"burineur-hymair-at-2050lbsg-reserved-20261103-1"
			]
		},
		{
			"label": "Emmanchement",
			"value": "0,401 pouce, colonne métrique 10,185 mm",
			"evidenceIds": [
				"burineur-hymair-at-2050lbsg-reserved-20261103-1"
			]
		},
		{
			"label": "Course",
			"value": "41 mm",
			"evidenceIds": [
				"burineur-hymair-at-2050lbsg-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence",
			"value": "4 500 coups/min",
			"evidenceIds": [
				"burineur-hymair-at-2050lbsg-reserved-20261103-1"
			]
		},
		{
			"label": "Burins fournis",
			"value": "4 à queue ronde",
			"evidenceIds": [
				"burineur-hymair-at-2050lbsg-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation moyenne publiée",
			"value": "5,25 CFM",
			"evidenceIds": [
				"burineur-hymair-at-2050lbsg-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-3-p5",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=aGAfKUBkhgoV&dp=GvUApKfKKUAU#page=5",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Good Level, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 074602b959f2f30ac405df0c8ab2c02739cb7ec400ee95c071217a43d1f7ab36. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "burineur-hymair-at-2050lbsg-reserved-20261103-1",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=aGAfKUBkhgoV&dp=GvUApKfKKUAU#page=5",
			"sourceLabel": "Hymair : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 074602b959f2f30ac405df0c8ab2c02739cb7ec400ee95c071217a43d1f7ab36. Le AT-2050LBSG est le marteau court à changement rapide, course 41 mm et 4 500 coups/min. Le AT-2060LBSG est plus long, course 66 mm et 3 000 coups/min, avec cinq burins au lieu de quatre. La consommation moyenne n’est pas transformée en débit maximal ni en volume par coup."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-3-p5"
		],
		"workingPressureBar": [
			"october2-tools-steed-3-p5"
		],
		"demandExplanation": [
			"october2-tools-steed-3-p5"
		],
		"editorial": [
			"burineur-hymair-at-2050lbsg-reserved-20261103-1"
		],
		"specifications": [
			"burineur-hymair-at-2050lbsg-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
