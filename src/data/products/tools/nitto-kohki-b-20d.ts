import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "nitto-kohki-b-20d",
	"slug": "nitto-kohki-b-20d",
	"brand": "Nitto Kohki",
	"model": "B-20D",
	"mpn": "B-20D",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "Nitto Kohki B-20D",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/nitto-kohki-b-20d.webp",
		"alt": "Repères techniques Nitto Kohki B-20D, référence B-20D",
		"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=38",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "B-20D : ponceuse à bande de 20 × 520 mm, galet de renvoi soutenu d’un seul côté et vitesse de bande de 2 620 m/min. La B-20D-A soutient ce galet des deux côtés. Les deux annoncent 520 L/min à vide sous 0,6 MPa ; la B-20D pèse 1,55 kg contre 1,50 kg pour la version A.",
		"verifiedFacts": [
			"B-20D et B-20D-A : mêmes bandes 20 × 520 mm, vitesse de bande 2 620 m/min et consommation à vide 0,52 m³/min. Le galet est soutenu d’un côté sur B-20D, des deux côtés sur B-20D-A ; masses 1,55 et 1,50 kg.",
			"La consommation retenue est publiée à vide ; elle ne décrit pas la demande en charge."
		],
		"limitations": [
			"La consommation No-load décrit le fonctionnement à vide, pas le fonctionnement en charge.",
			"L’entrée outil est Rc 1/4 ; l’adaptateur R 1/4 × NPT 1/4 est un accessoire distinct."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"evidenceIds": [
				"nitto-kohki-b-20d-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation à vide explicitement publiée (No-load) : 0.52 m³/min. Conversion × 1 000 en L/min.",
			"evidenceIds": [
				"nitto-kohki-b-20d-20260926"
			]
		},
		{
			"label": "Vitesse de rotation publiée",
			"value": "17000 tr/min",
			"evidenceIds": [
				"nitto-kohki-b-20d-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.55 kg",
			"evidenceIds": [
				"nitto-kohki-b-20d-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "nitto-kohki-b-20d-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=38",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 38, réf. B-20D",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.52 m³/min. Conversion × 1 000 en L/min."
		},
		{
			"id": "review-20261025-nitto-kohki-b-20d-s067",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=38",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s067, pages PDF 38",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:38.617802+00:00, SHA-256 96df5508b9819bc71611f875b35af9e282e5bb0bf62e324aab2ab87698867bac. B-20D et B-20D-A : mêmes bandes 20 × 520 mm, vitesse de bande 2 620 m/min et consommation à vide 0,52 m³/min. Le galet est soutenu d’un côté sur B-20D, des deux côtés sur B-20D-A ; masses 1,55 et 1,50 kg. Limite : Ajouter airflowBasis=free-speed ; No-load n’est pas un débit en charge."
		}
	],
	"fieldSources": {
		"mpn": [
			"nitto-kohki-b-20d-20260926"
		],
		"workingPressureBar": [
			"nitto-kohki-b-20d-20260926"
		],
		"airflowLpm": [
			"nitto-kohki-b-20d-20260926",
			"review-20261025-nitto-kohki-b-20d-s067"
		],
		"airflowBasis": [
			"review-20261025-nitto-kohki-b-20d-s067"
		],
		"connectorSize": [
			"review-20261025-nitto-kohki-b-20d-s067"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : Ajouter airflowBasis=free-speed ; No-load n’est pas un débit en charge."
	],
	"airflowLpm": {
		"min": 520,
		"typical": 520,
		"max": 520
	},
	"airflowBasis": "free-speed",
	"connectorSize": "Rc 1/4"
};

export default product;
