const product = {
	"id": "deprag-345-300-31l-hm",
	"slug": "deprag-345-300-31l-hm",
	"brand": "DEPRAG",
	"model": "345-300-31L-HM",
	"mpn": "400103A",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "DEPRAG 345-300-31L-HM",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/deprag-345-300-31l-hm.webp",
		"alt": "Repères techniques DEPRAG 345-300-31L-HM, référence 400103A",
		"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3130/D3130en.pdf#page=4",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "DEPRAG 345-300-31L-HM, référence 400103A. Le tableau fabricant publie 100 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple minimal : 2 Ncm. Couple maximal, assemblage souple : 50 Ncm.",
		"verifiedFacts": [
			"La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"Référence fabricant : 400103A.",
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
				"deprag-400103a-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"evidenceIds": [
				"deprag-400103a-20260926"
			]
		},
		{
			"label": "Couple minimal",
			"value": "2 Ncm",
			"evidenceIds": [
				"deprag-400103a-20260926"
			]
		},
		{
			"label": "Couple maximal, assemblage souple",
			"value": "50 Ncm",
			"evidenceIds": [
				"deprag-400103a-20260926"
			]
		},
		{
			"label": "Couple maximal, assemblage dur",
			"value": "60 Ncm",
			"evidenceIds": [
				"deprag-400103a-20260926"
			]
		},
		{
			"label": "Vitesse à vide, rotation gauche",
			"value": "1800 tr/min",
			"evidenceIds": [
				"deprag-400103a-20260926"
			]
		},
		{
			"label": "Démarrage / exécution du catalogue",
			"value": "Remote Start",
			"evidenceIds": [
				"deprag-400103a-20260926"
			]
		},
		{
			"label": "Type de corps / rotation",
			"value": "Spindle left rotation, left shut-off",
			"evidenceIds": [
				"deprag-400103a-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "deprag-400103a-20260926",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3130/D3130en.pdf#page=4",
			"sourceLabel": "DEPRAG, brochure technique D3130en, p. 4, réf. 400103A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine."
		}
	],
	"fieldSources": {
		"mpn": [
			"deprag-400103a-20260926"
		],
		"workingPressureBar": [
			"deprag-400103a-20260926"
		],
		"airflowLpm": [
			"deprag-400103a-20260926"
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
