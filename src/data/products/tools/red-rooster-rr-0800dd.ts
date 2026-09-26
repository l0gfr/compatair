const product = {
	"id": "red-rooster-rr-0800dd",
	"slug": "red-rooster-rr-0800dd",
	"brand": "Red Rooster",
	"model": "RR-0800DD",
	"mpn": "RR-0800DD",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Red Rooster RR-0800DD",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rr-0800dd.webp",
		"alt": "Repères techniques Red Rooster RR-0800DD, référence RR-0800DD",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=41",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Red Rooster RR-0800DD, référence RR-0800DD. Le tableau fabricant publie 588 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Masse publiée : 1 kg. Diamètre intérieur de flexible conseillé : 10 mm.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 9.8 L/s, convertis en 588 L/min par multiplication par 60.",
			"Référence fabricant : RR-0800DD.",
			"Masse publiée : 1 kg.",
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
				"red-rooster-rr-0800dd-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 9.8 L/s, convertis en 588 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rr-0800dd-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1 kg",
			"evidenceIds": [
				"red-rooster-rr-0800dd-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"red-rooster-rr-0800dd-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"red-rooster-rr-0800dd-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rr-0800dd-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=41",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 41, réf. RR-0800DD",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 9.8 L/s, convertis en 588 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rr-0800dd-20260926-workingpressurebar-1",
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
			"red-rooster-rr-0800dd-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rr-0800dd-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rr-0800dd-20260926"
		],
		"recommendedHose": [
			"red-rooster-rr-0800dd-20260926"
		],
		"connectorSize": [
			"red-rooster-rr-0800dd-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 588,
		"typical": 588,
		"max": 588
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 1/4\""
};

export default product;
