const product = {
	"id": "yokota-yw-6cl",
	"slug": "yokota-yw-6cl",
	"brand": "Yokota",
	"model": "YW-6CL",
	"mpn": "YW-6CL",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Yokota YW-6CL",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-yw-6cl.webp",
		"alt": "Repères techniques Yokota YW-6CL, référence YW-6CL",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=38",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Yokota YW-6CL, référence YW-6CL. Le tableau fabricant publie 252 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 6500 tr/min. Masse publiée : 1,6 kg.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation en charge publiée : 4.2 L/s, convertis en 252 L/min par multiplication par 60.",
			"Référence fabricant : YW-6CL.",
			"Vitesse à vide publiée : 6500 tr/min.",
			"Masse publiée : 1,6 kg.",
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
				"yokota-yw-6cl-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation en charge publiée : 4.2 L/s, convertis en 252 L/min par multiplication par 60.",
			"evidenceIds": [
				"yokota-yw-6cl-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "6500 tr/min",
			"evidenceIds": [
				"yokota-yw-6cl-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,6 kg",
			"evidenceIds": [
				"yokota-yw-6cl-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "6,5 mm",
			"evidenceIds": [
				"yokota-yw-6cl-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"yokota-yw-6cl-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-yw-6cl-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=38",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 38, réf. YW-6CL",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 4.2 L/s, convertis en 252 L/min par multiplication par 60."
		},
		{
			"id": "yokota-yw-6cl-20260926-workingpressurebar-1",
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
			"yokota-yw-6cl-20260926"
		],
		"workingPressureBar": [
			"yokota-yw-6cl-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"yokota-yw-6cl-20260926"
		],
		"recommendedHose": [
			"yokota-yw-6cl-20260926"
		],
		"connectorSize": [
			"yokota-yw-6cl-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 252,
		"typical": 252,
		"max": 252
	},
	"recommendedHose": {
		"innerDiameterMm": 6.5
	},
	"connectorSize": "PT 1/4\""
};

export default product;
