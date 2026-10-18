import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cleco-wt-2119-12",
	"slug": "cleco-wt-2119-12",
	"brand": "Cleco",
	"model": "WT-2119-12",
	"mpn": "WT-2119-12",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Cleco WT-2119-12",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cleco-wt-2119-12.webp",
		"alt": "Repères techniques Cleco WT-2119-12, référence WT-2119-12",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=89",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "WT-2119-12 : clé à chocs à sortie de 1½ pouce, 3 300 tr/min et plage publiée de 1 600 à 3 500 Nm. Le tableau donne 2 970 L/min à 6,2 bar, contre 2 830 pour la WT-2110-8 à sortie de 1 pouce. Le montage et la plage de couple diffèrent avant toute comparaison d’air.",
		"verifiedFacts": [
			"Performances publiées à 6,2 bar à l’entrée de l’outil, note de la page 89.",
			"Consommation publiée dans la colonne Air Cons. m³/min, multipliée par 1 000. Le régime de mesure n’est pas précisé dans ce tableau.",
			"Référence fabricant : WT-2119-12.",
			"Plage de couple publiée : 1600 à 3500 Nm.",
			"Vitesse à vide publiée : 3300 tr/min.",
			"Impacts par minute : 820."
		],
		"limitations": [
			"Le régime des 2 970 L/min n’est pas précisé ; ce débit n’est pas traité comme un maximum en charge.",
			"Le couple de décollement est une donnée distincte du couple de travail ; aucun chiffre de desserrage ne devient un réglage de serrage."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Performances publiées à 6,2 bar à l’entrée de l’outil, note de la page 89.",
			"evidenceIds": [
				"cleco-wt-2119-12-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée dans la colonne Air Cons. m³/min, multipliée par 1 000. Le régime de mesure n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"cleco-wt-2119-12-20260926"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "1600 à 3500 Nm",
			"evidenceIds": [
				"cleco-wt-2119-12-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "3300 tr/min",
			"evidenceIds": [
				"cleco-wt-2119-12-20260926"
			]
		},
		{
			"label": "Impacts par minute",
			"value": "820",
			"evidenceIds": [
				"cleco-wt-2119-12-20260926"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "362 mm",
			"evidenceIds": [
				"cleco-wt-2119-12-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "13.1 kg",
			"evidenceIds": [
				"cleco-wt-2119-12-20260926"
			]
		},
		{
			"label": "Préhension",
			"value": "Poignée en D, commande intérieure",
			"evidenceIds": [
				"cleco-wt-2119-12-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "cleco-wt-2119-12-20260926",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=89",
			"sourceLabel": "Cleco et Master Power, catalogue GI-1250-EU, p. 89, réf. WT-2119-12",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée dans la colonne Air Cons. m³/min, multipliée par 1 000. Le régime de mesure n’est pas précisé dans ce tableau."
		}
	],
	"fieldSources": {
		"mpn": [
			"cleco-wt-2119-12-20260926"
		],
		"workingPressureBar": [
			"cleco-wt-2119-12-20260926"
		],
		"airflowLpm": [
			"cleco-wt-2119-12-20260926"
		],
		"airflowBasis": [
			"cleco-wt-2119-12-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 2970,
		"typical": 2970,
		"max": 2970
	},
	"airflowBasis": "unqualified"
};

export default product;
