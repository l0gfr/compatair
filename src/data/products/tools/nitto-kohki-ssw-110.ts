const product = {
	"id": "nitto-kohki-ssw-110",
	"slug": "nitto-kohki-ssw-110",
	"brand": "Nitto Kohki",
	"model": "SSW-110",
	"mpn": "SSW-110",
	"categoryId": "scie",
	"category": "scie",
	"label": "Nitto Kohki SSW-110",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/nitto-kohki-ssw-110.webp",
		"alt": "Repères techniques Nitto Kohki SSW-110, référence SSW-110",
		"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=48",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Nitto Kohki SSW-110, référence SSW-110. Le tableau fabricant publie 290 L/min et une plage d’utilisation de 6 à 6 bar. Cadence de frappe publiée : 7000 coups/min. Masse publiée : 0.62 kg.",
		"verifiedFacts": [
			"Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"Consommation à vide explicitement publiée (No-load) : 0.29 m³/min. Conversion × 1 000 en L/min.",
			"Référence fabricant : SSW-110.",
			"Cadence de frappe publiée : 7000 coups/min.",
			"Masse publiée : 0.62 kg."
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
				"nitto-kohki-ssw-110-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation à vide explicitement publiée (No-load) : 0.29 m³/min. Conversion × 1 000 en L/min.",
			"evidenceIds": [
				"nitto-kohki-ssw-110-20260926"
			]
		},
		{
			"label": "Cadence de frappe publiée",
			"value": "7000 coups/min",
			"evidenceIds": [
				"nitto-kohki-ssw-110-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.62 kg",
			"evidenceIds": [
				"nitto-kohki-ssw-110-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "nitto-kohki-ssw-110-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=48",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 48, réf. SSW-110",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.29 m³/min. Conversion × 1 000 en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"nitto-kohki-ssw-110-20260926"
		],
		"workingPressureBar": [
			"nitto-kohki-ssw-110-20260926"
		],
		"airflowLpm": [
			"nitto-kohki-ssw-110-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 290,
		"typical": 290,
		"max": 290
	}
};

export default product;
