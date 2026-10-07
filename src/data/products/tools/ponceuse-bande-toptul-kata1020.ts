import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-bande-toptul-kata1020",
	"slug": "ponceuse-bande-toptul-kata1020",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "TOPTUL KATA1020",
	"brand": "TOPTUL",
	"model": "KATA1020",
	"mpn": "KATA1020",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-bande-toptul-kata1020.svg",
		"alt": "Repères techniques : TOPTUL KATA1020",
		"sourceUrl": "https://www.toptul.com/en/product-736037/Air-Belt-Sander.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "toptul-kata1020",
		"label": "Référence KATA1020",
		"distinguishingAttributes": {
			"reference": "KATA1020",
			"Belt Size": "10 x 330 mm (3/8\" x 13\")",
			"Power": "0.5 HP / 0.37 KW"
		}
	},
	"editorial": {
		"overview": "TOPTUL KATA1020. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Belt Size : 10 x 330 mm (3/8\" x 13\").",
			"Power : 0.5 HP / 0.37 KW.",
			"Free Speed : 20000 RPM.",
			"Overall Length : 13\" / 330 mm.",
			"Net Weight : 1.87 lbs / 0.85 kgs.",
			"Sound Power Level : 96.54 dB(A).",
			"Vibration Level : 0.66 M/Sec²."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"Le régime de la consommation publiée n’est pas défini par un cycle ni un fonctionnement continu en charge ; la valeur est conservée comme cellule source, sans profil de débit qualifié.",
			"La pression Air Pressure / Operating Pressure est une prescription de fonctionnement, sans pression de mesure explicitement rattachée à un régime qualifié.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Belt Size",
			"value": "10 x 330 mm (3/8\" x 13\")",
			"evidenceIds": [
				"october5-tools-toptul-tool-075-p1"
			]
		},
		{
			"label": "Power",
			"value": "0.5 HP / 0.37 KW",
			"evidenceIds": [
				"october5-tools-toptul-tool-075-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "20000 RPM",
			"evidenceIds": [
				"october5-tools-toptul-tool-075-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "13\" / 330 mm",
			"evidenceIds": [
				"october5-tools-toptul-tool-075-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.87 lbs / 0.85 kgs",
			"evidenceIds": [
				"october5-tools-toptul-tool-075-p1"
			]
		},
		{
			"label": "Sound Power Level",
			"value": "96.54 dB(A)",
			"evidenceIds": [
				"october5-tools-toptul-tool-075-p1"
			]
		},
		{
			"label": "Vibration Level",
			"value": "0.66 M/Sec²",
			"evidenceIds": [
				"october5-tools-toptul-tool-075-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-toptul-tool-075-p1",
			"sourceUrl": "https://www.toptul.com/en/product-736037/Air-Belt-Sander.html",
			"sourceLabel": "TOPTUL fiche technique officielle KATA1020",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 517ab3245a12f81f3fffab2d835eebcad77c8d0f5ec3b24099e443723696c9d5. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-toptul-tool-075-p1"
		],
		"workingPressureBar": [
			"october5-tools-toptul-tool-075-p1"
		],
		"demandExplanation": [
			"october5-tools-toptul-tool-075-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
