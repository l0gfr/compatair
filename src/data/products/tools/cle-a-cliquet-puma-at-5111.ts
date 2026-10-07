import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-puma-at-5111",
	"slug": "cle-a-cliquet-puma-at-5111",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "PUMA AT-5111",
	"brand": "PUMA",
	"model": "AT-5111",
	"mpn": "AT-5111",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-puma-at-5111.webp",
		"alt": "Repères techniques : PUMA AT-5111",
		"sourceUrl": "https://www.pumaair.com/product-Air-Ratchet-Box-Wrench-AirRatchetBoxWrench.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "puma-at-5111",
		"label": "Référence AT-5111",
		"distinguishingAttributes": {
			"reference": "AT-5111",
			"Hex. Box Size": "10, 11, 12, 13, 14",
			"Free Speed RPM": "200"
		}
	},
	"editorial": {
		"overview": "PUMA AT-5111. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Hex. Box Size : 10, 11, 12, 13, 14. Free Speed RPM : 200.",
		"verifiedFacts": [
			"Hex. Box Size : 10, 11, 12, 13, 14.",
			"Free Speed RPM : 200.",
			"Max. Torque / ft-lb : 18.",
			"Max. Torque / N.m. : 25.",
			"Overall Length / Inch : 13.39.",
			"Overall Length / mm : 340.",
			"Air Inlet (PT) : 1/4”.",
			"Air Hose (ID) : 3/8”.",
			"Net Weight / lb : 4.21.",
			"Net Weight / kg : 1.91."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Hex. Box Size",
			"value": "10, 11, 12, 13, 14",
			"evidenceIds": [
				"october2-tools-puma-cat-33-pdp-279-p1"
			]
		},
		{
			"label": "Free Speed RPM",
			"value": "200",
			"evidenceIds": [
				"october2-tools-puma-cat-33-pdp-279-p1"
			]
		},
		{
			"label": "Max. Torque / ft-lb",
			"value": "18",
			"evidenceIds": [
				"october2-tools-puma-cat-33-pdp-279-p1"
			]
		},
		{
			"label": "Max. Torque / N.m.",
			"value": "25",
			"evidenceIds": [
				"october2-tools-puma-cat-33-pdp-279-p1"
			]
		},
		{
			"label": "Overall Length / Inch",
			"value": "13.39",
			"evidenceIds": [
				"october2-tools-puma-cat-33-pdp-279-p1"
			]
		},
		{
			"label": "Overall Length / mm",
			"value": "340",
			"evidenceIds": [
				"october2-tools-puma-cat-33-pdp-279-p1"
			]
		},
		{
			"label": "Air Inlet (PT)",
			"value": "1/4”",
			"evidenceIds": [
				"october2-tools-puma-cat-33-pdp-279-p1"
			]
		},
		{
			"label": "Air Hose (ID)",
			"value": "3/8”",
			"evidenceIds": [
				"october2-tools-puma-cat-33-pdp-279-p1"
			]
		},
		{
			"label": "Net Weight / lb",
			"value": "4.21",
			"evidenceIds": [
				"october2-tools-puma-cat-33-pdp-279-p1"
			]
		},
		{
			"label": "Net Weight / kg",
			"value": "1.91",
			"evidenceIds": [
				"october2-tools-puma-cat-33-pdp-279-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure du débit n’est pas explicitée dans cette fiche.",
			"evidenceIds": [
				"october2-tools-puma-cat-33-pdp-279-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "226 L/min",
			"evidenceIds": [
				"october2-tools-puma-cat-33-pdp-279-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-puma-cat-33-pdp-279-p1",
			"sourceUrl": "https://www.pumaair.com/product-Air-Ratchet-Box-Wrench-AirRatchetBoxWrench.html",
			"sourceLabel": "PUMA Industrial, tableau fabricant de la famille product-Air-Ratchet-Box-Wrench-AirRatchetBoxWrench.html",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 4db745b393cbfc4f0ad8ac61be9540febddcd777ef168641469055f24673eff0. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-puma-cat-33-pdp-279-p1"
		],
		"workingPressureBar": [
			"october2-tools-puma-cat-33-pdp-279-p1"
		],
		"demandExplanation": [
			"october2-tools-puma-cat-33-pdp-279-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
