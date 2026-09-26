const product = {
	"id": "lacme-cle-a-rochet-1-2-82-nm",
	"slug": "lacme-cle-a-rochet-1-2-82-nm",
	"brand": "Lacmé",
	"model": "Clé à rochet 1/2 82 Nm",
	"mpn": "341804",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Lacmé Clé à rochet 1/2 82 Nm",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 7,
		"max": 7
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/lacme-cle-a-rochet-1-2-82-nm.webp",
		"alt": "Repères techniques Lacmé Clé à rochet 1/2 82 Nm, référence 341804",
		"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Outillage%202026.pdf#page=14",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Lacmé Clé à rochet 1/2 82 Nm, référence 341804. Le tableau fabricant publie 210 L/min et une plage d’utilisation de 6 à 7 bar.",
		"verifiedFacts": [
			"Le fabricant publie une plage d’utilisation de 6 à 7 bar. CompatAir retient 7 bar pour le dimensionnement, borne haute documentée, et non une pression d’essai inventée.",
			"Consommation du tableau en L/min, sans facteur de marche ajouté. La condition de charge détaillée n’est pas précisée.",
			"Référence fabricant : 341804."
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
				"lacme-341804-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation du tableau en L/min, sans facteur de marche ajouté. La condition de charge détaillée n’est pas précisée.",
			"evidenceIds": [
				"lacme-341804-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "lacme-341804-20260926",
			"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Outillage%202026.pdf#page=14",
			"sourceLabel": "Lacmé, catalogue Outillage 2026, p. 14, réf. 341804",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation du tableau en L/min, sans facteur de marche ajouté. La condition de charge détaillée n’est pas précisée."
		}
	],
	"fieldSources": {
		"mpn": [
			"lacme-341804-20260926"
		],
		"workingPressureBar": [
			"lacme-341804-20260926"
		],
		"airflowLpm": [
			"lacme-341804-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 210,
		"typical": 210,
		"max": 210
	}
};

export default product;
