import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rri-2116p",
	"slug": "red-rooster-rri-2116p",
	"brand": "Red Rooster",
	"model": "RRI-2116P",
	"mpn": "RRI-2116P",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Red Rooster RRI-2116P",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rri-2116p.webp",
		"alt": "Repères techniques Red Rooster RRI-2116P, référence RRI-2116P",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=42",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Red Rooster RRI-2116P, référence RRI-2116P. Le tableau fabricant publie 660 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Masse publiée : 2,4 kg. Diamètre intérieur de flexible conseillé : 10 mm.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 11 L/s, convertis en 660 L/min par multiplication par 60.",
			"Référence fabricant : RRI-2116P.",
			"Masse publiée : 2,4 kg.",
			"Diamètre intérieur de flexible conseillé : 10 mm.",
			"Raccord pneumatique : PT 1/4\"."
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
				"red-rooster-rri-2116p-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 11 L/s, convertis en 660 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rri-2116p-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2,4 kg",
			"evidenceIds": [
				"red-rooster-rri-2116p-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"red-rooster-rri-2116p-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"red-rooster-rri-2116p-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rri-2116p-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=42",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 42, réf. RRI-2116P",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 11 L/s, convertis en 660 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rri-2116p-20260926-workingpressurebar-1",
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
			"red-rooster-rri-2116p-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rri-2116p-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rri-2116p-20260926"
		],
		"recommendedHose": [
			"red-rooster-rri-2116p-20260926"
		],
		"connectorSize": [
			"red-rooster-rri-2116p-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 660,
		"typical": 660,
		"max": 660
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 1/4\""
};

export default product;
