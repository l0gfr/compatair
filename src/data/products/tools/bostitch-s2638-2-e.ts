import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "bostitch-s2638-2-e",
	"slug": "bostitch-s2638-2-e",
	"brand": "Bostitch",
	"model": "S2638-2-E",
	"mpn": "S2638-2-E",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Bostitch S2638-2-E",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 5.5,
		"typical": 5.6,
		"max": 8.3
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/bostitch-s2638-2-e.webp",
		"alt": "Repères techniques Bostitch S2638-2-E, référence S2638-2-E",
		"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/s2638-2-e/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Bostitch S2638-2-E, référence S2638-2-E. Le fabricant publie 1,4 litre(s) d’air par coup à 5,6 bar : la cadence est indispensable pour dimensionner le compresseur. Poids : 2.4 kg. Largeur : 78 mm.",
		"verifiedFacts": [
			"Plage d’utilisation publiée : 5,5 à 8,3 bar. Consommation mesurée par le fabricant à 5,6 bar.",
			"Consommation publiée : 1,4 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"Référence fabricant : S2638-2-E.",
			"Poids : 2.4 kg.",
			"Largeur : 78 mm.",
			"Longueur : 362 mm."
		],
		"limitations": [
			"Le débit total dépend de la cadence réelle et des éventuels outils utilisés simultanément. Aucun nombre de coups par minute n’est supposé.",
			"Respecter les fixations prévues pour cette référence et la plage de pression de la notice."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Plage d’utilisation publiée : 5,5 à 8,3 bar. Consommation mesurée par le fabricant à 5,6 bar.",
			"evidenceIds": [
				"bostitch-s2638-2-e-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 1,4 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"evidenceIds": [
				"bostitch-s2638-2-e-20260927"
			]
		},
		{
			"label": "Poids",
			"value": "2.4 kg",
			"evidenceIds": [
				"bostitch-s2638-2-e-20260927"
			]
		},
		{
			"label": "Largeur",
			"value": "78 mm",
			"evidenceIds": [
				"bostitch-s2638-2-e-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "362 mm",
			"evidenceIds": [
				"bostitch-s2638-2-e-20260927"
			]
		},
		{
			"label": "Hauteur",
			"value": "236 mm",
			"evidenceIds": [
				"bostitch-s2638-2-e-20260927"
			]
		},
		{
			"label": "Capacité du magasin (max.)",
			"value": "140",
			"evidenceIds": [
				"bostitch-s2638-2-e-20260927"
			]
		},
		{
			"label": "Couronne (mm)",
			"value": "25 (min.) ; 25 (max.)",
			"evidenceIds": [
				"bostitch-s2638-2-e-20260927"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "13 (min.) ; 38 (max.)",
			"evidenceIds": [
				"bostitch-s2638-2-e-20260927"
			]
		},
		{
			"label": "Désignation fabricant",
			"value": "AGRAFEUSE PNEUMATIQUE DOUBLE SECURITE - AGRAFES LARGES (couronne 25mm) S2-16WC de 15 à 38MM + Gâchette CT",
			"evidenceIds": [
				"bostitch-s2638-2-e-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "bostitch-s2638-2-e-20260927",
			"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/s2638-2-e/",
			"sourceLabel": "Bostitch France, fiche S2638-2-E, réf. S2638-2-E",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 1,4 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute."
		}
	],
	"fieldSources": {
		"mpn": [
			"bostitch-s2638-2-e-20260927"
		],
		"workingPressureBar": [
			"bostitch-s2638-2-e-20260927"
		],
		"airPerActionLiters": [
			"bostitch-s2638-2-e-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airPerActionLiters": 1.4,
	"actionLabel": "coup"
};

export default product;
