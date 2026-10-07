import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-meite-pw2638-l",
	"slug": "agrafeuse-cloueuse-meite-pw2638-l",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Meite PW2638-L",
	"brand": "Meite",
	"model": "PW2638-L",
	"mpn": "PW2638-L",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 5.516,
		"max": 8.274
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-meite-pw2638-l.webp",
		"alt": "Repères techniques : Meite PW2638-L",
		"sourceUrl": "https://www.meitetools.com/_files/ugd/db8665_9c0a9d5b848f4c52b660bc3ad7fddada.pdf?index=true",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "meite-pw2638-l",
		"label": "Référence PW2638-L",
		"distinguishingAttributes": {
			"reference": "PW2638-L",
			"Masse publiée": "2.5 kg",
			"Hauteur publiée": "272 mm"
		}
	},
	"editorial": {
		"overview": "Meite PW2638-L. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée : 2.5 kg. Hauteur publiée : 272 mm.",
		"verifiedFacts": [
			"Masse publiée : 2.5 kg.",
			"Hauteur publiée : 272 mm.",
			"Longueur publiée : 372 mm.",
			"Largeur publiée : 83 mm."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "2.5 kg",
			"evidenceIds": [
				"october2-tools-meite-p27"
			]
		},
		{
			"label": "Hauteur publiée",
			"value": "272 mm",
			"evidenceIds": [
				"october2-tools-meite-p27"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "372 mm",
			"evidenceIds": [
				"october2-tools-meite-p27"
			]
		},
		{
			"label": "Largeur publiée",
			"value": "83 mm",
			"evidenceIds": [
				"october2-tools-meite-p27"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure: 80-120 psi",
			"evidenceIds": [
				"october2-tools-meite-p27"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-meite-p27",
			"sourceUrl": "https://www.meitetools.com/_files/ugd/db8665_9c0a9d5b848f4c52b660bc3ad7fddada.pdf?index=true#page=27",
			"sourceLabel": "Meite, catalogue industriel de cloueurs et agrafeuses, édition du document conservée, page PDF 27",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : f7f01ffd0c2ff84645d694199df4ac6740b32aa8e1abe7483e9b9c73dbda76a7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-meite-p27"
		],
		"workingPressureBar": [
			"october2-tools-meite-p27"
		],
		"demandExplanation": [
			"october2-tools-meite-p27"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
