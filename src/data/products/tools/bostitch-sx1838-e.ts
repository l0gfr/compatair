import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "bostitch-sx1838-e",
	"slug": "bostitch-sx1838-e",
	"brand": "Bostitch",
	"model": "SX1838-E",
	"mpn": "SX1838-E",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Bostitch SX1838-E",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 4.8,
		"typical": 5.6,
		"max": 8.3
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/bostitch-sx1838-e.webp",
		"alt": "Repères techniques Bostitch SX1838-E, référence SX1838-E",
		"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/sx1838-e/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Bostitch SX1838-E, référence SX1838-E. Le fabricant publie 1,33 litre(s) d’air par coup à 5,6 bar : la cadence est indispensable pour dimensionner le compresseur. Poids : 1.36 kg. Largeur : 70 mm.",
		"verifiedFacts": [
			"Plage d’utilisation publiée : 4,8 à 8,3 bar. Consommation mesurée par le fabricant à 5,6 bar.",
			"Consommation publiée : 1,33 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"Référence fabricant : SX1838-E.",
			"Poids : 1.36 kg.",
			"Largeur : 70 mm.",
			"Longueur : 235 mm."
		],
		"limitations": [
			"Le débit total dépend de la cadence réelle et des éventuels outils utilisés simultanément. Aucun nombre de coups par minute n’est supposé.",
			"Respecter les fixations prévues pour cette référence et la plage de pression de la notice."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Plage d’utilisation publiée : 4,8 à 8,3 bar. Consommation mesurée par le fabricant à 5,6 bar.",
			"evidenceIds": [
				"bostitch-sx1838-e-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 1,33 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"evidenceIds": [
				"bostitch-sx1838-e-20260927"
			]
		},
		{
			"label": "Poids",
			"value": "1.36 kg",
			"evidenceIds": [
				"bostitch-sx1838-e-20260927"
			]
		},
		{
			"label": "Largeur",
			"value": "70 mm",
			"evidenceIds": [
				"bostitch-sx1838-e-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "235 mm",
			"evidenceIds": [
				"bostitch-sx1838-e-20260927"
			]
		},
		{
			"label": "Hauteur",
			"value": "240 mm",
			"evidenceIds": [
				"bostitch-sx1838-e-20260927"
			]
		},
		{
			"label": "Capacité du magasin (max.)",
			"value": "100",
			"evidenceIds": [
				"bostitch-sx1838-e-20260927"
			]
		},
		{
			"label": "Diamètre (mm)",
			"value": "0.9 (min.) ; 1.3 (max.)",
			"evidenceIds": [
				"bostitch-sx1838-e-20260927"
			]
		},
		{
			"label": "Couronne (mm)",
			"value": "5.6 (min.) ; 5.6 (max.)",
			"evidenceIds": [
				"bostitch-sx1838-e-20260927"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "12 (min.) ; 38 (max.)",
			"evidenceIds": [
				"bostitch-sx1838-e-20260927"
			]
		},
		{
			"label": "Désignation fabricant",
			"value": "AGR. ST POUR AGRAFES SX 15-38MM",
			"evidenceIds": [
				"bostitch-sx1838-e-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "bostitch-sx1838-e-20260927",
			"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/sx1838-e/",
			"sourceLabel": "Bostitch France, fiche SX1838-E, réf. SX1838-E",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 1,33 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute."
		}
	],
	"fieldSources": {
		"mpn": [
			"bostitch-sx1838-e-20260927"
		],
		"workingPressureBar": [
			"bostitch-sx1838-e-20260927"
		],
		"airPerActionLiters": [
			"bostitch-sx1838-e-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airPerActionLiters": 1.33,
	"actionLabel": "coup"
};

export default product;
