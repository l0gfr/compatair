import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-2051sg",
	"slug": "shinano-si-2051sg",
	"brand": "Shinano",
	"model": "SI-2051SG",
	"mpn": "SI-2051SG",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Shinano SI-2051SG",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-2051sg.webp",
		"alt": "Repères techniques Shinano SI-2051SG, référence SI-2051SG",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=21",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-2051SG, référence SI-2051SG. Le tableau fabricant publie 168 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 50 000 tr/min. Pince fournie : 3 mm ; pince 1/8 pouce proposée en option.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 6 CFM / 2.8 L/s. Conversion du maximum publié : 2.8 × 60 = 168 L/min.",
			"Référence fabricant : SI-2051SG.",
			"Vitesse à vide publiée : 50 000 tr/min.",
			"Pince fournie : 3 mm ; pince 1/8 pouce proposée en option.",
			"Masse publiée : 0,19 kg."
		],
		"limitations": [
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
				"shinano-si-2051sg-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 6 CFM / 2.8 L/s. Conversion du maximum publié : 2.8 × 60 = 168 L/min.",
			"evidenceIds": [
				"shinano-si-2051sg-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "50 000 tr/min",
			"evidenceIds": [
				"shinano-si-2051sg-20260926"
			]
		},
		{
			"label": "Pince fournie",
			"value": "3 mm ; pince 1/8 pouce proposée en option",
			"evidenceIds": [
				"shinano-si-2051sg-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,19 kg",
			"evidenceIds": [
				"shinano-si-2051sg-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-2051sg-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=21",
			"sourceLabel": "Shinano, catalogue général 2025, p. 21, réf. SI-2051SG",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 6 CFM / 2.8 L/s. Conversion du maximum publié : 2.8 × 60 = 168 L/min."
		},
		{
			"id": "shinano-si-2051sg-20260926-workingpressurebar-1",
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
			"shinano-si-2051sg-20260926"
		],
		"workingPressureBar": [
			"shinano-si-2051sg-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-2051sg-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 168,
		"typical": 168,
		"max": 168
	}
};

export default product;
