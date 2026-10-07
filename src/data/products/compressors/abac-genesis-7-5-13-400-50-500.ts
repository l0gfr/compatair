import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "abac-genesis-7-5-13-400-50-500",
	"slug": "abac-genesis-7-5-13-400-50-500",
	"brand": "ABAC",
	"model": "GENESIS 7,5 13 400/50 500",
	"mpn": "4152025412",
	"tankLiters": 500,
	"maxPressureBar": 13,
	"fadCurve": [
		{
			"pressureBar": 13,
			"litersPerMinute": 830
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/abac-genesis-7-5-13-400-50-500.webp",
		"alt": "Repères techniques ABAC GENESIS 7,5 13 400/50 500, référence 4152025412",
		"sourceUrl": "https://shop.abacaircompressors.com/en-FR/products/4152009362/genesis-i11-6-13-270-400-50ce",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "ABAC GENESIS 7,5 13 400/50 500, référence 4152025412 : cuve de 500 L, pression maximale publiée de 13 bar. Le point documenté le plus élevé en pression fournit 830 L/min à 13 bar. Configuration fabricant : Tank Mounted.",
		"verifiedFacts": [
			"Débit restitué publié : 830 L/min à 13 bar.",
			"Compresseur lubrifié, réserve d’huile déclarée par le fabricant. Puissance moteur publiée : 7,5 kW.",
			"Masse publiée : 431 kg.",
			"Alimentation publiée : 400 V, 50 Hz, triphasée.",
			"Fonctionnement continu déclaré par le constructeur pour cette gamme ; taux de marche normalisé à 100 %."
		],
		"limitations": [
			"Un seul point de débit restitué est documenté. Aucune mesure aux autres pressions n’est inventée.",
			"Le fonctionnement continu est une déclaration de gamme ; respecter les conditions de la notice. La disponibilité commerciale reste à confirmer.",
			"La version électrique et la pression de cette référence priment sur le nom de la gamme.",
			"Les autres pressions ne sont pas extrapolées."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "La variante 4152025412 publie un FAD de 830 L/min pour sa version de 13 bar.",
			"evidenceIds": [
				"abac-4152025412-20260926"
			]
		},
		{
			"label": "Équipement",
			"value": "Configuration fabricant : Tank Mounted.",
			"evidenceIds": [
				"abac-4152025412-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "1935 × 665 × 1689 mm (L × l × H)",
			"evidenceIds": [
				"abac-4152025412-20260926"
			]
		},
		{
			"label": "Capacité d’huile publiée",
			"value": "3.2 L",
			"evidenceIds": [
				"abac-4152025412-20260926"
			]
		},
		{
			"label": "Taux de marche constructeur",
			"value": "100 %, fonctionnement continu déclaré pour la gamme. Respecter les conditions de la notice de la référence.",
			"evidenceIds": [
				"abac-genesis-7-5-13-400-50-500-continuous-duty-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "abac-4152025412-20260926",
			"sourceUrl": "https://shop.abacaircompressors.com/en-FR/products/4152009362/genesis-i11-6-13-270-400-50ce",
			"sourceLabel": "ABAC, tableau des variantes de la fiche officielle, réf. 4152025412",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La variante 4152025412 publie un FAD de 830 L/min pour sa version de 13 bar."
		},
		{
			"id": "abac-genesis-7-5-13-400-50-500-continuous-duty-20260927",
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
			"abac-4152025412-20260926"
		],
		"tankLiters": [
			"abac-4152025412-20260926"
		],
		"maxPressureBar": [
			"abac-4152025412-20260926"
		],
		"fadCurve": [
			"abac-4152025412-20260926"
		],
		"oilType": [
			"abac-4152025412-20260926"
		],
		"powerKw": [
			"abac-4152025412-20260926"
		],
		"weightKg": [
			"abac-4152025412-20260926"
		],
		"voltage": [
			"abac-4152025412-20260926"
		],
		"phase": [
			"abac-4152025412-20260926"
		],
		"dutyCycle": [
			"abac-genesis-7-5-13-400-50-500-continuous-duty-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 7.5,
	"weightKg": 431,
	"voltage": "400 V, 50 Hz",
	"phase": "three-phase",
	"dutyCycle": 1
};

export default product;
