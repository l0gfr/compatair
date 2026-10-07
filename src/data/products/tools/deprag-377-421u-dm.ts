import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "deprag-377-421u-dm",
	"slug": "deprag-377-421u-dm",
	"brand": "DEPRAG",
	"model": "377-421U-DM",
	"mpn": "390884D",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "DEPRAG 377-421U-DM",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/deprag-377-421u-dm.webp",
		"alt": "Repères techniques DEPRAG 377-421U-DM, référence 390884D",
		"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3450/D3450en.pdf#page=2",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "DEPRAG 377-421U-DM, référence 390884D. Le tableau fabricant publie 300 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple minimal : 0.4 Nm. Couple maximal : 4.5 Nm.",
		"verifiedFacts": [
			"La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"Référence fabricant : 390884D.",
			"Couple minimal : 0.4 Nm.",
			"Couple maximal : 4.5 Nm.",
			"Vitesse à vide : 500 tr/min."
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
				"deprag-390884d-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"evidenceIds": [
				"deprag-390884d-20260926"
			]
		},
		{
			"label": "Couple minimal",
			"value": "0.4 Nm",
			"evidenceIds": [
				"deprag-390884d-20260926"
			]
		},
		{
			"label": "Couple maximal",
			"value": "4.5 Nm",
			"evidenceIds": [
				"deprag-390884d-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "500 tr/min",
			"evidenceIds": [
				"deprag-390884d-20260926"
			]
		},
		{
			"label": "Démarrage / exécution du catalogue",
			"value": "drive hex. female 1/4”",
			"evidenceIds": [
				"deprag-390884d-20260926"
			]
		},
		{
			"label": "Type de corps / rotation",
			"value": "Driver reversible, right shut-off",
			"evidenceIds": [
				"deprag-390884d-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "deprag-390884d-20260926",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3450/D3450en.pdf#page=2",
			"sourceLabel": "DEPRAG, brochure technique D3450en, p. 2, réf. 390884D",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine."
		}
	],
	"fieldSources": {
		"mpn": [
			"deprag-390884d-20260926"
		],
		"workingPressureBar": [
			"deprag-390884d-20260926"
		],
		"airflowLpm": [
			"deprag-390884d-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 300,
		"typical": 300,
		"max": 300
	}
};

export default product;
