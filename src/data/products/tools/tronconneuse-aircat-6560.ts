import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "tronconneuse-aircat-6560",
	"slug": "tronconneuse-aircat-6560",
	"categoryId": "tronconneuse",
	"category": "tronconneuse",
	"label": "Aircat 6560",
	"brand": "Aircat",
	"model": "6560",
	"mpn": "6560",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/4-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/tronconneuse-aircat-6560.webp",
		"alt": "Repères techniques : Aircat 6560",
		"sourceUrl": "https://continentaltoolgroup.com/product/1-hp-4-composite-cut-off-tool/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-6560",
		"label": "Référence 6560",
		"distinguishingAttributes": {
			"reference": "6560",
			"Masse publiée": "1.8 lb",
			"Vitesse à vide": "14000 tr/min"
		}
	},
	"editorial": {
		"overview": "Aircat 6560. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 1.8 lb. Vitesse à vide : 14000 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 1.8 lb.",
			"Vitesse à vide : 14000 tr/min.",
			"Puissance publiée : 1 HP.",
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
			"value": "1.8 lb",
			"evidenceIds": [
				"october2-tools-ctg-pdp-20-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "14000 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-20-p1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "1 HP",
			"evidenceIds": [
				"october2-tools-ctg-pdp-20-p1"
			]
		},
		{
			"label": "Échappement",
			"value": "Rear",
			"evidenceIds": [
				"october2-tools-ctg-pdp-20-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-20-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in.)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-20-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-20-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "4.2 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-20-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-20-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/1-hp-4-composite-cut-off-tool/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 6560",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 6271fcb403282cd935ff30ac3338168dcfa7a6124718439ee30ce3614f1b803c. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-20-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-20-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-20-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-20-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
