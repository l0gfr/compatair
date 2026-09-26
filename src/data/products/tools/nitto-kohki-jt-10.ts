const product = {
	"id": "nitto-kohki-jt-10",
	"slug": "nitto-kohki-jt-10",
	"brand": "Nitto Kohki",
	"model": "JT-10",
	"mpn": "JT-10",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Nitto Kohki JT-10",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/nitto-kohki-jt-10.webp",
		"alt": "Repères techniques Nitto Kohki JT-10, référence JT-10",
		"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=34",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Nitto Kohki JT-10, référence JT-10. Le tableau fabricant publie 100 L/min et une plage d’utilisation de 6 à 6 bar. Cadence de frappe publiée : 5500 coups/min. Masse publiée : 0.5 kg.",
		"verifiedFacts": [
			"Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"Consommation à vide explicitement publiée (No-load) : 0.1 m³/min. Conversion × 1 000 en L/min.",
			"Référence fabricant : JT-10.",
			"Cadence de frappe publiée : 5500 coups/min.",
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
				"nitto-kohki-jt-10-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation à vide explicitement publiée (No-load) : 0.1 m³/min. Conversion × 1 000 en L/min.",
			"evidenceIds": [
				"nitto-kohki-jt-10-20260926"
			]
		},
		{
			"label": "Cadence de frappe publiée",
			"value": "5500 coups/min",
			"evidenceIds": [
				"nitto-kohki-jt-10-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.5 kg",
			"evidenceIds": [
				"nitto-kohki-jt-10-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "nitto-kohki-jt-10-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=34",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 34, réf. JT-10",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.1 m³/min. Conversion × 1 000 en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"nitto-kohki-jt-10-20260926"
		],
		"workingPressureBar": [
			"nitto-kohki-jt-10-20260926"
		],
		"airflowLpm": [
			"nitto-kohki-jt-10-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 100,
		"typical": 100,
		"max": 100
	}
};

export default product;
