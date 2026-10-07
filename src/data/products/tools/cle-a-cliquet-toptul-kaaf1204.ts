import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-toptul-kaaf1204",
	"slug": "cle-a-cliquet-toptul-kaaf1204",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "TOPTUL KAAF1204",
	"brand": "TOPTUL",
	"model": "KAAF1204",
	"mpn": "KAAF1204",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-toptul-kaaf1204.svg",
		"alt": "Repères techniques : TOPTUL KAAF1204",
		"sourceUrl": "https://www.toptul.com/en/product-325407/3-8-DR-Super-Duty-Air-Ratchet-Wrench-Max-Torque-40-Ft-Lb.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "toptul-kaaf1204",
		"label": "Référence KAAF1204",
		"distinguishingAttributes": {
			"reference": "KAAF1204",
			"Max. Torque": "40 ft-lb / 54 Nm",
			"Free Speed": "270 RPM"
		}
	},
	"editorial": {
		"overview": "TOPTUL KAAF1204. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Max. Torque : 40 ft-lb / 54 Nm.",
			"Free Speed : 270 RPM.",
			"Overall Length : 8-1/16\" / 205 mm.",
			"Net Weight : 1.45 lbs / 0.66 kgs."
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
			"value": "40 ft-lb / 54 Nm",
			"evidenceIds": [
				"october5-tools-toptul-tool-016-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "270 RPM",
			"evidenceIds": [
				"october5-tools-toptul-tool-016-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "8-1/16\" / 205 mm",
			"evidenceIds": [
				"october5-tools-toptul-tool-016-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.45 lbs / 0.66 kgs",
			"evidenceIds": [
				"october5-tools-toptul-tool-016-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-toptul-tool-016-p1",
			"sourceUrl": "https://www.toptul.com/en/product-325407/3-8-DR-Super-Duty-Air-Ratchet-Wrench-Max-Torque-40-Ft-Lb.html",
			"sourceLabel": "TOPTUL fiche technique officielle KAAF1204",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 01f195535e261436bcb3982fa6f3990fdc3e4af5e5861dda198004c49800733d. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-toptul-tool-016-p1"
		],
		"workingPressureBar": [
			"october5-tools-toptul-tool-016-p1"
		],
		"demandExplanation": [
			"october5-tools-toptul-tool-016-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
