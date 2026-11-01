import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-impulsions-zipp-pn043",
	"slug": "cle-a-impulsions-zipp-pn043",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "ZIPP PN043",
	"brand": "ZIPP",
	"model": "PN043",
	"mpn": "PN043",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-impulsions-zipp-pn043.webp",
		"alt": "Repères techniques : ZIPP PN043",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-pn043",
		"label": "Référence PN043",
		"distinguishingAttributes": {
			"reference": "PN043",
			"Vitesse à vide": "5600 tr/min",
			"Masse": "0.95 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP PN043. PN053 partage la sortie 3/8 pouce et la moyenne 0,4 m³/min mais son couple à 0,6 MPa sur assemblage dur est 21–25 Nm et sa vitesse 5800 tr/min. Les colonnes de pression servent au couple ; elles ne prouvent pas une mesure du débit moyen à chaque pression. Carré de sortie : 3/8 pouce. Capacité de boulon publiée : M6–M8. Commande : Sans arrêt automatique.",
		"verifiedFacts": [
			"Vitesse à vide : 5600 tr/min.",
			"Masse : 0.95 kg.",
			"Référence constructeur : PN043.",
			"Carré de sortie : 3/8 pouce.",
			"Capacité de boulon publiée : M6–M8.",
			"Commande : Sans arrêt automatique.",
			"Couple à 0,6 MPa, assemblage dur : 13–17 Nm.",
			"Vitesse à vide : 5 600 tr/min."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "5600 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p35"
			]
		},
		{
			"label": "Masse",
			"value": "0.95 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p35"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "PN043",
			"evidenceIds": [
				"october-b-zipp-tools-p35"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Gauge Air Pressure: 60~90 psi; consumption measurement point is not uniquely stated.",
			"evidenceIds": [
				"october-b-zipp-tools-p35"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 35",
			"evidenceIds": [
				"october-b-zipp-tools-p35"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "3/8 pouce",
			"evidenceIds": [
				"cle-a-impulsions-zipp-pn043-reserved-20261101-1"
			]
		},
		{
			"label": "Capacité de boulon publiée",
			"value": "M6–M8",
			"evidenceIds": [
				"cle-a-impulsions-zipp-pn043-reserved-20261101-1"
			]
		},
		{
			"label": "Commande",
			"value": "Sans arrêt automatique",
			"evidenceIds": [
				"cle-a-impulsions-zipp-pn043-reserved-20261101-1"
			]
		},
		{
			"label": "Couple à 0,6 MPa, assemblage dur",
			"value": "13–17 Nm",
			"evidenceIds": [
				"cle-a-impulsions-zipp-pn043-reserved-20261101-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "5 600 tr/min",
			"evidenceIds": [
				"cle-a-impulsions-zipp-pn043-reserved-20261101-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p35",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=35",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 35",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "cle-a-impulsions-zipp-pn043-reserved-20261101-1",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=35",
			"sourceLabel": "ZIPP : revue factuelle du 1 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-01",
			"confidence": "B",
			"notes": "Corps complet GET HTTP200 SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Passage page=35. Lecture de la référence et des configurations voisines, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p35"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p35"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p35"
		],
		"editorial": [
			"cle-a-impulsions-zipp-pn043-reserved-20261101-1"
		],
		"specifications": [
			"cle-a-impulsions-zipp-pn043-reserved-20261101-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
