const product = {
	"id": "deprag-347s-220-31",
	"slug": "deprag-347s-220-31",
	"brand": "DEPRAG",
	"model": "347S-220-31",
	"mpn": "391489A",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "DEPRAG 347S-220-31",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/deprag-347s-220-31.webp",
		"alt": "Repères techniques DEPRAG 347S-220-31, référence 391489A",
		"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3140/D3140en.pdf#page=2",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "DEPRAG 347S-220-31, référence 391489A. Le tableau fabricant publie 300 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple maximal : 0.5 Nm. Couple maximal : 1.6 Nm.",
		"verifiedFacts": [
			"La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"Référence fabricant : 391489A.",
			"Couple maximal : 0.5 Nm.",
			"Couple maximal : 1.6 Nm.",
			"Couple maximal : 2 Nm."
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
				"deprag-391489a-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"evidenceIds": [
				"deprag-391489a-20260926"
			]
		},
		{
			"label": "Couple maximal",
			"value": "0.5 Nm",
			"evidenceIds": [
				"deprag-391489a-20260926"
			]
		},
		{
			"label": "Couple maximal",
			"value": "1.6 Nm",
			"evidenceIds": [
				"deprag-391489a-20260926"
			]
		},
		{
			"label": "Couple maximal",
			"value": "2 Nm",
			"evidenceIds": [
				"deprag-391489a-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "4000 tr/min",
			"evidenceIds": [
				"deprag-391489a-20260926"
			]
		},
		{
			"label": "Démarrage / exécution du catalogue",
			"value": "Remote-Start",
			"evidenceIds": [
				"deprag-391489a-20260926"
			]
		},
		{
			"label": "Type de corps / rotation",
			"value": "Spindle, right-rotation, right shut-off",
			"evidenceIds": [
				"deprag-391489a-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "deprag-391489a-20260926",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3140/D3140en.pdf#page=2",
			"sourceLabel": "DEPRAG, brochure technique D3140en, p. 2, réf. 391489A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine."
		}
	],
	"fieldSources": {
		"mpn": [
			"deprag-391489a-20260926"
		],
		"workingPressureBar": [
			"deprag-391489a-20260926"
		],
		"airflowLpm": [
			"deprag-391489a-20260926"
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
