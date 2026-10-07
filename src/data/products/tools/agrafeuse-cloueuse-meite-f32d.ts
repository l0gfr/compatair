import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-meite-f32d",
	"slug": "agrafeuse-cloueuse-meite-f32d",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Meite F32D",
	"brand": "Meite",
	"model": "F32D",
	"mpn": "F32D",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4.137,
		"max": 6.895
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-meite-f32d.webp",
		"alt": "Repères techniques : Meite F32D",
		"sourceUrl": "https://www.meitetools.com/_files/ugd/db8665_9c0a9d5b848f4c52b660bc3ad7fddada.pdf?index=true",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "meite-f32d",
		"label": "Référence F32D",
		"distinguishingAttributes": {
			"reference": "F32D",
			"Hauteur publiée": "190 mm",
			"Longueur publiée": "247 mm"
		}
	},
	"editorial": {
		"overview": "Meite F32D. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Hauteur publiée : 190 mm. Longueur publiée : 247 mm.",
		"verifiedFacts": [
			"Hauteur publiée : 190 mm.",
			"Longueur publiée : 247 mm.",
			"Largeur publiée : 55 mm."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Hauteur publiée",
			"value": "190 mm",
			"evidenceIds": [
				"october2-tools-meite-p30"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "247 mm",
			"evidenceIds": [
				"october2-tools-meite-p30"
			]
		},
		{
			"label": "Largeur publiée",
			"value": "55 mm",
			"evidenceIds": [
				"october2-tools-meite-p30"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure: 60-100 psi",
			"evidenceIds": [
				"october2-tools-meite-p30"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-meite-p30",
			"sourceUrl": "https://www.meitetools.com/_files/ugd/db8665_9c0a9d5b848f4c52b660bc3ad7fddada.pdf?index=true#page=30",
			"sourceLabel": "Meite, catalogue industriel de cloueurs et agrafeuses, édition du document conservée, page PDF 30",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : f7f01ffd0c2ff84645d694199df4ac6740b32aa8e1abe7483e9b9c73dbda76a7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-meite-p30"
		],
		"workingPressureBar": [
			"october2-tools-meite-p30"
		],
		"demandExplanation": [
			"october2-tools-meite-p30"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
