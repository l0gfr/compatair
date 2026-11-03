import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "polisseuse-gison-gp-822ar2",
	"slug": "polisseuse-gison-gp-822ar2",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "GISON GP-822AR2",
	"brand": "GISON",
	"model": "GP-822AR2",
	"mpn": "GP-822AR2",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 480,
		"typical": 480,
		"max": 480
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/polisseuse-gison-gp-822ar2.webp",
		"alt": "Repères techniques : GISON GP-822AR2",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-822ar2",
		"label": "Référence GP-822AR2",
		"distinguishingAttributes": {
			"reference": "GP-822AR2",
			"Masse": "0.70 kg",
			"Longueur": "178 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-822AR2. La GP-822AR2 utilise un plateau 2 pouces ; la GP-822AR3 passe à 3 pouces avec le même filetage 5/16 pouce–24 et 3 500 tr/min. La GP-821P est une polisseuse verticale de 7 pouces à 2 000 tr/min et 2,60 kg. Le format de plateau reste un critère indépendant du besoin d’air.",
		"verifiedFacts": [
			"Plateau : 2 pouces.",
			"Filetage : 5/16 pouce–24.",
			"Vitesse à vide : 3 500 tr/min.",
			"Tête : 100 degrés, sans engrenage selon légende.",
			"Longueur : 178 mm.",
			"Masse : 0,70 kg."
		],
		"limitations": [
			"Recommandation de service 90 psi (6,3 kg/cm² dans le catalogue), distincte d’un point de mesure de consommation démontré. Régime non qualifié ; pas de conclusion de dimensionnement."
		]
	},
	"specifications": [
		{
			"label": "Plateau",
			"value": "2 pouces",
			"evidenceIds": [
				"polisseuse-gison-gp-822ar2-reserved-20261103-1"
			]
		},
		{
			"label": "Filetage",
			"value": "5/16 pouce–24",
			"evidenceIds": [
				"polisseuse-gison-gp-822ar2-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "3 500 tr/min",
			"evidenceIds": [
				"polisseuse-gison-gp-822ar2-reserved-20261103-1"
			]
		},
		{
			"label": "Tête",
			"value": "100 degrés, sans engrenage selon légende",
			"evidenceIds": [
				"polisseuse-gison-gp-822ar2-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "178 mm",
			"evidenceIds": [
				"polisseuse-gison-gp-822ar2-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,70 kg",
			"evidenceIds": [
				"polisseuse-gison-gp-822ar2-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p46",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=46",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 46",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "polisseuse-gison-gp-822ar2-reserved-20261103-1",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=46",
			"sourceLabel": "GISON : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. La GP-822AR2 utilise un plateau 2 pouces ; la GP-822AR3 passe à 3 pouces avec le même filetage 5/16 pouce–24 et 3 500 tr/min. La GP-821P est une polisseuse verticale de 7 pouces à 2 000 tr/min et 2,60 kg. Le format de plateau reste un critère indépendant du besoin d’air."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p46"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p46"
		],
		"airflowLpm": [
			"october-b-gison-tools-p46"
		],
		"airflowBasis": [
			"october-b-gison-tools-p46"
		],
		"editorial": [
			"polisseuse-gison-gp-822ar2-reserved-20261103-1"
		],
		"specifications": [
			"polisseuse-gison-gp-822ar2-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 480 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
