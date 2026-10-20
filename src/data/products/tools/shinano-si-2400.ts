import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-2400",
	"slug": "shinano-si-2400",
	"brand": "Shinano",
	"model": "SI-2400",
	"mpn": "SI-2400",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "Shinano SI-2400",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-2400.webp",
		"alt": "Repères techniques Shinano SI-2400, référence SI-2400",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=18",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "SI-2400 : polisseuse à rotation simple, plateau de 180 mm et broche mâle 5/8-11 UNC. La SI-3100P voisine fonctionne en double action sur un plateau de 150 mm. Le SI-2400 publie 2 000 tr/min et 11,3 L/s maximum, soit 678 L/min à 6,3 bar. Le mouvement, le tampon et le support traité doivent être choisis avant de comparer l’alimentation.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation maximale, colonne Max Air Consumption : 24 CFM / 11.3 L/s, soit 678 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-2400.",
			"Version et équipement : Rotation simple ; plateau 180 mm ; broche mâle 5/8-11 UNC.",
			"Vitesse à vide publiée : 2000 tr/min.",
			"Masse publiée : 2.24 kg."
		],
		"limitations": [
			"Les vitesses de mouvements différents ne donnent pas un rapport de productivité. Aucun résultat de finition ni débit d’eau n’est déduit de cette version.",
			"Caractéristiques déclarées par Shinano, sans essai physique CompatAir.",
			"La consommation moyenne, lorsqu’elle est également publiée, n’est pas utilisée à la place de la consommation de référence.",
			"La taille de raccord ne suffit pas à établir son profil de filetage ; vérifier la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-2400-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 24 CFM / 11.3 L/s, soit 678 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-2400-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Rotation simple ; plateau 180 mm ; broche mâle 5/8-11 UNC.",
			"evidenceIds": [
				"shinano-si-2400-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "2000 tr/min",
			"evidenceIds": [
				"shinano-si-2400-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2.24 kg",
			"evidenceIds": [
				"shinano-si-2400-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-2400-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=18",
			"sourceLabel": "Shinano, catalogue général 2025, p. 18, réf. SI-2400",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 24 CFM / 11.3 L/s, soit 678 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-2400-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "shinano-si-3100p-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=18",
			"sourceLabel": "Shinano, catalogue général 2025, p. 18, réf. SI-3100P",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 13.8 CFM / 6.5 L/s, soit 390 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-3100p-20260926-workingpressurebar-1",
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
			"shinano-si-2400-20260926"
		],
		"workingPressureBar": [
			"shinano-si-2400-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-2400-20260926"
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
