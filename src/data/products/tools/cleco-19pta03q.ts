import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cleco-19pta03q",
	"slug": "cleco-19pta03q",
	"brand": "Cleco",
	"model": "19PTA03Q",
	"mpn": "19PTA03Q",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Cleco 19PTA03Q",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cleco-19pta03q.webp",
		"alt": "Repères techniques Cleco 19PTA03Q, référence 19PTA03Q",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=69",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Cleco 19PTA03Q. Le catalogue GI-1250-EU rattache les performances à 6,2 bar, mais ne qualifie pas les 310 L/min de maximum ni de consommation en charge. Cette valeur reste documentaire et le verdict reste indéterminé. Performances publiées à 6,2 bar à l’entrée de l’outil, note de la page 69. Référence fabricant : 19PTA03Q. Plage de couple publiée : 0.6 à 2.9 Nm. Vitesse à vide publiée : 1900 tr/min. Série et commande : 19P ; gâchette.",
		"verifiedFacts": [
			"Performances publiées à 6,2 bar à l’entrée de l’outil, note de la page 69.",
			"Référence fabricant : 19PTA03Q.",
			"Plage de couple publiée : 0.6 à 2.9 Nm.",
			"Vitesse à vide publiée : 1900 tr/min.",
			"Série et commande : 19P ; gâchette.",
			"Consommation de régime non précisé publiée : 310 L/min."
		],
		"limitations": [
			"Données de catalogue industriel, sans essai physique CompatAir. Disponibilité et révision livrée à confirmer avec le fournisseur.",
			"Source : catalogue GI-1250-EU, édition archivée du fabricant. Vérifier la référence et la notice de la révision effectivement livrée.",
			"Le catalogue GI-1250-EU rattache les performances à 6,2 bar, mais ne qualifie pas les 310 L/min de maximum ni de consommation en charge. Cette valeur reste documentaire et le verdict reste indéterminé."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Performances publiées à 6,2 bar à l’entrée de l’outil, note de la page 69.",
			"evidenceIds": [
				"cleco-19pta03q-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation de régime non précisé publiée : 310 L/min.",
			"evidenceIds": [
				"cleco-19pta03q-reserved-20261031-1"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "0.6 à 2.9 Nm",
			"evidenceIds": [
				"cleco-19pta03q-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "1900 tr/min",
			"evidenceIds": [
				"cleco-19pta03q-20260926"
			]
		},
		{
			"label": "Série et commande",
			"value": "19P ; gâchette",
			"evidenceIds": [
				"cleco-19pta03q-20260926"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "209 mm",
			"evidenceIds": [
				"cleco-19pta03q-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.7 kg",
			"evidenceIds": [
				"cleco-19pta03q-20260926"
			]
		},
		{
			"label": "Sortie",
			"value": "Porte-embout rapide 1/4 pouce",
			"evidenceIds": [
				"cleco-19pta03q-20260926"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":310,\"typical\":310,\"max\":310},\"workingPressureBar\":{\"min\":6.2,\"typical\":6.2,\"max\":6.2}}",
			"evidenceIds": [
				"cleco-19pta03q-20260926",
				"cleco-19pta03q-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "cleco-19pta03q-20260926",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=69",
			"sourceLabel": "Cleco et Master Power, catalogue GI-1250-EU, p. 69, réf. 19PTA03Q",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation générale publiée de 310 L/min pour la série 19 ; le catalogue ne la qualifie pas de maximum ou de moyenne."
		},
		{
			"id": "cleco-19pta03q-reserved-20261031-1",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=69",
			"sourceLabel": "Cleco 19PTA03Q : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 8668d5e77a6b2469dc9b9012841e65bbfb947234a8087faa6fdd90384b3babac. Le catalogue GI-1250-EU rattache les performances à 6,2 bar, mais ne qualifie pas les 310 L/min de maximum ni de consommation en charge. Cette valeur reste documentaire et le verdict reste indéterminé."
		}
	],
	"fieldSources": {
		"mpn": [
			"cleco-19pta03q-20260926"
		],
		"workingPressureBar": [
			"cleco-19pta03q-20260926"
		],
		"airflowLpm": [
			"cleco-19pta03q-20260926"
		],
		"airflowBasis": [
			"cleco-19pta03q-reserved-20261031-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 310,
		"typical": 310,
		"max": 310
	},
	"airflowBasis": "unqualified"
};

export default product;
