import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "abac-spinn-22e-8-400-50-tm500",
	"slug": "abac-spinn-22e-8-400-50-tm500",
	"brand": "ABAC",
	"model": "SPINN 22E 8 400/50 TM500",
	"mpn": "4152028948",
	"tankLiters": 500,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 8,
			"litersPerMinute": 3570
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/abac-spinn-22e-8-400-50-tm500.webp",
		"alt": "Repères techniques ABAC SPINN 22E 8 400/50 TM500, référence 4152028948",
		"sourceUrl": "https://shop.abacaircompressors.com/en-FR/products/4152028948/spinn-22e-8-40050-tm500-ce",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "ABAC SPINN 22E 8 400/50 TM500, référence 4152028948 : cuve de 500 L, pression maximale publiée de 8 bar. Le point documenté le plus élevé en pression fournit 3 570 L/min à 8 bar. Configuration fabricant : Full Feature.",
		"verifiedFacts": [
			"Débit restitué publié : 3 570 L/min à 8 bar.",
			"Compresseur lubrifié, réserve d’huile déclarée par le fabricant. Puissance moteur publiée : 22,4 kW.",
			"Masse publiée : 619 kg.",
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
			"value": "La variante 4152028948 publie un FAD de 3570 L/min pour sa version de 8 bar.",
			"evidenceIds": [
				"abac-4152028948-20260926"
			]
		},
		{
			"label": "Équipement",
			"value": "Configuration fabricant : Full Feature.",
			"evidenceIds": [
				"abac-4152028948-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "1904 × 780 × 1833 mm (L × l × H)",
			"evidenceIds": [
				"abac-4152028948-20260926"
			]
		},
		{
			"label": "Capacité d’huile publiée",
			"value": "12 L",
			"evidenceIds": [
				"abac-4152028948-20260926"
			]
		},
		{
			"label": "Taux de marche constructeur",
			"value": "100 %, fonctionnement continu déclaré pour la gamme. Respecter les conditions de la notice de la référence.",
			"evidenceIds": [
				"abac-spinn-22e-8-400-50-tm500-continuous-duty-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "abac-4152028948-20260926",
			"sourceUrl": "https://shop.abacaircompressors.com/en-FR/products/4152028948/spinn-22e-8-40050-tm500-ce",
			"sourceLabel": "ABAC, tableau des variantes de la fiche officielle, réf. 4152028948",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La variante 4152028948 publie un FAD de 3570 L/min pour sa version de 8 bar."
		},
		{
			"id": "abac-spinn-22e-8-400-50-tm500-continuous-duty-20260927",
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
			"abac-4152028948-20260926"
		],
		"tankLiters": [
			"abac-4152028948-20260926"
		],
		"maxPressureBar": [
			"abac-4152028948-20260926"
		],
		"fadCurve": [
			"abac-4152028948-20260926"
		],
		"oilType": [
			"abac-4152028948-20260926"
		],
		"powerKw": [
			"abac-4152028948-20260926"
		],
		"weightKg": [
			"abac-4152028948-20260926"
		],
		"voltage": [
			"abac-4152028948-20260926"
		],
		"phase": [
			"abac-4152028948-20260926"
		],
		"dutyCycle": [
			"abac-spinn-22e-8-400-50-tm500-continuous-duty-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 22.4,
	"weightKg": 619,
	"voltage": "400 V, 50 Hz",
	"phase": "three-phase",
	"dutyCycle": 1
};

export default product;
