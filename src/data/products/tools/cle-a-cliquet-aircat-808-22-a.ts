import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-aircat-808-22-a",
	"slug": "cle-a-cliquet-aircat-808-22-a",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Aircat 808-22-A",
	"brand": "Aircat",
	"model": "808-22-A",
	"mpn": "808-22-A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/4-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-aircat-808-22-a.webp",
		"alt": "Repères techniques : Aircat 808-22-A",
		"sourceUrl": "https://continentaltoolgroup.com/product/3-8-long-reach-ratchet-22-inch-2/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-808-22-a",
		"label": "Référence 808-22-A",
		"distinguishingAttributes": {
			"reference": "808-22-A",
			"Masse publiée": "4.53 lb",
			"Vitesse à vide": "200 tr/min"
		}
	},
	"editorial": {
		"overview": "Aircat 808-22-A. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 4.53 lb. Vitesse à vide : 200 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 4.53 lb.",
			"Vitesse à vide : 200 tr/min."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "4.53 lb",
			"evidenceIds": [
				"october2-tools-ctg-pdp-206-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "200 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-206-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-206-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in.)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-206-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-206-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-206-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-206-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/3-8-long-reach-ratchet-22-inch-2/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 808-22-A",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : e8111bfee4c5a4854021e8ae31f4b3a3501f08dcf4aa808976eddbfb7a1075eb. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-206-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-206-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-206-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-206-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
