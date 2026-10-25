import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "nitto-kohki-jex-24",
	"slug": "nitto-kohki-jex-24",
	"brand": "Nitto Kohki",
	"model": "JEX-24",
	"mpn": "JEX-24",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Nitto Kohki JEX-24",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/nitto-kohki-jex-24.webp",
		"alt": "Repères techniques Nitto Kohki JEX-24, référence JEX-24",
		"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=34",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "JEX-24 : dérouilleur livré avec 23 aiguilles de 3 × 180 mm, à 4 000 coups/min. Le JEX-20 en reçoit 12, pour la même cadence. Les consommations à vide publiées sont de 270 et 200 L/min à 0,6 MPa ; la masse est de 2,70 kg pour le JEX-24 et 2,75 kg pour le JEX-20.",
		"verifiedFacts": [
			"JEX-24 contre JEX-20 : 23 contre 12 aiguilles de 3 × 180 mm installées, 4 000 coups/min dans les deux cas. Consommations à vide 0,27 et 0,20 m³/min ; masses 2,70 et 2,75 kg.",
			"La consommation retenue est publiée à vide ; elle ne décrit pas la demande en charge."
		],
		"limitations": [
			"La cadence de frappe ne transforme pas la consommation à vide en consommation en charge.",
			"Entrée outil Rc 3/8 ; le raccord fourni ne change pas cette désignation."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"evidenceIds": [
				"nitto-kohki-jex-24-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation à vide explicitement publiée (No-load) : 0.27 m³/min. Conversion × 1 000 en L/min.",
			"evidenceIds": [
				"nitto-kohki-jex-24-20260926"
			]
		},
		{
			"label": "Cadence de frappe publiée",
			"value": "4000 coups/min",
			"evidenceIds": [
				"nitto-kohki-jex-24-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2.7 kg",
			"evidenceIds": [
				"nitto-kohki-jex-24-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "nitto-kohki-jex-24-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=34",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 34, réf. JEX-24",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.27 m³/min. Conversion × 1 000 en L/min."
		},
		{
			"id": "review-20261025-nitto-kohki-jex-24-s067",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=34",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s067, pages PDF 34",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:38.617802+00:00, SHA-256 96df5508b9819bc71611f875b35af9e282e5bb0bf62e324aab2ab87698867bac. JEX-24 contre JEX-20 : 23 contre 12 aiguilles de 3 × 180 mm installées, 4 000 coups/min dans les deux cas. Consommations à vide 0,27 et 0,20 m³/min ; masses 2,70 et 2,75 kg. Limite : Ajouter airflowBasis=free-speed ; la cadence de frappe ne transforme pas la consommation à vide en consommation en charge."
		}
	],
	"fieldSources": {
		"mpn": [
			"nitto-kohki-jex-24-20260926"
		],
		"workingPressureBar": [
			"nitto-kohki-jex-24-20260926"
		],
		"airflowLpm": [
			"nitto-kohki-jex-24-20260926",
			"review-20261025-nitto-kohki-jex-24-s067"
		],
		"airflowBasis": [
			"review-20261025-nitto-kohki-jex-24-s067"
		],
		"connectorSize": [
			"review-20261025-nitto-kohki-jex-24-s067"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : Ajouter airflowBasis=free-speed ; la cadence de frappe ne transforme pas la consommation à vide en consommation en charge."
	],
	"airflowLpm": {
		"min": 270,
		"typical": 270,
		"max": 270
	},
	"airflowBasis": "free-speed",
	"connectorSize": "Rc 3/8"
};

export default product;
