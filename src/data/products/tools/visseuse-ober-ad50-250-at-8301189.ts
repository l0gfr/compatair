import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-ober-ad50-250-at-8301189",
	"slug": "visseuse-ober-ad50-250-at-8301189",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "OBER AD50-250 AT (réf. 8301189)",
	"brand": "OBER",
	"model": "AD50-250 AT",
	"mpn": "8301189",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau emploie Nl/ciclo sans définir le cycle ou sa durée. Cette valeur ne peut pas être transformée en L/min ; la pression de mesure est également à confirmer.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-ober-ad50-250-at-8301189.webp",
		"alt": "Repères techniques : OBER AD50-250 AT (réf. 8301189)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-ad50-250-at",
		"label": "Référence 8301189",
		"distinguishingAttributes": {
			"reference": "8301189",
			"Vitesse à vide": "230 tr/min",
			"Masse": "1.8 kg"
		}
	},
	"editorial": {
		"overview": "OBER AD50-250 AT (réf. 8301189). Le tableau emploie Nl/ciclo sans définir le cycle ou sa durée. Cette valeur ne peut pas être transformée en L/min ; la pression de mesure est également à confirmer. Vitesse à vide : 230 tr/min. Masse : 1.8 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 230 tr/min.",
			"Masse : 1.8 kg.",
			"Référence constructeur : 8301189."
		],
		"limitations": [
			"Le tableau emploie Nl/ciclo sans définir le cycle ou sa durée. Cette valeur ne peut pas être transformée en L/min ; la pression de mesure est également à confirmer.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "230 tr/min",
			"evidenceIds": [
				"october-b-ober-tools-p19"
			]
		},
		{
			"label": "Masse",
			"value": "1.8 kg",
			"evidenceIds": [
				"october-b-ober-tools-p19"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "8301189",
			"evidenceIds": [
				"october-b-ober-tools-p19"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie dans ce tableau.",
			"evidenceIds": [
				"october-b-ober-tools-p19"
			]
		},
		{
			"label": "Unité de consommation imprimée, hors calcul",
			"value": "Nl/ciclo ; cycle et pression à confirmer",
			"evidenceIds": [
				"october-b-ober-tools-p19"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "OBER, catalogue industriel 2020 révision 2, page PDF 19",
			"evidenceIds": [
				"october-b-ober-tools-p19"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-ober-tools-p19",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=19",
			"sourceLabel": "OBER, catalogue industriel 2020 révision 2, page PDF 19",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-ober-tools-p19"
		],
		"workingPressureBar": [
			"october-b-ober-tools-p19"
		],
		"demandExplanation": [
			"october-b-ober-tools-p19"
		]
	},
	"notes": [
		"Le tableau emploie Nl/ciclo sans définir le cycle ou sa durée. Cette valeur ne peut pas être transformée en L/min ; la pression de mesure est également à confirmer."
	]
};

export default product;
