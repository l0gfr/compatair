const product = {
	"id": "biax-gaa-313",
	"slug": "biax-gaa-313",
	"brand": "BIAX",
	"model": "GAA 313",
	"mpn": "150619535",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "BIAX GAA 313",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-gaa-313.webp",
		"alt": "Repères techniques BIAX GAA 313, référence 150619535",
		"sourceUrl": "https://biax.de/wp-content/uploads/2025/02/BIAX_Schrauber_DE.pdf#page=13",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BIAX GAA 313, référence 150619535. Le tableau fabricant publie 210 L/min et une plage d’utilisation de 6 à 6 bar. Vitesse à vide publiée : 1300 tr/min. Masse publiée : 510 g.",
		"verifiedFacts": [
			"Le catalogue prescrit un fonctionnement à 6 bar dans la page de cette famille.",
			"Consommation publiée dans la ligne Luftverbrauch en L/min ; le régime de charge n’est pas détaillé.",
			"Référence fabricant : 150619535.",
			"Vitesse à vide publiée : 1300 tr/min.",
			"Masse publiée : 510 g."
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
				"biax-150619535-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée dans la ligne Luftverbrauch en L/min ; le régime de charge n’est pas détaillé.",
			"evidenceIds": [
				"biax-150619535-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "1300 tr/min",
			"evidenceIds": [
				"biax-150619535-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "510 g",
			"evidenceIds": [
				"biax-150619535-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150619535-20260926",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/02/BIAX_Schrauber_DE.pdf#page=13",
			"sourceLabel": "BIAX, catalogue des visseuses pneumatiques, p. 13, réf. 150619535",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée dans la ligne Luftverbrauch en L/min ; le régime de charge n’est pas détaillé."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150619535-20260926"
		],
		"workingPressureBar": [
			"biax-150619535-20260926"
		],
		"airflowLpm": [
			"biax-150619535-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 210,
		"typical": 210,
		"max": 210
	}
};

export default product;
