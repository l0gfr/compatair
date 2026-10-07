import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rri-2500m",
	"slug": "red-rooster-rri-2500m",
	"brand": "Red Rooster",
	"model": "RRI-2500M",
	"mpn": "RRI-2500M",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Red Rooster RRI-2500M",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rri-2500m.webp",
		"alt": "Repères techniques Red Rooster RRI-2500M, référence RRI-2500M",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=38",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Red Rooster RRI-2500M, référence RRI-2500M. Le tableau fabricant publie 960 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 5500 tr/min. Masse publiée : 3,5 kg.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation en charge publiée : 16 L/s, convertis en 960 L/min par multiplication par 60.",
			"Référence fabricant : RRI-2500M.",
			"Vitesse à vide publiée : 5500 tr/min.",
			"Masse publiée : 3,5 kg.",
			"Diamètre intérieur de flexible conseillé : 13 mm."
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
				"red-rooster-rri-2500m-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation en charge publiée : 16 L/s, convertis en 960 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rri-2500m-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "5500 tr/min",
			"evidenceIds": [
				"red-rooster-rri-2500m-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "3,5 kg",
			"evidenceIds": [
				"red-rooster-rri-2500m-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "13 mm",
			"evidenceIds": [
				"red-rooster-rri-2500m-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 3/8\"",
			"evidenceIds": [
				"red-rooster-rri-2500m-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rri-2500m-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=38",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 38, réf. RRI-2500M",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 16 L/s, convertis en 960 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rri-2500m-20260926-workingpressurebar-1",
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
			"red-rooster-rri-2500m-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rri-2500m-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rri-2500m-20260926"
		],
		"recommendedHose": [
			"red-rooster-rri-2500m-20260926"
		],
		"connectorSize": [
			"red-rooster-rri-2500m-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 960,
		"typical": 960,
		"max": 960
	},
	"recommendedHose": {
		"innerDiameterMm": 13
	},
	"connectorSize": "PT 3/8\""
};

export default product;
