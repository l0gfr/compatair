import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-ober-an15-600-8304021",
	"slug": "visseuse-ober-an15-600-8304021",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "OBER AN15/600 (réf. 8304021)",
	"brand": "OBER",
	"model": "AN15/600",
	"mpn": "8304021",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau emploie Nl/ciclo sans définir le cycle ou sa durée. Cette valeur ne peut pas être transformée en L/min ; la pression de mesure est également à confirmer.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-ober-an15-600-8304021.webp",
		"alt": "Repères techniques : OBER AN15/600 (réf. 8304021)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-an15-600",
		"label": "Référence 8304021",
		"distinguishingAttributes": {
			"reference": "8304021",
			"Vitesse à vide": "595 tr/min",
			"Masse": "1.7 kg"
		}
	},
	"editorial": {
		"overview": "OBER AN15/600 (réf. 8304021). Le tableau emploie Nl/ciclo sans définir le cycle ou sa durée. Cette valeur ne peut pas être transformée en L/min ; la pression de mesure est également à confirmer. Vitesse à vide : 595 tr/min. Masse : 1.7 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 595 tr/min.",
			"Masse : 1.7 kg.",
			"Référence constructeur : 8304021."
		],
		"limitations": [
			"Le tableau emploie Nl/ciclo sans définir le cycle ou sa durée. Cette valeur ne peut pas être transformée en L/min ; la pression de mesure est également à confirmer.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "595 tr/min",
			"evidenceIds": [
				"october-b-ober-tools-p21"
			]
		},
		{
			"label": "Masse",
			"value": "1.7 kg",
			"evidenceIds": [
				"october-b-ober-tools-p21"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "8304021",
			"evidenceIds": [
				"october-b-ober-tools-p21"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie dans ce tableau.",
			"evidenceIds": [
				"october-b-ober-tools-p21"
			]
		},
		{
			"label": "Unité de consommation imprimée, hors calcul",
			"value": "Nl/ciclo ; cycle et pression à confirmer",
			"evidenceIds": [
				"october-b-ober-tools-p21"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "OBER, catalogue industriel 2020 révision 2, page PDF 21",
			"evidenceIds": [
				"october-b-ober-tools-p21"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-ober-tools-p21",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=21",
			"sourceLabel": "OBER, catalogue industriel 2020 révision 2, page PDF 21",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-ober-tools-p21"
		],
		"workingPressureBar": [
			"october-b-ober-tools-p21"
		],
		"demandExplanation": [
			"october-b-ober-tools-p21"
		]
	},
	"notes": [
		"Le tableau emploie Nl/ciclo sans définir le cycle ou sa durée. Cette valeur ne peut pas être transformée en L/min ; la pression de mesure est également à confirmer."
	]
};

export default product;
