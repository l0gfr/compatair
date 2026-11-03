import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-hymair-at-3170",
	"slug": "meuleuse-hymair-at-3170",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Hymair AT-3170",
	"brand": "Hymair",
	"model": "AT-3170",
	"mpn": "AT-3170",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-hymair-at-3170.webp",
		"alt": "Repères techniques : Hymair AT-3170",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=aGAfKUBkhgoV&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-3170",
		"label": "Référence AT-3170",
		"distinguishingAttributes": {
			"reference": "AT-3170",
			"Vitesse à vide": "54,000 rpm",
			"Masse publiée (kg/lb)": "0.20/0.44"
		}
	},
	"editorial": {
		"overview": "Hymair AT-3170. La AT-3170 est la micromeuleuse droite de 134 mm et 0,20 kg, à 54 000 tr/min. La table associe les libellés de pince 1/8 pouce et 3 mm ; confirmer la pince physique avant de commander une fraise, ces dimensions ne sont pas strictement identiques. Le coffret AT-010K renvoie à cette machine sans constituer une nouvelle performance pneumatique.",
		"verifiedFacts": [
			"Pince, libellés du catalogue : 1/8 pouce / 3 mm.",
			"Vitesse à vide : 54 000 tr/min.",
			"Dimensions : 134 × 16 mm.",
			"Masse : 0,20 kg.",
			"Consommation moyenne publiée : 2,25 CFM."
		],
		"limitations": [
			"Consommation moyenne publiée conservée dans les spécifications ; aucun débit maximal ni volume par action déduit.",
			"Catalogue constructeur identifié ; configuration et disponibilité actuelles à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Pince, libellés du catalogue",
			"value": "1/8 pouce / 3 mm",
			"evidenceIds": [
				"meuleuse-hymair-at-3170-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "54 000 tr/min",
			"evidenceIds": [
				"meuleuse-hymair-at-3170-reserved-20261103-1"
			]
		},
		{
			"label": "Dimensions",
			"value": "134 × 16 mm",
			"evidenceIds": [
				"meuleuse-hymair-at-3170-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,20 kg",
			"evidenceIds": [
				"meuleuse-hymair-at-3170-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation moyenne publiée",
			"value": "2,25 CFM",
			"evidenceIds": [
				"meuleuse-hymair-at-3170-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-3-p17",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=aGAfKUBkhgoV&dp=GvUApKfKKUAU#page=17",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Good Level, page PDF 17",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 074602b959f2f30ac405df0c8ab2c02739cb7ec400ee95c071217a43d1f7ab36. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "meuleuse-hymair-at-3170-reserved-20261103-1",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=aGAfKUBkhgoV&dp=GvUApKfKKUAU#page=17",
			"sourceLabel": "Hymair : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 074602b959f2f30ac405df0c8ab2c02739cb7ec400ee95c071217a43d1f7ab36. La AT-3170 est la micromeuleuse droite de 134 mm et 0,20 kg, à 54 000 tr/min. La table associe les libellés de pince 1/8 pouce et 3 mm ; confirmer la pince physique avant de commander une fraise, ces dimensions ne sont pas strictement identiques. Le coffret AT-010K renvoie à cette machine sans constituer une nouvelle performance pneumatique."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-3-p17"
		],
		"workingPressureBar": [
			"october2-tools-steed-3-p17"
		],
		"demandExplanation": [
			"october2-tools-steed-3-p17"
		],
		"editorial": [
			"meuleuse-hymair-at-3170-reserved-20261103-1"
		],
		"specifications": [
			"meuleuse-hymair-at-3170-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
