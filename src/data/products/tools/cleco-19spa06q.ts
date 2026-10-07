import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cleco-19spa06q",
	"slug": "cleco-19spa06q",
	"brand": "Cleco",
	"model": "19SPA06Q",
	"mpn": "19SPA06Q",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Cleco 19SPA06Q",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cleco-19spa06q.webp",
		"alt": "Repères techniques Cleco 19SPA06Q, référence 19SPA06Q",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=71",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Cleco 19SPA06Q, référence 19SPA06Q. Le tableau fabricant publie 310 L/min et une plage d’utilisation de 6,2 à 6,2 bar. Plage de couple publiée : 1.1 à 5.1 Nm. Vitesse à vide publiée : 260 tr/min.",
		"verifiedFacts": [
			"Performances publiées à 6,2 bar à l’entrée de l’outil, note de la page 71.",
			"Consommation publiée dans la colonne Air Cons. m³/min, multipliée par 1 000. Le régime de mesure n’est pas précisé dans ce tableau.",
			"Référence fabricant : 19SPA06Q.",
			"Plage de couple publiée : 1.1 à 5.1 Nm.",
			"Vitesse à vide publiée : 260 tr/min.",
			"Longueur publiée : 240 mm."
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
				"cleco-19spa06q-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée dans la colonne Air Cons. m³/min, multipliée par 1 000. Le régime de mesure n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"cleco-19spa06q-20260926"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "1.1 à 5.1 Nm",
			"evidenceIds": [
				"cleco-19spa06q-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "260 tr/min",
			"evidenceIds": [
				"cleco-19spa06q-20260926"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "240 mm",
			"evidenceIds": [
				"cleco-19spa06q-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.68 kg",
			"evidenceIds": [
				"cleco-19spa06q-20260926"
			]
		},
		{
			"label": "Sortie",
			"value": "Porte-embout rapide 1/4 pouce",
			"evidenceIds": [
				"cleco-19spa06q-20260926"
			]
		},
		{
			"label": "Commande",
			"value": "Démarrage par appui, réversible",
			"evidenceIds": [
				"cleco-19spa06q-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "cleco-19spa06q-20260926",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=71",
			"sourceLabel": "Cleco et Master Power, catalogue GI-1250-EU, p. 71, réf. 19SPA06Q",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée dans la colonne Air Cons. m³/min, multipliée par 1 000. Le régime de mesure n’est pas précisé dans ce tableau."
		}
	],
	"fieldSources": {
		"mpn": [
			"cleco-19spa06q-20260926"
		],
		"workingPressureBar": [
			"cleco-19spa06q-20260926"
		],
		"airflowLpm": [
			"cleco-19spa06q-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 310,
		"typical": 310,
		"max": 310
	}
};

export default product;
