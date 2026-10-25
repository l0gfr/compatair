import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "nitto-kohki-l-35c",
	"slug": "nitto-kohki-l-35c",
	"brand": "Nitto Kohki",
	"model": "L-35C",
	"mpn": "L-35C",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Nitto Kohki L-35C",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/nitto-kohki-l-35c.webp",
		"alt": "Repères techniques Nitto Kohki L-35C, référence L-35C",
		"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=45",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "L-35C : meuleuse droite prévue notamment pour les fraises rotatives, pince de 6 mm et 37 500 tr/min. Elle pèse 0,45 kg sans flexible, contre 0,60 kg et 27 000 tr/min pour la L-25B. À 0,6 MPa, la table indique 350 L/min à vide pour la L-35C et 400 L/min pour la L-25B.",
		"verifiedFacts": [
			"L-35C contre L-25B : 37 500 contre 27 000 tr/min et masses de 0,45 contre 0,60 kg, sans flexible. Consommations à vide 0,35 contre 0,40 m³/min ; pince de 6 mm dans les deux cas.",
			"La consommation retenue est publiée à vide ; elle ne décrit pas la demande en charge."
		],
		"limitations": [
			"La consommation publiée concerne le fonctionnement à vide ; les masses indiquées excluent le flexible.",
			"Une consommation à vide plus faible ne prouve pas un débit de travail plus faible."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"evidenceIds": [
				"nitto-kohki-l-35c-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation à vide explicitement publiée (No-load) : 0.35 m³/min. Conversion × 1 000 en L/min.",
			"evidenceIds": [
				"nitto-kohki-l-35c-20260926"
			]
		},
		{
			"label": "Vitesse de rotation publiée",
			"value": "37500 tr/min",
			"evidenceIds": [
				"nitto-kohki-l-35c-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.45 kg",
			"evidenceIds": [
				"nitto-kohki-l-35c-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "nitto-kohki-l-35c-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=45",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 45, réf. L-35C",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.35 m³/min. Conversion × 1 000 en L/min."
		},
		{
			"id": "review-20261025-nitto-kohki-l-35c-s067",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=45",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s067, pages PDF 45",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:38.617802+00:00, SHA-256 96df5508b9819bc71611f875b35af9e282e5bb0bf62e324aab2ab87698867bac. L-35C contre L-25B : 37 500 contre 27 000 tr/min et masses de 0,45 contre 0,60 kg, sans flexible. Consommations à vide 0,35 contre 0,40 m³/min ; pince de 6 mm dans les deux cas. Limite : Ajouter airflowBasis=free-speed et conserver la précision de masse « sans flexible »."
		}
	],
	"fieldSources": {
		"mpn": [
			"nitto-kohki-l-35c-20260926"
		],
		"workingPressureBar": [
			"nitto-kohki-l-35c-20260926"
		],
		"airflowLpm": [
			"nitto-kohki-l-35c-20260926",
			"review-20261025-nitto-kohki-l-35c-s067"
		],
		"airflowBasis": [
			"review-20261025-nitto-kohki-l-35c-s067"
		],
		"connectorSize": [
			"review-20261025-nitto-kohki-l-35c-s067"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : Ajouter airflowBasis=free-speed et conserver la précision de masse « sans flexible »."
	],
	"airflowLpm": {
		"min": 350,
		"typical": 350,
		"max": 350
	},
	"airflowBasis": "free-speed",
	"connectorSize": "Rc 1/4"
};

export default product;
