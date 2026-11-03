import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "nitto-kohki-myg-40l",
	"slug": "nitto-kohki-myg-40l",
	"brand": "Nitto Kohki",
	"model": "MYG-40L",
	"mpn": "MYG-40L",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Nitto Kohki MYG-40L",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/nitto-kohki-myg-40l.webp",
		"alt": "Repères techniques Nitto Kohki MYG-40L, référence MYG-40L",
		"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=36",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Nitto Kohki MYG-40 L. La MYG-40 L reçoit un disque 100 mm et pèse 1,55 kg. La MYG-25 L est donnée pour 58 mm, 19 000 tr/min et 0,60 kg ; la MG-40 est un autre modèle 100 mm avec débit uniquement à vide. La MYG-40 L distingue explicitement 0,54 m³/min à vide et 0,69 en charge sous le point nominal du tableau 0,6 MPa ; seule la valeur en charge est retenue.",
		"verifiedFacts": [
			"Disque à moyeu déporté : 100 mm.",
			"Vitesse à vide : 13 000 tr/min.",
			"Masse : 1,55 kg.",
			"Consommation en charge : 0,69 m³/min (690 L/min).",
			"Consommation à vide distincte : 0,54 m³/min.",
			"Pression nominale du tableau : 0,6 MPa."
		],
		"limitations": [
			"Point nominal de spécification apparié dans le même tableau : 0,6 MPa. Aucun protocole métrologique supplémentaire ni essai indépendant n’est revendiqué.",
			"Disque et accessoires à choisir selon la notice du modèle exact."
		]
	},
	"specifications": [
		{
			"label": "Disque à moyeu déporté",
			"value": "100 mm",
			"evidenceIds": [
				"nitto-kohki-myg-40l-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "13 000 tr/min",
			"evidenceIds": [
				"nitto-kohki-myg-40l-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,55 kg",
			"evidenceIds": [
				"nitto-kohki-myg-40l-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation en charge",
			"value": "0,69 m³/min (690 L/min)",
			"evidenceIds": [
				"nitto-kohki-myg-40l-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation à vide distincte",
			"value": "0,54 m³/min",
			"evidenceIds": [
				"nitto-kohki-myg-40l-reserved-20261103-1"
			]
		},
		{
			"label": "Pression nominale du tableau",
			"value": "0,6 MPa",
			"evidenceIds": [
				"nitto-kohki-myg-40l-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "nitto-kohki-myg-40l-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=36",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 36, réf. MYG-40L",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation en charge, la plus élevée des régimes publiés : 0.69 m³/min. Conversion × 1 000 en L/min."
		},
		{
			"id": "nitto-kohki-myg-40l-reserved-20261103-1",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=36",
			"sourceLabel": "Nitto Kohki : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 96df5508b9819bc71611f875b35af9e282e5bb0bf62e324aab2ab87698867bac. La MYG-40 L reçoit un disque 100 mm et pèse 1,55 kg. La MYG-25 L est donnée pour 58 mm, 19 000 tr/min et 0,60 kg ; la MG-40 est un autre modèle 100 mm avec débit uniquement à vide. La MYG-40 L distingue explicitement 0,54 m³/min à vide et 0,69 en charge sous le point nominal du tableau 0,6 MPa ; seule la valeur en charge est retenue."
		}
	],
	"fieldSources": {
		"mpn": [
			"nitto-kohki-myg-40l-20260926"
		],
		"workingPressureBar": [
			"nitto-kohki-myg-40l-20260926"
		],
		"airflowLpm": [
			"nitto-kohki-myg-40l-20260926"
		],
		"editorial": [
			"nitto-kohki-myg-40l-reserved-20261103-1"
		],
		"specifications": [
			"nitto-kohki-myg-40l-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 690,
		"typical": 690,
		"max": 690
	}
};

export default product;
