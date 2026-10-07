import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "deprag-347-421u",
	"slug": "deprag-347-421u",
	"brand": "DEPRAG",
	"model": "347-421U",
	"mpn": "386364D",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "DEPRAG 347-421U",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/deprag-347-421u.webp",
		"alt": "Repères techniques DEPRAG 347-421U, référence 386364D",
		"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3430/D3430en.pdf#page=2",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "DEPRAG 347-421U, référence 386364D. Le tableau fabricant publie 300 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple minimal : 0.4 Nm. Couple maximal, assemblage souple : 3.5 Nm.",
		"verifiedFacts": [
			"La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"Référence fabricant : 386364D.",
			"Couple minimal : 0.4 Nm.",
			"Couple maximal, assemblage souple : 3.5 Nm.",
			"Couple maximal, assemblage dur : 4 Nm."
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
				"deprag-386364d-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"evidenceIds": [
				"deprag-386364d-20260926"
			]
		},
		{
			"label": "Couple minimal",
			"value": "0.4 Nm",
			"evidenceIds": [
				"deprag-386364d-20260926"
			]
		},
		{
			"label": "Couple maximal, assemblage souple",
			"value": "3.5 Nm",
			"evidenceIds": [
				"deprag-386364d-20260926"
			]
		},
		{
			"label": "Couple maximal, assemblage dur",
			"value": "4 Nm",
			"evidenceIds": [
				"deprag-386364d-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "750 tr/min",
			"evidenceIds": [
				"deprag-386364d-20260926"
			]
		},
		{
			"label": "Démarrage / exécution du catalogue",
			"value": "Lever Start",
			"evidenceIds": [
				"deprag-386364d-20260926"
			]
		},
		{
			"label": "Type de corps / rotation",
			"value": "Driver reversible, right shut-off",
			"evidenceIds": [
				"deprag-386364d-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "deprag-386364d-20260926",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3430/D3430en.pdf#page=2",
			"sourceLabel": "DEPRAG, brochure technique D3430en, p. 2, réf. 386364D",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine."
		}
	],
	"fieldSources": {
		"mpn": [
			"deprag-386364d-20260926"
		],
		"workingPressureBar": [
			"deprag-386364d-20260926"
		],
		"airflowLpm": [
			"deprag-386364d-20260926"
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
