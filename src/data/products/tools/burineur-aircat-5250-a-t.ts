import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-aircat-5250-a-t",
	"slug": "burineur-aircat-5250-a-t",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Aircat 5250-A-T",
	"brand": "Aircat",
	"model": "5250-A-T",
	"mpn": "5250-A-T",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-aircat-5250-a-t.webp",
		"alt": "Repères techniques : Aircat 5250-A-T",
		"sourceUrl": "https://continentaltoolgroup.com/product/aircat-401-shank-super-duty-air-hammer/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-5250-a-t",
		"label": "Référence 5250-A-T",
		"distinguishingAttributes": {
			"reference": "5250-A-T",
			"Masse publiée": "5.38 lb",
			"Type de retenue": "Quick-change"
		}
	},
	"editorial": {
		"overview": "Aircat 5250-A-T. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 5.38 lb. Type de retenue : Quick-change.",
		"verifiedFacts": [
			"Masse publiée : 5.38 lb.",
			"Type de retenue : Quick-change."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "5.38 lb",
			"evidenceIds": [
				"october2-tools-ctg-pdp-26-p1"
			]
		},
		{
			"label": "Type de retenue",
			"value": "Quick-change",
			"evidenceIds": [
				"october2-tools-ctg-pdp-26-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in.)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-26-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-26-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "4.2 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-26-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-26-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/aircat-401-shank-super-duty-air-hammer/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 5250-A-T",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : e5fb1b562b5cf51c4af914933520c39282c710cdfbcda0d8e8c72954cd0d102d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-ctg-pdp-26-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-26-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-26-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
