import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "yokota-yltx150",
	"slug": "yokota-yltx150",
	"brand": "Yokota",
	"model": "YLTX150",
	"mpn": "YLTX150",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Yokota YLTX150",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 5,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-yltx150.webp",
		"alt": "Repères techniques Yokota YLTX150, référence YLTX150",
		"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=17",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Yokota YLTX150, référence YLTX150. Le tableau fabricant publie 1 020 L/min et une plage d’utilisation de 5 à 6 bar. Couple indicatif publié : 140 à 210 Nm. Vitesse à vide : 4400 tr/min.",
		"verifiedFacts": [
			"La plage du tableau Yokota va de 0,5 à 0,6 MPa, soit 5 à 6 bar ; le point de comparaison retenu est 6 bar.",
			"Le maximum entre la consommation en charge et à vide est retenu : 17 L/s, convertis en 1020 L/min par multiplication par 60.",
			"Référence fabricant : YLTX150.",
			"Couple indicatif publié : 140 à 210 Nm.",
			"Vitesse à vide : 4400 tr/min.",
			"Entraînement : 3/4\" carré."
		],
		"limitations": [
			"Les couples indiqués sont des valeurs indicatives, sensibles à l’assemblage et à l’accessoire.",
			"La pression doit être vérifiée pendant le fonctionnement ; la pression statique du réservoir ne suffit pas."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La plage du tableau Yokota va de 0,5 à 0,6 MPa, soit 5 à 6 bar ; le point de comparaison retenu est 6 bar.",
			"evidenceIds": [
				"yokota-yltx150-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Le maximum entre la consommation en charge et à vide est retenu : 17 L/s, convertis en 1020 L/min par multiplication par 60.",
			"evidenceIds": [
				"yokota-yltx150-20260926"
			]
		},
		{
			"label": "Couple indicatif publié",
			"value": "140 à 210 Nm",
			"evidenceIds": [
				"yokota-yltx150-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "4400 tr/min",
			"evidenceIds": [
				"yokota-yltx150-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "3/4\" carré",
			"evidenceIds": [
				"yokota-yltx150-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2,95 kg",
			"evidenceIds": [
				"yokota-yltx150-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "9,5 mm",
			"evidenceIds": [
				"yokota-yltx150-20260926"
			]
		},
		{
			"label": "Consommation en charge / à vide",
			"value": "11.8 / 17.0 L/s",
			"evidenceIds": [
				"yokota-yltx150-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-yltx150-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=17",
			"sourceLabel": "Rami Yokota, catalogue assemblage 2026, p. 17, réf. YLTX150",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le maximum entre la consommation en charge et à vide est retenu : 17 L/s, convertis en 1020 L/min par multiplication par 60."
		},
		{
			"id": "yokota-yltx150-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=17",
			"sourceLabel": "Rami Yokota, catalogue assemblage 2026, p. 17",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Condition de pression spécifique du tableau Yokota à impulsions."
		}
	],
	"fieldSources": {
		"mpn": [
			"yokota-yltx150-20260926"
		],
		"workingPressureBar": [
			"yokota-yltx150-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"yokota-yltx150-20260926"
		],
		"recommendedHose": [
			"yokota-yltx150-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 1020,
		"typical": 1020,
		"max": 1020
	},
	"recommendedHose": {
		"innerDiameterMm": 9.5
	}
};

export default product;
