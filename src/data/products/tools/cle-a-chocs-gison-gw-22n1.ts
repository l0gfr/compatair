import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-gison-gw-22n1",
	"slug": "cle-a-chocs-gison-gw-22n1",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "GISON GW-22N1",
	"brand": "GISON",
	"model": "GW-22N1",
	"mpn": "GW-22N1",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 630,
		"typical": 630,
		"max": 630
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-gison-gw-22n1.webp",
		"alt": "Repères techniques : GISON GW-22N1",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gw-22n1",
		"label": "Référence GW-22N1",
		"distinguishingAttributes": {
			"reference": "GW-22N1",
			"Masse": "4.80 kg",
			"Longueur": "240 mm"
		}
	},
	"editorial": {
		"overview": "GISON GW-22N1. Consommation de régime non précisé : 630 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Masse : 4.80 kg. Longueur : 240 mm.",
		"verifiedFacts": [
			"Masse : 4.80 kg.",
			"Longueur : 240 mm.",
			"Diamètre de flexible publié : 8 mm.",
			"Référence constructeur : GW-22N1."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "4.80 kg",
			"evidenceIds": [
				"october-b-gison-tools-p16"
			]
		},
		{
			"label": "Longueur",
			"value": "240 mm",
			"evidenceIds": [
				"october-b-gison-tools-p16"
			]
		},
		{
			"label": "Diamètre de flexible publié",
			"value": "8 mm",
			"evidenceIds": [
				"october-b-gison-tools-p16"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GW-22N1",
			"evidenceIds": [
				"october-b-gison-tools-p16"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p16"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 16",
			"evidenceIds": [
				"october-b-gison-tools-p16"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p16",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=16",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 16",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p16"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p16"
		],
		"airflowLpm": [
			"october-b-gison-tools-p16"
		],
		"airflowBasis": [
			"october-b-gison-tools-p16"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 630 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
