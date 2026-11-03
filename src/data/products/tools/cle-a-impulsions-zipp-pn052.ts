import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-impulsions-zipp-pn052",
	"slug": "cle-a-impulsions-zipp-pn052",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "ZIPP PN052",
	"brand": "ZIPP",
	"model": "PN052",
	"mpn": "PN052",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-impulsions-zipp-pn052.webp",
		"alt": "Repères techniques : ZIPP PN052",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-pn052",
		"label": "Référence PN052",
		"distinguishingAttributes": {
			"reference": "PN052",
			"Vitesse à vide": "6000 tr/min",
			"Masse": "0.95 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP PN052. La PN052 est une visseuse à impulsions sans arrêt automatique ; la PS052 est la variante avec arrêt. Sur joint dur, dans la colonne 0,5 MPa, les blocs Min./Max. Oil Pressure donnent 16/19 Nm pour PN052 et 20/27 Nm pour PN062. Ces colonnes de couple ne documentent pas un point de mesure de la consommation moyenne.",
		"verifiedFacts": [
			"Type : PN, sans arrêt automatique.",
			"Entraînement : Hexagonal 1/4 pouce.",
			"Capacité de vis : M6–M8.",
			"Vitesse à vide : 6 000 tr/min.",
			"Masse : 0,95 kg.",
			"Consommation moyenne documentaire : 0,4 m³/min, point de pression non unique."
		],
		"limitations": [
			"Consommation moyenne ou de régime non précisé, sans qualification maximale/en charge ni appariement de pression de mesure suffisant : aucun verdict conclusif n’en est déduit."
		]
	},
	"specifications": [
		{
			"label": "Type",
			"value": "PN, sans arrêt automatique",
			"evidenceIds": [
				"cle-a-impulsions-zipp-pn052-reserved-20261103-1"
			]
		},
		{
			"label": "Entraînement",
			"value": "Hexagonal 1/4 pouce",
			"evidenceIds": [
				"cle-a-impulsions-zipp-pn052-reserved-20261103-1"
			]
		},
		{
			"label": "Capacité de vis",
			"value": "M6–M8",
			"evidenceIds": [
				"cle-a-impulsions-zipp-pn052-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "6 000 tr/min",
			"evidenceIds": [
				"cle-a-impulsions-zipp-pn052-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,95 kg",
			"evidenceIds": [
				"cle-a-impulsions-zipp-pn052-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation moyenne documentaire",
			"value": "0,4 m³/min, point de pression non unique",
			"evidenceIds": [
				"cle-a-impulsions-zipp-pn052-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p34",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=34",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 34",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "cle-a-impulsions-zipp-pn052-reserved-20261103-1",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=34",
			"sourceLabel": "ZIPP : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP 200 SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. La PN052 est une visseuse à impulsions sans arrêt automatique ; la PS052 est la variante avec arrêt. Sur joint dur, dans la colonne 0,5 MPa, les blocs Min./Max. Oil Pressure donnent 16/19 Nm pour PN052 et 20/27 Nm pour PN062. Ces colonnes de couple ne documentent pas un point de mesure de la consommation moyenne."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p34"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p34"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p34"
		],
		"editorial": [
			"cle-a-impulsions-zipp-pn052-reserved-20261103-1"
		],
		"specifications": [
			"cle-a-impulsions-zipp-pn052-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
