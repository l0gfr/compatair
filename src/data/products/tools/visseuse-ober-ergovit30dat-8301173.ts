import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-ober-ergovit30dat-8301173",
	"slug": "visseuse-ober-ergovit30dat-8301173",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "OBER ERGOVIT30DAT (réf. 8301173)",
	"brand": "OBER",
	"model": "ERGOVIT30DAT",
	"mpn": "8301173",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau emploie Nl/ciclo sans définir le cycle ou sa durée. Cette valeur ne peut pas être transformée en L/min ; la pression de mesure est également à confirmer.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-ober-ergovit30dat-8301173.webp",
		"alt": "Repères techniques : OBER ERGOVIT30DAT (réf. 8301173)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-ergovit30dat",
		"label": "Référence 8301173",
		"distinguishingAttributes": {
			"reference": "8301173",
			"Vitesse à vide": "750 tr/min",
			"Masse": "1.25 kg"
		}
	},
	"editorial": {
		"overview": "OBER ERGOVIT30DAT (réf. 8301173). Le tableau emploie Nl/ciclo sans définir le cycle ou sa durée. Cette valeur ne peut pas être transformée en L/min ; la pression de mesure est également à confirmer. Vitesse à vide : 750 tr/min. Masse : 1.25 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 750 tr/min.",
			"Masse : 1.25 kg.",
			"Référence constructeur : 8301173."
		],
		"limitations": [
			"Le tableau emploie Nl/ciclo sans définir le cycle ou sa durée. Cette valeur ne peut pas être transformée en L/min ; la pression de mesure est également à confirmer.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "750 tr/min",
			"evidenceIds": [
				"october-b-ober-tools-p17"
			]
		},
		{
			"label": "Masse",
			"value": "1.25 kg",
			"evidenceIds": [
				"october-b-ober-tools-p17"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "8301173",
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
