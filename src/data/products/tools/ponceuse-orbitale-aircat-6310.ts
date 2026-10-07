import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-aircat-6310",
	"slug": "ponceuse-orbitale-aircat-6310",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Aircat 6310",
	"brand": "Aircat",
	"model": "6310",
	"mpn": "6310",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/4-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-aircat-6310.webp",
		"alt": "Repères techniques : Aircat 6310",
		"sourceUrl": "https://continentaltoolgroup.com/product/6-composite-dual-action-sander-psa/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-6310",
		"label": "Référence 6310",
		"distinguishingAttributes": {
			"reference": "6310",
			"Masse publiée": "2.3 lb",
			"Vitesse à vide": "10000 tr/min"
		}
	},
	"editorial": {
		"overview": "Aircat 6310. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 2.3 lb. Vitesse à vide : 10000 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 2.3 lb.",
			"Vitesse à vide : 10000 tr/min.",
			"Échappement : Rear."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "2.3 lb",
			"evidenceIds": [
				"october2-tools-ctg-pdp-331-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "10000 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-331-p1"
			]
		},
		{
			"label": "Échappement",
			"value": "Rear",
			"evidenceIds": [
				"october2-tools-ctg-pdp-331-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-331-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-331-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-331-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "2.5 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-331-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-331-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/6-composite-dual-action-sander-psa/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 6310",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 0b8806a2cc701ee7ae5f78a814a3a30a96de88122fd18fa136e8a94b222d6f5c. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-331-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-331-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-331-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-331-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
