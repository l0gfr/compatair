const product = {
	"id": "meuleuse-yokota-mg-0c",
	"slug": "meuleuse-yokota-mg-0c",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Yokota MG-0C",
	"brand": "Yokota",
	"model": "MG-0C",
	"mpn": "MG-0C",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-yokota-mg-0c.webp",
		"alt": "Repères techniques : Yokota MG-0C",
		"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "yokota-mg-0c",
		"label": "Référence MG-0C",
		"distinguishingAttributes": {
			"reference": "MG-0C",
			"Vitesse à vide": "33000 tr/min",
			"Longueur": "197 mm"
		}
	},
	"editorial": {
		"overview": "Yokota MG-0C. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 33000 tr/min. Longueur : 197 mm.",
		"verifiedFacts": [
			"Vitesse à vide : 33000 tr/min.",
			"Longueur : 197 mm.",
			"Masse : 0.43 kg."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "33000 tr/min",
			"evidenceIds": [
				"october2-tools-yokota-jp-p52"
			]
		},
		{
			"label": "Longueur",
			"value": "197 mm",
			"evidenceIds": [
				"october2-tools-yokota-jp-p52"
			]
		},
		{
			"label": "Masse",
			"value": "0.43 kg",
			"evidenceIds": [
				"october2-tools-yokota-jp-p52"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression précisée pour le couple ou le fonctionnement ne constitue pas un point de mesure de consommation documenté.",
			"evidenceIds": [
				"october2-tools-yokota-jp-p52"
			]
		},
		{
			"label": "Consommation en charge, hors calcul",
			"value": "180 L/min",
			"evidenceIds": [
				"october2-tools-yokota-jp-p52"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-yokota-jp-p52",
			"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf#page=52",
			"sourceLabel": "Yokota Kogyo, catalogue général japonais du fabricant, page PDF 52",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b60e8188ea17df768d52a2b1381382bc9b0e158a03fcd4416d4c4e3ebd0a866c. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-yokota-jp-p52"
		],
		"workingPressureBar": [
			"october2-tools-yokota-jp-p52"
		],
		"demandExplanation": [
			"october2-tools-yokota-jp-p52"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
