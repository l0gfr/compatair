import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-universal-tool-ut8645-1",
	"slug": "burineur-universal-tool-ut8645-1",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Universal Tool UT8645-1",
	"brand": "Universal Tool",
	"model": "UT8645-1",
	"mpn": "UT8645-1",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "3/8-in. (Air Inlet (NPT/BSP))",
	"recommendedHose": {
		"innerDiameterMm": 9.525
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-universal-tool-ut8645-1.webp",
		"alt": "Repères techniques : Universal Tool UT8645-1",
		"sourceUrl": "https://continentaltoolgroup.com/product/air-hammer-3/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "universal-tool-ut8645-1",
		"label": "Référence UT8645-1",
		"distinguishingAttributes": {
			"reference": "UT8645-1",
			"Masse publiée": "1.4 kg",
			"Longueur publiée": "165 mm"
		}
	},
	"editorial": {
		"overview": "Universal Tool UT8645-1. La UT8645-1 est le marteau à poignée composite, retenue à ressort et queue 0,401 pouce, destiné au burinage léger et à la découpe de tôle. Les modèles UT8674-1 et UT8651H ont d’autres corps et masses. La fiche sépare 16 CFM de régime non précisé et 4 CFM moyens ; les 90 psi recommandés ne documentent pas une pression exacte de mesure.",
		"verifiedFacts": [
			"Queue : 0,401 pouce.",
			"Course : 2-5/8 pouces.",
			"Cadence : 2 600 coups/min.",
			"Retenue : Ressort.",
			"Consommation de régime non précisé : 16 CFM.",
			"Consommation moyenne distincte : 4 CFM."
		],
		"limitations": [
			"Régime et pression de mesure non suffisamment documentés ; les valeurs restent hors calcul conclusif.",
			"Les colonnes contradictoires éventuelles restent attribuées à la source, sans correction devinée."
		]
	},
	"specifications": [
		{
			"label": "Queue",
			"value": "0,401 pouce",
			"evidenceIds": [
				"burineur-universal-tool-ut8645-1-reserved-20261103-1"
			]
		},
		{
			"label": "Course",
			"value": "2-5/8 pouces",
			"evidenceIds": [
				"burineur-universal-tool-ut8645-1-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence",
			"value": "2 600 coups/min",
			"evidenceIds": [
				"burineur-universal-tool-ut8645-1-reserved-20261103-1"
			]
		},
		{
			"label": "Retenue",
			"value": "Ressort",
			"evidenceIds": [
				"burineur-universal-tool-ut8645-1-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation de régime non précisé",
			"value": "16 CFM",
			"evidenceIds": [
				"burineur-universal-tool-ut8645-1-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation moyenne distincte",
			"value": "4 CFM",
			"evidenceIds": [
				"burineur-universal-tool-ut8645-1-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-382-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/air-hammer-3/",
			"sourceLabel": "Universal Tool, fiche fabricant de la référence UT8645-1",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9f694ce1695195848d51a67604abebb82ac0ca22000884d835d65e3a4b6b3734. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "burineur-universal-tool-ut8645-1-reserved-20261103-1",
			"sourceUrl": "https://continentaltoolgroup.com/product/air-hammer-3/",
			"sourceLabel": "Universal Tool : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 cacad48941c4a29b5ae53c53e6927ef6208dd0b34ad3b5837ad8845dfb71261a. La UT8645-1 est le marteau à poignée composite, retenue à ressort et queue 0,401 pouce, destiné au burinage léger et à la découpe de tôle. Les modèles UT8674-1 et UT8651H ont d’autres corps et masses. La fiche sépare 16 CFM de régime non précisé et 4 CFM moyens ; les 90 psi recommandés ne documentent pas une pression exacte de mesure."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-382-p1"
		],
		"recommendedHose": [
			"october2-tools-ctg-pdp-382-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-382-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-382-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-382-p1"
		],
		"editorial": [
			"burineur-universal-tool-ut8645-1-reserved-20261103-1"
		],
		"specifications": [
			"burineur-universal-tool-ut8645-1-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
