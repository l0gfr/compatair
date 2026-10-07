import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-toptul-kaag1206",
	"slug": "cle-a-chocs-toptul-kaag1206",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "TOPTUL KAAG1206",
	"brand": "TOPTUL",
	"model": "KAAG1206",
	"mpn": "KAAG1206",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-toptul-kaag1206.svg",
		"alt": "Repères techniques : TOPTUL KAAG1206",
		"sourceUrl": "https://www.toptul.com/en/product-325414/3-8-DR-Mini-Super-Duty-Air-Impact-Wrench-Max-Torque-60-Ft-Lb.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "toptul-kaag1206",
		"label": "Référence KAAG1206",
		"distinguishingAttributes": {
			"reference": "KAAG1206",
			"Max. Torque": "60 ft-lb / 81 Nm",
			"Free Speed": "11000 RPM"
		}
	},
	"editorial": {
		"overview": "TOPTUL KAAG1206. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Max. Torque : 60 ft-lb / 81 Nm.",
			"Free Speed : 11000 RPM.",
			"Overall Length : 5-29/32\" / 150 mm.",
			"Net Weight : 1.56 lbs / 0.71 kgs."
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
			"label": "Max. Torque",
			"value": "60 ft-lb / 81 Nm",
			"evidenceIds": [
				"october5-tools-toptul-tool-022-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "11000 RPM",
			"evidenceIds": [
				"october5-tools-toptul-tool-022-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "5-29/32\" / 150 mm",
			"evidenceIds": [
				"october5-tools-toptul-tool-022-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.56 lbs / 0.71 kgs",
			"evidenceIds": [
				"october5-tools-toptul-tool-022-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-toptul-tool-022-p1",
			"sourceUrl": "https://www.toptul.com/en/product-325414/3-8-DR-Mini-Super-Duty-Air-Impact-Wrench-Max-Torque-60-Ft-Lb.html",
			"sourceLabel": "TOPTUL fiche technique officielle KAAG1206",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 2fc2ac44828c76471eb20d5714793cf5b1e517f168ed0e3265eb1b02e552bc0d. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-toptul-tool-022-p1"
		],
		"workingPressureBar": [
			"october5-tools-toptul-tool-022-p1"
		],
		"demandExplanation": [
			"october5-tools-toptul-tool-022-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
