import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-universal-tool-ut8789-5-332",
	"slug": "ponceuse-orbitale-universal-tool-ut8789-5-332",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Universal Tool UT8789-5-332",
	"brand": "Universal Tool",
	"model": "UT8789-5-332",
	"mpn": "UT8789-5-332",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/4-in. (Air Inlet  (NPT / BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-universal-tool-ut8789-5-332.webp",
		"alt": "Repères techniques : Universal Tool UT8789-5-332",
		"sourceUrl": "https://continentaltoolgroup.com/product/5-orbital-palm-sander-2/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "universal-tool-ut8789-5-332",
		"label": "Référence UT8789-5-332",
		"distinguishingAttributes": {
			"reference": "UT8789-5-332",
			"Vitesse à vide": "12000 tr/min",
			"Dimension du plateau": "5 in"
		}
	},
	"editorial": {
		"overview": "Universal Tool UT8789-5-332. La UT8789-5-332 est identifiée par son code complet et son plateau 5 pouces. Le champ Orbit de la fiche actuelle indique 3/16 pouce : le code 332 n’est pas décodé pour le remplacer par une valeur supposée. Les variantes CV et SV restent d’autres configurations. Les 6,2 CFM et 1,6 CFM moyens ne permettent pas un dimensionnement conclusif à pression de mesure non établie.",
		"verifiedFacts": [
			"Plateau : 5 pouces.",
			"Orbite littéralement publiée : 3/16 pouce.",
			"Vitesse à vide : 12 000 tr/min.",
			"Masse publiée : 2 lb.",
			"Consommation de régime non précisé / moyenne : 6,2 / 1,6 CFM."
		],
		"limitations": [
			"Régime et pression de mesure non suffisamment documentés ; les valeurs restent hors calcul conclusif.",
			"Les colonnes contradictoires éventuelles restent attribuées à la source, sans correction devinée."
		]
	},
	"specifications": [
		{
			"label": "Plateau",
			"value": "5 pouces",
			"evidenceIds": [
				"ponceuse-orbitale-universal-tool-ut8789-5-332-reserved-20261103-1"
			]
		},
		{
			"label": "Orbite littéralement publiée",
			"value": "3/16 pouce",
			"evidenceIds": [
				"ponceuse-orbitale-universal-tool-ut8789-5-332-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"ponceuse-orbitale-universal-tool-ut8789-5-332-reserved-20261103-1"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2 lb",
			"evidenceIds": [
				"ponceuse-orbitale-universal-tool-ut8789-5-332-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation de régime non précisé / moyenne",
			"value": "6,2 / 1,6 CFM",
			"evidenceIds": [
				"ponceuse-orbitale-universal-tool-ut8789-5-332-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-244-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/5-orbital-palm-sander-2/",
			"sourceLabel": "Universal Tool, fiche fabricant de la référence UT8789-5-332",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : f4844c5ab9990f44173c627af957b631afafb4053322f1881bf4af5a09bc0f72. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "ponceuse-orbitale-universal-tool-ut8789-5-332-reserved-20261103-1",
			"sourceUrl": "https://continentaltoolgroup.com/product/5-orbital-palm-sander-2/",
			"sourceLabel": "Universal Tool : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 491d2c1a1b07c85dc556eaac5fae88547b0437b5cc40a0292d1b60893e734a6d. La UT8789-5-332 est identifiée par son code complet et son plateau 5 pouces. Le champ Orbit de la fiche actuelle indique 3/16 pouce : le code 332 n’est pas décodé pour le remplacer par une valeur supposée. Les variantes CV et SV restent d’autres configurations. Les 6,2 CFM et 1,6 CFM moyens ne permettent pas un dimensionnement conclusif à pression de mesure non établie."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-244-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-244-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-244-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-244-p1"
		],
		"editorial": [
			"ponceuse-orbitale-universal-tool-ut8789-5-332-reserved-20261103-1"
		],
		"specifications": [
			"ponceuse-orbitale-universal-tool-ut8789-5-332-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
