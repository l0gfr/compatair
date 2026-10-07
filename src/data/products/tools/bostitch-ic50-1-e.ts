import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "bostitch-ic50-1-e",
	"slug": "bostitch-ic50-1-e",
	"brand": "Bostitch",
	"model": "IC50-1-E",
	"mpn": "IC50-1-E",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Bostitch IC50-1-E",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 4.9,
		"typical": 5.6,
		"max": 8.4
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/bostitch-ic50-1-e.webp",
		"alt": "Repères techniques Bostitch IC50-1-E, référence IC50-1-E",
		"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/ic50-1-e/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Bostitch IC50-1-E, référence IC50-1-E. Le fabricant publie 1,55 litre(s) d’air par coup à 5,6 bar : la cadence est indispensable pour dimensionner le compresseur. Poids : 2.0 kg. Largeur : 305 mm.",
		"verifiedFacts": [
			"Plage d’utilisation publiée : 4,9 à 8,4 bar. Consommation mesurée par le fabricant à 5,6 bar.",
			"Consommation publiée : 1,55 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"Référence fabricant : IC50-1-E.",
			"Poids : 2.0 kg.",
			"Largeur : 305 mm.",
			"Longueur : 285 mm."
		],
		"limitations": [
			"Le débit total dépend de la cadence réelle et des éventuels outils utilisés simultanément. Aucun nombre de coups par minute n’est supposé.",
			"Respecter les fixations prévues pour cette référence et la plage de pression de la notice."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Plage d’utilisation publiée : 4,9 à 8,4 bar. Consommation mesurée par le fabricant à 5,6 bar.",
			"evidenceIds": [
				"bostitch-ic50-1-e-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 1,55 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"evidenceIds": [
				"bostitch-ic50-1-e-20260927"
			]
		},
		{
			"label": "Poids",
			"value": "2.0 kg",
			"evidenceIds": [
				"bostitch-ic50-1-e-20260927"
			]
		},
		{
			"label": "Largeur",
			"value": "305 mm",
			"evidenceIds": [
				"bostitch-ic50-1-e-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "285 mm",
			"evidenceIds": [
				"bostitch-ic50-1-e-20260927"
			]
		},
		{
			"label": "Hauteur",
			"value": "128 mm",
			"evidenceIds": [
				"bostitch-ic50-1-e-20260927"
			]
		},
		{
			"label": "Capacité du magasin (max.)",
			"value": "300-350",
			"evidenceIds": [
				"bostitch-ic50-1-e-20260927"
			]
		},
		{
			"label": "Diamètre (mm)",
			"value": "1.6 (min.) ; 2.5 (max.)",
			"evidenceIds": [
				"bostitch-ic50-1-e-20260927"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "25 (min.) ; 50 (max.)",
			"evidenceIds": [
				"bostitch-ic50-1-e-20260927"
			]
		},
		{
			"label": "Tête (mm)",
			"value": "4.2 (min.) ; 5.6 (max.)",
			"evidenceIds": [
				"bostitch-ic50-1-e-20260927"
			]
		},
		{
			"label": "Angle d’assemblage",
			"value": "15",
			"evidenceIds": [
				"bostitch-ic50-1-e-20260927"
			]
		},
		{
			"label": "Désignation fabricant",
			"value": "CLOUEUR RLX-CT 50MM MAX",
			"evidenceIds": [
				"bostitch-ic50-1-e-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "bostitch-ic50-1-e-20260927",
			"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/ic50-1-e/",
			"sourceLabel": "Bostitch France, fiche IC50-1-E, réf. IC50-1-E",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 1,55 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute."
		}
	],
	"fieldSources": {
		"mpn": [
			"bostitch-ic50-1-e-20260927"
		],
		"workingPressureBar": [
			"bostitch-ic50-1-e-20260927"
		],
		"airPerActionLiters": [
			"bostitch-ic50-1-e-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airPerActionLiters": 1.55,
	"actionLabel": "coup"
};

export default product;
