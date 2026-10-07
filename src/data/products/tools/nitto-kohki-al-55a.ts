import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "nitto-kohki-al-55a",
	"slug": "nitto-kohki-al-55a",
	"brand": "Nitto Kohki",
	"model": "AL-55A",
	"mpn": "AL-55A",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Nitto Kohki AL-55A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/nitto-kohki-al-55a.webp",
		"alt": "Repères techniques Nitto Kohki AL-55A, référence AL-55A",
		"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=45",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Nitto Kohki AL-55A, référence AL-55A. Le tableau fabricant publie 170 L/min et une plage d’utilisation de 6 à 6 bar. Vitesse de rotation publiée : 56500 tr/min. Masse publiée : 0.27 kg.",
		"verifiedFacts": [
			"Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"Consommation à vide explicitement publiée (No-load) : 0.17 m³/min. Conversion × 1 000 en L/min.",
			"Référence fabricant : AL-55A.",
			"Vitesse de rotation publiée : 56500 tr/min.",
			"Masse publiée : 0.27 kg."
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
				"nitto-kohki-al-55a-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation à vide explicitement publiée (No-load) : 0.17 m³/min. Conversion × 1 000 en L/min.",
			"evidenceIds": [
				"nitto-kohki-al-55a-20260926"
			]
		},
		{
			"label": "Vitesse de rotation publiée",
			"value": "56500 tr/min",
			"evidenceIds": [
				"nitto-kohki-al-55a-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.27 kg",
			"evidenceIds": [
				"nitto-kohki-al-55a-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "nitto-kohki-al-55a-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=45",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 45, réf. AL-55A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.17 m³/min. Conversion × 1 000 en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"nitto-kohki-al-55a-20260926"
		],
		"workingPressureBar": [
			"nitto-kohki-al-55a-20260926"
		],
		"airflowLpm": [
			"nitto-kohki-al-55a-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 170,
		"typical": 170,
		"max": 170
	}
};

export default product;
