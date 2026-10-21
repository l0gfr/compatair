import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "nitto-kohki-ssw-110",
	"slug": "nitto-kohki-ssw-110",
	"brand": "Nitto Kohki",
	"model": "SSW-110",
	"mpn": "SSW-110",
	"categoryId": "scie",
	"category": "scie",
	"label": "Nitto Kohki SSW-110",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/nitto-kohki-ssw-110.webp",
		"alt": "Repères techniques Nitto Kohki SSW-110, référence SSW-110",
		"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=48",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "SSW-110 : scie à course de 11 mm et 7 000 courses/min ; le tableau annonce une épaisseur maximale de plaque de 3 mm sans généraliser à tout matériau. La SI-4740 voisine donne 5 mm de course et 10 500 courses/min. La SSW publie 290 L/min à vide à 6 bar ; les 288 L/min de la Shinano sont un maximum à 6,3 bar et ne forment pas un essai comparatif à conditions égales.",
		"verifiedFacts": [
			"Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"Consommation à vide explicitement publiée (No-load) : 0.29 m³/min. Conversion × 1 000 en L/min.",
			"Référence fabricant : SSW-110.",
			"Cadence de courses publiée : 7 000 courses/min de la scie.",
			"Masse publiée : 0.62 kg."
		],
		"limitations": [
			"La denture doit correspondre au matériau et à l’épaisseur. Une cadence de courses n’est pas une cadence de frappe, et les deux régimes d’air ne sont pas assimilés.",
			"Le débit à vide n’établit pas à lui seul la consommation sous toutes les charges. Respecter les conditions d’emploi de la notice.",
			"La conformité et la disponibilité de la version exacte doivent être confirmées avant achat."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"evidenceIds": [
				"nitto-kohki-ssw-110-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation à vide explicitement publiée (No-load) : 0.29 m³/min. Conversion × 1 000 en L/min.",
			"evidenceIds": [
				"nitto-kohki-ssw-110-20260926"
			]
		},
		{
			"label": "Cadence de courses publiée",
			"value": "7 000 courses/min de la scie.",
			"evidenceIds": [
				"nitto-kohki-ssw-110-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.62 kg",
			"evidenceIds": [
				"nitto-kohki-ssw-110-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "nitto-kohki-ssw-110-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=48",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 48, réf. SSW-110",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.29 m³/min. Conversion × 1 000 en L/min."
		},
		{
			"id": "shinano-si-4740-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=25",
			"sourceLabel": "Shinano, catalogue général 2025, p. 25, réf. SI-4740",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 10.2 CFM / 4.8 L/s, soit 288 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-4740-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "shinano-si-4730-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=24",
			"sourceLabel": "Shinano, catalogue général 2025, p. 24, réf. SI-4730",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 18 CFM / 8.5 L/s, soit 510 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-4730-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		}
	],
	"fieldSources": {
		"mpn": [
			"nitto-kohki-ssw-110-20260926"
		],
		"workingPressureBar": [
			"nitto-kohki-ssw-110-20260926"
		],
		"airflowLpm": [
			"nitto-kohki-ssw-110-20260926"
		],
		"airflowBasis": [
			"nitto-kohki-ssw-110-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 290,
		"typical": 290,
		"max": 290
	},
	"airflowBasis": "free-speed"
};

export default product;
