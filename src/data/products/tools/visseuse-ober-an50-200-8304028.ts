import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-ober-an50-200-8304028",
	"slug": "visseuse-ober-an50-200-8304028",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "OBER AN50/200 (réf. 8304028)",
	"brand": "OBER",
	"model": "AN50/200",
	"mpn": "8304028",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau emploie Nl/ciclo sans définir le cycle ou sa durée. Cette valeur ne peut pas être transformée en L/min ; la pression de mesure est également à confirmer.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-ober-an50-200-8304028.webp",
		"alt": "Repères techniques : OBER AN50/200 (réf. 8304028)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-an50-200",
		"label": "Référence 8304028",
		"distinguishingAttributes": {
			"reference": "8304028",
			"Vitesse à vide": "200 tr/min",
			"Masse": "2.6 kg"
		}
	},
	"editorial": {
		"overview": "OBER AN50/200 (réf. 8304028). Le tableau emploie Nl/ciclo sans définir le cycle ou sa durée. Cette valeur ne peut pas être transformée en L/min ; la pression de mesure est également à confirmer. Vitesse à vide : 200 tr/min. Masse : 2.6 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 200 tr/min.",
			"Masse : 2.6 kg.",
			"Référence constructeur : 8304028."
		],
		"limitations": [
			"Le tableau emploie Nl/ciclo sans définir le cycle ou sa durée. Cette valeur ne peut pas être transformée en L/min ; la pression de mesure est également à confirmer.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "200 tr/min",
			"evidenceIds": [
				"october-b-ober-tools-p22"
			]
		},
		{
			"label": "Masse",
			"value": "2.6 kg",
			"evidenceIds": [
				"october-b-ober-tools-p22"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "8304028",
			"evidenceIds": [
				"october-b-ober-tools-p22"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie dans ce tableau.",
			"evidenceIds": [
				"october-b-ober-tools-p22"
			]
		},
		{
			"label": "Unité de consommation imprimée, hors calcul",
			"value": "Nl/ciclo ; cycle et pression à confirmer",
			"evidenceIds": [
				"october-b-ober-tools-p22"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "OBER, catalogue industriel 2020 révision 2, page PDF 22",
			"evidenceIds": [
				"october-b-ober-tools-p22"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-ober-tools-p22",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=22",
			"sourceLabel": "OBER, catalogue industriel 2020 révision 2, page PDF 22",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-ober-tools-p22"
		],
		"workingPressureBar": [
			"october-b-ober-tools-p22"
		],
		"demandExplanation": [
			"october-b-ober-tools-p22"
		]
	},
	"notes": [
		"Le tableau emploie Nl/ciclo sans définir le cycle ou sa durée. Cette valeur ne peut pas être transformée en L/min ; la pression de mesure est également à confirmer."
	]
};

export default product;
