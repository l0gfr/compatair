import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "deprag-345-4258uesd",
	"slug": "deprag-345-4258uesd",
	"brand": "DEPRAG",
	"model": "345-4258UESD",
	"mpn": "409631C",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "DEPRAG 345-4258UESD",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/deprag-345-4258uesd.webp",
		"alt": "Repères techniques DEPRAG 345-4258UESD, référence 409631C",
		"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3421/D3421en.pdf#page=3",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "DEPRAG 345-4258UESD, référence 409631C. Le tableau fabricant publie 350 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple minimal : 1 Nm. Couple maximal, assemblage souple : 12 Nm.",
		"verifiedFacts": [
			"La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"Référence fabricant : 409631C.",
			"Couple minimal : 1 Nm.",
			"Couple maximal, assemblage souple : 12 Nm.",
			"Couple maximal, assemblage dur : 12 Nm."
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
				"deprag-409631c-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"evidenceIds": [
				"deprag-409631c-20260926"
			]
		},
		{
			"label": "Couple minimal",
			"value": "1 Nm",
			"evidenceIds": [
				"deprag-409631c-20260926"
			]
		},
		{
			"label": "Couple maximal, assemblage souple",
			"value": "12 Nm",
			"evidenceIds": [
				"deprag-409631c-20260926"
			]
		},
		{
			"label": "Couple maximal, assemblage dur",
			"value": "12 Nm",
			"evidenceIds": [
				"deprag-409631c-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "310 tr/min",
			"evidenceIds": [
				"deprag-409631c-20260926"
			]
		},
		{
			"label": "Démarrage / exécution du catalogue",
			"value": "Push-To-Start",
			"evidenceIds": [
				"deprag-409631c-20260926"
			]
		},
		{
			"label": "Type de corps / rotation",
			"value": "Screwdriver reversible, right shut-off",
			"evidenceIds": [
				"deprag-409631c-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "deprag-409631c-20260926",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3421/D3421en.pdf#page=3",
			"sourceLabel": "DEPRAG, brochure technique D3421en, p. 3, réf. 409631C",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine."
		}
	],
	"fieldSources": {
		"mpn": [
			"deprag-409631c-20260926"
		],
		"workingPressureBar": [
			"deprag-409631c-20260926"
		],
		"airflowLpm": [
			"deprag-409631c-20260926"
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
