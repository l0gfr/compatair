const product = {
	"id": "meuleuse-suhner-lsa-81-100046114",
	"slug": "meuleuse-suhner-lsa-81-100046114",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Suhner LSA 81 (réf. 100046114)",
	"brand": "Suhner",
	"model": "LSA 81",
	"mpn": "100046114",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-suhner-lsa-81-100046114.webp",
		"alt": "Repères techniques : Suhner LSA 81 (réf. 100046114)",
		"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "suhner-lsa-81",
		"label": "Référence 100046114",
		"distinguishingAttributes": {
			"reference": "100046114",
			"Vitesse à vide": "80 000 tr/min",
			"Puissance publiée": "75 W"
		}
	},
	"editorial": {
		"overview": "Suhner LSA 81 (réf. 100046114). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 80 000 tr/min. Puissance publiée : 75 W.",
		"verifiedFacts": [
			"Vitesse à vide : 80 000 tr/min.",
			"Puissance publiée : 75 W."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "80 000 tr/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p5"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "75 W",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p5"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression numérique de mesure dans le catalogue 10/2024 EN.",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p5"
			]
		},
		{
			"label": "Consommation à vide, hors calcul",
			"value": "0.200 m3/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p5"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-suhner-pneumatic-p5",
			"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf#page=5",
			"sourceLabel": "Pneumatic power tools, catalogue fabricant EN 10/2024, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 355401bdbabe6cb5a7bfa85064961b89eabb84f7ebad27a03b193f57bc12f7dd. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-suhner-pneumatic-p5"
		],
		"workingPressureBar": [
			"october2-tools-suhner-pneumatic-p5"
		],
		"demandExplanation": [
			"october2-tools-suhner-pneumatic-p5"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
