const product = {
	"id": "nitto-kohki-adr-65",
	"slug": "nitto-kohki-adr-65",
	"brand": "Nitto Kohki",
	"model": "ADR-65",
	"mpn": "ADR-65",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Nitto Kohki ADR-65",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/nitto-kohki-adr-65.webp",
		"alt": "Repères techniques Nitto Kohki ADR-65, référence ADR-65",
		"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=48",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Nitto Kohki ADR-65, référence ADR-65. Le tableau fabricant publie 550 L/min et une plage d’utilisation de 6 à 6 bar. Vitesse de rotation publiée : 2900 tr/min. Masse publiée : 0.8 kg.",
		"verifiedFacts": [
			"Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"Consommation à vide explicitement publiée (No-load) : 0.55 m³/min. Conversion × 1 000 en L/min.",
			"Référence fabricant : ADR-65.",
			"Vitesse de rotation publiée : 2900 tr/min.",
			"Masse publiée : 0.8 kg."
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
				"nitto-kohki-adr-65-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation à vide explicitement publiée (No-load) : 0.55 m³/min. Conversion × 1 000 en L/min.",
			"evidenceIds": [
				"nitto-kohki-adr-65-20260926"
			]
		},
		{
			"label": "Vitesse de rotation publiée",
			"value": "2900 tr/min",
			"evidenceIds": [
				"nitto-kohki-adr-65-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.8 kg",
			"evidenceIds": [
				"nitto-kohki-adr-65-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "nitto-kohki-adr-65-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=48",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 48, réf. ADR-65",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.55 m³/min. Conversion × 1 000 en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"nitto-kohki-adr-65-20260926"
		],
		"workingPressureBar": [
			"nitto-kohki-adr-65-20260926"
		],
		"airflowLpm": [
			"nitto-kohki-adr-65-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 550,
		"typical": 550,
		"max": 550
	}
};

export default product;
