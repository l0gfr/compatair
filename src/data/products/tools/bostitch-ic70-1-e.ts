import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "bostitch-ic70-1-e",
	"slug": "bostitch-ic70-1-e",
	"brand": "Bostitch",
	"model": "IC70-1-E",
	"mpn": "IC70-1-E",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Bostitch IC70-1-E",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 4.9,
		"typical": 5.6,
		"max": 7
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/bostitch-ic70-1-e.webp",
		"alt": "Repères techniques Bostitch IC70-1-E, référence IC70-1-E",
		"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/ic70-1-e/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Bostitch IC70-1-E, référence IC70-1-E. Le fabricant publie 2,2 litre(s) d’air par coup à 5,6 bar : la cadence est indispensable pour dimensionner le compresseur. Poids : 3.6 kg. Largeur : 140 mm.",
		"verifiedFacts": [
			"Plage d’utilisation publiée : 4,9 à 7 bar. Consommation mesurée par le fabricant à 5,6 bar.",
			"Consommation publiée : 2,2 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"Référence fabricant : IC70-1-E.",
			"Poids : 3.6 kg.",
			"Largeur : 140 mm.",
			"Longueur : 306 mm."
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
				"bostitch-ic70-1-e-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 2,2 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"evidenceIds": [
				"bostitch-ic70-1-e-20260927"
			]
		},
		{
			"label": "Poids",
			"value": "3.6 kg",
			"evidenceIds": [
				"bostitch-ic70-1-e-20260927"
			]
		},
		{
			"label": "Largeur",
			"value": "140 mm",
			"evidenceIds": [
				"bostitch-ic70-1-e-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "306 mm",
			"evidenceIds": [
				"bostitch-ic70-1-e-20260927"
			]
		},
		{
			"label": "Hauteur",
			"value": "322 mm",
			"evidenceIds": [
				"bostitch-ic70-1-e-20260927"
			]
		},
		{
			"label": "Capacité du magasin (max.)",
			"value": "225-300",
			"evidenceIds": [
				"bostitch-ic70-1-e-20260927"
			]
		},
		{
			"label": "Diamètre (mm)",
			"value": "2.5 (min.) ; 3.1 (max.)",
			"evidenceIds": [
				"bostitch-ic70-1-e-20260927"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "38 (min.) ; 70 (max.)",
			"evidenceIds": [
				"bostitch-ic70-1-e-20260927"
			]
		},
		{
			"label": "Tête (mm)",
			"value": "6.0 (min.) ; 7.2 (max.)",
			"evidenceIds": [
				"bostitch-ic70-1-e-20260927"
			]
		},
		{
			"label": "Angle d’assemblage",
			"value": "15",
			"evidenceIds": [
				"bostitch-ic70-1-e-20260927"
			]
		},
		{
			"label": "Désignation fabricant",
			"value": "CLOUEUR RLX-CT 70MM MAX",
			"evidenceIds": [
				"bostitch-ic70-1-e-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "bostitch-ic70-1-e-20260927",
			"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/ic70-1-e/",
			"sourceLabel": "Bostitch France, fiche IC70-1-E, réf. IC70-1-E",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 2,2 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute."
		}
	],
	"fieldSources": {
		"mpn": [
			"bostitch-ic70-1-e-20260927"
		],
		"workingPressureBar": [
			"bostitch-ic70-1-e-20260927"
		],
		"airPerActionLiters": [
			"bostitch-ic70-1-e-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airPerActionLiters": 2.2,
	"actionLabel": "coup"
};

export default product;
