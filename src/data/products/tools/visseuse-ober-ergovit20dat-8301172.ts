import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-ober-ergovit20dat-8301172",
	"slug": "visseuse-ober-ergovit20dat-8301172",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "OBER ERGOVIT20DAT (réf. 8301172)",
	"brand": "OBER",
	"model": "ERGOVIT20DAT",
	"mpn": "8301172",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau emploie Nl/ciclo sans définir le cycle ou sa durée. Cette valeur ne peut pas être transformée en L/min ; la pression de mesure est également à confirmer.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-ober-ergovit20dat-8301172.webp",
		"alt": "Repères techniques : OBER ERGOVIT20DAT (réf. 8301172)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-ergovit20dat",
		"label": "Référence 8301172",
		"distinguishingAttributes": {
			"reference": "8301172",
			"Vitesse à vide": "2200 tr/min",
			"Masse": "0.95 kg"
		}
	},
	"editorial": {
		"overview": "OBER ERGOVIT20DAT (réf. 8301172). Le tableau emploie Nl/ciclo sans définir le cycle ou sa durée. Cette valeur ne peut pas être transformée en L/min ; la pression de mesure est également à confirmer. Vitesse à vide : 2200 tr/min. Masse : 0.95 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 2200 tr/min.",
			"Masse : 0.95 kg.",
			"Référence constructeur : 8301172."
		],
		"limitations": [
			"Le tableau emploie Nl/ciclo sans définir le cycle ou sa durée. Cette valeur ne peut pas être transformée en L/min ; la pression de mesure est également à confirmer.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "2200 tr/min",
			"evidenceIds": [
				"october-b-ober-tools-p17"
			]
		},
		{
			"label": "Masse",
			"value": "0.95 kg",
			"evidenceIds": [
				"october-b-ober-tools-p17"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "8301172",
			"evidenceIds": [
				"october-b-ober-tools-p17"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie dans ce tableau.",
			"evidenceIds": [
				"october-b-ober-tools-p17"
			]
		},
		{
			"label": "Unité de consommation imprimée, hors calcul",
			"value": "Nl/ciclo ; cycle et pression à confirmer",
			"evidenceIds": [
				"october-b-ober-tools-p17"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "OBER, catalogue industriel 2020 révision 2, page PDF 17",
			"evidenceIds": [
				"october-b-ober-tools-p17"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-ober-tools-p17",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=17",
			"sourceLabel": "OBER, catalogue industriel 2020 révision 2, page PDF 17",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-ober-tools-p17"
		],
		"workingPressureBar": [
			"october-b-ober-tools-p17"
		],
		"demandExplanation": [
			"october-b-ober-tools-p17"
		]
	},
	"notes": [
		"Le tableau emploie Nl/ciclo sans définir le cycle ou sa durée. Cette valeur ne peut pas être transformée en L/min ; la pression de mesure est également à confirmer."
	]
};

export default product;
