import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-universal-tool-ut2005-1",
	"slug": "cle-a-cliquet-universal-tool-ut2005-1",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Universal Tool UT2005-1",
	"brand": "Universal Tool",
	"model": "UT2005-1",
	"mpn": "UT2005-1",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Consommation documentaire présente dans la fiche, mais régime/unité ou pression de mesure insuffisamment qualifiés pour le calcul.",
	"connectorSize": "1/4-in. (Air Inlet  (NPT / BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-universal-tool-ut2005-1.webp",
		"alt": "Repères techniques : Universal Tool UT2005-1",
		"sourceUrl": "https://continentaltoolgroup.com/product/3-8-mini-ratchet-2/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "universal-tool-ut2005-1",
		"label": "Référence UT2005-1",
		"distinguishingAttributes": {
			"reference": "UT2005-1",
			"Masse publiée": "1.1 kg",
			"Longueur publiée": "254 mm"
		}
	},
	"editorial": {
		"overview": "Universal Tool UT2005-1. La UT2005-1 est le cliquet 3/8 pouce de 254 mm à 70 Nm, destiné à des usages intermittents d’entretien. Les UT2003-1 et UT2000-1 sont plus courts, 184 mm. La fiche comporte bien 4 CFM : l’ancienne mention de consommation absente était inexacte. Le régime et la pression de mesure restent toutefois non établis, donc aucun débit n’entre dans le calcul.",
		"verifiedFacts": [
			"Carré : 3/8 pouce.",
			"Couple maximal : 70 Nm.",
			"Vitesse à vide : 160 tr/min.",
			"Longueur : 254 mm.",
			"Consommation publiée, régime non précisé : 4 CFM."
		],
		"limitations": [
			"Régime et pression de mesure non suffisamment documentés ; les valeurs restent hors calcul conclusif.",
			"Les colonnes contradictoires éventuelles restent attribuées à la source, sans correction devinée."
		]
	},
	"specifications": [
		{
			"label": "Carré",
			"value": "3/8 pouce",
			"evidenceIds": [
				"cle-a-cliquet-universal-tool-ut2005-1-reserved-20261103-1"
			]
		},
		{
			"label": "Couple maximal",
			"value": "70 Nm",
			"evidenceIds": [
				"cle-a-cliquet-universal-tool-ut2005-1-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "160 tr/min",
			"evidenceIds": [
				"cle-a-cliquet-universal-tool-ut2005-1-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "254 mm",
			"evidenceIds": [
				"cle-a-cliquet-universal-tool-ut2005-1-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation publiée, régime non précisé",
			"value": "4 CFM",
			"evidenceIds": [
				"cle-a-cliquet-universal-tool-ut2005-1-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-208-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/3-8-mini-ratchet-2/",
			"sourceLabel": "Universal Tool, fiche fabricant de la référence UT2005-1",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : d9536d382d6fd72422b66c4767b041b707ffa64d8474a815650fb32baea7a1f4. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "cle-a-cliquet-universal-tool-ut2005-1-reserved-20261103-1",
			"sourceUrl": "https://continentaltoolgroup.com/product/3-8-mini-ratchet-2/",
			"sourceLabel": "Universal Tool : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 8842e3104b08ba28642a98a6ac9035e1da3813b7363e11626c6fff4f583f0150. La UT2005-1 est le cliquet 3/8 pouce de 254 mm à 70 Nm, destiné à des usages intermittents d’entretien. Les UT2003-1 et UT2000-1 sont plus courts, 184 mm. La fiche comporte bien 4 CFM : l’ancienne mention de consommation absente était inexacte. Le régime et la pression de mesure restent toutefois non établis, donc aucun débit n’entre dans le calcul."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-208-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-208-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-208-p1"
		],
		"demandExplanation": [
			"cle-a-cliquet-universal-tool-ut2005-1-reserved-20261103-1"
		],
		"editorial": [
			"cle-a-cliquet-universal-tool-ut2005-1-reserved-20261103-1"
		],
		"specifications": [
			"cle-a-cliquet-universal-tool-ut2005-1-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
