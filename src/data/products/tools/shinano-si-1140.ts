import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-1140",
	"slug": "shinano-si-1140",
	"brand": "Shinano",
	"model": "SI-1140",
	"mpn": "SI-1140",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Shinano SI-1140",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-1140.webp",
		"alt": "Repères techniques Shinano SI-1140, référence SI-1140",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=8",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "SI-1140 : visseuse droite à embrayage réglable, pour une capacité annoncée de 4 mm et un couple maximal de 1,5 Nm. La SI-1070 voisine est une visseuse à chocs. La fonction de serrage et la commande précèdent la comparaison du débit : la SI-1140 publie 5,4 L/s maximum, soit 324 L/min, à 6,3 bar en fonctionnement.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 11.4 CFM / 5.4 L/s. Conversion du maximum publié : 5.4 × 60 = 324 L/min.",
			"Référence fabricant : SI-1140.",
			"Couple maximal publié : 1.5 Nm.",
			"Vitesse à vide publiée : 1 700 tr/min.",
			"Masse publiée : 0,62 kg."
		],
		"limitations": [
			"La capacité de vis n’est pas un couple de serrage garanti pour tout assemblage. Le débit moyen ne remplace pas le maximum du catalogue.",
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
				"shinano-si-1140-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 11.4 CFM / 5.4 L/s. Conversion du maximum publié : 5.4 × 60 = 324 L/min.",
			"evidenceIds": [
				"shinano-si-1140-20260926"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "1.5 Nm",
			"evidenceIds": [
				"shinano-si-1140-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "1 700 tr/min",
			"evidenceIds": [
				"shinano-si-1140-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,62 kg",
			"evidenceIds": [
				"shinano-si-1140-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-1140-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=8",
			"sourceLabel": "Shinano, catalogue général 2025, p. 8, réf. SI-1140",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 11.4 CFM / 5.4 L/s. Conversion du maximum publié : 5.4 × 60 = 324 L/min."
		},
		{
			"id": "shinano-si-1140-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "shinano-si-1070-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=8",
			"sourceLabel": "Shinano, catalogue général 2025, p. 8, réf. SI-1070",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 12.6 CFM / 5.9 L/s. Conversion du maximum publié : 5.9 × 60 = 354 L/min."
		},
		{
			"id": "shinano-si-1070-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "shinano-si-1365d-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=7",
			"sourceLabel": "Shinano, catalogue général 2025, p. 7, réf. SI-1365D",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 19.8 CFM / 9.3 L/s. Conversion du maximum publié : 9.3 × 60 = 558 L/min."
		},
		{
			"id": "shinano-si-1365d-20260926-workingpressurebar-1",
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
			"shinano-si-1140-20260926"
		],
		"workingPressureBar": [
			"shinano-si-1140-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-1140-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 324,
		"typical": 324,
		"max": 324
	}
};

export default product;
