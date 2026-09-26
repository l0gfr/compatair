const product = {
	"id": "nitto-kohki-l-25b",
	"slug": "nitto-kohki-l-25b",
	"brand": "Nitto Kohki",
	"model": "L-25B",
	"mpn": "L-25B",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Nitto Kohki L-25B",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/nitto-kohki-l-25b.webp",
		"alt": "Repères techniques Nitto Kohki L-25B, référence L-25B",
		"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=45",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Nitto Kohki L-25B, référence L-25B. Le tableau fabricant publie 400 L/min et une plage d’utilisation de 6 à 6 bar. Vitesse de rotation publiée : 27000 tr/min. Masse publiée : 0.6 kg.",
		"verifiedFacts": [
			"Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"Consommation à vide explicitement publiée (No-load) : 0.4 m³/min. Conversion × 1 000 en L/min.",
			"Référence fabricant : L-25B.",
			"Vitesse de rotation publiée : 27000 tr/min.",
			"Masse publiée : 0.6 kg."
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
				"nitto-kohki-l-25b-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation à vide explicitement publiée (No-load) : 0.4 m³/min. Conversion × 1 000 en L/min.",
			"evidenceIds": [
				"nitto-kohki-l-25b-20260926"
			]
		},
		{
			"label": "Vitesse de rotation publiée",
			"value": "27000 tr/min",
			"evidenceIds": [
				"nitto-kohki-l-25b-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.6 kg",
			"evidenceIds": [
				"nitto-kohki-l-25b-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "nitto-kohki-l-25b-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=45",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 45, réf. L-25B",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.4 m³/min. Conversion × 1 000 en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"nitto-kohki-l-25b-20260926"
		],
		"workingPressureBar": [
			"nitto-kohki-l-25b-20260926"
		],
		"airflowLpm": [
			"nitto-kohki-l-25b-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 400,
		"typical": 400,
		"max": 400
	}
};

export default product;
