import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-sip-01618",
	"slug": "cle-a-cliquet-sip-01618",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "SIP 01618",
	"brand": "SIP",
	"model": "01618",
	"mpn": "01618",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-sip-01618.svg",
		"alt": "Repères techniques : SIP 01618",
		"sourceUrl": "https://www.sip-group.com/product/category/193/sip-1-2%22-reversible-air-ratchet/01618",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sip-01618",
		"label": "Référence 01618",
		"distinguishingAttributes": {
			"reference": "01618",
			"Drive Type:": "1/2\"",
			"Working Torque:": "61Nm (45ft/lb)"
		}
	},
	"editorial": {
		"overview": "SIP 01618. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Drive Type: : 1/2\".",
			"Working Torque: : 61Nm (45ft/lb).",
			"No-Load Speed: : 150rpm.",
			"Vibration Level: : 1.20mtr/s².",
			"Sound Power (LwA): : 106dB(A).",
			"Net Weight: : 1.20kg."
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
			"label": "Drive Type:",
			"value": "1/2\"",
			"evidenceIds": [
				"october5-tools-sip-tool-003-p1"
			]
		},
		{
			"label": "Working Torque:",
			"value": "61Nm (45ft/lb)",
			"evidenceIds": [
				"october5-tools-sip-tool-003-p1"
			]
		},
		{
			"label": "No-Load Speed:",
			"value": "150rpm",
			"evidenceIds": [
				"october5-tools-sip-tool-003-p1"
			]
		},
		{
			"label": "Vibration Level:",
			"value": "1.20mtr/s²",
			"evidenceIds": [
				"october5-tools-sip-tool-003-p1"
			]
		},
		{
			"label": "Sound Power (LwA):",
			"value": "106dB(A)",
			"evidenceIds": [
				"october5-tools-sip-tool-003-p1"
			]
		},
		{
			"label": "Net Weight:",
			"value": "1.20kg",
			"evidenceIds": [
				"october5-tools-sip-tool-003-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-sip-tool-003-p1",
			"sourceUrl": "https://www.sip-group.com/product/category/193/sip-1-2%22-reversible-air-ratchet/01618",
			"sourceLabel": "SIP fiche technique officielle 01618",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 c194ea9043521676d3962f0c0094683c321e5cb5fe51dace1bfd1c4a005cb401. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-sip-tool-003-p1"
		],
		"workingPressureBar": [
			"october5-tools-sip-tool-003-p1"
		],
		"demandExplanation": [
			"october5-tools-sip-tool-003-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
