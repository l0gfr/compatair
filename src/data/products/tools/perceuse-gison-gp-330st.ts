import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gison-gp-330st",
	"slug": "perceuse-gison-gp-330st",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GISON GP-330ST",
	"brand": "GISON",
	"model": "GP-330ST",
	"mpn": "GP-330ST",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 610,
		"typical": 610,
		"max": 610
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gison-gp-330st-technical-20261116-reviews.svg",
		"alt": "Repères techniques : GISON GP-330ST",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "gison-gp-330st",
		"label": "Référence GP-330ST",
		"distinguishingAttributes": {
			"reference": "GP-330ST",
			"Masse": "1.08 kg",
			"Longueur": "218 mm"
		}
	},
	"editorial": {
		"overview": "La GP-330ST est une perceuse droite à mandrin 3/8 pouce, 2 600 tr/min et 218 mm. La STN garde ce format avec 3 600 tr/min et 0,64 m³/min publiés, contre 0,61 pour la ST. La GP-330 standard est plus longue à 225 mm et tourne à 2 500 tr/min. Les consommations ne précisent pas leur régime ; elles restent hors calcul de capacité continue.",
		"verifiedFacts": [
			"Masse : 1.08 kg.",
			"Longueur : 218 mm.",
			"Vitesse maximale publiée : 2600 tr/min.",
			"Diamètre de flexible publié : 6.5 mm.",
			"Référence constructeur : GP-330ST."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "1.08 kg",
			"evidenceIds": [
				"october-b-gison-tools-p59"
			]
		},
		{
			"label": "Longueur",
			"value": "218 mm",
			"evidenceIds": [
				"october-b-gison-tools-p59"
			]
		},
		{
			"label": "Vitesse maximale publiée",
			"value": "2600 tr/min",
			"evidenceIds": [
				"october-b-gison-tools-p59"
			]
		},
		{
			"label": "Diamètre de flexible publié",
			"value": "6.5 mm",
			"evidenceIds": [
				"october-b-gison-tools-p59"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GP-330ST",
			"evidenceIds": [
				"october-b-gison-tools-p59"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p59"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 59",
			"evidenceIds": [
				"october-b-gison-tools-p59"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p59",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=59",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 59",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:perceuse-gison-gp-330st:0",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
			"sourceLabel": "GISON, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La GP-330ST est une perceuse droite à mandrin 3/8 pouce, 2 600 tr/min et 218 mm. La STN garde ce format avec 3 600 tr/min et 0,64 m³/min publiés, contre 0,61 pour la ST. La GP-330 standard est plus longue à 225 mm et tourne à 2 500 tr/min. Les consommations ne précisent pas leur régime ; elles restent hors calcul de capacité continue. GET complet SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Pages PDF lues : 59."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p59"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p59"
		],
		"airflowLpm": [
			"october-b-gison-tools-p59"
		],
		"airflowBasis": [
			"october-b-gison-tools-p59"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 610 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
