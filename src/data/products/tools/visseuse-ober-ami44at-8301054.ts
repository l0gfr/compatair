import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-ober-ami44at-8301054",
	"slug": "visseuse-ober-ami44at-8301054",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "OBER AMI44AT (réf. 8301054)",
	"brand": "OBER",
	"model": "AMI44AT",
	"mpn": "8301054",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau emploie Nl/ciclo sans définir le cycle ou sa durée. Cette valeur ne peut pas être transformée en L/min ; la pression de mesure est également à confirmer.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-ober-ami44at-8301054.webp",
		"alt": "Repères techniques : OBER AMI44AT (réf. 8301054)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-ami44at",
		"label": "Référence 8301054",
		"distinguishingAttributes": {
			"reference": "8301054",
			"Vitesse à vide": "800 tr/min",
			"Masse": "0.5 kg"
		}
	},
	"editorial": {
		"overview": "OBER AMI44AT (réf. 8301054). Le tableau emploie Nl/ciclo sans définir le cycle ou sa durée. Cette valeur ne peut pas être transformée en L/min ; la pression de mesure est également à confirmer. Vitesse à vide : 800 tr/min. Masse : 0.5 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 800 tr/min.",
			"Masse : 0.5 kg.",
			"Référence constructeur : 8301054."
		],
		"limitations": [
			"Le tableau emploie Nl/ciclo sans définir le cycle ou sa durée. Cette valeur ne peut pas être transformée en L/min ; la pression de mesure est également à confirmer.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "800 tr/min",
			"evidenceIds": [
				"october-b-ober-tools-p16"
			]
		},
		{
			"label": "Masse",
			"value": "0.5 kg",
			"evidenceIds": [
				"october-b-ober-tools-p16"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "8301054",
			"evidenceIds": [
				"october-b-ober-tools-p16"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie dans ce tableau.",
			"evidenceIds": [
				"october-b-ober-tools-p16"
			]
		},
		{
			"label": "Unité de consommation imprimée, hors calcul",
			"value": "Nl/ciclo ; cycle et pression à confirmer",
			"evidenceIds": [
				"october-b-ober-tools-p16"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "OBER, catalogue industriel 2020 révision 2, page PDF 16",
			"evidenceIds": [
				"october-b-ober-tools-p16"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-ober-tools-p16",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=16",
			"sourceLabel": "OBER, catalogue industriel 2020 révision 2, page PDF 16",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-ober-tools-p16"
		],
		"workingPressureBar": [
			"october-b-ober-tools-p16"
		],
		"demandExplanation": [
			"october-b-ober-tools-p16"
		]
	},
	"notes": [
		"Le tableau emploie Nl/ciclo sans définir le cycle ou sa durée. Cette valeur ne peut pas être transformée en L/min ; la pression de mesure est également à confirmer."
	]
};

export default product;
