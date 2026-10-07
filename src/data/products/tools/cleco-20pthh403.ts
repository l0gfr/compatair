import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cleco-20pthh403",
	"slug": "cleco-20pthh403",
	"brand": "Cleco",
	"model": "20PTHH403",
	"mpn": "20PTHH403",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Cleco 20PTHH403",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cleco-20pthh403.webp",
		"alt": "Repères techniques Cleco 20PTHH403, référence 20PTHH403",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=86",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Cleco 20PTHH403, référence 20PTHH403. Le tableau fabricant publie 300 L/min et une plage d’utilisation de 6 à 6 bar. Plage de couple publiée : 10 à 20 Nm. Vitesse à vide publiée : 4000 tr/min.",
		"verifiedFacts": [
			"Performances publiées à 6 bar à l’entrée de l’outil, note de la page 86.",
			"Le tableau distingue 150 L/min à vide et 300 L/min en charge à 6 bar. Le calcul conserve la plus élevée des deux valeurs publiées (300 L/min), sans cycle de travail supposé.",
			"Référence fabricant : 20PTHH403.",
			"Plage de couple publiée : 10 à 20 Nm.",
			"Vitesse à vide publiée : 4000 tr/min.",
			"Consommation à vide publiée : 150.0 L/min."
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
				"cleco-20pthh403-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Le tableau distingue 150 L/min à vide et 300 L/min en charge à 6 bar. Le calcul conserve la plus élevée des deux valeurs publiées (300 L/min), sans cycle de travail supposé.",
			"evidenceIds": [
				"cleco-20pthh403-20260926"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "10 à 20 Nm",
			"evidenceIds": [
				"cleco-20pthh403-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "4000 tr/min",
			"evidenceIds": [
				"cleco-20pthh403-20260926"
			]
		},
		{
			"label": "Consommation à vide publiée",
			"value": "150.0 L/min",
			"evidenceIds": [
				"cleco-20pthh403-20260926"
			]
		},
		{
			"label": "Consommation en charge publiée",
			"value": "300.0 L/min",
			"evidenceIds": [
				"cleco-20pthh403-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.86 kg",
			"evidenceIds": [
				"cleco-20pthh403-20260926"
			]
		},
		{
			"label": "Sortie",
			"value": "3/8” Sq.Dr.",
			"evidenceIds": [
				"cleco-20pthh403-20260926"
			]
		},
		{
			"label": "Arrêt automatique",
			"value": "Oui (PTHH)",
			"evidenceIds": [
				"cleco-20pthh403-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "cleco-20pthh403-20260926",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=86",
			"sourceLabel": "Cleco et Master Power, catalogue GI-1250-EU, p. 86, réf. 20PTHH403",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le tableau distingue 150 L/min à vide et 300 L/min en charge à 6 bar. Le calcul conserve la plus élevée des deux valeurs publiées (300 L/min), sans cycle de travail supposé."
		}
	],
	"fieldSources": {
		"mpn": [
			"cleco-20pthh403-20260926"
		],
		"workingPressureBar": [
			"cleco-20pthh403-20260926"
		],
		"airflowLpm": [
			"cleco-20pthh403-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 300,
		"typical": 300,
		"max": 300
	}
};

export default product;
