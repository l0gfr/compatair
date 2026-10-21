import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "nitto-kohki-mys-20l",
	"slug": "nitto-kohki-mys-20l",
	"brand": "Nitto Kohki",
	"model": "MYS-20L",
	"mpn": "MYS-20L",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Nitto Kohki MYS-20L",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/nitto-kohki-mys-20l.webp",
		"alt": "Repères techniques Nitto Kohki MYS-20L, référence MYS-20L",
		"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=37",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "MYS-20L : petite ponceuse rotative pour disques de 1, 1,5 ou 2 pouces, 19 000 tr/min, longueur de 132 mm et masse de 0,6 kg. La MYS-40 voisine reçoit 100 mm à 13 700 tr/min. Les 390 et 450 L/min sont explicitement mesurés à vide à 6 bar. Le diamètre de travail et l’accès changent sans que ces chiffres prédisent l’enlèvement de matière.",
		"verifiedFacts": [
			"Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"Consommation à vide explicitement publiée (No-load) : 0.39 m³/min. Conversion × 1 000 en L/min.",
			"Référence fabricant : MYS-20L.",
			"Vitesse de rotation publiée : 19000 tr/min.",
			"Masse publiée : 0.6 kg."
		],
		"limitations": [
			"Les montages de disque et leurs vitesses doivent suivre la notice. Aucun plateau n’est déclaré universel depuis le seul diamètre nominal.",
			"Le débit à vide n’établit pas à lui seul la consommation sous toutes les charges. Respecter les conditions d’emploi de la notice.",
			"La conformité et la disponibilité de la version exacte doivent être confirmées avant achat."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"evidenceIds": [
				"nitto-kohki-mys-20l-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation à vide explicitement publiée (No-load) : 0.39 m³/min. Conversion × 1 000 en L/min.",
			"evidenceIds": [
				"nitto-kohki-mys-20l-20260926"
			]
		},
		{
			"label": "Vitesse de rotation publiée",
			"value": "19000 tr/min",
			"evidenceIds": [
				"nitto-kohki-mys-20l-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.6 kg",
			"evidenceIds": [
				"nitto-kohki-mys-20l-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "nitto-kohki-mys-20l-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=37",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 37, réf. MYS-20L",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.39 m³/min. Conversion × 1 000 en L/min."
		},
		{
			"id": "nitto-kohki-mys-40-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=37",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 37, réf. MYS-40",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.45 m³/min. Conversion × 1 000 en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"nitto-kohki-mys-20l-20260926"
		],
		"workingPressureBar": [
			"nitto-kohki-mys-20l-20260926"
		],
		"airflowLpm": [
			"nitto-kohki-mys-20l-20260926"
		],
		"airflowBasis": [
			"nitto-kohki-mys-20l-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 390,
		"typical": 390,
		"max": 390
	},
	"airflowBasis": "free-speed"
};

export default product;
