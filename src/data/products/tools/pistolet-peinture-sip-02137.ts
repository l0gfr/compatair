import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-sip-02137",
	"slug": "pistolet-peinture-sip-02137",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "SIP 02137",
	"brand": "SIP",
	"model": "02137",
	"mpn": "02137",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-sip-02137.svg",
		"alt": "Repères techniques : SIP 02137",
		"sourceUrl": "https://www.sip-group.com/product/category/193/sip-1.5mm-cobalt-gravity-spray-gun/02137",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sip-02137",
		"label": "Référence 02137",
		"distinguishingAttributes": {
			"reference": "02137",
			"Feed Type:": "Gravity",
			"Nozzle Diameter:": "Ø 1.5mm"
		}
	},
	"editorial": {
		"overview": "SIP 02137. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Feed Type: : Gravity.",
			"Nozzle Diameter: : Ø 1.5mm.",
			"Paint Cup Capacity: : 600ml.",
			"Water Based Paint: : No.",
			"Net Weight: : 1.33kg.",
			"Product Dimensions: : 125(H) x 125(W) x 250mm(D)."
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
			"value": "Gravity",
			"evidenceIds": [
				"october5-tools-sip-tool-007-p1"
			]
		},
		{
			"label": "Nozzle Diameter:",
			"value": "Ø 1.5mm",
			"evidenceIds": [
				"october5-tools-sip-tool-007-p1"
			]
		},
		{
			"label": "Paint Cup Capacity:",
			"value": "600ml",
			"evidenceIds": [
				"october5-tools-sip-tool-007-p1"
			]
		},
		{
			"label": "Water Based Paint:",
			"value": "No",
			"evidenceIds": [
				"october5-tools-sip-tool-007-p1"
			]
		},
		{
			"label": "Net Weight:",
			"value": "1.33kg",
			"evidenceIds": [
				"october5-tools-sip-tool-007-p1"
			]
		},
		{
			"label": "Product Dimensions:",
			"value": "125(H) x 125(W) x 250mm(D)",
			"evidenceIds": [
				"october5-tools-sip-tool-007-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-sip-tool-007-p1",
			"sourceUrl": "https://www.sip-group.com/product/category/193/sip-1.5mm-cobalt-gravity-spray-gun/02137",
			"sourceLabel": "SIP fiche technique officielle 02137",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 e1f651e195be2422cab3615d46bec88805732d6e3c315add1345e288e4890594. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-sip-tool-007-p1"
		],
		"workingPressureBar": [
			"october5-tools-sip-tool-007-p1"
		],
		"demandExplanation": [
			"october5-tools-sip-tool-007-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
