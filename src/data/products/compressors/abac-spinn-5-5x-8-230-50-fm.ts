import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "abac-spinn-5-5x-8-230-50-fm",
	"slug": "abac-spinn-5-5x-8-230-50-fm",
	"brand": "ABAC",
	"model": "SPINN 5.5X 8 230/50 FM",
	"mpn": "4152022526",
	"tankLiters": 0,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 8,
			"litersPerMinute": 846
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/abac-spinn-5-5x-8-230-50-fm.webp",
		"alt": "Repères techniques ABAC SPINN 5.5X 8 230/50 FM, référence 4152022526",
		"sourceUrl": "https://shop.abacaircompressors.com/en-INT/products/4152054944/spinn22-8-40050k-e-ce",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "ABAC SPINN 5.5X 8 230/50 FM, référence 4152022526 : configuration sans cuve intégrée, pression maximale publiée de 8 bar. Le point documenté le plus élevé en pression fournit 846 L/min à 8 bar. Version sur châssis sans cuve intégrée.",
		"verifiedFacts": [
			"Débit restitué publié : 846 L/min à 8 bar.",
			"Compresseur rotatif à vis lubrifié, famille SPINN. Puissance moteur publiée : 5,5 kW.",
			"Masse nette publiée : 160 kg.",
			"Alimentation publiée : 230 V, 50 Hz, triphasée.",
			"Fonctionnement continu déclaré par le constructeur pour cette gamme ; taux de marche normalisé à 100 %."
		],
		"limitations": [
			"Un seul point de débit restitué est documenté. Aucune mesure aux autres pressions n’est inventée.",
			"Le fonctionnement continu est une déclaration de gamme ; respecter les conditions de la notice. La disponibilité commerciale reste à confirmer.",
			"Version électrique exacte à vérifier à la commande ; une alimentation 230 V peut être triphasée.",
			"Le débit publié appartient à cette référence et à sa version de pression. Il ne définit pas une courbe complète."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "FAD capacity (l/min) : 846 ; Max Working Pressure (bar) : 8, dans le tableau fabricant de la variante 4152022526. Valeur restituée, pas aspirée.",
			"evidenceIds": [
				"abac-4152022526-20260926"
			]
		},
		{
			"label": "Équipement",
			"value": "Version sur châssis sans cuve intégrée.",
			"evidenceIds": [
				"abac-4152022526-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "850 × 720 × 980 mm (L × l × H)",
			"evidenceIds": [
				"abac-4152022526-20260926"
			]
		},
		{
			"label": "Taux de marche constructeur",
			"value": "100 %, fonctionnement continu déclaré pour la gamme. Respecter les conditions de la notice de la référence.",
			"evidenceIds": [
				"abac-spinn-5-5x-8-230-50-fm-continuous-duty-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "abac-4152022526-20260926",
			"sourceUrl": "https://shop.abacaircompressors.com/en-INT/products/4152054944/spinn22-8-40050k-e-ce",
			"sourceLabel": "ABAC, tableau officiel des variantes SPINN, réf. 4152022526",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "FAD capacity (l/min) : 846 ; Max Working Pressure (bar) : 8, dans le tableau fabricant de la variante 4152022526. Valeur restituée, pas aspirée."
		},
		{
			"id": "abac-spinn-5-5x-8-230-50-fm-continuous-duty-20260927",
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
			"abac-4152022526-20260926"
		],
		"tankLiters": [
			"abac-4152022526-20260926"
		],
		"maxPressureBar": [
			"abac-4152022526-20260926"
		],
		"fadCurve": [
			"abac-4152022526-20260926"
		],
		"oilType": [
			"abac-4152022526-20260926"
		],
		"powerKw": [
			"abac-4152022526-20260926"
		],
		"weightKg": [
			"abac-4152022526-20260926"
		],
		"voltage": [
			"abac-4152022526-20260926"
		],
		"phase": [
			"abac-4152022526-20260926"
		],
		"dutyCycle": [
			"abac-spinn-5-5x-8-230-50-fm-continuous-duty-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 5.5,
	"weightKg": 160,
	"voltage": "230 V, 50 Hz",
	"phase": "three-phase",
	"dutyCycle": 1
};

export default product;
