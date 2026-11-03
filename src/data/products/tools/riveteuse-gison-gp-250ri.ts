import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-gison-gp-250ri",
	"slug": "riveteuse-gison-gp-250ri",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "GISON GP-250RI",
	"brand": "GISON",
	"model": "GP-250RI",
	"mpn": "GP-250RI",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-gison-gp-250ri.webp",
		"alt": "Repères techniques : GISON GP-250RI",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-250ri",
		"label": "Référence GP-250RI",
		"distinguishingAttributes": {
			"reference": "GP-250RI",
			"Masse": "2.4 kg",
			"Longueur": "278 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-250RI. La GP-250RI est la sertisseuse d’écrous à filetages impériaux ; la GP-250RM est la version métrique M3 à M12. La GP-101RN est semi-automatique, 1,55 kg et 1,5 L/cycle, contre automatique, 2,4 kg et 2 L/cycle pour cette paire. La pression 90 psi est recommandée, pas explicitement appariée à la mesure du volume par cycle.",
		"verifiedFacts": [
			"Type : Sertisseuse hydraulique d’écrous impériaux, automatique.",
			"Filetages optionnels : 6/32, 8/32, 10/24, 10/32, 1/4-20, 5/16-18, 3/8-16, 1/2-13.",
			"Matières de l’écrou : Aluminium et acier.",
			"Traction publiée : 2 179 kgf.",
			"Longueur : 278 mm.",
			"Masse : 2,4 kg.",
			"Consommation documentaire : 2,0 L/cycle, pression de mesure non explicitée."
		],
		"limitations": [
			"Recommandation de service 90 psi (6,3 kg/cm² dans le catalogue), distincte d’un point de mesure de consommation démontré. Régime non qualifié ; pas de conclusion de dimensionnement."
		]
	},
	"specifications": [
		{
			"label": "Type",
			"value": "Sertisseuse hydraulique d’écrous impériaux, automatique",
			"evidenceIds": [
				"riveteuse-gison-gp-250ri-reserved-20261103-1"
			]
		},
		{
			"label": "Filetages optionnels",
			"value": "6/32, 8/32, 10/24, 10/32, 1/4-20, 5/16-18, 3/8-16, 1/2-13",
			"evidenceIds": [
				"riveteuse-gison-gp-250ri-reserved-20261103-1"
			]
		},
		{
			"label": "Matières de l’écrou",
			"value": "Aluminium et acier",
			"evidenceIds": [
				"riveteuse-gison-gp-250ri-reserved-20261103-1"
			]
		},
		{
			"label": "Traction publiée",
			"value": "2 179 kgf",
			"evidenceIds": [
				"riveteuse-gison-gp-250ri-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "278 mm",
			"evidenceIds": [
				"riveteuse-gison-gp-250ri-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "2,4 kg",
			"evidenceIds": [
				"riveteuse-gison-gp-250ri-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "2,0 L/cycle, pression de mesure non explicitée",
			"evidenceIds": [
				"riveteuse-gison-gp-250ri-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p70",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=70",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 70",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "riveteuse-gison-gp-250ri-reserved-20261103-1",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=70",
			"sourceLabel": "GISON : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. La GP-250RI est la sertisseuse d’écrous à filetages impériaux ; la GP-250RM est la version métrique M3 à M12. La GP-101RN est semi-automatique, 1,55 kg et 1,5 L/cycle, contre automatique, 2,4 kg et 2 L/cycle pour cette paire. La pression 90 psi est recommandée, pas explicitement appariée à la mesure du volume par cycle."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p70"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p70"
		],
		"demandModel": [
			"riveteuse-gison-gp-250ri-reserved-20261103-1"
		],
		"demandExplanation": [
			"riveteuse-gison-gp-250ri-reserved-20261103-1"
		],
		"editorial": [
			"riveteuse-gison-gp-250ri-reserved-20261103-1"
		],
		"specifications": [
			"riveteuse-gison-gp-250ri-reserved-20261103-1"
		]
	},
	"notes": [
		"Volume déclaré : 2 L par cycle, pression recommandée 6,205 bar. La cadence doit être renseignée pour dimensionner."
	],
	"demandExplanation": "Le constructeur publie 2 L/cycle avec une pression de service recommandée, sans pression de mesure explicitement appariée au volume ; demande non conclusive."
};

export default product;
