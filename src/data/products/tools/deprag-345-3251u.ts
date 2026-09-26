const product = {
	"id": "deprag-345-3251u",
	"slug": "deprag-345-3251u",
	"brand": "DEPRAG",
	"model": "345-3251U",
	"mpn": "384354B",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "DEPRAG 345-3251U",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/deprag-345-3251u.webp",
		"alt": "Repères techniques DEPRAG 345-3251U, référence 384354B",
		"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3430/D3430en.pdf#page=2",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "DEPRAG 345-3251U, référence 384354B. Le tableau fabricant publie 350 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple minimal : 1 Nm. Couple maximal, assemblage souple : 10 Nm.",
		"verifiedFacts": [
			"La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"Référence fabricant : 384354B.",
			"Couple minimal : 1 Nm.",
			"Couple maximal, assemblage souple : 10 Nm.",
			"Couple maximal, assemblage dur : 10 Nm."
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
				"deprag-384354b-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"evidenceIds": [
				"deprag-384354b-20260926"
			]
		},
		{
			"label": "Couple minimal",
			"value": "1 Nm",
			"evidenceIds": [
				"deprag-384354b-20260926"
			]
		},
		{
			"label": "Couple maximal, assemblage souple",
			"value": "10 Nm",
			"evidenceIds": [
				"deprag-384354b-20260926"
			]
		},
		{
			"label": "Couple maximal, assemblage dur",
			"value": "10 Nm",
			"evidenceIds": [
				"deprag-384354b-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "640 tr/min",
			"evidenceIds": [
				"deprag-384354b-20260926"
			]
		},
		{
			"label": "Démarrage / exécution du catalogue",
			"value": "Lever Start",
			"evidenceIds": [
				"deprag-384354b-20260926"
			]
		},
		{
			"label": "Type de corps / rotation",
			"value": "Driver reversible, right shut-off",
			"evidenceIds": [
				"deprag-384354b-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "deprag-384354b-20260926",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3430/D3430en.pdf#page=2",
			"sourceLabel": "DEPRAG, brochure technique D3430en, p. 2, réf. 384354B",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine."
		}
	],
	"fieldSources": {
		"mpn": [
			"deprag-384354b-20260926"
		],
		"workingPressureBar": [
			"deprag-384354b-20260926"
		],
		"airflowLpm": [
			"deprag-384354b-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 350,
		"typical": 350,
		"max": 350
	}
};

export default product;
