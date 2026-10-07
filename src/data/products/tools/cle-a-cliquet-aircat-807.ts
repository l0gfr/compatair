import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-aircat-807",
	"slug": "cle-a-cliquet-aircat-807",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Aircat 807",
	"brand": "Aircat",
	"model": "807",
	"mpn": "807",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/4-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-aircat-807.webp",
		"alt": "Repères techniques : Aircat 807",
		"sourceUrl": "https://continentaltoolgroup.com/product/3-8-mini-palm-ratchet/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-807",
		"label": "Référence 807",
		"distinguishingAttributes": {
			"reference": "807",
			"Masse publiée": "1.1 lb",
			"Vitesse à vide": "300 tr/min"
		}
	},
	"editorial": {
		"overview": "Aircat 807. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 1.1 lb. Vitesse à vide : 300 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 1.1 lb.",
			"Vitesse à vide : 300 tr/min."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "1.1 lb",
			"evidenceIds": [
				"october2-tools-ctg-pdp-198-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "300 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-198-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-198-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in.)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-198-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-198-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "3 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-198-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-198-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/3-8-mini-palm-ratchet/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 807",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 082b5be97dc88845f74bc01fde9c7faf73a138c361a31d57c5df0ce3cc0cd096. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-198-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-198-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-198-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-198-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
