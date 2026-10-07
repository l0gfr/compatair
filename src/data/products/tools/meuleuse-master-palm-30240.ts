import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-master-palm-30240",
	"slug": "meuleuse-master-palm-30240",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Master Palm 30240",
	"brand": "Master Palm",
	"model": "30240",
	"mpn": "30240",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-master-palm-30240.svg",
		"alt": "Repères techniques : Master Palm 30240",
		"sourceUrl": "https://www.masterpalm.com/product/1-extensive-shaft-straight-die-grinder-30240-156",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "master-palm-30240",
		"label": "Référence 30240",
		"distinguishingAttributes": {
			"reference": "30240",
			"Free Speed / RPM": "30000",
			"Overall Length / inch": "7.716535433"
		}
	},
	"editorial": {
		"overview": "Master Palm 30240. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed / RPM : 30000.",
			"Overall Length / inch : 7.716535433.",
			"Overall Length / mm : 196.",
			"Weight / lb : 1.012.",
			"Weight / kg : 0.46.",
			"Exhaust : Rear.",
			"Noise / dBA : 84.",
			"Air Hose Size / inch : 1/4.",
			"Air Hose Size / mm : 6.4.",
			"Horsepower : 0.3.",
			"kW : 0.225.",
			"Collet Size / inch : 1/4."
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
			"value": "30000",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-054-p1"
			]
		},
		{
			"label": "Overall Length / inch",
			"value": "7.716535433",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-054-p1"
			]
		},
		{
			"label": "Overall Length / mm",
			"value": "196",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-054-p1"
			]
		},
		{
			"label": "Weight / lb",
			"value": "1.012",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-054-p1"
			]
		},
		{
			"label": "Weight / kg",
			"value": "0.46",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-054-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Rear",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-054-p1"
			]
		},
		{
			"label": "Noise / dBA",
			"value": "84",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-054-p1"
			]
		},
		{
			"label": "Air Hose Size / inch",
			"value": "1/4",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-054-p1"
			]
		},
		{
			"label": "Air Hose Size / mm",
			"value": "6.4",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-054-p1"
			]
		},
		{
			"label": "Horsepower",
			"value": "0.3",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-054-p1"
			]
		},
		{
			"label": "kW",
			"value": "0.225",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-054-p1"
			]
		},
		{
			"label": "Collet Size / inch",
			"value": "1/4",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-054-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-masterpalm-tool-054-p1",
			"sourceUrl": "https://www.masterpalm.com/product/1-extensive-shaft-straight-die-grinder-30240-156",
			"sourceLabel": "Master Palm, fiche technique officielle 30240",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 ac4c2d3f06e5cd2a57b15528fff713a4a5a094e5ae054fa7c752d297db8351af. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-masterpalm-tool-054-p1"
		],
		"workingPressureBar": [
			"october5-tools-masterpalm-tool-054-p1"
		],
		"demandExplanation": [
			"october5-tools-masterpalm-tool-054-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
