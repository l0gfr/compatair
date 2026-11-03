import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-zipp-zas-95ab",
	"slug": "visseuse-zipp-zas-95ab",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "ZIPP ZAS-95AB",
	"brand": "ZIPP",
	"model": "ZAS-95AB",
	"mpn": "ZAS-95AB",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La table publie 0,55 m³/min sans régime ni pression de mesure univoque ; la demande reste non conclusive.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-zipp-zas-95ab.webp",
		"alt": "Repères techniques : ZIPP ZAS-95AB",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zas-95ab",
		"label": "Référence ZAS-95AB",
		"distinguishingAttributes": {
			"reference": "ZAS-95AB",
			"Vitesse à vide": "550 tr/min",
			"Masse": "1.2 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZAS-95AB. La ZAS-95AB annonce 15–95 kgf·cm à 550 tr/min ; ces unités ne sont pas des Nm. La ZAS-45AB donne 5–45 kgf·cm à 1 800 tr/min et la ZAS-280AB 50–280 kgf·cm à 250 tr/min. La consommation 0,55 m³/min existe dans la table, mais son régime et son point de pression de mesure restent non qualifiés.",
		"verifiedFacts": [
			"Forme : Visseuse coudée.",
			"Vitesse à vide : 550 tr/min.",
			"Plage de couple originale : 15–95 kgf·cm.",
			"Longueur : 345 mm.",
			"Masse : 1,2 kg.",
			"Consommation documentaire : 0,55 m³/min, régime non précisé.",
			"Pressions de la page : Table : 6 kg/cm² ; service indiqué : 90 psi / 6,2 bar."
		],
		"limitations": [
			"Consommation moyenne ou de régime non précisé, sans qualification maximale/en charge ni appariement de pression de mesure suffisant : aucun verdict conclusif n’en est déduit."
		]
	},
	"specifications": [
		{
			"label": "Forme",
			"value": "Visseuse coudée",
			"evidenceIds": [
				"visseuse-zipp-zas-95ab-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "550 tr/min",
			"evidenceIds": [
				"visseuse-zipp-zas-95ab-reserved-20261103-1"
			]
		},
		{
			"label": "Plage de couple originale",
			"value": "15–95 kgf·cm",
			"evidenceIds": [
				"visseuse-zipp-zas-95ab-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "345 mm",
			"evidenceIds": [
				"visseuse-zipp-zas-95ab-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,2 kg",
			"evidenceIds": [
				"visseuse-zipp-zas-95ab-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "0,55 m³/min, régime non précisé",
			"evidenceIds": [
				"visseuse-zipp-zas-95ab-reserved-20261103-1"
			]
		},
		{
			"label": "Pressions de la page",
			"value": "Table : 6 kg/cm² ; service indiqué : 90 psi / 6,2 bar",
			"evidenceIds": [
				"visseuse-zipp-zas-95ab-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p30",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=30",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 30",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "visseuse-zipp-zas-95ab-reserved-20261103-1",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=30",
			"sourceLabel": "ZIPP : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. La ZAS-95AB annonce 15–95 kgf·cm à 550 tr/min ; ces unités ne sont pas des Nm. La ZAS-45AB donne 5–45 kgf·cm à 1 800 tr/min et la ZAS-280AB 50–280 kgf·cm à 250 tr/min. La consommation 0,55 m³/min existe dans la table, mais son régime et son point de pression de mesure restent non qualifiés."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p30"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p30"
		],
		"demandExplanation": [
			"visseuse-zipp-zas-95ab-reserved-20261103-1"
		],
		"editorial": [
			"visseuse-zipp-zas-95ab-reserved-20261103-1"
		],
		"specifications": [
			"visseuse-zipp-zas-95ab-reserved-20261103-1"
		]
	},
	"notes": [
		"La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance."
	]
};

export default product;
