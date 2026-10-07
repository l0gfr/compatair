import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-hvlp-sip-02136",
	"slug": "pistolet-peinture-hvlp-sip-02136",
	"categoryId": "pistolet-peinture-hvlp",
	"category": "pistolet-peinture-hvlp",
	"label": "SIP 02136",
	"brand": "SIP",
	"model": "02136",
	"mpn": "02136",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-hvlp-sip-02136.svg",
		"alt": "Repères techniques : SIP 02136",
		"sourceUrl": "https://www.sip-group.com/product/category/193/sip-1.8mm-mirage-hvlp-suction-spray-gun/02136",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sip-02136",
		"label": "Référence 02136",
		"distinguishingAttributes": {
			"reference": "02136",
			"Feed Type:": "Suction",
			"Nozzle Diameter:": "Ø 1.8mm"
		}
	},
	"editorial": {
		"overview": "SIP 02136. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Feed Type: : Suction.",
			"Nozzle Diameter: : Ø 1.8mm.",
			"Paint Cup Capacity: : 1ltr.",
			"Water Based Paint: : Yes.",
			"Net Weight: : 1.33kg.",
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
				"october5-tools-sip-tool-006-p1"
			]
		},
		{
			"label": "Nozzle Diameter:",
			"value": "Ø 1.8mm",
			"evidenceIds": [
				"october5-tools-sip-tool-006-p1"
			]
		},
		{
			"label": "Paint Cup Capacity:",
			"value": "1ltr",
			"evidenceIds": [
				"october5-tools-sip-tool-006-p1"
			]
		},
		{
			"label": "Water Based Paint:",
			"value": "Yes",
			"evidenceIds": [
				"october5-tools-sip-tool-006-p1"
			]
		},
		{
			"label": "Net Weight:",
			"value": "1.33kg",
			"evidenceIds": [
				"october5-tools-sip-tool-006-p1"
			]
		},
		{
			"label": "Product Dimensions:",
			"value": "125(H) x 125(W) x 300mm(D)",
			"evidenceIds": [
				"october5-tools-sip-tool-006-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-sip-tool-006-p1",
			"sourceUrl": "https://www.sip-group.com/product/category/193/sip-1.8mm-mirage-hvlp-suction-spray-gun/02136",
			"sourceLabel": "SIP fiche technique officielle 02136",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 aae24e54c59f00f8f4ded30c3e26f8dae3b1c7886b6971fce09aaa4aa99316ff. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-sip-tool-006-p1"
		],
		"workingPressureBar": [
			"october5-tools-sip-tool-006-p1"
		],
		"demandExplanation": [
			"october5-tools-sip-tool-006-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
