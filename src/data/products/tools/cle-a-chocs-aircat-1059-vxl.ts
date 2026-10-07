import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-aircat-1059-vxl",
	"slug": "cle-a-chocs-aircat-1059-vxl",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Aircat 1059-VXL",
	"brand": "Aircat",
	"model": "1059-VXL",
	"mpn": "1059-VXL",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/4-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-aircat-1059-vxl.webp",
		"alt": "Repères techniques : Aircat 1059-VXL",
		"sourceUrl": "https://continentaltoolgroup.com/product/3-8-vibrotherm-drive-composite-compact-impact-wrench/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-1059-vxl",
		"label": "Référence 1059-VXL",
		"distinguishingAttributes": {
			"reference": "1059-VXL",
			"Longueur publiée": "4.4 in",
			"Vitesse à vide": "9000 tr/min"
		}
	},
	"editorial": {
		"overview": "Aircat 1059-VXL. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Longueur publiée : 4.4 in. Vitesse à vide : 9000 tr/min.",
		"verifiedFacts": [
			"Longueur publiée : 4.4 in.",
			"Vitesse à vide : 9000 tr/min."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Longueur publiée",
			"value": "4.4 in",
			"evidenceIds": [
				"october2-tools-ctg-pdp-183-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "9000 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-183-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-183-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in.)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-183-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-183-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "8 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-183-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-183-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/3-8-vibrotherm-drive-composite-compact-impact-wrench/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 1059-VXL",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 5ecc2731e77c1418cc9847c460fe5bde09159050654450b70dd03cdb57e8aac9. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-183-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-183-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-183-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-183-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
