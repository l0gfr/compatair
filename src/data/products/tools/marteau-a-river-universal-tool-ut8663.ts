import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "marteau-a-river-universal-tool-ut8663",
	"slug": "marteau-a-river-universal-tool-ut8663",
	"categoryId": "marteau-a-river",
	"category": "marteau-a-river",
	"label": "Universal Tool UT8663",
	"brand": "Universal Tool",
	"model": "UT8663",
	"mpn": "UT8663",
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
		"src": "/images/products/marteau-a-river-universal-tool-ut8663.webp",
		"alt": "Repères techniques : Universal Tool UT8663",
		"sourceUrl": "https://continentaltoolgroup.com/product/aero-riveting-hammer-2/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "universal-tool-ut8663",
		"label": "Référence UT8663",
		"distinguishingAttributes": {
			"reference": "UT8663",
			"Masse publiée": "1.3 kg",
			"Longueur publiée": "170 mm"
		}
	},
	"editorial": {
		"overview": "Universal Tool UT8663. La UT8663 est le marteau de rivetage 3X, corps aluminium et retenue à ressort. La version UT8663-TC possède un autre équipement de retenue, et la UT8664 un corps plus long ; la capacité de rivet n’est pas déduite de la seule classe 3X. Les 28 CFM et 7,8 CFM moyens restent documentaires, sans pression de mesure appariée.",
		"verifiedFacts": [
			"Classe : Marteau de rivetage aéronautique 3X.",
			"Queue : 0,401 pouce.",
			"Piston : 1/2 pouce.",
			"Cadence : 2 160 coups/min.",
			"Consommation de régime non précisé : 28 CFM.",
			"Consommation moyenne distincte : 7,8 CFM."
		],
		"limitations": [
			"Régime et pression de mesure non suffisamment documentés ; les valeurs restent hors calcul conclusif.",
			"Les colonnes contradictoires éventuelles restent attribuées à la source, sans correction devinée."
		]
	},
	"specifications": [
		{
			"label": "Classe",
			"value": "Marteau de rivetage aéronautique 3X",
			"evidenceIds": [
				"marteau-a-river-universal-tool-ut8663-reserved-20261103-1"
			]
		},
		{
			"label": "Queue",
			"value": "0,401 pouce",
			"evidenceIds": [
				"marteau-a-river-universal-tool-ut8663-reserved-20261103-1"
			]
		},
		{
			"label": "Piston",
			"value": "1/2 pouce",
			"evidenceIds": [
				"marteau-a-river-universal-tool-ut8663-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence",
			"value": "2 160 coups/min",
			"evidenceIds": [
				"marteau-a-river-universal-tool-ut8663-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation de régime non précisé",
			"value": "28 CFM",
			"evidenceIds": [
				"marteau-a-river-universal-tool-ut8663-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation moyenne distincte",
			"value": "7,8 CFM",
			"evidenceIds": [
				"marteau-a-river-universal-tool-ut8663-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-222-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/aero-riveting-hammer-2/",
			"sourceLabel": "Universal Tool, fiche fabricant de la référence UT8663",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 2cb5d9ee52192be12b53df10119ac25e43f4a1832e404cdc2f3e8c059fcb2817. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "marteau-a-river-universal-tool-ut8663-reserved-20261103-1",
			"sourceUrl": "https://continentaltoolgroup.com/product/aero-riveting-hammer-2/",
			"sourceLabel": "Universal Tool : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 2220b6653acf76929181b701bc0c93c6696fc0de18764da513c5202603b190d0. La UT8663 est le marteau de rivetage 3X, corps aluminium et retenue à ressort. La version UT8663-TC possède un autre équipement de retenue, et la UT8664 un corps plus long ; la capacité de rivet n’est pas déduite de la seule classe 3X. Les 28 CFM et 7,8 CFM moyens restent documentaires, sans pression de mesure appariée."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-222-p1"
		],
		"recommendedHose": [
			"october2-tools-ctg-pdp-222-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-222-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-222-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-222-p1"
		],
		"editorial": [
			"marteau-a-river-universal-tool-ut8663-reserved-20261103-1"
		],
		"specifications": [
			"marteau-a-river-universal-tool-ut8663-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
