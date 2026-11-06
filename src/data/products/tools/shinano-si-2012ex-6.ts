import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-2012ex-6",
	"slug": "shinano-si-2012ex-6",
	"brand": "Shinano",
	"model": "SI-2012EX-6",
	"mpn": "SI-2012EX-6",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Shinano SI-2012EX-6",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-2012ex-6-20261106.svg",
		"alt": "Repères techniques Shinano SI-2012EX-6, référence SI-2012EX-6",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=19",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-2012EX-6, référence SI-2012EX-6. Le tableau fabricant publie 678 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Version et équipement : Pince 6 mm ; puissance publiée 388 W. Vitesse à vide publiée : 25000 tr/min.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation maximale, colonne Max Air Consumption : 24 CFM / 11.3 L/s, soit 678 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-2012EX-6.",
			"Version et équipement : Pince 6 mm ; puissance publiée 388 W.",
			"Vitesse à vide publiée : 25000 tr/min.",
			"Masse publiée : 0.6 kg."
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
				"shinano-si-2012ex-6-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 24 CFM / 11.3 L/s, soit 678 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-2012ex-6-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Pince 6 mm ; puissance publiée 388 W.",
			"evidenceIds": [
				"shinano-si-2012ex-6-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "25000 tr/min",
			"evidenceIds": [
				"shinano-si-2012ex-6-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.6 kg",
			"evidenceIds": [
				"shinano-si-2012ex-6-20260926"
			]
		},
		{
			"label": "Consommation publiée, hors dimensionnement",
			"value": "678 L/min ; Le régime de consommation publié reste documentaire : la pression de service ne prouve pas sa pression de mesure. Compatibilité indéterminée.",
			"evidenceIds": [
				"review:2026-11-06-followup:shinano-si-2012ex-6:1",
				"review:2026-11-06-followup:shinano-si-2012ex-6:2"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-2012ex-6-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=19",
			"sourceLabel": "Shinano, catalogue général 2025, p. 19, réf. SI-2012EX-6",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 24 CFM / 11.3 L/s, soit 678 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-2012ex-6-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "review:2026-11-06-followup:shinano-si-2012ex-6:1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=19",
			"sourceLabel": "Shinano, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "P19/43 :meuleusepince6mm/388W/25000rpm/11,3Lsmax/0,6kg,distincteSI2001S. La page43 prescrit6,3bar sans apparier la mesure678Lmin. Donnée documentaire non dimensionnante. SHA-256 du document complet : 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b."
		},
		{
			"id": "review:2026-11-06-followup:shinano-si-2012ex-6:2",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "P19/43 :meuleusepince6mm/388W/25000rpm/11,3Lsmax/0,6kg,distincteSI2001S. La page43 prescrit6,3bar sans apparier la mesure678Lmin. Donnée documentaire non dimensionnante. SHA-256 du document complet : 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-2012ex-6-20260926"
		],
		"workingPressureBar": [
			"shinano-si-2012ex-6-20260926-workingpressurebar-1"
		],
		"demandExplanation": [
			"review:2026-11-06-followup:shinano-si-2012ex-6:1",
			"review:2026-11-06-followup:shinano-si-2012ex-6:2"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "Le régime de consommation publié reste documentaire : la pression de service ne prouve pas sa pression de mesure. Compatibilité indéterminée."
};

export default product;
