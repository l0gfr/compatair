import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-aircat-805-ht-5",
	"slug": "cle-a-cliquet-aircat-805-ht-5",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Aircat 805-HT-5",
	"brand": "Aircat",
	"model": "805-HT-5",
	"mpn": "805-HT-5",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/4-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-aircat-805-ht-5.webp",
		"alt": "Repères techniques : Aircat 805-HT-5",
		"sourceUrl": "https://continentaltoolgroup.com/product/1-2-high-torque-ratchet/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-805-ht-5",
		"label": "Référence 805-HT-5",
		"distinguishingAttributes": {
			"reference": "805-HT-5",
			"Masse publiée": "3.3 lb",
			"Vitesse à vide": "180 tr/min"
		}
	},
	"editorial": {
		"overview": "Aircat 805-HT-5. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 3.3 lb. Vitesse à vide : 180 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 3.3 lb.",
			"Vitesse à vide : 180 tr/min."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "3.3 lb",
			"evidenceIds": [
				"october2-tools-ctg-pdp-191-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "180 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-191-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-191-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in.)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-191-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-191-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "6 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-191-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-191-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/1-2-high-torque-ratchet/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 805-HT-5",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : f2cd234c236a7df864aa5eb56911ae521529454de398ff3b01536c916e509601. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-191-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-191-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-191-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-191-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
