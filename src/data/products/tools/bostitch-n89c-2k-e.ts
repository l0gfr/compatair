import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "bostitch-n89c-2k-e",
	"slug": "bostitch-n89c-2k-e",
	"brand": "Bostitch",
	"model": "N89C-2K-E",
	"mpn": "N89C-2K-E",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Bostitch N89C-2K-E",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 4.8,
		"typical": 5.6,
		"max": 8.3
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/bostitch-n89c-2k-e.webp",
		"alt": "Repères techniques Bostitch N89C-2K-E, référence N89C-2K-E",
		"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/n89c-2k-e/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Bostitch N89C-2K-E, référence N89C-2K-E. Le fabricant publie 2,33 litre(s) d’air par coup à 5,6 bar : la cadence est indispensable pour dimensionner le compresseur. Poids : 3.60 kg. Largeur : 133 mm.",
		"verifiedFacts": [
			"Plage d’utilisation publiée : 4,8 à 8,3 bar. Consommation mesurée par le fabricant à 5,6 bar.",
			"Consommation publiée : 2,33 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"Référence fabricant : N89C-2K-E.",
			"Poids : 3.60 kg.",
			"Largeur : 133 mm.",
			"Longueur : 311 mm."
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
				"bostitch-n89c-2k-e-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 2,33 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"evidenceIds": [
				"bostitch-n89c-2k-e-20260927"
			]
		},
		{
			"label": "Poids",
			"value": "3.60 kg",
			"evidenceIds": [
				"bostitch-n89c-2k-e-20260927"
			]
		},
		{
			"label": "Largeur",
			"value": "133 mm",
			"evidenceIds": [
				"bostitch-n89c-2k-e-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "311 mm",
			"evidenceIds": [
				"bostitch-n89c-2k-e-20260927"
			]
		},
		{
			"label": "Hauteur",
			"value": "355 mm",
			"evidenceIds": [
				"bostitch-n89c-2k-e-20260927"
			]
		},
		{
			"label": "Capacité du magasin (max.)",
			"value": "300",
			"evidenceIds": [
				"bostitch-n89c-2k-e-20260927"
			]
		},
		{
			"label": "Diamètre (mm)",
			"value": "2.5 (min.) ; 3.1 (max.)",
			"evidenceIds": [
				"bostitch-n89c-2k-e-20260927"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "50 (min.) ; 90 (max.)",
			"evidenceIds": [
				"bostitch-n89c-2k-e-20260927"
			]
		},
		{
			"label": "Tête (mm)",
			"value": "6.5 (min.) ; 7.2 (max.)",
			"evidenceIds": [
				"bostitch-n89c-2k-e-20260927"
			]
		},
		{
			"label": "Angle d’assemblage",
			"value": "15",
			"evidenceIds": [
				"bostitch-n89c-2k-e-20260927"
			]
		},
		{
			"label": "Désignation fabricant",
			"value": "CLOUEUR RLX-ST EN VALISETTE- 50MM - 90MM MAX",
			"evidenceIds": [
				"bostitch-n89c-2k-e-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "bostitch-n89c-2k-e-20260927",
			"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/n89c-2k-e/",
			"sourceLabel": "Bostitch France, fiche N89C-2K-E, réf. N89C-2K-E",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 2,33 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute."
		}
	],
	"fieldSources": {
		"mpn": [
			"bostitch-n89c-2k-e-20260927"
		],
		"workingPressureBar": [
			"bostitch-n89c-2k-e-20260927"
		],
		"airPerActionLiters": [
			"bostitch-n89c-2k-e-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airPerActionLiters": 2.33,
	"actionLabel": "coup"
};

export default product;
