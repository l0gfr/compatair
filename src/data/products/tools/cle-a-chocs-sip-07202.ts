import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-sip-07202",
	"slug": "cle-a-chocs-sip-07202",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "SIP 07202",
	"brand": "SIP",
	"model": "07202",
	"mpn": "07202",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-sip-07202.svg",
		"alt": "Repères techniques : SIP 07202",
		"sourceUrl": "https://www.sip-group.com/product/category/193/sip-3-4%22-advanced-composite-air-impact-wrench/07202",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sip-07202",
		"label": "Référence 07202",
		"distinguishingAttributes": {
			"reference": "07202",
			"Working Torque:": "1356Nm (1000ft/lb)",
			"No-Load Speed:": "7,000rpm"
		}
	},
	"editorial": {
		"overview": "SIP 07202. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Working Torque: : 1356Nm (1000ft/lb).",
			"No-Load Speed: : 7,000rpm.",
			"Vibration Level: : 6.33mtr/s².",
			"Sound Power (LwA): : 105dB(A).",
			"Net Weight: : 3.14kg."
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
			"label": "Working Torque:",
			"value": "1356Nm (1000ft/lb)",
			"evidenceIds": [
				"october5-tools-sip-tool-030-p1"
			]
		},
		{
			"label": "No-Load Speed:",
			"value": "7,000rpm",
			"evidenceIds": [
				"october5-tools-sip-tool-030-p1"
			]
		},
		{
			"label": "Vibration Level:",
			"value": "6.33mtr/s²",
			"evidenceIds": [
				"october5-tools-sip-tool-030-p1"
			]
		},
		{
			"label": "Sound Power (LwA):",
			"value": "105dB(A)",
			"evidenceIds": [
				"october5-tools-sip-tool-030-p1"
			]
		},
		{
			"label": "Net Weight:",
			"value": "3.14kg",
			"evidenceIds": [
				"october5-tools-sip-tool-030-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-sip-tool-030-p1",
			"sourceUrl": "https://www.sip-group.com/product/category/193/sip-3-4%22-advanced-composite-air-impact-wrench/07202",
			"sourceLabel": "SIP fiche technique officielle 07202",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 ba170f56dded39edbfcac29cb209b8515b4838fef82599cc4498b78f503b139f. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-sip-tool-030-p1"
		],
		"workingPressureBar": [
			"october5-tools-sip-tool-030-p1"
		],
		"demandExplanation": [
			"october5-tools-sip-tool-030-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
