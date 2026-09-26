const product = {
	"id": "red-rooster-rrg-2155",
	"slug": "red-rooster-rrg-2155",
	"brand": "Red Rooster",
	"model": "RRG-2155",
	"mpn": "RRG-2155",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Red Rooster RRG-2155",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rrg-2155.webp",
		"alt": "Repères techniques Red Rooster RRG-2155, référence RRG-2155",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=45",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Red Rooster RRG-2155, référence RRG-2155. Le tableau fabricant publie 1 044 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 12000 tr/min. Masse publiée : 1,9 kg.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 17.4 L/s, convertis en 1044 L/min par multiplication par 60.",
			"Référence fabricant : RRG-2155.",
			"Vitesse à vide publiée : 12000 tr/min.",
			"Masse publiée : 1,9 kg.",
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
				"red-rooster-rrg-2155-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 17.4 L/s, convertis en 1044 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rrg-2155-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "12000 tr/min",
			"evidenceIds": [
				"red-rooster-rrg-2155-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,9 kg",
			"evidenceIds": [
				"red-rooster-rrg-2155-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "13 mm",
			"evidenceIds": [
				"red-rooster-rrg-2155-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 3/8\"",
			"evidenceIds": [
				"red-rooster-rrg-2155-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rrg-2155-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=45",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 45, réf. RRG-2155",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 17.4 L/s, convertis en 1044 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rrg-2155-20260926-workingpressurebar-1",
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
			"red-rooster-rrg-2155-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rrg-2155-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rrg-2155-20260926"
		],
		"recommendedHose": [
			"red-rooster-rrg-2155-20260926"
		],
		"connectorSize": [
			"red-rooster-rrg-2155-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 1044,
		"typical": 1044,
		"max": 1044
	},
	"recommendedHose": {
		"innerDiameterMm": 13
	},
	"connectorSize": "PT 3/8\""
};

export default product;
