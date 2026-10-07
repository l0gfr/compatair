import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "deprag-347-320-31",
	"slug": "deprag-347-320-31",
	"brand": "DEPRAG",
	"model": "347-320-31",
	"mpn": "386371B",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "DEPRAG 347-320-31",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/deprag-347-320-31.webp",
		"alt": "Repères techniques DEPRAG 347-320-31, référence 386371B",
		"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3130/D3130en.pdf#page=8",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "DEPRAG 347-320-31, référence 386371B. Le tableau fabricant publie 300 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple minimal : 0.4 Nm. Couple maximal, assemblage souple : 3 Nm.",
		"verifiedFacts": [
			"La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"Référence fabricant : 386371B.",
			"Couple minimal : 0.4 Nm.",
			"Couple maximal, assemblage souple : 3 Nm.",
			"Couple maximal, assemblage dur : 3.5 Nm."
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
				"deprag-386371b-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"evidenceIds": [
				"deprag-386371b-20260926"
			]
		},
		{
			"label": "Couple minimal",
			"value": "0.4 Nm",
			"evidenceIds": [
				"deprag-386371b-20260926"
			]
		},
		{
			"label": "Couple maximal, assemblage souple",
			"value": "3 Nm",
			"evidenceIds": [
				"deprag-386371b-20260926"
			]
		},
		{
			"label": "Couple maximal, assemblage dur",
			"value": "3.5 Nm",
			"evidenceIds": [
				"deprag-386371b-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1550 tr/min",
			"evidenceIds": [
				"deprag-386371b-20260926"
			]
		},
		{
			"label": "Démarrage / exécution du catalogue",
			"value": "Remote Start",
			"evidenceIds": [
				"deprag-386371b-20260926"
			]
		},
		{
			"label": "Type de corps / rotation",
			"value": "Spindle right rotation, right shut-off",
			"evidenceIds": [
				"deprag-386371b-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "deprag-386371b-20260926",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3130/D3130en.pdf#page=8",
			"sourceLabel": "DEPRAG, brochure technique D3130en, p. 8, réf. 386371B",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine."
		}
	],
	"fieldSources": {
		"mpn": [
			"deprag-386371b-20260926"
		],
		"workingPressureBar": [
			"deprag-386371b-20260926"
		],
		"airflowLpm": [
			"deprag-386371b-20260926"
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
