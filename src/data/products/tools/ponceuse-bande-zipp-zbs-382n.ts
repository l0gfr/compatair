import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-bande-zipp-zbs-382n",
	"slug": "ponceuse-bande-zipp-zbs-382n",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "ZIPP ZBS-382N",
	"brand": "ZIPP",
	"model": "ZBS-382N",
	"mpn": "ZBS-382N",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-bande-zipp-zbs-382n.webp",
		"alt": "Repères techniques : ZIPP ZBS-382N",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zbs-382n",
		"label": "Référence ZBS-382N",
		"distinguishingAttributes": {
			"reference": "ZBS-382N",
			"Vitesse à vide": "17000 tr/min",
			"Masse": "0.88 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZBS-382N. La ZBS-382N emploie une bande 10 × 330 mm et un galet acier ; la ZBS-382A utilise le galet caoutchouc. La ZBS-382N3 passe à une bande 13 × 457 mm et à 390 mm de longueur pour 0,94 kg. Les bandes et les galets sont des critères distincts malgré 17 000 tr/min communs.",
		"verifiedFacts": [
			"Bande : 10 × 330 mm.",
			"Galet : Acier, Steel Wheel.",
			"Vitesse à vide : 17 000 tr/min.",
			"Longueur : 326 mm.",
			"Masse : 0,88 kg."
		],
		"limitations": [
			"Consommation moyenne ou de régime non précisé, sans qualification maximale/en charge ni appariement de pression de mesure suffisant : aucun verdict conclusif n’en est déduit."
		]
	},
	"specifications": [
		{
			"label": "Bande",
			"value": "10 × 330 mm",
			"evidenceIds": [
				"ponceuse-bande-zipp-zbs-382n-reserved-20261103-1"
			]
		},
		{
			"label": "Galet",
			"value": "Acier, Steel Wheel",
			"evidenceIds": [
				"ponceuse-bande-zipp-zbs-382n-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "17 000 tr/min",
			"evidenceIds": [
				"ponceuse-bande-zipp-zbs-382n-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "326 mm",
			"evidenceIds": [
				"ponceuse-bande-zipp-zbs-382n-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,88 kg",
			"evidenceIds": [
				"ponceuse-bande-zipp-zbs-382n-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p133",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=133",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 133",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "ponceuse-bande-zipp-zbs-382n-reserved-20261103-1",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=133",
			"sourceLabel": "ZIPP : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. La ZBS-382N emploie une bande 10 × 330 mm et un galet acier ; la ZBS-382A utilise le galet caoutchouc. La ZBS-382N3 passe à une bande 13 × 457 mm et à 390 mm de longueur pour 0,94 kg. Les bandes et les galets sont des critères distincts malgré 17 000 tr/min communs."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p133"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p133"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p133"
		],
		"editorial": [
			"ponceuse-bande-zipp-zbs-382n-reserved-20261103-1"
		],
		"specifications": [
			"ponceuse-bande-zipp-zbs-382n-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
