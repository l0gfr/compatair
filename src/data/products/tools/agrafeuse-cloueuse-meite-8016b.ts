import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-meite-8016b",
	"slug": "agrafeuse-cloueuse-meite-8016b",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Meite 8016B",
	"brand": "Meite",
	"model": "8016B",
	"mpn": "8016B",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4.826,
		"max": 6.895
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-meite-8016b.webp",
		"alt": "Repères techniques : Meite 8016B",
		"sourceUrl": "https://www.meitetools.com/_files/ugd/db8665_9c0a9d5b848f4c52b660bc3ad7fddada.pdf?index=true",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "meite-8016b",
		"label": "Référence 8016B",
		"distinguishingAttributes": {
			"reference": "8016B",
			"Masse publiée": "0.95 kg",
			"Hauteur publiée": "145 mm"
		}
	},
	"editorial": {
		"overview": "Meite 8016B. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée : 0.95 kg. Hauteur publiée : 145 mm.",
		"verifiedFacts": [
			"Masse publiée : 0.95 kg.",
			"Hauteur publiée : 145 mm.",
			"Longueur publiée : 207 mm.",
			"Largeur publiée : 50 mm."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "0.95 kg",
			"evidenceIds": [
				"october2-tools-meite-p24"
			]
		},
		{
			"label": "Hauteur publiée",
			"value": "145 mm",
			"evidenceIds": [
				"october2-tools-meite-p24"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "207 mm",
			"evidenceIds": [
				"october2-tools-meite-p24"
			]
		},
		{
			"label": "Largeur publiée",
			"value": "50 mm",
			"evidenceIds": [
				"october2-tools-meite-p24"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure: 70-100 psi",
			"evidenceIds": [
				"october2-tools-meite-p24"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-meite-p24",
			"sourceUrl": "https://www.meitetools.com/_files/ugd/db8665_9c0a9d5b848f4c52b660bc3ad7fddada.pdf?index=true#page=24",
			"sourceLabel": "Meite, catalogue industriel de cloueurs et agrafeuses, édition du document conservée, page PDF 24",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : f7f01ffd0c2ff84645d694199df4ac6740b32aa8e1abe7483e9b9c73dbda76a7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-meite-p24"
		],
		"workingPressureBar": [
			"october2-tools-meite-p24"
		],
		"demandExplanation": [
			"october2-tools-meite-p24"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
