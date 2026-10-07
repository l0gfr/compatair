import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rri-1061",
	"slug": "red-rooster-rri-1061",
	"brand": "Red Rooster",
	"model": "RRI-1061",
	"mpn": "RRI-1061",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Red Rooster RRI-1061",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rri-1061.webp",
		"alt": "Repères techniques Red Rooster RRI-1061, référence RRI-1061",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=39",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Red Rooster RRI-1061, référence RRI-1061. Le tableau fabricant publie 1 620 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 3200 tr/min. Masse publiée : 14,3 kg.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation en charge publiée : 27 L/s, convertis en 1620 L/min par multiplication par 60.",
			"Référence fabricant : RRI-1061.",
			"Vitesse à vide publiée : 3200 tr/min.",
			"Masse publiée : 14,3 kg.",
			"Diamètre intérieur de flexible conseillé : 19 mm."
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
				"red-rooster-rri-1061-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation en charge publiée : 27 L/s, convertis en 1620 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rri-1061-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "3200 tr/min",
			"evidenceIds": [
				"red-rooster-rri-1061-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "14,3 kg",
			"evidenceIds": [
				"red-rooster-rri-1061-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "19 mm",
			"evidenceIds": [
				"red-rooster-rri-1061-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/2\"",
			"evidenceIds": [
				"red-rooster-rri-1061-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rri-1061-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=39",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 39, réf. RRI-1061",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 27 L/s, convertis en 1620 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rri-1061-20260926-workingpressurebar-1",
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
			"red-rooster-rri-1061-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rri-1061-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rri-1061-20260926"
		],
		"recommendedHose": [
			"red-rooster-rri-1061-20260926"
		],
		"connectorSize": [
			"red-rooster-rri-1061-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 1620,
		"typical": 1620,
		"max": 1620
	},
	"recommendedHose": {
		"innerDiameterMm": 19
	},
	"connectorSize": "PT 1/2\""
};

export default product;
