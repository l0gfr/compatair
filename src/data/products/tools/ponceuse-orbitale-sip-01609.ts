import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-sip-01609",
	"slug": "ponceuse-orbitale-sip-01609",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "SIP 01609",
	"brand": "SIP",
	"model": "01609",
	"mpn": "01609",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-sip-01609.svg",
		"alt": "Repères techniques : SIP 01609",
		"sourceUrl": "https://www.sip-group.com/product/category/193/sip-6%22-dual-action-air-sander/01609",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sip-01609",
		"label": "Référence 01609",
		"distinguishingAttributes": {
			"reference": "01609",
			"Pad Size:": "Ø 6\" (152mm)",
			"No-Load Speed:": "10,000rpm"
		}
	},
	"editorial": {
		"overview": "SIP 01609. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Pad Size: : Ø 6\" (152mm).",
			"No-Load Speed: : 10,000rpm.",
			"Sound Power (LwA): : 98dB(A).",
			"Net Weight: : 1.84kg."
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
			"label": "Pad Size:",
			"value": "Ø 6\" (152mm)",
			"evidenceIds": [
				"october5-tools-sip-tool-000-p1"
			]
		},
		{
			"label": "No-Load Speed:",
			"value": "10,000rpm",
			"evidenceIds": [
				"october5-tools-sip-tool-000-p1"
			]
		},
		{
			"label": "Sound Power (LwA):",
			"value": "98dB(A)",
			"evidenceIds": [
				"october5-tools-sip-tool-000-p1"
			]
		},
		{
			"label": "Net Weight:",
			"value": "1.84kg",
			"evidenceIds": [
				"october5-tools-sip-tool-000-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-sip-tool-000-p1",
			"sourceUrl": "https://www.sip-group.com/product/category/193/sip-6%22-dual-action-air-sander/01609",
			"sourceLabel": "SIP fiche technique officielle 01609",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 4125a7e0c2a820f1d19295d1fc5fccb4f12d5ec57858071bb2d408258cdb0928. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-sip-tool-000-p1"
		],
		"workingPressureBar": [
			"october5-tools-sip-tool-000-p1"
		],
		"demandExplanation": [
			"october5-tools-sip-tool-000-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
