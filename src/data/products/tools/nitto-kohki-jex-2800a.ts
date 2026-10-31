import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "nitto-kohki-jex-2800a",
	"slug": "nitto-kohki-jex-2800a",
	"brand": "Nitto Kohki",
	"model": "JEX-2800A",
	"mpn": "JEX-2800A",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Nitto Kohki JEX-2800A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/nitto-kohki-jex-2800a.webp",
		"alt": "Repères techniques Nitto Kohki JEX-2800A, référence JEX-2800A",
		"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=34",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Nitto Kohki JEX-2800A. La table Nitto Kohki nomme explicitement la consommation « No-load » à 0,6 MPa. Le débit à vide est conservé comme tel et ne valide pas une demande en charge. Référence fabricant : JEX-2800A. Cadence de frappe publiée : 3700 coups/min. Masse publiée : 3.3 kg.",
		"verifiedFacts": [
			"Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"Référence fabricant : JEX-2800A.",
			"Cadence de frappe publiée : 3700 coups/min.",
			"Masse publiée : 3.3 kg.",
			"Consommation à vide publiée : 430 L/min."
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
				"nitto-kohki-jex-2800a-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation à vide publiée : 430 L/min.",
			"evidenceIds": [
				"nitto-kohki-jex-2800a-reserved-20261031-1"
			]
		},
		{
			"label": "Cadence de frappe publiée",
			"value": "3700 coups/min",
			"evidenceIds": [
				"nitto-kohki-jex-2800a-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "3.3 kg",
			"evidenceIds": [
				"nitto-kohki-jex-2800a-20260926"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":430,\"typical\":430,\"max\":430},\"workingPressureBar\":{\"min\":6,\"typical\":6,\"max\":6}}",
			"evidenceIds": [
				"nitto-kohki-jex-2800a-20260926",
				"nitto-kohki-jex-2800a-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "nitto-kohki-jex-2800a-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=34",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 34, réf. JEX-2800A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.43 m³/min. Conversion × 1 000 en L/min."
		},
		{
			"id": "nitto-kohki-jex-2800a-reserved-20261031-1",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=34",
			"sourceLabel": "Nitto Kohki JEX-2800A : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 96df5508b9819bc71611f875b35af9e282e5bb0bf62e324aab2ab87698867bac. La table Nitto Kohki nomme explicitement la consommation « No-load » à 0,6 MPa. Le débit à vide est conservé comme tel et ne valide pas une demande en charge."
		}
	],
	"fieldSources": {
		"mpn": [
			"nitto-kohki-jex-2800a-20260926"
		],
		"workingPressureBar": [
			"nitto-kohki-jex-2800a-20260926"
		],
		"airflowLpm": [
			"nitto-kohki-jex-2800a-20260926"
		],
		"airflowBasis": [
			"nitto-kohki-jex-2800a-reserved-20261031-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 430,
		"typical": 430,
		"max": 430
	},
	"airflowBasis": "free-speed"
};

export default product;
