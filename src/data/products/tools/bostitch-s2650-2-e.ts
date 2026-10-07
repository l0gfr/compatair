import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "bostitch-s2650-2-e",
	"slug": "bostitch-s2650-2-e",
	"brand": "Bostitch",
	"model": "S2650-2-E",
	"mpn": "S2650-2-E",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Bostitch S2650-2-E",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 5.5,
		"typical": 5.6,
		"max": 8.3
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/bostitch-s2650-2-e.webp",
		"alt": "Repères techniques Bostitch S2650-2-E, référence S2650-2-E",
		"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/s2650-2-e/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Bostitch S2650-2-E, référence S2650-2-E. Le fabricant publie 1,6 litre(s) d’air par coup à 5,6 bar : la cadence est indispensable pour dimensionner le compresseur. Poids : 2.4 kg. Largeur : 78 mm.",
		"verifiedFacts": [
			"Plage d’utilisation publiée : 5,5 à 8,3 bar. Consommation mesurée par le fabricant à 5,6 bar.",
			"Consommation publiée : 1,6 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"Référence fabricant : S2650-2-E.",
			"Poids : 2.4 kg.",
			"Largeur : 78 mm.",
			"Longueur : 362 mm."
		],
		"limitations": [
			"Le débit total dépend de la cadence réelle et des éventuels outils utilisés simultanément. Aucun nombre de coups par minute n’est supposé.",
			"Respecter les fixations prévues pour cette référence et la plage de pression de la notice."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Plage d’utilisation publiée : 5,5 à 8,3 bar. Consommation mesurée par le fabricant à 5,6 bar.",
			"evidenceIds": [
				"bostitch-s2650-2-e-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 1,6 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"evidenceIds": [
				"bostitch-s2650-2-e-20260927"
			]
		},
		{
			"label": "Poids",
			"value": "2.4 kg",
			"evidenceIds": [
				"bostitch-s2650-2-e-20260927"
			]
		},
		{
			"label": "Largeur",
			"value": "78 mm",
			"evidenceIds": [
				"bostitch-s2650-2-e-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "362 mm",
			"evidenceIds": [
				"bostitch-s2650-2-e-20260927"
			]
		},
		{
			"label": "Hauteur",
			"value": "272 mm",
			"evidenceIds": [
				"bostitch-s2650-2-e-20260927"
			]
		},
		{
			"label": "Capacité du magasin (max.)",
			"value": "140",
			"evidenceIds": [
				"bostitch-s2650-2-e-20260927"
			]
		},
		{
			"label": "Couronne (mm)",
			"value": "25 (min.) ; 25 (max.)",
			"evidenceIds": [
				"bostitch-s2650-2-e-20260927"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "25 (min.) ; 50 (max.)",
			"evidenceIds": [
				"bostitch-s2650-2-e-20260927"
			]
		},
		{
			"label": "Désignation fabricant",
			"value": "AGRAFEUSE PNEUMATIQUE DOUBLE SECURITE - AGRAFES LARGES (couronne 25mm) S2-16WC MAXI 50MM",
			"evidenceIds": [
				"bostitch-s2650-2-e-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "bostitch-s2650-2-e-20260927",
			"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/s2650-2-e/",
			"sourceLabel": "Bostitch France, fiche S2650-2-E, réf. S2650-2-E",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 1,6 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute."
		}
	],
	"fieldSources": {
		"mpn": [
			"bostitch-s2650-2-e-20260927"
		],
		"workingPressureBar": [
			"bostitch-s2650-2-e-20260927"
		],
		"airPerActionLiters": [
			"bostitch-s2650-2-e-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airPerActionLiters": 1.6,
	"actionLabel": "coup"
};

export default product;
