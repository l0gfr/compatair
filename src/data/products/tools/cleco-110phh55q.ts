import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cleco-110phh55q",
	"slug": "cleco-110phh55q",
	"brand": "Cleco",
	"model": "110PHH55Q",
	"mpn": "110PHH55Q",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Cleco 110PHH55Q",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cleco-110phh55q.webp",
		"alt": "Repères techniques Cleco 110PHH55Q, référence 110PHH55Q",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=86",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Cleco 110PHH55Q, référence 110PHH55Q. Le tableau fabricant publie 900 L/min et une plage d’utilisation de 6 à 6 bar. Plage de couple publiée : 75 à 110 Nm. Vitesse à vide publiée : 5500 tr/min.",
		"verifiedFacts": [
			"Performances publiées à 6 bar à l’entrée de l’outil, note de la page 86.",
			"Le tableau distingue 900 L/min à vide et 800 L/min en charge à 6 bar. Le calcul conserve la plus élevée des deux valeurs publiées (900 L/min), sans cycle de travail supposé.",
			"Référence fabricant : 110PHH55Q.",
			"Plage de couple publiée : 75 à 110 Nm.",
			"Vitesse à vide publiée : 5500 tr/min.",
			"Consommation à vide publiée : 900.0 L/min."
		],
		"limitations": [
			"Données de catalogue industriel, sans essai physique CompatAir. Disponibilité et révision livrée à confirmer avec le fournisseur.",
			"Source : catalogue GI-1250-EU, édition archivée du fabricant. Vérifier la référence et la notice de la révision effectivement livrée."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Performances publiées à 6 bar à l’entrée de l’outil, note de la page 86.",
			"evidenceIds": [
				"cleco-110phh55q-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Le tableau distingue 900 L/min à vide et 800 L/min en charge à 6 bar. Le calcul conserve la plus élevée des deux valeurs publiées (900 L/min), sans cycle de travail supposé.",
			"evidenceIds": [
				"cleco-110phh55q-20260926"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "75 à 110 Nm",
			"evidenceIds": [
				"cleco-110phh55q-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "5500 tr/min",
			"evidenceIds": [
				"cleco-110phh55q-20260926"
			]
		},
		{
			"label": "Consommation à vide publiée",
			"value": "900.0 L/min",
			"evidenceIds": [
				"cleco-110phh55q-20260926"
			]
		},
		{
			"label": "Consommation en charge publiée",
			"value": "800.0 L/min",
			"evidenceIds": [
				"cleco-110phh55q-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.66 kg",
			"evidenceIds": [
				"cleco-110phh55q-20260926"
			]
		},
		{
			"label": "Sortie",
			"value": "7/16” QC",
			"evidenceIds": [
				"cleco-110phh55q-20260926"
			]
		},
		{
			"label": "Arrêt automatique",
			"value": "Non (PHH)",
			"evidenceIds": [
				"cleco-110phh55q-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "cleco-110phh55q-20260926",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=86",
			"sourceLabel": "Cleco et Master Power, catalogue GI-1250-EU, p. 86, réf. 110PHH55Q",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le tableau distingue 900 L/min à vide et 800 L/min en charge à 6 bar. Le calcul conserve la plus élevée des deux valeurs publiées (900 L/min), sans cycle de travail supposé."
		}
	],
	"fieldSources": {
		"mpn": [
			"cleco-110phh55q-20260926"
		],
		"workingPressureBar": [
			"cleco-110phh55q-20260926"
		],
		"airflowLpm": [
			"cleco-110phh55q-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 900,
		"typical": 900,
		"max": 900
	}
};

export default product;
