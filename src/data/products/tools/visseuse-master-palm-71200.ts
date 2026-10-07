import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-master-palm-71200",
	"slug": "visseuse-master-palm-71200",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Master Palm 71200",
	"brand": "Master Palm",
	"model": "71200",
	"mpn": "71200",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-master-palm-71200.svg",
		"alt": "Repères techniques : Master Palm 71200",
		"sourceUrl": "https://www.masterpalm.com/product/industrial-336",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "master-palm-71200",
		"label": "Référence 71200",
		"distinguishingAttributes": {
			"reference": "71200",
			"Free Speed / RPM": "9000",
			"Overall Length / inch": "5"
		}
	},
	"editorial": {
		"overview": "Master Palm 71200. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed / RPM : 9000.",
			"Overall Length / inch : 5.",
			"Overall Length / mm : 127.",
			"Weight / lb : 2.75.",
			"Weight / kg : 1.25.",
			"Exhaust : Rear.",
			"Noise / dBA : 85.",
			"Air Hose Size / inch : 3/8\".",
			"Air Hose Size / mm : 9.5.",
			"Max Torque / ft-lb : 100.",
			"Max Torque / Nm : 135."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"La fiche ne qualifie pas le régime de consommation ni une pression de mesure associée aux deux colonnes Air Consumption / SCFM et Air Consumption / CFM. Aucun de ces chiffres ne devient un débit en charge.",
			"Les valeurs SCFM et CFM publiées diffèrent ; leurs conditions de référence ne sont pas explicitées. Aucune équivalence, moyenne ou correction n’est choisie.",
			"Plusieurs tailles de pince peuvent être proposées dans le texte ; la fiche identifie un seul Item No., sans multiplication de références non imprimées.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Free Speed / RPM",
			"value": "9000",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-146-p1"
			]
		},
		{
			"label": "Overall Length / inch",
			"value": "5",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-146-p1"
			]
		},
		{
			"label": "Overall Length / mm",
			"value": "127",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-146-p1"
			]
		},
		{
			"label": "Weight / lb",
			"value": "2.75",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-146-p1"
			]
		},
		{
			"label": "Weight / kg",
			"value": "1.25",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-146-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Rear",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-146-p1"
			]
		},
		{
			"label": "Noise / dBA",
			"value": "85",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-146-p1"
			]
		},
		{
			"label": "Air Hose Size / inch",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-146-p1"
			]
		},
		{
			"label": "Air Hose Size / mm",
			"value": "9.5",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-146-p1"
			]
		},
		{
			"label": "Max Torque / ft-lb",
			"value": "100",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-146-p1"
			]
		},
		{
			"label": "Max Torque / Nm",
			"value": "135",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-146-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-masterpalm-tool-146-p1",
			"sourceUrl": "https://www.masterpalm.com/product/industrial-336",
			"sourceLabel": "Master Palm, fiche technique officielle 71200",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 a671bcab5d9b3f59ef261c1e1427e9339ff2580a0b3a1c5beadc9d584cece330. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-masterpalm-tool-146-p1"
		],
		"workingPressureBar": [
			"october5-tools-masterpalm-tool-146-p1"
		],
		"demandExplanation": [
			"october5-tools-masterpalm-tool-146-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
