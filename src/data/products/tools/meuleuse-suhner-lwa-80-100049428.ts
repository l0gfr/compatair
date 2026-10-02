const product = {
	"id": "meuleuse-suhner-lwa-80-100049428",
	"slug": "meuleuse-suhner-lwa-80-100049428",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Suhner LWA 80 (réf. 100049428)",
	"brand": "Suhner",
	"model": "LWA 80",
	"mpn": "100049428",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-suhner-lwa-80-100049428.webp",
		"alt": "Repères techniques : Suhner LWA 80 (réf. 100049428)",
		"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "suhner-lwa-80",
		"label": "Référence 100049428",
		"distinguishingAttributes": {
			"reference": "100049428",
			"Vitesse à vide": "80 000 tr/min",
			"Puissance publiée": "75 W"
		}
	},
	"editorial": {
		"overview": "Suhner LWA 80 (réf. 100049428). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 80 000 tr/min. Puissance publiée : 75 W.",
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
				"october2-tools-suhner-pneumatic-p22"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "75 W",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p22"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression numérique de mesure dans le catalogue 10/2024 EN.",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p22"
			]
		},
		{
			"label": "Consommation à vide, hors calcul",
			"value": "0.240 m3/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p22"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-suhner-pneumatic-p22",
			"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf#page=22",
			"sourceLabel": "Pneumatic power tools, catalogue fabricant EN 10/2024, page PDF 22",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 355401bdbabe6cb5a7bfa85064961b89eabb84f7ebad27a03b193f57bc12f7dd. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-suhner-pneumatic-p22"
		],
		"workingPressureBar": [
			"october2-tools-suhner-pneumatic-p22"
		],
		"demandExplanation": [
			"october2-tools-suhner-pneumatic-p22"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
