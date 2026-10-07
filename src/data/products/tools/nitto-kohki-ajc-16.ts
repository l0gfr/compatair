import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "nitto-kohki-ajc-16",
	"slug": "nitto-kohki-ajc-16",
	"brand": "Nitto Kohki",
	"model": "AJC-16",
	"mpn": "AJC-16",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Nitto Kohki AJC-16",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/nitto-kohki-ajc-16.webp",
		"alt": "Repères techniques Nitto Kohki AJC-16, référence AJC-16",
		"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=34",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Nitto Kohki AJC-16, référence AJC-16. Le tableau fabricant publie 70 L/min et une plage d’utilisation de 6 à 6 bar. Cadence de frappe publiée : 6000 coups/min. Masse publiée : 0.98 kg.",
		"verifiedFacts": [
			"Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"Consommation à vide explicitement publiée (No-load) : 0.07 m³/min. Conversion × 1 000 en L/min.",
			"Référence fabricant : AJC-16.",
			"Cadence de frappe publiée : 6000 coups/min.",
			"Masse publiée : 0.98 kg."
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
				"nitto-kohki-ajc-16-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation à vide explicitement publiée (No-load) : 0.07 m³/min. Conversion × 1 000 en L/min.",
			"evidenceIds": [
				"nitto-kohki-ajc-16-20260926"
			]
		},
		{
			"label": "Cadence de frappe publiée",
			"value": "6000 coups/min",
			"evidenceIds": [
				"nitto-kohki-ajc-16-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.98 kg",
			"evidenceIds": [
				"nitto-kohki-ajc-16-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "nitto-kohki-ajc-16-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=34",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 34, réf. AJC-16",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.07 m³/min. Conversion × 1 000 en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"nitto-kohki-ajc-16-20260926"
		],
		"workingPressureBar": [
			"nitto-kohki-ajc-16-20260926"
		],
		"airflowLpm": [
			"nitto-kohki-ajc-16-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 70,
		"typical": 70,
		"max": 70
	}
};

export default product;
