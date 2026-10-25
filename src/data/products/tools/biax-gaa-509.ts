import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-gaa-509",
	"slug": "biax-gaa-509",
	"brand": "BIAX",
	"model": "GAA 509",
	"mpn": "150619405",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "BIAX GAA 509",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-gaa-509.webp",
		"alt": "Repères techniques BIAX GAA 509, référence 150619405",
		"sourceUrl": "https://biax.de/wp-content/uploads/2025/02/BIAX_Schrauber_DE.pdf#page=14",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "GAA 509 : visseuse à aspiration de vis intégrée, démarrage par poussée et arrêt automatique. Elle annonce 900 tr/min et 0,4–3,5 Nm en assemblage dur, contre 500 tr/min et 0,3–4,0 Nm pour la GAA 505. Les deux consomment 300 L/min dans le tableau, à une alimentation prescrite de 6 bar.",
		"verifiedFacts": [
			"GAA 509 et GAA 505 intègrent l’aspiration de vis : 900 contre 500 tr/min ; couple en assemblage dur 0,4–3,5 contre 0,3–4,0 Nm. Consommation publiée de 300 L/min et masse de 630 g identiques.",
			"Le régime de la consommation publiée n’est pas précisé ; cette valeur n’est pas assimilée à un maximum de travail."
		],
		"limitations": [
			"Le régime de Luftverbrauch n’est pas qualifié.",
			"La plage en assemblage souple de la GAA 509 est 0,4–3,0 Nm, distincte de celle en assemblage dur.",
			"Le tableau ne sépare pas la consommation du moteur de celle de l’aspiration intégrée : ne pas prétendre que 300 L/min exclut ou inclut un auxiliaire externe."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue prescrit un fonctionnement à 6 bar dans la page de cette famille.",
			"evidenceIds": [
				"biax-150619405-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée dans la ligne Luftverbrauch en L/min ; le régime de charge n’est pas détaillé.",
			"evidenceIds": [
				"biax-150619405-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "900 tr/min",
			"evidenceIds": [
				"biax-150619405-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "630 g",
			"evidenceIds": [
				"biax-150619405-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150619405-20260926",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/02/BIAX_Schrauber_DE.pdf#page=14",
			"sourceLabel": "BIAX, catalogue des visseuses pneumatiques, p. 14, réf. 150619405",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée dans la ligne Luftverbrauch en L/min ; le régime de charge n’est pas détaillé."
		},
		{
			"id": "review-20261025-biax-gaa-509-s043",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/02/BIAX_Schrauber_DE.pdf#page=14",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s043, pages PDF 14",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:34.968557+00:00, SHA-256 234541dfd789768204963f04e6df723f00c634bb38ced6d544e88ac762382718. GAA 509 et GAA 505 intègrent l’aspiration de vis : 900 contre 500 tr/min ; couple en assemblage dur 0,4–3,5 contre 0,3–4,0 Nm. Consommation publiée de 300 L/min et masse de 630 g identiques. Limite : Le régime de Luftverbrauch n’est pas qualifié ; ajouter airflowBasis=unqualified."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150619405-20260926"
		],
		"workingPressureBar": [
			"biax-150619405-20260926"
		],
		"airflowLpm": [
			"biax-150619405-20260926",
			"review-20261025-biax-gaa-509-s043"
		],
		"airflowBasis": [
			"review-20261025-biax-gaa-509-s043"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : Le régime de Luftverbrauch n’est pas qualifié ; ajouter airflowBasis=unqualified."
	],
	"airflowLpm": {
		"min": 300,
		"typical": 300,
		"max": 300
	},
	"airflowBasis": "unqualified"
};

export default product;
