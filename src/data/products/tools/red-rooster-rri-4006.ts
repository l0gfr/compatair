const product = {
	"id": "red-rooster-rri-4006",
	"slug": "red-rooster-rri-4006",
	"brand": "Red Rooster",
	"model": "RRI-4006",
	"mpn": "RRI-4006",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Red Rooster RRI-4006",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rri-4006.webp",
		"alt": "Repères techniques Red Rooster RRI-4006, référence RRI-4006",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=55",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Red Rooster RRI-4006, référence RRI-4006. Le tableau fabricant publie 156 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Masse publiée : 2,6 kg. Diamètre intérieur de flexible conseillé : 6,5 mm.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 2.6 L/s, convertis en 156 L/min par multiplication par 60.",
			"Référence fabricant : RRI-4006.",
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
				"red-rooster-rri-4006-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 2.6 L/s, convertis en 156 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rri-4006-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2,6 kg",
			"evidenceIds": [
				"red-rooster-rri-4006-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "6,5 mm",
			"evidenceIds": [
				"red-rooster-rri-4006-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"red-rooster-rri-4006-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rri-4006-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=55",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 55, réf. RRI-4006",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 2.6 L/s, convertis en 156 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rri-4006-20260926-workingpressurebar-1",
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
			"red-rooster-rri-4006-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rri-4006-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rri-4006-20260926"
		],
		"recommendedHose": [
			"red-rooster-rri-4006-20260926"
		],
		"connectorSize": [
			"red-rooster-rri-4006-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 156,
		"typical": 156,
		"max": 156
	},
	"recommendedHose": {
		"innerDiameterMm": 6.5
	},
	"connectorSize": "PT 1/4\""
};

export default product;
