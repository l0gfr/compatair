const product = {
	"id": "biax-gaa-513",
	"slug": "biax-gaa-513",
	"brand": "BIAX",
	"model": "GAA 513",
	"mpn": "150619425",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "BIAX GAA 513",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-gaa-513.webp",
		"alt": "Repères techniques BIAX GAA 513, référence 150619425",
		"sourceUrl": "https://biax.de/wp-content/uploads/2025/02/BIAX_Schrauber_DE.pdf#page=14",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BIAX GAA 513, référence 150619425. Le tableau fabricant publie 300 L/min et une plage d’utilisation de 6 à 6 bar. Vitesse à vide publiée : 1300 tr/min. Masse publiée : 630 g.",
		"verifiedFacts": [
			"Le catalogue prescrit un fonctionnement à 6 bar dans la page de cette famille.",
			"Consommation publiée dans la ligne Luftverbrauch en L/min ; le régime de charge n’est pas détaillé.",
			"Référence fabricant : 150619425.",
			"Vitesse à vide publiée : 1300 tr/min.",
			"Masse publiée : 630 g."
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
				"biax-150619425-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée dans la ligne Luftverbrauch en L/min ; le régime de charge n’est pas détaillé.",
			"evidenceIds": [
				"biax-150619425-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "1300 tr/min",
			"evidenceIds": [
				"biax-150619425-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "630 g",
			"evidenceIds": [
				"biax-150619425-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150619425-20260926",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/02/BIAX_Schrauber_DE.pdf#page=14",
			"sourceLabel": "BIAX, catalogue des visseuses pneumatiques, p. 14, réf. 150619425",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée dans la ligne Luftverbrauch en L/min ; le régime de charge n’est pas détaillé."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150619425-20260926"
		],
		"workingPressureBar": [
			"biax-150619425-20260926"
		],
		"airflowLpm": [
			"biax-150619425-20260926"
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
