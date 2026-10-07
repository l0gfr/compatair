import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "nitto-kohki-myg-25l",
	"slug": "nitto-kohki-myg-25l",
	"brand": "Nitto Kohki",
	"model": "MYG-25L",
	"mpn": "MYG-25L",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Nitto Kohki MYG-25L",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/nitto-kohki-myg-25l.webp",
		"alt": "Repères techniques Nitto Kohki MYG-25L, référence MYG-25L",
		"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=36",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Nitto Kohki MYG-25L, référence MYG-25L. Le tableau fabricant publie 390 L/min et une plage d’utilisation de 6 à 6 bar. Vitesse de rotation publiée : 19000 tr/min. Masse publiée : 0.6 kg.",
		"verifiedFacts": [
			"Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"Consommation à vide explicitement publiée (No-load) : 0.39 m³/min. Conversion × 1 000 en L/min.",
			"Référence fabricant : MYG-25L.",
			"Vitesse de rotation publiée : 19000 tr/min.",
			"Masse publiée : 0.6 kg."
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
				"nitto-kohki-myg-25l-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation à vide explicitement publiée (No-load) : 0.39 m³/min. Conversion × 1 000 en L/min.",
			"evidenceIds": [
				"nitto-kohki-myg-25l-20260926"
			]
		},
		{
			"label": "Vitesse de rotation publiée",
			"value": "19000 tr/min",
			"evidenceIds": [
				"nitto-kohki-myg-25l-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.6 kg",
			"evidenceIds": [
				"nitto-kohki-myg-25l-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "nitto-kohki-myg-25l-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=36",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 36, réf. MYG-25L",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.39 m³/min. Conversion × 1 000 en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"nitto-kohki-myg-25l-20260926"
		],
		"workingPressureBar": [
			"nitto-kohki-myg-25l-20260926"
		],
		"airflowLpm": [
			"nitto-kohki-myg-25l-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 390,
		"typical": 390,
		"max": 390
	}
};

export default product;
