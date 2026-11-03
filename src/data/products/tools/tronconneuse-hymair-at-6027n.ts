import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "tronconneuse-hymair-at-6027n",
	"slug": "tronconneuse-hymair-at-6027n",
	"categoryId": "tronconneuse",
	"category": "tronconneuse",
	"label": "Hymair AT-6027N",
	"brand": "Hymair",
	"model": "AT-6027N",
	"mpn": "AT-6027N",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/tronconneuse-hymair-at-6027n.webp",
		"alt": "Repères techniques : Hymair AT-6027N",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-6027n",
		"label": "Référence AT-6027N",
		"distinguishingAttributes": {
			"reference": "AT-6027N",
			"Vitesse à vide": "20,000 rpm",
			"Masse publiée (kg/lb)": "0.84/1.84"
		}
	},
	"editorial": {
		"overview": "Hymair AT-6027N. La AT-6027N est la tronçonneuse à protecteur pivotant de 208 mm ; la AT-6027BN mesure 185 mm et pèse 0,78 kg, contre 0,84 kg. La version NXL atteint 310 mm et 18 000 tr/min. Le disque 76 mm est documenté, mais la moyenne 5 CFM ne remplace pas un débit maximal mesuré.",
		"verifiedFacts": [
			"Disque de coupe : 3 pouces (76 mm).",
			"Protecteur : Métallique pivotant.",
			"Vitesse à vide : 20 000 tr/min.",
			"Longueur : 208 mm.",
			"Masse : 0,84 kg.",
			"Consommation moyenne publiée : 5 CFM."
		],
		"limitations": [
			"Consommation moyenne publiée conservée dans les spécifications ; aucun débit maximal ni volume par action déduit.",
			"Catalogue constructeur identifié ; configuration et disponibilité actuelles à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Disque de coupe",
			"value": "3 pouces (76 mm)",
			"evidenceIds": [
				"tronconneuse-hymair-at-6027n-reserved-20261103-1"
			]
		},
		{
			"label": "Protecteur",
			"value": "Métallique pivotant",
			"evidenceIds": [
				"tronconneuse-hymair-at-6027n-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "20 000 tr/min",
			"evidenceIds": [
				"tronconneuse-hymair-at-6027n-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "208 mm",
			"evidenceIds": [
				"tronconneuse-hymair-at-6027n-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,84 kg",
			"evidenceIds": [
				"tronconneuse-hymair-at-6027n-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation moyenne publiée",
			"value": "5 CFM",
			"evidenceIds": [
				"tronconneuse-hymair-at-6027n-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-2-p18",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=18",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Professional, page PDF 18",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "tronconneuse-hymair-at-6027n-reserved-20261103-1",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=18",
			"sourceLabel": "Hymair : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. La AT-6027N est la tronçonneuse à protecteur pivotant de 208 mm ; la AT-6027BN mesure 185 mm et pèse 0,78 kg, contre 0,84 kg. La version NXL atteint 310 mm et 18 000 tr/min. Le disque 76 mm est documenté, mais la moyenne 5 CFM ne remplace pas un débit maximal mesuré."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-2-p18"
		],
		"workingPressureBar": [
			"october2-tools-steed-2-p18"
		],
		"demandExplanation": [
			"october2-tools-steed-2-p18"
		],
		"editorial": [
			"tronconneuse-hymair-at-6027n-reserved-20261103-1"
		],
		"specifications": [
			"tronconneuse-hymair-at-6027n-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
