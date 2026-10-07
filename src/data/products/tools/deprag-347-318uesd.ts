import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "deprag-347-318uesd",
	"slug": "deprag-347-318uesd",
	"brand": "DEPRAG",
	"model": "347-318UESD",
	"mpn": "403345B",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "DEPRAG 347-318UESD",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/deprag-347-318uesd.webp",
		"alt": "Repères techniques DEPRAG 347-318UESD, référence 403345B",
		"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3421/D3421en.pdf#page=2",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "DEPRAG 347-318UESD, référence 403345B. Le tableau fabricant publie 230 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple minimal : 0.3 Nm. Couple maximal, assemblage souple : 1.4 Nm.",
		"verifiedFacts": [
			"La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"Référence fabricant : 403345B.",
			"Couple minimal : 0.3 Nm.",
			"Couple maximal, assemblage souple : 1.4 Nm.",
			"Couple maximal, assemblage dur : 1.4 Nm."
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
				"deprag-403345b-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"evidenceIds": [
				"deprag-403345b-20260926"
			]
		},
		{
			"label": "Couple minimal",
			"value": "0.3 Nm",
			"evidenceIds": [
				"deprag-403345b-20260926"
			]
		},
		{
			"label": "Couple maximal, assemblage souple",
			"value": "1.4 Nm",
			"evidenceIds": [
				"deprag-403345b-20260926"
			]
		},
		{
			"label": "Couple maximal, assemblage dur",
			"value": "1.4 Nm",
			"evidenceIds": [
				"deprag-403345b-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1300 tr/min",
			"evidenceIds": [
				"deprag-403345b-20260926"
			]
		},
		{
			"label": "Démarrage / exécution du catalogue",
			"value": "Push-To-Start",
			"evidenceIds": [
				"deprag-403345b-20260926"
			]
		},
		{
			"label": "Type de corps / rotation",
			"value": "Screwdriver reversible, right shut-off",
			"evidenceIds": [
				"deprag-403345b-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "deprag-403345b-20260926",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3421/D3421en.pdf#page=2",
			"sourceLabel": "DEPRAG, brochure technique D3421en, p. 2, réf. 403345B",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine."
		}
	],
	"fieldSources": {
		"mpn": [
			"deprag-403345b-20260926"
		],
		"workingPressureBar": [
			"deprag-403345b-20260926"
		],
		"airflowLpm": [
			"deprag-403345b-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 230,
		"typical": 230,
		"max": 230
	}
};

export default product;
