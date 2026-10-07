import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-meite-cn90",
	"slug": "agrafeuse-cloueuse-meite-cn90",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Meite CN90",
	"brand": "Meite",
	"model": "CN90",
	"mpn": "CN90",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.895,
		"max": 8.274
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-meite-cn90.webp",
		"alt": "Repères techniques : Meite CN90",
		"sourceUrl": "https://www.meitetools.com/_files/ugd/db8665_9c0a9d5b848f4c52b660bc3ad7fddada.pdf?index=true",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "meite-cn90",
		"label": "Référence CN90",
		"distinguishingAttributes": {
			"reference": "CN90",
			"Hauteur publiée": "365 mm",
			"Longueur publiée": "385 mm"
		}
	},
	"editorial": {
		"overview": "Meite CN90. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Hauteur publiée : 365 mm. Longueur publiée : 385 mm.",
		"verifiedFacts": [
			"Hauteur publiée : 365 mm.",
			"Longueur publiée : 385 mm.",
			"Largeur publiée : 137 mm."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Hauteur publiée",
			"value": "365 mm",
			"evidenceIds": [
				"october2-tools-meite-p8"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "385 mm",
			"evidenceIds": [
				"october2-tools-meite-p8"
			]
		},
		{
			"label": "Largeur publiée",
			"value": "137 mm",
			"evidenceIds": [
				"october2-tools-meite-p8"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure: 100-120 psi",
			"evidenceIds": [
				"october2-tools-meite-p8"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-meite-p8",
			"sourceUrl": "https://www.meitetools.com/_files/ugd/db8665_9c0a9d5b848f4c52b660bc3ad7fddada.pdf?index=true#page=8",
			"sourceLabel": "Meite, catalogue industriel de cloueurs et agrafeuses, édition du document conservée, page PDF 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : f7f01ffd0c2ff84645d694199df4ac6740b32aa8e1abe7483e9b9c73dbda76a7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-meite-p8"
		],
		"workingPressureBar": [
			"october2-tools-meite-p8"
		],
		"demandExplanation": [
			"october2-tools-meite-p8"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
