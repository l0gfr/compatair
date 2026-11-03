import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-gison-gw-12",
	"slug": "cle-a-chocs-gison-gw-12",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "GISON GW-12",
	"brand": "GISON",
	"model": "GW-12",
	"mpn": "GW-12",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 560,
		"typical": 560,
		"max": 560
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-gison-gw-12.webp",
		"alt": "Repères techniques : GISON GW-12",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gw-12",
		"label": "Référence GW-12",
		"distinguishingAttributes": {
			"reference": "GW-12",
			"Masse": "0.95 kg",
			"Longueur": "135 mm"
		}
	},
	"editorial": {
		"overview": "GISON GW-12. La GW-12 3/8 pouce à deux marteaux publie 183 Nm et 135 mm. La GW-13T2 est une Twin Hammer de 103 mm, 1,40 kg et 542 Nm maximum. La taille du carré seule ne permet donc ni de comparer les couples, ni de remplacer la consommation publiée par un maximum en charge.",
		"verifiedFacts": [
			"Carré : 3/8 pouce.",
			"Mécanisme : Two Hammer.",
			"Couple maximal déclaré : 183 Nm (135 ft-lb).",
			"Longueur : 135 mm.",
			"Masse : 0,95 kg."
		],
		"limitations": [
			"Recommandation de service 90 psi (6,3 kg/cm² dans le catalogue), distincte d’un point de mesure de consommation démontré. Régime non qualifié ; pas de conclusion de dimensionnement."
		]
	},
	"specifications": [
		{
			"label": "Carré",
			"value": "3/8 pouce",
			"evidenceIds": [
				"cle-a-chocs-gison-gw-12-reserved-20261103-1"
			]
		},
		{
			"label": "Mécanisme",
			"value": "Two Hammer",
			"evidenceIds": [
				"cle-a-chocs-gison-gw-12-reserved-20261103-1"
			]
		},
		{
			"label": "Couple maximal déclaré",
			"value": "183 Nm (135 ft-lb)",
			"evidenceIds": [
				"cle-a-chocs-gison-gw-12-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "135 mm",
			"evidenceIds": [
				"cle-a-chocs-gison-gw-12-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,95 kg",
			"evidenceIds": [
				"cle-a-chocs-gison-gw-12-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p19",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=19",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 19",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "cle-a-chocs-gison-gw-12-reserved-20261103-1",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=19",
			"sourceLabel": "GISON : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. La GW-12 3/8 pouce à deux marteaux publie 183 Nm et 135 mm. La GW-13T2 est une Twin Hammer de 103 mm, 1,40 kg et 542 Nm maximum. La taille du carré seule ne permet donc ni de comparer les couples, ni de remplacer la consommation publiée par un maximum en charge."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p19"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p19"
		],
		"airflowLpm": [
			"october-b-gison-tools-p19"
		],
		"airflowBasis": [
			"october-b-gison-tools-p19"
		],
		"editorial": [
			"cle-a-chocs-gison-gw-12-reserved-20261103-1"
		],
		"specifications": [
			"cle-a-chocs-gison-gw-12-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 560 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
