import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-sumake-st-55503",
	"slug": "cle-a-cliquet-sumake-st-55503",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Sumake ST-55503",
	"brand": "Sumake",
	"model": "ST-55503",
	"mpn": "ST-55503",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 283,
		"typical": 283,
		"max": 283
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-sumake-st-55503.webp",
		"alt": "Repères techniques : Sumake ST-55503",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-55503",
		"label": "Référence ST-55503",
		"distinguishingAttributes": {
			"reference": "ST-55503",
			"Consommation dans les unités du tableau": "283 L/min ; 10 cfm",
			"Configuration complète publiée": "ST-55503",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-55503. La ST-55503 a un carré 3/8 pouce ; la ST-55502 est en 1/4 pouce. Elles annoncent 20 Nm, 260 tr/min et 133 mm. La ST-RW931 atteint 27 Nm pour 0,49 kg contre 20 Nm et 0,45 kg ici : changer de carré seul ne prouve pas plus de couple.",
		"verifiedFacts": [
			"Carré : 3/8 pouce.",
			"Couple déclaré : 20 Nm.",
			"Vitesse à vide : 260 tr/min.",
			"Longueur : 133 mm.",
			"Masse : 0,45 kg.",
			"Consommation documentaire : 283 L/min, régime non précisé.",
			"Pression de service recommandée : 6,2 bar ; pression de mesure de la consommation non démontrée."
		],
		"limitations": [
			"La recommandation de service 6,2 bar ne prouve pas la pression de mesure de la consommation. Le régime reste non qualifié et le calcul indéterminé."
		]
	},
	"specifications": [
		{
			"label": "Carré",
			"value": "3/8 pouce",
			"evidenceIds": [
				"cle-a-cliquet-sumake-st-55503-reserved-20261103-1"
			]
		},
		{
			"label": "Couple déclaré",
			"value": "20 Nm",
			"evidenceIds": [
				"cle-a-cliquet-sumake-st-55503-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "260 tr/min",
			"evidenceIds": [
				"cle-a-cliquet-sumake-st-55503-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "133 mm",
			"evidenceIds": [
				"cle-a-cliquet-sumake-st-55503-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,45 kg",
			"evidenceIds": [
				"cle-a-cliquet-sumake-st-55503-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "283 L/min, régime non précisé",
			"evidenceIds": [
				"cle-a-cliquet-sumake-st-55503-reserved-20261103-1"
			]
		},
		{
			"label": "Pression de service recommandée",
			"value": "6,2 bar ; pression de mesure de la consommation non démontrée",
			"evidenceIds": [
				"cle-a-cliquet-sumake-st-55503-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p11",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=11",
			"sourceLabel": "sumake-na-2024, page PDF 11",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "cle-a-cliquet-sumake-st-55503-reserved-20261103-1",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=11",
			"sourceLabel": "Sumake : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. La ST-55503 a un carré 3/8 pouce ; la ST-55502 est en 1/4 pouce. Elles annoncent 20 Nm, 260 tr/min et 133 mm. La ST-RW931 atteint 27 Nm pour 0,49 kg contre 20 Nm et 0,45 kg ici : changer de carré seul ne prouve pas plus de couple."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p11"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p11"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p11"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p11"
		],
		"editorial": [
			"cle-a-cliquet-sumake-st-55503-reserved-20261103-1"
		],
		"specifications": [
			"cle-a-cliquet-sumake-st-55503-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 283 L/min à 6,2 bar."
	]
};

export default product;
