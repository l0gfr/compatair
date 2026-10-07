import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-toptul-kaae1202",
	"slug": "cle-a-cliquet-toptul-kaae1202",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "TOPTUL KAAE1202",
	"brand": "TOPTUL",
	"model": "KAAE1202",
	"mpn": "KAAE1202",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-toptul-kaae1202.svg",
		"alt": "Repères techniques : TOPTUL KAAE1202",
		"sourceUrl": "https://www.toptul.com/en/product-325404/3-8-DR-Mini-Super-Duty-Air-Ratchet-Wrench-Max-Torque-30-Ft-Lb.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "toptul-kaae1202",
		"label": "Référence KAAE1202",
		"distinguishingAttributes": {
			"reference": "KAAE1202",
			"Max. Torque": "30 ft-lb / 41 Nm",
			"Free Speed": "350 RPM"
		}
	},
	"editorial": {
		"overview": "TOPTUL KAAE1202. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Max. Torque : 30 ft-lb / 41 Nm.",
			"Free Speed : 350 RPM.",
			"Overall Length : 5-7/64\" / 130 mm.",
			"Net Weight : 0.99 lbs / 0.45 kgs."
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
			"value": "30 ft-lb / 41 Nm",
			"evidenceIds": [
				"october5-tools-toptul-tool-004-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "350 RPM",
			"evidenceIds": [
				"october5-tools-toptul-tool-004-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "5-7/64\" / 130 mm",
			"evidenceIds": [
				"october5-tools-toptul-tool-004-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.99 lbs / 0.45 kgs",
			"evidenceIds": [
				"october5-tools-toptul-tool-004-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-toptul-tool-004-p1",
			"sourceUrl": "https://www.toptul.com/en/product-325404/3-8-DR-Mini-Super-Duty-Air-Ratchet-Wrench-Max-Torque-30-Ft-Lb.html",
			"sourceLabel": "TOPTUL fiche technique officielle KAAE1202",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 39dbcad4f4a07378c2dd5a4803b151d98a628f094f4e6d149d976a5c57af656c. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-toptul-tool-004-p1"
		],
		"workingPressureBar": [
			"october5-tools-toptul-tool-004-p1"
		],
		"demandExplanation": [
			"october5-tools-toptul-tool-004-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
