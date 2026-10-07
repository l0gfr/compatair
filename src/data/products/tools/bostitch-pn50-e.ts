import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "bostitch-pn50-e",
	"slug": "bostitch-pn50-e",
	"brand": "Bostitch",
	"model": "PN50-E",
	"mpn": "PN50-E",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Bostitch PN50-E",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 5.5,
		"typical": 5.6,
		"max": 8.6
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/bostitch-pn50-e.webp",
		"alt": "Repères techniques Bostitch PN50-E, référence PN50-E",
		"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/pn50-e/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Bostitch PN50-E, référence PN50-E. Le fabricant publie 56 litre(s) d’air par coup à 5,6 bar : la cadence est indispensable pour dimensionner le compresseur. Poids : 0.55 kg. Largeur : 63 mm.",
		"verifiedFacts": [
			"Plage d’utilisation publiée : 5,5 à 8,6 bar. Consommation mesurée par le fabricant à 5,6 bar.",
			"Consommation publiée : 56 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"Référence fabricant : PN50-E.",
			"Poids : 0.55 kg.",
			"Largeur : 63 mm.",
			"Longueur : 80 mm."
		],
		"limitations": [
			"Le débit total dépend de la cadence réelle et des éventuels outils utilisés simultanément. Aucun nombre de coups par minute n’est supposé.",
			"Respecter les fixations prévues pour cette référence et la plage de pression de la notice."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Plage d’utilisation publiée : 5,5 à 8,6 bar. Consommation mesurée par le fabricant à 5,6 bar.",
			"evidenceIds": [
				"bostitch-pn50-e-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 56 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"evidenceIds": [
				"bostitch-pn50-e-20260927"
			]
		},
		{
			"label": "Poids",
			"value": "0.55 kg",
			"evidenceIds": [
				"bostitch-pn50-e-20260927"
			]
		},
		{
			"label": "Largeur",
			"value": "63 mm",
			"evidenceIds": [
				"bostitch-pn50-e-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "80 mm",
			"evidenceIds": [
				"bostitch-pn50-e-20260927"
			]
		},
		{
			"label": "Hauteur",
			"value": "107 mm",
			"evidenceIds": [
				"bostitch-pn50-e-20260927"
			]
		},
		{
			"label": "Capacité du magasin (max.)",
			"value": "1",
			"evidenceIds": [
				"bostitch-pn50-e-20260927"
			]
		},
		{
			"label": "Diamètre (mm)",
			"value": "8 (min.) ; 8 (max.)",
			"evidenceIds": [
				"bostitch-pn50-e-20260927"
			]
		},
		{
			"label": "Type d’assemblage",
			"value": "Mal fixé",
			"evidenceIds": [
				"bostitch-pn50-e-20260927"
			]
		},
		{
			"label": "Angle d’assemblage",
			"value": "0",
			"evidenceIds": [
				"bostitch-pn50-e-20260927"
			]
		},
		{
			"label": "Désignation fabricant",
			"value": "CLOUEUR",
			"evidenceIds": [
				"bostitch-pn50-e-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "bostitch-pn50-e-20260927",
			"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/pn50-e/",
			"sourceLabel": "Bostitch France, fiche PN50-E, réf. PN50-E",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 56 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute."
		}
	],
	"fieldSources": {
		"mpn": [
			"bostitch-pn50-e-20260927"
		],
		"workingPressureBar": [
			"bostitch-pn50-e-20260927"
		],
		"airPerActionLiters": [
			"bostitch-pn50-e-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airPerActionLiters": 56,
	"actionLabel": "coup"
};

export default product;
