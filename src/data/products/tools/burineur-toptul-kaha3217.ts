import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-toptul-kaha3217",
	"slug": "burineur-toptul-kaha3217",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "TOPTUL KAHA3217",
	"brand": "TOPTUL",
	"model": "KAHA3217",
	"mpn": "KAHA3217",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-toptul-kaha3217.svg",
		"alt": "Repères techniques : TOPTUL KAHA3217",
		"sourceUrl": "https://www.toptul.com/en/product-325464/Heavy-Duty-Air-Impact-Hammer.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "toptul-kaha3217",
		"label": "Référence KAHA3217",
		"distinguishingAttributes": {
			"reference": "KAHA3217",
			"Blow Per Minute": "3200 BPM",
			"Piston Stroke": "67mm (2-5/8\")"
		}
	},
	"editorial": {
		"overview": "TOPTUL KAHA3217. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Blow Per Minute : 3200 BPM.",
			"Piston Stroke : 67mm (2-5/8\").",
			"Chisel Shank Opening (Hex) : 10 mm.",
			"Overall Length : 171 mm (6-3/4\").",
			"Net Weight : 1.6 kg (3.5 lbs).",
			"Sound Power Level : 115.21 dB(A).",
			"Vibration Level : 13.51 M/Sec²."
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
			"label": "Blow Per Minute",
			"value": "3200 BPM",
			"evidenceIds": [
				"october5-tools-toptul-tool-003-p1"
			]
		},
		{
			"label": "Piston Stroke",
			"value": "67mm (2-5/8\")",
			"evidenceIds": [
				"october5-tools-toptul-tool-003-p1"
			]
		},
		{
			"label": "Chisel Shank Opening (Hex)",
			"value": "10 mm",
			"evidenceIds": [
				"october5-tools-toptul-tool-003-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "171 mm (6-3/4\")",
			"evidenceIds": [
				"october5-tools-toptul-tool-003-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.6 kg (3.5 lbs)",
			"evidenceIds": [
				"october5-tools-toptul-tool-003-p1"
			]
		},
		{
			"label": "Sound Power Level",
			"value": "115.21 dB(A)",
			"evidenceIds": [
				"october5-tools-toptul-tool-003-p1"
			]
		},
		{
			"label": "Vibration Level",
			"value": "13.51 M/Sec²",
			"evidenceIds": [
				"october5-tools-toptul-tool-003-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-toptul-tool-003-p1",
			"sourceUrl": "https://www.toptul.com/en/product-325464/Heavy-Duty-Air-Impact-Hammer.html",
			"sourceLabel": "TOPTUL fiche technique officielle KAHA3217",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 1de287c71cda873a391daf6103dfe1d5188e3e945c45357dd7ab7414a64b45f6. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-toptul-tool-003-p1"
		],
		"workingPressureBar": [
			"october5-tools-toptul-tool-003-p1"
		],
		"demandExplanation": [
			"october5-tools-toptul-tool-003-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
