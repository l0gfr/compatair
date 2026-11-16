import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "boulonneuse-sumake-hawf5400",
	"slug": "boulonneuse-sumake-hawf5400",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "Sumake HAWF5400",
	"brand": "Sumake",
	"model": "HAWF5400",
	"mpn": "HAWF5400",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne.",
	"confidence": "B",
	"image": {
		"src": "/images/products/boulonneuse-sumake-hawf5400-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Sumake HAWF5400",
		"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STSC22-All.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "sumake-hawf5400",
		"label": "Référence HAWF5400",
		"distinguishingAttributes": {
			"reference": "HAWF5400",
			"Masse publiée": "2.3 kg",
			"Vitesse à vide": "250 tr/min"
		}
	},
	"editorial": {
		"overview": "Sumake HAWF5400 : clé d’angle à arrêt automatique, carré 1/2 pouce et plage 10–40 Nm à 250 tr/min. Son corps mesure 400 mm pour 2,3 kg ; la HAWFE5400 s’allonge à 501 mm pour 2,4 kg. La HAWF5600 conserve le corps 400 mm avec une plage 35–60 Nm et 180 tr/min.",
		"verifiedFacts": [
			"Carré : 1/2 pouce.",
			"Couple publié : 10–40 Nm.",
			"Vitesse à vide : 250 tr/min.",
			"Longueur : 400 mm.",
			"Masse : 2,3 kg.",
			"Consommation documentaire : 23 cfm ; 0,67 m³/min, régime non précisé.",
			"Pression du tableau : 6 kg/cm² ; appariement de mesure de la consommation non établi."
		],
		"limitations": [
			"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Carré",
			"value": "1/2 pouce",
			"evidenceIds": [
				"review:2026-11-16-reviews:boulonneuse-sumake-hawf5400:0"
			]
		},
		{
			"label": "Couple publié",
			"value": "10–40 Nm",
			"evidenceIds": [
				"review:2026-11-16-reviews:boulonneuse-sumake-hawf5400:0"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "250 tr/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:boulonneuse-sumake-hawf5400:0"
			]
		},
		{
			"label": "Longueur",
			"value": "400 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:boulonneuse-sumake-hawf5400:0"
			]
		},
		{
			"label": "Masse",
			"value": "2,3 kg",
			"evidenceIds": [
				"review:2026-11-16-reviews:boulonneuse-sumake-hawf5400:0"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "23 cfm ; 0,67 m³/min, régime non précisé",
			"evidenceIds": [
				"review:2026-11-16-reviews:boulonneuse-sumake-hawf5400:0"
			]
		},
		{
			"label": "Pression du tableau",
			"value": "6 kg/cm² ; appariement de mesure de la consommation non établi",
			"evidenceIds": [
				"review:2026-11-16-reviews:boulonneuse-sumake-hawf5400:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-sumake-stsc22-p16",
			"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STSC22-All.pdf#page=16",
			"sourceLabel": "Sumake, catalogue assemblage STSC22, page PDF 16",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 3990da2e2da3b47636c11cbf6860d37cba62d302c1931caa98017f0c8cd3684a. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:boulonneuse-sumake-hawf5400:0",
			"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STSC22-All.pdf",
			"sourceLabel": "Sumake, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Sumake HAWF5400 : clé d’angle à arrêt automatique, carré 1/2 pouce et plage 10–40 Nm à 250 tr/min. Son corps mesure 400 mm pour 2,3 kg ; la HAWFE5400 s’allonge à 501 mm pour 2,4 kg. La HAWF5600 conserve le corps 400 mm avec une plage 35–60 Nm et 180 tr/min. GET complet SHA-256 3990da2e2da3b47636c11cbf6860d37cba62d302c1931caa98017f0c8cd3684a. Pages PDF lues : 16."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reviews:boulonneuse-sumake-hawf5400:0"
		],
		"demandExplanation": [
			"review:2026-11-16-reviews:boulonneuse-sumake-hawf5400:0"
		],
		"workingPressureBar": [
			"review:2026-11-16-reviews:boulonneuse-sumake-hawf5400:0"
		]
	},
	"notes": [
		"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
	]
};

export default product;
