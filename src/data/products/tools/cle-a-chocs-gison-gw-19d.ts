import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-gison-gw-19d",
	"slug": "cle-a-chocs-gison-gw-19d",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "GISON GW-19D",
	"brand": "GISON",
	"model": "GW-19D",
	"mpn": "GW-19D",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 710,
		"typical": 710,
		"max": 710
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-gison-gw-19d.webp",
		"alt": "Repères techniques : GISON GW-19D",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gw-19d",
		"label": "Référence GW-19D",
		"distinguishingAttributes": {
			"reference": "GW-19D",
			"Masse": "2.55 kg",
			"Longueur": "185 mm"
		}
	},
	"editorial": {
		"overview": "GISON GW-19D. Consommation de régime non précisé : 710 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Masse : 2.55 kg. Longueur : 185 mm.",
		"verifiedFacts": [
			"Masse : 2.55 kg.",
			"Longueur : 185 mm.",
			"Diamètre de flexible publié : 6.5 mm.",
			"Référence constructeur : GW-19D."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "2.55 kg",
			"evidenceIds": [
				"october-b-gison-tools-p17"
			]
		},
		{
			"label": "Longueur",
			"value": "185 mm",
			"evidenceIds": [
				"october-b-gison-tools-p17"
			]
		},
		{
			"label": "Diamètre de flexible publié",
			"value": "6.5 mm",
			"evidenceIds": [
				"october-b-gison-tools-p17"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GW-19D",
			"evidenceIds": [
				"october-b-gison-tools-p17"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p17"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 17",
			"evidenceIds": [
				"october-b-gison-tools-p17"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p17",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=17",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 17",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p17"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p17"
		],
		"airflowLpm": [
			"october-b-gison-tools-p17"
		],
		"airflowBasis": [
			"october-b-gison-tools-p17"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 710 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
