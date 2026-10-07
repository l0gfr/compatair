import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-master-palm-11600",
	"slug": "riveteuse-master-palm-11600",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "Master Palm 11600",
	"brand": "Master Palm",
	"model": "11600",
	"mpn": "11600",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-master-palm-11600.svg",
		"alt": "Repères techniques : Master Palm 11600",
		"sourceUrl": "https://www.masterpalm.com/product/3-16-riveter-11600-276",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "master-palm-11600",
		"label": "Référence 11600",
		"distinguishingAttributes": {
			"reference": "11600",
			"Weight / lb": "3.08",
			"Weight / kg": "1.4"
		}
	},
	"editorial": {
		"overview": "Master Palm 11600. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Weight / lb : 3.08.",
			"Weight / kg : 1.4.",
			"Air Hose Size / inch : 3/8.",
			"Air Hose Size / mm : 9.525."
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
			"label": "Weight / lb",
			"value": "3.08",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-118-p1"
			]
		},
		{
			"label": "Weight / kg",
			"value": "1.4",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-118-p1"
			]
		},
		{
			"label": "Air Hose Size / inch",
			"value": "3/8",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-118-p1"
			]
		},
		{
			"label": "Air Hose Size / mm",
			"value": "9.525",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-118-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-masterpalm-tool-118-p1",
			"sourceUrl": "https://www.masterpalm.com/product/3-16-riveter-11600-276",
			"sourceLabel": "Master Palm, fiche technique officielle 11600",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 875538aa8748ca015c5712cead7eb71483b30b4c4a2b422b70fdf8e138cdeb78. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-masterpalm-tool-118-p1"
		],
		"workingPressureBar": [
			"october5-tools-masterpalm-tool-118-p1"
		],
		"demandExplanation": [
			"october5-tools-masterpalm-tool-118-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
