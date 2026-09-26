const product = {
	"id": "nitto-kohki-ch-24",
	"slug": "nitto-kohki-ch-24",
	"brand": "Nitto Kohki",
	"model": "CH-24",
	"mpn": "CH-24",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Nitto Kohki CH-24",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/nitto-kohki-ch-24.webp",
		"alt": "Repères techniques Nitto Kohki CH-24, référence CH-24",
		"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=31",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Nitto Kohki CH-24, référence CH-24. Le tableau fabricant publie 200 L/min et une plage d’utilisation de 6 à 6 bar. Cadence de frappe publiée : 4000 coups/min. Masse publiée : 1.7 kg.",
		"verifiedFacts": [
			"Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"Consommation à vide explicitement publiée (No-load) : 0.2 m³/min. Conversion × 1 000 en L/min.",
			"Référence fabricant : CH-24.",
			"Cadence de frappe publiée : 4000 coups/min.",
			"Masse publiée : 1.7 kg."
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
				"nitto-kohki-ch-24-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation à vide explicitement publiée (No-load) : 0.2 m³/min. Conversion × 1 000 en L/min.",
			"evidenceIds": [
				"nitto-kohki-ch-24-20260926"
			]
		},
		{
			"label": "Cadence de frappe publiée",
			"value": "4000 coups/min",
			"evidenceIds": [
				"nitto-kohki-ch-24-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.7 kg",
			"evidenceIds": [
				"nitto-kohki-ch-24-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "nitto-kohki-ch-24-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=31",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 31, réf. CH-24",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.2 m³/min. Conversion × 1 000 en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"nitto-kohki-ch-24-20260926"
		],
		"workingPressureBar": [
			"nitto-kohki-ch-24-20260926"
		],
		"airflowLpm": [
			"nitto-kohki-ch-24-20260926"
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
