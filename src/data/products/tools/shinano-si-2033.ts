import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-2033",
	"slug": "shinano-si-2033",
	"brand": "Shinano",
	"model": "SI-2033",
	"mpn": "SI-2033",
	"categoryId": "tronconneuse",
	"category": "tronconneuse",
	"label": "Shinano SI-2033",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-2033.webp",
		"alt": "Repères techniques Shinano SI-2033, référence SI-2033",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=20",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "La SI-2033 est une tronçonneuse à disque rotatif de 75 mm, annoncée à 20 000 tr/min à vide. Pour son alimentation, retenir les 678 L/min maximaux ; pour l’accessoire, distinguer cette rotation de l’oscillation de la SI-4300.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 24 CFM / 11.3 L/s. Conversion du maximum publié : 11.3 × 60 = 678 L/min.",
			"Référence fabricant : SI-2033.",
			"Vitesse à vide publiée : 20 000 tr/min.",
			"Masse publiée : 1,00 kg.",
			"La SI-2033 publie 11,3 L/s au maximum, soit 678 L/min ; la SI-4300 publie 9,1 L/s, soit 546 L/min. Les 132 L/min d’écart ne comparent pas un même procédé de coupe.",
			"Le tableau indique un disque de 75 mm et une broche de 9,5 mm pour la SI-2033 ; la SI-4300 utilise un disque de 63 mm oscillant sur 2,8°. Les 20 000 tr/min de la première ne se confondent pas avec les 20 000 oscillations/min de la seconde."
		],
		"limitations": [
			"Caractéristiques déclarées par Shinano, sans essai physique CompatAir.",
			"La consommation moyenne, lorsqu’elle est également publiée, n’est pas utilisée à la place de la consommation de référence.",
			"La taille de raccord ne suffit pas à établir son profil de filetage ; vérifier la version livrée.",
			"Vérifier l’alésage, le disque et sa vitesse admissible pour la SI-2033. La destination tôle ou tube indiquée au catalogue ne fournit pas une épaisseur universelle ni une permission d’employer un accessoire d’outil oscillant."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-2033-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 24 CFM / 11.3 L/s. Conversion du maximum publié : 11.3 × 60 = 678 L/min.",
			"evidenceIds": [
				"shinano-si-2033-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "20 000 tr/min",
			"evidenceIds": [
				"shinano-si-2033-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,00 kg",
			"evidenceIds": [
				"shinano-si-2033-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-2033-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=20",
			"sourceLabel": "Shinano, catalogue général 2025, p. 20, réf. SI-2033",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 24 CFM / 11.3 L/s. Conversion du maximum publié : 11.3 × 60 = 678 L/min."
		},
		{
			"id": "shinano-si-2033-20260926-workingpressurebar-1",
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
			"shinano-si-2033-20260926"
		],
		"workingPressureBar": [
			"shinano-si-2033-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-2033-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 678,
		"typical": 678,
		"max": 678
	}
};

export default product;
