const product = {
	"id": "deprag-345-308-hm",
	"slug": "deprag-345-308-hm",
	"brand": "DEPRAG",
	"model": "345-308-HM",
	"mpn": "400108A",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "DEPRAG 345-308-HM",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/deprag-345-308-hm.webp",
		"alt": "Repères techniques DEPRAG 345-308-HM, référence 400108A",
		"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3420/D3420en.pdf#page=2",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "DEPRAG 345-308-HM, référence 400108A. Le tableau fabricant publie 100 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple minimal : 2 Ncm. Couple maximal, assemblage souple : 50 Ncm.",
		"verifiedFacts": [
			"La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"Référence fabricant : 400108A.",
			"Couple minimal : 2 Ncm.",
			"Couple maximal, assemblage souple : 50 Ncm.",
			"Couple maximal, assemblage dur : 60 Ncm."
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
				"deprag-400108a-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"evidenceIds": [
				"deprag-400108a-20260926"
			]
		},
		{
			"label": "Couple minimal",
			"value": "2 Ncm",
			"evidenceIds": [
				"deprag-400108a-20260926"
			]
		},
		{
			"label": "Couple maximal, assemblage souple",
			"value": "50 Ncm",
			"evidenceIds": [
				"deprag-400108a-20260926"
			]
		},
		{
			"label": "Couple maximal, assemblage dur",
			"value": "60 Ncm",
			"evidenceIds": [
				"deprag-400108a-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1700 tr/min",
			"evidenceIds": [
				"deprag-400108a-20260926"
			]
		},
		{
			"label": "Démarrage / exécution du catalogue",
			"value": "Push-To-Start",
			"evidenceIds": [
				"deprag-400108a-20260926"
			]
		},
		{
			"label": "Type de corps / rotation",
			"value": "Screwdriver right-rotation, right shut-off",
			"evidenceIds": [
				"deprag-400108a-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "deprag-400108a-20260926",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3420/D3420en.pdf#page=2",
			"sourceLabel": "DEPRAG, brochure technique D3420en, p. 2, réf. 400108A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine."
		}
	],
	"fieldSources": {
		"mpn": [
			"deprag-400108a-20260926"
		],
		"workingPressureBar": [
			"deprag-400108a-20260926"
		],
		"airflowLpm": [
			"deprag-400108a-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 100,
		"typical": 100,
		"max": 100
	}
};

export default product;
