import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-zipp-zaw-410b",
	"slug": "cle-a-chocs-zipp-zaw-410b",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "ZIPP ZAW-410B",
	"brand": "ZIPP",
	"model": "ZAW-410B",
	"mpn": "ZAW-410B",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 212,
		"typical": 212,
		"max": 212
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-zipp-zaw-410b.webp",
		"alt": "Repères techniques : ZIPP ZAW-410B",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zaw-410b",
		"label": "Référence ZAW-410B",
		"distinguishingAttributes": {
			"reference": "ZAW-410B",
			"Vitesse à vide": "8300 tr/min",
			"Masse": "0.98 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZAW-410B. La ZAW-410B 3/8 pouce donne 80 Nm de travail et 200 Nm maximum. La ZAW-421B3 donne 90 et 240 Nm pour 1,06 kg ; la ZAW-910B1 est en 1/4 pouce et annonce 130 Nm maximum. Couple de travail, maximum et taille du carré restent séparés.",
		"verifiedFacts": [
			"Carré : 3/8 pouce.",
			"Couple de travail publié : 80 Nm.",
			"Couple maximal publié : 200 Nm.",
			"Vitesse à vide : 8 300 tr/min.",
			"Longueur : 190 mm.",
			"Masse : 0,98 kg."
		],
		"limitations": [
			"Consommation moyenne ou de régime non précisé, sans qualification maximale/en charge ni appariement de pression de mesure suffisant : aucun verdict conclusif n’en est déduit."
		]
	},
	"specifications": [
		{
			"label": "Carré",
			"value": "3/8 pouce",
			"evidenceIds": [
				"cle-a-chocs-zipp-zaw-410b-reserved-20261103-1"
			]
		},
		{
			"label": "Couple de travail publié",
			"value": "80 Nm",
			"evidenceIds": [
				"cle-a-chocs-zipp-zaw-410b-reserved-20261103-1"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "200 Nm",
			"evidenceIds": [
				"cle-a-chocs-zipp-zaw-410b-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "8 300 tr/min",
			"evidenceIds": [
				"cle-a-chocs-zipp-zaw-410b-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "190 mm",
			"evidenceIds": [
				"cle-a-chocs-zipp-zaw-410b-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,98 kg",
			"evidenceIds": [
				"cle-a-chocs-zipp-zaw-410b-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p9",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=9",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 9",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "cle-a-chocs-zipp-zaw-410b-reserved-20261103-1",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=9",
			"sourceLabel": "ZIPP : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. La ZAW-410B 3/8 pouce donne 80 Nm de travail et 200 Nm maximum. La ZAW-421B3 donne 90 et 240 Nm pour 1,06 kg ; la ZAW-910B1 est en 1/4 pouce et annonce 130 Nm maximum. Couple de travail, maximum et taille du carré restent séparés."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p9"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p9"
		],
		"airflowLpm": [
			"october-b-zipp-tools-p9"
		],
		"airflowBasis": [
			"october-b-zipp-tools-p9"
		],
		"editorial": [
			"cle-a-chocs-zipp-zaw-410b-reserved-20261103-1"
		],
		"specifications": [
			"cle-a-chocs-zipp-zaw-410b-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation moyenne : 212 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
