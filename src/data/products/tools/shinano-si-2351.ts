import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-2351",
	"slug": "shinano-si-2351",
	"brand": "Shinano",
	"model": "SI-2351",
	"mpn": "SI-2351",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Shinano SI-2351",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-2351.webp",
		"alt": "Repères techniques Shinano SI-2351, référence SI-2351",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=13",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-2351. La SI-2351 utilise un plateau 180 mm à 4 500 tr/min ; la SI-2026 de la même page est en 125 mm à 5 500 tr/min. Le montage de plateau et la vitesse précèdent la comparaison pneumatique. La consigne de pression de service ne documente pas la pression de mesure de la colonne Max Air Consumption.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 24.6 CFM / 11.6 L/s. Conversion du maximum publié : 11.6 × 60 = 696 L/min.",
			"Référence fabricant : SI-2351.",
			"Dimension du plateau publiée : 180 mm.",
			"Vitesse à vide publiée : 4 500 tr/min.",
			"Masse publiée : 2,13 kg.",
			"Plateau : 180 mm.",
			"Broche : 5/8\"-11 UNC.",
			"Vitesse à vide : 4 500 tr/min.",
			"Puissance publiée : 458 W.",
			"Masse : 2,13 kg.",
			"Consommation maximale publiée, pression de mesure non appariée : 11,6 L/s.",
			"Consigne d’alimentation en fonctionnement : 0,63 MPa (6,3 bar), gâchette entièrement actionnée."
		],
		"limitations": [
			"Caractéristiques déclarées par Shinano, sans essai physique CompatAir.",
			"La consommation moyenne, lorsqu’elle est également publiée, n’est pas utilisée à la place de la consommation de référence.",
			"La taille de raccord ne suffit pas à établir son profil de filetage ; vérifier la version livrée.",
			"Débit conservé dans les spécifications ; compatibilité indéterminée jusqu’à confirmation du point de mesure par Shinano."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-2351-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 24.6 CFM / 11.6 L/s. Conversion du maximum publié : 11.6 × 60 = 696 L/min.",
			"evidenceIds": [
				"shinano-si-2351-20260926"
			]
		},
		{
			"label": "Dimension du plateau publiée",
			"value": "180 mm",
			"evidenceIds": [
				"shinano-si-2351-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "4 500 tr/min",
			"evidenceIds": [
				"shinano-si-2351-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2,13 kg",
			"evidenceIds": [
				"shinano-si-2351-20260926"
			]
		},
		{
			"label": "Plateau",
			"value": "180 mm",
			"evidenceIds": [
				"shinano-si-2351-reserved-20261103-1"
			]
		},
		{
			"label": "Broche",
			"value": "5/8\"-11 UNC",
			"evidenceIds": [
				"shinano-si-2351-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "4 500 tr/min",
			"evidenceIds": [
				"shinano-si-2351-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "458 W",
			"evidenceIds": [
				"shinano-si-2351-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "2,13 kg",
			"evidenceIds": [
				"shinano-si-2351-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation maximale publiée, pression de mesure non appariée",
			"value": "11,6 L/s",
			"evidenceIds": [
				"shinano-si-2351-reserved-20261103-1"
			]
		},
		{
			"label": "Consigne d’alimentation en fonctionnement",
			"value": "0,63 MPa (6,3 bar), gâchette entièrement actionnée",
			"evidenceIds": [
				"shinano-si-2351-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-2351-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=13",
			"sourceLabel": "Shinano, catalogue général 2025, p. 13, réf. SI-2351",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 24.6 CFM / 11.6 L/s. Conversion du maximum publié : 11.6 × 60 = 696 L/min."
		},
		{
			"id": "shinano-si-2351-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "shinano-si-2351-reserved-20261103-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=13",
			"sourceLabel": "Shinano : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. La SI-2351 utilise un plateau 180 mm à 4 500 tr/min ; la SI-2026 de la même page est en 125 mm à 5 500 tr/min. Le montage de plateau et la vitesse précèdent la comparaison pneumatique. La consigne de pression de service ne documente pas la pression de mesure de la colonne Max Air Consumption."
		},
		{
			"id": "shinano-si-2351-reserved-20261103-1-3",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. La SI-2351 utilise un plateau 180 mm à 4 500 tr/min ; la SI-2026 de la même page est en 125 mm à 5 500 tr/min. Le montage de plateau et la vitesse précèdent la comparaison pneumatique. La consigne de pression de service ne documente pas la pression de mesure de la colonne Max Air Consumption."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-2351-20260926"
		],
		"workingPressureBar": [
			"shinano-si-2351-20260926-workingpressurebar-1"
		],
		"demandModel": [
			"shinano-si-2351-reserved-20261103-1"
		],
		"demandExplanation": [
			"shinano-si-2351-reserved-20261103-1"
		],
		"editorial": [
			"shinano-si-2351-reserved-20261103-1"
		],
		"specifications": [
			"shinano-si-2351-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "Le catalogue donne une consommation maximale et une consigne d’alimentation de 0,63 MPa en fonctionnement, sans apparier explicitement la pression de mesure au débit. Ce point manque pour dimensionner."
};

export default product;
