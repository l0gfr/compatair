const product = {
	"id": "deprag-344-347u",
	"slug": "deprag-344-347u",
	"brand": "DEPRAG",
	"model": "344-347U",
	"mpn": "400320D",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "DEPRAG 344-347U",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/deprag-344-347u.webp",
		"alt": "Repères techniques DEPRAG 344-347U, référence 400320D",
		"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3435/D3435en.pdf#page=3",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "DEPRAG 344-347U, référence 400320D. Le tableau fabricant publie 1 000 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple minimal : 3 Nm. Couple maximal, assemblage souple : 6.5 Nm.",
		"verifiedFacts": [
			"La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"Référence fabricant : 400320D.",
			"Couple minimal : 3 Nm.",
			"Couple maximal, assemblage souple : 6.5 Nm.",
			"Couple maximal, assemblage dur : 8.5 Nm."
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
				"deprag-400320d-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"evidenceIds": [
				"deprag-400320d-20260926"
			]
		},
		{
			"label": "Couple minimal",
			"value": "3 Nm",
			"evidenceIds": [
				"deprag-400320d-20260926"
			]
		},
		{
			"label": "Couple maximal, assemblage souple",
			"value": "6.5 Nm",
			"evidenceIds": [
				"deprag-400320d-20260926"
			]
		},
		{
			"label": "Couple maximal, assemblage dur",
			"value": "8.5 Nm",
			"evidenceIds": [
				"deprag-400320d-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2300 tr/min",
			"evidenceIds": [
				"deprag-400320d-20260926"
			]
		},
		{
			"label": "Démarrage / exécution du catalogue",
			"value": "Upper air-inlet, lower air-inlet or rear air-inlet",
			"evidenceIds": [
				"deprag-400320d-20260926"
			]
		},
		{
			"label": "Type de corps / rotation",
			"value": "Reversible, trigger-start",
			"evidenceIds": [
				"deprag-400320d-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "deprag-400320d-20260926",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3435/D3435en.pdf#page=3",
			"sourceLabel": "DEPRAG, brochure technique D3435en, p. 3, réf. 400320D",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine."
		}
	],
	"fieldSources": {
		"mpn": [
			"deprag-400320d-20260926"
		],
		"workingPressureBar": [
			"deprag-400320d-20260926"
		],
		"airflowLpm": [
			"deprag-400320d-20260926"
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
