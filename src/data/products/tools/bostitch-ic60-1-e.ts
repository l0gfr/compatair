import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "bostitch-ic60-1-e",
	"slug": "bostitch-ic60-1-e",
	"brand": "Bostitch",
	"model": "IC60-1-E",
	"mpn": "IC60-1-E",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Bostitch IC60-1-E",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 4.9,
		"typical": 5.6,
		"max": 7
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/bostitch-ic60-1-e.webp",
		"alt": "Repères techniques Bostitch IC60-1-E, référence IC60-1-E",
		"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/ic60-1-e/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Bostitch IC60-1-E, référence IC60-1-E. Le fabricant publie 1,26 litre(s) d’air par coup à 5,6 bar : la cadence est indispensable pour dimensionner le compresseur. Poids : 2.58 kg. Largeur : 270 mm.",
		"verifiedFacts": [
			"Plage d’utilisation publiée : 4,9 à 7 bar. Consommation mesurée par le fabricant à 5,6 bar.",
			"Consommation publiée : 1,26 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"Référence fabricant : IC60-1-E.",
			"Poids : 2.58 kg.",
			"Largeur : 270 mm.",
			"Longueur : 280 mm."
		],
		"limitations": [
			"Le débit total dépend de la cadence réelle et des éventuels outils utilisés simultanément. Aucun nombre de coups par minute n’est supposé.",
			"Respecter les fixations prévues pour cette référence et la plage de pression de la notice."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Plage d’utilisation publiée : 4,9 à 7 bar. Consommation mesurée par le fabricant à 5,6 bar.",
			"evidenceIds": [
				"bostitch-ic60-1-e-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 1,26 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"evidenceIds": [
				"bostitch-ic60-1-e-20260927"
			]
		},
		{
			"label": "Poids",
			"value": "2.58 kg",
			"evidenceIds": [
				"bostitch-ic60-1-e-20260927"
			]
		},
		{
			"label": "Largeur",
			"value": "270 mm",
			"evidenceIds": [
				"bostitch-ic60-1-e-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "280 mm",
			"evidenceIds": [
				"bostitch-ic60-1-e-20260927"
			]
		},
		{
			"label": "Hauteur",
			"value": "133 mm",
			"evidenceIds": [
				"bostitch-ic60-1-e-20260927"
			]
		},
		{
			"label": "Capacité du magasin (max.)",
			"value": "300-350",
			"evidenceIds": [
				"bostitch-ic60-1-e-20260927"
			]
		},
		{
			"label": "Diamètre (mm)",
			"value": "2.0 (min.) ; 2.65 (max.)",
			"evidenceIds": [
				"bostitch-ic60-1-e-20260927"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "25 (min.) ; 60 (max.)",
			"evidenceIds": [
				"bostitch-ic60-1-e-20260927"
			]
		},
		{
			"label": "Tête (mm)",
			"value": "4.3 (min.) ; 5.9 (max.)",
			"evidenceIds": [
				"bostitch-ic60-1-e-20260927"
			]
		},
		{
			"label": "Angle d’assemblage",
			"value": "15",
			"evidenceIds": [
				"bostitch-ic60-1-e-20260927"
			]
		},
		{
			"label": "Désignation fabricant",
			"value": "CLOUEUR RLX-CT 60MM MAX",
			"evidenceIds": [
				"bostitch-ic60-1-e-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "bostitch-ic60-1-e-20260927",
			"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/ic60-1-e/",
			"sourceLabel": "Bostitch France, fiche IC60-1-E, réf. IC60-1-E",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 1,26 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute."
		}
	],
	"fieldSources": {
		"mpn": [
			"bostitch-ic60-1-e-20260927"
		],
		"workingPressureBar": [
			"bostitch-ic60-1-e-20260927"
		],
		"airPerActionLiters": [
			"bostitch-ic60-1-e-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airPerActionLiters": 1.26,
	"actionLabel": "coup"
};

export default product;
