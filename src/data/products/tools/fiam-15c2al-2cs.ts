import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-15c2al-2cs",
	"slug": "fiam-15c2al-2cs",
	"brand": "Fiam",
	"model": "15C2AL-2CS",
	"mpn": "112509891",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Fiam 15C2AL-2CS",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-15c2al-2cs.webp",
		"alt": "Repères techniques Fiam 15C2AL-2CS, référence 112509891",
		"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/15c2al-2cs/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam 15C2AL-2CS. Le document propre à cette référence publie une consommation sans préciser son régime de mesure. Le débit en charge maximal reste à confirmer auprès du fabricant. La fiche fabricant publie 4 L/s, soit 240 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML. Référence fabricant : 112509891. Couple de serrage indicatif : 0.4÷2 Nm. Vitesse à vide : 2000 tr/min. Masse publiée : 0.59 kg.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 4 L/s, soit 240 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 112509891.",
			"Couple de serrage indicatif : 0.4÷2 Nm.",
			"Vitesse à vide : 2000 tr/min.",
			"Masse publiée : 0.59 kg.",
			"Consommation de régime non précisé publiée : 240 L/min."
		],
		"limitations": [
			"Le couple éventuel est indicatif : l’assemblage, l’accessoire et la pression dynamique influencent le résultat.",
			"Consommation déclarée par le fabricant, sans essai indépendant ni garantie d’un maximum à tous les régimes.",
			"Le document propre à cette référence publie une consommation sans préciser son régime de mesure. Le débit en charge maximal reste à confirmer auprès du fabricant."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"evidenceIds": [
				"fiam-112509891-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation de régime non précisé publiée : 240 L/min.",
			"evidenceIds": [
				"fiam-15c2al-2cs-reserved-20261031-1",
				"fiam-15c2al-2cs-reserved-20261031-2"
			]
		},
		{
			"label": "Couple de serrage indicatif",
			"value": "0.4÷2 Nm",
			"evidenceIds": [
				"fiam-112509891-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2000 tr/min",
			"evidenceIds": [
				"fiam-112509891-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.59 kg",
			"evidenceIds": [
				"fiam-112509891-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 38 x L 228 mm",
			"evidenceIds": [
				"fiam-112509891-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "FEMALE HEXAGONAL DRIVE 1/4\"",
			"evidenceIds": [
				"fiam-112509891-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Lever start",
			"evidenceIds": [
				"fiam-112509891-20260926"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":240,\"typical\":240,\"max\":240},\"workingPressureBar\":{\"min\":6.3,\"typical\":6.3,\"max\":6.3}}",
			"evidenceIds": [
				"fiam-112509891-20260926",
				"fiam-15c2al-2cs-reserved-20261031-1",
				"fiam-15c2al-2cs-reserved-20261031-2"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-112509891-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/15c2al-2cs/",
			"sourceLabel": "Fiam, fiche technique 15C2AL-2CS, réf. 112509891",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 4 L/s, soit 240 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-112509891-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-85.pdf#page=15",
			"sourceLabel": "Fiam, brochure technique en-85, p. 15",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		},
		{
			"id": "fiam-15c2al-2cs-reserved-20261031-1",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/15c2al-2cs/",
			"sourceLabel": "Fiam 15C2AL-2CS : relecture documentaire du 31 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 fe879fc0261db277c8d2c38f9742ef49f1ad06e81ab8bac36c91fd9de5e748d7. Le document propre à cette référence publie une consommation sans préciser son régime de mesure. Le débit en charge maximal reste à confirmer auprès du fabricant."
		},
		{
			"id": "fiam-15c2al-2cs-reserved-20261031-2",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-85.pdf#page=15",
			"sourceLabel": "Fiam 15C2AL-2CS : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 e1c8db38588668ff2347c0005a43ac3067609b0b280d80dc3548f0d8043dccce. Le document propre à cette référence publie une consommation sans préciser son régime de mesure. Le débit en charge maximal reste à confirmer auprès du fabricant."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-112509891-20260926"
		],
		"workingPressureBar": [
			"fiam-112509891-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-112509891-20260926"
		],
		"airflowBasis": [
			"fiam-15c2al-2cs-reserved-20261031-1",
			"fiam-15c2al-2cs-reserved-20261031-2"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 240,
		"typical": 240,
		"max": 240
	},
	"airflowBasis": "unqualified"
};

export default product;
