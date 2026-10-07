import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-gison-gw-17t2",
	"slug": "cle-a-chocs-gison-gw-17t2",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "GISON GW-17T2",
	"brand": "GISON",
	"model": "GW-17T2",
	"mpn": "GW-17T2",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 200,
		"typical": 200,
		"max": 200
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-gison-gw-17t2.webp",
		"alt": "Repères techniques : GISON GW-17T2",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gw-17t2",
		"label": "Référence GW-17T2",
		"distinguishingAttributes": {
			"reference": "GW-17T2",
			"Masse": "1.40 kg",
			"Longueur": "103 mm"
		}
	},
	"editorial": {
		"overview": "GISON GW-17T2. Consommation de régime non précisé : 200 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Masse : 1.40 kg. Longueur : 103 mm.",
		"verifiedFacts": [
			"Masse : 1.40 kg.",
			"Longueur : 103 mm.",
			"Diamètre de flexible publié : 6.5 mm.",
			"Référence constructeur : GW-17T2."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "1.40 kg",
			"evidenceIds": [
				"october-b-gison-tools-p18"
			]
		},
		{
			"label": "Longueur",
			"value": "103 mm",
			"evidenceIds": [
				"october-b-gison-tools-p18"
			]
		},
		{
			"label": "Diamètre de flexible publié",
			"value": "6.5 mm",
			"evidenceIds": [
				"october-b-gison-tools-p18"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GW-17T2",
			"evidenceIds": [
				"october-b-gison-tools-p18"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p18"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 18",
			"evidenceIds": [
				"october-b-gison-tools-p18"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p18",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=18",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 18",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p18"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p18"
		],
		"airflowLpm": [
			"october-b-gison-tools-p18"
		],
		"airflowBasis": [
			"october-b-gison-tools-p18"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 200 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
