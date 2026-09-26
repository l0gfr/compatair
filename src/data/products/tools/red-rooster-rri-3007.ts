const product = {
	"id": "red-rooster-rri-3007",
	"slug": "red-rooster-rri-3007",
	"brand": "Red Rooster",
	"model": "RRI-3007",
	"mpn": "RRI-3007",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Red Rooster RRI-3007",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rri-3007.webp",
		"alt": "Repères techniques Red Rooster RRI-3007, référence RRI-3007",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=44",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Red Rooster RRI-3007, référence RRI-3007. Le tableau fabricant publie 96 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 70000 tr/min. Masse publiée : 0,35 kg.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 1.6 L/s, convertis en 96 L/min par multiplication par 60.",
			"Référence fabricant : RRI-3007.",
			"Vitesse à vide publiée : 70000 tr/min.",
			"Masse publiée : 0,35 kg.",
			"Diamètre intérieur de flexible conseillé : 6,5 mm."
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
				"red-rooster-rri-3007-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 1.6 L/s, convertis en 96 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rri-3007-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "70000 tr/min",
			"evidenceIds": [
				"red-rooster-rri-3007-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,35 kg",
			"evidenceIds": [
				"red-rooster-rri-3007-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "6,5 mm",
			"evidenceIds": [
				"red-rooster-rri-3007-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"red-rooster-rri-3007-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rri-3007-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=44",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 44, réf. RRI-3007",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 1.6 L/s, convertis en 96 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rri-3007-20260926-workingpressurebar-1",
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
			"red-rooster-rri-3007-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rri-3007-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rri-3007-20260926"
		],
		"recommendedHose": [
			"red-rooster-rri-3007-20260926"
		],
		"connectorSize": [
			"red-rooster-rri-3007-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 96,
		"typical": 96,
		"max": 96
	},
	"recommendedHose": {
		"innerDiameterMm": 6.5
	},
	"connectorSize": "PT 1/4\""
};

export default product;
