import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "nitto-kohki-b-10d",
	"slug": "nitto-kohki-b-10d",
	"brand": "Nitto Kohki",
	"model": "B-10D",
	"mpn": "B-10D",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "Nitto Kohki B-10D",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/nitto-kohki-b-10d.webp",
		"alt": "Repères techniques Nitto Kohki B-10D, référence B-10D",
		"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=38",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "B-10D : ponceuse à bande de 10 × 330 mm, 17 000 tr/min et vitesse de bande annoncée de 1 120 m/min. La B-30CL voisine utilise 30 × 540 mm et 2 310 m/min. Les 400 et 820 L/min sont mesurés à vide à 6 bar ; la largeur, le bras et le passage de bande commandent l’accès à la pièce, sans rapport de productivité déduit du débit.",
		"verifiedFacts": [
			"Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"Consommation à vide explicitement publiée (No-load) : 0.4 m³/min. Conversion × 1 000 en L/min.",
			"Référence fabricant : B-10D.",
			"Vitesse de rotation publiée : 17000 tr/min.",
			"Masse publiée : 0.85 kg."
		],
		"limitations": [
			"Le montage optionnel en bande de 6 mm exige les pièces dédiées du fabricant. Les tr/min et les m/min décrivent deux grandeurs distinctes.",
			"Le débit à vide n’établit pas à lui seul la consommation sous toutes les charges. Respecter les conditions d’emploi de la notice.",
			"La conformité et la disponibilité de la version exacte doivent être confirmées avant achat."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"evidenceIds": [
				"nitto-kohki-b-10d-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation à vide explicitement publiée (No-load) : 0.4 m³/min. Conversion × 1 000 en L/min.",
			"evidenceIds": [
				"nitto-kohki-b-10d-20260926"
			]
		},
		{
			"label": "Vitesse de rotation publiée",
			"value": "17000 tr/min",
			"evidenceIds": [
				"nitto-kohki-b-10d-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.85 kg",
			"evidenceIds": [
				"nitto-kohki-b-10d-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "nitto-kohki-b-10d-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=38",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 38, réf. B-10D",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.4 m³/min. Conversion × 1 000 en L/min."
		},
		{
			"id": "nitto-kohki-b-30cl-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=38",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 38, réf. B-30CL",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.82 m³/min. Conversion × 1 000 en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"nitto-kohki-b-10d-20260926"
		],
		"workingPressureBar": [
			"nitto-kohki-b-10d-20260926"
		],
		"airflowLpm": [
			"nitto-kohki-b-10d-20260926"
		],
		"airflowBasis": [
			"nitto-kohki-b-10d-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 400,
		"typical": 400,
		"max": 400
	},
	"airflowBasis": "free-speed"
};

export default product;
