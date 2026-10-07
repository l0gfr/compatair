import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "derouilleur-a-aiguilles-universal-tool-ut8635",
	"slug": "derouilleur-a-aiguilles-universal-tool-ut8635",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Universal Tool UT8635",
	"brand": "Universal Tool",
	"model": "UT8635",
	"mpn": "UT8635",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/4-in. (Air Inlet (NPT/BSP))",
	"recommendedHose": {
		"innerDiameterMm": 9.525
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/derouilleur-a-aiguilles-universal-tool-ut8635.webp",
		"alt": "Repères techniques : Universal Tool UT8635",
		"sourceUrl": "https://continentaltoolgroup.com/product/needle-scaler/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "universal-tool-ut8635",
		"label": "Référence UT8635",
		"distinguishingAttributes": {
			"reference": "UT8635",
			"Masse publiée": "2.7 kg",
			"Longueur publiée": "381 mm"
		}
	},
	"editorial": {
		"overview": "Universal Tool UT8635. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 2.7 kg. Longueur publiée : 381 mm.",
		"verifiedFacts": [
			"Masse publiée : 2.7 kg.",
			"Longueur publiée : 381 mm.",
			"Capacité en aiguilles : (19) 1/8\" x 7\"."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "2.7 kg",
			"evidenceIds": [
				"october2-tools-ctg-pdp-86-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "381 mm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-86-p1"
			]
		},
		{
			"label": "Capacité en aiguilles",
			"value": "(19) 1/8\" x 7\"",
			"evidenceIds": [
				"october2-tools-ctg-pdp-86-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-86-p1"
			]
		},
		{
			"label": "Champ fabricant : Hose (I.D. in.)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-86-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Rec. Air Pressure: 90 psi-6.2 bar",
			"evidenceIds": [
				"october2-tools-ctg-pdp-86-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "12 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-86-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-86-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/needle-scaler/",
			"sourceLabel": "Universal Tool, fiche fabricant de la référence UT8635",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : ae13213ceb8a1d92edac04aef20d21b414646e3eb08ce9ec2b2a480898e9970e. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-86-p1"
		],
		"recommendedHose": [
			"october2-tools-ctg-pdp-86-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-86-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-86-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-86-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
