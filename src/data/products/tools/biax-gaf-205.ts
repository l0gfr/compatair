import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
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
		"overview": "BIAX GAF 205. Le document propre à cette référence publie une consommation sans préciser son régime de mesure. Le débit en charge maximal reste à confirmer auprès du fabricant. Le catalogue prescrit un fonctionnement à 6 bar dans la page de cette famille. Référence fabricant : 150600715. Vitesse à vide publiée : 500 tr/min. Masse publiée : 150 g.",
		"verifiedFacts": [
			"Le catalogue prescrit un fonctionnement à 6 bar dans la page de cette famille.",
			"Référence fabricant : 150600715.",
			"Vitesse à vide publiée : 500 tr/min.",
			"Masse publiée : 150 g.",
			"Consommation de régime non précisé publiée : 150 L/min."
		],
		"limitations": [
			"Le réglage du couple dépend de l’assemblage et des ressorts prévus par le fabricant.",
			"L’aspiration des vis et les équipements auxiliaires peuvent demander un dimensionnement séparé.",
			"Le document propre à cette référence publie une consommation sans préciser son régime de mesure. Le débit en charge maximal reste à confirmer auprès du fabricant."
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
			"value": "Consommation de régime non précisé publiée : 150 L/min.",
			"evidenceIds": [
				"biax-gaf-205-reserved-20261031-1"
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
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":150,\"typical\":150,\"max\":150},\"workingPressureBar\":{\"min\":6,\"typical\":6,\"max\":6}}",
			"evidenceIds": [
				"biax-150600715-20260926",
				"biax-gaf-205-reserved-20261031-1"
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
		},
		{
			"id": "biax-gaf-205-reserved-20261031-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/02/BIAX_Schrauber_DE.pdf#page=6",
			"sourceLabel": "BIAX GAF 205 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 234541dfd789768204963f04e6df723f00c634bb38ced6d544e88ac762382718. Le document propre à cette référence publie une consommation sans préciser son régime de mesure. Le débit en charge maximal reste à confirmer auprès du fabricant."
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
		],
		"airflowBasis": [
			"biax-gaf-205-reserved-20261031-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 150,
		"typical": 150,
		"max": 150
	},
	"airflowBasis": "unqualified"
};

export default product;
