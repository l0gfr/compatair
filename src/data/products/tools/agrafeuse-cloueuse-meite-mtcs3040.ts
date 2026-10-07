import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-meite-mtcs3040",
	"slug": "agrafeuse-cloueuse-meite-mtcs3040",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Meite MTCS3040",
	"brand": "Meite",
	"model": "MTCS3040",
	"mpn": "MTCS3040",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4.826,
		"max": 6.895
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-meite-mtcs3040.webp",
		"alt": "Repères techniques : Meite MTCS3040",
		"sourceUrl": "https://www.meitetools.com/_files/ugd/db8665_9c0a9d5b848f4c52b660bc3ad7fddada.pdf?index=true",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "meite-mtcs3040",
		"label": "Référence MTCS3040",
		"distinguishingAttributes": {
			"reference": "MTCS3040",
			"Masse publiée": "3.42 kg",
			"Hauteur publiée": "360 mm"
		}
	},
	"editorial": {
		"overview": "Meite MTCS3040. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée : 3.42 kg. Hauteur publiée : 360 mm.",
		"verifiedFacts": [
			"Masse publiée : 3.42 kg.",
			"Hauteur publiée : 360 mm.",
			"Largeur publiée : 120 mm."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "3.42 kg",
			"evidenceIds": [
				"october2-tools-meite-p34"
			]
		},
		{
			"label": "Hauteur publiée",
			"value": "360 mm",
			"evidenceIds": [
				"october2-tools-meite-p34"
			]
		},
		{
			"label": "Largeur publiée",
			"value": "120 mm",
			"evidenceIds": [
				"october2-tools-meite-p34"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure: 70-100 psi",
			"evidenceIds": [
				"october2-tools-meite-p34"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-meite-p34",
			"sourceUrl": "https://www.meitetools.com/_files/ugd/db8665_9c0a9d5b848f4c52b660bc3ad7fddada.pdf?index=true#page=34",
			"sourceLabel": "Meite, catalogue industriel de cloueurs et agrafeuses, édition du document conservée, page PDF 34",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : f7f01ffd0c2ff84645d694199df4ac6740b32aa8e1abe7483e9b9c73dbda76a7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-meite-p34"
		],
		"workingPressureBar": [
			"october2-tools-meite-p34"
		],
		"demandExplanation": [
			"october2-tools-meite-p34"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
