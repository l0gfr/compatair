import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-toptul-kara0205b",
	"slug": "riveteuse-toptul-kara0205b",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "TOPTUL KARA0205B",
	"brand": "TOPTUL",
	"model": "KARA0205B",
	"mpn": "KARA0205B",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-toptul-kara0205b.svg",
		"alt": "Repères techniques : TOPTUL KARA0205B",
		"sourceUrl": "https://www.toptul.com/en/product-629544/Air-Hydraulic-Riveter-Basic-Model.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "toptul-kara0205b",
		"label": "Référence KARA0205B",
		"distinguishingAttributes": {
			"reference": "KARA0205B",
			"Rivet Diameter": "2.4, 3.0/3.2, 4.0, 4.8/5.0 mm or 3/32\", 1/8\", 5/32\", 3/16\""
		}
	},
	"editorial": {
		"overview": "TOPTUL KARA0205B. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Rivet Diameter : Rivet Material.",
			"Rivet Diameter : 2.4, 3.0/3.2, 4.0, 4.8/5.0 mm or 3/32\", 1/8\", 5/32\", 3/16\".",
			"Stroke Length : 16mm.",
			"Traction Power : 9000 N / 2000 lbf.",
			"Overall Length : 10-11/16\" / 272mm.",
			"Net Weight : 3.76 lbs / 1.71 kgs."
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
			"label": "Rivet Diameter",
			"value": "Rivet Material",
			"evidenceIds": [
				"october5-tools-toptul-tool-012-p1"
			]
		},
		{
			"label": "Rivet Diameter",
			"value": "2.4, 3.0/3.2, 4.0, 4.8/5.0 mm or 3/32\", 1/8\", 5/32\", 3/16\"",
			"evidenceIds": [
				"october5-tools-toptul-tool-012-p1"
			]
		},
		{
			"label": "Stroke Length",
			"value": "16mm",
			"evidenceIds": [
				"october5-tools-toptul-tool-012-p1"
			]
		},
		{
			"label": "Traction Power",
			"value": "9000 N / 2000 lbf",
			"evidenceIds": [
				"october5-tools-toptul-tool-012-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "10-11/16\" / 272mm",
			"evidenceIds": [
				"october5-tools-toptul-tool-012-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "3.76 lbs / 1.71 kgs",
			"evidenceIds": [
				"october5-tools-toptul-tool-012-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-toptul-tool-012-p1",
			"sourceUrl": "https://www.toptul.com/en/product-629544/Air-Hydraulic-Riveter-Basic-Model.html",
			"sourceLabel": "TOPTUL fiche technique officielle KARA0205B",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 bd008acdbfad2721920bfcf6fd1a3c34d99ba6da4df6094f0c6e4c8c3acdbd37. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-toptul-tool-012-p1"
		],
		"workingPressureBar": [
			"october5-tools-toptul-tool-012-p1"
		],
		"demandExplanation": [
			"october5-tools-toptul-tool-012-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
