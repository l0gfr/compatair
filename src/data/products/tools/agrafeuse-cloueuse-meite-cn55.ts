import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-meite-cn55",
	"slug": "agrafeuse-cloueuse-meite-cn55",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Meite CN55",
	"brand": "Meite",
	"model": "CN55",
	"mpn": "CN55",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4.826,
		"max": 6.895
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-meite-cn55.webp",
		"alt": "Repères techniques : Meite CN55",
		"sourceUrl": "https://www.meitetools.com/_files/ugd/db8665_9c0a9d5b848f4c52b660bc3ad7fddada.pdf?index=true",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "meite-cn55",
		"label": "Référence CN55",
		"distinguishingAttributes": {
			"reference": "CN55",
			"Masse publiée": "2.75 kg",
			"Hauteur publiée": "283 mm"
		}
	},
	"editorial": {
		"overview": "Meite CN55. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée : 2.75 kg. Hauteur publiée : 283 mm.",
		"verifiedFacts": [
			"Masse publiée : 2.75 kg.",
			"Hauteur publiée : 283 mm.",
			"Longueur publiée : 270 mm.",
			"Largeur publiée : 131 mm."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "2.75 kg",
			"evidenceIds": [
				"october2-tools-meite-p5"
			]
		},
		{
			"label": "Hauteur publiée",
			"value": "283 mm",
			"evidenceIds": [
				"october2-tools-meite-p5"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "270 mm",
			"evidenceIds": [
				"october2-tools-meite-p5"
			]
		},
		{
			"label": "Largeur publiée",
			"value": "131 mm",
			"evidenceIds": [
				"october2-tools-meite-p5"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure: 70-100 psi",
			"evidenceIds": [
				"october2-tools-meite-p5"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-meite-p5",
			"sourceUrl": "https://www.meitetools.com/_files/ugd/db8665_9c0a9d5b848f4c52b660bc3ad7fddada.pdf?index=true#page=5",
			"sourceLabel": "Meite, catalogue industriel de cloueurs et agrafeuses, édition du document conservée, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : f7f01ffd0c2ff84645d694199df4ac6740b32aa8e1abe7483e9b9c73dbda76a7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-meite-p5"
		],
		"workingPressureBar": [
			"october2-tools-meite-p5"
		],
		"demandExplanation": [
			"october2-tools-meite-p5"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
