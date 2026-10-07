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
		"overview": "Bostitch 21680B-E, référence 21680B-E. Le fabricant publie 0,17 litre(s) d’air par coup à 5,6 bar : la cadence est indispensable pour dimensionner le compresseur. Poids : 0.81 kg. Largeur : 40 mm.",
		"verifiedFacts": [
			"Plage d’utilisation publiée : 4,9 à 8,4 bar. Consommation mesurée par le fabricant à 5,6 bar.",
			"Consommation publiée : 0,17 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"Référence fabricant : 21680B-E.",
			"Poids : 0.81 kg.",
			"Largeur : 40 mm.",
			"Longueur : 221 mm."
		],
		"limitations": [
			"Le débit total dépend de la cadence réelle et des éventuels outils utilisés simultanément. Aucun nombre de coups par minute n’est supposé.",
			"Respecter les fixations prévues pour cette référence et la plage de pression de la notice."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Plage d’utilisation publiée : 4,9 à 8,4 bar. Consommation mesurée par le fabricant à 5,6 bar.",
			"evidenceIds": [
				"bostitch-21680b-e-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 0,17 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"evidenceIds": [
				"bostitch-21680b-e-20260927"
			]
		},
		{
			"label": "Poids",
			"value": "0.81 kg",
			"evidenceIds": [
				"bostitch-21680b-e-20260927"
			]
		},
		{
			"label": "Largeur",
			"value": "40 mm",
			"evidenceIds": [
				"bostitch-21680b-e-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "221 mm",
			"evidenceIds": [
				"bostitch-21680b-e-20260927"
			]
		},
		{
			"label": "Hauteur",
			"value": "150 mm",
			"evidenceIds": [
				"bostitch-21680b-e-20260927"
			]
		},
		{
			"label": "Capacité du magasin (max.)",
			"value": "139",
			"evidenceIds": [
				"bostitch-21680b-e-20260927"
			]
		},
		{
			"label": "Diamètre (mm)",
			"value": "0.6 (min.) ; 0.9 (max.)",
			"evidenceIds": [
				"bostitch-21680b-e-20260927"
			]
		},
		{
			"label": "Couronne (mm)",
			"value": "12.8 (min.) ; 12.8 (max.)",
			"evidenceIds": [
				"bostitch-21680b-e-20260927"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "4 (min.) ; 16 (max.)",
			"evidenceIds": [
				"bostitch-21680b-e-20260927"
			]
		},
		{
			"label": "Désignation fabricant",
			"value": "AGR. TAPISSIER AGR.S 80 16MM MAX",
			"evidenceIds": [
				"bostitch-21680b-e-20260927"
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
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airPerActionLiters": 0.17,
	"actionLabel": "coup"
};

export default product;
