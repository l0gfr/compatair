import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-aircat-6270",
	"slug": "meuleuse-aircat-6270",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Aircat 6270",
	"brand": "Aircat",
	"model": "6270",
	"mpn": "6270",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/4-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-aircat-6270.webp",
		"alt": "Repères techniques : Aircat 6270",
		"sourceUrl": "https://continentaltoolgroup.com/product/1-0-hp-composite-extended-straight-die-grinder/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-6270",
		"label": "Référence 6270",
		"distinguishingAttributes": {
			"reference": "6270",
			"Masse publiée": "3.1 lb",
			"Vitesse à vide": "20000 tr/min"
		}
	},
	"editorial": {
		"overview": "Aircat 6270. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 3.1 lb. Vitesse à vide : 20000 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 3.1 lb.",
			"Vitesse à vide : 20000 tr/min.",
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
			"value": "3.1 lb",
			"evidenceIds": [
				"october2-tools-ctg-pdp-134-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "20000 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-134-p1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "1 HP",
			"evidenceIds": [
				"october2-tools-ctg-pdp-134-p1"
			]
		},
		{
			"label": "Échappement",
			"value": "Rear",
			"evidenceIds": [
				"october2-tools-ctg-pdp-134-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-134-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in.)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-134-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-134-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "6 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-134-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-134-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/1-0-hp-composite-extended-straight-die-grinder/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 6270",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 5aea03f0b7cfc432ccfeb01a521e686a738f4e6cc99dc7da0e31c1761cd3b81a. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-134-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-134-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-134-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-134-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
