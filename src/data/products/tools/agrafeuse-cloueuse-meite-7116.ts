import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-meite-7116",
	"slug": "agrafeuse-cloueuse-meite-7116",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Meite 7116",
	"brand": "Meite",
	"model": "7116",
	"mpn": "7116",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4.826,
		"max": 6.895
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-meite-7116.webp",
		"alt": "Repères techniques : Meite 7116",
		"sourceUrl": "https://www.meitetools.com/_files/ugd/db8665_9c0a9d5b848f4c52b660bc3ad7fddada.pdf?index=true",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "meite-7116",
		"label": "Référence 7116",
		"distinguishingAttributes": {
			"reference": "7116",
			"Masse publiée": "0.94 kg",
			"Hauteur publiée": "152 mm"
		}
	},
	"editorial": {
		"overview": "Meite 7116. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée : 0.94 kg. Hauteur publiée : 152 mm.",
		"verifiedFacts": [
			"Masse publiée : 0.94 kg.",
			"Hauteur publiée : 152 mm.",
			"Longueur publiée : 240 mm.",
			"Largeur publiée : 40 mm."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "0.94 kg",
			"evidenceIds": [
				"october2-tools-meite-p23"
			]
		},
		{
			"label": "Hauteur publiée",
			"value": "152 mm",
			"evidenceIds": [
				"october2-tools-meite-p23"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "240 mm",
			"evidenceIds": [
				"october2-tools-meite-p23"
			]
		},
		{
			"label": "Largeur publiée",
			"value": "40 mm",
			"evidenceIds": [
				"october2-tools-meite-p23"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure: 70-100 psi",
			"evidenceIds": [
				"october2-tools-meite-p23"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-meite-p23",
			"sourceUrl": "https://www.meitetools.com/_files/ugd/db8665_9c0a9d5b848f4c52b660bc3ad7fddada.pdf?index=true#page=23",
			"sourceLabel": "Meite, catalogue industriel de cloueurs et agrafeuses, édition du document conservée, page PDF 23",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : f7f01ffd0c2ff84645d694199df4ac6740b32aa8e1abe7483e9b9c73dbda76a7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-meite-p23"
		],
		"workingPressureBar": [
			"october2-tools-meite-p23"
		],
		"demandExplanation": [
			"october2-tools-meite-p23"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
