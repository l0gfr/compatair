import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "nitto-kohki-jt-16",
	"slug": "nitto-kohki-jt-16",
	"brand": "Nitto Kohki",
	"model": "JT-16",
	"mpn": "JT-16",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Nitto Kohki JT-16",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/nitto-kohki-jt-16.webp",
		"alt": "Repères techniques Nitto Kohki JT-16, référence JT-16",
		"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=34",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Nitto Kohki JT-16. Le JT-16 est le petit dérouilleur de 0,80 kg livré avec six aiguilles 3 × 180 mm. Le JT-10 pèse 0,50 kg et utilise sept aiguilles 1,6 × 120 mm, à 5 500 coups/min contre 6 000. La table nomme explicitement la consommation à vide ; les 160 L/min cessent de produire une demande en charge.",
		"verifiedFacts": [
			"Aiguilles installées : 6 de diamètre 3 mm × 180 mm.",
			"Cadence : 6 000 coups/min.",
			"Masse : 0,80 kg.",
			"Consommation explicitement à vide : 0,16 m³/min (160 L/min).",
			"Pression nominale du tableau : 0,6 MPa."
		],
		"limitations": [
			"Le tableau donne une pression nominale appariée de 0,6 MPa, sans protocole métrologique supplémentaire revendiqué.",
			"La consommation est à vide ; aucun débit maximal/en charge n’est documenté pour le dimensionnement."
		]
	},
	"specifications": [
		{
			"label": "Aiguilles installées",
			"value": "6 de diamètre 3 mm × 180 mm",
			"evidenceIds": [
				"nitto-kohki-jt-16-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence",
			"value": "6 000 coups/min",
			"evidenceIds": [
				"nitto-kohki-jt-16-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,80 kg",
			"evidenceIds": [
				"nitto-kohki-jt-16-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation explicitement à vide",
			"value": "0,16 m³/min (160 L/min)",
			"evidenceIds": [
				"nitto-kohki-jt-16-reserved-20261103-1"
			]
		},
		{
			"label": "Pression nominale du tableau",
			"value": "0,6 MPa",
			"evidenceIds": [
				"nitto-kohki-jt-16-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "nitto-kohki-jt-16-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=34",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 34, réf. JT-16",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.16 m³/min. Conversion × 1 000 en L/min."
		},
		{
			"id": "nitto-kohki-jt-16-reserved-20261103-1",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=34",
			"sourceLabel": "Nitto Kohki : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 96df5508b9819bc71611f875b35af9e282e5bb0bf62e324aab2ab87698867bac. Le JT-16 est le petit dérouilleur de 0,80 kg livré avec six aiguilles 3 × 180 mm. Le JT-10 pèse 0,50 kg et utilise sept aiguilles 1,6 × 120 mm, à 5 500 coups/min contre 6 000. La table nomme explicitement la consommation à vide ; les 160 L/min cessent de produire une demande en charge."
		}
	],
	"fieldSources": {
		"mpn": [
			"nitto-kohki-jt-16-20260926"
		],
		"workingPressureBar": [
			"nitto-kohki-jt-16-20260926"
		],
		"airflowLpm": [
			"nitto-kohki-jt-16-20260926"
		],
		"airflowBasis": [
			"nitto-kohki-jt-16-reserved-20261103-1"
		],
		"editorial": [
			"nitto-kohki-jt-16-reserved-20261103-1"
		],
		"specifications": [
			"nitto-kohki-jt-16-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 160,
		"typical": 160,
		"max": 160
	},
	"airflowBasis": "free-speed"
};

export default product;
