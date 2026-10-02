const product = {
	"id": "meuleuse-suhner-lwb-4-100035552",
	"slug": "meuleuse-suhner-lwb-4-100035552",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Suhner LWB 4 (réf. 100035552)",
	"brand": "Suhner",
	"model": "LWB 4",
	"mpn": "100035552",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-suhner-lwb-4-100035552.webp",
		"alt": "Repères techniques : Suhner LWB 4 (réf. 100035552)",
		"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "suhner-lwb-4",
		"label": "Référence 100035552",
		"distinguishingAttributes": {
			"reference": "100035552",
			"Vitesse à vide": "4 500 tr/min",
			"Puissance publiée": "250 W"
		}
	},
	"editorial": {
		"overview": "Suhner LWB 4 (réf. 100035552). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 4 500 tr/min. Puissance publiée : 250 W.",
		"verifiedFacts": [
			"Vitesse à vide : 4 500 tr/min.",
			"Puissance publiée : 250 W."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "4 500 tr/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p26"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "250 W",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p26"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression numérique de mesure dans le catalogue 10/2024 EN.",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p26"
			]
		},
		{
			"label": "Consommation à vide, hors calcul",
			"value": "0.20 m3/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p26"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-suhner-pneumatic-p26",
			"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf#page=26",
			"sourceLabel": "Pneumatic power tools, catalogue fabricant EN 10/2024, page PDF 26",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 355401bdbabe6cb5a7bfa85064961b89eabb84f7ebad27a03b193f57bc12f7dd. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-suhner-pneumatic-p26"
		],
		"workingPressureBar": [
			"october2-tools-suhner-pneumatic-p26"
		],
		"demandExplanation": [
			"october2-tools-suhner-pneumatic-p26"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
