import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "nitto-kohki-jt-20",
	"slug": "nitto-kohki-jt-20",
	"brand": "Nitto Kohki",
	"model": "JT-20",
	"mpn": "JT-20",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Nitto Kohki JT-20",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/nitto-kohki-jt-20-20261106.svg",
		"alt": "Repères techniques Nitto Kohki JT-20, référence JT-20",
		"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=34",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Nitto Kohki JT-20, référence JT-20. Le tableau fabricant publie 200 L/min et une plage d’utilisation de 6 à 6 bar. Cadence de frappe publiée : 4000 coups/min. Masse publiée : 2.4 kg.",
		"verifiedFacts": [
			"Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"Consommation à vide explicitement publiée (No-load) : 0.2 m³/min. Conversion × 1 000 en L/min.",
			"Référence fabricant : JT-20.",
			"Cadence de frappe publiée : 4000 coups/min.",
			"Masse publiée : 2.4 kg."
		],
		"limitations": [
			"Le débit à vide n’établit pas à lui seul la consommation sous toutes les charges. Respecter les conditions d’emploi de la notice.",
			"La conformité et la disponibilité de la version exacte doivent être confirmées avant achat.",
			"La consommation publiée est mesurée à vide ; le besoin en charge reste à documenter."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de 0,6 MPa publiée dans le tableau, soit 6 bar. La valeur en kgf/cm² entre parenthèses n’est pas utilisée pour la conversion.",
			"evidenceIds": [
				"nitto-kohki-jt-20-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation à vide explicitement publiée (No-load) : 0.2 m³/min. Conversion × 1 000 en L/min.",
			"evidenceIds": [
				"nitto-kohki-jt-20-20260926"
			]
		},
		{
			"label": "Cadence de frappe publiée",
			"value": "4000 coups/min",
			"evidenceIds": [
				"nitto-kohki-jt-20-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2.4 kg",
			"evidenceIds": [
				"nitto-kohki-jt-20-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "nitto-kohki-jt-20-20260926",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=34",
			"sourceLabel": "Nitto Kohki, catalogue officiel des outils, p. 34, réf. JT-20",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation à vide explicitement publiée (No-load) : 0.2 m³/min. Conversion × 1 000 en L/min."
		},
		{
			"id": "review:2026-11-06-followup:nitto-kohki-jt-20:1",
			"sourceUrl": "https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=34",
			"sourceLabel": "Nitto Kohki, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "ToolsCatalog p34 confirmeJT20,0,20m³min explicitementNo-loadà0,6MPa,12aiguilles3×180mm,contreJT16 sixaiguilleset0,16. Valeuràvide200Lmin utilisée sans airflowBasis actuellement; conserver le régime free-speed pour éviter une conclusion encharge. SHA-256 du document complet : 96df5508b9819bc71611f875b35af9e282e5bb0bf62e324aab2ab87698867bac."
		}
	],
	"fieldSources": {
		"mpn": [
			"nitto-kohki-jt-20-20260926"
		],
		"workingPressureBar": [
			"nitto-kohki-jt-20-20260926"
		],
		"airflowLpm": [
			"nitto-kohki-jt-20-20260926"
		],
		"airflowBasis": [
			"review:2026-11-06-followup:nitto-kohki-jt-20:1"
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
