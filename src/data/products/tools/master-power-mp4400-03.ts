import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "master-power-mp4400-03",
	"slug": "master-power-mp4400-03",
	"brand": "Master Power",
	"model": "MP4400-03",
	"mpn": "MP4400-03",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Master Power MP4400-03",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/master-power-mp4400-03.webp",
		"alt": "Repères techniques Master Power MP4400-03, référence MP4400-03",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=56",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Master Power MP4400-03, référence MP4400-03. Le tableau fabricant publie 430 L/min et une plage d’utilisation de 6,2 à 6,2 bar. Plateau, donnée à confirmer : Le tableau indique 3,5 sans unité explicite. Confirmer le plateau livré avant achat. Orbite publiée : 3/16 pouce.",
		"verifiedFacts": [
			"Note General de la page 56 : performances mesurées à 6,2 bar à l’entrée de l’outil.",
			"Note de la série : Air consumption 0.43 m³/min, soit 430 L/min. Le régime maximum ou moyen n’est pas précisé.",
			"Référence fabricant : MP4400-03.",
			"Plateau, donnée à confirmer : Le tableau indique 3,5 sans unité explicite. Confirmer le plateau livré avant achat.",
			"Orbite publiée : 3/16 pouce.",
			"Vitesse publiée : 12 000 tr/min."
		],
		"limitations": [
			"Catalogue GI-1250-EU archivé : disponibilité et équipement à confirmer avec le fournisseur.",
			"Le titre central vacuum apparaît deux fois dans le tableau ; le type exact d’aspiration doit être confirmé par la notice individuelle.",
			"Pas de mesure physique CompatAir.",
			"Le tableau de spécifications indique 3,5 pour le plateau, tandis que la présentation de gamme cite des abrasifs de 3, 5 et 6 pouces. Cette ambiguïté de dimension n’est pas résolue par une conversion supposée."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Note General de la page 56 : performances mesurées à 6,2 bar à l’entrée de l’outil.",
			"evidenceIds": [
				"master-power-mp4400-03-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Note de la série : Air consumption 0.43 m³/min, soit 430 L/min. Le régime maximum ou moyen n’est pas précisé.",
			"evidenceIds": [
				"master-power-mp4400-03-20260926"
			]
		},
		{
			"label": "Plateau, donnée à confirmer",
			"value": "Le tableau indique 3,5 sans unité explicite. Confirmer le plateau livré avant achat.",
			"evidenceIds": [
				"master-power-mp4400-03-20260926"
			]
		},
		{
			"label": "Orbite publiée",
			"value": "3/16 pouce",
			"evidenceIds": [
				"master-power-mp4400-03-20260926"
			]
		},
		{
			"label": "Vitesse publiée",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"master-power-mp4400-03-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.71 kg",
			"evidenceIds": [
				"master-power-mp4400-03-20260926"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "129.79 mm",
			"evidenceIds": [
				"master-power-mp4400-03-20260926"
			]
		},
		{
			"label": "Fixation du plateau",
			"value": "5/16-24",
			"evidenceIds": [
				"master-power-mp4400-03-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "master-power-mp4400-03-20260926",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=56",
			"sourceLabel": "Cleco et Master Power, catalogue GI-1250-EU, p. 56, réf. MP4400-03",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Note de la série : Air consumption 0.43 m³/min, soit 430 L/min. Le régime maximum ou moyen n’est pas précisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"master-power-mp4400-03-20260926"
		],
		"workingPressureBar": [
			"master-power-mp4400-03-20260926"
		],
		"airflowLpm": [
			"master-power-mp4400-03-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 430,
		"typical": 430,
		"max": 430
	}
};

export default product;
