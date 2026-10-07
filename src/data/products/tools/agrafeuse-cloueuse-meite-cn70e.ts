import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-meite-cn70e",
	"slug": "agrafeuse-cloueuse-meite-cn70e",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Meite CN70E",
	"brand": "Meite",
	"model": "CN70E",
	"mpn": "CN70E",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4.826,
		"max": 6.895
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-meite-cn70e.webp",
		"alt": "Repères techniques : Meite CN70E",
		"sourceUrl": "https://www.meitetools.com/_files/ugd/db8665_9c0a9d5b848f4c52b660bc3ad7fddada.pdf?index=true",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "meite-cn70e",
		"label": "Référence CN70E",
		"distinguishingAttributes": {
			"reference": "CN70E",
			"Masse publiée": "3.05 kg",
			"Hauteur publiée": "318 mm"
		}
	},
	"editorial": {
		"overview": "Meite CN70E. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée : 3.05 kg. Hauteur publiée : 318 mm.",
		"verifiedFacts": [
			"Masse publiée : 3.05 kg.",
			"Hauteur publiée : 318 mm.",
			"Largeur publiée : 112 mm.",
			"Commande déclarée : Remote Control ; outil pour machine automatique de palettes."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "3.05 kg",
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
			"label": "Largeur publiée",
			"value": "112 mm",
			"evidenceIds": [
				"october2-tools-meite-p7"
			]
		},
		{
			"label": "Commande déclarée",
			"value": "Remote Control ; outil pour machine automatique de palettes",
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
