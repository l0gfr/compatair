import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-aircat-1992",
	"slug": "cle-a-chocs-aircat-1992",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Aircat 1992",
	"brand": "Aircat",
	"model": "1992",
	"mpn": "1992",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/2-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-aircat-1992.webp",
		"alt": "Repères techniques : Aircat 1992",
		"sourceUrl": "https://continentaltoolgroup.com/product/aircat-1-straight-impact-wrench-with-8-extended-anvil/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-1992",
		"label": "Référence 1992",
		"distinguishingAttributes": {
			"reference": "1992",
			"Masse publiée": "29 lb",
			"Longueur publiée": "22 in"
		}
	},
	"editorial": {
		"overview": "Aircat 1992. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 29 lb. Longueur publiée : 22 in.",
		"verifiedFacts": [
			"Masse publiée : 29 lb.",
			"Longueur publiée : 22 in.",
			"Vitesse à vide : 5000 tr/min."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "29 lb",
			"evidenceIds": [
				"october2-tools-ctg-pdp-145-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "22 in",
			"evidenceIds": [
				"october2-tools-ctg-pdp-145-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "5000 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-145-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "1/2-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-145-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in.)",
			"value": "1/2-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-145-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-145-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "12 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-145-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-145-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/aircat-1-straight-impact-wrench-with-8-extended-anvil/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 1992",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : e914e0d57f30f3c6017703ba96135d33352b980613ed2d562c4a249750c76f0f. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-145-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-145-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-145-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-145-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
