import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
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
		"overview": "GAA 313 150619535 : visseuse à aspiration intégrée de vis, démarrage par poussée et arrêt à couple réglé, à 1 300 tr/min. La GAA 309 voisine tourne à 900 tr/min ; les plages publiées diffèrent aussi entre joints durs et souples : 0,2–1,3 et 0,2–1,4 Nm pour la 313. Les 210 L/min communs à 6 bar ne choisissent ni la douille d’aspiration ni l’embout adapté à la tête de vis.",
		"verifiedFacts": [
			"Le catalogue prescrit un fonctionnement à 6 bar dans la page de cette famille.",
			"Consommation publiée dans la ligne Luftverbrauch en L/min ; le régime de charge n’est pas détaillé.",
			"Référence fabricant : 150619535.",
			"Vitesse à vide publiée : 1300 tr/min.",
			"Masse publiée : 510 g."
		],
		"limitations": [
			"La géométrie de tête, le diamètre intérieur de la douille et la queue d’embout doivent rester compatibles. Le régime de consommation n’est pas précisé.",
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
		},
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
			"biax-150619535-20260926"
		],
		"workingPressureBar": [
			"biax-150619535-20260926"
		],
		"airflowLpm": [
			"biax-150619535-20260926"
		],
		"airflowBasis": [
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
	},
	"airflowBasis": "unqualified"
};

export default product;
