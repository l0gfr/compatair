import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-2002ex-6",
	"slug": "shinano-si-2002ex-6",
	"brand": "Shinano",
	"model": "SI-2002EX-6",
	"mpn": "SI-2002EX-6",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Shinano SI-2002EX-6",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-2002ex-6.webp",
		"alt": "Repères techniques Shinano SI-2002EX-6, référence SI-2002EX-6",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=19",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "SI-2002EX-6 : meuleuse à pince de 6 mm, 219 W et 27 000 tr/min à vide. La SI-2001S voisine porte une pince de 1/4 pouce, soit 6,35 mm. Le maximum est de 444 L/min à 6,3 bar pour la SI-2002EX-6, contre 456 pour cette voisine.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation maximale, colonne Max Air Consumption : 15.6 CFM / 7.4 L/s, soit 444 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-2002EX-6.",
			"Version et équipement : Pince 6 mm ; puissance publiée 219 W.",
			"Vitesse à vide publiée : 27000 tr/min.",
			"Masse publiée : 0.37 kg."
		],
		"limitations": [
			"Les queues de 6 et 6,35 mm ne sont pas assimilées. Vérifier le suffixe et la pince réellement installée.",
			"L’accessoire doit respecter la vitesse admissible ; l’écart de consommation ne démontre pas une performance d’usinage."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-2002ex-6-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 15.6 CFM / 7.4 L/s, soit 444 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-2002ex-6-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Pince 6 mm ; puissance publiée 219 W.",
			"evidenceIds": [
				"shinano-si-2002ex-6-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "27000 tr/min",
			"evidenceIds": [
				"shinano-si-2002ex-6-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.37 kg",
			"evidenceIds": [
				"shinano-si-2002ex-6-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-2002ex-6-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=19",
			"sourceLabel": "Shinano, catalogue général 2025, p. 19, réf. SI-2002EX-6",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 15.6 CFM / 7.4 L/s, soit 444 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-2002ex-6-20260926-workingpressurebar-1",
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
			"shinano-si-2002ex-6-20260926"
		],
		"workingPressureBar": [
			"shinano-si-2002ex-6-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-2002ex-6-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 444,
		"typical": 444,
		"max": 444
	}
};

export default product;
