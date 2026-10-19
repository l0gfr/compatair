import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cleco-11pthh35q",
	"slug": "cleco-11pthh35q",
	"brand": "Cleco",
	"model": "11PTHH35Q",
	"mpn": "11PTHH35Q",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Cleco 11PTHH35Q",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cleco-11pthh35q.webp",
		"alt": "Repères techniques Cleco 11PTHH35Q, référence 11PTHH35Q",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=86",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "11PTHH35Q : sortie rapide de 1/4 pouce, contre carré de 3/8 pouce pour le 11PTHH353. Le tableau commun donne 6 à 11 Nm, 3 500 tr/min, 150 L/min à vide et 300 L/min en charge à 6 bar. La différence d’interface ne demande donc pas un autre débit déclaré.",
		"verifiedFacts": [
			"Performances publiées à 6 bar à l’entrée de l’outil, note de la page 86.",
			"Le tableau distingue 150 L/min à vide et 300 L/min en charge à 6 bar. Le calcul conserve la plus élevée des deux valeurs publiées (300 L/min), sans cycle de travail supposé.",
			"Référence fabricant : 11PTHH35Q.",
			"Plage de couple publiée : 6 à 11 Nm.",
			"Vitesse à vide publiée : 3500 tr/min.",
			"Consommation à vide publiée : 150.0 L/min."
		],
		"limitations": [
			"Le Q pèse 0,85 kg contre 0,83 kg pour le 353. Vérifier l’embout et le montage réellement livrés ; le débit en charge n’est pas réduit selon un temps de gâchette supposé.",
			"Données de catalogue industriel, sans essai physique CompatAir. Disponibilité et révision livrée à confirmer avec le fournisseur.",
			"Source : catalogue GI-1250-EU, édition archivée du fabricant. Vérifier la référence et la notice de la révision effectivement livrée."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Performances publiées à 6 bar à l’entrée de l’outil, note de la page 86.",
			"evidenceIds": [
				"cleco-11pthh35q-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Le tableau distingue 150 L/min à vide et 300 L/min en charge à 6 bar. Le calcul conserve la plus élevée des deux valeurs publiées (300 L/min), sans cycle de travail supposé.",
			"evidenceIds": [
				"cleco-11pthh35q-20260926"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "6 à 11 Nm",
			"evidenceIds": [
				"cleco-11pthh35q-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "3500 tr/min",
			"evidenceIds": [
				"cleco-11pthh35q-20260926"
			]
		},
		{
			"label": "Consommation à vide publiée",
			"value": "150.0 L/min",
			"evidenceIds": [
				"cleco-11pthh35q-20260926"
			]
		},
		{
			"label": "Consommation en charge publiée",
			"value": "300.0 L/min",
			"evidenceIds": [
				"cleco-11pthh35q-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.85 kg",
			"evidenceIds": [
				"cleco-11pthh35q-20260926"
			]
		},
		{
			"label": "Sortie",
			"value": "1/4” QC",
			"evidenceIds": [
				"cleco-11pthh35q-20260926"
			]
		},
		{
			"label": "Arrêt automatique",
			"value": "Oui (PTHH)",
			"evidenceIds": [
				"cleco-11pthh35q-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "cleco-11pthh35q-20260926",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=86",
			"sourceLabel": "Cleco et Master Power, catalogue GI-1250-EU, p. 86, réf. 11PTHH35Q",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le tableau distingue 150 L/min à vide et 300 L/min en charge à 6 bar. Le calcul conserve la plus élevée des deux valeurs publiées (300 L/min), sans cycle de travail supposé."
		},
		{
			"id": "cleco-11pthh353-20260926",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=86",
			"sourceLabel": "Cleco et Master Power, catalogue GI-1250-EU, p. 86, réf. 11PTHH353",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le tableau distingue 150 L/min à vide et 300 L/min en charge à 6 bar. Le calcul conserve la plus élevée des deux valeurs publiées (300 L/min), sans cycle de travail supposé."
		}
	],
	"fieldSources": {
		"mpn": [
			"cleco-11pthh35q-20260926"
		],
		"workingPressureBar": [
			"cleco-11pthh35q-20260926"
		],
		"airflowLpm": [
			"cleco-11pthh35q-20260926"
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
