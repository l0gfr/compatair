import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-gaf-305",
	"slug": "biax-gaf-305",
	"brand": "BIAX",
	"model": "GAF 305",
	"mpn": "150619510",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "BIAX GAF 305",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-gaf-305.webp",
		"alt": "Repères techniques BIAX GAF 305, référence 150619510",
		"sourceUrl": "https://biax.de/wp-content/uploads/2025/02/BIAX_Schrauber_DE.pdf#page=8",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BIAX GAF 305. La GAF 305 donne 500 tr/min, 0,1–2,1 Nm sur assemblage dur et 0,1–2,0 Nm sur assemblage tendre. La GAF 309 atteint 900 tr/min avec d’autres plages, 0,1–1,4 et 0,1–1,5 Nm. Les ressorts de couple et la nature de l’assemblage comptent autant que le débit 210 L/min, dont le régime reste non précisé.",
		"verifiedFacts": [
			"Entraînement : E6,3, hexagonal 1/4 pouce.",
			"Couple, assemblage dur : 0,1–2,1 Nm.",
			"Couple, assemblage tendre : 0,1–2,0 Nm.",
			"Vitesse : 500 tr/min.",
			"Masse : 510 g.",
			"Consommation, régime non précisé : 210 L/min."
		],
		"limitations": [
			"Le régime de consommation n’est pas précisé ; la valeur reste non dimensionnante et le verdict demeure insufficient_data."
		]
	},
	"specifications": [
		{
			"label": "Entraînement",
			"value": "E6,3, hexagonal 1/4 pouce",
			"evidenceIds": [
				"biax-gaf-305-reserved-20261103-1"
			]
		},
		{
			"label": "Couple, assemblage dur",
			"value": "0,1–2,1 Nm",
			"evidenceIds": [
				"biax-gaf-305-reserved-20261103-1"
			]
		},
		{
			"label": "Couple, assemblage tendre",
			"value": "0,1–2,0 Nm",
			"evidenceIds": [
				"biax-gaf-305-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse",
			"value": "500 tr/min",
			"evidenceIds": [
				"biax-gaf-305-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "510 g",
			"evidenceIds": [
				"biax-gaf-305-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation, régime non précisé",
			"value": "210 L/min",
			"evidenceIds": [
				"biax-gaf-305-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150619510-20260926",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/02/BIAX_Schrauber_DE.pdf#page=8",
			"sourceLabel": "BIAX, catalogue des visseuses pneumatiques, p. 8, réf. 150619510",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée dans la ligne Luftverbrauch en L/min ; le régime de charge n’est pas détaillé."
		},
		{
			"id": "biax-gaf-305-reserved-20261103-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/02/BIAX_Schrauber_DE.pdf#page=8",
			"sourceLabel": "BIAX : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 234541dfd789768204963f04e6df723f00c634bb38ced6d544e88ac762382718. La GAF 305 donne 500 tr/min, 0,1–2,1 Nm sur assemblage dur et 0,1–2,0 Nm sur assemblage tendre. La GAF 309 atteint 900 tr/min avec d’autres plages, 0,1–1,4 et 0,1–1,5 Nm. Les ressorts de couple et la nature de l’assemblage comptent autant que le débit 210 L/min, dont le régime reste non précisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150619510-20260926"
		],
		"workingPressureBar": [
			"biax-150619510-20260926"
		],
		"airflowLpm": [
			"biax-150619510-20260926"
		],
		"airflowBasis": [
			"biax-gaf-305-reserved-20261103-1"
		],
		"editorial": [
			"biax-gaf-305-reserved-20261103-1"
		],
		"specifications": [
			"biax-gaf-305-reserved-20261103-1"
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
