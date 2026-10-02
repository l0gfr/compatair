const product = {
	"id": "meuleuse-suhner-lwg-8-100035604",
	"slug": "meuleuse-suhner-lwg-8-100035604",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Suhner LWG 8 (réf. 100035604)",
	"brand": "Suhner",
	"model": "LWG 8",
	"mpn": "100035604",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-suhner-lwg-8-100035604.webp",
		"alt": "Repères techniques : Suhner LWG 8 (réf. 100035604)",
		"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "suhner-lwg-8",
		"label": "Référence 100035604",
		"distinguishingAttributes": {
			"reference": "100035604",
			"Vitesse à vide": "7500 tr/min",
			"Puissance publiée": "900 W"
		}
	},
	"editorial": {
		"overview": "Suhner LWG 8 (réf. 100035604). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 7500 tr/min. Puissance publiée : 900 W.",
		"verifiedFacts": [
			"Vitesse à vide : 7500 tr/min.",
			"Puissance publiée : 900 W."
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
				"october2-tools-suhner-pneumatic-p35"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "900 W",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p35"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression numérique de mesure dans le catalogue 10/2024 EN.",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p35"
			]
		},
		{
			"label": "Consommation à vide, hors calcul",
			"value": "0.600 m3/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p35"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-suhner-pneumatic-p35",
			"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf#page=35",
			"sourceLabel": "Pneumatic power tools, catalogue fabricant EN 10/2024, page PDF 35",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 355401bdbabe6cb5a7bfa85064961b89eabb84f7ebad27a03b193f57bc12f7dd. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-suhner-pneumatic-p35"
		],
		"workingPressureBar": [
			"october2-tools-suhner-pneumatic-p35"
		],
		"demandExplanation": [
			"october2-tools-suhner-pneumatic-p35"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
