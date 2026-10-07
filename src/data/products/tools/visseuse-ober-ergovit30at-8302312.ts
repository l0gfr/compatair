import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-ober-ergovit30at-8302312",
	"slug": "visseuse-ober-ergovit30at-8302312",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "OBER ERGOVIT30AT (réf. 8302312)",
	"brand": "OBER",
	"model": "ERGOVIT30AT",
	"mpn": "8302312",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau emploie Nl/ciclo sans définir le cycle ou sa durée. Cette valeur ne peut pas être transformée en L/min ; la pression de mesure est également à confirmer.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-ober-ergovit30at-8302312.webp",
		"alt": "Repères techniques : OBER ERGOVIT30AT (réf. 8302312)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-ergovit30at",
		"label": "Référence 8302312",
		"distinguishingAttributes": {
			"reference": "8302312",
			"Vitesse à vide": "800 tr/min",
			"Masse": "1 kg"
		}
	},
	"editorial": {
		"overview": "OBER ERGOVIT30AT (réf. 8302312). Le tableau emploie Nl/ciclo sans définir le cycle ou sa durée. Cette valeur ne peut pas être transformée en L/min ; la pression de mesure est également à confirmer. Vitesse à vide : 800 tr/min. Masse : 1 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 800 tr/min.",
			"Masse : 1 kg.",
			"Référence constructeur : 8302312."
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
				"october-b-ober-tools-p20"
			]
		},
		{
			"label": "Masse",
			"value": "1 kg",
			"evidenceIds": [
				"october-b-ober-tools-p20"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "8302312",
			"evidenceIds": [
				"october-b-ober-tools-p20"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie dans ce tableau.",
			"evidenceIds": [
				"october-b-ober-tools-p20"
			]
		},
		{
			"label": "Unité de consommation imprimée, hors calcul",
			"value": "Nl/ciclo ; cycle et pression à confirmer",
			"evidenceIds": [
				"october-b-ober-tools-p20"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "OBER, catalogue industriel 2020 révision 2, page PDF 20",
			"evidenceIds": [
				"october-b-ober-tools-p20"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-ober-tools-p20",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=20",
			"sourceLabel": "OBER, catalogue industriel 2020 révision 2, page PDF 20",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-ober-tools-p20"
		],
		"workingPressureBar": [
			"october-b-ober-tools-p20"
		],
		"demandExplanation": [
			"october-b-ober-tools-p20"
		]
	},
	"notes": [
		"Le tableau emploie Nl/ciclo sans définir le cycle ou sa durée. Cette valeur ne peut pas être transformée en L/min ; la pression de mesure est également à confirmer."
	]
};

export default product;
