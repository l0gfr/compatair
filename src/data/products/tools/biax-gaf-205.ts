const product = {
	"id": "biax-gaf-205",
	"slug": "biax-gaf-205",
	"brand": "BIAX",
	"model": "GAF 205",
	"mpn": "150600715",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "BIAX GAF 205",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-gaf-205.webp",
		"alt": "Repères techniques BIAX GAF 205, référence 150600715",
		"sourceUrl": "https://biax.de/wp-content/uploads/2025/02/BIAX_Schrauber_DE.pdf#page=6",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BIAX GAF 205, référence 150600715. Le tableau fabricant publie 150 L/min et une plage d’utilisation de 6 à 6 bar. Vitesse à vide publiée : 500 tr/min. Masse publiée : 150 g.",
		"verifiedFacts": [
			"Le catalogue prescrit un fonctionnement à 6 bar dans la page de cette famille.",
			"Consommation publiée dans la ligne Luftverbrauch en L/min ; le régime de charge n’est pas détaillé.",
			"Référence fabricant : 150600715.",
			"Vitesse à vide publiée : 500 tr/min.",
			"Masse publiée : 150 g."
		],
		"limitations": [
			"Le réglage du couple dépend de l’assemblage et des ressorts prévus par le fabricant.",
			"L’aspiration des vis et les équipements auxiliaires peuvent demander un dimensionnement séparé."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue prescrit un fonctionnement à 6 bar dans la page de cette famille.",
			"evidenceIds": [
				"biax-150600715-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée dans la ligne Luftverbrauch en L/min ; le régime de charge n’est pas détaillé.",
			"evidenceIds": [
				"biax-150600715-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "500 tr/min",
			"evidenceIds": [
				"biax-150600715-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "150 g",
			"evidenceIds": [
				"biax-150600715-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150600715-20260926",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/02/BIAX_Schrauber_DE.pdf#page=6",
			"sourceLabel": "BIAX, catalogue des visseuses pneumatiques, p. 6, réf. 150600715",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée dans la ligne Luftverbrauch en L/min ; le régime de charge n’est pas détaillé."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150600715-20260926"
		],
		"workingPressureBar": [
			"biax-150600715-20260926"
		],
		"airflowLpm": [
			"biax-150600715-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 150,
		"typical": 150,
		"max": 150
	}
};

export default product;
