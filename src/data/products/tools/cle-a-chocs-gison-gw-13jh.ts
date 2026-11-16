import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-gison-gw-13jh",
	"slug": "cle-a-chocs-gison-gw-13jh",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "GISON GW-13JH",
	"brand": "GISON",
	"model": "GW-13JH",
	"mpn": "GW-13JH",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 840,
		"typical": 840,
		"max": 840
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-gison-gw-13jh-technical-20261116-reviews.svg",
		"alt": "Repères techniques : GISON GW-13JH",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "gison-gw-13jh",
		"label": "Référence GW-13JH",
		"distinguishingAttributes": {
			"reference": "GW-13JH",
			"Masse": "1.30 kg",
			"Longueur": "160 mm"
		}
	},
	"editorial": {
		"overview": "La GW-13JH combine un carré 3/8 pouce, un mécanisme Twin Hammer et un échappement dans la poignée. Elle publie 610 Nm maximum, 160 mm de long et 1,30 kg ; la GW-17JH change le carré en 1/2 pouce. Le format et l’interface priment sur la seule consommation. Les 0,84 m³/min n’ont pas de régime de mesure établi, et restent hors dimensionnement.",
		"verifiedFacts": [
			"Masse : 1.30 kg.",
			"Longueur : 160 mm.",
			"Diamètre de flexible publié : 8 mm.",
			"Référence constructeur : GW-13JH."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "1.30 kg",
			"evidenceIds": [
				"october-b-gison-tools-p20"
			]
		},
		{
			"label": "Longueur",
			"value": "160 mm",
			"evidenceIds": [
				"october-b-gison-tools-p20"
			]
		},
		{
			"label": "Diamètre de flexible publié",
			"value": "8 mm",
			"evidenceIds": [
				"october-b-gison-tools-p20"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GW-13JH",
			"evidenceIds": [
				"october-b-gison-tools-p20"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p20"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 20",
			"evidenceIds": [
				"october-b-gison-tools-p20"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p20",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=20",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 20",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:cle-a-chocs-gison-gw-13jh:0",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
			"sourceLabel": "GISON, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La GW-13JH combine un carré 3/8 pouce, un mécanisme Twin Hammer et un échappement dans la poignée. Elle publie 610 Nm maximum, 160 mm de long et 1,30 kg ; la GW-17JH change le carré en 1/2 pouce. Le format et l’interface priment sur la seule consommation. Les 0,84 m³/min n’ont pas de régime de mesure établi, et restent hors dimensionnement. GET complet SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Pages PDF lues : 20."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p20"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p20"
		],
		"airflowLpm": [
			"october-b-gison-tools-p20"
		],
		"airflowBasis": [
			"october-b-gison-tools-p20"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 840 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
