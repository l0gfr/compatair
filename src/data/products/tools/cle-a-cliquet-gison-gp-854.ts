import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-gison-gp-854",
	"slug": "cle-a-cliquet-gison-gp-854",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "GISON GP-854",
	"brand": "GISON",
	"model": "GP-854",
	"mpn": "GP-854",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 490,
		"typical": 490,
		"max": 490
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-gison-gp-854.webp",
		"alt": "Repères techniques : GISON GP-854",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-854",
		"label": "Référence GP-854",
		"distinguishingAttributes": {
			"reference": "GP-854",
			"Masse": "0.50 kg",
			"Longueur": "170 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-854. Carré d’entraînement : 1/4 pouce. Couple maximal publié : 30 ft-lb (40 Nm). Longueur publiée : 170 mm. La consommation du tableau n’est pas qualifiée de maximum en charge.",
		"verifiedFacts": [
			"Masse : 0.50 kg.",
			"Longueur : 170 mm.",
			"Diamètre de flexible publié : 6.5 mm.",
			"Référence constructeur : GP-854.",
			"Carré d’entraînement : 1/4 pouce.",
			"Couple maximal publié : 30 ft-lb (40 Nm).",
			"Longueur publiée : 170 mm."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "0.50 kg",
			"evidenceIds": [
				"october-b-gison-tools-p22"
			]
		},
		{
			"label": "Longueur",
			"value": "170 mm",
			"evidenceIds": [
				"october-b-gison-tools-p22"
			]
		},
		{
			"label": "Diamètre de flexible publié",
			"value": "6.5 mm",
			"evidenceIds": [
				"october-b-gison-tools-p22"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GP-854",
			"evidenceIds": [
				"october-b-gison-tools-p22"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p22"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 22",
			"evidenceIds": [
				"october-b-gison-tools-p22"
			]
		},
		{
			"label": "Carré d’entraînement",
			"value": "1/4 pouce",
			"evidenceIds": [
				"october-b-gison-tools-p22",
				"cle-a-cliquet-gison-gp-854-reserved-20261031-1"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "30 ft-lb (40 Nm)",
			"evidenceIds": [
				"october-b-gison-tools-p22",
				"cle-a-cliquet-gison-gp-854-reserved-20261031-1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "170 mm",
			"evidenceIds": [
				"october-b-gison-tools-p22",
				"cle-a-cliquet-gison-gp-854-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p22",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=22",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 22",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "cle-a-cliquet-gison-gp-854-reserved-20261031-1",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=22",
			"sourceLabel": "GISON GP-854 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Table GISON rendue et relue : identité exacte, unités et caractéristiques propres au modèle. Les consommations non qualifiées restent hors verdict conclusif."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p22"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p22"
		],
		"airflowLpm": [
			"october-b-gison-tools-p22"
		],
		"airflowBasis": [
			"october-b-gison-tools-p22"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 490 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
