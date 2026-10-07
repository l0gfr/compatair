import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-meite-mt5016sln",
	"slug": "agrafeuse-cloueuse-meite-mt5016sln",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Meite MT5016SLN",
	"brand": "Meite",
	"model": "MT5016SLN",
	"mpn": "MT5016SLN",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4.826,
		"max": 6.895
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-meite-mt5016sln.webp",
		"alt": "Repères techniques : Meite MT5016SLN",
		"sourceUrl": "https://www.meitetools.com/_files/ugd/db8665_9c0a9d5b848f4c52b660bc3ad7fddada.pdf?index=true",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "meite-mt5016sln",
		"label": "Référence MT5016SLN",
		"distinguishingAttributes": {
			"reference": "MT5016SLN",
			"Masse publiée": "1.03 kg",
			"Hauteur publiée": "192 mm"
		}
	},
	"editorial": {
		"overview": "Meite MT5016SLN. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée : 1.03 kg. Hauteur publiée : 192 mm.",
		"verifiedFacts": [
			"Masse publiée : 1.03 kg.",
			"Hauteur publiée : 192 mm.",
			"Longueur publiée : 221 mm."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "1.03 kg",
			"evidenceIds": [
				"october2-tools-meite-p22"
			]
		},
		{
			"label": "Hauteur publiée",
			"value": "192 mm",
			"evidenceIds": [
				"october2-tools-meite-p22"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "221 mm",
			"evidenceIds": [
				"october2-tools-meite-p22"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure: 70-100 psi",
			"evidenceIds": [
				"october2-tools-meite-p22"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-meite-p22",
			"sourceUrl": "https://www.meitetools.com/_files/ugd/db8665_9c0a9d5b848f4c52b660bc3ad7fddada.pdf?index=true#page=22",
			"sourceLabel": "Meite, catalogue industriel de cloueurs et agrafeuses, édition du document conservée, page PDF 22",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : f7f01ffd0c2ff84645d694199df4ac6740b32aa8e1abe7483e9b9c73dbda76a7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-meite-p22"
		],
		"workingPressureBar": [
			"october2-tools-meite-p22"
		],
		"demandExplanation": [
			"october2-tools-meite-p22"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
