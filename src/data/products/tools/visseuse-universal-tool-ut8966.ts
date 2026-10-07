import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-universal-tool-ut8966",
	"slug": "visseuse-universal-tool-ut8966",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Universal Tool UT8966",
	"brand": "Universal Tool",
	"model": "UT8966",
	"mpn": "UT8966",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/4-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-universal-tool-ut8966.webp",
		"alt": "Repères techniques : Universal Tool UT8966",
		"sourceUrl": "https://continentaltoolgroup.com/product/positive-clutch-screwdriver-2/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "universal-tool-ut8966",
		"label": "Référence UT8966",
		"distinguishingAttributes": {
			"reference": "UT8966",
			"Masse publiée": "1.1 kg",
			"Longueur publiée": "172 mm"
		}
	},
	"editorial": {
		"overview": "Universal Tool UT8966. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 1.1 kg. Longueur publiée : 172 mm.",
		"verifiedFacts": [
			"Masse publiée : 1.1 kg.",
			"Longueur publiée : 172 mm.",
			"Vitesse publiée : 2000 tr/min.",
			"Puissance publiée : 0.9 HP.",
			"Échappement : Handle."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "1.1 kg",
			"evidenceIds": [
				"october2-tools-ctg-pdp-93-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "172 mm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-93-p1"
			]
		},
		{
			"label": "Vitesse publiée",
			"value": "2000 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-93-p1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "0.9 HP",
			"evidenceIds": [
				"october2-tools-ctg-pdp-93-p1"
			]
		},
		{
			"label": "Échappement",
			"value": "Handle",
			"evidenceIds": [
				"october2-tools-ctg-pdp-93-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-93-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Rec. Air Pressure: 90 psi-6.2 bar",
			"evidenceIds": [
				"october2-tools-ctg-pdp-93-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "22 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-93-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-93-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/positive-clutch-screwdriver-2/",
			"sourceLabel": "Universal Tool, fiche fabricant de la référence UT8966",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : ad1019f140b7e87f14810be4167762937286e72044b0a0d3f8bf66c23dbefdb8. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-93-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-93-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-93-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-93-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
