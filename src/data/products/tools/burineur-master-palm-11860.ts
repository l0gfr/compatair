import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-master-palm-11860",
	"slug": "burineur-master-palm-11860",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Master Palm 11860",
	"brand": "Master Palm",
	"model": "11860",
	"mpn": "11860",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-master-palm-11860.svg",
		"alt": "Repères techniques : Master Palm 11860",
		"sourceUrl": "https://www.masterpalm.com/product/162-mm-chipping-hammer-11860-141",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "master-palm-11860",
		"label": "Référence 11860",
		"distinguishingAttributes": {
			"reference": "11860",
			"Overall Length / inch": "15.7",
			"Overall Length / mm": "398"
		}
	},
	"editorial": {
		"overview": "Master Palm 11860. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Overall Length / inch : 15.7.",
			"Overall Length / mm : 398.",
			"Weight / lb : 16.9.",
			"Weight / kg : 7.7.",
			"Noise / dBA : 107.",
			"Air Hose Size / inch : 3/8\".",
			"Air Hose Size / mm : 9.5."
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
			"label": "Overall Length / inch",
			"value": "15.7",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-091-p1"
			]
		},
		{
			"label": "Overall Length / mm",
			"value": "398",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-091-p1"
			]
		},
		{
			"label": "Weight / lb",
			"value": "16.9",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-091-p1"
			]
		},
		{
			"label": "Weight / kg",
			"value": "7.7",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-091-p1"
			]
		},
		{
			"label": "Noise / dBA",
			"value": "107",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-091-p1"
			]
		},
		{
			"label": "Air Hose Size / inch",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-091-p1"
			]
		},
		{
			"label": "Air Hose Size / mm",
			"value": "9.5",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-091-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-masterpalm-tool-091-p1",
			"sourceUrl": "https://www.masterpalm.com/product/162-mm-chipping-hammer-11860-141",
			"sourceLabel": "Master Palm, fiche technique officielle 11860",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 22b17aa5a2fb6e7e84d0e13e09f00f527e1255d174b0a572a7c58d02e71220f2. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-masterpalm-tool-091-p1"
		],
		"workingPressureBar": [
			"october5-tools-masterpalm-tool-091-p1"
		],
		"demandExplanation": [
			"october5-tools-masterpalm-tool-091-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
