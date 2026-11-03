import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "lime-bande-suhner-lbc-16-100035597",
	"slug": "lime-bande-suhner-lbc-16-100035597",
	"categoryId": "lime-bande",
	"category": "lime-bande",
	"label": "Suhner LBC 16 (réf. 100035597)",
	"brand": "Suhner",
	"model": "LBC 16",
	"mpn": "100035597",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/lime-bande-suhner-lbc-16-100035597.webp",
		"alt": "Repères techniques : Suhner LBC 16 (réf. 100035597)",
		"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "suhner-lbc-16",
		"label": "Référence 100035597",
		"distinguishingAttributes": {
			"reference": "100035597",
			"Vitesse à vide": "16 000 tr/min",
			"Puissance publiée": "350 W"
		}
	},
	"editorial": {
		"overview": "Suhner LBC 16. La LBC16, article 100035597, utilise le bras KA25/9 et des bandes6 ou12 mm sur520 mm. La LBC10 conserve ce format mais tourne à16 m/s contre 25 m/s. Le catalogue nomme explicitement0,460 m³/min à vide ; cette valeur ne devient pas la consommation de ponçage en charge.",
		"verifiedFacts": [
			"Vitesse à vide : 16 000 tr/min.",
			"Puissance publiée : 350 W.",
			"Bandes du montage livré : 6 × 520 ou12 × 520 mm, bras KA25/9.",
			"Vitesse de bande : 25 m/s.",
			"Consommation à vide : 0,460 m³/min."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "16 000 tr/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p39"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "350 W",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p39"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression numérique de mesure dans le catalogue 10/2024 EN.",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p39"
			]
		},
		{
			"label": "Consommation à vide, hors calcul",
			"value": "0.460 m3/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p39"
			]
		},
		{
			"label": "Bandes du montage livré",
			"value": "6 × 520 ou12 × 520 mm, bras KA25/9",
			"evidenceIds": [
				"lime-bande-suhner-lbc-16-100035597-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse de bande",
			"value": "25 m/s",
			"evidenceIds": [
				"lime-bande-suhner-lbc-16-100035597-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation à vide",
			"value": "0,460 m³/min",
			"evidenceIds": [
				"lime-bande-suhner-lbc-16-100035597-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-suhner-pneumatic-p39",
			"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf#page=39",
			"sourceLabel": "Pneumatic power tools, catalogue fabricant EN 10/2024, page PDF 39",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 355401bdbabe6cb5a7bfa85064961b89eabb84f7ebad27a03b193f57bc12f7dd. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "lime-bande-suhner-lbc-16-100035597-reserved-20261103-1",
			"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf#page=39",
			"sourceLabel": "Suhner : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 355401bdbabe6cb5a7bfa85064961b89eabb84f7ebad27a03b193f57bc12f7dd. La LBC16, article 100035597, utilise le bras KA25/9 et des bandes6 ou12 mm sur520 mm. La LBC10 conserve ce format mais tourne à16 m/s contre 25 m/s. Le catalogue nomme explicitement0,460 m³/min à vide ; cette valeur ne devient pas la consommation de ponçage en charge."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-suhner-pneumatic-p39"
		],
		"workingPressureBar": [
			"october2-tools-suhner-pneumatic-p39"
		],
		"demandExplanation": [
			"october2-tools-suhner-pneumatic-p39"
		],
		"editorial": [
			"lime-bande-suhner-lbc-16-100035597-reserved-20261103-1"
		],
		"specifications": [
			"lime-bande-suhner-lbc-16-100035597-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
