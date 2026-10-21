import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "nitto-kohki-jc-16",
	"slug": "nitto-kohki-jc-16",
	"brand": "Nitto Kohki",
	"model": "JC-16",
	"mpn": "JC-16",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Nitto Kohki JC-16",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/nitto-kohki-jc-16.webp",
		"alt": "Repères techniques Nitto Kohki JC-16, référence JC-16",
		"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=34",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "JC-16 : détartreur pistolet à 29 aiguilles de 2 × 150 mm et 4 000 coups/min. Le JT-16 voisin porte six aiguilles de 3 × 180 mm et annonce 6 000 coups/min. Le tableau donne 150 et 160 L/min à vide à 6 bar. Le faisceau et la forme de l’outil doivent correspondre à la surface et à l’accès ; la différence de cadence ne démontre pas un résultat de décapage supérieur.",
		"verifiedFacts": [
			"Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"Consommation à vide explicitement publiée (No-load) : 0.15 m³/min. Conversion × 1 000 en L/min.",
			"Référence fabricant : JC-16.",
			"Cadence de frappe publiée : 4000 coups/min.",
			"Masse publiée : 1.4 kg."
		],
		"limitations": [
			"Le nombre, le diamètre et la longueur d’aiguilles restent ceux du montage autorisé. Aucune consommation en charge n’est déduite du régime à vide.",
			"Le débit à vide n’établit pas à lui seul la consommation sous toutes les charges. Respecter les conditions d’emploi de la notice.",
			"La conformité et la disponibilité de la version exacte doivent être confirmées avant achat."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"evidenceIds": [
				"nitto-kohki-jc-16-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation à vide explicitement publiée (No-load) : 0.15 m³/min. Conversion × 1 000 en L/min.",
			"evidenceIds": [
				"nitto-kohki-jc-16-20260926"
			]
		},
		{
			"label": "Cadence de frappe publiée",
			"value": "4000 coups/min",
			"evidenceIds": [
				"nitto-kohki-jc-16-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.4 kg",
			"evidenceIds": [
				"nitto-kohki-jc-16-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "nitto-kohki-jc-16-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=34",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 34, réf. JC-16",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.15 m³/min. Conversion × 1 000 en L/min."
		},
		{
			"id": "nitto-kohki-jt-16-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=34",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 34, réf. JT-16",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.16 m³/min. Conversion × 1 000 en L/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"nitto-kohki-jc-16-20260926"
		],
		"workingPressureBar": [
			"nitto-kohki-jc-16-20260926"
		],
		"airflowLpm": [
			"nitto-kohki-jc-16-20260926"
		],
		"airflowBasis": [
			"nitto-kohki-jc-16-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 150,
		"typical": 150,
		"max": 150
	},
	"airflowBasis": "free-speed"
};

export default product;
