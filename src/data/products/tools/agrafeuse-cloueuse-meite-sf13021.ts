import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-meite-sf13021",
	"slug": "agrafeuse-cloueuse-meite-sf13021",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Meite SF13021",
	"brand": "Meite",
	"model": "SF13021",
	"mpn": "SF13021",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.895,
		"max": 8.274
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-meite-sf13021.webp",
		"alt": "Repères techniques : Meite SF13021",
		"sourceUrl": "https://www.meitetools.com/_files/ugd/db8665_9c0a9d5b848f4c52b660bc3ad7fddada.pdf?index=true",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "meite-sf13021",
		"label": "Référence SF13021",
		"distinguishingAttributes": {
			"reference": "SF13021",
			"Masse publiée": "6.76 kg",
			"Hauteur publiée": "463 mm"
		}
	},
	"editorial": {
		"overview": "Meite SF13021. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée : 6.76 kg. Hauteur publiée : 463 mm.",
		"verifiedFacts": [
			"Masse publiée : 6.76 kg.",
			"Hauteur publiée : 463 mm.",
			"Longueur publiée : 528 mm."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "6.76 kg",
			"evidenceIds": [
				"october2-tools-meite-p10"
			]
		},
		{
			"label": "Hauteur publiée",
			"value": "463 mm",
			"evidenceIds": [
				"october2-tools-meite-p10"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "528 mm",
			"evidenceIds": [
				"october2-tools-meite-p10"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure: 100-120 psi",
			"evidenceIds": [
				"october2-tools-meite-p10"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-meite-p10",
			"sourceUrl": "https://www.meitetools.com/_files/ugd/db8665_9c0a9d5b848f4c52b660bc3ad7fddada.pdf?index=true#page=10",
			"sourceLabel": "Meite, catalogue industriel de cloueurs et agrafeuses, édition du document conservée, page PDF 10",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : f7f01ffd0c2ff84645d694199df4ac6740b32aa8e1abe7483e9b9c73dbda76a7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-meite-p10"
		],
		"workingPressureBar": [
			"october2-tools-meite-p10"
		],
		"demandExplanation": [
			"october2-tools-meite-p10"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
