import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "bostitch-n64099-1-e",
	"slug": "bostitch-n64099-1-e",
	"brand": "Bostitch",
	"model": "N64099-1-E",
	"mpn": "N64099-1-E",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Bostitch N64099-1-E",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 4.8,
		"typical": 5.6,
		"max": 8.3
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/bostitch-n64099-1-e.webp",
		"alt": "Repères techniques Bostitch N64099-1-E, référence N64099-1-E",
		"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/n64099-1-e/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Bostitch N64099-1-E, référence N64099-1-E. Le fabricant publie 1,21 litre(s) d’air par coup à 5,6 bar : la cadence est indispensable pour dimensionner le compresseur. Poids : 2.63 kg. Largeur : 133 mm.",
		"verifiedFacts": [
			"Plage d’utilisation publiée : 4,8 à 8,3 bar. Consommation mesurée par le fabricant à 5,6 bar.",
			"Consommation publiée : 1,21 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"Référence fabricant : N64099-1-E.",
			"Poids : 2.63 kg.",
			"Largeur : 133 mm.",
			"Longueur : 266 mm."
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
				"bostitch-n64099-1-e-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 1,21 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"evidenceIds": [
				"bostitch-n64099-1-e-20260927"
			]
		},
		{
			"label": "Poids",
			"value": "2.63 kg",
			"evidenceIds": [
				"bostitch-n64099-1-e-20260927"
			]
		},
		{
			"label": "Largeur",
			"value": "133 mm",
			"evidenceIds": [
				"bostitch-n64099-1-e-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "266 mm",
			"evidenceIds": [
				"bostitch-n64099-1-e-20260927"
			]
		},
		{
			"label": "Hauteur",
			"value": "327 mm",
			"evidenceIds": [
				"bostitch-n64099-1-e-20260927"
			]
		},
		{
			"label": "Capacité du magasin (max.)",
			"value": "300",
			"evidenceIds": [
				"bostitch-n64099-1-e-20260927"
			]
		},
		{
			"label": "Diamètre (mm)",
			"value": "2.3 (min.) ; 2.5 (max.)",
			"evidenceIds": [
				"bostitch-n64099-1-e-20260927"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "30 (min.) ; 65 (max.)",
			"evidenceIds": [
				"bostitch-n64099-1-e-20260927"
			]
		},
		{
			"label": "Tête (mm)",
			"value": "6.5 (min.) ; 6.5 (max.)",
			"evidenceIds": [
				"bostitch-n64099-1-e-20260927"
			]
		},
		{
			"label": "Angle d’assemblage",
			"value": "15",
			"evidenceIds": [
				"bostitch-n64099-1-e-20260927"
			]
		},
		{
			"label": "Désignation fabricant",
			"value": "CLOUEUR RLX -CT 35MM - 64MM",
			"evidenceIds": [
				"bostitch-n64099-1-e-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "bostitch-n64099-1-e-20260927",
			"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/n64099-1-e/",
			"sourceLabel": "Bostitch France, fiche N64099-1-E, réf. N64099-1-E",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 1,21 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute."
		}
	],
	"fieldSources": {
		"mpn": [
			"bostitch-n64099-1-e-20260927"
		],
		"workingPressureBar": [
			"bostitch-n64099-1-e-20260927"
		],
		"airPerActionLiters": [
			"bostitch-n64099-1-e-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airPerActionLiters": 1.21,
	"actionLabel": "coup"
};

export default product;
