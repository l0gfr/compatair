import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-sip-06795",
	"slug": "cle-a-chocs-sip-06795",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "SIP 06795",
	"brand": "SIP",
	"model": "06795",
	"mpn": "06795",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-sip-06795.svg",
		"alt": "Repères techniques : SIP 06795",
		"sourceUrl": "https://www.sip-group.com/product/category/193/sip-1%22-professional-air-impact-wrench/06795",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sip-06795",
		"label": "Référence 06795",
		"distinguishingAttributes": {
			"reference": "06795",
			"Working Torque:": "2180Nm (1907ft/lb)",
			"No-Load Speed:": "4200rpm"
		}
	},
	"editorial": {
		"overview": "SIP 06795. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Working Torque: : 2180Nm (1907ft/lb).",
			"No-Load Speed: : 4200rpm.",
			"Vibration Level: : 11mtr/s².",
			"Sound Power (LwA): : 119.00dB(A).",
			"Net Weight: : 17.00kg."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"La consommation est présentée comme une moyenne. Le cycle d’utilisation n’est pas défini ; elle n’est pas convertie en consommation continue en charge.",
			"La pression Air Pressure / Operating Pressure est une prescription de fonctionnement, sans pression de mesure explicitement rattachée à un régime qualifié.",
			"La paire Working Torque2180Nm (1907ft/lb) est incohérente ; elle reste documentaire sans normalisation ni correction.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Working Torque:",
			"value": "2180Nm (1907ft/lb)",
			"evidenceIds": [
				"october5-tools-sip-tool-028-p1"
			]
		},
		{
			"label": "No-Load Speed:",
			"value": "4200rpm",
			"evidenceIds": [
				"october5-tools-sip-tool-028-p1"
			]
		},
		{
			"label": "Vibration Level:",
			"value": "11mtr/s²",
			"evidenceIds": [
				"october5-tools-sip-tool-028-p1"
			]
		},
		{
			"label": "Sound Power (LwA):",
			"value": "119.00dB(A)",
			"evidenceIds": [
				"october5-tools-sip-tool-028-p1"
			]
		},
		{
			"label": "Net Weight:",
			"value": "17.00kg",
			"evidenceIds": [
				"october5-tools-sip-tool-028-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-sip-tool-028-p1",
			"sourceUrl": "https://www.sip-group.com/product/category/193/sip-1%22-professional-air-impact-wrench/06795",
			"sourceLabel": "SIP fiche technique officielle 06795",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 bebf5c8412f8f50ddf99a44dc73508bcd9952e54281291d001738ee7a68cccf5. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-sip-tool-028-p1"
		],
		"workingPressureBar": [
			"october5-tools-sip-tool-028-p1"
		],
		"demandExplanation": [
			"october5-tools-sip-tool-028-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
