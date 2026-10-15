import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-4300",
	"slug": "shinano-si-4300",
	"brand": "Shinano",
	"model": "SI-4300",
	"mpn": "SI-4300",
	"categoryId": "scie",
	"category": "scie",
	"label": "Shinano SI-4300",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-4300.webp",
		"alt": "Repères techniques Shinano SI-4300, référence SI-4300",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=25",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "La SI-4300 est un outil de coupe oscillant pour carrosserie : disque de 63 mm, angle de 2,8° et 20 000 oscillations/min à vide. Son maximum de 546 L/min ne doit pas être rapproché d’une scie alternative comme si les mouvements et les lames étaient identiques.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation maximale, colonne Max Air Consumption : 19.2 CFM / 9.1 L/s, soit 546 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-4300.",
			"Version et équipement : Disque 63 mm ; oscillation 2,8° ; cadence 20 000 oscillations/min.",
			"Masse publiée : 0.89 kg.",
			"Le tableau distingue la SI-4300 de la SI-4710 : oscillation de 2,8° et disque de 63 mm d’un côté, course alternative de 10 mm et 10 000 coups/min de l’autre. Les 20 000 oscillations/min de la SI-4300 ne sont pas des tours/min.",
			"La SI-4300 demande au maximum 9,1 L/s, soit 546 L/min, contre 2,8 L/s, soit 168 L/min pour la SI-4710. L’écart calculé de 378 L/min décrit deux demandes d’air, sans valider le même travail de coupe."
		],
		"limitations": [
			"Caractéristiques déclarées par Shinano, sans essai physique CompatAir.",
			"La consommation moyenne, lorsqu’elle est également publiée, n’est pas utilisée à la place de la consommation de référence.",
			"La taille de raccord ne suffit pas à établir son profil de filetage ; vérifier la version livrée.",
			"Ne pas déduire une épaisseur de tôle admissible des seules profondeurs montrées pour les disques de la SI-4300. La lame, sa destination, la géométrie et le matériau à couper doivent être confirmés avant choix."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-4300-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 19.2 CFM / 9.1 L/s, soit 546 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-4300-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Disque 63 mm ; oscillation 2,8° ; cadence 20 000 oscillations/min.",
			"evidenceIds": [
				"shinano-si-4300-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.89 kg",
			"evidenceIds": [
				"shinano-si-4300-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-4300-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=25",
			"sourceLabel": "Shinano, catalogue général 2025, p. 25, réf. SI-4300",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 19.2 CFM / 9.1 L/s, soit 546 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-4300-20260926-workingpressurebar-1",
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
			"shinano-si-4300-20260926"
		],
		"workingPressureBar": [
			"shinano-si-4300-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-4300-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 546,
		"typical": 546,
		"max": 546
	}
};

export default product;
