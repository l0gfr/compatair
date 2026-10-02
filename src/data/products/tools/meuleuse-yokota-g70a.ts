const product = {
	"id": "meuleuse-yokota-g70a",
	"slug": "meuleuse-yokota-g70a",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Yokota G70A",
	"brand": "Yokota",
	"model": "G70A",
	"mpn": "G70A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-yokota-g70a.webp",
		"alt": "Repères techniques : Yokota G70A",
		"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "yokota-g70a",
		"label": "Référence G70A",
		"distinguishingAttributes": {
			"reference": "G70A",
			"Vitesse à vide": "7500 tr/min",
			"Longueur": "274 mm"
		}
	},
	"editorial": {
		"overview": "Yokota G70A. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 7500 tr/min. Longueur : 274 mm.",
		"verifiedFacts": [
			"Vitesse à vide : 7500 tr/min.",
			"Longueur : 274 mm.",
			"Masse : 3.4 kg."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "7500 tr/min",
			"evidenceIds": [
				"october2-tools-yokota-jp-p56"
			]
		},
		{
			"label": "Longueur",
			"value": "274 mm",
			"evidenceIds": [
				"october2-tools-yokota-jp-p56"
			]
		},
		{
			"label": "Masse",
			"value": "3.4 kg",
			"evidenceIds": [
				"october2-tools-yokota-jp-p56"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression précisée pour le couple ou le fonctionnement ne constitue pas un point de mesure de consommation documenté.",
			"evidenceIds": [
				"october2-tools-yokota-jp-p56"
			]
		},
		{
			"label": "Consommation en charge, hors calcul",
			"value": "1000 L/min",
			"evidenceIds": [
				"october2-tools-yokota-jp-p56"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-yokota-jp-p56",
			"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf#page=56",
			"sourceLabel": "Yokota Kogyo, catalogue général japonais du fabricant, page PDF 56",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b60e8188ea17df768d52a2b1381382bc9b0e158a03fcd4416d4c4e3ebd0a866c. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-yokota-jp-p56"
		],
		"workingPressureBar": [
			"october2-tools-yokota-jp-p56"
		],
		"demandExplanation": [
			"october2-tools-yokota-jp-p56"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
