import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-master-palm-18020",
	"slug": "meuleuse-master-palm-18020",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Master Palm 18020",
	"brand": "Master Palm",
	"model": "18020",
	"mpn": "18020",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-master-palm-18020.svg",
		"alt": "Repères techniques : Master Palm 18020",
		"sourceUrl": "https://www.masterpalm.com/product/2-mini-riveter-cutter-18020-217",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "master-palm-18020",
		"label": "Référence 18020",
		"distinguishingAttributes": {
			"reference": "18020",
			"Free Speed / RPM": "16500",
			"Overall Length / inch": "3.97"
		}
	},
	"editorial": {
		"overview": "Master Palm 18020. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed / RPM : 16500.",
			"Overall Length / inch : 3.97.",
			"Overall Length / mm : 101.",
			"Weight / lb : 0.88.",
			"Weight / kg : 0.4.",
			"Exhaust : Rrar.",
			"Noise / dBA : 81.",
			"Air Hose Size / inch : 3/16\".",
			"Air Hose Size / mm : 4.8.",
			"Horsepower : 0.25.",
			"kW : 0.19.",
			"Disc Size / inch : 2 x3/8\".",
			"Disc Size / mm : 50.8 x 9.5."
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
			"value": "16500",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-192-p1"
			]
		},
		{
			"label": "Overall Length / inch",
			"value": "3.97",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-192-p1"
			]
		},
		{
			"label": "Overall Length / mm",
			"value": "101",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-192-p1"
			]
		},
		{
			"label": "Weight / lb",
			"value": "0.88",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-192-p1"
			]
		},
		{
			"label": "Weight / kg",
			"value": "0.4",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-192-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Rrar",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-192-p1"
			]
		},
		{
			"label": "Noise / dBA",
			"value": "81",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-192-p1"
			]
		},
		{
			"label": "Air Hose Size / inch",
			"value": "3/16\"",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-192-p1"
			]
		},
		{
			"label": "Air Hose Size / mm",
			"value": "4.8",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-192-p1"
			]
		},
		{
			"label": "Horsepower",
			"value": "0.25",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-192-p1"
			]
		},
		{
			"label": "kW",
			"value": "0.19",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-192-p1"
			]
		},
		{
			"label": "Disc Size / inch",
			"value": "2 x3/8\"",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-192-p1"
			]
		},
		{
			"label": "Disc Size / mm",
			"value": "50.8 x 9.5",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-192-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-masterpalm-tool-192-p1",
			"sourceUrl": "https://www.masterpalm.com/product/2-mini-riveter-cutter-18020-217",
			"sourceLabel": "Master Palm, fiche technique officielle 18020",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 a22a1dd9c79aa03e907c705ec75b40b71e9186828c8988e43032a397f3a6ddbb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-masterpalm-tool-192-p1"
		],
		"workingPressureBar": [
			"october5-tools-masterpalm-tool-192-p1"
		],
		"demandExplanation": [
			"october5-tools-masterpalm-tool-192-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
