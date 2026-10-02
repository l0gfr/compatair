const product = {
	"id": "meuleuse-suhner-lvc-20-100035566",
	"slug": "meuleuse-suhner-lvc-20-100035566",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Suhner LVC 20 (réf. 100035566)",
	"brand": "Suhner",
	"model": "LVC 20",
	"mpn": "100035566",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-suhner-lvc-20-100035566.webp",
		"alt": "Repères techniques : Suhner LVC 20 (réf. 100035566)",
		"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "suhner-lvc-20",
		"label": "Référence 100035566",
		"distinguishingAttributes": {
			"reference": "100035566",
			"Vitesse à vide": "20 000 tr/min",
			"Puissance publiée": "350 W"
		}
	},
	"editorial": {
		"overview": "Suhner LVC 20 (réf. 100035566). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 20 000 tr/min. Puissance publiée : 350 W.",
		"verifiedFacts": [
			"Vitesse à vide : 20 000 tr/min.",
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
			"value": "20 000 tr/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p32"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "350 W",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p32"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression numérique de mesure dans le catalogue 10/2024 EN.",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p32"
			]
		},
		{
			"label": "Consommation à vide, hors calcul",
			"value": "0.28 m3/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p32"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-suhner-pneumatic-p32",
			"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf#page=32",
			"sourceLabel": "Pneumatic power tools, catalogue fabricant EN 10/2024, page PDF 32",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 355401bdbabe6cb5a7bfa85064961b89eabb84f7ebad27a03b193f57bc12f7dd. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-suhner-pneumatic-p32"
		],
		"workingPressureBar": [
			"october2-tools-suhner-pneumatic-p32"
		],
		"demandExplanation": [
			"october2-tools-suhner-pneumatic-p32"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
