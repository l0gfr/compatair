import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-fde49pa",
	"slug": "fiam-fde49pa",
	"brand": "Fiam",
	"model": "FDE49PA",
	"mpn": "124611551",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Fiam FDE49PA",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-fde49pa.webp",
		"alt": "Repères techniques Fiam FDE49PA, référence 124611551",
		"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fde49pa/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam FDE49PA. Le document propre à cette référence publie une consommation sans préciser son régime de mesure. Le débit en charge maximal reste à confirmer auprès du fabricant. La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML. Référence fabricant : 124611551. Vitesse à vide : 4900 tr/min. Masse publiée : 1.08 kg. Dimensions publiées : Ø 38 x L 223 x H 155 mm.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 124611551.",
			"Vitesse à vide : 4900 tr/min.",
			"Masse publiée : 1.08 kg.",
			"Dimensions publiées : Ø 38 x L 223 x H 155 mm.",
			"Consommation de régime non précisé publiée : 600 L/min."
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
				"fiam-124611551-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation de régime non précisé publiée : 600 L/min.",
			"evidenceIds": [
				"fiam-fde49pa-reserved-20261031-1",
				"fiam-fde49pa-reserved-20261031-2"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "4900 tr/min",
			"evidenceIds": [
				"fiam-124611551-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.08 kg",
			"evidenceIds": [
				"fiam-124611551-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 38 x L 223 x H 155 mm",
			"evidenceIds": [
				"fiam-124611551-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Push button",
			"evidenceIds": [
				"fiam-124611551-20260926"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":600,\"typical\":600,\"max\":600},\"workingPressureBar\":{\"min\":6.3,\"typical\":6.3,\"max\":6.3}}",
			"evidenceIds": [
				"fiam-124611551-20260926",
				"fiam-fde49pa-reserved-20261031-1",
				"fiam-fde49pa-reserved-20261031-2"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-124611551-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fde49pa/",
			"sourceLabel": "Fiam, fiche technique FDE49PA, réf. 124611551",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-124611551-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-34.pdf#page=13",
			"sourceLabel": "Fiam, brochure technique en-34, p. 13",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		},
		{
			"id": "fiam-fde49pa-reserved-20261031-1",
			"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fde49pa/",
			"sourceLabel": "Fiam FDE49PA : relecture documentaire du 31 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 e8166b6694f093cc50a41638980cee096aceef5846bff0beb29c3e29c3f77466. Le document propre à cette référence publie une consommation sans préciser son régime de mesure. Le débit en charge maximal reste à confirmer auprès du fabricant."
		},
		{
			"id": "fiam-fde49pa-reserved-20261031-2",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-34.pdf#page=13",
			"sourceLabel": "Fiam FDE49PA : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 4bc7b8a199880ed886511848f97c3d61ae9b8a50dbb5f0f0318dddc819dcbf62. Le document propre à cette référence publie une consommation sans préciser son régime de mesure. Le débit en charge maximal reste à confirmer auprès du fabricant."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-124611551-20260926"
		],
		"workingPressureBar": [
			"fiam-124611551-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-124611551-20260926"
		],
		"airflowBasis": [
			"fiam-fde49pa-reserved-20261031-1",
			"fiam-fde49pa-reserved-20261031-2"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 600,
		"typical": 600,
		"max": 600
	},
	"airflowBasis": "unqualified"
};

export default product;
