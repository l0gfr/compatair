const product = {
	"id": "deprag-344-349u",
	"slug": "deprag-344-349u",
	"brand": "DEPRAG",
	"model": "344-349U",
	"mpn": "411448D",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "DEPRAG 344-349U",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/deprag-344-349u.webp",
		"alt": "Repères techniques DEPRAG 344-349U, référence 411448D",
		"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3435/D3435en.pdf#page=3",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "DEPRAG 344-349U, référence 411448D. Le tableau fabricant publie 1 000 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple minimal : 3 Nm. Couple maximal, assemblage souple : 6.5 Nm.",
		"verifiedFacts": [
			"La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"Référence fabricant : 411448D.",
			"Couple minimal : 3 Nm.",
			"Couple maximal, assemblage souple : 6.5 Nm.",
			"Couple maximal, assemblage dur : 8.5 Nm."
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
				"deprag-411448d-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"evidenceIds": [
				"deprag-411448d-20260926"
			]
		},
		{
			"label": "Couple minimal",
			"value": "3 Nm",
			"evidenceIds": [
				"deprag-411448d-20260926"
			]
		},
		{
			"label": "Couple maximal, assemblage souple",
			"value": "6.5 Nm",
			"evidenceIds": [
				"deprag-411448d-20260926"
			]
		},
		{
			"label": "Couple maximal, assemblage dur",
			"value": "8.5 Nm",
			"evidenceIds": [
				"deprag-411448d-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2300 tr/min",
			"evidenceIds": [
				"deprag-411448d-20260926"
			]
		},
		{
			"label": "Démarrage / exécution du catalogue",
			"value": "Upper air-inlet, lower air-inlet or rear air-inlet",
			"evidenceIds": [
				"deprag-411448d-20260926"
			]
		},
		{
			"label": "Type de corps / rotation",
			"value": "Reversible, push-to-start",
			"evidenceIds": [
				"deprag-411448d-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "deprag-411448d-20260926",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3435/D3435en.pdf#page=3",
			"sourceLabel": "DEPRAG, brochure technique D3435en, p. 3, réf. 411448D",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine."
		}
	],
	"fieldSources": {
		"mpn": [
			"deprag-411448d-20260926"
		],
		"workingPressureBar": [
			"deprag-411448d-20260926"
		],
		"airflowLpm": [
			"deprag-411448d-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 1000,
		"typical": 1000,
		"max": 1000
	}
};

export default product;
