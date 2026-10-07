import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cleco-24raa19am3",
	"slug": "cleco-24raa19am3",
	"brand": "Cleco",
	"model": "24RAA19AM3",
	"mpn": "24RAA19AM3",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "Cleco 24RAA19AM3",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cleco-24raa19am3.webp",
		"alt": "Repères techniques Cleco 24RAA19AM3, référence 24RAA19AM3",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=75",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Cleco 24RAA19AM3, référence 24RAA19AM3. Le tableau fabricant publie 680 L/min et une plage d’utilisation de 6,2 à 6,2 bar. Plage de couple publiée : 10 à 19 Nm. Vitesse à vide publiée : 700 tr/min.",
		"verifiedFacts": [
			"Performances publiées à 6,2 bar à l’entrée de l’outil, note de la page 75.",
			"Consommation publiée dans la colonne Air Cons. m³/min, multipliée par 1 000. Le régime de mesure n’est pas précisé dans ce tableau.",
			"Référence fabricant : 24RAA19AM3.",
			"Plage de couple publiée : 10 à 19 Nm.",
			"Vitesse à vide publiée : 700 tr/min.",
			"Longueur publiée : 380 mm."
		],
		"limitations": [
			"Données de catalogue industriel, sans essai physique CompatAir. Disponibilité et révision livrée à confirmer avec le fournisseur.",
			"Source : catalogue GI-1250-EU, édition archivée du fabricant. Vérifier la référence et la notice de la révision effectivement livrée."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Performances publiées à 6,2 bar à l’entrée de l’outil, note de la page 75.",
			"evidenceIds": [
				"cleco-24raa19am3-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée dans la colonne Air Cons. m³/min, multipliée par 1 000. Le régime de mesure n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"cleco-24raa19am3-20260926"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "10 à 19 Nm",
			"evidenceIds": [
				"cleco-24raa19am3-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "700 tr/min",
			"evidenceIds": [
				"cleco-24raa19am3-20260926"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "380 mm",
			"evidenceIds": [
				"cleco-24raa19am3-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.4 kg",
			"evidenceIds": [
				"cleco-24raa19am3-20260926"
			]
		},
		{
			"label": "Sortie",
			"value": "Carré 3/8 pouce",
			"evidenceIds": [
				"cleco-24raa19am3-20260926"
			]
		},
		{
			"label": "Forme",
			"value": "Tête d’angle",
			"evidenceIds": [
				"cleco-24raa19am3-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "cleco-24raa19am3-20260926",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=75",
			"sourceLabel": "Cleco et Master Power, catalogue GI-1250-EU, p. 75, réf. 24RAA19AM3",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée dans la colonne Air Cons. m³/min, multipliée par 1 000. Le régime de mesure n’est pas précisé dans ce tableau."
		}
	],
	"fieldSources": {
		"mpn": [
			"cleco-24raa19am3-20260926"
		],
		"workingPressureBar": [
			"cleco-24raa19am3-20260926"
		],
		"airflowLpm": [
			"cleco-24raa19am3-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 680,
		"typical": 680,
		"max": 680
	}
};

export default product;
