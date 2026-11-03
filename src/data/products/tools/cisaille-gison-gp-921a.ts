import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cisaille-gison-gp-921a",
	"slug": "cisaille-gison-gp-921a",
	"categoryId": "perceuse",
	"category": "cisaille",
	"label": "GISON GP-921A",
	"brand": "GISON",
	"model": "GP-921A",
	"mpn": "GP-921A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 400,
		"typical": 400,
		"max": 400
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cisaille-gison-gp-921a.webp",
		"alt": "Repères techniques : GISON GP-921A",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-921a",
		"label": "Référence GP-921A",
		"distinguishingAttributes": {
			"reference": "GP-921A",
			"Masse": "1.81 kg",
			"Longueur": "310 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-921A. La GP-921A est une perceuse à dépointer, pas une cisaille : la catégorie est corrigée. Elle annonce capacité 8 mm, 1 400 tr/min et 310 mm ; la GP-921P de forme pistolet annonce 1 800 tr/min et 250 mm pour 1,20 kg. La consommation publiée 0,40 m³/min reste de régime non qualifié.",
		"verifiedFacts": [
			"Type constructeur : Air Spot Drill, perceuse à dépointer.",
			"Capacité : 8 mm.",
			"Vitesse maximale publiée : 1 400 tr/min.",
			"Longueur : 310 mm.",
			"Masse : 1,81 kg."
		],
		"limitations": [
			"Recommandation de service 90 psi (6,3 kg/cm² dans le catalogue), distincte d’un point de mesure de consommation démontré. Régime non qualifié ; pas de conclusion de dimensionnement."
		]
	},
	"specifications": [
		{
			"label": "Type constructeur",
			"value": "Air Spot Drill, perceuse à dépointer",
			"evidenceIds": [
				"cisaille-gison-gp-921a-reserved-20261103-1"
			]
		},
		{
			"label": "Capacité",
			"value": "8 mm",
			"evidenceIds": [
				"cisaille-gison-gp-921a-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse maximale publiée",
			"value": "1 400 tr/min",
			"evidenceIds": [
				"cisaille-gison-gp-921a-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "310 mm",
			"evidenceIds": [
				"cisaille-gison-gp-921a-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,81 kg",
			"evidenceIds": [
				"cisaille-gison-gp-921a-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p80",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=80",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 80",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "cisaille-gison-gp-921a-reserved-20261103-1",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=80",
			"sourceLabel": "GISON : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. La GP-921A est une perceuse à dépointer, pas une cisaille : la catégorie est corrigée. Elle annonce capacité 8 mm, 1 400 tr/min et 310 mm ; la GP-921P de forme pistolet annonce 1 800 tr/min et 250 mm pour 1,20 kg. La consommation publiée 0,40 m³/min reste de régime non qualifié."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p80"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p80"
		],
		"airflowLpm": [
			"october-b-gison-tools-p80"
		],
		"airflowBasis": [
			"october-b-gison-tools-p80"
		],
		"categoryId": [
			"cisaille-gison-gp-921a-reserved-20261103-1"
		],
		"editorial": [
			"cisaille-gison-gp-921a-reserved-20261103-1"
		],
		"specifications": [
			"cisaille-gison-gp-921a-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 400 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
