import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-rotative-gison-gp-823a",
	"slug": "ponceuse-rotative-gison-gp-823a",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "GISON GP-823A",
	"brand": "GISON",
	"model": "GP-823A",
	"mpn": "GP-823A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 560,
		"typical": 560,
		"max": 560
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-rotative-gison-gp-823a.webp",
		"alt": "Repères techniques : GISON GP-823A",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-823a",
		"label": "Référence GP-823A",
		"distinguishingAttributes": {
			"reference": "GP-823A",
			"Longueur": "152 mm",
			"Diamètre de flexible publié": "5.0 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-823A. La GP-823A est une ponceuse rotative 2 pouces à 15 000 tr/min, sans orbite documentée. La GP-823AR donne 22 000 tr/min sur 2 pouces et la GP-823AR3 passe à 3 pouces et 15 000 tr/min. La GP-822A de la même page est une Dual Action à orbite 3 mm : ce mouvement ne se transfère pas à la GP-823A.",
		"verifiedFacts": [
			"Mouvement : Rotation simple, Rotate.",
			"Plateau : 2 pouces.",
			"Vitesse à vide : 15 000 tr/min.",
			"Longueur : 152 mm.",
			"Masse : 0,66 kg."
		],
		"limitations": [
			"Recommandation de service 90 psi (6,3 kg/cm² dans le catalogue), distincte d’un point de mesure de consommation démontré. Régime non qualifié ; pas de conclusion de dimensionnement."
		]
	},
	"specifications": [
		{
			"label": "Mouvement",
			"value": "Rotation simple, Rotate",
			"evidenceIds": [
				"ponceuse-rotative-gison-gp-823a-reserved-20261103-1"
			]
		},
		{
			"label": "Plateau",
			"value": "2 pouces",
			"evidenceIds": [
				"ponceuse-rotative-gison-gp-823a-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "15 000 tr/min",
			"evidenceIds": [
				"ponceuse-rotative-gison-gp-823a-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "152 mm",
			"evidenceIds": [
				"ponceuse-rotative-gison-gp-823a-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,66 kg",
			"evidenceIds": [
				"ponceuse-rotative-gison-gp-823a-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p43",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=43",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 43",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "ponceuse-rotative-gison-gp-823a-reserved-20261103-1",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=43",
			"sourceLabel": "GISON : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. La GP-823A est une ponceuse rotative 2 pouces à 15 000 tr/min, sans orbite documentée. La GP-823AR donne 22 000 tr/min sur 2 pouces et la GP-823AR3 passe à 3 pouces et 15 000 tr/min. La GP-822A de la même page est une Dual Action à orbite 3 mm : ce mouvement ne se transfère pas à la GP-823A."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p43"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p43"
		],
		"airflowLpm": [
			"october-b-gison-tools-p43"
		],
		"airflowBasis": [
			"october-b-gison-tools-p43"
		],
		"editorial": [
			"ponceuse-rotative-gison-gp-823a-reserved-20261103-1"
		],
		"specifications": [
			"ponceuse-rotative-gison-gp-823a-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 560 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
