import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-toptul-kasd0818",
	"slug": "meuleuse-toptul-kasd0818",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "TOPTUL KASD0818",
	"brand": "TOPTUL",
	"model": "KASD0818",
	"mpn": "KASD0818",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-toptul-kasd0818.svg",
		"alt": "Repères techniques : TOPTUL KASD0818",
		"sourceUrl": "https://www.toptul.com/en/product-653301/Mini-Air-Angle-Die-Grinder.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "toptul-kasd0818",
		"label": "Référence KASD0818",
		"distinguishingAttributes": {
			"reference": "KASD0818",
			"Collet Chuck": "6mm / 1/4\"",
			"Power": "0.3 HP / 0.224 KW"
		}
	},
	"editorial": {
		"overview": "TOPTUL KASD0818. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Collet Chuck : 6mm / 1/4\".",
			"Power : 0.3 HP / 0.224 KW.",
			"Free Speed : 18000 RPM.",
			"Overall Length : 4-15/16\" / 125 mm.",
			"Net Weight : 0.95 lbs / 0.43 kgs."
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
				"october5-tools-toptul-tool-072-p1"
			]
		},
		{
			"label": "Power",
			"value": "0.3 HP / 0.224 KW",
			"evidenceIds": [
				"october5-tools-toptul-tool-072-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "18000 RPM",
			"evidenceIds": [
				"october5-tools-toptul-tool-072-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "4-15/16\" / 125 mm",
			"evidenceIds": [
				"october5-tools-toptul-tool-072-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.95 lbs / 0.43 kgs",
			"evidenceIds": [
				"october5-tools-toptul-tool-072-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-toptul-tool-072-p1",
			"sourceUrl": "https://www.toptul.com/en/product-653301/Mini-Air-Angle-Die-Grinder.html",
			"sourceLabel": "TOPTUL fiche technique officielle KASD0818",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 e1d2314ac9271a7c55b6ef9457ac498427a7956ef3c62892c9e89c8ba4f0b3d0. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-toptul-tool-072-p1"
		],
		"workingPressureBar": [
			"october5-tools-toptul-tool-072-p1"
		],
		"demandExplanation": [
			"october5-tools-toptul-tool-072-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
