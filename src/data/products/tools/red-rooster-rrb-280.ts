import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rrb-280",
	"slug": "red-rooster-rrb-280",
	"brand": "Red Rooster",
	"model": "RRB-280",
	"mpn": "RRB-280",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Red Rooster RRB-280",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rrb-280.webp",
		"alt": "Repères techniques Red Rooster RRB-280, référence RRB-280",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=47",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Red Rooster RRB-280, référence RRB-280. Le tableau fabricant publie 576 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 8000 tr/min. Masse publiée : 1,5 kg.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 9.6 L/s, convertis en 576 L/min par multiplication par 60.",
			"Référence fabricant : RRB-280.",
			"Vitesse à vide publiée : 8000 tr/min.",
			"Masse publiée : 1,5 kg.",
			"Diamètre intérieur de flexible conseillé : 10 mm."
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
				"red-rooster-rrb-280-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 9.6 L/s, convertis en 576 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rrb-280-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "8000 tr/min",
			"evidenceIds": [
				"red-rooster-rrb-280-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,5 kg",
			"evidenceIds": [
				"red-rooster-rrb-280-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"red-rooster-rrb-280-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"red-rooster-rrb-280-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rrb-280-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=47",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 47, réf. RRB-280",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 9.6 L/s, convertis en 576 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rrb-280-20260926-workingpressurebar-1",
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
			"red-rooster-rrb-280-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rrb-280-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rrb-280-20260926"
		],
		"recommendedHose": [
			"red-rooster-rrb-280-20260926"
		],
		"connectorSize": [
			"red-rooster-rrb-280-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 576,
		"typical": 576,
		"max": 576
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 1/4\""
};

export default product;
