const product = {
	"id": "deprag-346s-238u",
	"slug": "deprag-346s-238u",
	"brand": "DEPRAG",
	"model": "346S-238U",
	"mpn": "409114B",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "DEPRAG 346S-238U",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/deprag-346s-238u.webp",
		"alt": "Repères techniques DEPRAG 346S-238U, référence 409114B",
		"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3460/D3460en.pdf#page=2",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "DEPRAG 346S-238U, référence 409114B. Le tableau fabricant publie 400 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple maximal : 0.5 Nm. Couple maximal : 4.5 Nm.",
		"verifiedFacts": [
			"La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"Référence fabricant : 409114B.",
			"Couple maximal : 0.5 Nm.",
			"Couple maximal : 4.5 Nm.",
			"Couple maximal : 5 Nm."
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
				"deprag-409114b-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"evidenceIds": [
				"deprag-409114b-20260926"
			]
		},
		{
			"label": "Couple maximal",
			"value": "0.5 Nm",
			"evidenceIds": [
				"deprag-409114b-20260926"
			]
		},
		{
			"label": "Couple maximal",
			"value": "4.5 Nm",
			"evidenceIds": [
				"deprag-409114b-20260926"
			]
		},
		{
			"label": "Couple maximal",
			"value": "5 Nm",
			"evidenceIds": [
				"deprag-409114b-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2300 tr/min",
			"evidenceIds": [
				"deprag-409114b-20260926"
			]
		},
		{
			"label": "Démarrage / exécution du catalogue",
			"value": "Push-To-Start",
			"evidenceIds": [
				"deprag-409114b-20260926"
			]
		},
		{
			"label": "Type de corps / rotation",
			"value": "right shut-off,",
			"evidenceIds": [
				"deprag-409114b-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "deprag-409114b-20260926",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3460/D3460en.pdf#page=2",
			"sourceLabel": "DEPRAG, brochure technique D3460en, p. 2, réf. 409114B",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine."
		}
	],
	"fieldSources": {
		"mpn": [
			"deprag-409114b-20260926"
		],
		"workingPressureBar": [
			"deprag-409114b-20260926"
		],
		"airflowLpm": [
			"deprag-409114b-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 400,
		"typical": 400,
		"max": 400
	}
};

export default product;
