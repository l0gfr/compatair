import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "scie-sip-01611",
	"slug": "scie-sip-01611",
	"categoryId": "scie",
	"category": "scie",
	"label": "SIP 01611",
	"brand": "SIP",
	"model": "01611",
	"mpn": "01611",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/scie-sip-01611.svg",
		"alt": "Repères techniques : SIP 01611",
		"sourceUrl": "https://www.sip-group.com/product/category/193/sip-air-body-saw/01611",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sip-01611",
		"label": "Référence 01611",
		"distinguishingAttributes": {
			"reference": "01611",
			"No-Load Speed:": "10,000spm",
			"Stroke Length:": "10mm"
		}
	},
	"editorial": {
		"overview": "SIP 01611. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"No-Load Speed: : 10,000spm.",
			"Stroke Length: : 10mm.",
			"Steel Cutting Capacity: : 1.2mm (16 GAUGE).",
			"Aluminium Cutting Capacity: : 1.6mm (14 GAUGE).",
			"Sound Power (LwA): : 89dB(A).",
			"Net Weight: : 0.7kg.",
			"Product Dimensions: : 40(H) x 245(W) x 70mm(D)."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"La consommation est présentée comme une moyenne. Le cycle d’utilisation n’est pas défini ; elle n’est pas convertie en consommation continue en charge.",
			"La pression Air Pressure / Operating Pressure est une prescription de fonctionnement, sans pression de mesure explicitement rattachée à un régime qualifié.",
			"La pression max. de la fiche n’est pas une pression d’essai de consommation.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "No-Load Speed:",
			"value": "10,000spm",
			"evidenceIds": [
				"october5-tools-sip-tool-001-p1"
			]
		},
		{
			"label": "Stroke Length:",
			"value": "10mm",
			"evidenceIds": [
				"october5-tools-sip-tool-001-p1"
			]
		},
		{
			"label": "Steel Cutting Capacity:",
			"value": "1.2mm (16 GAUGE)",
			"evidenceIds": [
				"october5-tools-sip-tool-001-p1"
			]
		},
		{
			"label": "Aluminium Cutting Capacity:",
			"value": "1.6mm (14 GAUGE)",
			"evidenceIds": [
				"october5-tools-sip-tool-001-p1"
			]
		},
		{
			"label": "Sound Power (LwA):",
			"value": "89dB(A)",
			"evidenceIds": [
				"october5-tools-sip-tool-001-p1"
			]
		},
		{
			"label": "Net Weight:",
			"value": "0.7kg",
			"evidenceIds": [
				"october5-tools-sip-tool-001-p1"
			]
		},
		{
			"label": "Product Dimensions:",
			"value": "40(H) x 245(W) x 70mm(D)",
			"evidenceIds": [
				"october5-tools-sip-tool-001-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-sip-tool-001-p1",
			"sourceUrl": "https://www.sip-group.com/product/category/193/sip-air-body-saw/01611",
			"sourceLabel": "SIP fiche technique officielle 01611",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 084094c1d1b49a42fc75efe5f88fa746be10b5cd974c5497a0feb405ddce56b4. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-sip-tool-001-p1"
		],
		"workingPressureBar": [
			"october5-tools-sip-tool-001-p1"
		],
		"demandExplanation": [
			"october5-tools-sip-tool-001-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
