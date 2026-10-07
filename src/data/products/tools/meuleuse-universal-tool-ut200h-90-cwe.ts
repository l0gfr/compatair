import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-universal-tool-ut200h-90-cwe",
	"slug": "meuleuse-universal-tool-ut200h-90-cwe",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Universal Tool UT200H-90-CWE",
	"brand": "Universal Tool",
	"model": "UT200H-90-CWE",
	"mpn": "UT200H-90-CWE",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/2-in. (Air Inlet (NPT / BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-universal-tool-ut200h-90-cwe.webp",
		"alt": "Repères techniques : Universal Tool UT200H-90-CWE",
		"sourceUrl": "https://continentaltoolgroup.com/product/extended-length-horizontal-cone-wheel-grinder-2-hp/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "universal-tool-ut200h-90-cwe",
		"label": "Référence UT200H-90-CWE",
		"distinguishingAttributes": {
			"reference": "UT200H-90-CWE",
			"Masse publiée": "4.9 kg",
			"Longueur publiée": "660 mm"
		}
	},
	"editorial": {
		"overview": "Universal Tool UT200H-90-CWE. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 4.9 kg. Longueur publiée : 660 mm.",
		"verifiedFacts": [
			"Masse publiée : 4.9 kg.",
			"Longueur publiée : 660 mm.",
			"Vitesse publiée : 9000 tr/min.",
			"Puissance publiée : 2 HP.",
			"Échappement : Side."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "4.9 kg",
			"evidenceIds": [
				"october2-tools-ctg-pdp-291-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "660 mm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-291-p1"
			]
		},
		{
			"label": "Vitesse publiée",
			"value": "9000 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-291-p1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "2 HP",
			"evidenceIds": [
				"october2-tools-ctg-pdp-291-p1"
			]
		},
		{
			"label": "Échappement",
			"value": "Side",
			"evidenceIds": [
				"october2-tools-ctg-pdp-291-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT / BSP)",
			"value": "1/2-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-291-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in)",
			"value": "1/2-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-291-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Rec. Air Pressure: 90 psi-6.2 bar",
			"evidenceIds": [
				"october2-tools-ctg-pdp-291-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "40 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-291-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-291-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/extended-length-horizontal-cone-wheel-grinder-2-hp/",
			"sourceLabel": "Universal Tool, fiche fabricant de la référence UT200H-90-CWE",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b5cab1b696417b5fdf573baf74fd0d3850f7ec420d563f268cd7b76831b10bde. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-291-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-291-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-291-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-291-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
