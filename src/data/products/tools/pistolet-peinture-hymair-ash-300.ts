const product = {
	"id": "pistolet-peinture-hymair-ash-300",
	"slug": "pistolet-peinture-hymair-ash-300",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Hymair ASH-300",
	"brand": "Hymair",
	"model": "ASH-300",
	"mpn": "ASH-300",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 2.413,
		"typical": 2.413,
		"max": 2.413
	},
	"demandExplanation": "Les deux unités de consommation sont contradictoires ; aucune correction ou sélection silencieuse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-hymair-ash-300.webp",
		"alt": "Repères techniques : Hymair ASH-300",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SZUfKpLkrMNq&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-ash-300",
		"label": "Référence ASH-300",
		"distinguishingAttributes": {
			"reference": "ASH-300",
			"Capacité du godet": "600 ml",
			"Largeur de jet publiée": "300 mm"
		}
	},
	"editorial": {
		"overview": "Hymair ASH-300. Les deux unités de consommation sont contradictoires ; aucune correction ou sélection silencieuse. Capacité du godet : 600 ml. Largeur de jet publiée : 300 mm.",
		"verifiedFacts": [
			"Capacité du godet : 600 ml.",
			"Largeur de jet publiée : 300 mm.",
			"Consommation contradictoire publiée : 10.6 cfm (400L/m)."
		],
		"limitations": [
			"Les deux unités de consommation sont contradictoires ; aucune correction ou sélection silencieuse.",
			"La fiche associe 10,6 cfm à 400 L/min, deux valeurs incompatibles après conversion. Aucun débit choisi à la place du fabricant.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Capacité du godet",
			"value": "600 ml",
			"evidenceIds": [
				"october2-tools-steed-7-p2"
			]
		},
		{
			"label": "Largeur de jet publiée",
			"value": "300 mm",
			"evidenceIds": [
				"october2-tools-steed-7-p2"
			]
		},
		{
			"label": "Consommation contradictoire publiée",
			"value": "10.6 cfm (400L/m)",
			"evidenceIds": [
				"october2-tools-steed-7-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure: 35 psi",
			"evidenceIds": [
				"october2-tools-steed-7-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-7-p2",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SZUfKpLkrMNq&dp=GvUApKfKKUAU#page=2",
			"sourceLabel": "Hymair, documentation technique fabricant, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 971e9f3f662af10d3c638d5e9c29c8847ee04672c40e29957ad4ca4eb13d61c1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-7-p2"
		],
		"workingPressureBar": [
			"october2-tools-steed-7-p2"
		],
		"demandExplanation": [
			"october2-tools-steed-7-p2"
		]
	},
	"notes": [
		"Les deux unités de consommation sont contradictoires ; aucune correction ou sélection silencieuse."
	]
};

export default product;
