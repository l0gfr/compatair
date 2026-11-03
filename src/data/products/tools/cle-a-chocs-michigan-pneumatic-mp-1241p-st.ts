import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-michigan-pneumatic-mp-1241p-st",
	"slug": "cle-a-chocs-michigan-pneumatic-mp-1241p-st",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Michigan Pneumatic MP-1241P-ST",
	"brand": "Michigan Pneumatic",
	"model": "MP-1241P-ST",
	"mpn": "MP-1241P-ST",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-michigan-pneumatic-mp-1241p-st.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-1241P-ST",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/7-Impact%20Wrenches_V2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-1241p-st",
		"label": "Référence MP-1241P-ST",
		"distinguishingAttributes": {
			"reference": "MP-1241P-ST",
			"Masse publiée": "2.6 lbs",
			"Ligne technique constructeur": "MP-1241P-ST 3/8\" Friction Ring 430 ft-lbs 6\" 2.6 lbs 1/4\" 3/8\" 4 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-1241P-ST. La MP-1241P-ST est la version 3/8 pouce à bague de friction ; la MP-1243P-ST passe à 1/2 pouce avec le même maximum 430 ft-lb, longueur 6 pouces et masse 2,6 lb. Le carré distingue donc le montage, pas une puissance inventée. Les 4 CFM sont moyens.",
		"verifiedFacts": [
			"Masse publiée : 2.6 lbs.",
			"Ligne technique constructeur : MP-1241P-ST 3/8\" Friction Ring 430 ft-lbs 6\" 2.6 lbs 1/4\" 3/8\" 4 cfm.",
			"Carré : 3/8 pouce, bague de friction.",
			"Couple maximal : 430 ft-lb.",
			"Mécanisme : Twin hammer."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Données du catalogue constructeur archivé ; consommation moyenne ou de régime non précisé, sans certification du besoin maximal en charge.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "2.6 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-7-pdf-p4"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-1241P-ST 3/8\" Friction Ring 430 ft-lbs 6\" 2.6 lbs 1/4\" 3/8\" 4 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-7-pdf-p4"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-7-pdf-p4"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-7-pdf-p4"
			]
		},
		{
			"label": "Carré",
			"value": "3/8 pouce, bague de friction",
			"evidenceIds": [
				"cle-a-chocs-michigan-pneumatic-mp-1241p-st-reserved-20261103-1"
			]
		},
		{
			"label": "Couple maximal",
			"value": "430 ft-lb",
			"evidenceIds": [
				"cle-a-chocs-michigan-pneumatic-mp-1241p-st-reserved-20261103-1"
			]
		},
		{
			"label": "Mécanisme",
			"value": "Twin hammer",
			"evidenceIds": [
				"cle-a-chocs-michigan-pneumatic-mp-1241p-st-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-7-pdf-p4",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/7-Impact%20Wrenches_V2.pdf#page=4",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 7, page PDF 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : a1687b8bb3cba9d23a149afc4b20cc7e6ef0de7bd0ef325710c0b6de8d82e49d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "cle-a-chocs-michigan-pneumatic-mp-1241p-st-reserved-20261103-1",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/7-Impact%20Wrenches_V2.pdf#page=4",
			"sourceLabel": "Michigan Pneumatic : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a1687b8bb3cba9d23a149afc4b20cc7e6ef0de7bd0ef325710c0b6de8d82e49d. La MP-1241P-ST est la version 3/8 pouce à bague de friction ; la MP-1243P-ST passe à 1/2 pouce avec le même maximum 430 ft-lb, longueur 6 pouces et masse 2,6 lb. Le carré distingue donc le montage, pas une puissance inventée. Les 4 CFM sont moyens."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-7-pdf-p4"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-7-pdf-p4"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-7-pdf-p4"
		],
		"editorial": [
			"cle-a-chocs-michigan-pneumatic-mp-1241p-st-reserved-20261103-1"
		],
		"specifications": [
			"cle-a-chocs-michigan-pneumatic-mp-1241p-st-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
