const product = {
	"id": "lacme-visseuse-pro-1800-tr-min",
	"slug": "lacme-visseuse-pro-1800-tr-min",
	"brand": "Lacmé",
	"model": "Visseuse PRO 1800 tr/min",
	"mpn": "343304",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Lacmé Visseuse PRO 1800 tr/min",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 7,
		"max": 7
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/lacme-visseuse-pro-1800-tr-min.webp",
		"alt": "Repères techniques Lacmé Visseuse PRO 1800 tr/min, référence 343304",
		"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Outillage%202026.pdf#page=26",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Lacmé Visseuse PRO 1800 tr/min, référence 343304. Le tableau fabricant publie 220 L/min et une plage d’utilisation de 6 à 7 bar.",
		"verifiedFacts": [
			"Le fabricant publie une plage d’utilisation de 6 à 7 bar. CompatAir retient 7 bar pour le dimensionnement, borne haute documentée, et non une pression d’essai inventée.",
			"Consommation du tableau en L/min, sans facteur de marche ajouté. La condition de charge détaillée n’est pas précisée.",
			"Référence fabricant : 343304."
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
				"lacme-343304-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation du tableau en L/min, sans facteur de marche ajouté. La condition de charge détaillée n’est pas précisée.",
			"evidenceIds": [
				"lacme-343304-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "lacme-343304-20260926",
			"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Outillage%202026.pdf#page=26",
			"sourceLabel": "Lacmé, catalogue Outillage 2026, p. 26, réf. 343304",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation du tableau en L/min, sans facteur de marche ajouté. La condition de charge détaillée n’est pas précisée."
		}
	],
	"fieldSources": {
		"mpn": [
			"lacme-343304-20260926"
		],
		"workingPressureBar": [
			"lacme-343304-20260926"
		],
		"airflowLpm": [
			"lacme-343304-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 220,
		"typical": 220,
		"max": 220
	}
};

export default product;
