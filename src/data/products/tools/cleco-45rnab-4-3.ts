import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cleco-45rnab-4-3",
	"slug": "cleco-45rnab-4-3",
	"brand": "Cleco",
	"model": "45RNAB-4-3",
	"mpn": "45RNAB-4-3",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "Cleco 45RNAB-4-3",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cleco-45rnab-4-3.webp",
		"alt": "Repères techniques Cleco 45RNAB-4-3, référence 45RNAB-4-3",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=79",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Cleco 45RNAB-4-3, référence 45RNAB-4-3. Le tableau fabricant publie 940 L/min et une plage d’utilisation de 6,2 à 6,2 bar. Plage de couple publiée : 19 à 30 Nm. Sortie : Carré 3/8 pouce.",
		"verifiedFacts": [
			"Performances publiées à 6,2 bar à l’entrée de l’outil, note de la page 79.",
			"Consommation publiée dans la colonne Air Cons. m³/min, multipliée par 1 000. Le régime de mesure n’est pas précisé dans ce tableau.",
			"Référence fabricant : 45RNAB-4-3.",
			"Plage de couple publiée : 19 à 30 Nm.",
			"Sortie : Carré 3/8 pouce.",
			"Vitesse à vide publiée : 560 tr/min."
		],
		"limitations": [
			"Données de catalogue industriel, sans essai physique CompatAir. Disponibilité et révision livrée à confirmer avec le fournisseur.",
			"Source : catalogue GI-1250-EU, édition archivée du fabricant. Vérifier la référence et la notice de la révision effectivement livrée."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Performances publiées à 6,2 bar à l’entrée de l’outil, note de la page 79.",
			"evidenceIds": [
				"cleco-45rnab-4-3-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée dans la colonne Air Cons. m³/min, multipliée par 1 000. Le régime de mesure n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"cleco-45rnab-4-3-20260926"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "19 à 30 Nm",
			"evidenceIds": [
				"cleco-45rnab-4-3-20260926"
			]
		},
		{
			"label": "Sortie",
			"value": "Carré 3/8 pouce",
			"evidenceIds": [
				"cleco-45rnab-4-3-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "560 tr/min",
			"evidenceIds": [
				"cleco-45rnab-4-3-20260926"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "368 mm",
			"evidenceIds": [
				"cleco-45rnab-4-3-20260926"
			]
		},
		{
			"label": "Masse hors bras de réaction",
			"value": "2.4 kg",
			"evidenceIds": [
				"cleco-45rnab-4-3-20260926"
			]
		},
		{
			"label": "Commande",
			"value": "Corps droit ; gâchette",
			"evidenceIds": [
				"cleco-45rnab-4-3-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "cleco-45rnab-4-3-20260926",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=79",
			"sourceLabel": "Cleco et Master Power, catalogue GI-1250-EU, p. 79, réf. 45RNAB-4-3",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée dans la colonne Air Cons. m³/min, multipliée par 1 000. Le régime de mesure n’est pas précisé dans ce tableau."
		}
	],
	"fieldSources": {
		"mpn": [
			"cleco-45rnab-4-3-20260926"
		],
		"workingPressureBar": [
			"cleco-45rnab-4-3-20260926"
		],
		"airflowLpm": [
			"cleco-45rnab-4-3-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 940,
		"typical": 940,
		"max": 940
	}
};

export default product;
