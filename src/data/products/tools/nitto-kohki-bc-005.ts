import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "nitto-kohki-bc-005",
	"slug": "nitto-kohki-bc-005",
	"brand": "Nitto Kohki",
	"model": "BC-005",
	"mpn": "BC-005",
	"categoryId": "ebavureuse",
	"category": "ebavureuse",
	"label": "Nitto Kohki BC-005",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/nitto-kohki-bc-005.webp",
		"alt": "Repères techniques Nitto Kohki BC-005, référence BC-005",
		"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=47",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BC-005 : outil d’ébavurage pour trous déjà usinés de 3 à 34 mm. Le levier et l’appui engagent la fraise à chanfreiner ; le tableau annonce 420 tr/min à vide. L’ADR-100 voisine est une perceuse réversible, ce qui répond à une autre opération. Les mandrins pour queues 6, 8 et 10 mm sont fournis, celui de 12 mm est optionnel ; les fraises à chanfreiner sont à acheter séparément. La consommation de 0,22 m³/min, soit 220 L/min, est explicitement à vide au point nominal de 0,6 MPa : elle ne permet pas un verdict en charge.",
		"verifiedFacts": [
			"Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"Consommation à vide explicitement publiée (No-load) : 0.22 m³/min. Conversion × 1 000 en L/min.",
			"Référence fabricant : BC-005.",
			"Vitesse de rotation publiée : 420 tr/min.",
			"Masse publiée : 0.75 kg."
		],
		"limitations": [
			"Le débit à vide n’établit pas à lui seul la consommation sous toutes les charges. Respecter les conditions d’emploi de la notice.",
			"La conformité et la disponibilité de la version exacte doivent être confirmées avant achat.",
			"Les fraises à chanfreiner ne sont pas fournies. Le mandrin 12 mm est optionnel, contrairement aux 6/8/10 mm.",
			"Outil pour ébavurer un trou déjà usiné ; aucun diamètre de queue ou de trou ne constitue ici une capacité de perçage."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"evidenceIds": [
				"nitto-kohki-bc-005-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation à vide explicitement publiée (No-load) : 0.22 m³/min. Conversion × 1 000 en L/min.",
			"evidenceIds": [
				"nitto-kohki-bc-005-20260926"
			]
		},
		{
			"label": "Vitesse de rotation publiée",
			"value": "420 tr/min",
			"evidenceIds": [
				"nitto-kohki-bc-005-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.75 kg",
			"evidenceIds": [
				"nitto-kohki-bc-005-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "nitto-kohki-bc-005-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=47",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 47, réf. BC-005",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.22 m³/min. Conversion × 1 000 en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"nitto-kohki-bc-005-20260926"
		],
		"workingPressureBar": [
			"nitto-kohki-bc-005-20260926"
		],
		"airflowLpm": [
			"nitto-kohki-bc-005-20260926"
		],
		"airflowBasis": [
			"nitto-kohki-bc-005-20260926"
		],
		"category": [
			"nitto-kohki-bc-005-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 220,
		"typical": 220,
		"max": 220
	},
	"airflowBasis": "free-speed"
};

export default product;
