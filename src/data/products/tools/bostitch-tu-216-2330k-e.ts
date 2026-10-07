import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "bostitch-tu-216-2330k-e",
	"slug": "bostitch-tu-216-2330k-e",
	"brand": "Bostitch",
	"model": "TU-216-2330K-E",
	"mpn": "TU-216-2330K-E",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Bostitch TU-216-2330K-E",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 4.8,
		"typical": 5.6,
		"max": 7
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/bostitch-tu-216-2330k-e.webp",
		"alt": "Repères techniques Bostitch TU-216-2330K-E, référence TU-216-2330K-E",
		"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/tu-216-2330k-e/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Bostitch TU-216-2330K-E, référence TU-216-2330K-E. Le fabricant publie 0,52 litre(s) d’air par coup à 5,6 bar : la cadence est indispensable pour dimensionner le compresseur. Poids : 0.98 kg. Largeur : 40 mm.",
		"verifiedFacts": [
			"Plage d’utilisation publiée : 4,8 à 7 bar. Consommation mesurée par le fabricant à 5,6 bar.",
			"Consommation publiée : 0,52 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"Référence fabricant : TU-216-2330K-E.",
			"Poids : 0.98 kg.",
			"Largeur : 40 mm.",
			"Longueur : 230 mm."
		],
		"limitations": [
			"Le débit total dépend de la cadence réelle et des éventuels outils utilisés simultanément. Aucun nombre de coups par minute n’est supposé.",
			"Respecter les fixations prévues pour cette référence et la plage de pression de la notice."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Plage d’utilisation publiée : 4,8 à 7 bar. Consommation mesurée par le fabricant à 5,6 bar.",
			"evidenceIds": [
				"bostitch-tu-216-2330k-e-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 0,52 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"evidenceIds": [
				"bostitch-tu-216-2330k-e-20260927"
			]
		},
		{
			"label": "Poids",
			"value": "0.98 kg",
			"evidenceIds": [
				"bostitch-tu-216-2330k-e-20260927"
			]
		},
		{
			"label": "Largeur",
			"value": "40 mm",
			"evidenceIds": [
				"bostitch-tu-216-2330k-e-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "230 mm",
			"evidenceIds": [
				"bostitch-tu-216-2330k-e-20260927"
			]
		},
		{
			"label": "Hauteur",
			"value": "198 mm",
			"evidenceIds": [
				"bostitch-tu-216-2330k-e-20260927"
			]
		},
		{
			"label": "Capacité du magasin (max.)",
			"value": "200",
			"evidenceIds": [
				"bostitch-tu-216-2330k-e-20260927"
			]
		},
		{
			"label": "Diamètre (mm)",
			"value": "0.6 (min.) ; 0.6 (max.)",
			"evidenceIds": [
				"bostitch-tu-216-2330k-e-20260927"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "15 (min.) ; 30 (max.)",
			"evidenceIds": [
				"bostitch-tu-216-2330k-e-20260927"
			]
		},
		{
			"label": "Tête (mm)",
			"value": "0.6 (min.) ; 0.6 (max.)",
			"evidenceIds": [
				"bostitch-tu-216-2330k-e-20260927"
			]
		},
		{
			"label": "Désignation fabricant",
			"value": "AIGUILLEUR J.23 (VALISETTE) - MINI PIN 12-30MM",
			"evidenceIds": [
				"bostitch-tu-216-2330k-e-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "bostitch-tu-216-2330k-e-20260927",
			"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/tu-216-2330k-e/",
			"sourceLabel": "Bostitch France, fiche TU-216-2330K-E, réf. TU-216-2330K-E",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 0,52 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute."
		}
	],
	"fieldSources": {
		"mpn": [
			"bostitch-tu-216-2330k-e-20260927"
		],
		"workingPressureBar": [
			"bostitch-tu-216-2330k-e-20260927"
		],
		"airPerActionLiters": [
			"bostitch-tu-216-2330k-e-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airPerActionLiters": 0.52,
	"actionLabel": "coup"
};

export default product;
