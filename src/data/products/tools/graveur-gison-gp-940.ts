import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "graveur-gison-gp-940",
	"slug": "graveur-gison-gp-940",
	"categoryId": "graveur",
	"category": "graveur",
	"label": "GISON GP-940",
	"brand": "GISON",
	"model": "GP-940",
	"mpn": "GP-940",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 70,
		"typical": 70,
		"max": 70
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/graveur-gison-gp-940.webp",
		"alt": "Repères techniques : GISON GP-940",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-940",
		"label": "Référence GP-940",
		"distinguishingAttributes": {
			"reference": "GP-940",
			"Masse": "0.24 kg",
			"Diamètre de flexible publié": "6.5 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-940. Cadence publiée : 34 000 coups/min. Course publiée : 1,2 mm. Longueur publiée : 160 mm. La consommation du tableau n’est pas qualifiée de maximum en charge.",
		"verifiedFacts": [
			"Masse : 0.24 kg.",
			"Diamètre de flexible publié : 6.5 mm.",
			"Référence constructeur : GP-940.",
			"Cadence publiée : 34 000 coups/min.",
			"Course publiée : 1,2 mm.",
			"Longueur publiée : 160 mm."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "0.24 kg",
			"evidenceIds": [
				"october-b-gison-tools-p58"
			]
		},
		{
			"label": "Diamètre de flexible publié",
			"value": "6.5 mm",
			"evidenceIds": [
				"october-b-gison-tools-p58"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GP-940",
			"evidenceIds": [
				"october-b-gison-tools-p58"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p58"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 58",
			"evidenceIds": [
				"october-b-gison-tools-p58"
			]
		},
		{
			"label": "Cadence publiée",
			"value": "34 000 coups/min",
			"evidenceIds": [
				"october-b-gison-tools-p58",
				"graveur-gison-gp-940-reserved-20261031-1"
			]
		},
		{
			"label": "Course publiée",
			"value": "1,2 mm",
			"evidenceIds": [
				"october-b-gison-tools-p58",
				"graveur-gison-gp-940-reserved-20261031-1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "160 mm",
			"evidenceIds": [
				"october-b-gison-tools-p58",
				"graveur-gison-gp-940-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p58",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=58",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 58",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "graveur-gison-gp-940-reserved-20261031-1",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=58",
			"sourceLabel": "GISON GP-940 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Table GISON rendue et relue : identité exacte, unités et caractéristiques propres au modèle. Les consommations non qualifiées restent hors verdict conclusif."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p58"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p58"
		],
		"airflowLpm": [
			"october-b-gison-tools-p58"
		],
		"airflowBasis": [
			"october-b-gison-tools-p58"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 70 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
