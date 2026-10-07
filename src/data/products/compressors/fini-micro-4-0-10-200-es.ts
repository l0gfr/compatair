import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "fini-micro-4-0-10-200-es",
	"slug": "fini-micro-4-0-10-200-es",
	"brand": "Fini",
	"model": "MICRO 4.0-10-200 ES",
	"mpn": "V77JP92FNMB01",
	"tankLiters": 200,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 10,
			"litersPerMinute": 485
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/fini-micro-4-0-10-200-es.webp",
		"alt": "Repères techniques Fini MICRO 4.0-10-200 ES, référence V77JP92FNMB01",
		"sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Micro-Plus_Fini_IT_04-2024_9990394.pdf#page=16",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fini MICRO 4.0-10-200 ES, référence V77JP92FNMB01 : cuve de 200 L, pression maximale publiée de 10 bar. Le point documenté le plus élevé en pression fournit 485 L/min à 10 bar. Sécheur intégré (version ES).",
		"verifiedFacts": [
			"Débit restitué publié : 485 L/min à 10 bar.",
			"Vis lubrifiée, vitesse fixe. Puissance moteur publiée : 4 kW.",
			"Masse nette publiée : 175 kg.",
			"Fonctionnement continu déclaré par le constructeur pour cette gamme ; taux de marche normalisé à 100 %."
		],
		"limitations": [
			"Un seul point de débit restitué est documenté. Aucune mesure aux autres pressions n’est inventée.",
			"Le fonctionnement continu est une déclaration de gamme ; respecter les conditions de la notice. La disponibilité commerciale reste à confirmer.",
			"Le catalogue 04-2024 reste disponible sur le site fabricant. La disponibilité locale est à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Débit restitué ISO 1217 à la pression de service indiquée ; note du tableau.",
			"evidenceIds": [
				"fini-v77jp92fnmb01-20260926"
			]
		},
		{
			"label": "Équipement",
			"value": "Sécheur intégré (version ES).",
			"evidenceIds": [
				"fini-v77jp92fnmb01-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "1480x520x1280 mm",
			"evidenceIds": [
				"fini-v77jp92fnmb01-20260926"
			]
		},
		{
			"label": "Taux de marche constructeur",
			"value": "100 %, fonctionnement continu déclaré pour la gamme. Respecter les conditions de la notice de la référence.",
			"evidenceIds": [
				"fini-micro-4-0-10-200-es-continuous-duty-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "fini-v77jp92fnmb01-20260926",
			"sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Micro-Plus_Fini_IT_04-2024_9990394.pdf#page=16",
			"sourceLabel": "Fini, catalogue MICRO / PLUS, édition 04-2024, p. 16, réf. V77JP92FNMB01",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débit restitué ISO 1217 à la pression de service indiquée ; note du tableau."
		},
		{
			"id": "fini-v77jp92fnmb01-20260926-lubrification",
			"sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Micro-Plus_Fini_IT_04-2024_9990394.pdf#page=1",
			"sourceLabel": "Fini, catalogue MICRO / PLUS, édition 04-2024, lubrification, p. 1",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Source du mode de lubrification uniquement."
		},
		{
			"id": "fini-micro-4-0-10-200-es-continuous-duty-20260927",
			"sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Micro-Plus_Fini_EN_04-2024_9990395.pdf#page=4",
			"sourceLabel": "Fini, catalogue MICRO/PLUS 2,2–75 kW, avril 2024, p. 4",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Fonctionnement continu déclaré dans le catalogue MICRO/PLUS ; 112 MPN vérifiés dans les tableaux de cette même édition. Le fonctionnement continu est normalisé en taux de marche 1."
		}
	],
	"fieldSources": {
		"mpn": [
			"fini-v77jp92fnmb01-20260926"
		],
		"tankLiters": [
			"fini-v77jp92fnmb01-20260926"
		],
		"maxPressureBar": [
			"fini-v77jp92fnmb01-20260926"
		],
		"fadCurve": [
			"fini-v77jp92fnmb01-20260926"
		],
		"oilType": [
			"fini-v77jp92fnmb01-20260926-lubrification"
		],
		"powerKw": [
			"fini-v77jp92fnmb01-20260926"
		],
		"weightKg": [
			"fini-v77jp92fnmb01-20260926"
		],
		"dutyCycle": [
			"fini-micro-4-0-10-200-es-continuous-duty-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 4,
	"weightKg": 175,
	"dutyCycle": 1
};

export default product;
