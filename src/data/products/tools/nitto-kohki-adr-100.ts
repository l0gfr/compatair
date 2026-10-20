import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "nitto-kohki-adr-100",
	"slug": "nitto-kohki-adr-100",
	"brand": "Nitto Kohki",
	"model": "ADR-100",
	"mpn": "ADR-100",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Nitto Kohki ADR-100",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/nitto-kohki-adr-100.webp",
		"alt": "Repères techniques Nitto Kohki ADR-100, référence ADR-100",
		"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=48",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "ADR-100 : perceuse réversible, capacité nominale de 10 mm et 2 000 tr/min, contre 6,5 mm et 2 900 pour l’ADR-65. Le tableau donne respectivement 0,67 et 0,55 m³/min à vide à 0,6 MPa. Les 670 L/min du modèle100 ne sont pas un débit maximal en charge ; la capacité et le sens de rotation doivent être choisis avec le perçage prévu.",
		"verifiedFacts": [
			"Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"Consommation à vide explicitement publiée (No-load) : 0.67 m³/min. Conversion × 1 000 en L/min.",
			"Référence fabricant : ADR-100.",
			"Vitesse de rotation publiée : 2000 tr/min.",
			"Masse publiée : 1.1 kg."
		],
		"limitations": [
			"Le mandrin et la matière doivent correspondre à la notice. La consommation à vide ne suffit pas à conclure à la compatibilité du compresseur pendant le perçage.",
			"Le débit à vide n’établit pas à lui seul la consommation sous toutes les charges. Respecter les conditions d’emploi de la notice.",
			"La conformité et la disponibilité de la version exacte doivent être confirmées avant achat."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"evidenceIds": [
				"nitto-kohki-adr-100-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation à vide explicitement publiée (No-load) : 0.67 m³/min. Conversion × 1 000 en L/min.",
			"evidenceIds": [
				"nitto-kohki-adr-100-20260926"
			]
		},
		{
			"label": "Vitesse de rotation publiée",
			"value": "2000 tr/min",
			"evidenceIds": [
				"nitto-kohki-adr-100-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.1 kg",
			"evidenceIds": [
				"nitto-kohki-adr-100-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "nitto-kohki-adr-100-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=48",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 48, réf. ADR-100",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.67 m³/min. Conversion × 1 000 en L/min."
		},
		{
			"id": "nitto-kohki-adr-65-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=48",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 48, réf. ADR-65",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.55 m³/min. Conversion × 1 000 en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"nitto-kohki-adr-100-20260926"
		],
		"workingPressureBar": [
			"nitto-kohki-adr-100-20260926"
		],
		"airflowLpm": [
			"nitto-kohki-adr-100-20260926"
		],
		"airflowBasis": [
			"nitto-kohki-adr-100-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 670,
		"typical": 670,
		"max": 670
	},
	"airflowBasis": "free-speed"
};

export default product;
