import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-2210",
	"slug": "shinano-si-2210",
	"brand": "Shinano",
	"model": "SI-2210",
	"mpn": "SI-2210",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Shinano SI-2210",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-2210.webp",
		"alt": "Repères techniques Shinano SI-2210, référence SI-2210",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=15",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "SI-2210 : ponceuse rotative à disque de 75 mm et broche 7/16-20 UNF, 475 W et 19 000 tr/min. La SI-2201-2 de 50 mm utilise une broche 1/4-20 UNC et annonce 17 000 tr/min. Les deux dimensions de plateau et les filetages doivent rester distincts dans le choix des accessoires.",
		"verifiedFacts": [
			"SI-2210 contre SI-2201-2 : plateaux 75 et 50 mm, broches 7/16-20 UNF et 1/4-20 UNC, vitesses 19 000 et 17 000 tr/min. Maxima publiés 11,0 et 7,1 L/s ; ces maxima n’ont pas de pression d’essai appariée.",
			"La consommation ne constitue pas un point de dimensionnement tant que ses conditions de mesure ne sont pas établies."
		],
		"limitations": [
			"Le maximum de 11 L/s, soit 660 L/min, reste hors calcul faute de pression d’essai appariée.",
			"La SI-2210 est décrite Single Action ; aucune orbite n’est inventée depuis la catégorie de son voisin."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Consigne générale : 0,63 MPa (6,3 bar) au fonctionnement. Elle ne démontre pas la pression de mesure de la consommation publiée.",
			"evidenceIds": [
				"review-20261025-shinano-si-2210-s030"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 23.4 CFM / 11 L/s, soit 660 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-2210-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Plateau nominal 75 mm ; broche 7/16-20 UNF.",
			"evidenceIds": [
				"shinano-si-2210-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "19000 tr/min",
			"evidenceIds": [
				"shinano-si-2210-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.99 kg",
			"evidenceIds": [
				"shinano-si-2210-20260926"
			]
		},
		{
			"label": "Consommation maximale publiée (pression de mesure non appariée)",
			"value": "660 L/min",
			"evidenceIds": [
				"review-20261025-shinano-si-2210-s030"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-2210-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=15",
			"sourceLabel": "Shinano, catalogue général 2025, p. 15, réf. SI-2210",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 23.4 CFM / 11 L/s, soit 660 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-2210-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "review-20261025-shinano-si-2210-s030",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=15",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s030, pages PDF 15, 43",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:27.990842+00:00, SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. SI-2210 contre SI-2201-2 : plateaux 75 et 50 mm, broches 7/16-20 UNF et 1/4-20 UNC, vitesses 19 000 et 17 000 tr/min. Maxima publiés 11,0 et 7,1 L/s ; ces maxima n’ont pas de pression d’essai appariée. Limite : Le maximum de 11 L/s, soit 660 L/min, reste hors calcul faute de pression d’essai appariée."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-2210-20260926"
		],
		"workingPressureBar": [
			"shinano-si-2210-20260926-workingpressurebar-1",
			"review-20261025-shinano-si-2210-s030"
		],
		"demandExplanation": [
			"review-20261025-shinano-si-2210-s030"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : Le maximum de 11 L/s, soit 660 L/min, reste hors calcul faute de pression d’essai appariée."
	],
	"demandExplanation": "Consommation maximale publiée de 660 L/min, sans pression de mesure explicitement appariée dans les passages lus. La consigne générale de service de 6,3 bar reste distincte de ce débit ; le profil exige un point de consommation et pression documenté avant de conclure."
};

export default product;
