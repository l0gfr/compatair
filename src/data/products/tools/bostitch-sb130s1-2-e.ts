import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "bostitch-sb130s1-2-e",
	"slug": "bostitch-sb130s1-2-e",
	"brand": "Bostitch",
	"model": "SB130S1-2-E",
	"mpn": "SB130S1-2-E",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Bostitch SB130S1-2-E",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 5,
		"typical": 5.6,
		"max": 8
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/bostitch-sb130s1-2-e.webp",
		"alt": "Repères techniques Bostitch SB130S1-2-E, référence SB130S1-2-E",
		"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/sb130s1-2-e/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Bostitch SB130S1-2-E, référence SB130S1-2-E. Le fabricant publie 2,75 litre(s) d’air par coup à 5,6 bar : la cadence est indispensable pour dimensionner le compresseur. Poids : 5.85 kg. Largeur : 133 mm.",
		"verifiedFacts": [
			"Plage d’utilisation publiée : 5 à 8 bar. Consommation mesurée par le fabricant à 5,6 bar.",
			"Consommation publiée : 2,75 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"Référence fabricant : SB130S1-2-E.",
			"Poids : 5.85 kg.",
			"Largeur : 133 mm.",
			"Longueur : 400 mm."
		],
		"limitations": [
			"Le débit total dépend de la cadence réelle et des éventuels outils utilisés simultanément. Aucun nombre de coups par minute n’est supposé.",
			"Respecter les fixations prévues pour cette référence et la plage de pression de la notice."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Plage d’utilisation publiée : 5 à 8 bar. Consommation mesurée par le fabricant à 5,6 bar.",
			"evidenceIds": [
				"bostitch-sb130s1-2-e-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 2,75 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"evidenceIds": [
				"bostitch-sb130s1-2-e-20260927"
			]
		},
		{
			"label": "Poids",
			"value": "5.85 kg",
			"evidenceIds": [
				"bostitch-sb130s1-2-e-20260927"
			]
		},
		{
			"label": "Largeur",
			"value": "133 mm",
			"evidenceIds": [
				"bostitch-sb130s1-2-e-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "400 mm",
			"evidenceIds": [
				"bostitch-sb130s1-2-e-20260927"
			]
		},
		{
			"label": "Hauteur",
			"value": "397 mm",
			"evidenceIds": [
				"bostitch-sb130s1-2-e-20260927"
			]
		},
		{
			"label": "Capacité du magasin (max.)",
			"value": "120",
			"evidenceIds": [
				"bostitch-sb130s1-2-e-20260927"
			]
		},
		{
			"label": "Diamètre (mm)",
			"value": "1.8 (min.) ; 2.08 (max.)",
			"evidenceIds": [
				"bostitch-sb130s1-2-e-20260927"
			]
		},
		{
			"label": "Couronne (mm)",
			"value": "27 (min.) ; 27 (max.)",
			"evidenceIds": [
				"bostitch-sb130s1-2-e-20260927"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "65 (min.) ; 130 (max.)",
			"evidenceIds": [
				"bostitch-sb130s1-2-e-20260927"
			]
		},
		{
			"label": "Désignation fabricant",
			"value": "AGRAFEUSE CT - AGR. S1",
			"evidenceIds": [
				"bostitch-sb130s1-2-e-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "bostitch-sb130s1-2-e-20260927",
			"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/sb130s1-2-e/",
			"sourceLabel": "Bostitch France, fiche SB130S1-2-E, réf. SB130S1-2-E",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 2,75 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute."
		}
	],
	"fieldSources": {
		"mpn": [
			"bostitch-sb130s1-2-e-20260927"
		],
		"workingPressureBar": [
			"bostitch-sb130s1-2-e-20260927"
		],
		"airPerActionLiters": [
			"bostitch-sb130s1-2-e-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airPerActionLiters": 2.75,
	"actionLabel": "coup"
};

export default product;
