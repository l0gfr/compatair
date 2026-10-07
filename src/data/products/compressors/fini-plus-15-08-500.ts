import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "fini-plus-15-08-500",
	"slug": "fini-plus-15-08-500",
	"brand": "Fini",
	"model": "PLUS 15-08-500",
	"mpn": "V83NP92FNM701",
	"tankLiters": 500,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 8,
			"litersPerMinute": 2150
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/fini-plus-15-08-500.webp",
		"alt": "Repères techniques Fini PLUS 15-08-500, référence V83NP92FNM701",
		"sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Micro-Plus_Fini_IT_04-2024_9990394.pdf#page=18",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fini PLUS 15-08-500, référence V83NP92FNM701 : cuve de 500 L, pression maximale publiée de 8 bar. Le point documenté le plus élevé en pression fournit 2 150 L/min à 8 bar. Version sans sécheur intégré.",
		"verifiedFacts": [
			"Débit restitué publié : 2 150 L/min à 8 bar.",
			"Vis lubrifiée, vitesse fixe. Puissance moteur publiée : 15 kW.",
			"Masse nette publiée : 383 kg.",
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
				"fini-v83np92fnm701-20260926"
			]
		},
		{
			"label": "Équipement",
			"value": "Version sans sécheur intégré.",
			"evidenceIds": [
				"fini-v83np92fnm701-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "2000x680x1630 mm",
			"evidenceIds": [
				"fini-v83np92fnm701-20260926"
			]
		},
		{
			"label": "Taux de marche constructeur",
			"value": "100 %, fonctionnement continu déclaré pour la gamme. Respecter les conditions de la notice de la référence.",
			"evidenceIds": [
				"fini-plus-15-08-500-continuous-duty-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "fini-v83np92fnm701-20260926",
			"sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Micro-Plus_Fini_IT_04-2024_9990394.pdf#page=18",
			"sourceLabel": "Fini, catalogue MICRO / PLUS, édition 04-2024, p. 18, réf. V83NP92FNM701",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débit restitué ISO 1217 à la pression de service indiquée ; note du tableau."
		},
		{
			"id": "fini-v83np92fnm701-20260926-lubrification",
			"sourceUrl": "https://finicompressors.com/wp-content/uploads/Catalogo-Micro-Plus_Fini_IT_04-2024_9990394.pdf#page=1",
			"sourceLabel": "Fini, catalogue MICRO / PLUS, édition 04-2024, lubrification, p. 1",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Source du mode de lubrification uniquement."
		},
		{
			"id": "fini-plus-15-08-500-continuous-duty-20260927",
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
			"fini-v83np92fnm701-20260926"
		],
		"tankLiters": [
			"fini-v83np92fnm701-20260926"
		],
		"maxPressureBar": [
			"fini-v83np92fnm701-20260926"
		],
		"fadCurve": [
			"fini-v83np92fnm701-20260926"
		],
		"oilType": [
			"fini-v83np92fnm701-20260926-lubrification"
		],
		"powerKw": [
			"fini-v83np92fnm701-20260926"
		],
		"weightKg": [
			"fini-v83np92fnm701-20260926"
		],
		"dutyCycle": [
			"fini-plus-15-08-500-continuous-duty-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 15,
	"weightKg": 383,
	"dutyCycle": 1
};

export default product;
