import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "deprag-376-3251u-f",
	"slug": "deprag-376-3251u-f",
	"brand": "DEPRAG",
	"model": "376-3251U-F",
	"mpn": "382685B",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "DEPRAG 376-3251U-F",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/deprag-376-3251u-f.webp",
		"alt": "Repères techniques DEPRAG 376-3251U-F, référence 382685B",
		"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3450/D3450en.pdf#page=3",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "DEPRAG 376-3251U-F, référence 382685B. Le tableau fabricant publie 350 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple minimal : 1.5 Nm. Couple maximal : 15 Nm.",
		"verifiedFacts": [
			"La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"Référence fabricant : 382685B.",
			"Couple minimal : 1.5 Nm.",
			"Couple maximal : 15 Nm.",
			"Vitesse à vide : 410 tr/min."
		],
		"limitations": [
			"Le couple et la vitesse correspondent à la colonne de cette référence commande, pas à l’ensemble de la famille.",
			"Les broches intégrées nécessitent aussi le dimensionnement des auxiliaires de l’installation, qui ne sont pas inclus dans la consommation du moteur de vissage."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"evidenceIds": [
				"deprag-382685b-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"evidenceIds": [
				"deprag-382685b-20260926"
			]
		},
		{
			"label": "Couple minimal",
			"value": "1.5 Nm",
			"evidenceIds": [
				"deprag-382685b-20260926"
			]
		},
		{
			"label": "Couple maximal",
			"value": "15 Nm",
			"evidenceIds": [
				"deprag-382685b-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "410 tr/min",
			"evidenceIds": [
				"deprag-382685b-20260926"
			]
		},
		{
			"label": "Démarrage / exécution du catalogue",
			"value": "drive hex. female 1/4”",
			"evidenceIds": [
				"deprag-382685b-20260926"
			]
		},
		{
			"label": "Type de corps / rotation",
			"value": "Driver reversible, right shut-off",
			"evidenceIds": [
				"deprag-382685b-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "deprag-382685b-20260926",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3450/D3450en.pdf#page=3",
			"sourceLabel": "DEPRAG, brochure technique D3450en, p. 3, réf. 382685B",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine."
		}
	],
	"fieldSources": {
		"mpn": [
			"deprag-382685b-20260926"
		],
		"workingPressureBar": [
			"deprag-382685b-20260926"
		],
		"airflowLpm": [
			"deprag-382685b-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 350,
		"typical": 350,
		"max": 350
	}
};

export default product;
