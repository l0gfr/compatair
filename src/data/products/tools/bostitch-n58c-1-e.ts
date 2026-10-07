import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "bostitch-n58c-1-e",
	"slug": "bostitch-n58c-1-e",
	"brand": "Bostitch",
	"model": "N58C-1-E",
	"mpn": "N58C-1-E",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Bostitch N58C-1-E",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 4.8,
		"typical": 5.6,
		"max": 8.3
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/bostitch-n58c-1-e.webp",
		"alt": "Repères techniques Bostitch N58C-1-E, référence N58C-1-E",
		"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/n58c-1-e/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Bostitch N58C-1-E, référence N58C-1-E. Le fabricant publie 1,21 litre(s) d’air par coup à 5,6 bar : la cadence est indispensable pour dimensionner le compresseur. Poids : 2.68 kg. Largeur : 133 mm.",
		"verifiedFacts": [
			"Plage d’utilisation publiée : 4,8 à 8,3 bar. Consommation mesurée par le fabricant à 5,6 bar.",
			"Consommation publiée : 1,21 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"Référence fabricant : N58C-1-E.",
			"Poids : 2.68 kg.",
			"Largeur : 133 mm.",
			"Longueur : 269 mm."
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
				"bostitch-n58c-1-e-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 1,21 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"evidenceIds": [
				"bostitch-n58c-1-e-20260927"
			]
		},
		{
			"label": "Poids",
			"value": "2.68 kg",
			"evidenceIds": [
				"bostitch-n58c-1-e-20260927"
			]
		},
		{
			"label": "Largeur",
			"value": "133 mm",
			"evidenceIds": [
				"bostitch-n58c-1-e-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "269 mm",
			"evidenceIds": [
				"bostitch-n58c-1-e-20260927"
			]
		},
		{
			"label": "Hauteur",
			"value": "273 mm",
			"evidenceIds": [
				"bostitch-n58c-1-e-20260927"
			]
		},
		{
			"label": "Capacité du magasin (max.)",
			"value": "350",
			"evidenceIds": [
				"bostitch-n58c-1-e-20260927"
			]
		},
		{
			"label": "Diamètre (mm)",
			"value": "2.03 (min.) ; 2.5 (max.)",
			"evidenceIds": [
				"bostitch-n58c-1-e-20260927"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "25 (min.) ; 55 (max.)",
			"evidenceIds": [
				"bostitch-n58c-1-e-20260927"
			]
		},
		{
			"label": "Tête (mm)",
			"value": "4.5 (min.) ; 4.5 (max.)",
			"evidenceIds": [
				"bostitch-n58c-1-e-20260927"
			]
		},
		{
			"label": "Angle d’assemblage",
			"value": "15",
			"evidenceIds": [
				"bostitch-n58c-1-e-20260927"
			]
		},
		{
			"label": "Désignation fabricant",
			"value": "CLOUEUR RLX-CT 25MM - 55MM MAX",
			"evidenceIds": [
				"bostitch-n58c-1-e-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "bostitch-n58c-1-e-20260927",
			"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/n58c-1-e/",
			"sourceLabel": "Bostitch France, fiche N58C-1-E, réf. N58C-1-E",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 1,21 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute."
		}
	],
	"fieldSources": {
		"mpn": [
			"bostitch-n58c-1-e-20260927"
		],
		"workingPressureBar": [
			"bostitch-n58c-1-e-20260927"
		],
		"airPerActionLiters": [
			"bostitch-n58c-1-e-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airPerActionLiters": 1.21,
	"actionLabel": "coup"
};

export default product;
