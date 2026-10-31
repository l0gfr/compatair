import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "scie-gison-gp-848b",
	"slug": "scie-gison-gp-848b",
	"categoryId": "scie",
	"category": "scie",
	"label": "GISON GP-848B",
	"brand": "GISON",
	"model": "GP-848B",
	"mpn": "GP-848B",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 250,
		"typical": 250,
		"max": 250
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/scie-gison-gp-848b.webp",
		"alt": "Repères techniques : GISON GP-848B",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-848b",
		"label": "Référence GP-848B",
		"distinguishingAttributes": {
			"reference": "GP-848B",
			"Masse": "0.60 kg",
			"Longueur": "276 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-848B. Cadence publiée : 9 000 coups/min. Course publiée : 10 mm. Capacité publiée dans la table : 1,6 mm. La consommation du tableau n’est pas qualifiée de maximum en charge.",
		"verifiedFacts": [
			"Masse : 0.60 kg.",
			"Longueur : 276 mm.",
			"Diamètre de flexible publié : 6.5 mm.",
			"Référence constructeur : GP-848B.",
			"Cadence publiée : 9 000 coups/min.",
			"Course publiée : 10 mm.",
			"Capacité publiée dans la table : 1,6 mm."
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
				"october-b-gison-tools-p76"
			]
		},
		{
			"label": "Longueur",
			"value": "276 mm",
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
			"value": "GP-848B",
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
			"label": "Cadence publiée",
			"value": "9 000 coups/min",
			"evidenceIds": [
				"october-b-gison-tools-p76",
				"scie-gison-gp-848b-reserved-20261031-1"
			]
		},
		{
			"label": "Course publiée",
			"value": "10 mm",
			"evidenceIds": [
				"october-b-gison-tools-p76",
				"scie-gison-gp-848b-reserved-20261031-1"
			]
		},
		{
			"label": "Capacité publiée dans la table",
			"value": "1,6 mm",
			"evidenceIds": [
				"october-b-gison-tools-p76",
				"scie-gison-gp-848b-reserved-20261031-1"
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
			"id": "scie-gison-gp-848b-reserved-20261031-1",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=76",
			"sourceLabel": "GISON GP-848B : relecture documentaire du 31 octobre 2026",
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
		"Consommation de régime non précisé : 250 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
