import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-paoli-dp-1040-001040-00001",
	"slug": "cle-a-chocs-paoli-dp-1040-001040-00001",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Paoli DP 1040 (réf. 001040.00001)",
	"brand": "Paoli",
	"model": "DP 1040",
	"mpn": "001040.00001",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-paoli-dp-1040-001040-00001.webp",
		"alt": "Repères techniques : Paoli DP 1040 (réf. 001040.00001)",
		"sourceUrl": "https://www.dinopaoli.com/wp-content/uploads/PAOLI_GENERAL-CATALOGUE_2024.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "paoli-dp-1040",
		"label": "Référence 001040.00001",
		"distinguishingAttributes": {
			"reference": "001040.00001",
			"Masse publiée": "1,30 kg",
			"Vitesse à vide": "9500 tr/min"
		}
	},
	"editorial": {
		"overview": "Paoli DP 1040. La DP1040, code 001040.00001, est une clé compacte1/2 pouce de 96 mm et 1,30 kg, travail100–500 Nm et maximum650 Nm. La DP1000 est donnée pour 3,7 kg ; ne pas confondre ces deux modèles. La table imprime aussi3,86 pouces pour la longueur, sans équivalence exacte avec 96 mm. Aucun débit n’est publié dans cette ligne.",
		"verifiedFacts": [
			"Masse publiée : 1,30 kg.",
			"Vitesse à vide : 9500 tr/min.",
			"Diamètre intérieur du tuyau : 8 mm.",
			"Longueur publiée : 96 mm.",
			"Carré de sortie : 1/2 in.",
			"Carré : 1/2 pouce.",
			"Couple de travail : 100–500 Nm.",
			"Couple maximal : 650 Nm.",
			"Longueur : 96 mm, colonne métrique."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "1,30 kg",
			"evidenceIds": [
				"october2-tools-paoli-general-p28"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "9500 tr/min",
			"evidenceIds": [
				"october2-tools-paoli-general-p28"
			]
		},
		{
			"label": "Diamètre intérieur du tuyau",
			"value": "8 mm",
			"evidenceIds": [
				"october2-tools-paoli-general-p28"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "96 mm",
			"evidenceIds": [
				"october2-tools-paoli-general-p28"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "1/2 in",
			"evidenceIds": [
				"october2-tools-paoli-general-p28"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Working pressure    Pressione di utilizzo 90 psi - 6,3 bar",
			"evidenceIds": [
				"october2-tools-paoli-general-p28"
			]
		},
		{
			"label": "Carré",
			"value": "1/2 pouce",
			"evidenceIds": [
				"cle-a-chocs-paoli-dp-1040-001040-00001-reserved-20261103-1"
			]
		},
		{
			"label": "Couple de travail",
			"value": "100–500 Nm",
			"evidenceIds": [
				"cle-a-chocs-paoli-dp-1040-001040-00001-reserved-20261103-1"
			]
		},
		{
			"label": "Couple maximal",
			"value": "650 Nm",
			"evidenceIds": [
				"cle-a-chocs-paoli-dp-1040-001040-00001-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "96 mm, colonne métrique",
			"evidenceIds": [
				"cle-a-chocs-paoli-dp-1040-001040-00001-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-paoli-general-p28",
			"sourceUrl": "https://www.dinopaoli.com/wp-content/uploads/PAOLI_GENERAL-CATALOGUE_2024.pdf#page=28",
			"sourceLabel": "Paoli, documentation technique fabricant, page PDF 28",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 4a60f1e1ab29d27422ad6cd8605948f5e32d197f27b3c300700631554a6d1352. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "cle-a-chocs-paoli-dp-1040-001040-00001-reserved-20261103-1",
			"sourceUrl": "https://www.dinopaoli.com/wp-content/uploads/PAOLI_GENERAL-CATALOGUE_2024.pdf#page=28",
			"sourceLabel": "Paoli : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 4a60f1e1ab29d27422ad6cd8605948f5e32d197f27b3c300700631554a6d1352. La DP1040, code 001040.00001, est une clé compacte1/2 pouce de 96 mm et 1,30 kg, travail100–500 Nm et maximum650 Nm. La DP1000 est donnée pour 3,7 kg ; ne pas confondre ces deux modèles. La table imprime aussi3,86 pouces pour la longueur, sans équivalence exacte avec 96 mm. Aucun débit n’est publié dans cette ligne."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-paoli-general-p28"
		],
		"workingPressureBar": [
			"october2-tools-paoli-general-p28"
		],
		"demandExplanation": [
			"october2-tools-paoli-general-p28"
		],
		"editorial": [
			"cle-a-chocs-paoli-dp-1040-001040-00001-reserved-20261103-1"
		],
		"specifications": [
			"cle-a-chocs-paoli-dp-1040-001040-00001-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
