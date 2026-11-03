import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-gison-gp-925",
	"slug": "ponceuse-orbitale-gison-gp-925",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "GISON GP-925",
	"brand": "GISON",
	"model": "GP-925",
	"mpn": "GP-925",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 300,
		"typical": 300,
		"max": 300
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-gison-gp-925.webp",
		"alt": "Repères techniques : GISON GP-925",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-925",
		"label": "Référence GP-925",
		"distinguishingAttributes": {
			"reference": "GP-925",
			"Masse": "1.32 kg",
			"Longueur": "135 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-925. La GP-925 est la version à aspiration centrale de plateau 5 pouces et orbite 2,5 mm. La GP-827T est sans aspiration et accepte 5 ou 6 pouces ; la GP-937RD est à aspiration autogénérée. Les légendes sont relues sur le rendu du PDF, car l’extraction textuelle mélange l’ordre des colonnes.",
		"verifiedFacts": [
			"Aspiration : Centrale, légende visuelle Central Vacuum.",
			"Plateau : 5 pouces.",
			"Orbite : 2,5 mm.",
			"Vitesse à vide : 10 000 tr/min.",
			"Longueur : 135 mm.",
			"Masse : 1,32 kg."
		],
		"limitations": [
			"Recommandation de service 90 psi (6,3 kg/cm² dans le catalogue), distincte d’un point de mesure de consommation démontré. Régime non qualifié ; pas de conclusion de dimensionnement."
		]
	},
	"specifications": [
		{
			"label": "Aspiration",
			"value": "Centrale, légende visuelle Central Vacuum",
			"evidenceIds": [
				"ponceuse-orbitale-gison-gp-925-reserved-20261103-1"
			]
		},
		{
			"label": "Plateau",
			"value": "5 pouces",
			"evidenceIds": [
				"ponceuse-orbitale-gison-gp-925-reserved-20261103-1"
			]
		},
		{
			"label": "Orbite",
			"value": "2,5 mm",
			"evidenceIds": [
				"ponceuse-orbitale-gison-gp-925-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "10 000 tr/min",
			"evidenceIds": [
				"ponceuse-orbitale-gison-gp-925-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "135 mm",
			"evidenceIds": [
				"ponceuse-orbitale-gison-gp-925-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,32 kg",
			"evidenceIds": [
				"ponceuse-orbitale-gison-gp-925-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p37",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=37",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 37",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "ponceuse-orbitale-gison-gp-925-reserved-20261103-1",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=37",
			"sourceLabel": "GISON : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. La GP-925 est la version à aspiration centrale de plateau 5 pouces et orbite 2,5 mm. La GP-827T est sans aspiration et accepte 5 ou 6 pouces ; la GP-937RD est à aspiration autogénérée. Les légendes sont relues sur le rendu du PDF, car l’extraction textuelle mélange l’ordre des colonnes."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p37"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p37"
		],
		"airflowLpm": [
			"october-b-gison-tools-p37"
		],
		"airflowBasis": [
			"october-b-gison-tools-p37"
		],
		"editorial": [
			"ponceuse-orbitale-gison-gp-925-reserved-20261103-1"
		],
		"specifications": [
			"ponceuse-orbitale-gison-gp-925-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 300 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
