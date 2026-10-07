import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-aircat-6220",
	"slug": "meuleuse-aircat-6220",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Aircat 6220",
	"brand": "Aircat",
	"model": "6220",
	"mpn": "6220",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/4-in. (Air Inlet NPT (in.))",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-aircat-6220.webp",
		"alt": "Repères techniques : Aircat 6220",
		"sourceUrl": "https://continentaltoolgroup.com/product/2inch_angle_grinder/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-6220",
		"label": "Référence 6220",
		"distinguishingAttributes": {
			"reference": "6220",
			"Masse publiée": "1.5 lb",
			"Vitesse à vide": "15000 tr/min"
		}
	},
	"editorial": {
		"overview": "Aircat 6220. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 1.5 lb. Vitesse à vide : 15000 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 1.5 lb.",
			"Vitesse à vide : 15000 tr/min.",
			"Puissance publiée : 0.5 HP."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "1.5 lb",
			"evidenceIds": [
				"october2-tools-ctg-pdp-313-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "15000 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-313-p1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "0.5 HP",
			"evidenceIds": [
				"october2-tools-ctg-pdp-313-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet NPT (in.)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-313-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in.)",
			"value": "3.5",
			"evidenceIds": [
				"october2-tools-ctg-pdp-313-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-313-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "3.5 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-313-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-313-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/2inch_angle_grinder/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 6220",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 3d61154e53dab4ff9a3114fd404667551141cf534ee5c17a66921828224950fe. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-313-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-313-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-313-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-313-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
