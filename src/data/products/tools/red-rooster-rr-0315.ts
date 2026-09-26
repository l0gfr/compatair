const product = {
	"id": "red-rooster-rr-0315",
	"slug": "red-rooster-rr-0315",
	"brand": "Red Rooster",
	"model": "RR-0315",
	"mpn": "RR-0315",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Red Rooster RR-0315",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rr-0315.webp",
		"alt": "Repères techniques Red Rooster RR-0315, référence RR-0315",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=49",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Red Rooster RR-0315, référence RR-0315. Le tableau fabricant publie 180 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Masse publiée : 2,6 kg. Diamètre intérieur de flexible conseillé : 6,5 mm.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 3 L/s, convertis en 180 L/min par multiplication par 60.",
			"Référence fabricant : RR-0315.",
			"Masse publiée : 2,6 kg.",
			"Diamètre intérieur de flexible conseillé : 6,5 mm.",
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
				"red-rooster-rr-0315-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 3 L/s, convertis en 180 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rr-0315-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2,6 kg",
			"evidenceIds": [
				"red-rooster-rr-0315-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "6,5 mm",
			"evidenceIds": [
				"red-rooster-rr-0315-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"red-rooster-rr-0315-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rr-0315-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=49",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 49, réf. RR-0315",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 3 L/s, convertis en 180 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rr-0315-20260926-workingpressurebar-1",
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
			"red-rooster-rr-0315-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rr-0315-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rr-0315-20260926"
		],
		"recommendedHose": [
			"red-rooster-rr-0315-20260926"
		],
		"connectorSize": [
			"red-rooster-rr-0315-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 180,
		"typical": 180,
		"max": 180
	},
	"recommendedHose": {
		"innerDiameterMm": 6.5
	},
	"connectorSize": "PT 1/4\""
};

export default product;
