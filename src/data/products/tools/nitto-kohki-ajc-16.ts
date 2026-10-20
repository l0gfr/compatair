import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "nitto-kohki-ajc-16",
	"slug": "nitto-kohki-ajc-16",
	"brand": "Nitto Kohki",
	"model": "AJC-16",
	"mpn": "AJC-16",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Nitto Kohki AJC-16",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/nitto-kohki-ajc-16.webp",
		"alt": "Repères techniques Nitto Kohki AJC-16, référence AJC-16",
		"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=34",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "AJC-16 : détartreur élancé à sept aiguilles de 1,6 × 120 mm, contre douze aiguilles de 3 × 180 mm pour le JT-16 voisin. Les deux annoncent 6 000 coups/min, mais le tableau distingue 0,07 et 0,16 m³/min à vide à 0,6 MPa. Le faisceau et l’accès à la surface distinguent l’usage avant la comparaison des 70 et 160 L/min.",
		"verifiedFacts": [
			"Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"Consommation à vide explicitement publiée (No-load) : 0.07 m³/min. Conversion × 1 000 en L/min.",
			"Référence fabricant : AJC-16.",
			"Cadence de frappe publiée : 6000 coups/min.",
			"Masse publiée : 0.98 kg."
		],
		"limitations": [
			"Le nombre et le diamètre d’aiguilles doivent rester ceux du montage autorisé. Le régime à vide ne devient pas une consommation en charge ni un résultat de décapage garanti.",
			"Le débit à vide n’établit pas à lui seul la consommation sous toutes les charges. Respecter les conditions d’emploi de la notice.",
			"La conformité et la disponibilité de la version exacte doivent être confirmées avant achat."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"evidenceIds": [
				"nitto-kohki-ajc-16-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation à vide explicitement publiée (No-load) : 0.07 m³/min. Conversion × 1 000 en L/min.",
			"evidenceIds": [
				"nitto-kohki-ajc-16-20260926"
			]
		},
		{
			"label": "Cadence de frappe publiée",
			"value": "6000 coups/min",
			"evidenceIds": [
				"nitto-kohki-ajc-16-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.98 kg",
			"evidenceIds": [
				"nitto-kohki-ajc-16-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "nitto-kohki-ajc-16-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=34",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 34, réf. AJC-16",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.07 m³/min. Conversion × 1 000 en L/min."
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
			"nitto-kohki-ajc-16-20260926"
		],
		"workingPressureBar": [
			"nitto-kohki-ajc-16-20260926"
		],
		"airflowLpm": [
			"nitto-kohki-ajc-16-20260926"
		],
		"airflowBasis": [
			"nitto-kohki-ajc-16-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 70,
		"typical": 70,
		"max": 70
	},
	"airflowBasis": "free-speed"
};

export default product;
