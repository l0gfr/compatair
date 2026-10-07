import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "deprag-377-730-7-e10",
	"slug": "deprag-377-730-7-e10",
	"brand": "DEPRAG",
	"model": "377-730-7-E10",
	"mpn": "200941C",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "DEPRAG 377-730-7-E10",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/deprag-377-730-7-e10.webp",
		"alt": "Repères techniques DEPRAG 377-730-7-E10, référence 200941C",
		"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3135/D3135en.pdf#page=4",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "DEPRAG 377-730-7-E10, référence 200941C. Le tableau fabricant publie 450 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple minimal : 4 Nm. Couple maximal : 12 Nm.",
		"verifiedFacts": [
			"La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"Référence fabricant : 200941C.",
			"Couple minimal : 4 Nm.",
			"Couple maximal : 12 Nm.",
			"Vitesse à vide : 840 tr/min."
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
				"deprag-200941c-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"evidenceIds": [
				"deprag-200941c-20260926"
			]
		},
		{
			"label": "Couple minimal",
			"value": "4 Nm",
			"evidenceIds": [
				"deprag-200941c-20260926"
			]
		},
		{
			"label": "Couple maximal",
			"value": "12 Nm",
			"evidenceIds": [
				"deprag-200941c-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "840 tr/min",
			"evidenceIds": [
				"deprag-200941c-20260926"
			]
		},
		{
			"label": "Démarrage / exécution du catalogue",
			"value": "Remote Start",
			"evidenceIds": [
				"deprag-200941c-20260926"
			]
		},
		{
			"label": "Type de corps / rotation",
			"value": "Spindle right rotation",
			"evidenceIds": [
				"deprag-200941c-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "deprag-200941c-20260926",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3135/D3135en.pdf#page=4",
			"sourceLabel": "DEPRAG, brochure technique D3135en, p. 4, réf. 200941C",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine."
		}
	],
	"fieldSources": {
		"mpn": [
			"deprag-200941c-20260926"
		],
		"workingPressureBar": [
			"deprag-200941c-20260926"
		],
		"airflowLpm": [
			"deprag-200941c-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 450,
		"typical": 450,
		"max": 450
	}
};

export default product;
