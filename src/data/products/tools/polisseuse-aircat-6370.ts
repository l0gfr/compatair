import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "polisseuse-aircat-6370",
	"slug": "polisseuse-aircat-6370",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "Aircat 6370",
	"brand": "Aircat",
	"model": "6370",
	"mpn": "6370",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/4-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/polisseuse-aircat-6370.webp",
		"alt": "Repères techniques : Aircat 6370",
		"sourceUrl": "https://continentaltoolgroup.com/product/6-hp-composite-low-weight-vertical-polisher/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-6370",
		"label": "Référence 6370",
		"distinguishingAttributes": {
			"reference": "6370",
			"Masse publiée": "2.5 lb",
			"Vitesse à vide": "3500 tr/min"
		}
	},
	"editorial": {
		"overview": "Aircat 6370. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 2.5 lb. Vitesse à vide : 3500 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 2.5 lb.",
			"Vitesse à vide : 3500 tr/min.",
			"Échappement : Side Handle."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "2.5 lb",
			"evidenceIds": [
				"october2-tools-ctg-pdp-126-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "3500 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-126-p1"
			]
		},
		{
			"label": "Échappement",
			"value": "Side Handle",
			"evidenceIds": [
				"october2-tools-ctg-pdp-126-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-126-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-126-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-126-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "12 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-126-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-126-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/6-hp-composite-low-weight-vertical-polisher/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 6370",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 3aef5359640e325963eabd639feee85efe9a44e43dcc6b2c5de4d2c1ab1da671. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-126-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-126-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-126-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-126-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
