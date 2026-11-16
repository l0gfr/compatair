import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-gaf-505",
	"slug": "biax-gaf-505",
	"brand": "BIAX",
	"model": "GAF 505",
	"mpn": "150619455",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "BIAX GAF 505",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-gaf-505-technical-20261116-reviews.svg",
		"alt": "Repères techniques BIAX GAF 505, référence 150619455",
		"sourceUrl": "https://biax.de/wp-content/uploads/2025/02/BIAX_Schrauber_DE.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "La GAF 505 est la visseuse réversible à arrêt automatique et démarrage par poussée de 500 tr/min. Les GAF 509 et 513 passent à 900 et 1 300 tr/min pour la même masse de 630 g. La consigne de lubrification à 6 bar ne qualifie pas la pression de mesure des 300 L/min publiés ; ils restent documentaires.",
		"verifiedFacts": [
			"Le catalogue prescrit un fonctionnement à 6 bar dans la page de cette famille.",
			"Consommation publiée dans la ligne Luftverbrauch en L/min ; le régime de charge n’est pas détaillé.",
			"Référence fabricant : 150619455.",
			"Vitesse à vide publiée : 500 tr/min.",
			"Masse publiée : 630 g."
		],
		"limitations": [
			"Le réglage du couple dépend de l’assemblage et des ressorts prévus par le fabricant.",
			"L’aspiration des vis et les équipements auxiliaires peuvent demander un dimensionnement séparé.",
			"La pression de service publiée ne précise pas la pression de mesure de la consommation. Le débit documentaire reste hors du calcul de compatibilité."
		]
	},
	"specifications": [
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée dans la ligne Luftverbrauch en L/min ; le régime de charge n’est pas détaillé.",
			"evidenceIds": [
				"biax-150619455-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "500 tr/min",
			"evidenceIds": [
				"biax-150619455-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "630 g",
			"evidenceIds": [
				"biax-150619455-20260926"
			]
		},
		{
			"label": "Consommation documentaire, hors calcul",
			"value": "300 L/min ; pression de mesure non établie",
			"evidenceIds": [
				"review:2026-11-16-reviews:biax-gaf-505:0"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150619455-20260926",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/02/BIAX_Schrauber_DE.pdf#page=8",
			"sourceLabel": "BIAX, catalogue des visseuses pneumatiques, p. 8, réf. 150619455",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée dans la ligne Luftverbrauch en L/min ; le régime de charge n’est pas détaillé."
		},
		{
			"id": "review:2026-11-16-reviews:biax-gaf-505:0",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/02/BIAX_Schrauber_DE.pdf",
			"sourceLabel": "BIAX, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La GAF 505 est la visseuse réversible à arrêt automatique et démarrage par poussée de 500 tr/min. Les GAF 509 et 513 passent à 900 et 1 300 tr/min pour la même masse de 630 g. La consigne de lubrification à 6 bar ne qualifie pas la pression de mesure des 300 L/min publiés ; ils restent documentaires. GET complet SHA-256 234541dfd789768204963f04e6df723f00c634bb38ced6d544e88ac762382718. Pages PDF lues : 8."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150619455-20260926"
		],
		"workingPressureBar": [
			"review:2026-11-16-reviews:biax-gaf-505:0"
		],
		"demandExplanation": [
			"review:2026-11-16-reviews:biax-gaf-505:0"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "La pression de service publiée ne précise pas la pression de mesure de la consommation. Le débit documentaire reste hors du calcul de compatibilité."
};

export default product;
