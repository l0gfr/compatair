const product = {
	"id": "yokota-yd-400sca",
	"slug": "yokota-yd-400sca",
	"brand": "Yokota",
	"model": "YD-400SCA",
	"mpn": "YD-400SCA",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Yokota YD-400SCA",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-yd-400sca.webp",
		"alt": "Repères techniques Yokota YD-400SCA, référence YD-400SCA",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=42",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Yokota YD-400SCA, référence YD-400SCA. Le tableau fabricant publie 150 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 1700 tr/min. Masse publiée : 0,6 kg.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 2.5 L/s, convertis en 150 L/min par multiplication par 60.",
			"Référence fabricant : YD-400SCA.",
			"Vitesse à vide publiée : 1700 tr/min.",
			"Masse publiée : 0,6 kg.",
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
				"yokota-yd-400sca-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 2.5 L/s, convertis en 150 L/min par multiplication par 60.",
			"evidenceIds": [
				"yokota-yd-400sca-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "1700 tr/min",
			"evidenceIds": [
				"yokota-yd-400sca-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,6 kg",
			"evidenceIds": [
				"yokota-yd-400sca-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "6,5 mm",
			"evidenceIds": [
				"yokota-yd-400sca-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/8\"",
			"evidenceIds": [
				"yokota-yd-400sca-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-yd-400sca-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=42",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 42, réf. YD-400SCA",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 2.5 L/s, convertis en 150 L/min par multiplication par 60."
		},
		{
			"id": "yokota-yd-400sca-20260926-workingpressurebar-1",
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
			"yokota-yd-400sca-20260926"
		],
		"workingPressureBar": [
			"yokota-yd-400sca-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"yokota-yd-400sca-20260926"
		],
		"recommendedHose": [
			"yokota-yd-400sca-20260926"
		],
		"connectorSize": [
			"yokota-yd-400sca-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 150,
		"typical": 150,
		"max": 150
	},
	"recommendedHose": {
		"innerDiameterMm": 6.5
	},
	"connectorSize": "PT 1/8\""
};

export default product;
