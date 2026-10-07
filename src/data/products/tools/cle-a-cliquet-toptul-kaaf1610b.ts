import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-toptul-kaaf1610b",
	"slug": "cle-a-cliquet-toptul-kaaf1610b",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "TOPTUL KAAF1610B",
	"brand": "TOPTUL",
	"model": "KAAF1610B",
	"mpn": "KAAF1610B",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-toptul-kaaf1610b.svg",
		"alt": "Repères techniques : TOPTUL KAAF1610B",
		"sourceUrl": "https://www.toptul.com/en/product-729834/1-2-DR-Super-Duty-Air-Ratchet-Wrench-Max-Torque-100-Ft-Lb.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "toptul-kaaf1610b",
		"label": "Référence KAAF1610B",
		"distinguishingAttributes": {
			"reference": "KAAF1610B",
			"Max. Torque": "100 ft-lb / 136 Nm",
			"Free Speed": "160 RPM"
		}
	},
	"editorial": {
		"overview": "TOPTUL KAAF1610B. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Max. Torque : 100 ft-lb / 136 Nm.",
			"Free Speed : 160 RPM.",
			"Overall Length : 10-5/8\" / 270 mm.",
			"Net Weight : 2.8 lbs / 1.3 kgs."
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
			"value": "100 ft-lb / 136 Nm",
			"evidenceIds": [
				"october5-tools-toptul-tool-013-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "160 RPM",
			"evidenceIds": [
				"october5-tools-toptul-tool-013-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "10-5/8\" / 270 mm",
			"evidenceIds": [
				"october5-tools-toptul-tool-013-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "2.8 lbs / 1.3 kgs",
			"evidenceIds": [
				"october5-tools-toptul-tool-013-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-toptul-tool-013-p1",
			"sourceUrl": "https://www.toptul.com/en/product-729834/1-2-DR-Super-Duty-Air-Ratchet-Wrench-Max-Torque-100-Ft-Lb.html",
			"sourceLabel": "TOPTUL fiche technique officielle KAAF1610B",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 a8f48214ba9dd4b11504d44342411b9f89d682f97e18b6d819d45a1a25c1f00b. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-toptul-tool-013-p1"
		],
		"workingPressureBar": [
			"october5-tools-toptul-tool-013-p1"
		],
		"demandExplanation": [
			"october5-tools-toptul-tool-013-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
