import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-gison-gp-802",
	"slug": "visseuse-gison-gp-802",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "GISON GP-802",
	"brand": "GISON",
	"model": "GP-802",
	"mpn": "GP-802",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 350,
		"typical": 350,
		"max": 350
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-gison-gp-802.webp",
		"alt": "Repères techniques : GISON GP-802",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-802",
		"label": "Référence GP-802",
		"distinguishingAttributes": {
			"reference": "GP-802",
			"Masse": "0.65 kg",
			"Longueur": "210 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-802. La GP-802 est une visseuse à embrayage glissant de 4 Nm maximum. Les GP-904C/905C/905D appartiennent au tableau Shut-off et annoncent un arrêt automatique ; ce comportement n’est pas transféré à la GP-802. La GP-861H1 annonce 8 Nm mais 600 tr/min dans un corps de 228 mm.",
		"verifiedFacts": [
			"Type : Visseuse à embrayage glissant, Slip-Clutch.",
			"Porte-embout : 1/4 pouce.",
			"Vitesse à vide : 1 800 tr/min.",
			"Couple maximal déclaré : 4 Nm (3,0 ft-lb).",
			"Longueur : 210 mm.",
			"Masse : 0,65 kg."
		],
		"limitations": [
			"Recommandation de service 90 psi (6,3 kg/cm² dans le catalogue), distincte d’un point de mesure de consommation démontré. Régime non qualifié ; pas de conclusion de dimensionnement."
		]
	},
	"specifications": [
		{
			"label": "Type",
			"value": "Visseuse à embrayage glissant, Slip-Clutch",
			"evidenceIds": [
				"visseuse-gison-gp-802-reserved-20261103-1"
			]
		},
		{
			"label": "Porte-embout",
			"value": "1/4 pouce",
			"evidenceIds": [
				"visseuse-gison-gp-802-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1 800 tr/min",
			"evidenceIds": [
				"visseuse-gison-gp-802-reserved-20261103-1"
			]
		},
		{
			"label": "Couple maximal déclaré",
			"value": "4 Nm (3,0 ft-lb)",
			"evidenceIds": [
				"visseuse-gison-gp-802-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "210 mm",
			"evidenceIds": [
				"visseuse-gison-gp-802-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,65 kg",
			"evidenceIds": [
				"visseuse-gison-gp-802-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p64",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=64",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 64",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "visseuse-gison-gp-802-reserved-20261103-1",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=64",
			"sourceLabel": "GISON : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. La GP-802 est une visseuse à embrayage glissant de 4 Nm maximum. Les GP-904C/905C/905D appartiennent au tableau Shut-off et annoncent un arrêt automatique ; ce comportement n’est pas transféré à la GP-802. La GP-861H1 annonce 8 Nm mais 600 tr/min dans un corps de 228 mm."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p64"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p64"
		],
		"airflowLpm": [
			"october-b-gison-tools-p64"
		],
		"airflowBasis": [
			"october-b-gison-tools-p64"
		],
		"editorial": [
			"visseuse-gison-gp-802-reserved-20261103-1"
		],
		"specifications": [
			"visseuse-gison-gp-802-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 350 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
