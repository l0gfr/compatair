const product = {
	"id": "lacme-cle-a-chocs-1-2-1356-nm",
	"slug": "lacme-cle-a-chocs-1-2-1356-nm",
	"brand": "Lacmé",
	"model": "Clé à chocs 1/2 1356 Nm",
	"mpn": "340804",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Lacmé Clé à chocs 1/2 1356 Nm",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 7,
		"max": 7
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/lacme-cle-a-chocs-1-2-1356-nm.webp",
		"alt": "Repères techniques Lacmé Clé à chocs 1/2 1356 Nm, référence 340804",
		"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Outillage%202026.pdf#page=16",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Lacmé Clé à chocs 1/2 1356 Nm, référence 340804. Le tableau fabricant publie 300 L/min et une plage d’utilisation de 6 à 7 bar.",
		"verifiedFacts": [
			"Le fabricant publie une plage d’utilisation de 6 à 7 bar. CompatAir retient 7 bar pour le dimensionnement, borne haute documentée, et non une pression d’essai inventée.",
			"Consommation du tableau en L/min, sans facteur de marche ajouté. La condition de charge détaillée n’est pas précisée.",
			"Référence fabricant : 340804."
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
				"lacme-340804-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation du tableau en L/min, sans facteur de marche ajouté. La condition de charge détaillée n’est pas précisée.",
			"evidenceIds": [
				"lacme-340804-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "lacme-340804-20260926",
			"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Outillage%202026.pdf#page=16",
			"sourceLabel": "Lacmé, catalogue Outillage 2026, p. 16, réf. 340804",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation du tableau en L/min, sans facteur de marche ajouté. La condition de charge détaillée n’est pas précisée."
		}
	],
	"fieldSources": {
		"mpn": [
			"lacme-340804-20260926"
		],
		"workingPressureBar": [
			"lacme-340804-20260926"
		],
		"airflowLpm": [
			"lacme-340804-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 300,
		"typical": 300,
		"max": 300
	}
};

export default product;
