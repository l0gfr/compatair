import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-meite-fst50",
	"slug": "agrafeuse-cloueuse-meite-fst50",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Meite FST50",
	"brand": "Meite",
	"model": "FST50",
	"mpn": "FST50",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4.826,
		"max": 6.895
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-meite-fst50.webp",
		"alt": "Repères techniques : Meite FST50",
		"sourceUrl": "https://www.meitetools.com/_files/ugd/db8665_9c0a9d5b848f4c52b660bc3ad7fddada.pdf?index=true",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "meite-fst50",
		"label": "Référence FST50",
		"distinguishingAttributes": {
			"reference": "FST50",
			"Masse publiée": "1.59 kg",
			"Hauteur publiée": "255 mm"
		}
	},
	"editorial": {
		"overview": "Meite FST50. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée : 1.59 kg. Hauteur publiée : 255 mm.",
		"verifiedFacts": [
			"Masse publiée : 1.59 kg.",
			"Hauteur publiée : 255 mm.",
			"Largeur publiée : 62 mm."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "1.59 kg",
			"evidenceIds": [
				"october2-tools-meite-p32"
			]
		},
		{
			"label": "Hauteur publiée",
			"value": "255 mm",
			"evidenceIds": [
				"october2-tools-meite-p32"
			]
		},
		{
			"label": "Largeur publiée",
			"value": "62 mm",
			"evidenceIds": [
				"october2-tools-meite-p32"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure: 70-100 psi",
			"evidenceIds": [
				"october2-tools-meite-p32"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-meite-p32",
			"sourceUrl": "https://www.meitetools.com/_files/ugd/db8665_9c0a9d5b848f4c52b660bc3ad7fddada.pdf?index=true#page=32",
			"sourceLabel": "Meite, catalogue industriel de cloueurs et agrafeuses, édition du document conservée, page PDF 32",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : f7f01ffd0c2ff84645d694199df4ac6740b32aa8e1abe7483e9b9c73dbda76a7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-meite-p32"
		],
		"workingPressureBar": [
			"october2-tools-meite-p32"
		],
		"demandExplanation": [
			"october2-tools-meite-p32"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
