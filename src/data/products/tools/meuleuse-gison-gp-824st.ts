import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gison-gp-824st",
	"slug": "meuleuse-gison-gp-824st",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GISON GP-824ST",
	"brand": "GISON",
	"model": "GP-824ST",
	"mpn": "GP-824ST",
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
		"src": "/images/products/meuleuse-gison-gp-824st.webp",
		"alt": "Repères techniques : GISON GP-824ST",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-824st",
		"label": "Référence GP-824ST",
		"distinguishingAttributes": {
			"reference": "GP-824ST",
			"Masse": "0.60 kg",
			"Longueur": "178 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-824ST. Consommation de régime non précisé : 610 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Masse : 0.60 kg. Longueur : 178 mm.",
		"verifiedFacts": [
			"Masse : 0.60 kg.",
			"Longueur : 178 mm.",
			"Vitesse maximale publiée : 22000 tr/min.",
			"Diamètre de flexible publié : 5 mm.",
			"Référence constructeur : GP-824ST."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "0.60 kg",
			"evidenceIds": [
				"october-b-gison-tools-p30"
			]
		},
		{
			"label": "Longueur",
			"value": "178 mm",
			"evidenceIds": [
				"october-b-gison-tools-p30"
			]
		},
		{
			"label": "Vitesse maximale publiée",
			"value": "22000 tr/min",
			"evidenceIds": [
				"october-b-gison-tools-p30"
			]
		},
		{
			"label": "Diamètre de flexible publié",
			"value": "5 mm",
			"evidenceIds": [
				"october-b-gison-tools-p30"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GP-824ST",
			"evidenceIds": [
				"october-b-gison-tools-p30"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p30"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 30",
			"evidenceIds": [
				"october-b-gison-tools-p30"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p30",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=30",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 30",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p30"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p30"
		],
		"airflowLpm": [
			"october-b-gison-tools-p30"
		],
		"airflowBasis": [
			"october-b-gison-tools-p30"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 610 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
