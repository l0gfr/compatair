import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "abac-spinn5-5-8-400-50-e",
	"slug": "abac-spinn5-5-8-400-50-e",
	"brand": "ABAC",
	"model": "SPINN5,5 8 400/50 E",
	"mpn": "4152054984",
	"tankLiters": 0,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 8,
			"litersPerMinute": 888
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/abac-spinn5-5-8-400-50-e.webp",
		"alt": "Repères techniques ABAC SPINN5,5 8 400/50 E, référence 4152054984",
		"sourceUrl": "https://shop.abacaircompressors.com/en-FR/products/4152054984/spinn55-8-40050-e-ce",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "ABAC SPINN5,5 8 400/50 E, référence 4152054984 : configuration sans cuve intégrée, pression maximale publiée de 8 bar. Le point documenté le plus élevé en pression fournit 888 L/min à 8 bar. Configuration fabricant : Base Mounted.",
		"verifiedFacts": [
			"Débit restitué publié : 888 L/min à 8 bar.",
			"Compresseur lubrifié, réserve d’huile déclarée par le fabricant. Puissance moteur publiée : 5,5 kW.",
			"Masse publiée : 130 kg.",
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
			"value": "La variante 4152054984 publie un FAD de 888 L/min pour sa version de 8 bar.",
			"evidenceIds": [
				"abac-4152054984-20260926"
			]
		},
		{
			"label": "Équipement",
			"value": "Configuration fabricant : Base Mounted.",
			"evidenceIds": [
				"abac-4152054984-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "620 × 630 × 950 mm (L × l × H)",
			"evidenceIds": [
				"abac-4152054984-20260926"
			]
		},
		{
			"label": "Capacité d’huile publiée",
			"value": "3.2 L",
			"evidenceIds": [
				"abac-4152054984-20260926"
			]
		},
		{
			"label": "Taux de marche constructeur",
			"value": "100 %, fonctionnement continu déclaré pour la gamme. Respecter les conditions de la notice de la référence.",
			"evidenceIds": [
				"abac-spinn5-5-8-400-50-e-continuous-duty-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "abac-4152054984-20260926",
			"sourceUrl": "https://shop.abacaircompressors.com/en-FR/products/4152054984/spinn55-8-40050-e-ce",
			"sourceLabel": "ABAC, tableau des variantes de la fiche officielle, réf. 4152054984",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La variante 4152054984 publie un FAD de 888 L/min pour sa version de 8 bar."
		},
		{
			"id": "abac-spinn5-5-8-400-50-e-continuous-duty-20260927",
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
			"abac-4152054984-20260926"
		],
		"tankLiters": [
			"abac-4152054984-20260926"
		],
		"maxPressureBar": [
			"abac-4152054984-20260926"
		],
		"fadCurve": [
			"abac-4152054984-20260926"
		],
		"oilType": [
			"abac-4152054984-20260926"
		],
		"powerKw": [
			"abac-4152054984-20260926"
		],
		"weightKg": [
			"abac-4152054984-20260926"
		],
		"voltage": [
			"abac-4152054984-20260926"
		],
		"phase": [
			"abac-4152054984-20260926"
		],
		"dutyCycle": [
			"abac-spinn5-5-8-400-50-e-continuous-duty-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 5.5,
	"weightKg": 130,
	"voltage": "400 V, 50 Hz",
	"phase": "three-phase",
	"dutyCycle": 1
};

export default product;
