import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cleco-8rsa-10bq",
	"slug": "cleco-8rsa-10bq",
	"brand": "Cleco",
	"model": "8RSA-10BQ",
	"mpn": "8RSA-10BQ",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Cleco 8RSA-10BQ",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cleco-8rsa-10bq.webp",
		"alt": "Repères techniques Cleco 8RSA-10BQ, référence 8RSA-10BQ",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=71",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Cleco 8RSA-10BQ, référence 8RSA-10BQ. Le tableau fabricant publie 540 L/min et une plage d’utilisation de 6,2 à 6,2 bar. Plage de couple publiée : 1.7 à 7.3 Nm. Vitesse à vide publiée : 800 tr/min.",
		"verifiedFacts": [
			"Performances publiées à 6,2 bar à l’entrée de l’outil, note de la page 71.",
			"Consommation publiée dans la colonne Air Cons. m³/min, multipliée par 1 000. Le régime de mesure n’est pas précisé dans ce tableau.",
			"Référence fabricant : 8RSA-10BQ.",
			"Plage de couple publiée : 1.7 à 7.3 Nm.",
			"Vitesse à vide publiée : 800 tr/min.",
			"Longueur publiée : 260 mm."
		],
		"limitations": [
			"Données de catalogue industriel, sans essai physique CompatAir. Disponibilité et révision livrée à confirmer avec le fournisseur.",
			"Source : catalogue GI-1250-EU, édition archivée du fabricant. Vérifier la référence et la notice de la révision effectivement livrée."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Performances publiées à 6,2 bar à l’entrée de l’outil, note de la page 71.",
			"evidenceIds": [
				"cleco-8rsa-10bq-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée dans la colonne Air Cons. m³/min, multipliée par 1 000. Le régime de mesure n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"cleco-8rsa-10bq-20260926"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "1.7 à 7.3 Nm",
			"evidenceIds": [
				"cleco-8rsa-10bq-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "800 tr/min",
			"evidenceIds": [
				"cleco-8rsa-10bq-20260926"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "260 mm",
			"evidenceIds": [
				"cleco-8rsa-10bq-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.1 kg",
			"evidenceIds": [
				"cleco-8rsa-10bq-20260926"
			]
		},
		{
			"label": "Sortie",
			"value": "Porte-embout rapide 1/4 pouce",
			"evidenceIds": [
				"cleco-8rsa-10bq-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "cleco-8rsa-10bq-20260926",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=71",
			"sourceLabel": "Cleco et Master Power, catalogue GI-1250-EU, p. 71, réf. 8RSA-10BQ",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée dans la colonne Air Cons. m³/min, multipliée par 1 000. Le régime de mesure n’est pas précisé dans ce tableau."
		}
	],
	"fieldSources": {
		"mpn": [
			"cleco-8rsa-10bq-20260926"
		],
		"workingPressureBar": [
			"cleco-8rsa-10bq-20260926"
		],
		"airflowLpm": [
			"cleco-8rsa-10bq-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 540,
		"typical": 540,
		"max": 540
	}
};

export default product;
