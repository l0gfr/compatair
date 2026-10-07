import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-universal-tool-ut8825r",
	"slug": "perceuse-universal-tool-ut8825r",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Universal Tool UT8825R",
	"brand": "Universal Tool",
	"model": "UT8825R",
	"mpn": "UT8825R",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/4-in. (Air Inlet (NPT / BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-universal-tool-ut8825r.webp",
		"alt": "Repères techniques : Universal Tool UT8825R",
		"sourceUrl": "https://continentaltoolgroup.com/product/1-4-reversible-drill-2/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "universal-tool-ut8825r",
		"label": "Référence UT8825R",
		"distinguishingAttributes": {
			"reference": "UT8825R",
			"Masse publiée": "0.81 kg",
			"Longueur publiée": "145 mm"
		}
	},
	"editorial": {
		"overview": "Universal Tool UT8825R. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 0.81 kg. Longueur publiée : 145 mm.",
		"verifiedFacts": [
			"Masse publiée : 0.81 kg.",
			"Longueur publiée : 145 mm.",
			"Vitesse publiée : 2600 tr/min.",
			"Puissance publiée : 0.3 HP.",
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
			"value": "0.81 kg",
			"evidenceIds": [
				"october2-tools-ctg-pdp-56-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "145 mm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-56-p1"
			]
		},
		{
			"label": "Vitesse publiée",
			"value": "2600 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-56-p1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "0.3 HP",
			"evidenceIds": [
				"october2-tools-ctg-pdp-56-p1"
			]
		},
		{
			"label": "Échappement",
			"value": "Handle",
			"evidenceIds": [
				"october2-tools-ctg-pdp-56-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT / BSP)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-56-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-56-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Rec. Air Pressure: 90 psi-6.2 bar",
			"evidenceIds": [
				"october2-tools-ctg-pdp-56-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "10 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-56-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-56-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/1-4-reversible-drill-2/",
			"sourceLabel": "Universal Tool, fiche fabricant de la référence UT8825R",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 5cef434ee1e8225c6e1e20caa258462bff188d166a8865e4bfad41c70cdfc9f5. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-56-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-56-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-56-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-56-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
