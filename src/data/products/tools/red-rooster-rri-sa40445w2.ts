import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rri-sa40445w2",
	"slug": "red-rooster-rri-sa40445w2",
	"brand": "Red Rooster",
	"model": "RRI-SA40445W2",
	"mpn": "RRI-SA40445W2",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Red Rooster RRI-SA40445W2",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rri-sa40445w2.webp",
		"alt": "Repères techniques Red Rooster RRI-SA40445W2, référence RRI-SA40445W2",
		"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=29",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Red Rooster RRI-SA40445W2, référence RRI-SA40445W2. Le tableau fabricant publie 1 140 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple indicatif publié : 20 à 45 Nm. Vitesse à vide : 280 tr/min.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 19 L/s, convertis en 1140 L/min par multiplication par 60.",
			"Référence fabricant : RRI-SA40445W2.",
			"Couple indicatif publié : 20 à 45 Nm.",
			"Vitesse à vide : 280 tr/min.",
			"Masse publiée : 2,1 kg."
		],
		"limitations": [
			"Les couples indiqués sont des valeurs indicatives, sensibles à l’assemblage et à l’accessoire.",
			"La pression doit être vérifiée pendant le fonctionnement ; la pression statique du réservoir ne suffit pas."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"evidenceIds": [
				"red-rooster-rri-sa40445w2-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 19 L/s, convertis en 1140 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rri-sa40445w2-20260926"
			]
		},
		{
			"label": "Couple indicatif publié",
			"value": "20 à 45 Nm",
			"evidenceIds": [
				"red-rooster-rri-sa40445w2-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "280 tr/min",
			"evidenceIds": [
				"red-rooster-rri-sa40445w2-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2,1 kg",
			"evidenceIds": [
				"red-rooster-rri-sa40445w2-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"red-rooster-rri-sa40445w2-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "1/4\"",
			"evidenceIds": [
				"red-rooster-rri-sa40445w2-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rri-sa40445w2-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=29",
			"sourceLabel": "Rami Yokota, catalogue assemblage 2026, p. 29, réf. RRI-SA40445W2",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 19 L/s, convertis en 1140 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rri-sa40445w2-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rri-sa40445w2-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rri-sa40445w2-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rri-sa40445w2-20260926"
		],
		"recommendedHose": [
			"red-rooster-rri-sa40445w2-20260926"
		],
		"connectorSize": [
			"red-rooster-rri-sa40445w2-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 1140,
		"typical": 1140,
		"max": 1140
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "1/4\""
};

export default product;
