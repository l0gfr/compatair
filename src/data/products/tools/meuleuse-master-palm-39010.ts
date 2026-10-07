import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-master-palm-39010",
	"slug": "meuleuse-master-palm-39010",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Master Palm 39010",
	"brand": "Master Palm",
	"model": "39010",
	"mpn": "39010",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-master-palm-39010.svg",
		"alt": "Repères techniques : Master Palm 39010",
		"sourceUrl": "https://www.masterpalm.com/product/1-8-turbine-die-grinder-39010",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "master-palm-39010",
		"label": "Référence 39010",
		"distinguishingAttributes": {
			"reference": "39010",
			"Free Speed / RPM": "100000",
			"Overall Length / inch": "5.55"
		}
	},
	"editorial": {
		"overview": "Master Palm 39010. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed / RPM : 100000.",
			"Overall Length / inch : 5.55.",
			"Overall Length / mm : 141.",
			"Weight / lb : 0.53.",
			"Weight / kg : 0.24.",
			"Exhaust : Front.",
			"Noise / dBA : 83.",
			"Air Hose Size / inch : 3/16\".",
			"Air Hose Size / mm : 4.8.",
			"Horsepower : 0.15.",
			"kW : 0.11.",
			"Collet Size / inch : 1/8\".",
			"Collet Size / mm : 3."
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
			"value": "100000",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-158-p1"
			]
		},
		{
			"label": "Overall Length / inch",
			"value": "5.55",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-158-p1"
			]
		},
		{
			"label": "Overall Length / mm",
			"value": "141",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-158-p1"
			]
		},
		{
			"label": "Weight / lb",
			"value": "0.53",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-158-p1"
			]
		},
		{
			"label": "Weight / kg",
			"value": "0.24",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-158-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Front",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-158-p1"
			]
		},
		{
			"label": "Noise / dBA",
			"value": "83",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-158-p1"
			]
		},
		{
			"label": "Air Hose Size / inch",
			"value": "3/16\"",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-158-p1"
			]
		},
		{
			"label": "Air Hose Size / mm",
			"value": "4.8",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-158-p1"
			]
		},
		{
			"label": "Horsepower",
			"value": "0.15",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-158-p1"
			]
		},
		{
			"label": "kW",
			"value": "0.11",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-158-p1"
			]
		},
		{
			"label": "Collet Size / inch",
			"value": "1/8\"",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-158-p1"
			]
		},
		{
			"label": "Collet Size / mm",
			"value": "3",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-158-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-masterpalm-tool-158-p1",
			"sourceUrl": "https://www.masterpalm.com/product/1-8-turbine-die-grinder-39010",
			"sourceLabel": "Master Palm, fiche technique officielle 39010",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 34e38f7faedfc84ca423a1a0371f08b06ded73e76e13e7c104de63c53474d819. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-masterpalm-tool-158-p1"
		],
		"workingPressureBar": [
			"october5-tools-masterpalm-tool-158-p1"
		],
		"demandExplanation": [
			"october5-tools-masterpalm-tool-158-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
