import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "deprag-377-741u-e10",
	"slug": "deprag-377-741u-e10",
	"brand": "DEPRAG",
	"model": "377-741U-E10",
	"mpn": "400638C",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "DEPRAG 377-741U-E10",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/deprag-377-741u-e10.webp",
		"alt": "Repères techniques DEPRAG 377-741U-E10, référence 400638C",
		"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3450/D3450en.pdf#page=5",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "DEPRAG 377-741U-E10, référence 400638C. Le tableau fabricant publie 1 000 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple minimal : 7 Nm. Couple maximal : 44 Nm.",
		"verifiedFacts": [
			"La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"Référence fabricant : 400638C.",
			"Couple minimal : 7 Nm.",
			"Couple maximal : 44 Nm.",
			"Vitesse à vide : 285 tr/min."
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
				"deprag-400638c-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"evidenceIds": [
				"deprag-400638c-20260926"
			]
		},
		{
			"label": "Couple minimal",
			"value": "7 Nm",
			"evidenceIds": [
				"deprag-400638c-20260926"
			]
		},
		{
			"label": "Couple maximal",
			"value": "44 Nm",
			"evidenceIds": [
				"deprag-400638c-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "285 tr/min",
			"evidenceIds": [
				"deprag-400638c-20260926"
			]
		},
		{
			"label": "Démarrage / exécution du catalogue",
			"value": "drive square male E10 (3/8”)",
			"evidenceIds": [
				"deprag-400638c-20260926"
			]
		},
		{
			"label": "Type de corps / rotation",
			"value": "Driver reversible, right shut-off",
			"evidenceIds": [
				"deprag-400638c-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "deprag-400638c-20260926",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3450/D3450en.pdf#page=5",
			"sourceLabel": "DEPRAG, brochure technique D3450en, p. 5, réf. 400638C",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine."
		}
	],
	"fieldSources": {
		"mpn": [
			"deprag-400638c-20260926"
		],
		"workingPressureBar": [
			"deprag-400638c-20260926"
		],
		"airflowLpm": [
			"deprag-400638c-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 1000,
		"typical": 1000,
		"max": 1000
	}
};

export default product;
