import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-meite-p630c",
	"slug": "agrafeuse-cloueuse-meite-p630c",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Meite P630C",
	"brand": "Meite",
	"model": "P630C",
	"mpn": "P630C",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4.826,
		"max": 6.895
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-meite-p630c.webp",
		"alt": "Repères techniques : Meite P630C",
		"sourceUrl": "https://www.meitetools.com/_files/ugd/db8665_9c0a9d5b848f4c52b660bc3ad7fddada.pdf?index=true",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "meite-p630c",
		"label": "Référence P630C",
		"distinguishingAttributes": {
			"reference": "P630C",
			"Masse publiée": "0.92 kg",
			"Hauteur publiée": "178 mm"
		}
	},
	"editorial": {
		"overview": "Meite P630C. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée : 0.92 kg. Hauteur publiée : 178 mm.",
		"verifiedFacts": [
			"Masse publiée : 0.92 kg.",
			"Hauteur publiée : 178 mm.",
			"Longueur publiée : 215 mm.",
			"Largeur publiée : 42 mm."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "0.92 kg",
			"evidenceIds": [
				"october2-tools-meite-p18"
			]
		},
		{
			"label": "Hauteur publiée",
			"value": "178 mm",
			"evidenceIds": [
				"october2-tools-meite-p18"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "215 mm",
			"evidenceIds": [
				"october2-tools-meite-p18"
			]
		},
		{
			"label": "Largeur publiée",
			"value": "42 mm",
			"evidenceIds": [
				"october2-tools-meite-p18"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure: 70-100 psi",
			"evidenceIds": [
				"october2-tools-meite-p18"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-meite-p18",
			"sourceUrl": "https://www.meitetools.com/_files/ugd/db8665_9c0a9d5b848f4c52b660bc3ad7fddada.pdf?index=true#page=18",
			"sourceLabel": "Meite, catalogue industriel de cloueurs et agrafeuses, édition du document conservée, page PDF 18",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : f7f01ffd0c2ff84645d694199df4ac6740b32aa8e1abe7483e9b9c73dbda76a7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-meite-p18"
		],
		"workingPressureBar": [
			"october2-tools-meite-p18"
		],
		"demandExplanation": [
			"october2-tools-meite-p18"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
