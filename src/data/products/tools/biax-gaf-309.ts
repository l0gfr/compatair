import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-gaf-309",
	"slug": "biax-gaf-309",
	"brand": "BIAX",
	"model": "GAF 309",
	"mpn": "150619525",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "BIAX GAF 309",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-gaf-309-20261106.svg",
		"alt": "Repères techniques BIAX GAF 309, référence 150619525",
		"sourceUrl": "https://biax.de/wp-content/uploads/2025/02/BIAX_Schrauber_DE.pdf#page=8",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BIAX GAF 309, référence 150619525. Le tableau fabricant publie 210 L/min et une plage d’utilisation de 6 à 6 bar. Vitesse à vide publiée : 900 tr/min. Masse publiée : 510 g.",
		"verifiedFacts": [
			"Le catalogue prescrit un fonctionnement à 6 bar dans la page de cette famille.",
			"Consommation publiée dans la ligne Luftverbrauch en L/min ; le régime de charge n’est pas détaillé.",
			"Référence fabricant : 150619525.",
			"Vitesse à vide publiée : 900 tr/min.",
			"Masse publiée : 510 g."
		],
		"limitations": [
			"Le réglage du couple dépend de l’assemblage et des ressorts prévus par le fabricant.",
			"L’aspiration des vis et les équipements auxiliaires peuvent demander un dimensionnement séparé.",
			"Le régime de consommation publié est non précisé. Cette valeur reste documentaire et le moteur renvoie insufficient_data."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue prescrit un fonctionnement à 6 bar dans la page de cette famille.",
			"evidenceIds": [
				"biax-150619525-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée dans la ligne Luftverbrauch en L/min ; le régime de charge n’est pas détaillé.",
			"evidenceIds": [
				"biax-150619525-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "900 tr/min",
			"evidenceIds": [
				"biax-150619525-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "510 g",
			"evidenceIds": [
				"biax-150619525-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150619525-20260926",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/02/BIAX_Schrauber_DE.pdf#page=8",
			"sourceLabel": "BIAX, catalogue des visseuses pneumatiques, p. 8, réf. 150619525",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée dans la ligne Luftverbrauch en L/min ; le régime de charge n’est pas détaillé."
		},
		{
			"id": "review:2026-11-06-followup:biax-gaf-309:1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/02/BIAX_Schrauber_DE.pdf#page=8",
			"sourceLabel": "BIAX, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "BIAXSchrauber p8 :GAF309 code150619525, consigne2–3gouttesminà6bar; voisineGAA309 etGAF205 distinctes. Le210Lmin ne porte ni régime ni pression de mesure explicite. Aucun calcul conclusif de débit avant confirmation. SHA-256 du document complet : 234541dfd789768204963f04e6df723f00c634bb38ced6d544e88ac762382718."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150619525-20260926"
		],
		"workingPressureBar": [
			"biax-150619525-20260926"
		],
		"airflowLpm": [
			"biax-150619525-20260926"
		],
		"airflowBasis": [
			"review:2026-11-06-followup:biax-gaf-309:1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 210,
		"typical": 210,
		"max": 210
	},
	"airflowBasis": "unqualified"
};

export default product;
