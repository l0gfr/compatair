import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-master-palm-11430f",
	"slug": "burineur-master-palm-11430f",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Master Palm 11430F",
	"brand": "Master Palm",
	"model": "11430F",
	"mpn": "11430F",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-master-palm-11430f.svg",
		"alt": "Repères techniques : Master Palm 11430F",
		"sourceUrl": "https://www.masterpalm.com/product/chisel-scaler-11430f-143",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "master-palm-11430f",
		"label": "Référence 11430F",
		"distinguishingAttributes": {
			"reference": "11430F",
			"Strokes Per Minute": "4800",
			"Overall Length / inch": "14.25"
		}
	},
	"editorial": {
		"overview": "Master Palm 11430F. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Strokes Per Minute : 4800.",
			"Overall Length / inch : 14.25.",
			"Overall Length / mm : 362.",
			"Weight / lb : 4.6.",
			"Weight / kg : 2.1.",
			"Exhaust : Rear.",
			"Noise / dBA : 98.",
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
			"label": "Strokes Per Minute",
			"value": "4800",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-093-p1"
			]
		},
		{
			"label": "Overall Length / inch",
			"value": "14.25",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-093-p1"
			]
		},
		{
			"label": "Overall Length / mm",
			"value": "362",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-093-p1"
			]
		},
		{
			"label": "Weight / lb",
			"value": "4.6",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-093-p1"
			]
		},
		{
			"label": "Weight / kg",
			"value": "2.1",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-093-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Rear",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-093-p1"
			]
		},
		{
			"label": "Noise / dBA",
			"value": "98",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-093-p1"
			]
		},
		{
			"label": "Air Hose Size / inch",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-093-p1"
			]
		},
		{
			"label": "Air Hose Size / mm",
			"value": "9.5",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-093-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-masterpalm-tool-093-p1",
			"sourceUrl": "https://www.masterpalm.com/product/chisel-scaler-11430f-143",
			"sourceLabel": "Master Palm, fiche technique officielle 11430F",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 9c017ed9de6433d04a9067b1f8b232d27427de06d1e4674c772b04871e813433. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-masterpalm-tool-093-p1"
		],
		"workingPressureBar": [
			"october5-tools-masterpalm-tool-093-p1"
		],
		"demandExplanation": [
			"october5-tools-masterpalm-tool-093-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
