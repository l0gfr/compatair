import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "taraudeuse-sumake-st-tt110",
	"slug": "taraudeuse-sumake-st-tt110",
	"categoryId": "taraudeuse",
	"category": "taraudeuse",
	"label": "Sumake ST-TT110",
	"brand": "Sumake",
	"model": "ST-TT110",
	"mpn": "ST-TT110",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 396,
		"typical": 396,
		"max": 396
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/taraudeuse-sumake-st-tt110.webp",
		"alt": "Repères techniques : Sumake ST-TT110",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-tt110",
		"label": "Référence ST-TT110",
		"distinguishingAttributes": {
			"reference": "ST-TT110",
			"Consommation dans les unités du tableau": "396 L/min ; 14 cfm",
			"Configuration complète publiée": "ST-TT110",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-TT110. La ST-TT110 est la M3–M8 à 150 tr/min, montage B12. La ST-TT100 couvre aussi M3–M8 mais tourne à 400 tr/min et mesure 340 mm ; la ST-TT111 couvre M3–M12 à 150 tr/min. La plage de taraudage ne se déduit pas de la seule vitesse.",
		"verifiedFacts": [
			"Capacité : M3–M8.",
			"Vitesse à vide : 150 tr/min.",
			"Montage : B12.",
			"Longueur : 300 mm.",
			"Masse : 2,38 kg.",
			"Consommation documentaire : 396 L/min, régime non précisé.",
			"Pression de service recommandée : 6,2 bar ; pression de mesure de la consommation non démontrée."
		],
		"limitations": [
			"La recommandation de service 6,2 bar ne prouve pas la pression de mesure de la consommation. Le régime reste non qualifié et le calcul indéterminé."
		]
	},
	"specifications": [
		{
			"label": "Capacité",
			"value": "M3–M8",
			"evidenceIds": [
				"taraudeuse-sumake-st-tt110-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "150 tr/min",
			"evidenceIds": [
				"taraudeuse-sumake-st-tt110-reserved-20261103-1"
			]
		},
		{
			"label": "Montage",
			"value": "B12",
			"evidenceIds": [
				"taraudeuse-sumake-st-tt110-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "300 mm",
			"evidenceIds": [
				"taraudeuse-sumake-st-tt110-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "2,38 kg",
			"evidenceIds": [
				"taraudeuse-sumake-st-tt110-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "396 L/min, régime non précisé",
			"evidenceIds": [
				"taraudeuse-sumake-st-tt110-reserved-20261103-1"
			]
		},
		{
			"label": "Pression de service recommandée",
			"value": "6,2 bar ; pression de mesure de la consommation non démontrée",
			"evidenceIds": [
				"taraudeuse-sumake-st-tt110-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p27",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=27",
			"sourceLabel": "sumake-na-2024, page PDF 27",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "taraudeuse-sumake-st-tt110-reserved-20261103-1",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=27",
			"sourceLabel": "Sumake : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. La ST-TT110 est la M3–M8 à 150 tr/min, montage B12. La ST-TT100 couvre aussi M3–M8 mais tourne à 400 tr/min et mesure 340 mm ; la ST-TT111 couvre M3–M12 à 150 tr/min. La plage de taraudage ne se déduit pas de la seule vitesse."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p27"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p27"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p27"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p27"
		],
		"editorial": [
			"taraudeuse-sumake-st-tt110-reserved-20261103-1"
		],
		"specifications": [
			"taraudeuse-sumake-st-tt110-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 396 L/min à 6,2 bar."
	]
};

export default product;
