import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-sms30dz",
	"slug": "fiam-sms30dz",
	"brand": "Fiam",
	"model": "SMS30DZ",
	"mpn": "144613003",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Fiam SMS30DZ",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-sms30dz.webp",
		"alt": "Repères techniques Fiam SMS30DZ, référence 144613003",
		"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/sms30dz/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam SMS30DZ. Le document propre à cette référence publie une consommation sans préciser son régime de mesure. Le débit en charge maximal reste à confirmer auprès du fabricant. La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML. Référence fabricant : 144613003. Vitesse à vide : 22000 tr/min. Masse publiée : 0.83 kg. Dimensions publiées : Ø 40 x L 245 mm.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 144613003.",
			"Vitesse à vide : 22000 tr/min.",
			"Masse publiée : 0.83 kg.",
			"Dimensions publiées : Ø 40 x L 245 mm.",
			"Consommation de régime non précisé publiée : 540 L/min."
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
				"fiam-144613003-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation de régime non précisé publiée : 540 L/min.",
			"evidenceIds": [
				"fiam-sms30dz-reserved-20261031-1",
				"fiam-sms30dz-reserved-20261031-2"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "22000 tr/min",
			"evidenceIds": [
				"fiam-144613003-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.83 kg",
			"evidenceIds": [
				"fiam-144613003-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 40 x L 245 mm",
			"evidenceIds": [
				"fiam-144613003-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "With lever with safety device",
			"evidenceIds": [
				"fiam-144613003-20260926"
			]
		},
		{
			"label": "Puissance",
			"value": "300 W",
			"evidenceIds": [
				"fiam-144613003-20260926"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":540,\"typical\":540,\"max\":540},\"workingPressureBar\":{\"min\":6.3,\"typical\":6.3,\"max\":6.3}}",
			"evidenceIds": [
				"fiam-144613003-20260926",
				"fiam-sms30dz-reserved-20261031-1",
				"fiam-sms30dz-reserved-20261031-2"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-144613003-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/sms30dz/",
			"sourceLabel": "Fiam, fiche technique SMS30DZ, réf. 144613003",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-144613003-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-44.pdf#page=7",
			"sourceLabel": "Fiam, brochure technique en-44, p. 7",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		},
		{
			"id": "fiam-sms30dz-reserved-20261031-1",
			"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/sms30dz/",
			"sourceLabel": "Fiam SMS30DZ : relecture documentaire du 31 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 e15ffa8f1073201582ba8887a78b57770733baa96e854ce5264aa733baf11a89. Le document propre à cette référence publie une consommation sans préciser son régime de mesure. Le débit en charge maximal reste à confirmer auprès du fabricant."
		},
		{
			"id": "fiam-sms30dz-reserved-20261031-2",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-44.pdf#page=7",
			"sourceLabel": "Fiam SMS30DZ : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 01b152f269aeae367daa8a9524f083a1679707b0a3eff4daa59bcec83635f6de. Le document propre à cette référence publie une consommation sans préciser son régime de mesure. Le débit en charge maximal reste à confirmer auprès du fabricant."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-144613003-20260926"
		],
		"workingPressureBar": [
			"fiam-144613003-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-144613003-20260926"
		],
		"airflowBasis": [
			"fiam-sms30dz-reserved-20261031-1",
			"fiam-sms30dz-reserved-20261031-2"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 540,
		"typical": 540,
		"max": 540
	},
	"airflowBasis": "unqualified"
};

export default product;
