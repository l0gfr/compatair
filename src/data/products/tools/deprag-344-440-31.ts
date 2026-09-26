const product = {
	"id": "deprag-344-440-31",
	"slug": "deprag-344-440-31",
	"brand": "DEPRAG",
	"model": "344-440-31",
	"mpn": "389730B",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "DEPRAG 344-440-31",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/deprag-344-440-31.webp",
		"alt": "Repères techniques DEPRAG 344-440-31, référence 389730B",
		"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3130/D3130en.pdf#page=12",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "DEPRAG 344-440-31, référence 389730B. Le tableau fabricant publie 1 100 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple minimal : 4 Nm. Couple maximal : 10 Nm.",
		"verifiedFacts": [
			"La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"Référence fabricant : 389730B.",
			"Couple minimal : 4 Nm.",
			"Couple maximal : 10 Nm.",
			"Vitesse à vide : 2100 tr/min."
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
				"deprag-389730b-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"evidenceIds": [
				"deprag-389730b-20260926"
			]
		},
		{
			"label": "Couple minimal",
			"value": "4 Nm",
			"evidenceIds": [
				"deprag-389730b-20260926"
			]
		},
		{
			"label": "Couple maximal",
			"value": "10 Nm",
			"evidenceIds": [
				"deprag-389730b-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2100 tr/min",
			"evidenceIds": [
				"deprag-389730b-20260926"
			]
		},
		{
			"label": "Démarrage / exécution du catalogue",
			"value": "Remote Start",
			"evidenceIds": [
				"deprag-389730b-20260926"
			]
		},
		{
			"label": "Type de corps / rotation",
			"value": "Spindle right rotation, right shut-off",
			"evidenceIds": [
				"deprag-389730b-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "deprag-389730b-20260926",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3130/D3130en.pdf#page=12",
			"sourceLabel": "DEPRAG, brochure technique D3130en, p. 12, réf. 389730B",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine."
		}
	],
	"fieldSources": {
		"mpn": [
			"deprag-389730b-20260926"
		],
		"workingPressureBar": [
			"deprag-389730b-20260926"
		],
		"airflowLpm": [
			"deprag-389730b-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 1100,
		"typical": 1100,
		"max": 1100
	}
};

export default product;
