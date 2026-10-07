import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "bostitch-rn46k-2-e",
	"slug": "bostitch-rn46k-2-e",
	"brand": "Bostitch",
	"model": "RN46K-2-E",
	"mpn": "RN46K-2-E",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Bostitch RN46K-2-E",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 4.8,
		"typical": 5.6,
		"max": 7
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/bostitch-rn46k-2-e.webp",
		"alt": "Repères techniques Bostitch RN46K-2-E, référence RN46K-2-E",
		"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/rn46k-2-e/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Bostitch RN46K-2-E, référence RN46K-2-E. Le fabricant publie 1,1 litre(s) d’air par coup à 5,6 bar : la cadence est indispensable pour dimensionner le compresseur. Poids : 2.70 kg. Largeur : 117 mm.",
		"verifiedFacts": [
			"Plage d’utilisation publiée : 4,8 à 7 bar. Consommation mesurée par le fabricant à 5,6 bar.",
			"Consommation publiée : 1,1 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"Référence fabricant : RN46K-2-E.",
			"Poids : 2.70 kg.",
			"Largeur : 117 mm.",
			"Longueur : 277 mm."
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
				"bostitch-rn46k-2-e-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 1,1 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"evidenceIds": [
				"bostitch-rn46k-2-e-20260927"
			]
		},
		{
			"label": "Poids",
			"value": "2.70 kg",
			"evidenceIds": [
				"bostitch-rn46k-2-e-20260927"
			]
		},
		{
			"label": "Largeur",
			"value": "117 mm",
			"evidenceIds": [
				"bostitch-rn46k-2-e-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "277 mm",
			"evidenceIds": [
				"bostitch-rn46k-2-e-20260927"
			]
		},
		{
			"label": "Hauteur",
			"value": "270 mm",
			"evidenceIds": [
				"bostitch-rn46k-2-e-20260927"
			]
		},
		{
			"label": "Capacité du magasin (max.)",
			"value": "120",
			"evidenceIds": [
				"bostitch-rn46k-2-e-20260927"
			]
		},
		{
			"label": "Diamètre (mm)",
			"value": "3.05 (min.) ; 3.4 (max.)",
			"evidenceIds": [
				"bostitch-rn46k-2-e-20260927"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "19 (min.) ; 45 (max.)",
			"evidenceIds": [
				"bostitch-rn46k-2-e-20260927"
			]
		},
		{
			"label": "Tête (mm)",
			"value": "10.1 (min.) ; 10.1 (max.)",
			"evidenceIds": [
				"bostitch-rn46k-2-e-20260927"
			]
		},
		{
			"label": "Angle d’assemblage",
			"value": "15",
			"evidenceIds": [
				"bostitch-rn46k-2-e-20260927"
			]
		},
		{
			"label": "Désignation fabricant",
			"value": "CLOUEUR BARDAGE & CARTON SUR BOIS-ST 19-45MM",
			"evidenceIds": [
				"bostitch-rn46k-2-e-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "bostitch-rn46k-2-e-20260927",
			"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/rn46k-2-e/",
			"sourceLabel": "Bostitch France, fiche RN46K-2-E, réf. RN46K-2-E",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 1,1 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute."
		}
	],
	"fieldSources": {
		"mpn": [
			"bostitch-rn46k-2-e-20260927"
		],
		"workingPressureBar": [
			"bostitch-rn46k-2-e-20260927"
		],
		"airPerActionLiters": [
			"bostitch-rn46k-2-e-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airPerActionLiters": 1.1,
	"actionLabel": "coup"
};

export default product;
