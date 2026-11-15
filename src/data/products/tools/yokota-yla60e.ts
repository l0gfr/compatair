import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "yokota-yla60e",
	"slug": "yokota-yla60e",
	"brand": "Yokota",
	"model": "YLA60E",
	"mpn": "YLA60E",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Yokota YLA60E",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-yla60e-technical-20261115-followup.svg",
		"alt": "Repères techniques Yokota YLA60E, référence YLA60E",
		"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
	},
	"editorial": {
		"overview": "Yokota YLA60E : clé à impulsions sans coupure, carré 3/8 pouce, couple indicatif 13–22 Nm et masse 0,78 kg. La YLA60A utilise un hexagonal 1/4 pouce et couvre 9–20 Nm ; la YLA70E monte à 20–35 Nm et 7 000 tr/min. Le tableau distingue 5 L/s en charge de 5,5 L/s à vide pour la YLA60E.",
		"verifiedFacts": [
			"Carré : 3/8 pouce.",
			"Couple indicatif : 13–22 Nm, colonne 0,5–0,6 MPa.",
			"Vitesse à vide : 4 000 tr/min.",
			"Masse : 0,78 kg.",
			"Consommation en charge, hors calcul : 5 L/s.",
			"Consommation à vide, hors calcul : 5,5 L/s."
		],
		"limitations": [
			"La consommation en charge est documentée, mais son appariement à une pression de mesure n’est pas établi. Les consignes de service restent séparées ; la compatibilité demeure indéterminée.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer.",
			"Les couples publiés restent liés aux conditions d’assemblage ; aucune économie par cycle n’est déduite."
		]
	},
	"specifications": [
		{
			"label": "Carré",
			"value": "3/8 pouce",
			"evidenceIds": [
				"review:2026-11-12-technical:yokota-yla60e:0"
			]
		},
		{
			"label": "Couple indicatif",
			"value": "13–22 Nm, colonne 0,5–0,6 MPa",
			"evidenceIds": [
				"review:2026-11-12-technical:yokota-yla60e:0"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "4 000 tr/min",
			"evidenceIds": [
				"review:2026-11-12-technical:yokota-yla60e:0"
			]
		},
		{
			"label": "Masse",
			"value": "0,78 kg",
			"evidenceIds": [
				"review:2026-11-12-technical:yokota-yla60e:0"
			]
		},
		{
			"label": "Consommation en charge, hors calcul",
			"value": "5 L/s",
			"evidenceIds": [
				"review:2026-11-12-technical:yokota-yla60e:0"
			]
		},
		{
			"label": "Consommation à vide, hors calcul",
			"value": "5,5 L/s",
			"evidenceIds": [
				"review:2026-11-12-technical:yokota-yla60e:0"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-yla60e-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=17",
			"sourceLabel": "Rami Yokota, catalogue assemblage 2026, p. 17, réf. YLA60E",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le maximum entre la consommation en charge et à vide est retenu : 5.5 L/s, convertis en 330 L/min par multiplication par 60."
		},
		{
			"id": "yokota-yla60e-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=17",
			"sourceLabel": "Rami Yokota, catalogue assemblage 2026, p. 17",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Condition de pression spécifique du tableau Yokota à impulsions."
		},
		{
			"id": "review:2026-11-12-technical:yokota-yla60e:0",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf",
			"sourceLabel": "Yokota, document fabricant, pages PDF 17",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "Yokota YLA60E : clé à impulsions sans coupure, carré 3/8 pouce, couple indicatif 13–22 Nm et masse 0,78 kg. La YLA60A utilise un hexagonal 1/4 pouce et couvre 9–20 Nm ; la YLA70E monte à 20–35 Nm et 7 000 tr/min. Le tableau distingue 5 L/s en charge de 5,5 L/s à vide pour la YLA60E. GET complet : SHA-256 6b7dca4923bfef1dbe2c7f6691e91e07f92fec5c1fa3b8d56f211ecbdb5e4845. Historique conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-12-technical:yokota-yla60e:0"
		],
		"demandExplanation": [
			"review:2026-11-12-technical:yokota-yla60e:0"
		],
		"workingPressureBar": [
			"review:2026-11-12-technical:yokota-yla60e:0"
		]
	},
	"notes": [
		"La consommation en charge est documentée, mais son appariement à une pression de mesure n’est pas établi. Les consignes de service restent séparées ; la compatibilité demeure indéterminée."
	],
	"recommendedHose": {
		"innerDiameterMm": 6.5
	},
	"demandExplanation": "La consommation en charge est documentée, mais son appariement à une pression de mesure n’est pas établi. Les consignes de service restent séparées ; la compatibilité demeure indéterminée."
};

export default product;
