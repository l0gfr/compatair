import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cleco-80pthh35q",
	"slug": "cleco-80pthh35q",
	"brand": "Cleco",
	"model": "80PTHH35Q",
	"mpn": "80PTHH35Q",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Cleco 80PTHH35Q",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cleco-80pthh35q.webp",
		"alt": "Repères techniques Cleco 80PTHH35Q, référence 80PTHH35Q",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=86",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Cleco 80PTHH35Q, référence 80PTHH35Q. Le tableau fabricant publie 600 L/min et une plage d’utilisation de 6 à 6 bar. Plage de couple publiée : 50 à 80 Nm. Vitesse à vide publiée : 3500 tr/min.",
		"verifiedFacts": [
			"Performances publiées à 6 bar à l’entrée de l’outil, note de la page 86.",
			"Le tableau distingue 300 L/min à vide et 600 L/min en charge à 6 bar. Le calcul conserve la plus élevée des deux valeurs publiées (600 L/min), sans cycle de travail supposé.",
			"Référence fabricant : 80PTHH35Q.",
			"Plage de couple publiée : 50 à 80 Nm.",
			"Vitesse à vide publiée : 3500 tr/min.",
			"Consommation à vide publiée : 300.0 L/min."
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
				"cleco-80pthh35q-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Le tableau distingue 300 L/min à vide et 600 L/min en charge à 6 bar. Le calcul conserve la plus élevée des deux valeurs publiées (600 L/min), sans cycle de travail supposé.",
			"evidenceIds": [
				"cleco-80pthh35q-20260926"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "50 à 80 Nm",
			"evidenceIds": [
				"cleco-80pthh35q-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "3500 tr/min",
			"evidenceIds": [
				"cleco-80pthh35q-20260926"
			]
		},
		{
			"label": "Consommation à vide publiée",
			"value": "300.0 L/min",
			"evidenceIds": [
				"cleco-80pthh35q-20260926"
			]
		},
		{
			"label": "Consommation en charge publiée",
			"value": "600.0 L/min",
			"evidenceIds": [
				"cleco-80pthh35q-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.45 kg",
			"evidenceIds": [
				"cleco-80pthh35q-20260926"
			]
		},
		{
			"label": "Sortie",
			"value": "7/16” QC",
			"evidenceIds": [
				"cleco-80pthh35q-20260926"
			]
		},
		{
			"label": "Arrêt automatique",
			"value": "Oui (PTHH)",
			"evidenceIds": [
				"cleco-80pthh35q-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "cleco-80pthh35q-20260926",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=86",
			"sourceLabel": "Cleco et Master Power, catalogue GI-1250-EU, p. 86, réf. 80PTHH35Q",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le tableau distingue 300 L/min à vide et 600 L/min en charge à 6 bar. Le calcul conserve la plus élevée des deux valeurs publiées (600 L/min), sans cycle de travail supposé."
		}
	],
	"fieldSources": {
		"mpn": [
			"cleco-80pthh35q-20260926"
		],
		"workingPressureBar": [
			"cleco-80pthh35q-20260926"
		],
		"airflowLpm": [
			"cleco-80pthh35q-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 600,
		"typical": 600,
		"max": 600
	}
};

export default product;
