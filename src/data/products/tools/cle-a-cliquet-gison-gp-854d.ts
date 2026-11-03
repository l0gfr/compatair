import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-gison-gp-854d",
	"slug": "cle-a-cliquet-gison-gp-854d",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "GISON GP-854D",
	"brand": "GISON",
	"model": "GP-854D",
	"mpn": "GP-854D",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 540,
		"typical": 540,
		"max": 540
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-gison-gp-854d.webp",
		"alt": "Repères techniques : GISON GP-854D",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-854d",
		"label": "Référence GP-854D",
		"distinguishingAttributes": {
			"reference": "GP-854D",
			"Masse": "0.54 kg",
			"Longueur": "174 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-854D. La GP-854D est le cliquet 1/4 pouce de 174 mm et 0,54 kg ; la GP-854 donne aussi 40 Nm mais mesure 170 mm et pèse 0,50 kg. La GP-854J est une tête traversante distincte. Le débit de régime non précisé reste hors du dimensionnement conclusif.",
		"verifiedFacts": [
			"Carré : 1/4 pouce.",
			"Couple maximal déclaré : 40 Nm (30 ft-lb).",
			"Longueur : 174 mm.",
			"Masse : 0,54 kg.",
			"Consommation documentaire : 0,54 m³/min."
		],
		"limitations": [
			"Recommandation de service 90 psi (6,3 kg/cm² dans le catalogue), distincte d’un point de mesure de consommation démontré. Régime non qualifié ; pas de conclusion de dimensionnement."
		]
	},
	"specifications": [
		{
			"label": "Carré",
			"value": "1/4 pouce",
			"evidenceIds": [
				"cle-a-cliquet-gison-gp-854d-reserved-20261103-1"
			]
		},
		{
			"label": "Couple maximal déclaré",
			"value": "40 Nm (30 ft-lb)",
			"evidenceIds": [
				"cle-a-cliquet-gison-gp-854d-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "174 mm",
			"evidenceIds": [
				"cle-a-cliquet-gison-gp-854d-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,54 kg",
			"evidenceIds": [
				"cle-a-cliquet-gison-gp-854d-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "0,54 m³/min",
			"evidenceIds": [
				"cle-a-cliquet-gison-gp-854d-reserved-20261103-1"
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
			"id": "cle-a-cliquet-gison-gp-854d-reserved-20261103-1",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=22",
			"sourceLabel": "GISON : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. La GP-854D est le cliquet 1/4 pouce de 174 mm et 0,54 kg ; la GP-854 donne aussi 40 Nm mais mesure 170 mm et pèse 0,50 kg. La GP-854J est une tête traversante distincte. Le débit de régime non précisé reste hors du dimensionnement conclusif."
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
		],
		"editorial": [
			"cle-a-cliquet-gison-gp-854d-reserved-20261103-1"
		],
		"specifications": [
			"cle-a-cliquet-gison-gp-854d-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 540 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
