import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rri-4596r",
	"slug": "red-rooster-rri-4596r",
	"brand": "Red Rooster",
	"model": "RRI-4596R",
	"mpn": "RRI-4596R",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Red Rooster RRI-4596R",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rri-4596r.webp",
		"alt": "Repères techniques Red Rooster RRI-4596R, référence RRI-4596R",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=50",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Red Rooster RRI-4596R, référence RRI-4596R. Le tableau fabricant publie 900 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Masse publiée : 9,7 kg. Diamètre intérieur de flexible conseillé : 13 mm.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 15 L/s, convertis en 900 L/min par multiplication par 60.",
			"Référence fabricant : RRI-4596R.",
			"Masse publiée : 9,7 kg.",
			"Diamètre intérieur de flexible conseillé : 13 mm.",
			"Raccord pneumatique : PT 3/4\"."
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
				"red-rooster-rri-4596r-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 15 L/s, convertis en 900 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rri-4596r-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "9,7 kg",
			"evidenceIds": [
				"red-rooster-rri-4596r-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "13 mm",
			"evidenceIds": [
				"red-rooster-rri-4596r-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 3/4\"",
			"evidenceIds": [
				"red-rooster-rri-4596r-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rri-4596r-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=50",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 50, réf. RRI-4596R",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 15 L/s, convertis en 900 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rri-4596r-20260926-workingpressurebar-1",
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
			"red-rooster-rri-4596r-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rri-4596r-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rri-4596r-20260926"
		],
		"recommendedHose": [
			"red-rooster-rri-4596r-20260926"
		],
		"connectorSize": [
			"red-rooster-rri-4596r-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 900,
		"typical": 900,
		"max": 900
	},
	"recommendedHose": {
		"innerDiameterMm": 13
	},
	"connectorSize": "PT 3/4\""
};

export default product;
