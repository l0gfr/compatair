import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "nitto-kohki-myg-70",
	"slug": "nitto-kohki-myg-70",
	"brand": "Nitto Kohki",
	"model": "MYG-70",
	"mpn": "MYG-70",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Nitto Kohki MYG-70",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/nitto-kohki-myg-70.webp",
		"alt": "Repères techniques Nitto Kohki MYG-70, référence MYG-70",
		"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=36",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Nitto Kohki MYG-70, référence MYG-70. Le tableau fabricant publie 950 L/min et une plage d’utilisation de 6 à 6 bar. Vitesse de rotation publiée : 7600 tr/min. Masse publiée : 2.4 kg.",
		"verifiedFacts": [
			"Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"Consommation en charge, la plus élevée des régimes publiés : 0.95 m³/min. Conversion × 1 000 en L/min.",
			"Référence fabricant : MYG-70.",
			"Vitesse de rotation publiée : 7600 tr/min.",
			"Masse publiée : 2.4 kg.",
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
				"nitto-kohki-myg-70-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation en charge, la plus élevée des régimes publiés : 0.95 m³/min. Conversion × 1 000 en L/min.",
			"evidenceIds": [
				"nitto-kohki-myg-70-20260926"
			]
		},
		{
			"label": "Vitesse de rotation publiée",
			"value": "7600 tr/min",
			"evidenceIds": [
				"nitto-kohki-myg-70-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2.4 kg",
			"evidenceIds": [
				"nitto-kohki-myg-70-20260926"
			]
		},
		{
			"label": "Version retenue",
			"value": "Commande par levier (Lever Switch Type), distincte de la version à bague Non-CE.",
			"evidenceIds": [
				"nitto-kohki-myg-70-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "nitto-kohki-myg-70-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=36",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 36, réf. MYG-70",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation en charge, la plus élevée des régimes publiés : 0.95 m³/min. Conversion × 1 000 en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"nitto-kohki-myg-70-20260926"
		],
		"workingPressureBar": [
			"nitto-kohki-myg-70-20260926"
		],
		"airflowLpm": [
			"nitto-kohki-myg-70-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 950,
		"typical": 950,
		"max": 950
	}
};

export default product;
