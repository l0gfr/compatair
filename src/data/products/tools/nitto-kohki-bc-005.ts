import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "nitto-kohki-bc-005",
	"slug": "nitto-kohki-bc-005",
	"brand": "Nitto Kohki",
	"model": "BC-005",
	"mpn": "BC-005",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Nitto Kohki BC-005",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/nitto-kohki-bc-005.webp",
		"alt": "Repères techniques Nitto Kohki BC-005, référence BC-005",
		"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=47",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Nitto Kohki BC-005, référence BC-005. Le tableau fabricant publie 220 L/min et une plage d’utilisation de 6 à 6 bar. Vitesse de rotation publiée : 420 tr/min. Masse publiée : 0.75 kg.",
		"verifiedFacts": [
			"Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"Consommation à vide explicitement publiée (No-load) : 0.22 m³/min. Conversion × 1 000 en L/min.",
			"Référence fabricant : BC-005.",
			"Vitesse de rotation publiée : 420 tr/min.",
			"Masse publiée : 0.75 kg."
		],
		"limitations": [
			"Le débit à vide n’établit pas à lui seul la consommation sous toutes les charges. Respecter les conditions d’emploi de la notice.",
			"La conformité et la disponibilité de la version exacte doivent être confirmées avant achat."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"evidenceIds": [
				"nitto-kohki-bc-005-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation à vide explicitement publiée (No-load) : 0.22 m³/min. Conversion × 1 000 en L/min.",
			"evidenceIds": [
				"nitto-kohki-bc-005-20260926"
			]
		},
		{
			"label": "Vitesse de rotation publiée",
			"value": "420 tr/min",
			"evidenceIds": [
				"nitto-kohki-bc-005-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.75 kg",
			"evidenceIds": [
				"nitto-kohki-bc-005-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "nitto-kohki-bc-005-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=47",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 47, réf. BC-005",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.22 m³/min. Conversion × 1 000 en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"nitto-kohki-bc-005-20260926"
		],
		"workingPressureBar": [
			"nitto-kohki-bc-005-20260926"
		],
		"airflowLpm": [
			"nitto-kohki-bc-005-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 220,
		"typical": 220,
		"max": 220
	}
};

export default product;
