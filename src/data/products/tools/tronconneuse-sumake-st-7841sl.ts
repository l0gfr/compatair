import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "tronconneuse-sumake-st-7841sl",
	"slug": "tronconneuse-sumake-st-7841sl",
	"categoryId": "tronconneuse",
	"category": "tronconneuse",
	"label": "Sumake ST-7841SL",
	"brand": "Sumake",
	"model": "ST-7841SL",
	"mpn": "ST-7841SL",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 540,
		"typical": 540,
		"max": 540
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/tronconneuse-sumake-st-7841sl.webp",
		"alt": "Repères techniques : Sumake ST-7841SL",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-7841sl",
		"label": "Référence ST-7841SL",
		"distinguishingAttributes": {
			"reference": "ST-7841SL",
			"Consommation dans les unités du tableau": "540 L/min ; 19 cfm",
			"Configuration complète publiée": "ST-7841SL",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-7841SL. La ST-7841SL possède un corps de 376 mm et pèse 1,7 kg, contre 234 mm et 1,1 kg pour la ST-7841SB. Les deux utilisent le disque 4 pouces à 15 000 tr/min. Le bras long change l’accès et la prise en main, pas le point de consommation publié.",
		"verifiedFacts": [
			"Disque : 4 pouces.",
			"Arbre publié : 5/8 et 3/8 pouce.",
			"Vitesse à vide : 15 000 tr/min.",
			"Longueur : 376 mm.",
			"Masse : 1,7 kg.",
			"Consommation documentaire : 540 L/min, régime non précisé.",
			"Pression de service recommandée : 6,2 bar ; pression de mesure de la consommation non démontrée."
		],
		"limitations": [
			"La recommandation de service 6,2 bar ne prouve pas la pression de mesure de la consommation. Le régime reste non qualifié et le calcul indéterminé."
		]
	},
	"specifications": [
		{
			"label": "Disque",
			"value": "4 pouces",
			"evidenceIds": [
				"tronconneuse-sumake-st-7841sl-reserved-20261103-1"
			]
		},
		{
			"label": "Arbre publié",
			"value": "5/8 et 3/8 pouce",
			"evidenceIds": [
				"tronconneuse-sumake-st-7841sl-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "15 000 tr/min",
			"evidenceIds": [
				"tronconneuse-sumake-st-7841sl-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "376 mm",
			"evidenceIds": [
				"tronconneuse-sumake-st-7841sl-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,7 kg",
			"evidenceIds": [
				"tronconneuse-sumake-st-7841sl-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "540 L/min, régime non précisé",
			"evidenceIds": [
				"tronconneuse-sumake-st-7841sl-reserved-20261103-1"
			]
		},
		{
			"label": "Pression de service recommandée",
			"value": "6,2 bar ; pression de mesure de la consommation non démontrée",
			"evidenceIds": [
				"tronconneuse-sumake-st-7841sl-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p28",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=28",
			"sourceLabel": "sumake-na-2024, page PDF 28",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "tronconneuse-sumake-st-7841sl-reserved-20261103-1",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=28",
			"sourceLabel": "Sumake : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. La ST-7841SL possède un corps de 376 mm et pèse 1,7 kg, contre 234 mm et 1,1 kg pour la ST-7841SB. Les deux utilisent le disque 4 pouces à 15 000 tr/min. Le bras long change l’accès et la prise en main, pas le point de consommation publié."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p28"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p28"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p28"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p28"
		],
		"editorial": [
			"tronconneuse-sumake-st-7841sl-reserved-20261103-1"
		],
		"specifications": [
			"tronconneuse-sumake-st-7841sl-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 540 L/min à 6,2 bar."
	]
};

export default product;
