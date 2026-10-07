import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "yokota-yltx60a",
	"slug": "yokota-yltx60a",
	"brand": "Yokota",
	"model": "YLTX60A",
	"mpn": "YLTX60A",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Yokota YLTX60A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 5,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-yltx60a.webp",
		"alt": "Repères techniques Yokota YLTX60A, référence YLTX60A",
		"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=17",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Yokota YLTX60A, référence YLTX60A. Le tableau fabricant publie 336 L/min et une plage d’utilisation de 5 à 6 bar. Couple indicatif publié : 6 à 13 Nm. Vitesse à vide : 5300 tr/min.",
		"verifiedFacts": [
			"La plage du tableau Yokota va de 0,5 à 0,6 MPa, soit 5 à 6 bar ; le point de comparaison retenu est 6 bar.",
			"Le maximum entre la consommation en charge et à vide est retenu : 5.6 L/s, convertis en 336 L/min par multiplication par 60.",
			"Référence fabricant : YLTX60A.",
			"Couple indicatif publié : 6 à 13 Nm.",
			"Vitesse à vide : 5300 tr/min.",
			"Entraînement : 1/4\" 6 pans."
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
				"yokota-yltx60a-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Le maximum entre la consommation en charge et à vide est retenu : 5.6 L/s, convertis en 336 L/min par multiplication par 60.",
			"evidenceIds": [
				"yokota-yltx60a-20260926"
			]
		},
		{
			"label": "Couple indicatif publié",
			"value": "6 à 13 Nm",
			"evidenceIds": [
				"yokota-yltx60a-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "5300 tr/min",
			"evidenceIds": [
				"yokota-yltx60a-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "1/4\" 6 pans",
			"evidenceIds": [
				"yokota-yltx60a-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,95 kg",
			"evidenceIds": [
				"yokota-yltx60a-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "6,5 mm",
			"evidenceIds": [
				"yokota-yltx60a-20260926"
			]
		},
		{
			"label": "Consommation en charge / à vide",
			"value": "5.5 / 5.6 L/s",
			"evidenceIds": [
				"yokota-yltx60a-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-yltx60a-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=17",
			"sourceLabel": "Rami Yokota, catalogue assemblage 2026, p. 17, réf. YLTX60A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le maximum entre la consommation en charge et à vide est retenu : 5.6 L/s, convertis en 336 L/min par multiplication par 60."
		},
		{
			"id": "yokota-yltx60a-20260926-workingpressurebar-1",
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
			"yokota-yltx60a-20260926"
		],
		"workingPressureBar": [
			"yokota-yltx60a-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"yokota-yltx60a-20260926"
		],
		"recommendedHose": [
			"yokota-yltx60a-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 336,
		"typical": 336,
		"max": 336
	},
	"recommendedHose": {
		"innerDiameterMm": 6.5
	}
};

export default product;
