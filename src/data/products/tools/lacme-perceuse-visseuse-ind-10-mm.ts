const product = {
	"id": "lacme-perceuse-visseuse-ind-10-mm",
	"slug": "lacme-perceuse-visseuse-ind-10-mm",
	"brand": "Lacmé",
	"model": "Perceuse visseuse IND 10 mm",
	"mpn": "342714",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Lacmé Perceuse visseuse IND 10 mm",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 7,
		"max": 7
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/lacme-perceuse-visseuse-ind-10-mm.webp",
		"alt": "Repères techniques Lacmé Perceuse visseuse IND 10 mm, référence 342714",
		"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Outillage%202026.pdf#page=26",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Lacmé Perceuse visseuse IND 10 mm, référence 342714. Le tableau fabricant publie 340 L/min et une plage d’utilisation de 6 à 7 bar.",
		"verifiedFacts": [
			"Le fabricant publie une plage d’utilisation de 6 à 7 bar. CompatAir retient 7 bar pour le dimensionnement, borne haute documentée, et non une pression d’essai inventée.",
			"Consommation du tableau en L/min, sans facteur de marche ajouté. La condition de charge détaillée n’est pas précisée.",
			"Référence fabricant : 342714."
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
				"lacme-342714-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation du tableau en L/min, sans facteur de marche ajouté. La condition de charge détaillée n’est pas précisée.",
			"evidenceIds": [
				"lacme-342714-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "lacme-342714-20260926",
			"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Outillage%202026.pdf#page=26",
			"sourceLabel": "Lacmé, catalogue Outillage 2026, p. 26, réf. 342714",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation du tableau en L/min, sans facteur de marche ajouté. La condition de charge détaillée n’est pas précisée."
		}
	],
	"fieldSources": {
		"mpn": [
			"lacme-342714-20260926"
		],
		"workingPressureBar": [
			"lacme-342714-20260926"
		],
		"airflowLpm": [
			"lacme-342714-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 340,
		"typical": 340,
		"max": 340
	}
};

export default product;
