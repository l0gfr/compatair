import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-toptul-ksau0808",
	"slug": "visseuse-toptul-ksau0808",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "TOPTUL KSAU0808",
	"brand": "TOPTUL",
	"model": "KSAU0808",
	"mpn": "KSAU0808",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-toptul-ksau0808.svg",
		"alt": "Repères techniques : TOPTUL KSAU0808",
		"sourceUrl": "https://www.toptul.com/en/product-549766/1-4-Hex-Super-Duty-Mini-Butterfly-Type-Air-Screwdriver-Max-Torque-80-Ft-Lb.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "toptul-ksau0808",
		"label": "Référence KSAU0808",
		"distinguishingAttributes": {
			"reference": "KSAU0808",
			"Max. Torque": "80 ft-lb / 108 Nm",
			"Free Speed": "12000 RPM"
		}
	},
	"editorial": {
		"overview": "TOPTUL KSAU0808. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Max. Torque : 80 ft-lb / 108 Nm.",
			"Free Speed : 12000 RPM.",
			"Overall Length : 5-23/32\" / 146 mm.",
			"Net Weight : 1.21 lbs / 0.55 kgs."
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
			"value": "80 ft-lb / 108 Nm",
			"evidenceIds": [
				"october5-tools-toptul-tool-042-p1"
			]
		},
		{
			"label": "Free Speed",
			"value": "12000 RPM",
			"evidenceIds": [
				"october5-tools-toptul-tool-042-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "5-23/32\" / 146 mm",
			"evidenceIds": [
				"october5-tools-toptul-tool-042-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "1.21 lbs / 0.55 kgs",
			"evidenceIds": [
				"october5-tools-toptul-tool-042-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-toptul-tool-042-p1",
			"sourceUrl": "https://www.toptul.com/en/product-549766/1-4-Hex-Super-Duty-Mini-Butterfly-Type-Air-Screwdriver-Max-Torque-80-Ft-Lb.html",
			"sourceLabel": "TOPTUL fiche technique officielle KSAU0808",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 ac96aa14439106cfd359a588ff4cdec2e7036f50dee10f573e1beaa147868879. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-toptul-tool-042-p1"
		],
		"workingPressureBar": [
			"october5-tools-toptul-tool-042-p1"
		],
		"demandExplanation": [
			"october5-tools-toptul-tool-042-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
