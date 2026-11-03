import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-zipp-zad-356",
	"slug": "perceuse-zipp-zad-356",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "ZIPP ZAD-356",
	"brand": "ZIPP",
	"model": "ZAD-356",
	"mpn": "ZAD-356",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-zipp-zad-356.webp",
		"alt": "Repères techniques : ZIPP ZAD-356",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zad-356",
		"label": "Référence ZAD-356",
		"distinguishingAttributes": {
			"reference": "ZAD-356",
			"Vitesse à vide": "2600 tr/min",
			"Masse": "0.8 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZAD-356. La ZAD-356 est la perceuse droite 10 mm à 2 600 tr/min ; la ZAD-356P est la version pistolet. La ZAD-376 donne 3 600 tr/min à capacité et longueur identiques. La ZAD-336 donne 1 800 tr/min pour 0,9 kg ; la vitesse de perçage ne se choisit pas d’après la consommation moyenne commune.",
		"verifiedFacts": [
			"Type : Perceuse droite, mandrin sans clé.",
			"Capacité mandrin : 3/8 pouce (10 mm).",
			"Filetage broche : 3/8 pouce–24.",
			"Vitesse à vide : 2 600 tr/min.",
			"Longueur : 225 mm.",
			"Masse : 0,8 kg."
		],
		"limitations": [
			"Consommation moyenne ou de régime non précisé, sans qualification maximale/en charge ni appariement de pression de mesure suffisant : aucun verdict conclusif n’en est déduit."
		]
	},
	"specifications": [
		{
			"label": "Type",
			"value": "Perceuse droite, mandrin sans clé",
			"evidenceIds": [
				"perceuse-zipp-zad-356-reserved-20261103-1"
			]
		},
		{
			"label": "Capacité mandrin",
			"value": "3/8 pouce (10 mm)",
			"evidenceIds": [
				"perceuse-zipp-zad-356-reserved-20261103-1"
			]
		},
		{
			"label": "Filetage broche",
			"value": "3/8 pouce–24",
			"evidenceIds": [
				"perceuse-zipp-zad-356-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2 600 tr/min",
			"evidenceIds": [
				"perceuse-zipp-zad-356-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "225 mm",
			"evidenceIds": [
				"perceuse-zipp-zad-356-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,8 kg",
			"evidenceIds": [
				"perceuse-zipp-zad-356-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p108",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=108",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 108",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "perceuse-zipp-zad-356-reserved-20261103-1",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=108",
			"sourceLabel": "ZIPP : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. La ZAD-356 est la perceuse droite 10 mm à 2 600 tr/min ; la ZAD-356P est la version pistolet. La ZAD-376 donne 3 600 tr/min à capacité et longueur identiques. La ZAD-336 donne 1 800 tr/min pour 0,9 kg ; la vitesse de perçage ne se choisit pas d’après la consommation moyenne commune."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p108"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p108"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p108"
		],
		"editorial": [
			"perceuse-zipp-zad-356-reserved-20261103-1"
		],
		"specifications": [
			"perceuse-zipp-zad-356-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
