import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-sip-06777",
	"slug": "ponceuse-orbitale-sip-06777",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "SIP 06777",
	"brand": "SIP",
	"model": "06777",
	"mpn": "06777",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-sip-06777.svg",
		"alt": "Repères techniques : SIP 06777",
		"sourceUrl": "https://www.sip-group.com/product/category/193/sip-6%22-air-palm-sander/06777",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sip-06777",
		"label": "Référence 06777",
		"distinguishingAttributes": {
			"reference": "06777",
			"Pad Size:": "Ø 6\" (152mm)",
			"No-Load Speed:": "10,000rpm"
		}
	},
	"editorial": {
		"overview": "SIP 06777. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Pad Size: : Ø 6\" (152mm).",
			"No-Load Speed: : 10,000rpm.",
			"Vibration Level: : 6.30mtr/s².",
			"Sound Power (LwA): : 94dB(A).",
			"Net Weight: : 1.05kg."
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
				"october5-tools-sip-tool-023-p1"
			]
		},
		{
			"label": "No-Load Speed:",
			"value": "10,000rpm",
			"evidenceIds": [
				"october5-tools-sip-tool-023-p1"
			]
		},
		{
			"label": "Vibration Level:",
			"value": "6.30mtr/s²",
			"evidenceIds": [
				"october5-tools-sip-tool-023-p1"
			]
		},
		{
			"label": "Sound Power (LwA):",
			"value": "94dB(A)",
			"evidenceIds": [
				"october5-tools-sip-tool-023-p1"
			]
		},
		{
			"label": "Net Weight:",
			"value": "1.05kg",
			"evidenceIds": [
				"october5-tools-sip-tool-023-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-sip-tool-023-p1",
			"sourceUrl": "https://www.sip-group.com/product/category/193/sip-6%22-air-palm-sander/06777",
			"sourceLabel": "SIP fiche technique officielle 06777",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 7ef55fd1d6604fb5bc672872c4e63eeec80e07032be9bbb594014ae3987ecb72. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-sip-tool-023-p1"
		],
		"workingPressureBar": [
			"october5-tools-sip-tool-023-p1"
		],
		"demandExplanation": [
			"october5-tools-sip-tool-023-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
