const product = {
	"id": "lacme-mini-ponceuse-vibrante-ind",
	"slug": "lacme-mini-ponceuse-vibrante-ind",
	"brand": "Lacmé",
	"model": "Mini ponceuse vibrante IND",
	"mpn": "344704",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "Lacmé Mini ponceuse vibrante IND",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 7,
		"max": 7
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/lacme-mini-ponceuse-vibrante-ind.webp",
		"alt": "Repères techniques Lacmé Mini ponceuse vibrante IND, référence 344704",
		"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Outillage%202026.pdf#page=30",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Lacmé Mini ponceuse vibrante IND, référence 344704. Le tableau fabricant publie 255 L/min et une plage d’utilisation de 6 à 7 bar.",
		"verifiedFacts": [
			"Le fabricant publie une plage d’utilisation de 6 à 7 bar. CompatAir retient 7 bar pour le dimensionnement, borne haute documentée, et non une pression d’essai inventée.",
			"Consommation du tableau en L/min, sans facteur de marche ajouté. La condition de charge détaillée n’est pas précisée.",
			"Référence fabricant : 344704."
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
				"lacme-344704-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation du tableau en L/min, sans facteur de marche ajouté. La condition de charge détaillée n’est pas précisée.",
			"evidenceIds": [
				"lacme-344704-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "lacme-344704-20260926",
			"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Outillage%202026.pdf#page=30",
			"sourceLabel": "Lacmé, catalogue Outillage 2026, p. 30, réf. 344704",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation du tableau en L/min, sans facteur de marche ajouté. La condition de charge détaillée n’est pas précisée."
		}
	],
	"fieldSources": {
		"mpn": [
			"lacme-344704-20260926"
		],
		"workingPressureBar": [
			"lacme-344704-20260926"
		],
		"airflowLpm": [
			"lacme-344704-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 255,
		"typical": 255,
		"max": 255
	}
};

export default product;
