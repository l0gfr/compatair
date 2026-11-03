import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "yokota-yla140e",
	"slug": "yokota-yla140e",
	"brand": "Yokota",
	"model": "YLA140E",
	"mpn": "YLA140E",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Yokota YLA140E",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-yla140e.webp",
		"alt": "Repères techniques Yokota YLA140E, référence YLA140E",
		"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=17",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Yokota YLA140E. La YLA140E sans coupure d’air donne 100–160 Nm pour la plage de couple 0,5–0,6 MPa. La YLA120E donne 80–130 Nm et 1,8 kg, contre 2,2 kg ici. Le tableau sépare 13 L/s à plein régime et 18,9 L/s à vide. L’ancien maximum des deux colonnes retenait le débit à vide ; il est retiré du moteur. La plage de pression inscrite pour le couple ne devient pas une pression exacte de consommation.",
		"verifiedFacts": [
			"Carré : 1/2 pouce.",
			"Calibre de vissage : M14.",
			"Couple indicatif à 0,5–0,6 MPa : 100–160 Nm.",
			"Vitesse à vide : 6 000 tr/min.",
			"Masse : 2,2 kg.",
			"Consommation à plein régime publiée : 13 L/s.",
			"Consommation à vide distincte : 18,9 L/s."
		],
		"limitations": [
			"Régime et pression de mesure ne sont pas complétés par hypothèse. Les données non dimensionnantes restent dans les spécifications.",
			"Catalogue constructeur historique ; configuration livrée et disponibilité actuelles à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Carré",
			"value": "1/2 pouce",
			"evidenceIds": [
				"yokota-yla140e-reserved-20261103-1"
			]
		},
		{
			"label": "Calibre de vissage",
			"value": "M14",
			"evidenceIds": [
				"yokota-yla140e-reserved-20261103-1"
			]
		},
		{
			"label": "Couple indicatif à 0,5–0,6 MPa",
			"value": "100–160 Nm",
			"evidenceIds": [
				"yokota-yla140e-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "6 000 tr/min",
			"evidenceIds": [
				"yokota-yla140e-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "2,2 kg",
			"evidenceIds": [
				"yokota-yla140e-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation à plein régime publiée",
			"value": "13 L/s",
			"evidenceIds": [
				"yokota-yla140e-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation à vide distincte",
			"value": "18,9 L/s",
			"evidenceIds": [
				"yokota-yla140e-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-yla140e-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=17",
			"sourceLabel": "Rami Yokota, catalogue assemblage 2026, p. 17, réf. YLA140E",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le maximum entre la consommation en charge et à vide est retenu : 18.9 L/s, convertis en 1134 L/min par multiplication par 60."
		},
		{
			"id": "yokota-yla140e-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=17",
			"sourceLabel": "Rami Yokota, catalogue assemblage 2026, p. 17",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Condition de pression spécifique du tableau Yokota à impulsions."
		},
		{
			"id": "yokota-yla140e-reserved-20261103-1",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=17",
			"sourceLabel": "Yokota : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 6b7dca4923bfef1dbe2c7f6691e91e07f92fec5c1fa3b8d56f211ecbdb5e4845. La YLA140E sans coupure d’air donne 100–160 Nm pour la plage de couple 0,5–0,6 MPa. La YLA120E donne 80–130 Nm et 1,8 kg, contre 2,2 kg ici. Le tableau sépare 13 L/s à plein régime et 18,9 L/s à vide. L’ancien maximum des deux colonnes retenait le débit à vide ; il est retiré du moteur. La plage de pression inscrite pour le couple ne devient pas une pression exacte de consommation."
		}
	],
	"fieldSources": {
		"mpn": [
			"yokota-yla140e-20260926"
		],
		"workingPressureBar": [
			"yokota-yla140e-reserved-20261103-1"
		],
		"recommendedHose": [
			"yokota-yla140e-20260926"
		],
		"demandModel": [
			"yokota-yla140e-reserved-20261103-1"
		],
		"demandExplanation": [
			"yokota-yla140e-reserved-20261103-1"
		],
		"editorial": [
			"yokota-yla140e-reserved-20261103-1"
		],
		"specifications": [
			"yokota-yla140e-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"recommendedHose": {
		"innerDiameterMm": 9.5
	},
	"demandExplanation": "Consommations et régimes conservés dans les spécifications ; pression de mesure exacte non appariée par le document."
};

export default product;
