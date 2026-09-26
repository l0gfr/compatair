const product = {
	"id": "lacme-ponceuse-orbitale-pro-152-mm-aspirante",
	"slug": "lacme-ponceuse-orbitale-pro-152-mm-aspirante",
	"brand": "Lacmé",
	"model": "Ponceuse orbitale PRO 152 mm aspirante",
	"mpn": "344314",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Lacmé Ponceuse orbitale PRO 152 mm aspirante",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 7,
		"max": 7
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/lacme-ponceuse-orbitale-pro-152-mm-aspirante.webp",
		"alt": "Repères techniques Lacmé Ponceuse orbitale PRO 152 mm aspirante, référence 344314",
		"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Outillage%202026.pdf#page=30",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Lacmé Ponceuse orbitale PRO 152 mm aspirante, référence 344314. Le tableau fabricant publie 350 L/min et une plage d’utilisation de 6 à 7 bar.",
		"verifiedFacts": [
			"Le fabricant publie une plage d’utilisation de 6 à 7 bar. CompatAir retient 7 bar pour le dimensionnement, borne haute documentée, et non une pression d’essai inventée.",
			"Consommation du tableau en L/min, sans facteur de marche ajouté. La condition de charge détaillée n’est pas précisée.",
			"Référence fabricant : 344314."
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
				"lacme-344314-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation du tableau en L/min, sans facteur de marche ajouté. La condition de charge détaillée n’est pas précisée.",
			"evidenceIds": [
				"lacme-344314-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "lacme-344314-20260926",
			"sourceUrl": "https://s3.eu-west-1.amazonaws.com/s37.lacme.com/crm/Catalogues/LACME%20-%20Catalogue%20Outillage%202026.pdf#page=30",
			"sourceLabel": "Lacmé, catalogue Outillage 2026, p. 30, réf. 344314",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation du tableau en L/min, sans facteur de marche ajouté. La condition de charge détaillée n’est pas précisée."
		}
	],
	"fieldSources": {
		"mpn": [
			"lacme-344314-20260926"
		],
		"workingPressureBar": [
			"lacme-344314-20260926"
		],
		"airflowLpm": [
			"lacme-344314-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 350,
		"typical": 350,
		"max": 350
	}
};

export default product;
