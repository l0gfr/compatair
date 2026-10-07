import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "derouilleur-a-aiguilles-universal-tool-ut9911",
	"slug": "derouilleur-a-aiguilles-universal-tool-ut9911",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Universal Tool UT9911",
	"brand": "Universal Tool",
	"model": "UT9911",
	"mpn": "UT9911",
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
		"src": "/images/products/derouilleur-a-aiguilles-universal-tool-ut9911.webp",
		"alt": "Repères techniques : Universal Tool UT9911",
		"sourceUrl": "https://continentaltoolgroup.com/product/heavy-duty-low-vibration-straight-needle-scaler-2/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "universal-tool-ut9911",
		"label": "Référence UT9911",
		"distinguishingAttributes": {
			"reference": "UT9911",
			"Masse publiée": "1.6 kg",
			"Longueur publiée": "195 mm"
		}
	},
	"editorial": {
		"overview": "Universal Tool UT9911. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 1.6 kg. Longueur publiée : 195 mm.",
		"verifiedFacts": [
			"Masse publiée : 1.6 kg.",
			"Longueur publiée : 195 mm.",
			"Capacité en aiguilles : (18) 1/8\" x 5\"."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "1.6 kg",
			"evidenceIds": [
				"october2-tools-ctg-pdp-299-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "195 mm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-299-p1"
			]
		},
		{
			"label": "Capacité en aiguilles",
			"value": "(18) 1/8\" x 5\"",
			"evidenceIds": [
				"october2-tools-ctg-pdp-299-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-299-p1"
			]
		},
		{
			"label": "Champ fabricant : Hose (I.D. in.)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-299-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Rec. Air Pressure: 90 psi-6.2 bar",
			"evidenceIds": [
				"october2-tools-ctg-pdp-299-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "12 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-299-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-299-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/heavy-duty-low-vibration-straight-needle-scaler-2/",
			"sourceLabel": "Universal Tool, fiche fabricant de la référence UT9911",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 64c84b9b75432b60d6076dcf0bc1a7bf6e8bdebc2d87b4f453758978b7f3b4dc. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-299-p1"
		],
		"recommendedHose": [
			"october2-tools-ctg-pdp-299-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-299-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-299-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-299-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
