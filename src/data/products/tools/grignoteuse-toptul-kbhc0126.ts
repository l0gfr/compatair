import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "grignoteuse-toptul-kbhc0126",
	"slug": "grignoteuse-toptul-kbhc0126",
	"categoryId": "grignoteuse",
	"category": "grignoteuse",
	"label": "TOPTUL KBHC0126",
	"brand": "TOPTUL",
	"model": "KBHC0126",
	"mpn": "KBHC0126",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/grignoteuse-toptul-kbhc0126.svg",
		"alt": "Repères techniques : TOPTUL KBHC0126",
		"sourceUrl": "https://www.toptul.com/en/product-727804/Air-Nibbler.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "toptul-kbhc0126",
		"label": "Référence KBHC0126",
		"distinguishingAttributes": {
			"reference": "KBHC0126",
			"Cutting Capacity": "Steel 1.2 mm / Aluminum 1.6 mm",
			"Cutting Width": "5.5 mm"
		}
	},
	"editorial": {
		"overview": "TOPTUL KBHC0126. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Cutting Capacity : Steel 1.2 mm / Aluminum 1.6 mm.",
			"Cutting Width : 5.5 mm.",
			"Free Speed : 2600 RPM.",
			"Overall Length : 7.4\" / 188 mm.",
			"Net Weight : 1.96 lbs / 0.89 kgs."
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
			"label": "Cutting Capacity",
			"value": "Steel 1.2 mm / Aluminum 1.6 mm",
			"evidenceIds": [
				"october5-tools-toptul-tool-069-p1"
			]
		},
		{
			"label": "Cutting Width",
			"value": "5.5 mm",
			"evidenceIds": [
				"october5-tools-toptul-tool-069-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "2600 RPM",
			"evidenceIds": [
				"october5-tools-toptul-tool-069-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "7.4\" / 188 mm",
			"evidenceIds": [
				"october5-tools-toptul-tool-069-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.96 lbs / 0.89 kgs",
			"evidenceIds": [
				"october5-tools-toptul-tool-069-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-toptul-tool-069-p1",
			"sourceUrl": "https://www.toptul.com/en/product-727804/Air-Nibbler.html",
			"sourceLabel": "TOPTUL fiche technique officielle KBHC0126",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 09248db1147f4ac3a89c2bed3feccef011b9c338050d114ae6a47debba03483f. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-toptul-tool-069-p1"
		],
		"workingPressureBar": [
			"october5-tools-toptul-tool-069-p1"
		],
		"demandExplanation": [
			"october5-tools-toptul-tool-069-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
