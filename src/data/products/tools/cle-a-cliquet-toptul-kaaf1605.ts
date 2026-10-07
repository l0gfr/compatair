import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-toptul-kaaf1605",
	"slug": "cle-a-cliquet-toptul-kaaf1605",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "TOPTUL KAAF1605",
	"brand": "TOPTUL",
	"model": "KAAF1605",
	"mpn": "KAAF1605",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-toptul-kaaf1605.svg",
		"alt": "Repères techniques : TOPTUL KAAF1605",
		"sourceUrl": "https://www.toptul.com/en/product-325406/1-2-DR-Super-Duty-Air-Ratchet-Wrench-Max-Torque-75-Ft-Lb.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "toptul-kaaf1605",
		"label": "Référence KAAF1605",
		"distinguishingAttributes": {
			"reference": "KAAF1605",
			"Max. Torque": "75 ft-lb / 102 Nm",
			"Free Speed": "160 RPM"
		}
	},
	"editorial": {
		"overview": "TOPTUL KAAF1605. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Max. Torque : 75 ft-lb / 102 Nm.",
			"Free Speed : 160 RPM.",
			"Overall Length : 10-1/2\" / 266 mm.",
			"Net Weight : 2.64 lbs / 1.2 kgs."
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
			"value": "75 ft-lb / 102 Nm",
			"evidenceIds": [
				"october5-tools-toptul-tool-009-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "160 RPM",
			"evidenceIds": [
				"october5-tools-toptul-tool-009-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "10-1/2\" / 266 mm",
			"evidenceIds": [
				"october5-tools-toptul-tool-009-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "2.64 lbs / 1.2 kgs",
			"evidenceIds": [
				"october5-tools-toptul-tool-009-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-toptul-tool-009-p1",
			"sourceUrl": "https://www.toptul.com/en/product-325406/1-2-DR-Super-Duty-Air-Ratchet-Wrench-Max-Torque-75-Ft-Lb.html",
			"sourceLabel": "TOPTUL fiche technique officielle KAAF1605",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 3d796b6aa85357e552011ff524926393a54b8131c416e91c9087e66027dabe69. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-toptul-tool-009-p1"
		],
		"workingPressureBar": [
			"october5-tools-toptul-tool-009-p1"
		],
		"demandExplanation": [
			"october5-tools-toptul-tool-009-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
