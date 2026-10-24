import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "nitto-kohki-b-20d-a",
	"slug": "nitto-kohki-b-20d-a",
	"brand": "Nitto Kohki",
	"model": "B-20D-A",
	"mpn": "B-20D-A",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "Nitto Kohki B-20D-A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/nitto-kohki-b-20d-a.webp",
		"alt": "Repères techniques Nitto Kohki B-20D-A, référence B-20D-A",
		"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=38",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "B-20D-A soutient son galet avant des deux côtés, tandis que B-20D le soutient d’un seul côté selon le schéma Nitto Kohki. Les deux utilisent une bande de 20 × 520 mm, tournent à 17 000 tr/min et publient une vitesse linéaire de bande de 2 620 m/min. Leurs masses sont respectivement 1,50 et 1,55 kg ; la différence de support du galet doit être examinée avec l’accès à la pièce. Leur consommation commune de 520 l/min est explicitement mesurée à vide à 0,6 MPa, soit 6 bar, et ne couvre pas toutes les conditions de charge.",
		"verifiedFacts": [
			"Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"Consommation à vide explicitement publiée (No-load) : 0.52 m³/min. Conversion × 1 000 en L/min.",
			"Référence fabricant : B-20D-A.",
			"Vitesse de rotation publiée : 17000 tr/min.",
			"Masse publiée : 1.5 kg."
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
				"nitto-kohki-b-20d-a-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation à vide explicitement publiée (No-load) : 0.52 m³/min. Conversion × 1 000 en L/min.",
			"evidenceIds": [
				"nitto-kohki-b-20d-a-20260926"
			]
		},
		{
			"label": "Vitesse de rotation publiée",
			"value": "17000 tr/min",
			"evidenceIds": [
				"nitto-kohki-b-20d-a-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.5 kg",
			"evidenceIds": [
				"nitto-kohki-b-20d-a-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "nitto-kohki-b-20d-a-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=38",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 38, réf. B-20D-A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.52 m³/min. Conversion × 1 000 en L/min."
		},
		{
			"id": "nitto-kohki-b-20d-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=38",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 38, réf. B-20D",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.52 m³/min. Conversion × 1 000 en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"nitto-kohki-b-20d-a-20260926"
		],
		"workingPressureBar": [
			"nitto-kohki-b-20d-a-20260926"
		],
		"airflowLpm": [
			"nitto-kohki-b-20d-a-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 520,
		"typical": 520,
		"max": 520
	}
};

export default product;
