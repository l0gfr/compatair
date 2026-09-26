const product = {
	"id": "deprag-345-6000-31ul-hm",
	"slug": "deprag-345-6000-31ul-hm",
	"brand": "DEPRAG",
	"model": "345-6000-31UL-HM",
	"mpn": "500107C",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "DEPRAG 345-6000-31UL-HM",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/deprag-345-6000-31ul-hm.webp",
		"alt": "Repères techniques DEPRAG 345-6000-31UL-HM, référence 500107C",
		"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3125/D3125en.pdf#page=3",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "DEPRAG 345-6000-31UL-HM, référence 500107C. Le tableau fabricant publie 100 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple minimal : 0.8 Ncm. Couple maximal : 30 Ncm.",
		"verifiedFacts": [
			"La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"Référence fabricant : 500107C.",
			"Couple minimal : 0.8 Ncm.",
			"Couple maximal : 30 Ncm.",
			"Vitesse à vide : 500 tr/min."
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
				"deprag-500107c-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"evidenceIds": [
				"deprag-500107c-20260926"
			]
		},
		{
			"label": "Couple minimal",
			"value": "0.8 Ncm",
			"evidenceIds": [
				"deprag-500107c-20260926"
			]
		},
		{
			"label": "Couple maximal",
			"value": "30 Ncm",
			"evidenceIds": [
				"deprag-500107c-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "500 tr/min",
			"evidenceIds": [
				"deprag-500107c-20260926"
			]
		},
		{
			"label": "Démarrage / exécution du catalogue",
			"value": "Remote Start in drive",
			"evidenceIds": [
				"deprag-500107c-20260926"
			]
		},
		{
			"label": "Type de corps / rotation",
			"value": "Spindle reversible, left shut-off,",
			"evidenceIds": [
				"deprag-500107c-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "deprag-500107c-20260926",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3125/D3125en.pdf#page=3",
			"sourceLabel": "DEPRAG, brochure technique D3125en, p. 3, réf. 500107C",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine."
		}
	],
	"fieldSources": {
		"mpn": [
			"deprag-500107c-20260926"
		],
		"workingPressureBar": [
			"deprag-500107c-20260926"
		],
		"airflowLpm": [
			"deprag-500107c-20260926"
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
