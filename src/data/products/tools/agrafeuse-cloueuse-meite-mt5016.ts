import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-meite-mt5016",
	"slug": "agrafeuse-cloueuse-meite-mt5016",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Meite MT5016",
	"brand": "Meite",
	"model": "MT5016",
	"mpn": "MT5016",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4.826,
		"max": 6.895
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-meite-mt5016.webp",
		"alt": "Repères techniques : Meite MT5016",
		"sourceUrl": "https://www.meitetools.com/_files/ugd/db8665_9c0a9d5b848f4c52b660bc3ad7fddada.pdf?index=true",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "meite-mt5016",
		"label": "Référence MT5016",
		"distinguishingAttributes": {
			"reference": "MT5016",
			"Masse publiée": "0.94 kg",
			"Hauteur publiée": "105 mm"
		}
	},
	"editorial": {
		"overview": "Meite MT5016. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée : 0.94 kg. Hauteur publiée : 105 mm.",
		"verifiedFacts": [
			"Masse publiée : 0.94 kg.",
			"Hauteur publiée : 105 mm.",
			"Longueur publiée : 213 mm.",
			"Largeur publiée : 44 mm.",
			"Jauge des agrafes : 20 GA.",
			"Couronne des agrafes : 12.6 mm."
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
				"october2-tools-meite-p21"
			]
		},
		{
			"label": "Hauteur publiée",
			"value": "105 mm",
			"evidenceIds": [
				"october2-tools-meite-p21"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "213 mm",
			"evidenceIds": [
				"october2-tools-meite-p21"
			]
		},
		{
			"label": "Largeur publiée",
			"value": "44 mm",
			"evidenceIds": [
				"october2-tools-meite-p21"
			]
		},
		{
			"label": "Jauge des agrafes",
			"value": "20 GA",
			"evidenceIds": [
				"october2-tools-meite-p21"
			]
		},
		{
			"label": "Couronne des agrafes",
			"value": "12.6 mm",
			"evidenceIds": [
				"october2-tools-meite-p21"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure: 70-100 psi",
			"evidenceIds": [
				"october2-tools-meite-p21"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-meite-p21",
			"sourceUrl": "https://www.meitetools.com/_files/ugd/db8665_9c0a9d5b848f4c52b660bc3ad7fddada.pdf?index=true#page=21",
			"sourceLabel": "Meite, catalogue industriel de cloueurs et agrafeuses, édition du document conservée, page PDF 21",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : f7f01ffd0c2ff84645d694199df4ac6740b32aa8e1abe7483e9b9c73dbda76a7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-meite-p21"
		],
		"workingPressureBar": [
			"october2-tools-meite-p21"
		],
		"demandExplanation": [
			"october2-tools-meite-p21"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
