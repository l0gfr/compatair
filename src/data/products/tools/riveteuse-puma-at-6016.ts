import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-puma-at-6016",
	"slug": "riveteuse-puma-at-6016",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "PUMA AT-6016",
	"brand": "PUMA",
	"model": "AT-6016",
	"mpn": "AT-6016",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-puma-at-6016.webp",
		"alt": "Repères techniques : PUMA AT-6016",
		"sourceUrl": "https://www.pumaair.com/product-Air-Hydraulic-Riveter-AirHydraulicRiveter.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "puma-at-6016",
		"label": "Référence AT-6016",
		"distinguishingAttributes": {
			"reference": "AT-6016",
			"Blind Rivet Setting Capacity (inch)": "3/16",
			"Traction Power / lbs": "1983"
		}
	},
	"editorial": {
		"overview": "PUMA AT-6016. La AT-6016 est la riveteuse 3/16 pouce de course 17 mm et longueur 300 mm ; la AT-6216 garde la même traction publiée mais course 16 mm et longueur 225 mm. L’en-tête de consommation dit par cycle de rivetage, tandis que les unités sont SCFM et L/min. Aucune lecture silencieuse de 0,85 comme litre par rivet ne résout cette incohérence. Le volume normalisé et sa pression de mesure restent non qualifiés.",
		"verifiedFacts": [
			"Rivet aveugle, capacité publiée : 3/16 pouce.",
			"Traction, colonne constructeur : 900 kg.",
			"Course : 17 mm.",
			"Longueur : 300 mm.",
			"Masse : 1,5 kg.",
			"Consommation, en-tête contradictoire : Avg. Air Consumption Per Rivet Cycle ; colonnes SCFM / L/min ; valeurs 0,03 / 0,85."
		],
		"limitations": [
			"Incohérence dimensionnelle de l’en-tête de consommation : per rivet cycle avec des unités par minute. Valeur exclue du calcul, sans correction supposée."
		]
	},
	"specifications": [
		{
			"label": "Rivet aveugle, capacité publiée",
			"value": "3/16 pouce",
			"evidenceIds": [
				"riveteuse-puma-at-6016-reserved-20261103-1"
			]
		},
		{
			"label": "Traction, colonne constructeur",
			"value": "900 kg",
			"evidenceIds": [
				"riveteuse-puma-at-6016-reserved-20261103-1"
			]
		},
		{
			"label": "Course",
			"value": "17 mm",
			"evidenceIds": [
				"riveteuse-puma-at-6016-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "300 mm",
			"evidenceIds": [
				"riveteuse-puma-at-6016-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,5 kg",
			"evidenceIds": [
				"riveteuse-puma-at-6016-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation, en-tête contradictoire",
			"value": "Avg. Air Consumption Per Rivet Cycle ; colonnes SCFM / L/min ; valeurs 0,03 / 0,85",
			"evidenceIds": [
				"riveteuse-puma-at-6016-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-puma-cat-48-pdp-263-p1",
			"sourceUrl": "https://www.pumaair.com/product-Air-Hydraulic-Riveter-AirHydraulicRiveter.html",
			"sourceLabel": "PUMA Industrial, tableau fabricant de la famille product-Air-Hydraulic-Riveter-AirHydraulicRiveter.html",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9f17a09a737a59b7aa18143d377640146018b846b1db68fd8efb2f4c238ca2b1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "riveteuse-puma-at-6016-reserved-20261103-1",
			"sourceUrl": "https://www.pumaair.com/product-Air-Hydraulic-Riveter-AirHydraulicRiveter.html",
			"sourceLabel": "PUMA : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 9f17a09a737a59b7aa18143d377640146018b846b1db68fd8efb2f4c238ca2b1. La AT-6016 est la riveteuse 3/16 pouce de course 17 mm et longueur 300 mm ; la AT-6216 garde la même traction publiée mais course 16 mm et longueur 225 mm. L’en-tête de consommation dit par cycle de rivetage, tandis que les unités sont SCFM et L/min. Aucune lecture silencieuse de 0,85 comme litre par rivet ne résout cette incohérence. Le volume normalisé et sa pression de mesure restent non qualifiés."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-puma-cat-48-pdp-263-p1"
		],
		"workingPressureBar": [
			"october2-tools-puma-cat-48-pdp-263-p1"
		],
		"demandExplanation": [
			"october2-tools-puma-cat-48-pdp-263-p1"
		],
		"editorial": [
			"riveteuse-puma-at-6016-reserved-20261103-1"
		],
		"specifications": [
			"riveteuse-puma-at-6016-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
