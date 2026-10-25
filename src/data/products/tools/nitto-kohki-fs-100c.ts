import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "nitto-kohki-fs-100c",
	"slug": "nitto-kohki-fs-100c",
	"brand": "Nitto Kohki",
	"model": "FS-100C",
	"mpn": "FS-100C",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Nitto Kohki FS-100C",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/nitto-kohki-fs-100c.webp",
		"alt": "Repères techniques Nitto Kohki FS-100C, référence FS-100C",
		"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=43",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "FS-100C : ponceuse compacte à patin de 110 × 100 mm et orbite de 1,5 mm, pour papier de 114 × 140 mm. La FS-50A utilise un patin de 75 × 82 mm et une orbite de 1,2 mm. À 0,6 MPa, leurs consommations à vide sont de 200 et 140 L/min, avec la même masse de 0,50 kg.",
		"verifiedFacts": [
			"FS-100C contre FS-50A : patins 110 × 100 et 75 × 82 mm, orbites 1,5 et 1,2 mm, régimes 20 000 et 15 000 tr/min. Consommations à vide 0,20 et 0,14 m³/min ; masse commune 0,50 kg.",
			"La consommation retenue est publiée à vide ; elle ne décrit pas la demande en charge."
		],
		"limitations": [
			"La colonne Air Consumption (No-load) décrit explicitement la consommation à vide.",
			"Le patin FS-100C et le format de papier sont deux dimensions distinctes."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"evidenceIds": [
				"nitto-kohki-fs-100c-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation à vide explicitement publiée (No-load) : 0.2 m³/min. Conversion × 1 000 en L/min.",
			"evidenceIds": [
				"nitto-kohki-fs-100c-20260926"
			]
		},
		{
			"label": "Vitesse de rotation publiée",
			"value": "20000 tr/min",
			"evidenceIds": [
				"nitto-kohki-fs-100c-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.5 kg",
			"evidenceIds": [
				"nitto-kohki-fs-100c-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "nitto-kohki-fs-100c-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=43",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 43, réf. FS-100C",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.2 m³/min. Conversion × 1 000 en L/min."
		},
		{
			"id": "review-20261025-nitto-kohki-fs-100c-s067",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=43",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s067, pages PDF 43",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:38.617802+00:00, SHA-256 96df5508b9819bc71611f875b35af9e282e5bb0bf62e324aab2ab87698867bac. FS-100C contre FS-50A : patins 110 × 100 et 75 × 82 mm, orbites 1,5 et 1,2 mm, régimes 20 000 et 15 000 tr/min. Consommations à vide 0,20 et 0,14 m³/min ; masse commune 0,50 kg. Limite : Ajouter airflowBasis=free-speed : la colonne est explicitement Air Consumption (No-load)."
		}
	],
	"fieldSources": {
		"mpn": [
			"nitto-kohki-fs-100c-20260926"
		],
		"workingPressureBar": [
			"nitto-kohki-fs-100c-20260926"
		],
		"airflowLpm": [
			"nitto-kohki-fs-100c-20260926",
			"review-20261025-nitto-kohki-fs-100c-s067"
		],
		"airflowBasis": [
			"review-20261025-nitto-kohki-fs-100c-s067"
		],
		"connectorSize": [
			"review-20261025-nitto-kohki-fs-100c-s067"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : Ajouter airflowBasis=free-speed : la colonne est explicitement Air Consumption (No-load)."
	],
	"airflowLpm": {
		"min": 200,
		"typical": 200,
		"max": 200
	},
	"airflowBasis": "free-speed",
	"connectorSize": "Rc 1/8"
};

export default product;
