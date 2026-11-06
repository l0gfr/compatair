import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-5506",
	"slug": "shinano-si-5506",
	"brand": "Shinano",
	"model": "SI-5506",
	"mpn": "SI-5506",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Shinano SI-5506",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-5506-20261106.svg",
		"alt": "Repères techniques Shinano SI-5506, référence SI-5506",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=23",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-5506, référence SI-5506. Le tableau fabricant publie 408 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Capacité du mandrin : 10 mm. Masse publiée : 0,60 kg.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 14.4 CFM / 6.8 L/s. Conversion du maximum publié : 6.8 × 60 = 408 L/min.",
			"Référence fabricant : SI-5506.",
			"Capacité du mandrin : 10 mm.",
			"Masse publiée : 0,60 kg."
		],
		"limitations": [
			"Caractéristiques déclarées par Shinano, sans essai physique CompatAir.",
			"La consommation moyenne, lorsqu’elle est également publiée, n’est pas utilisée à la place de la consommation de référence.",
			"La taille de raccord ne suffit pas à établir son profil de filetage ; vérifier la version livrée.",
			"Le régime de consommation publié reste documentaire : la pression de service ne prouve pas sa pression de mesure. Compatibilité indéterminée."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-5506-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 14.4 CFM / 6.8 L/s. Conversion du maximum publié : 6.8 × 60 = 408 L/min.",
			"evidenceIds": [
				"shinano-si-5506-20260926"
			]
		},
		{
			"label": "Capacité du mandrin",
			"value": "10 mm",
			"evidenceIds": [
				"shinano-si-5506-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,60 kg",
			"evidenceIds": [
				"shinano-si-5506-20260926"
			]
		},
		{
			"label": "Consommation publiée, hors dimensionnement",
			"value": "408 L/min ; Le régime de consommation publié reste documentaire : la pression de service ne prouve pas sa pression de mesure. Compatibilité indéterminée.",
			"evidenceIds": [
				"review:2026-11-06-followup:shinano-si-5506:1",
				"review:2026-11-06-followup:shinano-si-5506:2"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-5506-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=23",
			"sourceLabel": "Shinano, catalogue général 2025, p. 23, réf. SI-5506",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 14.4 CFM / 6.8 L/s. Conversion du maximum publié : 6.8 × 60 = 408 L/min."
		},
		{
			"id": "shinano-si-5506-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "review:2026-11-06-followup:shinano-si-5506:1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=23",
			"sourceLabel": "Shinano, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "CatalogueShinano etp43 :référenceSI5506 distincte de la gammeSI5500. La note6,3bar est un mode d’utilisation, pas une condition explicite de mesure de consommation. Conserver maximum et performances documentaires, neutraliser le calculair. SHA-256 du document complet : 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b."
		},
		{
			"id": "review:2026-11-06-followup:shinano-si-5506:2",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "CatalogueShinano etp43 :référenceSI5506 distincte de la gammeSI5500. La note6,3bar est un mode d’utilisation, pas une condition explicite de mesure de consommation. Conserver maximum et performances documentaires, neutraliser le calculair. SHA-256 du document complet : 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-5506-20260926"
		],
		"workingPressureBar": [
			"shinano-si-5506-20260926-workingpressurebar-1"
		],
		"demandExplanation": [
			"review:2026-11-06-followup:shinano-si-5506:1",
			"review:2026-11-06-followup:shinano-si-5506:2"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "Le régime de consommation publié reste documentaire : la pression de service ne prouve pas sa pression de mesure. Compatibilité indéterminée."
};

export default product;
