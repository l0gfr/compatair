const product = {
	"id": "red-rooster-rr-2110ns",
	"slug": "red-rooster-rr-2110ns",
	"brand": "Red Rooster",
	"model": "RR-2110NS",
	"mpn": "RR-2110NS",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Red Rooster RR-2110NS",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rr-2110ns.webp",
		"alt": "Repères techniques Red Rooster RR-2110NS, référence RR-2110NS",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=55",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Red Rooster RR-2110NS, référence RR-2110NS. Le tableau fabricant publie 396 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Masse publiée : 2,5 kg. Diamètre intérieur de flexible conseillé : 6,5 mm.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 6.6 L/s, convertis en 396 L/min par multiplication par 60.",
			"Référence fabricant : RR-2110NS.",
			"Masse publiée : 2,5 kg.",
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
				"red-rooster-rr-2110ns-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 6.6 L/s, convertis en 396 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rr-2110ns-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2,5 kg",
			"evidenceIds": [
				"red-rooster-rr-2110ns-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "6,5 mm",
			"evidenceIds": [
				"red-rooster-rr-2110ns-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"red-rooster-rr-2110ns-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rr-2110ns-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=55",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 55, réf. RR-2110NS",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 6.6 L/s, convertis en 396 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rr-2110ns-20260926-workingpressurebar-1",
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
			"red-rooster-rr-2110ns-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rr-2110ns-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rr-2110ns-20260926"
		],
		"recommendedHose": [
			"red-rooster-rr-2110ns-20260926"
		],
		"connectorSize": [
			"red-rooster-rr-2110ns-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 396,
		"typical": 396,
		"max": 396
	},
	"recommendedHose": {
		"innerDiameterMm": 6.5
	},
	"connectorSize": "PT 1/4\""
};

export default product;
