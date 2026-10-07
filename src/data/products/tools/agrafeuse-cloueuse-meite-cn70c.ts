import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-meite-cn70c",
	"slug": "agrafeuse-cloueuse-meite-cn70c",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Meite CN70C",
	"brand": "Meite",
	"model": "CN70C",
	"mpn": "CN70C",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4.826,
		"max": 6.895
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-meite-cn70c.webp",
		"alt": "Repères techniques : Meite CN70C",
		"sourceUrl": "https://www.meitetools.com/_files/ugd/db8665_9c0a9d5b848f4c52b660bc3ad7fddada.pdf?index=true",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "meite-cn70c",
		"label": "Référence CN70C",
		"distinguishingAttributes": {
			"reference": "CN70C",
			"Masse publiée": "3.84 kg",
			"Hauteur publiée": "318 mm"
		}
	},
	"editorial": {
		"overview": "Meite CN70C. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée : 3.84 kg. Hauteur publiée : 318 mm.",
		"verifiedFacts": [
			"Masse publiée : 3.84 kg.",
			"Hauteur publiée : 318 mm.",
			"Longueur publiée : 336 mm."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "3.84 kg",
			"evidenceIds": [
				"october2-tools-meite-p7"
			]
		},
		{
			"label": "Hauteur publiée",
			"value": "318 mm",
			"evidenceIds": [
				"october2-tools-meite-p7"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "336 mm",
			"evidenceIds": [
				"october2-tools-meite-p7"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure: 70-100 psi",
			"evidenceIds": [
				"october2-tools-meite-p7"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-meite-p7",
			"sourceUrl": "https://www.meitetools.com/_files/ugd/db8665_9c0a9d5b848f4c52b660bc3ad7fddada.pdf?index=true#page=7",
			"sourceLabel": "Meite, catalogue industriel de cloueurs et agrafeuses, édition du document conservée, page PDF 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : f7f01ffd0c2ff84645d694199df4ac6740b32aa8e1abe7483e9b9c73dbda76a7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-meite-p7"
		],
		"workingPressureBar": [
			"october2-tools-meite-p7"
		],
		"demandExplanation": [
			"october2-tools-meite-p7"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
