const product = {
	"id": "visseuse-sumake-sm10",
	"slug": "visseuse-sumake-sm10",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Sumake SM10",
	"brand": "Sumake",
	"model": "SM10",
	"mpn": "SM10",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-sumake-sm10.webp",
		"alt": "Repères techniques : Sumake SM10",
		"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STSC22-All.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-sm10",
		"label": "Référence SM10",
		"distinguishingAttributes": {
			"reference": "SM10",
			"Vitesse à vide": "1000 tr/min",
			"Longueur hors tout": "196 mm"
		}
	},
	"editorial": {
		"overview": "Sumake SM10. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 1000 tr/min. Longueur hors tout : 196 mm.",
		"verifiedFacts": [
			"Vitesse à vide : 1000 tr/min.",
			"Longueur hors tout : 196 mm.",
			"Diamètre du corps : 30 mm.",
			"Plage de couple déclarée : 0.05 ~ 0.2 Nm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "1000 tr/min",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p13"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "196 mm",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p13"
			]
		},
		{
			"label": "Diamètre du corps",
			"value": "30 mm",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p13"
			]
		},
		{
			"label": "Plage de couple déclarée",
			"value": "0.05 ~ 0.2 Nm",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p13"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans ce tableau ; aucune assimilation de kg/cm² à bar.",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p13"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "7.1 cfm",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p13"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-sumake-stsc22-p13",
			"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STSC22-All.pdf#page=13",
			"sourceLabel": "Sumake, catalogue assemblage STSC22, page PDF 13",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 3990da2e2da3b47636c11cbf6860d37cba62d302c1931caa98017f0c8cd3684a. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-sumake-stsc22-p13"
		],
		"workingPressureBar": [
			"october2-tools-sumake-stsc22-p13"
		],
		"demandExplanation": [
			"october2-tools-sumake-stsc22-p13"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
