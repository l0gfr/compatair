import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "nitto-kohki-aps-125",
	"slug": "nitto-kohki-aps-125",
	"brand": "Nitto Kohki",
	"model": "APS-125",
	"mpn": "APS-125",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Nitto Kohki APS-125",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/nitto-kohki-aps-125.webp",
		"alt": "Repères techniques Nitto Kohki APS-125, référence APS-125",
		"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=44",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Nitto Kohki APS-125, référence APS-125. Le tableau fabricant publie 450 L/min et une plage d’utilisation de 6 à 6 bar. Vitesse de rotation publiée : 10000 tr/min. Masse publiée : 0.69 kg.",
		"verifiedFacts": [
			"Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"Consommation à vide explicitement publiée (No-load) : 0.45 m³/min. Conversion × 1 000 en L/min.",
			"Référence fabricant : APS-125.",
			"Vitesse de rotation publiée : 10000 tr/min.",
			"Masse publiée : 0.69 kg.",
			"Diamètre de plateau : 125 mm."
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
				"nitto-kohki-aps-125-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation à vide explicitement publiée (No-load) : 0.45 m³/min. Conversion × 1 000 en L/min.",
			"evidenceIds": [
				"nitto-kohki-aps-125-20260926"
			]
		},
		{
			"label": "Vitesse de rotation publiée",
			"value": "10000 tr/min",
			"evidenceIds": [
				"nitto-kohki-aps-125-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.69 kg",
			"evidenceIds": [
				"nitto-kohki-aps-125-20260926"
			]
		},
		{
			"label": "Diamètre de plateau",
			"value": "125 mm",
			"evidenceIds": [
				"nitto-kohki-aps-125-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "nitto-kohki-aps-125-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=44",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 44, réf. APS-125",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.45 m³/min. Conversion × 1 000 en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"nitto-kohki-aps-125-20260926"
		],
		"workingPressureBar": [
			"nitto-kohki-aps-125-20260926"
		],
		"airflowLpm": [
			"nitto-kohki-aps-125-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 450,
		"typical": 450,
		"max": 450
	}
};

export default product;
