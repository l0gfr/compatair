import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "bostitch-bt1855sp-e",
	"slug": "bostitch-bt1855sp-e",
	"brand": "Bostitch",
	"model": "BT1855SP-E",
	"mpn": "BT1855SP-E",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Bostitch BT1855SP-E",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 4.8,
		"typical": 5.6,
		"max": 8.3
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/bostitch-bt1855sp-e.webp",
		"alt": "Repères techniques Bostitch BT1855SP-E, référence BT1855SP-E",
		"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/bt1855sp-e/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Bostitch BT1855SP-E, référence BT1855SP-E. Le fabricant publie 1,33 litre(s) d’air par coup à 5,6 bar : la cadence est indispensable pour dimensionner le compresseur. Poids : 1.4 kg. Largeur : 70 mm.",
		"verifiedFacts": [
			"Plage d’utilisation publiée : 4,8 à 8,3 bar. Consommation mesurée par le fabricant à 5,6 bar.",
			"Consommation publiée : 1,33 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"Référence fabricant : BT1855SP-E.",
			"Poids : 1.4 kg.",
			"Largeur : 70 mm.",
			"Longueur : 235 mm."
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
				"bostitch-bt1855sp-e-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 1,33 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute.",
			"evidenceIds": [
				"bostitch-bt1855sp-e-20260927"
			]
		},
		{
			"label": "Poids",
			"value": "1.4 kg",
			"evidenceIds": [
				"bostitch-bt1855sp-e-20260927"
			]
		},
		{
			"label": "Largeur",
			"value": "70 mm",
			"evidenceIds": [
				"bostitch-bt1855sp-e-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "235 mm",
			"evidenceIds": [
				"bostitch-bt1855sp-e-20260927"
			]
		},
		{
			"label": "Hauteur",
			"value": "240 mm",
			"evidenceIds": [
				"bostitch-bt1855sp-e-20260927"
			]
		},
		{
			"label": "Capacité du magasin (max.)",
			"value": "100",
			"evidenceIds": [
				"bostitch-bt1855sp-e-20260927"
			]
		},
		{
			"label": "Diamètre (mm)",
			"value": "1 (min.) ; 1.25 (max.)",
			"evidenceIds": [
				"bostitch-bt1855sp-e-20260927"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "15 (min.) ; 55 (max.)",
			"evidenceIds": [
				"bostitch-bt1855sp-e-20260927"
			]
		},
		{
			"label": "Tête (mm)",
			"value": "2 (min.) ; 2 (max.)",
			"evidenceIds": [
				"bostitch-bt1855sp-e-20260927"
			]
		},
		{
			"label": "Désignation fabricant",
			"value": "CLOUEUR DE FINITION 'SMARTPOINT' - POINTES BRADS JAUGE 18",
			"evidenceIds": [
				"bostitch-bt1855sp-e-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "bostitch-bt1855sp-e-20260927",
			"sourceUrl": "https://bostitch.fr/produits/details-de-l-outil/bt1855sp-e/",
			"sourceLabel": "Bostitch France, fiche BT1855SP-E, réf. BT1855SP-E",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 1,33 L/coup à 5,6 bar. Le calcul requiert la cadence en coups/minute."
		}
	],
	"fieldSources": {
		"mpn": [
			"bostitch-bt1855sp-e-20260927"
		],
		"workingPressureBar": [
			"bostitch-bt1855sp-e-20260927"
		],
		"airPerActionLiters": [
			"bostitch-bt1855sp-e-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airPerActionLiters": 1.33,
	"actionLabel": "coup"
};

export default product;
