import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "deprag-345-4259u",
	"slug": "deprag-345-4259u",
	"brand": "DEPRAG",
	"model": "345-4259U",
	"mpn": "390854C",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "DEPRAG 345-4259U",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/deprag-345-4259u.webp",
		"alt": "Repères techniques DEPRAG 345-4259U, référence 390854C",
		"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3435/D3435en.pdf#page=2",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "DEPRAG 345-4259U, référence 390854C. Le tableau fabricant publie 350 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple minimal : 1 Nm. Couple maximal, assemblage souple : 12 Nm.",
		"verifiedFacts": [
			"La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"Référence fabricant : 390854C.",
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
				"deprag-390854c-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"evidenceIds": [
				"deprag-390854c-20260926"
			]
		},
		{
			"label": "Couple minimal",
			"value": "1 Nm",
			"evidenceIds": [
				"deprag-390854c-20260926"
			]
		},
		{
			"label": "Couple maximal, assemblage souple",
			"value": "12 Nm",
			"evidenceIds": [
				"deprag-390854c-20260926"
			]
		},
		{
			"label": "Couple maximal, assemblage dur",
			"value": "12 Nm",
			"evidenceIds": [
				"deprag-390854c-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "270 tr/min",
			"evidenceIds": [
				"deprag-390854c-20260926"
			]
		},
		{
			"label": "Démarrage / exécution du catalogue",
			"value": "Lower air-inlet",
			"evidenceIds": [
				"deprag-390854c-20260926"
			]
		},
		{
			"label": "Type de corps / rotation",
			"value": "Reversible, push-to-start",
			"evidenceIds": [
				"deprag-390854c-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "deprag-390854c-20260926",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3435/D3435en.pdf#page=2",
			"sourceLabel": "DEPRAG, brochure technique D3435en, p. 2, réf. 390854C",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine."
		}
	],
	"fieldSources": {
		"mpn": [
			"deprag-390854c-20260926"
		],
		"workingPressureBar": [
			"deprag-390854c-20260926"
		],
		"airflowLpm": [
			"deprag-390854c-20260926"
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
