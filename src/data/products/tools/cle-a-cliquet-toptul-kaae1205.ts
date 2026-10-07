import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-toptul-kaae1205",
	"slug": "cle-a-cliquet-toptul-kaae1205",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "TOPTUL KAAE1205",
	"brand": "TOPTUL",
	"model": "KAAE1205",
	"mpn": "KAAE1205",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-toptul-kaae1205.svg",
		"alt": "Repères techniques : TOPTUL KAAE1205",
		"sourceUrl": "https://www.toptul.com/en/product-731830/3-8-DR-Mini-Sealed-Head-Air-Ratchet-Wrench-Max-Torque-45-Ft-Lb.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "toptul-kaae1205",
		"label": "Référence KAAE1205",
		"distinguishingAttributes": {
			"reference": "KAAE1205",
			"Max. Torque": "45 ft-lb / 60 Nm",
			"Free Speed": "300 RPM"
		}
	},
	"editorial": {
		"overview": "TOPTUL KAAE1205. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Max. Torque : 45 ft-lb / 60 Nm.",
			"Free Speed : 300 RPM.",
			"Overall Length : 7\" / 178 mm.",
			"Net Weight : 1.39 lbs / 0.63 kgs."
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
			"value": "45 ft-lb / 60 Nm",
			"evidenceIds": [
				"october5-tools-toptul-tool-005-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "300 RPM",
			"evidenceIds": [
				"october5-tools-toptul-tool-005-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "7\" / 178 mm",
			"evidenceIds": [
				"october5-tools-toptul-tool-005-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.39 lbs / 0.63 kgs",
			"evidenceIds": [
				"october5-tools-toptul-tool-005-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-toptul-tool-005-p1",
			"sourceUrl": "https://www.toptul.com/en/product-731830/3-8-DR-Mini-Sealed-Head-Air-Ratchet-Wrench-Max-Torque-45-Ft-Lb.html",
			"sourceLabel": "TOPTUL fiche technique officielle KAAE1205",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 adffff9baf6debc95be97a0ad8abcfd9bb6477894dec1cb8e686630ad1d2e199. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-toptul-tool-005-p1"
		],
		"workingPressureBar": [
			"october5-tools-toptul-tool-005-p1"
		],
		"demandExplanation": [
			"october5-tools-toptul-tool-005-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
