import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-meite-mt840",
	"slug": "agrafeuse-cloueuse-meite-mt840",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Meite MT840",
	"brand": "Meite",
	"model": "MT840",
	"mpn": "MT840",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 5.516,
		"max": 6.895
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-meite-mt840.webp",
		"alt": "Repères techniques : Meite MT840",
		"sourceUrl": "https://www.meitetools.com/_files/ugd/db8665_9c0a9d5b848f4c52b660bc3ad7fddada.pdf?index=true",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "meite-mt840",
		"label": "Référence MT840",
		"distinguishingAttributes": {
			"reference": "MT840",
			"Masse publiée": "1.19 kg",
			"Hauteur publiée": "208 mm"
		}
	},
	"editorial": {
		"overview": "Meite MT840. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée : 1.19 kg. Hauteur publiée : 208 mm.",
		"verifiedFacts": [
			"Masse publiée : 1.19 kg.",
			"Hauteur publiée : 208 mm.",
			"Largeur publiée : 60 mm."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "1.19 kg",
			"evidenceIds": [
				"october2-tools-meite-p19"
			]
		},
		{
			"label": "Hauteur publiée",
			"value": "208 mm",
			"evidenceIds": [
				"october2-tools-meite-p19"
			]
		},
		{
			"label": "Largeur publiée",
			"value": "60 mm",
			"evidenceIds": [
				"october2-tools-meite-p19"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure: 80-100 psi",
			"evidenceIds": [
				"october2-tools-meite-p19"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-meite-p19",
			"sourceUrl": "https://www.meitetools.com/_files/ugd/db8665_9c0a9d5b848f4c52b660bc3ad7fddada.pdf?index=true#page=19",
			"sourceLabel": "Meite, catalogue industriel de cloueurs et agrafeuses, édition du document conservée, page PDF 19",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : f7f01ffd0c2ff84645d694199df4ac6740b32aa8e1abe7483e9b9c73dbda76a7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-meite-p19"
		],
		"workingPressureBar": [
			"october2-tools-meite-p19"
		],
		"demandExplanation": [
			"october2-tools-meite-p19"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
