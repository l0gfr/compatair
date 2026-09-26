const product = {
	"id": "yokota-mg-oa",
	"slug": "yokota-mg-oa",
	"brand": "Yokota",
	"model": "MG-OA",
	"mpn": "MG-OA",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Yokota MG-OA",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-mg-oa.webp",
		"alt": "Repères techniques Yokota MG-OA, référence MG-OA",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=44",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Yokota MG-OA, référence MG-OA. Le tableau fabricant publie 372 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 25000 tr/min. Masse publiée : 0,5 kg.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 6.2 L/s, convertis en 372 L/min par multiplication par 60.",
			"Référence fabricant : MG-OA.",
			"Vitesse à vide publiée : 25000 tr/min.",
			"Masse publiée : 0,5 kg.",
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
				"yokota-mg-oa-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 6.2 L/s, convertis en 372 L/min par multiplication par 60.",
			"evidenceIds": [
				"yokota-mg-oa-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "25000 tr/min",
			"evidenceIds": [
				"yokota-mg-oa-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,5 kg",
			"evidenceIds": [
				"yokota-mg-oa-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "6,5 mm",
			"evidenceIds": [
				"yokota-mg-oa-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"yokota-mg-oa-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-mg-oa-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=44",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 44, réf. MG-OA",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 6.2 L/s, convertis en 372 L/min par multiplication par 60."
		},
		{
			"id": "yokota-mg-oa-20260926-workingpressurebar-1",
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
			"yokota-mg-oa-20260926"
		],
		"workingPressureBar": [
			"yokota-mg-oa-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"yokota-mg-oa-20260926"
		],
		"recommendedHose": [
			"yokota-mg-oa-20260926"
		],
		"connectorSize": [
			"yokota-mg-oa-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 372,
		"typical": 372,
		"max": 372
	},
	"recommendedHose": {
		"innerDiameterMm": 6.5
	},
	"connectorSize": "PT 1/4\""
};

export default product;
