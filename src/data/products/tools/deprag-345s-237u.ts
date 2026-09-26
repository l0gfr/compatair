const product = {
	"id": "deprag-345s-237u",
	"slug": "deprag-345s-237u",
	"brand": "DEPRAG",
	"model": "345S-237U",
	"mpn": "392773A",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "DEPRAG 345S-237U",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/deprag-345s-237u.webp",
		"alt": "Repères techniques DEPRAG 345S-237U, référence 392773A",
		"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3460/D3460en.pdf#page=2",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "DEPRAG 345S-237U, référence 392773A. Le tableau fabricant publie 400 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple maximal : 0.5 Nm. Couple maximal : 4.5 Nm.",
		"verifiedFacts": [
			"La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"Référence fabricant : 392773A.",
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
				"deprag-392773a-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"evidenceIds": [
				"deprag-392773a-20260926"
			]
		},
		{
			"label": "Couple maximal",
			"value": "0.5 Nm",
			"evidenceIds": [
				"deprag-392773a-20260926"
			]
		},
		{
			"label": "Couple maximal",
			"value": "4.5 Nm",
			"evidenceIds": [
				"deprag-392773a-20260926"
			]
		},
		{
			"label": "Couple maximal",
			"value": "5 Nm",
			"evidenceIds": [
				"deprag-392773a-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2300 tr/min",
			"evidenceIds": [
				"deprag-392773a-20260926"
			]
		},
		{
			"label": "Démarrage / exécution du catalogue",
			"value": "Lower air-inlet",
			"evidenceIds": [
				"deprag-392773a-20260926"
			]
		},
		{
			"label": "Type de corps / rotation",
			"value": "Trigger start",
			"evidenceIds": [
				"deprag-392773a-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "deprag-392773a-20260926",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3460/D3460en.pdf#page=2",
			"sourceLabel": "DEPRAG, brochure technique D3460en, p. 2, réf. 392773A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine."
		}
	],
	"fieldSources": {
		"mpn": [
			"deprag-392773a-20260926"
		],
		"workingPressureBar": [
			"deprag-392773a-20260926"
		],
		"airflowLpm": [
			"deprag-392773a-20260926"
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
