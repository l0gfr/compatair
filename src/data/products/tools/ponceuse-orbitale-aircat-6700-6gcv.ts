import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-aircat-6700-6gcv",
	"slug": "ponceuse-orbitale-aircat-6700-6gcv",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Aircat 6700-6GCV",
	"brand": "Aircat",
	"model": "6700-6GCV",
	"mpn": "6700-6GCV",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/4-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-aircat-6700-6gcv.webp",
		"alt": "Repères techniques : Aircat 6700-6GCV",
		"sourceUrl": "https://continentaltoolgroup.com/product/central-vac-geared-planetary-sander-2/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-6700-6gcv",
		"label": "Référence 6700-6GCV",
		"distinguishingAttributes": {
			"reference": "6700-6GCV",
			"Masse publiée": "3.4 lb",
			"Vitesse à vide": "900 tr/min"
		}
	},
	"editorial": {
		"overview": "Aircat 6700-6GCV. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 3.4 lb. Vitesse à vide : 900 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 3.4 lb.",
			"Vitesse à vide : 900 tr/min.",
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
			"value": "3.4 lb",
			"evidenceIds": [
				"october2-tools-ctg-pdp-334-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "900 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-334-p1"
			]
		},
		{
			"label": "Échappement",
			"value": "Rear",
			"evidenceIds": [
				"october2-tools-ctg-pdp-334-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-334-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in.)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-334-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-334-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "3 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-334-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-334-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/central-vac-geared-planetary-sander-2/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 6700-6GCV",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 2f2c29b517d16c4aeebd323b1f71f7717b3c570ff3f98426b214f0ac4e22160e. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-334-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-334-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-334-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-334-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
