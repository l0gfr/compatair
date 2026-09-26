const product = {
	"id": "red-rooster-rri-37e",
	"slug": "red-rooster-rri-37e",
	"brand": "Red Rooster",
	"model": "RRI-37E",
	"mpn": "RRI-37E",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Red Rooster RRI-37E",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rri-37e.webp",
		"alt": "Repères techniques Red Rooster RRI-37E, référence RRI-37E",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=39",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Red Rooster RRI-37E, référence RRI-37E. Le tableau fabricant publie 900 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 6000 tr/min. Masse publiée : 8,8 kg.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation en charge publiée : 15 L/s, convertis en 900 L/min par multiplication par 60.",
			"Référence fabricant : RRI-37E.",
			"Vitesse à vide publiée : 6000 tr/min.",
			"Masse publiée : 8,8 kg.",
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
				"red-rooster-rri-37e-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation en charge publiée : 15 L/s, convertis en 900 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rri-37e-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "6000 tr/min",
			"evidenceIds": [
				"red-rooster-rri-37e-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "8,8 kg",
			"evidenceIds": [
				"red-rooster-rri-37e-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "13 mm",
			"evidenceIds": [
				"red-rooster-rri-37e-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/2\"",
			"evidenceIds": [
				"red-rooster-rri-37e-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rri-37e-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=39",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 39, réf. RRI-37E",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 15 L/s, convertis en 900 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rri-37e-20260926-workingpressurebar-1",
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
			"red-rooster-rri-37e-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rri-37e-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rri-37e-20260926"
		],
		"recommendedHose": [
			"red-rooster-rri-37e-20260926"
		],
		"connectorSize": [
			"red-rooster-rri-37e-20260926"
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
	"connectorSize": "PT 1/2\""
};

export default product;
