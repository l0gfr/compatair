import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-aircat-1890-p",
	"slug": "cle-a-chocs-aircat-1890-p",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Aircat 1890-P",
	"brand": "Aircat",
	"model": "1890-P",
	"mpn": "1890-P",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/2-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-aircat-1890-p.webp",
		"alt": "Repères techniques : Aircat 1890-P",
		"sourceUrl": "https://continentaltoolgroup.com/product/1-two-jaw-pistol-grip-impact-wrench/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-1890-p",
		"label": "Référence 1890-P",
		"distinguishingAttributes": {
			"reference": "1890-P",
			"Masse publiée": "24 lb",
			"Vitesse à vide": "4200 tr/min"
		}
	},
	"editorial": {
		"overview": "Aircat 1890-P. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 24 lb. Vitesse à vide : 4200 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 24 lb.",
			"Vitesse à vide : 4200 tr/min."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "24 lb",
			"evidenceIds": [
				"october2-tools-ctg-pdp-147-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "4200 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-147-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "1/2-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-147-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in.)",
			"value": "1/2-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-147-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-147-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "16 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-147-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-147-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/1-two-jaw-pistol-grip-impact-wrench/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 1890-P",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 7224298b11b72c610022e13802babaac079f533ee20ef427bc46a56006ed95e7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-147-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-147-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-147-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-147-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
