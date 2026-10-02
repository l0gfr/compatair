const product = {
	"id": "meuleuse-sumake-st-7680l",
	"slug": "meuleuse-sumake-st-7680l",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Sumake ST-7680L",
	"brand": "Sumake",
	"model": "ST-7680L",
	"mpn": "ST-7680L",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-sumake-st-7680l.webp",
		"alt": "Repères techniques : Sumake ST-7680L",
		"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STG23.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-7680l",
		"label": "Référence ST-7680L",
		"distinguishingAttributes": {
			"reference": "ST-7680L",
			"Vitesse à vide": "6,300 tr/min",
			"Longueur hors tout": "521 mm"
		}
	},
	"editorial": {
		"overview": "Sumake ST-7680L. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Vitesse à vide : 6,300 tr/min. Longueur hors tout : 521 mm.",
		"verifiedFacts": [
			"Vitesse à vide : 6,300 tr/min.",
			"Longueur hors tout : 521 mm."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "6,300 tr/min",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p45"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "521 mm",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p45"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Recommend Air Pressure: 6.2bar (90psi)",
			"evidenceIds": [
				"october2-tools-sumake-stg23-p45"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-sumake-stg23-p45",
			"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STG23.pdf#page=45",
			"sourceLabel": "Sumake, catalogue STG23, page PDF 45",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : ff0083d1dd4d181861f42aec1de4be29edfd61d09bbf71196f6386a205b677aa. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-sumake-stg23-p45"
		],
		"workingPressureBar": [
			"october2-tools-sumake-stg23-p45"
		],
		"demandExplanation": [
			"october2-tools-sumake-stg23-p45"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
