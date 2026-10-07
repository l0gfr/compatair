import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "nitto-kohki-mg-40",
	"slug": "nitto-kohki-mg-40",
	"brand": "Nitto Kohki",
	"model": "MG-40",
	"mpn": "MG-40",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Nitto Kohki MG-40",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/nitto-kohki-mg-40.webp",
		"alt": "Repères techniques Nitto Kohki MG-40, référence MG-40",
		"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=36",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Nitto Kohki MG-40, référence MG-40. Le tableau fabricant publie 500 L/min et une plage d’utilisation de 6 à 6 bar. Vitesse de rotation publiée : 13000 tr/min. Masse publiée : 1.6 kg.",
		"verifiedFacts": [
			"Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"Consommation à vide explicitement publiée (No-load) : 0.5 m³/min. Conversion × 1 000 en L/min.",
			"Référence fabricant : MG-40.",
			"Vitesse de rotation publiée : 13000 tr/min.",
			"Masse publiée : 1.6 kg.",
			"Version retenue : Commande par levier (Lever Switch Type), distincte de la version à bague Non-CE."
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
				"nitto-kohki-mg-40-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation à vide explicitement publiée (No-load) : 0.5 m³/min. Conversion × 1 000 en L/min.",
			"evidenceIds": [
				"nitto-kohki-mg-40-20260926"
			]
		},
		{
			"label": "Vitesse de rotation publiée",
			"value": "13000 tr/min",
			"evidenceIds": [
				"nitto-kohki-mg-40-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.6 kg",
			"evidenceIds": [
				"nitto-kohki-mg-40-20260926"
			]
		},
		{
			"label": "Version retenue",
			"value": "Commande par levier (Lever Switch Type), distincte de la version à bague Non-CE.",
			"evidenceIds": [
				"nitto-kohki-mg-40-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "nitto-kohki-mg-40-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=36",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 36, réf. MG-40",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.5 m³/min. Conversion × 1 000 en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"nitto-kohki-mg-40-20260926"
		],
		"workingPressureBar": [
			"nitto-kohki-mg-40-20260926"
		],
		"airflowLpm": [
			"nitto-kohki-mg-40-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 500,
		"typical": 500,
		"max": 500
	}
};

export default product;
