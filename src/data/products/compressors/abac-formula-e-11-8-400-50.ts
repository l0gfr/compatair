import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "abac-formula-e-11-8-400-50",
	"slug": "abac-formula-e-11-8-400-50",
	"brand": "ABAC",
	"model": "FORMULA E 11 8 400/50 ",
	"mpn": "4152025397",
	"tankLiters": 0,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 8,
			"litersPerMinute": 1675
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/abac-formula-e-11-8-400-50.webp",
		"alt": "Repères techniques ABAC FORMULA E 11 8 400/50 , référence 4152025397",
		"sourceUrl": "https://shop.abacaircompressors.com/en-FR/products/4152025384/formula-55-8-40050-ce",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "FORMULA E 11 8 400/50 CE, article 4152025397 : 1 675 L/min à 8 bar, 11,2 kW, 400 V triphasé à 50 Hz et sécheur Full Feature, sans cuve. La référence 4152025399 de 13 bar annonce 1 210 L/min à cette autre pression.",
		"verifiedFacts": [
			"Débit restitué publié : 1 675 L/min à 8 bar.",
			"Compresseur rotatif à vis lubrifié, famille FORMULA. Puissance moteur publiée : 11,2 kW.",
			"Masse publiée : 296 kg.",
			"Alimentation publiée : 400 V, 50 Hz, triphasée."
		],
		"limitations": [
			"Chaque capacité appartient à sa version de pression ; les points des variantes 8 et 13 bar restent séparés.",
			"Le taux de marche du groupe complet reste à confirmer pour l’article commandé.",
			"Le bloc de dimensions produit donne 296 kg ; les attributs ERP donnent 270 kg. La base de masse doit être clarifiée avant manutention.",
			"Le libellé français ERP indique E 15 08, tandis que les autres langues indiquent E 11 8. Vérifier la référence 4152025397 sur le devis."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "FAD capacity (l/min) : 1675 ; Max Working Pressure (bar) : 8, dans le tableau fabricant de la variante 4152025397. Valeur restituée, pas aspirée.",
			"evidenceIds": [
				"abac-4152025397-20260926"
			]
		},
		{
			"label": "Équipement",
			"value": "Configuration Full Feature publiée par le fabricant.",
			"evidenceIds": [
				"abac-4152025397-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "1065 × 665 × 1070 mm (L × l × H)",
			"evidenceIds": [
				"abac-4152025397-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "abac-4152025397-20260926",
			"sourceUrl": "https://shop.abacaircompressors.com/en-FR/products/4152025384/formula-55-8-40050-ce",
			"sourceLabel": "ABAC, tableau officiel des variantes FORMULA, réf. 4152025397",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "FAD capacity (l/min) : 1675 ; Max Working Pressure (bar) : 8, dans le tableau fabricant de la variante 4152025397. Valeur restituée, pas aspirée."
		},
		{
			"id": "abac-formula-e-11-8-400-50-continuous-duty-20260927",
			"sourceUrl": "https://www.abacaircompressors.com/en-international/products/screw-compressors",
			"sourceLabel": "ABAC, gamme de compresseurs à vis SPINN, FORMULA et GENESIS",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Déclaration de la gamme ABAC à vis ; uniquement les références SPINN, FORMULA et GENESIS revues individuellement dans ce lot."
		}
	],
	"fieldSources": {
		"mpn": [
			"abac-4152025397-20260926"
		],
		"tankLiters": [
			"abac-4152025397-20260926"
		],
		"maxPressureBar": [
			"abac-4152025397-20260926"
		],
		"fadCurve": [
			"abac-4152025397-20260926"
		],
		"oilType": [
			"abac-4152025397-20260926"
		],
		"powerKw": [
			"abac-4152025397-20260926"
		],
		"weightKg": [
			"abac-4152025397-20260926"
		],
		"voltage": [
			"abac-4152025397-20260926"
		],
		"phase": [
			"abac-4152025397-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 11.2,
	"weightKg": 296,
	"voltage": "400 V, 50 Hz",
	"phase": "three-phase"
};

export default product;
