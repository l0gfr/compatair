import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-1490b",
	"slug": "shinano-si-1490b",
	"brand": "Shinano",
	"model": "SI-1490B",
	"mpn": "SI-1490B",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Shinano SI-1490B",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-1490b-20261106.svg",
		"alt": "Repères techniques Shinano SI-1490B, référence SI-1490B",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=5",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-1490B, référence SI-1490B. Le tableau fabricant publie 864 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple maximal publié : 850 Nm. Masse publiée : 1,9 kg.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 30.6 CFM / 14.4 L/s. Conversion du maximum publié : 14.4 × 60 = 864 L/min.",
			"Référence fabricant : SI-1490B.",
			"Couple maximal publié : 850 Nm.",
			"Masse publiée : 1,9 kg."
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
				"shinano-si-1490b-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 30.6 CFM / 14.4 L/s. Conversion du maximum publié : 14.4 × 60 = 864 L/min.",
			"evidenceIds": [
				"shinano-si-1490b-20260926"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "850 Nm",
			"evidenceIds": [
				"shinano-si-1490b-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,9 kg",
			"evidenceIds": [
				"shinano-si-1490b-20260926"
			]
		},
		{
			"label": "Consommation publiée, hors dimensionnement",
			"value": "864 L/min ; Le régime de consommation publié reste documentaire : la pression de service ne prouve pas sa pression de mesure. Compatibilité indéterminée.",
			"evidenceIds": [
				"review:2026-11-06-followup:shinano-si-1490b:1",
				"review:2026-11-06-followup:shinano-si-1490b:2"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-1490b-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=5",
			"sourceLabel": "Shinano, catalogue général 2025, p. 5, réf. SI-1490B",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 30.6 CFM / 14.4 L/s. Conversion du maximum publié : 14.4 × 60 = 864 L/min."
		},
		{
			"id": "shinano-si-1490b-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "review:2026-11-06-followup:shinano-si-1490b:1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=5",
			"sourceLabel": "Shinano, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "P5/43 :clé850Nm/1,9kg/14,4Lsmax,distincteSI1490BSR àaxeallongé.6,3bar est une consigne d’utilisation séparée;864Lmin ne prouve pas une consommationmesuréeàcettepression. SHA-256 du document complet : 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b."
		},
		{
			"id": "review:2026-11-06-followup:shinano-si-1490b:2",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "P5/43 :clé850Nm/1,9kg/14,4Lsmax,distincteSI1490BSR àaxeallongé.6,3bar est une consigne d’utilisation séparée;864Lmin ne prouve pas une consommationmesuréeàcettepression. SHA-256 du document complet : 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-1490b-20260926"
		],
		"workingPressureBar": [
			"shinano-si-1490b-20260926-workingpressurebar-1"
		],
		"demandExplanation": [
			"review:2026-11-06-followup:shinano-si-1490b:1",
			"review:2026-11-06-followup:shinano-si-1490b:2"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "Le régime de consommation publié reste documentaire : la pression de service ne prouve pas sa pression de mesure. Compatibilité indéterminée."
};

export default product;
