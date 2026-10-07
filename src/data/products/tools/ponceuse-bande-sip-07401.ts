import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-bande-sip-07401",
	"slug": "ponceuse-bande-sip-07401",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "SIP 07401",
	"brand": "SIP",
	"model": "07401",
	"mpn": "07401",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-bande-sip-07401.svg",
		"alt": "Repères techniques : SIP 07401",
		"sourceUrl": "https://www.sip-group.com/product/category/193/sip-10mm-air-belt-sander/07401",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sip-07401",
		"label": "Référence 07401",
		"distinguishingAttributes": {
			"reference": "07401",
			"Belt Size:": "10mm x 330mm",
			"No-Load Speed:": "18,000rpm"
		}
	},
	"editorial": {
		"overview": "SIP 07401. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Belt Size: : 10mm x 330mm.",
			"No-Load Speed: : 18,000rpm.",
			"Vibration Level: : 0.9mtr/s².",
			"Sound Power (LwA): : 99dB(A).",
			"Product Dimensions: : 200(H) x 80(W) x 90mm(D)."
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
			"label": "Belt Size:",
			"value": "10mm x 330mm",
			"evidenceIds": [
				"october5-tools-sip-tool-033-p1"
			]
		},
		{
			"label": "No-Load Speed:",
			"value": "18,000rpm",
			"evidenceIds": [
				"october5-tools-sip-tool-033-p1"
			]
		},
		{
			"label": "Vibration Level:",
			"value": "0.9mtr/s²",
			"evidenceIds": [
				"october5-tools-sip-tool-033-p1"
			]
		},
		{
			"label": "Sound Power (LwA):",
			"value": "99dB(A)",
			"evidenceIds": [
				"october5-tools-sip-tool-033-p1"
			]
		},
		{
			"label": "Product Dimensions:",
			"value": "200(H) x 80(W) x 90mm(D)",
			"evidenceIds": [
				"october5-tools-sip-tool-033-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-sip-tool-033-p1",
			"sourceUrl": "https://www.sip-group.com/product/category/193/sip-10mm-air-belt-sander/07401",
			"sourceLabel": "SIP fiche technique officielle 07401",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 0b258de8d21fc860a2b9b33cde6b07fa239ba7e26cc851976a12b2ba8bd14819. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-sip-tool-033-p1"
		],
		"workingPressureBar": [
			"october5-tools-sip-tool-033-p1"
		],
		"demandExplanation": [
			"october5-tools-sip-tool-033-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
