import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-meite-cn65b",
	"slug": "agrafeuse-cloueuse-meite-cn65b",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Meite CN65B",
	"brand": "Meite",
	"model": "CN65B",
	"mpn": "CN65B",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4.826,
		"max": 6.895
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-meite-cn65b.webp",
		"alt": "Repères techniques : Meite CN65B",
		"sourceUrl": "https://www.meitetools.com/_files/ugd/db8665_9c0a9d5b848f4c52b660bc3ad7fddada.pdf?index=true",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "meite-cn65b",
		"label": "Référence CN65B",
		"distinguishingAttributes": {
			"reference": "CN65B",
			"Masse publiée": "2.96 kg",
			"Hauteur publiée": "328 mm"
		}
	},
	"editorial": {
		"overview": "Meite CN65B. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée : 2.96 kg. Hauteur publiée : 328 mm.",
		"verifiedFacts": [
			"Masse publiée : 2.96 kg.",
			"Hauteur publiée : 328 mm.",
			"Longueur publiée : 310 mm.",
			"Largeur publiée : 130 mm."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "2.96 kg",
			"evidenceIds": [
				"october2-tools-meite-p6"
			]
		},
		{
			"label": "Hauteur publiée",
			"value": "328 mm",
			"evidenceIds": [
				"october2-tools-meite-p6"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "310 mm",
			"evidenceIds": [
				"october2-tools-meite-p6"
			]
		},
		{
			"label": "Largeur publiée",
			"value": "130 mm",
			"evidenceIds": [
				"october2-tools-meite-p6"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure: 70-100 psi",
			"evidenceIds": [
				"october2-tools-meite-p6"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-meite-p6",
			"sourceUrl": "https://www.meitetools.com/_files/ugd/db8665_9c0a9d5b848f4c52b660bc3ad7fddada.pdf?index=true#page=6",
			"sourceLabel": "Meite, catalogue industriel de cloueurs et agrafeuses, édition du document conservée, page PDF 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : f7f01ffd0c2ff84645d694199df4ac6740b32aa8e1abe7483e9b9c73dbda76a7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-meite-p6"
		],
		"workingPressureBar": [
			"october2-tools-meite-p6"
		],
		"demandExplanation": [
			"october2-tools-meite-p6"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
