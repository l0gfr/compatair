import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "bostitch-ic90-1-e",
	"slug": "bostitch-ic90-1-e",
	"brand": "Bostitch",
	"model": "IC90-1-E",
	"mpn": "IC90-1-E",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Bostitch IC90-1-E",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 4.9,
		"typical": 5.6,
		"max": 7
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/bostitch-ic90-1-e.webp",
		"alt": "Repères techniques Bostitch IC90-1-E, référence IC90-1-E",
		"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/ic90-1-e/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Bostitch IC90-1-E, référence IC90-1-E. Le fabricant publie 3,7 litre(s) d’air par coup à 5,6 bar : la cadence est indispensable pour dimensionner le compresseur. Poids : 5.3 kg. Largeur : 386 mm.",
		"verifiedFacts": [
			"Plage d’utilisation publiée : 4,9 à 7 bar. Consommation mesurée par le fabricant à 5,6 bar.",
			"Consommation publiée : 3,7 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"Référence fabricant : IC90-1-E.",
			"Poids : 5.3 kg.",
			"Largeur : 386 mm.",
			"Longueur : 413 mm."
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
				"bostitch-ic90-1-e-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 3,7 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"evidenceIds": [
				"bostitch-ic90-1-e-20260927"
			]
		},
		{
			"label": "Poids",
			"value": "5.3 kg",
			"evidenceIds": [
				"bostitch-ic90-1-e-20260927"
			]
		},
		{
			"label": "Largeur",
			"value": "386 mm",
			"evidenceIds": [
				"bostitch-ic90-1-e-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "413 mm",
			"evidenceIds": [
				"bostitch-ic90-1-e-20260927"
			]
		},
		{
			"label": "Hauteur",
			"value": "182 mm",
			"evidenceIds": [
				"bostitch-ic90-1-e-20260927"
			]
		},
		{
			"label": "Capacité du magasin (max.)",
			"value": "225",
			"evidenceIds": [
				"bostitch-ic90-1-e-20260927"
			]
		},
		{
			"label": "Diamètre (mm)",
			"value": "2.5 (min.) ; 3.1 (max.)",
			"evidenceIds": [
				"bostitch-ic90-1-e-20260927"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "45 (min.) ; 90 (max.)",
			"evidenceIds": [
				"bostitch-ic90-1-e-20260927"
			]
		},
		{
			"label": "Tête (mm)",
			"value": "7.2 (min.) ; 7.2 (max.)",
			"evidenceIds": [
				"bostitch-ic90-1-e-20260927"
			]
		},
		{
			"label": "Angle d’assemblage",
			"value": "15",
			"evidenceIds": [
				"bostitch-ic90-1-e-20260927"
			]
		},
		{
			"label": "Désignation fabricant",
			"value": "CLOUEUR PNEUMATIQUE CT GROS ŒUVRE A ROULEAUX - CLOUS FAC DE 45 à 90MM",
			"evidenceIds": [
				"bostitch-ic90-1-e-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "bostitch-ic90-1-e-20260927",
			"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/ic90-1-e/",
			"sourceLabel": "Bostitch France, fiche IC90-1-E, réf. IC90-1-E",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 3,7 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute."
		}
	],
	"fieldSources": {
		"mpn": [
			"bostitch-ic90-1-e-20260927"
		],
		"workingPressureBar": [
			"bostitch-ic90-1-e-20260927"
		],
		"airPerActionLiters": [
			"bostitch-ic90-1-e-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airPerActionLiters": 3.7,
	"actionLabel": "coup"
};

export default product;
