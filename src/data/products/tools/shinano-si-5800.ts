import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-5800",
	"slug": "shinano-si-5800",
	"brand": "Shinano",
	"model": "SI-5800",
	"mpn": "SI-5800",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Shinano SI-5800",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-5800.webp",
		"alt": "Repères techniques Shinano SI-5800, référence SI-5800",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=23",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-5800, référence SI-5800. Le tableau fabricant publie 510 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Capacité du mandrin : 8 mm. Masse publiée : 1,80 kg.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 18 CFM / 8.5 L/s. Conversion du maximum publié : 8.5 × 60 = 510 L/min.",
			"Référence fabricant : SI-5800.",
			"Capacité du mandrin : 8 mm.",
			"Masse publiée : 1,80 kg."
		],
		"limitations": [
			"Caractéristiques déclarées par Shinano, sans essai physique CompatAir.",
			"La consommation moyenne, lorsqu’elle est également publiée, n’est pas utilisée à la place de la consommation de référence.",
			"La taille de raccord ne suffit pas à établir son profil de filetage ; vérifier la version livrée.",
			"La ligne Chuck Size associe 8 mm à 5/8 pouce, conversion incohérente. La dimension métrique est corroborée par la fraise de 8 mm décrite sur la page ; faire confirmer le montage par la notice individuelle."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-5800-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 18 CFM / 8.5 L/s. Conversion du maximum publié : 8.5 × 60 = 510 L/min.",
			"evidenceIds": [
				"shinano-si-5800-20260926"
			]
		},
		{
			"label": "Capacité du mandrin",
			"value": "8 mm",
			"evidenceIds": [
				"shinano-si-5800-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,80 kg",
			"evidenceIds": [
				"shinano-si-5800-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-5800-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=23",
			"sourceLabel": "Shinano, catalogue général 2025, p. 23, réf. SI-5800",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 18 CFM / 8.5 L/s. Conversion du maximum publié : 8.5 × 60 = 510 L/min."
		},
		{
			"id": "shinano-si-5800-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-5800-20260926"
		],
		"workingPressureBar": [
			"shinano-si-5800-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-5800-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 510,
		"typical": 510,
		"max": 510
	}
};

export default product;
