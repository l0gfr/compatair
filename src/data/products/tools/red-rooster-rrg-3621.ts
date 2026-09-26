const product = {
	"id": "red-rooster-rrg-3621",
	"slug": "red-rooster-rrg-3621",
	"brand": "Red Rooster",
	"model": "RRG-3621",
	"mpn": "RRG-3621",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "Red Rooster RRG-3621",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rrg-3621.webp",
		"alt": "Repères techniques Red Rooster RRG-3621, référence RRG-3621",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=48",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Red Rooster RRG-3621, référence RRG-3621. Le tableau fabricant publie 522 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 18000 tr/min. Masse publiée : 1,4 kg.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 8.7 L/s, convertis en 522 L/min par multiplication par 60.",
			"Référence fabricant : RRG-3621.",
			"Vitesse à vide publiée : 18000 tr/min.",
			"Masse publiée : 1,4 kg.",
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
				"red-rooster-rrg-3621-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 8.7 L/s, convertis en 522 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rrg-3621-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "18000 tr/min",
			"evidenceIds": [
				"red-rooster-rrg-3621-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,4 kg",
			"evidenceIds": [
				"red-rooster-rrg-3621-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"red-rooster-rrg-3621-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"red-rooster-rrg-3621-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rrg-3621-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=48",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 48, réf. RRG-3621",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 8.7 L/s, convertis en 522 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rrg-3621-20260926-workingpressurebar-1",
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
			"red-rooster-rrg-3621-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rrg-3621-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rrg-3621-20260926"
		],
		"recommendedHose": [
			"red-rooster-rrg-3621-20260926"
		],
		"connectorSize": [
			"red-rooster-rrg-3621-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 522,
		"typical": 522,
		"max": 522
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 1/4\""
};

export default product;
