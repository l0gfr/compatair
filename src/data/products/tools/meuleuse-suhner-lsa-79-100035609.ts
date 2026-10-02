const product = {
	"id": "meuleuse-suhner-lsa-79-100035609",
	"slug": "meuleuse-suhner-lsa-79-100035609",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Suhner LSA 79 (réf. 100035609)",
	"brand": "Suhner",
	"model": "LSA 79",
	"mpn": "100035609",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-suhner-lsa-79-100035609.webp",
		"alt": "Repères techniques : Suhner LSA 79 (réf. 100035609)",
		"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "suhner-lsa-79",
		"label": "Référence 100035609",
		"distinguishingAttributes": {
			"reference": "100035609",
			"Vitesse à vide": "77000 tr/min",
			"Puissance publiée": "110 W"
		}
	},
	"editorial": {
		"overview": "Suhner LSA 79 (réf. 100035609). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 77000 tr/min. Puissance publiée : 110 W.",
		"verifiedFacts": [
			"Vitesse à vide : 77000 tr/min.",
			"Puissance publiée : 110 W."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "77000 tr/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p4"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "110 W",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p4"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression numérique de mesure dans le catalogue 10/2024 EN.",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p4"
			]
		},
		{
			"label": "Consommation à vide, hors calcul",
			"value": "0.310 m3/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-suhner-pneumatic-p4",
			"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf#page=4",
			"sourceLabel": "Pneumatic power tools, catalogue fabricant EN 10/2024, page PDF 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 355401bdbabe6cb5a7bfa85064961b89eabb84f7ebad27a03b193f57bc12f7dd. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-suhner-pneumatic-p4"
		],
		"workingPressureBar": [
			"october2-tools-suhner-pneumatic-p4"
		],
		"demandExplanation": [
			"october2-tools-suhner-pneumatic-p4"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
