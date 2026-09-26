const product = {
	"id": "red-rooster-rr-15a",
	"slug": "red-rooster-rr-15a",
	"brand": "Red Rooster",
	"model": "RR-15A",
	"mpn": "RR-15A",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Red Rooster RR-15A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rr-15a.webp",
		"alt": "Repères techniques Red Rooster RR-15A, référence RR-15A",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=38",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Red Rooster RR-15A, référence RR-15A. Le tableau fabricant publie 318 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 7000 tr/min. Masse publiée : 1,8 kg.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation en charge publiée : 5.3 L/s, convertis en 318 L/min par multiplication par 60.",
			"Référence fabricant : RR-15A.",
			"Vitesse à vide publiée : 7000 tr/min.",
			"Masse publiée : 1,8 kg.",
			"Diamètre intérieur de flexible conseillé : 9,5 mm."
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
				"red-rooster-rr-15a-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation en charge publiée : 5.3 L/s, convertis en 318 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rr-15a-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "7000 tr/min",
			"evidenceIds": [
				"red-rooster-rr-15a-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,8 kg",
			"evidenceIds": [
				"red-rooster-rr-15a-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "9,5 mm",
			"evidenceIds": [
				"red-rooster-rr-15a-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"red-rooster-rr-15a-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rr-15a-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=38",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 38, réf. RR-15A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 5.3 L/s, convertis en 318 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rr-15a-20260926-workingpressurebar-1",
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
			"red-rooster-rr-15a-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rr-15a-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rr-15a-20260926"
		],
		"recommendedHose": [
			"red-rooster-rr-15a-20260926"
		],
		"connectorSize": [
			"red-rooster-rr-15a-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 318,
		"typical": 318,
		"max": 318
	},
	"recommendedHose": {
		"innerDiameterMm": 9.5
	},
	"connectorSize": "PT 1/4\""
};

export default product;
