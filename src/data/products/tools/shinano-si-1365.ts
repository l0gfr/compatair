import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-1365",
	"slug": "shinano-si-1365",
	"brand": "Shinano",
	"model": "SI-1365",
	"mpn": "SI-1365",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Shinano SI-1365",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-1365.webp",
		"alt": "Repères techniques Shinano SI-1365, référence SI-1365",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=4",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "SI-1365 : clé à chocs 3/8 pouce à double marteau, 100 Nm maximum et plage de travail annoncée de 0–80 Nm. La SI-1357 voisine est plus compacte, 126 mm contre 134 mm, et annonce 200 Nm maximum. Le SI-1365 donne 9,3 L/s maximum à 6,3 bar, soit 558 L/min, contre 612 pour la SI-1357. Le couple visé et l’espace autour de la fixation doivent accompagner ce choix.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 19.8 CFM / 9.3 L/s. Conversion du maximum publié : 9.3 × 60 = 558 L/min.",
			"Référence fabricant : SI-1365.",
			"Couple maximal publié : 100 Nm.",
			"Vitesse à vide publiée : 8 000 tr/min.",
			"Masse publiée : 1,31 kg."
		],
		"limitations": [
			"Ces maxima ne garantissent pas le desserrage d’une fixation donnée. Aucun débit moyen ni rapport entre couples n’est utilisé comme facteur de réduction de consommation.",
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
				"shinano-si-1365-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 19.8 CFM / 9.3 L/s. Conversion du maximum publié : 9.3 × 60 = 558 L/min.",
			"evidenceIds": [
				"shinano-si-1365-20260926"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "100 Nm",
			"evidenceIds": [
				"shinano-si-1365-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "8 000 tr/min",
			"evidenceIds": [
				"shinano-si-1365-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,31 kg",
			"evidenceIds": [
				"shinano-si-1365-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-1365-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=4",
			"sourceLabel": "Shinano, catalogue général 2025, p. 4, réf. SI-1365",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 19.8 CFM / 9.3 L/s. Conversion du maximum publié : 9.3 × 60 = 558 L/min."
		},
		{
			"id": "shinano-si-1365-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
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
			"shinano-si-1365-20260926"
		],
		"workingPressureBar": [
			"shinano-si-1365-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-1365-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 558,
		"typical": 558,
		"max": 558
	}
};

export default product;
