import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-ober-ergovit70dl-at-8301187",
	"slug": "visseuse-ober-ergovit70dl-at-8301187",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "OBER ERGOVIT70DL AT (réf. 8301187)",
	"brand": "OBER",
	"model": "ERGOVIT70DL AT",
	"mpn": "8301187",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau emploie Nl/ciclo sans définir le cycle ou sa durée. Cette valeur ne peut pas être transformée en L/min ; la pression de mesure est également à confirmer.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-ober-ergovit70dl-at-8301187.webp",
		"alt": "Repères techniques : OBER ERGOVIT70DL AT (réf. 8301187)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-ergovit70dl-at",
		"label": "Référence 8301187",
		"distinguishingAttributes": {
			"reference": "8301187",
			"Vitesse à vide": "310 tr/min",
			"Masse": "1.25 kg"
		}
	},
	"editorial": {
		"overview": "OBER ERGOVIT70DL AT (réf. 8301187). Le tableau emploie Nl/ciclo sans définir le cycle ou sa durée. Cette valeur ne peut pas être transformée en L/min ; la pression de mesure est également à confirmer. Vitesse à vide : 310 tr/min. Masse : 1.25 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 310 tr/min.",
			"Masse : 1.25 kg.",
			"Référence constructeur : 8301187."
		],
		"limitations": [
			"Le tableau emploie Nl/ciclo sans définir le cycle ou sa durée. Cette valeur ne peut pas être transformée en L/min ; la pression de mesure est également à confirmer.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "310 tr/min",
			"evidenceIds": [
				"october-b-ober-tools-p18"
			]
		},
		{
			"label": "Masse",
			"value": "1.25 kg",
			"evidenceIds": [
				"october-b-ober-tools-p18"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "8301187",
			"evidenceIds": [
				"october-b-ober-tools-p18"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie dans ce tableau.",
			"evidenceIds": [
				"october-b-ober-tools-p18"
			]
		},
		{
			"label": "Unité de consommation imprimée, hors calcul",
			"value": "Nl/ciclo ; cycle et pression à confirmer",
			"evidenceIds": [
				"october-b-ober-tools-p18"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "OBER, catalogue industriel 2020 révision 2, page PDF 18",
			"evidenceIds": [
				"october-b-ober-tools-p18"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-ober-tools-p18",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=18",
			"sourceLabel": "OBER, catalogue industriel 2020 révision 2, page PDF 18",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-ober-tools-p18"
		],
		"workingPressureBar": [
			"october-b-ober-tools-p18"
		],
		"demandExplanation": [
			"october-b-ober-tools-p18"
		]
	},
	"notes": [
		"Le tableau emploie Nl/ciclo sans définir le cycle ou sa durée. Cette valeur ne peut pas être transformée en L/min ; la pression de mesure est également à confirmer."
	]
};

export default product;
