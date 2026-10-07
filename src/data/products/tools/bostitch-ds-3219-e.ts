import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "bostitch-ds-3219-e",
	"slug": "bostitch-ds-3219-e",
	"brand": "Bostitch",
	"model": "DS-3219-E",
	"mpn": "DS-3219-E",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Bostitch DS-3219-E",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 4.9,
		"typical": 5.6,
		"max": 7.1
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/bostitch-ds-3219-e.webp",
		"alt": "Repères techniques Bostitch DS-3219-E, référence DS-3219-E",
		"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/ds-3219-e/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Bostitch DS-3219-E, référence DS-3219-E. Le fabricant publie 1,13 litre(s) d’air par coup à 5,6 bar : la cadence est indispensable pour dimensionner le compresseur. Poids : 2.45 kg. Largeur : 115 mm.",
		"verifiedFacts": [
			"Plage d’utilisation publiée : 4,9 à 7,1 bar. Consommation mesurée par le fabricant à 5,6 bar.",
			"Consommation publiée : 1,13 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"Référence fabricant : DS-3219-E.",
			"Poids : 2.45 kg.",
			"Largeur : 115 mm.",
			"Longueur : 345 mm."
		],
		"limitations": [
			"Le débit total dépend de la cadence réelle et des éventuels outils utilisés simultanément. Aucun nombre de coups par minute n’est supposé.",
			"Respecter les fixations prévues pour cette référence et la plage de pression de la notice."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Plage d’utilisation publiée : 4,9 à 7,1 bar. Consommation mesurée par le fabricant à 5,6 bar.",
			"evidenceIds": [
				"bostitch-ds-3219-e-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 1,13 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"evidenceIds": [
				"bostitch-ds-3219-e-20260927"
			]
		},
		{
			"label": "Poids",
			"value": "2.45 kg",
			"evidenceIds": [
				"bostitch-ds-3219-e-20260927"
			]
		},
		{
			"label": "Largeur",
			"value": "115 mm",
			"evidenceIds": [
				"bostitch-ds-3219-e-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "345 mm",
			"evidenceIds": [
				"bostitch-ds-3219-e-20260927"
			]
		},
		{
			"label": "Hauteur",
			"value": "233 mm",
			"evidenceIds": [
				"bostitch-ds-3219-e-20260927"
			]
		},
		{
			"label": "Capacité du magasin (max.)",
			"value": "120",
			"evidenceIds": [
				"bostitch-ds-3219-e-20260927"
			]
		},
		{
			"label": "Diamètre (mm)",
			"value": "0.9 (min.) ; 1.9 (max.)",
			"evidenceIds": [
				"bostitch-ds-3219-e-20260927"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "15 (min.) ; 19 (max.)",
			"evidenceIds": [
				"bostitch-ds-3219-e-20260927"
			]
		},
		{
			"label": "Désignation fabricant",
			"value": "AGRAF. CARTON PNEUM. AGR. EN BANDE C/32 15&19MM",
			"evidenceIds": [
				"bostitch-ds-3219-e-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "bostitch-ds-3219-e-20260927",
			"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/ds-3219-e/",
			"sourceLabel": "Bostitch France, fiche DS-3219-E, réf. DS-3219-E",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 1,13 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute."
		}
	],
	"fieldSources": {
		"mpn": [
			"bostitch-ds-3219-e-20260927"
		],
		"workingPressureBar": [
			"bostitch-ds-3219-e-20260927"
		],
		"airPerActionLiters": [
			"bostitch-ds-3219-e-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airPerActionLiters": 1.13,
	"actionLabel": "coup"
};

export default product;
