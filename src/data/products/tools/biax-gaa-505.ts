import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-gaa-505",
	"slug": "biax-gaa-505",
	"brand": "BIAX",
	"model": "GAA 505",
	"mpn": "150619445",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "BIAX GAA 505",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-gaa-505.webp",
		"alt": "Repères techniques BIAX GAA 505, référence 150619445",
		"sourceUrl": "https://biax.de/wp-content/uploads/2025/02/BIAX_Schrauber_DE.pdf#page=14",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "GAA 505, référence 150619445, offre 0,3 à 4,0 Nm sur assemblage dur et 0,3 à 3,5 Nm sur assemblage souple ; le GAA 205 voisin publie 0,04 à 1,1 Nm dans les deux cas. Le porte-outil E6,3 du GAA 505 reçoit des embouts hexagonaux de 1/4 pouce, tandis que le GAA 205 emploie un hexagone A3 de 3 mm. Tous deux tournent à 500 tr/min et intègrent l’aspiration des vis, dont la douille doit être choisie avec la tête de vis et l’embout. Leurs consommations publiées sont respectivement 300 et 150 l/min à la consigne de 6 bar, sans régime de charge détaillé dans ce tableau.",
		"verifiedFacts": [
			"Le catalogue prescrit un fonctionnement à 6 bar dans la page de cette famille.",
			"Consommation publiée dans la ligne Luftverbrauch en L/min ; le régime de charge n’est pas détaillé.",
			"Référence fabricant : 150619445.",
			"Vitesse à vide publiée : 500 tr/min.",
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
				"biax-150619445-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée dans la ligne Luftverbrauch en L/min ; le régime de charge n’est pas détaillé.",
			"evidenceIds": [
				"biax-150619445-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "500 tr/min",
			"evidenceIds": [
				"biax-150619445-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "630 g",
			"evidenceIds": [
				"biax-150619445-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150619445-20260926",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/02/BIAX_Schrauber_DE.pdf#page=14",
			"sourceLabel": "BIAX, catalogue des visseuses pneumatiques, p. 14, réf. 150619445",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée dans la ligne Luftverbrauch en L/min ; le régime de charge n’est pas détaillé."
		},
		{
			"id": "biax-150600720-20260926",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/02/BIAX_Schrauber_DE.pdf#page=12",
			"sourceLabel": "BIAX, catalogue des visseuses pneumatiques, p. 12, réf. 150600720",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée dans la ligne Luftverbrauch en L/min ; le régime de charge n’est pas détaillé."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150619445-20260926"
		],
		"workingPressureBar": [
			"biax-150619445-20260926"
		],
		"airflowLpm": [
			"biax-150619445-20260926"
		],
		"airflowBasis": [
			"biax-150619445-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 300,
		"typical": 300,
		"max": 300
	},
	"airflowBasis": "unqualified"
};

export default product;
