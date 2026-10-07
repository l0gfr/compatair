import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-master-palm-31880",
	"slug": "meuleuse-master-palm-31880",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Master Palm 31880",
	"brand": "Master Palm",
	"model": "31880",
	"mpn": "31880",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-master-palm-31880.svg",
		"alt": "Repères techniques : Master Palm 31880",
		"sourceUrl": "https://www.masterpalm.com/product/air-micro-die-grinder-31880-159",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "master-palm-31880",
		"label": "Référence 31880",
		"distinguishingAttributes": {
			"reference": "31880",
			"Free Speed / RPM": "56000",
			"Overall Length / inch": "5.118110236"
		}
	},
	"editorial": {
		"overview": "Master Palm 31880. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed / RPM : 56000.",
			"Overall Length / inch : 5.118110236.",
			"Overall Length / mm : 130.",
			"Weight / lb : 0.462.",
			"Weight / kg : 0.21.",
			"Exhaust : Rear.",
			"Noise / dBA : 80.",
			"Air Hose Size / inch : 3/16.",
			"Air Hose Size / mm : 4.7625.",
			"Horsepower : 0.1.",
			"kW : 0.075."
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
			"value": "56000",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-057-p1"
			]
		},
		{
			"label": "Overall Length / inch",
			"value": "5.118110236",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-057-p1"
			]
		},
		{
			"label": "Overall Length / mm",
			"value": "130",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-057-p1"
			]
		},
		{
			"label": "Weight / lb",
			"value": "0.462",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-057-p1"
			]
		},
		{
			"label": "Weight / kg",
			"value": "0.21",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-057-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Rear",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-057-p1"
			]
		},
		{
			"label": "Noise / dBA",
			"value": "80",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-057-p1"
			]
		},
		{
			"label": "Air Hose Size / inch",
			"value": "3/16",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-057-p1"
			]
		},
		{
			"label": "Air Hose Size / mm",
			"value": "4.7625",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-057-p1"
			]
		},
		{
			"label": "Horsepower",
			"value": "0.1",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-057-p1"
			]
		},
		{
			"label": "kW",
			"value": "0.075",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-057-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-masterpalm-tool-057-p1",
			"sourceUrl": "https://www.masterpalm.com/product/air-micro-die-grinder-31880-159",
			"sourceLabel": "Master Palm, fiche technique officielle 31880",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 9c3d361927230bc77438a6283281d4b17b10249866a3b285d668cb77403c05c5. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-masterpalm-tool-057-p1"
		],
		"workingPressureBar": [
			"october5-tools-masterpalm-tool-057-p1"
		],
		"demandExplanation": [
			"october5-tools-masterpalm-tool-057-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
