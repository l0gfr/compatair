import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-zipp-zb41mc",
	"slug": "visseuse-zipp-zb41mc",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "ZIPP ZB41MC",
	"brand": "ZIPP",
	"model": "ZB41MC",
	"mpn": "ZB41MC",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-zipp-zb41mc-technical-20261116-reviews.svg",
		"alt": "Repères techniques : ZIPP ZB41MC",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "zipp-zb41mc",
		"label": "Référence ZB41MC",
		"distinguishingAttributes": {
			"reference": "ZB41MC",
			"Vitesse à vide": "1800 tr/min",
			"Masse": "0.52 kg"
		}
	},
	"editorial": {
		"overview": "La ZB41MC est une visseuse de 1 800 tr/min et 0,52 kg, à distinguer de la ZB46CCQ à 2 200 tr/min et 0,64 kg. Le choix de la sortie et du mécanisme de coupure se vérifie sur la configuration exacte avant de transposer une plage de couple. La fiche ne fournit pas de point de consommation en charge exploitable ; le moteur conserve un état non conclusif.",
		"verifiedFacts": [
			"Vitesse à vide : 1800 tr/min.",
			"Masse : 0.52 kg.",
			"Référence constructeur : ZB41MC."
		],
		"limitations": [
			"La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "1800 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p29"
			]
		},
		{
			"label": "Masse",
			"value": "0.52 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p29"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZB41MC",
			"evidenceIds": [
				"october-b-zipp-tools-p29"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Operating Air Pressure: 90(6.2",
			"evidenceIds": [
				"october-b-zipp-tools-p29"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 29",
			"evidenceIds": [
				"october-b-zipp-tools-p29"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p29",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=29",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 29",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:visseuse-zipp-zb41mc:0",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
			"sourceLabel": "ZIPP, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La ZB41MC est une visseuse de 1 800 tr/min et 0,52 kg, à distinguer de la ZB46CCQ à 2 200 tr/min et 0,64 kg. Le choix de la sortie et du mécanisme de coupure se vérifie sur la configuration exacte avant de transposer une plage de couple. La fiche ne fournit pas de point de consommation en charge exploitable ; le moteur conserve un état non conclusif. GET complet SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. Pages PDF lues : 29."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p29"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p29"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p29"
		]
	},
	"notes": [
		"La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance."
	]
};

export default product;
