const product = {
	"id": "lacme-ponceuse-orbitale-ind-152-mm-3-en-1",
	"slug": "lacme-ponceuse-orbitale-ind-152-mm-3-en-1",
	"brand": "Lacmé",
	"model": "Ponceuse orbitale IND 152 mm 3 en 1",
	"mpn": "344404",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Lacmé Ponceuse orbitale IND 152 mm 3 en 1",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 7,
		"max": 7
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/lacme-ponceuse-orbitale-ind-152-mm-3-en-1.webp",
		"alt": "Repères techniques Lacmé Ponceuse orbitale IND 152 mm 3 en 1, référence 344404",
		"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Outillage%202026.pdf#page=30",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Lacmé Ponceuse orbitale IND 152 mm 3 en 1, référence 344404. Le tableau fabricant publie 370 L/min et une plage d’utilisation de 6 à 7 bar.",
		"verifiedFacts": [
			"Le fabricant publie une plage d’utilisation de 6 à 7 bar. CompatAir retient 7 bar pour le dimensionnement, borne haute documentée, et non une pression d’essai inventée.",
			"Consommation du tableau en L/min, sans facteur de marche ajouté. La condition de charge détaillée n’est pas précisée.",
			"Référence fabricant : 344404."
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
				"lacme-344404-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation du tableau en L/min, sans facteur de marche ajouté. La condition de charge détaillée n’est pas précisée.",
			"evidenceIds": [
				"lacme-344404-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "lacme-344404-20260926",
			"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Outillage%202026.pdf#page=30",
			"sourceLabel": "Lacmé, catalogue Outillage 2026, p. 30, réf. 344404",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation du tableau en L/min, sans facteur de marche ajouté. La condition de charge détaillée n’est pas précisée."
		}
	],
	"fieldSources": {
		"mpn": [
			"lacme-344404-20260926"
		],
		"workingPressureBar": [
			"lacme-344404-20260926"
		],
		"airflowLpm": [
			"lacme-344404-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 370,
		"typical": 370,
		"max": 370
	}
};

export default product;
