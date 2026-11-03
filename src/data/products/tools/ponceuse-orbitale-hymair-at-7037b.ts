import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-hymair-at-7037b",
	"slug": "ponceuse-orbitale-hymair-at-7037b",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Hymair AT-7037B",
	"brand": "Hymair",
	"model": "AT-7037B",
	"mpn": "AT-7037B",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-hymair-at-7037b.webp",
		"alt": "Repères techniques : Hymair AT-7037B",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=aGAfKUBkhgoV&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-7037b",
		"label": "Référence AT-7037B",
		"distinguishingAttributes": {
			"reference": "AT-7037B",
			"Vitesse à vide": "15,000 rpm",
			"Masse publiée (kg/lb)": "0.58/1.28"
		}
	},
	"editorial": {
		"overview": "Hymair AT-7037B. La AT-7037B reçoit le plateau autoagrippant 2 pouces. La AT-7037F est présentée comme meuleuse avec protecteur métallique pivotant, pas comme le même plateau de ponçage. Le texte du modèle B décrit une action orbitale sans en chiffrer l’orbite : aucun diamètre d’orbite n’est inventé. Les 5,25 CFM restent moyens.",
		"verifiedFacts": [
			"Plateau : 2 pouces, fixation autoagrippante.",
			"Vitesse à vide : 15 000 tr/min.",
			"Longueur : 185 mm.",
			"Masse : 0,58 kg.",
			"Consommation moyenne publiée : 5,25 CFM."
		],
		"limitations": [
			"Consommation moyenne publiée conservée dans les spécifications ; aucun débit maximal ni volume par action déduit.",
			"Catalogue constructeur identifié ; configuration et disponibilité actuelles à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Plateau",
			"value": "2 pouces, fixation autoagrippante",
			"evidenceIds": [
				"ponceuse-orbitale-hymair-at-7037b-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "15 000 tr/min",
			"evidenceIds": [
				"ponceuse-orbitale-hymair-at-7037b-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "185 mm",
			"evidenceIds": [
				"ponceuse-orbitale-hymair-at-7037b-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,58 kg",
			"evidenceIds": [
				"ponceuse-orbitale-hymair-at-7037b-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation moyenne publiée",
			"value": "5,25 CFM",
			"evidenceIds": [
				"ponceuse-orbitale-hymair-at-7037b-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-3-p8",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=aGAfKUBkhgoV&dp=GvUApKfKKUAU#page=8",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Good Level, page PDF 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 074602b959f2f30ac405df0c8ab2c02739cb7ec400ee95c071217a43d1f7ab36. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "ponceuse-orbitale-hymair-at-7037b-reserved-20261103-1",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=aGAfKUBkhgoV&dp=GvUApKfKKUAU#page=8",
			"sourceLabel": "Hymair : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 074602b959f2f30ac405df0c8ab2c02739cb7ec400ee95c071217a43d1f7ab36. La AT-7037B reçoit le plateau autoagrippant 2 pouces. La AT-7037F est présentée comme meuleuse avec protecteur métallique pivotant, pas comme le même plateau de ponçage. Le texte du modèle B décrit une action orbitale sans en chiffrer l’orbite : aucun diamètre d’orbite n’est inventé. Les 5,25 CFM restent moyens."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-3-p8"
		],
		"workingPressureBar": [
			"october2-tools-steed-3-p8"
		],
		"demandExplanation": [
			"october2-tools-steed-3-p8"
		],
		"editorial": [
			"ponceuse-orbitale-hymair-at-7037b-reserved-20261103-1"
		],
		"specifications": [
			"ponceuse-orbitale-hymair-at-7037b-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
