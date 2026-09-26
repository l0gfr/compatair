const product = {
	"id": "lacme-perceuse-pro-10-mm-1800-tr-min",
	"slug": "lacme-perceuse-pro-10-mm-1800-tr-min",
	"brand": "Lacmé",
	"model": "Perceuse PRO 10 mm 1800 tr/min",
	"mpn": "342204",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Lacmé Perceuse PRO 10 mm 1800 tr/min",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 7,
		"max": 7
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/lacme-perceuse-pro-10-mm-1800-tr-min.webp",
		"alt": "Repères techniques Lacmé Perceuse PRO 10 mm 1800 tr/min, référence 342204",
		"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Outillage%202026.pdf#page=24",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Lacmé Perceuse PRO 10 mm 1800 tr/min, référence 342204. Le tableau fabricant publie 180 L/min et une plage d’utilisation de 6 à 7 bar.",
		"verifiedFacts": [
			"Le fabricant publie une plage d’utilisation de 6 à 7 bar. CompatAir retient 7 bar pour le dimensionnement, borne haute documentée, et non une pression d’essai inventée.",
			"Consommation du tableau en L/min, sans facteur de marche ajouté. La condition de charge détaillée n’est pas précisée.",
			"Référence fabricant : 342204."
		],
		"limitations": [
			"La consommation du tableau ne décrit pas toutes les phases de fonctionnement. Aucune réduction moyenne de débit n’est appliquée."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le fabricant publie une plage d’utilisation de 6 à 7 bar. CompatAir retient 7 bar pour le dimensionnement, borne haute documentée, et non une pression d’essai inventée.",
			"evidenceIds": [
				"lacme-342204-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation du tableau en L/min, sans facteur de marche ajouté. La condition de charge détaillée n’est pas précisée.",
			"evidenceIds": [
				"lacme-342204-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "lacme-342204-20260926",
			"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Outillage%202026.pdf#page=24",
			"sourceLabel": "Lacmé, catalogue Outillage 2026, p. 24, réf. 342204",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation du tableau en L/min, sans facteur de marche ajouté. La condition de charge détaillée n’est pas précisée."
		}
	],
	"fieldSources": {
		"mpn": [
			"lacme-342204-20260926"
		],
		"workingPressureBar": [
			"lacme-342204-20260926"
		],
		"airflowLpm": [
			"lacme-342204-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 180,
		"typical": 180,
		"max": 180
	}
};

export default product;
