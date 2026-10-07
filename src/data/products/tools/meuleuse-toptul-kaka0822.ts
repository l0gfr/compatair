import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-toptul-kaka0822",
	"slug": "meuleuse-toptul-kaka0822",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "TOPTUL KAKA0822",
	"brand": "TOPTUL",
	"model": "KAKA0822",
	"mpn": "KAKA0822",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-toptul-kaka0822.svg",
		"alt": "Repères techniques : TOPTUL KAKA0822",
		"sourceUrl": "https://www.toptul.com/en/product-325460/Air-Straight-Die-Grinder.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "toptul-kaka0822",
		"label": "Référence KAKA0822",
		"distinguishingAttributes": {
			"reference": "KAKA0822",
			"Collet Chuck": "6mm / 1/4\"",
			"Power": "0.6 HP / 0.45 KW"
		}
	},
	"editorial": {
		"overview": "TOPTUL KAKA0822. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Collet Chuck : 6mm / 1/4\".",
			"Power : 0.6 HP / 0.45 KW.",
			"Free Speed : 22000 RPM.",
			"Overall Length : 6-9/16\" / 167 mm.",
			"Weight : 1.3 lbs / 0.6 kgs."
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
			"label": "Collet Chuck",
			"value": "6mm / 1/4\"",
			"evidenceIds": [
				"october5-tools-toptul-tool-070-p1"
			]
		},
		{
			"label": "Power",
			"value": "0.6 HP / 0.45 KW",
			"evidenceIds": [
				"october5-tools-toptul-tool-070-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "22000 RPM",
			"evidenceIds": [
				"october5-tools-toptul-tool-070-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "6-9/16\" / 167 mm",
			"evidenceIds": [
				"october5-tools-toptul-tool-070-p1"
			]
		},
		{
			"label": "Weight",
			"value": "1.3 lbs / 0.6 kgs",
			"evidenceIds": [
				"october5-tools-toptul-tool-070-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-toptul-tool-070-p1",
			"sourceUrl": "https://www.toptul.com/en/product-325460/Air-Straight-Die-Grinder.html",
			"sourceLabel": "TOPTUL fiche technique officielle KAKA0822",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 f3c9025a0019a33031a728ad7e5b7a2c0b8663213d9c1fed962eda4a521f5e38. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-toptul-tool-070-p1"
		],
		"workingPressureBar": [
			"october5-tools-toptul-tool-070-p1"
		],
		"demandExplanation": [
			"october5-tools-toptul-tool-070-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
