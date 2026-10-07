import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-sip-02132",
	"slug": "pistolet-peinture-sip-02132",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "SIP 02132",
	"brand": "SIP",
	"model": "02132",
	"mpn": "02132",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-sip-02132.svg",
		"alt": "Repères techniques : SIP 02132",
		"sourceUrl": "https://www.sip-group.com/product/category/193/sip-2mm-diamond-suction-spray-gun/02132",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sip-02132",
		"label": "Référence 02132",
		"distinguishingAttributes": {
			"reference": "02132",
			"Feed Type:": "Suction",
			"Nozzle Diameter:": "Ø 2mm"
		}
	},
	"editorial": {
		"overview": "SIP 02132. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Feed Type: : Suction.",
			"Nozzle Diameter: : Ø 2mm.",
			"Paint Cup Capacity: : 1ltr.",
			"Water Based Paint: : Yes.",
			"Net Weight: : 1.31kg.",
			"Product Dimensions: : 125(H) x 125(W) x 300mm(D)."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"La consommation est présentée comme une moyenne. Le cycle d’utilisation n’est pas défini ; elle n’est pas convertie en consommation continue en charge.",
			"La pression Air Pressure / Operating Pressure est une prescription de fonctionnement, sans pression de mesure explicitement rattachée à un régime qualifié.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Feed Type:",
			"value": "Suction",
			"evidenceIds": [
				"october5-tools-sip-tool-005-p1"
			]
		},
		{
			"label": "Nozzle Diameter:",
			"value": "Ø 2mm",
			"evidenceIds": [
				"october5-tools-sip-tool-005-p1"
			]
		},
		{
			"label": "Paint Cup Capacity:",
			"value": "1ltr",
			"evidenceIds": [
				"october5-tools-sip-tool-005-p1"
			]
		},
		{
			"label": "Water Based Paint:",
			"value": "Yes",
			"evidenceIds": [
				"october5-tools-sip-tool-005-p1"
			]
		},
		{
			"label": "Net Weight:",
			"value": "1.31kg",
			"evidenceIds": [
				"october5-tools-sip-tool-005-p1"
			]
		},
		{
			"label": "Product Dimensions:",
			"value": "125(H) x 125(W) x 300mm(D)",
			"evidenceIds": [
				"october5-tools-sip-tool-005-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-sip-tool-005-p1",
			"sourceUrl": "https://www.sip-group.com/product/category/193/sip-2mm-diamond-suction-spray-gun/02132",
			"sourceLabel": "SIP fiche technique officielle 02132",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 23486b9e2ef38067d5bd7042829e67d7830b72563481d8cf65636ece6574a2cd. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-sip-tool-005-p1"
		],
		"workingPressureBar": [
			"october5-tools-sip-tool-005-p1"
		],
		"demandExplanation": [
			"october5-tools-sip-tool-005-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
