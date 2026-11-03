import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-sumake-st-5149",
	"slug": "cle-a-chocs-sumake-st-5149",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Sumake ST-5149",
	"brand": "Sumake",
	"model": "ST-5149",
	"mpn": "ST-5149",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 430,
		"typical": 430,
		"max": 430
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-sumake-st-5149.webp",
		"alt": "Repères techniques : Sumake ST-5149",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-5149",
		"label": "Référence ST-5149",
		"distinguishingAttributes": {
			"reference": "ST-5149",
			"Consommation dans les unités du tableau": "430 L/min ; 15 cfm",
			"Configuration complète publiée": "ST-5149",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-5149. La ST-5149 utilise un carré 1/2 pouce et annonce 678 Nm maximum. La ST-5139 utilise un carré 3/8 pouce et annonce 610 Nm, pour la même longueur 99 mm et masse 1,35 kg. Le couple maximal ne décrit pas un couple de serrage garanti en atelier.",
		"verifiedFacts": [
			"Carré : 1/2 pouce.",
			"Couple maximal déclaré : 678 Nm.",
			"Vitesse à vide : 11 000 tr/min.",
			"Longueur : 99 mm.",
			"Masse : 1,35 kg.",
			"Consommation documentaire : 430 L/min, régime non précisé.",
			"Pression de service recommandée : 6,2 bar ; pression de mesure de la consommation non démontrée."
		],
		"limitations": [
			"La recommandation de service 6,2 bar ne prouve pas la pression de mesure de la consommation. Le régime reste non qualifié et le calcul indéterminé."
		]
	},
	"specifications": [
		{
			"label": "Carré",
			"value": "1/2 pouce",
			"evidenceIds": [
				"cle-a-chocs-sumake-st-5149-reserved-20261103-1"
			]
		},
		{
			"label": "Couple maximal déclaré",
			"value": "678 Nm",
			"evidenceIds": [
				"cle-a-chocs-sumake-st-5149-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "11 000 tr/min",
			"evidenceIds": [
				"cle-a-chocs-sumake-st-5149-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "99 mm",
			"evidenceIds": [
				"cle-a-chocs-sumake-st-5149-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,35 kg",
			"evidenceIds": [
				"cle-a-chocs-sumake-st-5149-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "430 L/min, régime non précisé",
			"evidenceIds": [
				"cle-a-chocs-sumake-st-5149-reserved-20261103-1"
			]
		},
		{
			"label": "Pression de service recommandée",
			"value": "6,2 bar ; pression de mesure de la consommation non démontrée",
			"evidenceIds": [
				"cle-a-chocs-sumake-st-5149-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p5",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=5",
			"sourceLabel": "sumake-na-2024, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "cle-a-chocs-sumake-st-5149-reserved-20261103-1",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=5",
			"sourceLabel": "Sumake : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. La ST-5149 utilise un carré 1/2 pouce et annonce 678 Nm maximum. La ST-5139 utilise un carré 3/8 pouce et annonce 610 Nm, pour la même longueur 99 mm et masse 1,35 kg. Le couple maximal ne décrit pas un couple de serrage garanti en atelier."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p5"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p5"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p5"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p5"
		],
		"editorial": [
			"cle-a-chocs-sumake-st-5149-reserved-20261103-1"
		],
		"specifications": [
			"cle-a-chocs-sumake-st-5149-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 430 L/min à 6,2 bar."
	]
};

export default product;
