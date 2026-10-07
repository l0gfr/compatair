import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cleco-64ttk205d6",
	"slug": "cleco-64ttk205d6",
	"brand": "Cleco",
	"model": "64TTK205D6",
	"mpn": "64TTK205D6",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "Cleco 64TTK205D6",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cleco-64ttk205d6.webp",
		"alt": "Repères techniques Cleco 64TTK205D6, référence 64TTK205D6",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=79",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Cleco 64TTK205D6, référence 64TTK205D6. Le tableau fabricant publie 1 700 L/min et une plage d’utilisation de 6,2 à 6,2 bar. Plage de couple publiée : 154 à 205 Nm. Sortie : Carré 3/4 pouce.",
		"verifiedFacts": [
			"Performances publiées à 6,2 bar à l’entrée de l’outil, note de la page 79.",
			"Consommation publiée dans la colonne Air Cons. m³/min, multipliée par 1 000. Le régime de mesure n’est pas précisé dans ce tableau.",
			"Référence fabricant : 64TTK205D6.",
			"Plage de couple publiée : 154 à 205 Nm.",
			"Sortie : Carré 3/4 pouce.",
			"Vitesse à vide publiée : 115 tr/min."
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
				"cleco-64ttk205d6-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée dans la colonne Air Cons. m³/min, multipliée par 1 000. Le régime de mesure n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"cleco-64ttk205d6-20260926"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "154 à 205 Nm",
			"evidenceIds": [
				"cleco-64ttk205d6-20260926"
			]
		},
		{
			"label": "Sortie",
			"value": "Carré 3/4 pouce",
			"evidenceIds": [
				"cleco-64ttk205d6-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "115 tr/min",
			"evidenceIds": [
				"cleco-64ttk205d6-20260926"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "316 mm",
			"evidenceIds": [
				"cleco-64ttk205d6-20260926"
			]
		},
		{
			"label": "Masse hors bras de réaction",
			"value": "3.7 kg",
			"evidenceIds": [
				"cleco-64ttk205d6-20260926"
			]
		},
		{
			"label": "Commande",
			"value": "Pistolet, gâchette ; Selectork",
			"evidenceIds": [
				"cleco-64ttk205d6-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "cleco-64ttk205d6-20260926",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=79",
			"sourceLabel": "Cleco et Master Power, catalogue GI-1250-EU, p. 79, réf. 64TTK205D6",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée dans la colonne Air Cons. m³/min, multipliée par 1 000. Le régime de mesure n’est pas précisé dans ce tableau."
		}
	],
	"fieldSources": {
		"mpn": [
			"cleco-64ttk205d6-20260926"
		],
		"workingPressureBar": [
			"cleco-64ttk205d6-20260926"
		],
		"airflowLpm": [
			"cleco-64ttk205d6-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 1700,
		"typical": 1700,
		"max": 1700
	}
};

export default product;
