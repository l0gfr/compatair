import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "nitto-kohki-bb-10b",
	"slug": "nitto-kohki-bb-10b",
	"brand": "Nitto Kohki",
	"model": "BB-10B",
	"mpn": "BB-10B",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "Nitto Kohki BB-10B",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/nitto-kohki-bb-10b.webp",
		"alt": "Repères techniques Nitto Kohki BB-10B, référence BB-10B",
		"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=40",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Nitto Kohki BB-10B. La table Nitto Kohki nomme explicitement la consommation « No-load » à 0,6 MPa. Le débit à vide est conservé comme tel et ne valide pas une demande en charge. Référence fabricant : BB-10B. Vitesse de rotation publiée : 17000 tr/min. Masse publiée : 0.6 kg. Version retenue : Commande par levier (Lever Switch Type), distincte de la version à bague Non-CE.",
		"verifiedFacts": [
			"Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"Référence fabricant : BB-10B.",
			"Vitesse de rotation publiée : 17000 tr/min.",
			"Masse publiée : 0.6 kg.",
			"Version retenue : Commande par levier (Lever Switch Type), distincte de la version à bague Non-CE.",
			"Consommation à vide publiée : 200 L/min."
		],
		"limitations": [
			"Le débit à vide n’établit pas à lui seul la consommation sous toutes les charges. Respecter les conditions d’emploi de la notice.",
			"La conformité et la disponibilité de la version exacte doivent être confirmées avant achat.",
			"La table Nitto Kohki nomme explicitement la consommation « No-load » à 0,6 MPa. Le débit à vide est conservé comme tel et ne valide pas une demande en charge."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"evidenceIds": [
				"nitto-kohki-bb-10b-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation à vide publiée : 200 L/min.",
			"evidenceIds": [
				"nitto-kohki-bb-10b-reserved-20261031-1"
			]
		},
		{
			"label": "Vitesse de rotation publiée",
			"value": "17000 tr/min",
			"evidenceIds": [
				"nitto-kohki-bb-10b-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.6 kg",
			"evidenceIds": [
				"nitto-kohki-bb-10b-20260926"
			]
		},
		{
			"label": "Version retenue",
			"value": "Commande par levier (Lever Switch Type), distincte de la version à bague Non-CE.",
			"evidenceIds": [
				"nitto-kohki-bb-10b-20260926"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":200,\"typical\":200,\"max\":200},\"workingPressureBar\":{\"min\":6,\"typical\":6,\"max\":6}}",
			"evidenceIds": [
				"nitto-kohki-bb-10b-20260926",
				"nitto-kohki-bb-10b-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "nitto-kohki-bb-10b-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=40",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 40, réf. BB-10B",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.2 m³/min. Conversion × 1 000 en L/min."
		},
		{
			"id": "nitto-kohki-bb-10b-reserved-20261031-1",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=40",
			"sourceLabel": "Nitto Kohki BB-10B : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 96df5508b9819bc71611f875b35af9e282e5bb0bf62e324aab2ab87698867bac. La table Nitto Kohki nomme explicitement la consommation « No-load » à 0,6 MPa. Le débit à vide est conservé comme tel et ne valide pas une demande en charge."
		}
	],
	"fieldSources": {
		"mpn": [
			"nitto-kohki-bb-10b-20260926"
		],
		"workingPressureBar": [
			"nitto-kohki-bb-10b-20260926"
		],
		"airflowLpm": [
			"nitto-kohki-bb-10b-20260926"
		],
		"airflowBasis": [
			"nitto-kohki-bb-10b-reserved-20261031-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 200,
		"typical": 200,
		"max": 200
	},
	"airflowBasis": "free-speed"
};

export default product;
