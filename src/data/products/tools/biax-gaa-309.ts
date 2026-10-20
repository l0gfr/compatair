import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-gaa-309",
	"slug": "biax-gaa-309",
	"brand": "BIAX",
	"model": "GAA 309",
	"mpn": "150619520",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "BIAX GAA 309",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-gaa-309.webp",
		"alt": "Repères techniques BIAX GAA 309, référence 150619520",
		"sourceUrl": "https://biax.de/wp-content/uploads/2025/02/BIAX_Schrauber_DE.pdf#page=13",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "GAA 309 150619520 : visseuse à aspiration intégrée de vis, démarrage par poussée et arrêt automatique à couple réglé. Elle publie 900 tr/min et 210 L/min à 6 bar. Le choix de la douille d’aspiration se fait avec la géométrie de tête et le diamètre de l’embout ; la GAF 309 voisine ne doit pas lui fournir une tête d’aspiration par analogie de nom.",
		"verifiedFacts": [
			"Le catalogue prescrit un fonctionnement à 6 bar dans la page de cette famille.",
			"Consommation publiée dans la ligne Luftverbrauch en L/min ; le régime de charge n’est pas détaillé.",
			"Référence fabricant : 150619520.",
			"Vitesse à vide publiée : 900 tr/min.",
			"Masse publiée : 510 g."
		],
		"limitations": [
			"Le tableau distingue joints durs et souples : 0,1–1,4 Nm et 0,1–1,5 Nm. Les 210 L/min ne sont pas qualifiés de maximum en charge ; les auxiliaires doivent être documentés.",
			"Le réglage du couple dépend de l’assemblage et des ressorts prévus par le fabricant.",
			"L’aspiration des vis et les équipements auxiliaires peuvent demander un dimensionnement séparé."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue prescrit un fonctionnement à 6 bar dans la page de cette famille.",
			"evidenceIds": [
				"biax-150619520-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée dans la ligne Luftverbrauch en L/min ; le régime de charge n’est pas détaillé.",
			"evidenceIds": [
				"biax-150619520-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "900 tr/min",
			"evidenceIds": [
				"biax-150619520-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "510 g",
			"evidenceIds": [
				"biax-150619520-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150619520-20260926",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/02/BIAX_Schrauber_DE.pdf#page=13",
			"sourceLabel": "BIAX, catalogue des visseuses pneumatiques, p. 13, réf. 150619520",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée dans la ligne Luftverbrauch en L/min ; le régime de charge n’est pas détaillé."
		},
		{
			"id": "biax-150619525-20260926",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/02/BIAX_Schrauber_DE.pdf#page=8",
			"sourceLabel": "BIAX, catalogue des visseuses pneumatiques, p. 8, réf. 150619525",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée dans la ligne Luftverbrauch en L/min ; le régime de charge n’est pas détaillé."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150619520-20260926"
		],
		"workingPressureBar": [
			"biax-150619520-20260926"
		],
		"airflowLpm": [
			"biax-150619520-20260926"
		],
		"airflowBasis": [
			"biax-150619520-20260926"
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
