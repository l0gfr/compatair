import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-fde60pa",
	"slug": "fiam-fde60pa",
	"brand": "Fiam",
	"model": "FDE60PA",
	"mpn": "124611550",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Fiam FDE60PA",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-fde60pa-20261106.svg",
		"alt": "Repères techniques Fiam FDE60PA, référence 124611550",
		"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fde60pa/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam FDE60PA, référence 124611550. Le tableau fabricant publie 600 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide : 6000 tr/min. Masse publiée : 1.08 kg.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 124611550.",
			"Vitesse à vide : 6000 tr/min.",
			"Masse publiée : 1.08 kg.",
			"Dimensions publiées : Ø 38 x L 223 x H 155 mm."
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
				"fiam-124611550-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-124611550-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "6000 tr/min",
			"evidenceIds": [
				"fiam-124611550-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.08 kg",
			"evidenceIds": [
				"fiam-124611550-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 38 x L 223 x H 155 mm",
			"evidenceIds": [
				"fiam-124611550-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Push button",
			"evidenceIds": [
				"fiam-124611550-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-124611550-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fde60pa/",
			"sourceLabel": "Fiam, fiche technique FDE60PA, réf. 124611550",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-124611550-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-34.pdf#page=13",
			"sourceLabel": "Fiam, brochure technique en-34, p. 13",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		},
		{
			"id": "review:2026-11-06-followup:fiam-fde60pa:1",
			"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fde60pa/",
			"sourceLabel": "Fiam, revue documentaire du 6 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Fiche124611550 etbrochure13 :FDE60PA,mandrinautoserrant1–10,6000rpm,1,080kg/10Ls. FDE26P estsansmandrin2600rpm. Le régime10Ls n’est pas attesté encharge; préserver600Lmin documentaire sans conclusion débit. SHA-256 du document complet : c79cd6f8e5352f1619e4b185171d0cfd862d66379df0c734c3df97ecaada199a."
		},
		{
			"id": "review:2026-11-06-followup:fiam-fde60pa:2",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-34.pdf#page=13",
			"sourceLabel": "Fiam, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Fiche124611550 etbrochure13 :FDE60PA,mandrinautoserrant1–10,6000rpm,1,080kg/10Ls. FDE26P estsansmandrin2600rpm. Le régime10Ls n’est pas attesté encharge; préserver600Lmin documentaire sans conclusion débit. SHA-256 du document complet : 4bc7b8a199880ed886511848f97c3d61ae9b8a50dbb5f0f0318dddc819dcbf62."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-124611550-20260926"
		],
		"workingPressureBar": [
			"fiam-124611550-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-124611550-20260926"
		],
		"airflowBasis": [
			"review:2026-11-06-followup:fiam-fde60pa:1",
			"review:2026-11-06-followup:fiam-fde60pa:2"
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
