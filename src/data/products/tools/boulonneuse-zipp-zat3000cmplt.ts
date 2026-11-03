import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "boulonneuse-zipp-zat3000cmplt",
	"slug": "boulonneuse-zipp-zat3000cmplt",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "ZIPP ZAT3000CMPLT",
	"brand": "ZIPP",
	"model": "ZAT3000CMPLT",
	"mpn": "ZAT3000CMPLT",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/boulonneuse-zipp-zat3000cmplt.webp",
		"alt": "Repères techniques : ZIPP ZAT3000CMPLT",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zat3000cmplt",
		"label": "Référence ZAT3000CMPLT",
		"distinguishingAttributes": {
			"reference": "ZAT3000CMPLT",
			"Masse": "10.3 kg",
			"Référence constructeur": "ZAT3000CMPLT"
		}
	},
	"editorial": {
		"overview": "ZIPP ZAT3000CMPLT. La ZAT3000CMPLT est la version sans lecture numérique, plage 450–4 070 Nm. La ZAT3000DR-CMPLT ajoute l’écran de lecture ; le tableau distingue longueur A 326,9 mm sans lecteur et A1 330 mm avec lecteur. La ZAT1800 est limitée à 2 450 Nm pour 8 kg. Aucun besoin d’air n’est déduit du couple.",
		"verifiedFacts": [
			"Carré : 1 pouce.",
			"Plage de couple : 450–4 070 Nm (333–3 000 ft-lb).",
			"Longueur A sans lecture numérique : 326,9 mm.",
			"Dimension B : 220,2 mm.",
			"Masse : 10,3 kg."
		],
		"limitations": [
			"Consommation moyenne ou de régime non précisé, sans qualification maximale/en charge ni appariement de pression de mesure suffisant : aucun verdict conclusif n’en est déduit."
		]
	},
	"specifications": [
		{
			"label": "Carré",
			"value": "1 pouce",
			"evidenceIds": [
				"boulonneuse-zipp-zat3000cmplt-reserved-20261103-1"
			]
		},
		{
			"label": "Plage de couple",
			"value": "450–4 070 Nm (333–3 000 ft-lb)",
			"evidenceIds": [
				"boulonneuse-zipp-zat3000cmplt-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur A sans lecture numérique",
			"value": "326,9 mm",
			"evidenceIds": [
				"boulonneuse-zipp-zat3000cmplt-reserved-20261103-1"
			]
		},
		{
			"label": "Dimension B",
			"value": "220,2 mm",
			"evidenceIds": [
				"boulonneuse-zipp-zat3000cmplt-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "10,3 kg",
			"evidenceIds": [
				"boulonneuse-zipp-zat3000cmplt-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p39",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=39",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 39",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "boulonneuse-zipp-zat3000cmplt-reserved-20261103-1",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=39",
			"sourceLabel": "ZIPP : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. La ZAT3000CMPLT est la version sans lecture numérique, plage 450–4 070 Nm. La ZAT3000DR-CMPLT ajoute l’écran de lecture ; le tableau distingue longueur A 326,9 mm sans lecteur et A1 330 mm avec lecteur. La ZAT1800 est limitée à 2 450 Nm pour 8 kg. Aucun besoin d’air n’est déduit du couple."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p39"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p39"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p39"
		],
		"editorial": [
			"boulonneuse-zipp-zat3000cmplt-reserved-20261103-1"
		],
		"specifications": [
			"boulonneuse-zipp-zat3000cmplt-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
