import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "nitto-kohki-b-30cl",
	"slug": "nitto-kohki-b-30cl",
	"brand": "Nitto Kohki",
	"model": "B-30CL",
	"mpn": "B-30CL",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "Nitto Kohki B-30CL",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/nitto-kohki-b-30cl.webp",
		"alt": "Repères techniques Nitto Kohki B-30CL, référence B-30CL",
		"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=38",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Nitto Kohki B-30CL, référence B-30CL. Le tableau fabricant publie 820 L/min et une plage d’utilisation de 6 à 6 bar. Vitesse de rotation publiée : 15000 tr/min. Masse publiée : 2.4 kg.",
		"verifiedFacts": [
			"Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"Consommation à vide explicitement publiée (No-load) : 0.82 m³/min. Conversion × 1 000 en L/min.",
			"Référence fabricant : B-30CL.",
			"Vitesse de rotation publiée : 15000 tr/min.",
			"Masse publiée : 2.4 kg."
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
				"nitto-kohki-b-30cl-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation à vide explicitement publiée (No-load) : 0.82 m³/min. Conversion × 1 000 en L/min.",
			"evidenceIds": [
				"nitto-kohki-b-30cl-20260926"
			]
		},
		{
			"label": "Vitesse de rotation publiée",
			"value": "15000 tr/min",
			"evidenceIds": [
				"nitto-kohki-b-30cl-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2.4 kg",
			"evidenceIds": [
				"nitto-kohki-b-30cl-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "nitto-kohki-b-30cl-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=38",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 38, réf. B-30CL",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.82 m³/min. Conversion × 1 000 en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"nitto-kohki-b-30cl-20260926"
		],
		"workingPressureBar": [
			"nitto-kohki-b-30cl-20260926"
		],
		"airflowLpm": [
			"nitto-kohki-b-30cl-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 820,
		"typical": 820,
		"max": 820
	}
};

export default product;
