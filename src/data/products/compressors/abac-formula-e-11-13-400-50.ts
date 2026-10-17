import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "abac-formula-e-11-13-400-50",
	"slug": "abac-formula-e-11-13-400-50",
	"brand": "ABAC",
	"model": "FORMULA E 11 13 400/50 ",
	"mpn": "4152025399",
	"tankLiters": 0,
	"maxPressureBar": 13,
	"fadCurve": [
		{
			"pressureBar": 13,
			"litersPerMinute": 1210
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/abac-formula-e-11-13-400-50.webp",
		"alt": "Repères techniques ABAC FORMULA E 11 13 400/50 , référence 4152025399",
		"sourceUrl": "https://shop.abacaircompressors.com/en-FR/products/4152025384/formula-55-8-40050-ce",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "FORMULA E 11 13 400/50 CE, article 4152025399 : 1 210 L/min à 13 bar, 11,2 kW, alimentation 400 V triphasée à 50 Hz. La variante 10 bar de la même famille publie 1 510 L/min : ces deux versions répondent à des pressions de réseau différentes.",
		"verifiedFacts": [
			"Débit restitué publié : 1 210 L/min à 13 bar.",
			"Compresseur rotatif à vis lubrifié, famille FORMULA. Puissance moteur publiée : 11,2 kW.",
			"Masse publiée : 296 kg.",
			"Alimentation publiée : 400 V, 50 Hz, triphasée."
		],
		"limitations": [
			"Le FAD de 1 210 L/min appartient à la référence 4152025399 ; les 1 510 L/min de la version 10 bar ne forment pas un second point de sa courbe.",
			"Le taux de marche applicable au groupe complet reste à confirmer. La mention générale « jusqu’à 100 % » ne fixe pas ce taux pour cet article.",
			"La masse de 296 kg provient du bloc de dimensions produit. Des champs ERP donnent une autre masse ; la base nette ou logistique doit être clarifiée avant manutention.",
			"Le libellé français de certaines données ERP diverge du nom E 11 des autres langues. Confirmer la référence de commande 4152025399 et les équipements Full Feature sur le devis."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "FAD capacity (l/min) : 1210 ; Max Working Pressure (bar) : 13, dans le tableau fabricant de la variante 4152025399. Valeur restituée, pas aspirée.",
			"evidenceIds": [
				"abac-4152025399-20260926"
			]
		},
		{
			"label": "Équipement",
			"value": "Configuration Full Feature publiée par le fabricant.",
			"evidenceIds": [
				"abac-4152025399-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "1065 × 665 × 1070 mm (L × l × H)",
			"evidenceIds": [
				"abac-4152025399-20260926"
			]
		},
		{
			"label": "Service continu : portée de la source",
			"value": "La page générale ABAC évoque jusqu’à 100 % de cycle de service ; le taux applicable à 4152025399 reste à confirmer dans sa notice.",
			"evidenceIds": [
				"abac-formula-e-11-13-400-50-continuous-duty-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "abac-4152025399-20260926",
			"sourceUrl": "https://shop.abacaircompressors.com/en-FR/products/4152025384/formula-55-8-40050-ce",
			"sourceLabel": "ABAC, tableau officiel des variantes FORMULA, réf. 4152025399",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "FAD capacity (l/min) : 1210 ; Max Working Pressure (bar) : 13, dans le tableau fabricant de la variante 4152025399. Valeur restituée, pas aspirée."
		},
		{
			"id": "abac-formula-e-11-13-400-50-continuous-duty-20260927",
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
			"abac-4152025399-20260926"
		],
		"tankLiters": [
			"abac-4152025399-20260926"
		],
		"maxPressureBar": [
			"abac-4152025399-20260926"
		],
		"fadCurve": [
			"abac-4152025399-20260926"
		],
		"oilType": [
			"abac-4152025399-20260926"
		],
		"powerKw": [
			"abac-4152025399-20260926"
		],
		"weightKg": [
			"abac-4152025399-20260926"
		],
		"voltage": [
			"abac-4152025399-20260926"
		],
		"phase": [
			"abac-4152025399-20260926"
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
