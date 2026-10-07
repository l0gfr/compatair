import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "nitto-kohki-osv-60a",
	"slug": "nitto-kohki-osv-60a",
	"brand": "Nitto Kohki",
	"model": "OSV-60A",
	"mpn": "OSV-60A",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Nitto Kohki OSV-60A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/nitto-kohki-osv-60a.webp",
		"alt": "Repères techniques Nitto Kohki OSV-60A, référence OSV-60A",
		"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=44",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Nitto Kohki OSV-60A, référence OSV-60A. Le tableau fabricant publie 680 L/min et une plage d’utilisation de 6 à 6 bar. Vitesse de rotation publiée : 8500 tr/min. Masse publiée : 2 kg.",
		"verifiedFacts": [
			"Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"Consommation à vide explicitement publiée (No-load) : 0.68 m³/min. Conversion × 1 000 en L/min.",
			"Référence fabricant : OSV-60A.",
			"Vitesse de rotation publiée : 8500 tr/min.",
			"Masse publiée : 2 kg."
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
				"nitto-kohki-osv-60a-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation à vide explicitement publiée (No-load) : 0.68 m³/min. Conversion × 1 000 en L/min.",
			"evidenceIds": [
				"nitto-kohki-osv-60a-20260926"
			]
		},
		{
			"label": "Vitesse de rotation publiée",
			"value": "8500 tr/min",
			"evidenceIds": [
				"nitto-kohki-osv-60a-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2 kg",
			"evidenceIds": [
				"nitto-kohki-osv-60a-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "nitto-kohki-osv-60a-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=44",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 44, réf. OSV-60A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.68 m³/min. Conversion × 1 000 en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"nitto-kohki-osv-60a-20260926"
		],
		"workingPressureBar": [
			"nitto-kohki-osv-60a-20260926"
		],
		"airflowLpm": [
			"nitto-kohki-osv-60a-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 680,
		"typical": 680,
		"max": 680
	}
};

export default product;
