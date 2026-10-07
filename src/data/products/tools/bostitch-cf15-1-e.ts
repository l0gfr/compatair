import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "bostitch-cf15-1-e",
	"slug": "bostitch-cf15-1-e",
	"brand": "Bostitch",
	"model": "CF15-1-E",
	"mpn": "CF15-1-E",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Bostitch CF15-1-E",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 4.8,
		"typical": 5.6,
		"max": 8.3
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/bostitch-cf15-1-e.webp",
		"alt": "Repères techniques Bostitch CF15-1-E, référence CF15-1-E",
		"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/cf15-1-e/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Bostitch CF15-1-E, référence CF15-1-E. Le fabricant publie 2,14 litre(s) d’air par coup à 5,6 bar : la cadence est indispensable pour dimensionner le compresseur. Poids : 2.65 kg. Largeur : 89 mm.",
		"verifiedFacts": [
			"Plage d’utilisation publiée : 4,8 à 8,3 bar. Consommation mesurée par le fabricant à 5,6 bar.",
			"Consommation publiée : 2,14 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"Référence fabricant : CF15-1-E.",
			"Poids : 2.65 kg.",
			"Largeur : 89 mm.",
			"Longueur : 291 mm."
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
				"bostitch-cf15-1-e-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 2,14 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"evidenceIds": [
				"bostitch-cf15-1-e-20260927"
			]
		},
		{
			"label": "Poids",
			"value": "2.65 kg",
			"evidenceIds": [
				"bostitch-cf15-1-e-20260927"
			]
		},
		{
			"label": "Largeur",
			"value": "89 mm",
			"evidenceIds": [
				"bostitch-cf15-1-e-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "291 mm",
			"evidenceIds": [
				"bostitch-cf15-1-e-20260927"
			]
		},
		{
			"label": "Hauteur",
			"value": "277 mm",
			"evidenceIds": [
				"bostitch-cf15-1-e-20260927"
			]
		},
		{
			"label": "Capacité du magasin (max.)",
			"value": "100",
			"evidenceIds": [
				"bostitch-cf15-1-e-20260927"
			]
		},
		{
			"label": "Couronne (mm)",
			"value": "24.4 (min.) ; 24.4 (max.)",
			"evidenceIds": [
				"bostitch-cf15-1-e-20260927"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "10 (min.) ; 15 (max.)",
			"evidenceIds": [
				"bostitch-cf15-1-e-20260927"
			]
		},
		{
			"label": "Désignation fabricant",
			"value": "AGRAF. ASS. BOIS EN BOUT OU ANGLE- AGR 10-15MM",
			"evidenceIds": [
				"bostitch-cf15-1-e-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "bostitch-cf15-1-e-20260927",
			"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/cf15-1-e/",
			"sourceLabel": "Bostitch France, fiche CF15-1-E, réf. CF15-1-E",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 2,14 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute."
		}
	],
	"fieldSources": {
		"mpn": [
			"bostitch-cf15-1-e-20260927"
		],
		"workingPressureBar": [
			"bostitch-cf15-1-e-20260927"
		],
		"airPerActionLiters": [
			"bostitch-cf15-1-e-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airPerActionLiters": 2.14,
	"actionLabel": "coup"
};

export default product;
