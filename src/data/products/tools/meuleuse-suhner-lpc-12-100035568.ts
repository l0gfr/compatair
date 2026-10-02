const product = {
	"id": "meuleuse-suhner-lpc-12-100035568",
	"slug": "meuleuse-suhner-lpc-12-100035568",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Suhner LPC 12 (réf. 100035568)",
	"brand": "Suhner",
	"model": "LPC 12",
	"mpn": "100035568",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-suhner-lpc-12-100035568.webp",
		"alt": "Repères techniques : Suhner LPC 12 (réf. 100035568)",
		"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "suhner-lpc-12",
		"label": "Référence 100035568",
		"distinguishingAttributes": {
			"reference": "100035568",
			"Vitesse à vide": "11000 tr/min",
			"Puissance publiée": "350 W"
		}
	},
	"editorial": {
		"overview": "Suhner LPC 12 (réf. 100035568). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 11000 tr/min. Puissance publiée : 350 W.",
		"verifiedFacts": [
			"Vitesse à vide : 11000 tr/min.",
			"Puissance publiée : 350 W."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "11000 tr/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p34"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "350 W",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p34"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression numérique de mesure dans le catalogue 10/2024 EN.",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p34"
			]
		},
		{
			"label": "Consommation à vide, hors calcul",
			"value": "0.80 m3/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p34"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-suhner-pneumatic-p34",
			"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf#page=34",
			"sourceLabel": "Pneumatic power tools, catalogue fabricant EN 10/2024, page PDF 34",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 355401bdbabe6cb5a7bfa85064961b89eabb84f7ebad27a03b193f57bc12f7dd. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-suhner-pneumatic-p34"
		],
		"workingPressureBar": [
			"october2-tools-suhner-pneumatic-p34"
		],
		"demandExplanation": [
			"october2-tools-suhner-pneumatic-p34"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
