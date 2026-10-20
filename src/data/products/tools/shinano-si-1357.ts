import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-1357",
	"slug": "shinano-si-1357",
	"brand": "Shinano",
	"model": "SI-1357",
	"mpn": "SI-1357",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Shinano SI-1357",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-1357.webp",
		"alt": "Repères techniques Shinano SI-1357, référence SI-1357",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=5",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "SI-1357 : clé à chocs compacte à carré de 3/8 pouce, 200 Nm maximum et masse publiée de 1,10 kg. La SI-1355 voisine à commande papillon donne 90 Nm maximum. Le SI-1357 annonce 10,2 L/s maximum à 6,3 bar, soit 612 L/min, contre 456 L/min pour le SI-1355. La commande et le couple requis doivent accompagner cette hausse du besoin d’air.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 21.6 CFM / 10.2 L/s. Conversion du maximum publié : 10.2 × 60 = 612 L/min.",
			"Référence fabricant : SI-1357.",
			"Masse publiée : 1,10 kg.",
			"Carré de sortie : 3/8 pouce.",
			"Couple maximal publié : 200 Nm."
		],
		"limitations": [
			"Le couple maximal catalogue ne garantit pas le desserrage ou le serrage d’un assemblage donné. Aucun débit moyen n’est utilisé pour réduire le besoin.",
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
				"shinano-si-1357-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 21.6 CFM / 10.2 L/s. Conversion du maximum publié : 10.2 × 60 = 612 L/min.",
			"evidenceIds": [
				"shinano-si-1357-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,10 kg",
			"evidenceIds": [
				"shinano-si-1357-20260926"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "3/8 pouce",
			"evidenceIds": [
				"shinano-si-1357-20260926"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "200 Nm",
			"evidenceIds": [
				"shinano-si-1357-20260926"
			]
		},
		{
			"label": "Vitesses à vide",
			"value": "8 000 tr/min avant ; 9 000 tr/min arrière",
			"evidenceIds": [
				"shinano-si-1357-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-1357-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=5",
			"sourceLabel": "Shinano, catalogue général 2025, p. 5, réf. SI-1357",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 21.6 CFM / 10.2 L/s. Conversion du maximum publié : 10.2 × 60 = 612 L/min."
		},
		{
			"id": "shinano-si-1357-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "shinano-si-1355-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=4",
			"sourceLabel": "Shinano, catalogue général 2025, p. 4, réf. SI-1355",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 16.2 CFM / 7.6 L/s. Conversion du maximum publié : 7.6 × 60 = 456 L/min."
		},
		{
			"id": "shinano-si-1355-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "shinano-si-1345ex-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=9",
			"sourceLabel": "Shinano, catalogue général 2025, p. 9, réf. SI-1345EX",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 15 CFM / 7.1 L/s. Conversion du maximum publié : 7.1 × 60 = 426 L/min."
		},
		{
			"id": "shinano-si-1345ex-20260926-workingpressurebar-1",
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
			"shinano-si-1357-20260926"
		],
		"workingPressureBar": [
			"shinano-si-1357-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-1357-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 612,
		"typical": 612,
		"max": 612
	}
};

export default product;
