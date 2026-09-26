const product = {
	"id": "deprag-347s-327u",
	"slug": "deprag-347s-327u",
	"brand": "DEPRAG",
	"model": "347S-327U",
	"mpn": "391486B",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "DEPRAG 347S-327U",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/deprag-347s-327u.webp",
		"alt": "Repères techniques DEPRAG 347S-327U, référence 391486B",
		"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3460/D3460en.pdf#page=2",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "DEPRAG 347S-327U, référence 391486B. Le tableau fabricant publie 300 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple maximal : 0.4 Nm. Couple maximal : 2.4 Nm.",
		"verifiedFacts": [
			"La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"Référence fabricant : 391486B.",
			"Couple maximal : 0.4 Nm.",
			"Couple maximal : 2.4 Nm.",
			"Couple maximal : 2.8 Nm."
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
				"deprag-391486b-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"evidenceIds": [
				"deprag-391486b-20260926"
			]
		},
		{
			"label": "Couple maximal",
			"value": "0.4 Nm",
			"evidenceIds": [
				"deprag-391486b-20260926"
			]
		},
		{
			"label": "Couple maximal",
			"value": "2.4 Nm",
			"evidenceIds": [
				"deprag-391486b-20260926"
			]
		},
		{
			"label": "Couple maximal",
			"value": "2.8 Nm",
			"evidenceIds": [
				"deprag-391486b-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1100 tr/min",
			"evidenceIds": [
				"deprag-391486b-20260926"
			]
		},
		{
			"label": "Démarrage / exécution du catalogue",
			"value": "Lower air-inlet",
			"evidenceIds": [
				"deprag-391486b-20260926"
			]
		},
		{
			"label": "Type de corps / rotation",
			"value": "Trigger start",
			"evidenceIds": [
				"deprag-391486b-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "deprag-391486b-20260926",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3460/D3460en.pdf#page=2",
			"sourceLabel": "DEPRAG, brochure technique D3460en, p. 2, réf. 391486B",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine."
		}
	],
	"fieldSources": {
		"mpn": [
			"deprag-391486b-20260926"
		],
		"workingPressureBar": [
			"deprag-391486b-20260926"
		],
		"airflowLpm": [
			"deprag-391486b-20260926"
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
