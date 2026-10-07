import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "derouilleur-a-aiguilles-universal-tool-ut9914",
	"slug": "derouilleur-a-aiguilles-universal-tool-ut9914",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Universal Tool UT9914",
	"brand": "Universal Tool",
	"model": "UT9914",
	"mpn": "UT9914",
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
		"src": "/images/products/derouilleur-a-aiguilles-universal-tool-ut9914.webp",
		"alt": "Repères techniques : Universal Tool UT9914",
		"sourceUrl": "https://continentaltoolgroup.com/product/pistol-grip-recoilless-needle-scaler-3/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "universal-tool-ut9914",
		"label": "Référence UT9914",
		"distinguishingAttributes": {
			"reference": "UT9914",
			"Masse publiée": "2.6 kg",
			"Longueur publiée": "302 mm"
		}
	},
	"editorial": {
		"overview": "Universal Tool UT9914. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 2.6 kg. Longueur publiée : 302 mm.",
		"verifiedFacts": [
			"Masse publiée : 2.6 kg.",
			"Longueur publiée : 302 mm.",
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
			"value": "2.6 kg",
			"evidenceIds": [
				"october2-tools-ctg-pdp-90-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "302 mm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-90-p1"
			]
		},
		{
			"label": "Capacité en aiguilles",
			"value": "(19) 1/8\" x 7\"",
			"evidenceIds": [
				"october2-tools-ctg-pdp-90-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-90-p1"
			]
		},
		{
			"label": "Champ fabricant : Hose (I.D. in.)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-90-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Rec. Air Pressure: 90 psi-6.2 bar",
			"evidenceIds": [
				"october2-tools-ctg-pdp-90-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "12 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-90-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-90-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/pistol-grip-recoilless-needle-scaler-3/",
			"sourceLabel": "Universal Tool, fiche fabricant de la référence UT9914",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 29a2792f5c30234e76aa953452eb7a4fca04481d20720d7bf6f069cb03dd972d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-90-p1"
		],
		"recommendedHose": [
			"october2-tools-ctg-pdp-90-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-90-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-90-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-90-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
