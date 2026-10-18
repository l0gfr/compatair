import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-3003a",
	"slug": "shinano-si-3003a",
	"brand": "Shinano",
	"model": "SI-3003A",
	"mpn": "SI-3003A",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "Shinano SI-3003A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-3003a.webp",
		"alt": "Repères techniques Shinano SI-3003A, référence SI-3003A",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=13",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "SI-3003A : ponceuse orbitale à plateau de 75 × 100 mm à revêtement Leather, orbite de 4 mm et 9 000 tr/min. La SI-3001AM voisine emploie un plateau autoagrippant et annonce 390 L/min au maximum, contre 474 pour la SI-3003A à 6,3 bar. La fixation de l’abrasif doit rester explicite.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation maximale, colonne Max Air Consumption : 16.8 CFM / 7.9 L/s, soit 474 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-3003A.",
			"Version et équipement : Plateau rectangulaire 75 × 100 mm, revêtement Leather selon Shinano ; orbite 4 mm ; version sans aspiration autonome.",
			"Vitesse à vide publiée : 9000 tr/min.",
			"Masse publiée : 1.05 kg."
		],
		"limitations": [
			"Le suffixe M désigne le plateau autoagrippant ; il n’ajoute pas une aspiration autonome.",
			"Le plateau et l’orbite doivent convenir au travail ; l’écart de débit ne suffit pas à départager la finition."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-3003a-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 16.8 CFM / 7.9 L/s, soit 474 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-3003a-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Plateau rectangulaire 75 × 100 mm, revêtement Leather selon Shinano ; orbite 4 mm ; version sans aspiration autonome.",
			"evidenceIds": [
				"shinano-si-3003a-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "9000 tr/min",
			"evidenceIds": [
				"shinano-si-3003a-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.05 kg",
			"evidenceIds": [
				"shinano-si-3003a-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-3003a-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=13",
			"sourceLabel": "Shinano, catalogue général 2025, p. 13, réf. SI-3003A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 16.8 CFM / 7.9 L/s, soit 474 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-3003a-20260926-workingpressurebar-1",
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
			"shinano-si-3003a-20260926"
		],
		"workingPressureBar": [
			"shinano-si-3003a-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-3003a-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 474,
		"typical": 474,
		"max": 474
	}
};

export default product;
