import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cleco-19tta05q",
	"slug": "cleco-19tta05q",
	"brand": "Cleco",
	"model": "19TTA05Q",
	"mpn": "19TTA05Q",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Cleco 19TTA05Q",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cleco-19tta05q.webp",
		"alt": "Repères techniques Cleco 19TTA05Q, référence 19TTA05Q",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=69",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Cleco 19TTA05Q, référence 19TTA05Q. Le tableau fabricant publie 310 L/min et une plage d’utilisation de 6,2 à 6,2 bar. Plage de couple publiée : 1.1 à 5.1 Nm. Vitesse à vide publiée : 660 tr/min.",
		"verifiedFacts": [
			"Performances publiées à 6,2 bar à l’entrée de l’outil, note de la page 69.",
			"Consommation générale publiée de 310 L/min pour la série 19 ; le catalogue ne la qualifie pas de maximum ou de moyenne.",
			"Référence fabricant : 19TTA05Q.",
			"Plage de couple publiée : 1.1 à 5.1 Nm.",
			"Vitesse à vide publiée : 660 tr/min.",
			"Série et commande : 19T ; gâchette."
		],
		"limitations": [
			"Données de catalogue industriel, sans essai physique CompatAir. Disponibilité et révision livrée à confirmer avec le fournisseur.",
			"Source : catalogue GI-1250-EU, édition archivée du fabricant. Vérifier la référence et la notice de la révision effectivement livrée."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Performances publiées à 6,2 bar à l’entrée de l’outil, note de la page 69.",
			"evidenceIds": [
				"cleco-19tta05q-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation générale publiée de 310 L/min pour la série 19 ; le catalogue ne la qualifie pas de maximum ou de moyenne.",
			"evidenceIds": [
				"cleco-19tta05q-20260926"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "1.1 à 5.1 Nm",
			"evidenceIds": [
				"cleco-19tta05q-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "660 tr/min",
			"evidenceIds": [
				"cleco-19tta05q-20260926"
			]
		},
		{
			"label": "Série et commande",
			"value": "19T ; gâchette",
			"evidenceIds": [
				"cleco-19tta05q-20260926"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "210 mm",
			"evidenceIds": [
				"cleco-19tta05q-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.7 kg",
			"evidenceIds": [
				"cleco-19tta05q-20260926"
			]
		},
		{
			"label": "Sortie",
			"value": "Porte-embout rapide 1/4 pouce",
			"evidenceIds": [
				"cleco-19tta05q-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "cleco-19tta05q-20260926",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=69",
			"sourceLabel": "Cleco et Master Power, catalogue GI-1250-EU, p. 69, réf. 19TTA05Q",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation générale publiée de 310 L/min pour la série 19 ; le catalogue ne la qualifie pas de maximum ou de moyenne."
		}
	],
	"fieldSources": {
		"mpn": [
			"cleco-19tta05q-20260926"
		],
		"workingPressureBar": [
			"cleco-19tta05q-20260926"
		],
		"airflowLpm": [
			"cleco-19tta05q-20260926"
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
