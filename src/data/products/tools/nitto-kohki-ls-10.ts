import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "nitto-kohki-ls-10",
	"slug": "nitto-kohki-ls-10",
	"brand": "Nitto Kohki",
	"model": "LS-10",
	"mpn": "LS-10",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "Nitto Kohki LS-10",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/nitto-kohki-ls-10.webp",
		"alt": "Repères techniques Nitto Kohki LS-10, référence LS-10",
		"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=43",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "LS-10 : ponceuse à mouvement alternatif, course de 4 mm et 4 000 courses/min, plateau de 55 × 103 mm pour papier de 57 × 140 mm. La FS-50A voisine possède une orbite de 1,2 mm et un autre plateau. Leurs 110 et 140 L/min sont mesurés à vide à 6 bar : forme du mouvement et papier à commander restent distincts du seul besoin d’air.",
		"verifiedFacts": [
			"Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"Consommation à vide explicitement publiée (No-load) : 0.11 m³/min. Conversion × 1 000 en L/min.",
			"Référence fabricant : LS-10.",
			"Cadence de courses publiée : 4 000 courses/min, mouvement alternatif de ponçage.",
			"Masse publiée : 0.75 kg."
		],
		"limitations": [
			"La cadence n’est pas une cadence de frappe d’un burineur. Le papier et sa fixation doivent correspondre au plateau, sans prédiction de finition depuis la seule course.",
			"Le débit à vide n’établit pas à lui seul la consommation sous toutes les charges. Respecter les conditions d’emploi de la notice.",
			"La conformité et la disponibilité de la version exacte doivent être confirmées avant achat."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"evidenceIds": [
				"nitto-kohki-ls-10-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation à vide explicitement publiée (No-load) : 0.11 m³/min. Conversion × 1 000 en L/min.",
			"evidenceIds": [
				"nitto-kohki-ls-10-20260926"
			]
		},
		{
			"label": "Cadence de courses publiée",
			"value": "4 000 courses/min, mouvement alternatif de ponçage.",
			"evidenceIds": [
				"nitto-kohki-ls-10-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.75 kg",
			"evidenceIds": [
				"nitto-kohki-ls-10-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "nitto-kohki-ls-10-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=43",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 43, réf. LS-10",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.11 m³/min. Conversion × 1 000 en L/min."
		},
		{
			"id": "nitto-kohki-fs-50a-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=43",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 43, réf. FS-50A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.14 m³/min. Conversion × 1 000 en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"nitto-kohki-ls-10-20260926"
		],
		"workingPressureBar": [
			"nitto-kohki-ls-10-20260926"
		],
		"airflowLpm": [
			"nitto-kohki-ls-10-20260926"
		],
		"airflowBasis": [
			"nitto-kohki-ls-10-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 110,
		"typical": 110,
		"max": 110
	},
	"airflowBasis": "free-speed"
};

export default product;
