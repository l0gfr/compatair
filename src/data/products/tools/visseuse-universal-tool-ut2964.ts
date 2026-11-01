import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-universal-tool-ut2964",
	"slug": "visseuse-universal-tool-ut2964",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Universal Tool UT2964",
	"brand": "Universal Tool",
	"model": "UT2964",
	"mpn": "UT2964",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-universal-tool-ut2964.webp",
		"alt": "Repères techniques : Universal Tool UT2964",
		"sourceUrl": "https://continentaltoolgroup.com/product/adjustable-clutch-screwdriver-3/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "universal-tool-ut2964",
		"label": "Référence UT2964",
		"distinguishingAttributes": {
			"reference": "UT2964",
			"Masse publiée": "1.1 kg",
			"Longueur publiée": "190 mm"
		}
	},
	"editorial": {
		"overview": "Universal Tool UT2964. Les deux paires d’unités publiées sont incompatibles. Aucune conversion ne sert à choisir une valeur corrigée ; la consommation reste hors calcul et ces cotes demandent confirmation du fabricant. Puissance publiée, discordance : 0,05 hp et 0,37 kW dans la même fiche. Longueur publiée, discordance : 8,5 pouces et 190 mm dans la même fiche.",
		"verifiedFacts": [
			"Masse publiée : 1.1 kg.",
			"Longueur publiée : 190 mm.",
			"Puissance publiée : 0.05 HP.",
			"Échappement : Handle.",
			"Puissance publiée, discordance : 0,05 hp et 0,37 kW dans la même fiche.",
			"Longueur publiée, discordance : 8,5 pouces et 190 mm dans la même fiche."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "1.1 kg",
			"evidenceIds": [
				"october2-tools-ctg-pdp-379-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "190 mm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-379-p1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "0.05 HP",
			"evidenceIds": [
				"october2-tools-ctg-pdp-379-p1"
			]
		},
		{
			"label": "Échappement",
			"value": "Handle",
			"evidenceIds": [
				"october2-tools-ctg-pdp-379-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-379-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-379-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "16 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-379-p1"
			]
		},
		{
			"label": "Puissance publiée, discordance",
			"value": "0,05 hp et 0,37 kW dans la même fiche",
			"evidenceIds": [
				"visseuse-universal-tool-ut2964-reserved-20261101-1"
			]
		},
		{
			"label": "Longueur publiée, discordance",
			"value": "8,5 pouces et 190 mm dans la même fiche",
			"evidenceIds": [
				"visseuse-universal-tool-ut2964-reserved-20261101-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-379-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/adjustable-clutch-screwdriver-3/",
			"sourceLabel": "Universal Tool, fiche fabricant de la référence UT2964",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 852ca888c74865f30963448e403d421f12a80c379b20f8efe0f012b65fa5b72e. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "visseuse-universal-tool-ut2964-reserved-20261101-1",
			"sourceUrl": "https://continentaltoolgroup.com/product/adjustable-clutch-screwdriver-3/",
			"sourceLabel": "Universal Tool : revue factuelle du 1 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-01",
			"confidence": "B",
			"notes": "Corps complet GET HTTP200 SHA-256 c978a1dd076dab73afdffe2da8bc27b8f96084dd7a29e28a6fecbeca22de3445. Lecture de la référence et des configurations voisines, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-ctg-pdp-379-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-379-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-379-p1"
		],
		"editorial": [
			"visseuse-universal-tool-ut2964-reserved-20261101-1"
		],
		"specifications": [
			"visseuse-universal-tool-ut2964-reserved-20261101-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
