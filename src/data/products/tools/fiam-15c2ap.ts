import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-15c2ap",
	"slug": "fiam-15c2ap",
	"brand": "Fiam",
	"model": "15C2AP",
	"mpn": "112514532",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Fiam 15C2AP",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-15c2ap-20261106.svg",
		"alt": "Repères techniques Fiam 15C2AP, référence 112514532",
		"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/15c2ap/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam 15C2AP, référence 112514532. Le tableau fabricant publie 360 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple de serrage indicatif : 0.6 ÷ 2.2 Nm. Vitesse à vide : 2200 tr/min.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 6 L/s, soit 360 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 112514532.",
			"Couple de serrage indicatif : 0.6 ÷ 2.2 Nm.",
			"Vitesse à vide : 2200 tr/min.",
			"Masse publiée : 0.70 kg."
		],
		"limitations": [
			"Le couple éventuel est indicatif : l’assemblage, l’accessoire et la pression dynamique influencent le résultat.",
			"Consommation déclarée par le fabricant, sans essai indépendant ni garantie d’un maximum à tous les régimes.",
			"Le régime de consommation publié est non précisé. Cette valeur reste documentaire et le moteur renvoie insufficient_data."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"evidenceIds": [
				"fiam-112514532-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 6 L/s, soit 360 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-112514532-20260926"
			]
		},
		{
			"label": "Couple de serrage indicatif",
			"value": "0.6 ÷ 2.2 Nm",
			"evidenceIds": [
				"fiam-112514532-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2200 tr/min",
			"evidenceIds": [
				"fiam-112514532-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.70 kg",
			"evidenceIds": [
				"fiam-112514532-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 37 x L 209 x H 157 mm",
			"evidenceIds": [
				"fiam-112514532-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "FEMALE HEXAGONAL DRIVE 1/4\"",
			"evidenceIds": [
				"fiam-112514532-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Push button",
			"evidenceIds": [
				"fiam-112514532-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-112514532-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/15c2ap/",
			"sourceLabel": "Fiam, fiche technique 15C2AP, réf. 112514532",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 6 L/s, soit 360 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-112514532-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-85.pdf#page=9",
			"sourceLabel": "Fiam, brochure technique en-85, p. 9",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		},
		{
			"id": "review:2026-11-06-followup:fiam-15c2ap:1",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/15c2ap/",
			"sourceLabel": "Fiam, revue documentaire du 6 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Fiche112514532 :15C2AP2200rpm,0,6–2,2Nm,0,70kg et6Ls;15C2A sansP publie4Ls. Le régime n’est pas précisé et la brochure9 présente aussiAPA/APA3I. Conserver360Lmin hors usage conclusif; vérifier exécution exacte plutôt que transférer la commande. SHA-256 du document complet : 41521cbcc420482b1aa687d90306757011eb241d513bacf587aee23b406394b0."
		},
		{
			"id": "review:2026-11-06-followup:fiam-15c2ap:2",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-85.pdf#page=9",
			"sourceLabel": "Fiam, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Fiche112514532 :15C2AP2200rpm,0,6–2,2Nm,0,70kg et6Ls;15C2A sansP publie4Ls. Le régime n’est pas précisé et la brochure9 présente aussiAPA/APA3I. Conserver360Lmin hors usage conclusif; vérifier exécution exacte plutôt que transférer la commande. SHA-256 du document complet : e1c8db38588668ff2347c0005a43ac3067609b0b280d80dc3548f0d8043dccce."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-112514532-20260926"
		],
		"workingPressureBar": [
			"fiam-112514532-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-112514532-20260926"
		],
		"airflowBasis": [
			"review:2026-11-06-followup:fiam-15c2ap:1",
			"review:2026-11-06-followup:fiam-15c2ap:2"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 360,
		"typical": 360,
		"max": 360
	},
	"airflowBasis": "unqualified"
};

export default product;
