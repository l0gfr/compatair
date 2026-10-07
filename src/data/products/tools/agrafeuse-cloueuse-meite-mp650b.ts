import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-meite-mp650b",
	"slug": "agrafeuse-cloueuse-meite-mp650b",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Meite MP650B",
	"brand": "Meite",
	"model": "MP650B",
	"mpn": "MP650B",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 5.516,
		"max": 6.895
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-meite-mp650b.webp",
		"alt": "Repères techniques : Meite MP650B",
		"sourceUrl": "https://www.meitetools.com/_files/ugd/db8665_9c0a9d5b848f4c52b660bc3ad7fddada.pdf?index=true",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "meite-mp650b",
		"label": "Référence MP650B",
		"distinguishingAttributes": {
			"reference": "MP650B",
			"Masse publiée": "1.15 kg",
			"Hauteur publiée": "226 mm"
		}
	},
	"editorial": {
		"overview": "Meite MP650B. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée : 1.15 kg. Hauteur publiée : 226 mm.",
		"verifiedFacts": [
			"Masse publiée : 1.15 kg.",
			"Hauteur publiée : 226 mm.",
			"Longueur publiée : 230 mm."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "1.15 kg",
			"evidenceIds": [
				"october2-tools-meite-p19"
			]
		},
		{
			"label": "Hauteur publiée",
			"value": "226 mm",
			"evidenceIds": [
				"october2-tools-meite-p19"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "230 mm",
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
