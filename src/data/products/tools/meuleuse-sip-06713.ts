import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-sip-06713",
	"slug": "meuleuse-sip-06713",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "SIP 06713",
	"brand": "SIP",
	"model": "06713",
	"mpn": "06713",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-sip-06713.svg",
		"alt": "Repères techniques : SIP 06713",
		"sourceUrl": "https://www.sip-group.com/product/category/193/sip-1-4%22-air-die-grinder/06713",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sip-06713",
		"label": "Référence 06713",
		"distinguishingAttributes": {
			"reference": "06713",
			"Grinder Size:": "1/4\"",
			"No-Load Speed:": "22,000rpm"
		}
	},
	"editorial": {
		"overview": "SIP 06713. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Grinder Size: : 1/4\".",
			"No-Load Speed: : 22,000rpm.",
			"Vibration Level: : 2.06mtr/s².",
			"Sound Power (LwA): : 90dB(A).",
			"Net Weight: : 0.52kg."
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
			"label": "Grinder Size:",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-sip-tool-021-p1"
			]
		},
		{
			"label": "No-Load Speed:",
			"value": "22,000rpm",
			"evidenceIds": [
				"october5-tools-sip-tool-021-p1"
			]
		},
		{
			"label": "Vibration Level:",
			"value": "2.06mtr/s²",
			"evidenceIds": [
				"october5-tools-sip-tool-021-p1"
			]
		},
		{
			"label": "Sound Power (LwA):",
			"value": "90dB(A)",
			"evidenceIds": [
				"october5-tools-sip-tool-021-p1"
			]
		},
		{
			"label": "Net Weight:",
			"value": "0.52kg",
			"evidenceIds": [
				"october5-tools-sip-tool-021-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-sip-tool-021-p1",
			"sourceUrl": "https://www.sip-group.com/product/category/193/sip-1-4%22-air-die-grinder/06713",
			"sourceLabel": "SIP fiche technique officielle 06713",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 e492bc0221a7dc621541b6e770ea2d8acd0f03c34b73dda7644f065c7a94b5ad. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-sip-tool-021-p1"
		],
		"workingPressureBar": [
			"october5-tools-sip-tool-021-p1"
		],
		"demandExplanation": [
			"october5-tools-sip-tool-021-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
