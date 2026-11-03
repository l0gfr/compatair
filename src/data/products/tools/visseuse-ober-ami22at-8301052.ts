import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-ober-ami22at-8301052",
	"slug": "visseuse-ober-ami22at-8301052",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "OBER AMI22AT (réf. 8301052)",
	"brand": "OBER",
	"model": "AMI22AT",
	"mpn": "8301052",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau emploie Nl/ciclo sans définir le cycle ou sa durée. Cette valeur ne peut pas être transformée en L/min ; la pression de mesure est également à confirmer.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-ober-ami22at-8301052.webp",
		"alt": "Repères techniques : OBER AMI22AT (réf. 8301052)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-ami22at",
		"label": "Référence 8301052",
		"distinguishingAttributes": {
			"reference": "8301052",
			"Vitesse à vide": "1200 tr/min",
			"Masse": "0.5 kg"
		}
	},
	"editorial": {
		"overview": "OBER AMI22AT. La AMI22AT, code 8301052, est une visseuse droite à poussée ACCU-TRK, 1 200 tr/min et 0,4–1,8 Nm. La AMI44AT descend à800 tr/min pour 1,7–2,4 Nm ; la AMIRE22 est une autre commande/configuration. Les 300 Nl/ciclo restent dans cette unité, faute de durée et conditions de cycle.",
		"verifiedFacts": [
			"Vitesse à vide : 1200 tr/min.",
			"Masse : 0.5 kg.",
			"Référence constructeur : 8301052.",
			"Commande : Démarrage par poussée, embrayage ACCU-TRK.",
			"Couple : 0,4–1,8 Nm.",
			"Vis métal : M3–M4.",
			"Sortie : Hexagone1/4 pouce."
		],
		"limitations": [
			"Le tableau emploie Nl/ciclo sans définir le cycle ou sa durée. Cette valeur ne peut pas être transformée en L/min ; la pression de mesure est également à confirmer.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "1200 tr/min",
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
			"value": "8301052",
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
		},
		{
			"label": "Commande",
			"value": "Démarrage par poussée, embrayage ACCU-TRK",
			"evidenceIds": [
				"visseuse-ober-ami22at-8301052-reserved-20261103-1"
			]
		},
		{
			"label": "Couple",
			"value": "0,4–1,8 Nm",
			"evidenceIds": [
				"visseuse-ober-ami22at-8301052-reserved-20261103-1"
			]
		},
		{
			"label": "Vis métal",
			"value": "M3–M4",
			"evidenceIds": [
				"visseuse-ober-ami22at-8301052-reserved-20261103-1"
			]
		},
		{
			"label": "Sortie",
			"value": "Hexagone1/4 pouce",
			"evidenceIds": [
				"visseuse-ober-ami22at-8301052-reserved-20261103-1"
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
		},
		{
			"id": "visseuse-ober-ami22at-8301052-reserved-20261103-1",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=16",
			"sourceLabel": "OBER : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. La AMI22AT, code 8301052, est une visseuse droite à poussée ACCU-TRK, 1 200 tr/min et 0,4–1,8 Nm. La AMI44AT descend à800 tr/min pour 1,7–2,4 Nm ; la AMIRE22 est une autre commande/configuration. Les 300 Nl/ciclo restent dans cette unité, faute de durée et conditions de cycle."
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
		],
		"editorial": [
			"visseuse-ober-ami22at-8301052-reserved-20261103-1"
		],
		"specifications": [
			"visseuse-ober-ami22at-8301052-reserved-20261103-1"
		]
	},
	"notes": [
		"Le tableau emploie Nl/ciclo sans définir le cycle ou sa durée. Cette valeur ne peut pas être transformée en L/min ; la pression de mesure est également à confirmer."
	]
};

export default product;
