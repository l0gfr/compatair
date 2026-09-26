const product = {
	"id": "deprag-345t-4257u",
	"slug": "deprag-345t-4257u",
	"brand": "DEPRAG",
	"model": "345T-4257U",
	"mpn": "369273C",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "DEPRAG 345T-4257U",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/deprag-345t-4257u.webp",
		"alt": "Repères techniques DEPRAG 345T-4257U, référence 369273C",
		"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3470/D3470en.pdf#page=2",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "DEPRAG 345T-4257U, référence 369273C. Le tableau fabricant publie 350 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple maximal : 12 Nm. Vitesse à vide : 270 tr/min.",
		"verifiedFacts": [
			"La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"Référence fabricant : 369273C.",
			"Couple maximal : 12 Nm.",
			"Vitesse à vide : 270 tr/min.",
			"Démarrage / exécution du catalogue : Push-To-Start."
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
				"deprag-369273c-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"evidenceIds": [
				"deprag-369273c-20260926"
			]
		},
		{
			"label": "Couple maximal",
			"value": "12 Nm",
			"evidenceIds": [
				"deprag-369273c-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "270 tr/min",
			"evidenceIds": [
				"deprag-369273c-20260926"
			]
		},
		{
			"label": "Démarrage / exécution du catalogue",
			"value": "Push-To-Start",
			"evidenceIds": [
				"deprag-369273c-20260926"
			]
		},
		{
			"label": "Type de corps / rotation",
			"value": "Screwdriver reversible",
			"evidenceIds": [
				"deprag-369273c-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "deprag-369273c-20260926",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3470/D3470en.pdf#page=2",
			"sourceLabel": "DEPRAG, brochure technique D3470en, p. 2, réf. 369273C",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine."
		}
	],
	"fieldSources": {
		"mpn": [
			"deprag-369273c-20260926"
		],
		"workingPressureBar": [
			"deprag-369273c-20260926"
		],
		"airflowLpm": [
			"deprag-369273c-20260926"
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
