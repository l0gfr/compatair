import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-1492bsr",
	"slug": "shinano-si-1492bsr",
	"brand": "Shinano",
	"model": "SI-1492BSR",
	"mpn": "SI-1492BSR",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Shinano SI-1492BSR",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-1492bsr-technical-20261116-reviews.svg",
		"alt": "Repères techniques Shinano SI-1492BSR, référence SI-1492BSR",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "La SI-1492BSR possède une enclume prolongée de deux pouces et un carré 1/2 pouce. Elle publie 830 Nm, 8 000 tr/min en marche avant et 8 500 en marche arrière ; la SI-1490BSR conserve la tête courte. Les 14,4 L/s maximum et 2,4 L/s moyens restent distincts. Le point de pression de mesure n’étant pas établi par le tableau, aucun besoin en charge n’en est déduit.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Consommation maximale, colonne Max Air Consumption : 30.6 CFM / 14.4 L/s, soit 864 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-1492BSR.",
			"Version et équipement : Carré 1/2 pouce, enclume allongée de 2 pouces ; marche arrière à pleine puissance ; couple maximal publié 830 Nm.",
			"Masse publiée : 1,94 kg.",
			"Vitesses à vide : 8 000 tr/min avant ; 8 500 tr/min arrière."
		],
		"limitations": [
			"Caractéristiques déclarées par Shinano, sans essai physique CompatAir.",
			"La consommation moyenne, lorsqu’elle est également publiée, n’est pas utilisée à la place de la consommation de référence.",
			"La taille de raccord ne suffit pas à établir son profil de filetage ; vérifier la version livrée.",
			"La pression de service n’atteste pas la pression de mesure de consommation. Le régime ou l’appariement documentaire reste non qualifié ; aucune consommation dimensionnante n’est conservée."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-1492bsr-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 30.6 CFM / 14.4 L/s, soit 864 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-1492bsr-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Carré 1/2 pouce, enclume allongée de 2 pouces ; marche arrière à pleine puissance ; couple maximal publié 830 Nm.",
			"evidenceIds": [
				"shinano-si-1492bsr-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,94 kg",
			"evidenceIds": [
				"shinano-si-1492bsr-20260926"
			]
		},
		{
			"label": "Vitesses à vide",
			"value": "8 000 tr/min avant ; 8 500 tr/min arrière",
			"evidenceIds": [
				"shinano-si-1492bsr-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-1492bsr-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=5",
			"sourceLabel": "Shinano, catalogue général 2025, p. 5, réf. SI-1492BSR",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 30.6 CFM / 14.4 L/s, soit 864 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-1492bsr-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "review:2026-11-16-reviews:shinano-si-1492bsr:0",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf",
			"sourceLabel": "Shinano, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La SI-1492BSR possède une enclume prolongée de deux pouces et un carré 1/2 pouce. Elle publie 830 Nm, 8 000 tr/min en marche avant et 8 500 en marche arrière ; la SI-1490BSR conserve la tête courte. Les 14,4 L/s maximum et 2,4 L/s moyens restent distincts. Le point de pression de mesure n’étant pas établi par le tableau, aucun besoin en charge n’en est déduit. GET complet SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. Pages PDF lues : 5, 43."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-1492bsr-20260926"
		],
		"workingPressureBar": [
			"shinano-si-1492bsr-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-1492bsr-20260926"
		],
		"airflowBasis": [
			"review:2026-11-16-reviews:shinano-si-1492bsr:0"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 864,
		"typical": 864,
		"max": 864
	},
	"airflowBasis": "unqualified"
};

export default product;
