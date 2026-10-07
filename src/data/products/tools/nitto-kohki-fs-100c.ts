import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "nitto-kohki-fs-100c",
	"slug": "nitto-kohki-fs-100c",
	"brand": "Nitto Kohki",
	"model": "FS-100C",
	"mpn": "FS-100C",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Nitto Kohki FS-100C",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/nitto-kohki-fs-100c.webp",
		"alt": "Repères techniques Nitto Kohki FS-100C, référence FS-100C",
		"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=43",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Nitto Kohki FS-100C, référence FS-100C. Le tableau fabricant publie 200 L/min et une plage d’utilisation de 6 à 6 bar. Vitesse de rotation publiée : 20000 tr/min. Masse publiée : 0.5 kg.",
		"verifiedFacts": [
			"Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"Consommation à vide explicitement publiée (No-load) : 0.2 m³/min. Conversion × 1 000 en L/min.",
			"Référence fabricant : FS-100C.",
			"Vitesse de rotation publiée : 20000 tr/min.",
			"Masse publiée : 0.5 kg."
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
				"nitto-kohki-fs-100c-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation à vide explicitement publiée (No-load) : 0.2 m³/min. Conversion × 1 000 en L/min.",
			"evidenceIds": [
				"nitto-kohki-fs-100c-20260926"
			]
		},
		{
			"label": "Vitesse de rotation publiée",
			"value": "20000 tr/min",
			"evidenceIds": [
				"nitto-kohki-fs-100c-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.5 kg",
			"evidenceIds": [
				"nitto-kohki-fs-100c-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "nitto-kohki-fs-100c-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=43",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 43, réf. FS-100C",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.2 m³/min. Conversion × 1 000 en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"nitto-kohki-fs-100c-20260926"
		],
		"workingPressureBar": [
			"nitto-kohki-fs-100c-20260926"
		],
		"airflowLpm": [
			"nitto-kohki-fs-100c-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 200,
		"typical": 200,
		"max": 200
	}
};

export default product;
