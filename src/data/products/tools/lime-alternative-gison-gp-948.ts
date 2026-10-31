import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "lime-alternative-gison-gp-948",
	"slug": "lime-alternative-gison-gp-948",
	"categoryId": "lime-alternative",
	"category": "lime-alternative",
	"label": "GISON GP-948",
	"brand": "GISON",
	"model": "GP-948",
	"mpn": "GP-948",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 280,
		"typical": 280,
		"max": 280
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/lime-alternative-gison-gp-948.webp",
		"alt": "Repères techniques : GISON GP-948",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-948",
		"label": "Référence GP-948",
		"distinguishingAttributes": {
			"reference": "GP-948",
			"Masse": "1.00 kg",
			"Longueur": "174 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-948. Type constructeur : Lime pneumatique. Cadence publiée : 3 700 coups/min. Course publiée : 10 mm. La consommation du tableau n’est pas qualifiée de maximum en charge.",
		"verifiedFacts": [
			"Masse : 1.00 kg.",
			"Longueur : 174 mm.",
			"Diamètre de flexible publié : 6.5 mm.",
			"Référence constructeur : GP-948.",
			"Type constructeur : Lime pneumatique.",
			"Cadence publiée : 3 700 coups/min.",
			"Course publiée : 10 mm."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "1.00 kg",
			"evidenceIds": [
				"october-b-gison-tools-p76"
			]
		},
		{
			"label": "Longueur",
			"value": "174 mm",
			"evidenceIds": [
				"october-b-gison-tools-p76"
			]
		},
		{
			"label": "Diamètre de flexible publié",
			"value": "6.5 mm",
			"evidenceIds": [
				"october-b-gison-tools-p76"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GP-948",
			"evidenceIds": [
				"october-b-gison-tools-p76"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p76"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 76",
			"evidenceIds": [
				"october-b-gison-tools-p76"
			]
		},
		{
			"label": "Type constructeur",
			"value": "Lime pneumatique",
			"evidenceIds": [
				"october-b-gison-tools-p76",
				"lime-alternative-gison-gp-948-reserved-20261031-1"
			]
		},
		{
			"label": "Cadence publiée",
			"value": "3 700 coups/min",
			"evidenceIds": [
				"october-b-gison-tools-p76",
				"lime-alternative-gison-gp-948-reserved-20261031-1"
			]
		},
		{
			"label": "Course publiée",
			"value": "10 mm",
			"evidenceIds": [
				"october-b-gison-tools-p76",
				"lime-alternative-gison-gp-948-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p76",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=76",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 76",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "lime-alternative-gison-gp-948-reserved-20261031-1",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=76",
			"sourceLabel": "GISON GP-948 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Table GISON rendue et relue : identité exacte, unités et caractéristiques propres au modèle. Les consommations non qualifiées restent hors verdict conclusif."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p76"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p76"
		],
		"airflowLpm": [
			"october-b-gison-tools-p76"
		],
		"airflowBasis": [
			"october-b-gison-tools-p76"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 280 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
