const product = {
	"id": "red-rooster-rr-20pn",
	"slug": "red-rooster-rr-20pn",
	"brand": "Red Rooster",
	"model": "RR-20PN",
	"mpn": "RR-20PN",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Red Rooster RR-20PN",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rr-20pn.webp",
		"alt": "Repères techniques Red Rooster RR-20PN, référence RR-20PN",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=38",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Red Rooster RR-20PN, référence RR-20PN. Le tableau fabricant publie 630 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 4800 tr/min. Masse publiée : 4,6 kg.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation en charge publiée : 10.5 L/s, convertis en 630 L/min par multiplication par 60.",
			"Référence fabricant : RR-20PN.",
			"Vitesse à vide publiée : 4800 tr/min.",
			"Masse publiée : 4,6 kg.",
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
				"red-rooster-rr-20pn-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation en charge publiée : 10.5 L/s, convertis en 630 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rr-20pn-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "4800 tr/min",
			"evidenceIds": [
				"red-rooster-rr-20pn-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "4,6 kg",
			"evidenceIds": [
				"red-rooster-rr-20pn-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"red-rooster-rr-20pn-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"red-rooster-rr-20pn-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rr-20pn-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=38",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 38, réf. RR-20PN",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 10.5 L/s, convertis en 630 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rr-20pn-20260926-workingpressurebar-1",
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
			"red-rooster-rr-20pn-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rr-20pn-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rr-20pn-20260926"
		],
		"recommendedHose": [
			"red-rooster-rr-20pn-20260926"
		],
		"connectorSize": [
			"red-rooster-rr-20pn-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 630,
		"typical": 630,
		"max": 630
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 1/4\""
};

export default product;
