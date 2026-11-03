import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "bostitch-21680b-e",
	"slug": "bostitch-21680b-e",
	"brand": "Bostitch",
	"model": "21680B-E",
	"mpn": "21680B-E",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Bostitch 21680B-E",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 4.9,
		"typical": 5.6,
		"max": 8.4
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/bostitch-21680b-e.webp",
		"alt": "Repères techniques Bostitch 21680B-E, référence 21680B-E",
		"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/21680b-e/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Bostitch 21680B-E. La 21680B-E est l’agrafeuse de tapissier à agrafes série 80 de 4–16 mm, couronne 12,8 mm et magasin de 139. La double gâchette et le chargement par le bas sont décrits sur la fiche exacte. Les suffixes A-E et LN-E désignent d’autres versions ; aucune différence de cadence ou de consommation n’est inventée. Le besoin dépend de la cadence saisie, à partir des 0,17 L/coup explicitement mesurés à 5,6 bar.",
		"verifiedFacts": [
			"Fixations : Agrafes série 80, longueur 4–16 mm.",
			"Couronne : 12,8 mm.",
			"Magasin maximal : 139 agrafes.",
			"Sécurité : Double gâchette.",
			"Consommation explicitement mesurée : 0,17 L par coup à 5,6 bar."
		],
		"limitations": [
			"Le débit total dépend de la cadence réelle et des éventuels outils utilisés simultanément. Aucun nombre de coups par minute n’est supposé.",
			"Respecter les fixations prévues pour cette référence et la plage de pression de la notice."
		]
	},
	"specifications": [
		{
			"label": "Fixations",
			"value": "Agrafes série 80, longueur 4–16 mm",
			"evidenceIds": [
				"bostitch-21680b-e-reserved-20261103-1"
			]
		},
		{
			"label": "Couronne",
			"value": "12,8 mm",
			"evidenceIds": [
				"bostitch-21680b-e-reserved-20261103-1"
			]
		},
		{
			"label": "Magasin maximal",
			"value": "139 agrafes",
			"evidenceIds": [
				"bostitch-21680b-e-reserved-20261103-1"
			]
		},
		{
			"label": "Sécurité",
			"value": "Double gâchette",
			"evidenceIds": [
				"bostitch-21680b-e-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation explicitement mesurée",
			"value": "0,17 L par coup à 5,6 bar",
			"evidenceIds": [
				"bostitch-21680b-e-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "bostitch-21680b-e-20260927",
			"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/21680b-e/",
			"sourceLabel": "Bostitch France, fiche 21680B-E, réf. 21680B-E",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 0,17 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute."
		},
		{
			"id": "bostitch-21680b-e-reserved-20261103-1",
			"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/21680b-e/",
			"sourceLabel": "Bostitch : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 412916e9e27501375367d5fa2b7c8cee1a68916a01ef7dc7c8db653b0d09f087. La 21680B-E est l’agrafeuse de tapissier à agrafes série 80 de 4–16 mm, couronne 12,8 mm et magasin de 139. La double gâchette et le chargement par le bas sont décrits sur la fiche exacte. Les suffixes A-E et LN-E désignent d’autres versions ; aucune différence de cadence ou de consommation n’est inventée. Le besoin dépend de la cadence saisie, à partir des 0,17 L/coup explicitement mesurés à 5,6 bar."
		}
	],
	"fieldSources": {
		"mpn": [
			"bostitch-21680b-e-20260927"
		],
		"workingPressureBar": [
			"bostitch-21680b-e-20260927"
		],
		"airPerActionLiters": [
			"bostitch-21680b-e-20260927"
		],
		"editorial": [
			"bostitch-21680b-e-reserved-20261103-1"
		],
		"specifications": [
			"bostitch-21680b-e-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airPerActionLiters": 0.17,
	"actionLabel": "coup"
};

export default product;
