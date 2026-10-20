import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-5305-8a",
	"slug": "shinano-si-5305-8a",
	"brand": "Shinano",
	"model": "SI-5305-8A",
	"mpn": "SI-5305-8A",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Shinano SI-5305-8A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-5305-8a.webp",
		"alt": "Repères techniques Shinano SI-5305-8A, référence SI-5305-8A",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=22",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "SI-5305-8A : perceuse réversible à mandrin de 13 mm, 800 tr/min et poignée latérale. La SI-5300A voisine accepte 10 mm et tourne à 2 000 tr/min. Le maximum publié passe de 612 à 714 L/min à 6,3 bar. Le diamètre de mandrin, le sens de rotation et la matière à percer doivent accompagner le choix du compresseur.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 25.2 CFM / 11.9 L/s. Conversion du maximum publié : 11.9 × 60 = 714 L/min.",
			"Référence fabricant : SI-5305-8A.",
			"Vitesse à vide publiée : 800 tr/min.",
			"Capacité du mandrin : 13 mm.",
			"Couple maximal publié : 11.66 Nm."
		],
		"limitations": [
			"Le couple maximal de 11,66 Nm ne garantit pas un diamètre de perçage dans toute matière. La tenue et la réaction de l’ensemble suivent la notice.",
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
				"shinano-si-5305-8a-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 25.2 CFM / 11.9 L/s. Conversion du maximum publié : 11.9 × 60 = 714 L/min.",
			"evidenceIds": [
				"shinano-si-5305-8a-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "800 tr/min",
			"evidenceIds": [
				"shinano-si-5305-8a-20260926"
			]
		},
		{
			"label": "Capacité du mandrin",
			"value": "13 mm",
			"evidenceIds": [
				"shinano-si-5305-8a-20260926"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "11.66 Nm",
			"evidenceIds": [
				"shinano-si-5305-8a-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,45 kg",
			"evidenceIds": [
				"shinano-si-5305-8a-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-5305-8a-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=22",
			"sourceLabel": "Shinano, catalogue général 2025, p. 22, réf. SI-5305-8A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 25.2 CFM / 11.9 L/s. Conversion du maximum publié : 11.9 × 60 = 714 L/min."
		},
		{
			"id": "shinano-si-5305-8a-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "shinano-si-5300a-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=22",
			"sourceLabel": "Shinano, catalogue général 2025, p. 22, réf. SI-5300A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 21.6 CFM / 10.2 L/s. Conversion du maximum publié : 10.2 × 60 = 612 L/min."
		},
		{
			"id": "shinano-si-5300a-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
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
			"shinano-si-5305-8a-20260926"
		],
		"workingPressureBar": [
			"shinano-si-5305-8a-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-5305-8a-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 714,
		"typical": 714,
		"max": 714
	}
};

export default product;
