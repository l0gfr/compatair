import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "yokota-yla70a",
	"slug": "yokota-yla70a",
	"brand": "Yokota",
	"model": "YLA70A",
	"mpn": "YLA70A",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Yokota YLA70A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 5,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-yla70a.webp",
		"alt": "Repères techniques Yokota YLA70A, référence YLA70A",
		"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=17",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Yokota YLA70A, référence YLA70A. Le tableau fabricant publie 366 L/min et une plage d’utilisation de 5 à 6 bar. Couple indicatif publié : 20 à 28 Nm. Vitesse à vide : 7000 tr/min.",
		"verifiedFacts": [
			"La plage du tableau Yokota va de 0,5 à 0,6 MPa, soit 5 à 6 bar ; le point de comparaison retenu est 6 bar.",
			"Le maximum entre la consommation en charge et à vide est retenu : 6.1 L/s, convertis en 366 L/min par multiplication par 60.",
			"Référence fabricant : YLA70A.",
			"Couple indicatif publié : 20 à 28 Nm.",
			"Vitesse à vide : 7000 tr/min.",
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
				"yokota-yla70a-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Le maximum entre la consommation en charge et à vide est retenu : 6.1 L/s, convertis en 366 L/min par multiplication par 60.",
			"evidenceIds": [
				"yokota-yla70a-20260926"
			]
		},
		{
			"label": "Couple indicatif publié",
			"value": "20 à 28 Nm",
			"evidenceIds": [
				"yokota-yla70a-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "7000 tr/min",
			"evidenceIds": [
				"yokota-yla70a-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "1/4\" 6 pans",
			"evidenceIds": [
				"yokota-yla70a-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,8 kg",
			"evidenceIds": [
				"yokota-yla70a-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "6,5 mm",
			"evidenceIds": [
				"yokota-yla70a-20260926"
			]
		},
		{
			"label": "Consommation en charge / à vide",
			"value": "5.5 / 6.1 L/s",
			"evidenceIds": [
				"yokota-yla70a-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-yla70a-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=17",
			"sourceLabel": "Rami Yokota, catalogue assemblage 2026, p. 17, réf. YLA70A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le maximum entre la consommation en charge et à vide est retenu : 6.1 L/s, convertis en 366 L/min par multiplication par 60."
		},
		{
			"id": "yokota-yla70a-20260926-workingpressurebar-1",
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
			"yokota-yla70a-20260926"
		],
		"workingPressureBar": [
			"yokota-yla70a-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"yokota-yla70a-20260926"
		],
		"recommendedHose": [
			"yokota-yla70a-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 366,
		"typical": 366,
		"max": 366
	},
	"recommendedHose": {
		"innerDiameterMm": 6.5
	}
};

export default product;
