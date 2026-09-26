const product = {
	"id": "yokota-v-160p",
	"slug": "yokota-v-160p",
	"brand": "Yokota",
	"model": "V-160P",
	"mpn": "V-160P",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Yokota V-160P",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-v-160p.webp",
		"alt": "Repères techniques Yokota V-160P, référence V-160P",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=38",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Yokota V-160P, référence V-160P. Le tableau fabricant publie 756 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 6500 tr/min. Masse publiée : 2,8 kg.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation en charge publiée : 12.6 L/s, convertis en 756 L/min par multiplication par 60.",
			"Référence fabricant : V-160P.",
			"Vitesse à vide publiée : 6500 tr/min.",
			"Masse publiée : 2,8 kg.",
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
				"yokota-v-160p-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation en charge publiée : 12.6 L/s, convertis en 756 L/min par multiplication par 60.",
			"evidenceIds": [
				"yokota-v-160p-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "6500 tr/min",
			"evidenceIds": [
				"yokota-v-160p-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2,8 kg",
			"evidenceIds": [
				"yokota-v-160p-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"yokota-v-160p-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"yokota-v-160p-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-v-160p-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=38",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 38, réf. V-160P",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 12.6 L/s, convertis en 756 L/min par multiplication par 60."
		},
		{
			"id": "yokota-v-160p-20260926-workingpressurebar-1",
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
			"yokota-v-160p-20260926"
		],
		"workingPressureBar": [
			"yokota-v-160p-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"yokota-v-160p-20260926"
		],
		"recommendedHose": [
			"yokota-v-160p-20260926"
		],
		"connectorSize": [
			"yokota-v-160p-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 756,
		"typical": 756,
		"max": 756
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 1/4\""
};

export default product;
