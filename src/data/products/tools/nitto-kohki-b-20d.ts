import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "nitto-kohki-b-20d",
	"slug": "nitto-kohki-b-20d",
	"brand": "Nitto Kohki",
	"model": "B-20D",
	"mpn": "B-20D",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "Nitto Kohki B-20D",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/nitto-kohki-b-20d.webp",
		"alt": "Repères techniques Nitto Kohki B-20D, référence B-20D",
		"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=38",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Nitto Kohki B-20D, référence B-20D. Le tableau fabricant publie 520 L/min et une plage d’utilisation de 6 à 6 bar. Vitesse de rotation publiée : 17000 tr/min. Masse publiée : 1.55 kg.",
		"verifiedFacts": [
			"Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"Consommation à vide explicitement publiée (No-load) : 0.52 m³/min. Conversion × 1 000 en L/min.",
			"Référence fabricant : B-20D.",
			"Vitesse de rotation publiée : 17000 tr/min.",
			"Masse publiée : 1.55 kg."
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
				"nitto-kohki-b-20d-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation à vide explicitement publiée (No-load) : 0.52 m³/min. Conversion × 1 000 en L/min.",
			"evidenceIds": [
				"nitto-kohki-b-20d-20260926"
			]
		},
		{
			"label": "Vitesse de rotation publiée",
			"value": "17000 tr/min",
			"evidenceIds": [
				"nitto-kohki-b-20d-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.55 kg",
			"evidenceIds": [
				"nitto-kohki-b-20d-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "nitto-kohki-b-20d-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=38",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 38, réf. B-20D",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.52 m³/min. Conversion × 1 000 en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"nitto-kohki-b-20d-20260926"
		],
		"workingPressureBar": [
			"nitto-kohki-b-20d-20260926"
		],
		"airflowLpm": [
			"nitto-kohki-b-20d-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 520,
		"typical": 520,
		"max": 520
	}
};

export default product;
