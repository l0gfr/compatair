import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "bostitch-sb156sx-1-e",
	"slug": "bostitch-sb156sx-1-e",
	"brand": "Bostitch",
	"model": "SB156SX-1-E",
	"mpn": "SB156SX-1-E",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Bostitch SB156SX-1-E",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 4.8,
		"typical": 5.6,
		"max": 7
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/bostitch-sb156sx-1-e.webp",
		"alt": "Repères techniques Bostitch SB156SX-1-E, référence SB156SX-1-E",
		"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/sb156sx-1-e/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Bostitch SB156SX-1-E, référence SB156SX-1-E. Le fabricant publie 0,9 litre(s) d’air par coup à 5,6 bar : la cadence est indispensable pour dimensionner le compresseur. Poids : 1.75 kg. Largeur : 76 mm.",
		"verifiedFacts": [
			"Plage d’utilisation publiée : 4,8 à 7 bar. Consommation mesurée par le fabricant à 5,6 bar.",
			"Consommation publiée : 0,9 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"Référence fabricant : SB156SX-1-E.",
			"Poids : 1.75 kg.",
			"Largeur : 76 mm.",
			"Longueur : 270 mm."
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
				"bostitch-sb156sx-1-e-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 0,9 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"evidenceIds": [
				"bostitch-sb156sx-1-e-20260927"
			]
		},
		{
			"label": "Poids",
			"value": "1.75 kg",
			"evidenceIds": [
				"bostitch-sb156sx-1-e-20260927"
			]
		},
		{
			"label": "Largeur",
			"value": "76 mm",
			"evidenceIds": [
				"bostitch-sb156sx-1-e-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "270 mm",
			"evidenceIds": [
				"bostitch-sb156sx-1-e-20260927"
			]
		},
		{
			"label": "Hauteur",
			"value": "275 mm",
			"evidenceIds": [
				"bostitch-sb156sx-1-e-20260927"
			]
		},
		{
			"label": "Capacité du magasin (max.)",
			"value": "110",
			"evidenceIds": [
				"bostitch-sb156sx-1-e-20260927"
			]
		},
		{
			"label": "Diamètre (mm)",
			"value": "0.9 (min.) ; 1.3 (max.)",
			"evidenceIds": [
				"bostitch-sb156sx-1-e-20260927"
			]
		},
		{
			"label": "Couronne (mm)",
			"value": "5.6 (min.) ; 5.6 (max.)",
			"evidenceIds": [
				"bostitch-sb156sx-1-e-20260927"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "12 (min.) ; 40 (max.)",
			"evidenceIds": [
				"bostitch-sb156sx-1-e-20260927"
			]
		},
		{
			"label": "Désignation fabricant",
			"value": "AGR. CT POUR AGRAFES SX 40MM MAX",
			"evidenceIds": [
				"bostitch-sb156sx-1-e-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "bostitch-sb156sx-1-e-20260927",
			"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/sb156sx-1-e/",
			"sourceLabel": "Bostitch France, fiche SB156SX-1-E, réf. SB156SX-1-E",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 0,9 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute."
		}
	],
	"fieldSources": {
		"mpn": [
			"bostitch-sb156sx-1-e-20260927"
		],
		"workingPressureBar": [
			"bostitch-sb156sx-1-e-20260927"
		],
		"airPerActionLiters": [
			"bostitch-sb156sx-1-e-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airPerActionLiters": 0.9,
	"actionLabel": "coup"
};

export default product;
