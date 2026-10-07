import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-aircat-805-ht-22",
	"slug": "cle-a-cliquet-aircat-805-ht-22",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Aircat 805-HT-22",
	"brand": "Aircat",
	"model": "805-HT-22",
	"mpn": "805-HT-22",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/4-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-aircat-805-ht-22.webp",
		"alt": "Repères techniques : Aircat 805-HT-22",
		"sourceUrl": "https://continentaltoolgroup.com/product/3-8-long-reach-ratchet-wrench/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-805-ht-22",
		"label": "Référence 805-HT-22",
		"distinguishingAttributes": {
			"reference": "805-HT-22",
			"Masse publiée": "5.16 lb",
			"Vitesse à vide": "200 tr/min"
		}
	},
	"editorial": {
		"overview": "Aircat 805-HT-22. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 5.16 lb. Vitesse à vide : 200 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 5.16 lb.",
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
			"value": "5.16 lb",
			"evidenceIds": [
				"october2-tools-ctg-pdp-207-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "200 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-207-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-207-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in.)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-207-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-207-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-207-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-207-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/3-8-long-reach-ratchet-wrench/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 805-HT-22",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 8ef17a99baf50028b816232ff505e3e0b1cf0cf06b4148ba26ef00f5f57691d8. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-207-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-207-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-207-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-207-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
