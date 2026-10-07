import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-master-palm-21700",
	"slug": "perceuse-master-palm-21700",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Master Palm 21700",
	"brand": "Master Palm",
	"model": "21700",
	"mpn": "21700",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-master-palm-21700.svg",
		"alt": "Repères techniques : Master Palm 21700",
		"sourceUrl": "https://www.masterpalm.com/product/spot-drill-21700-201",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "master-palm-21700",
		"label": "Référence 21700",
		"distinguishingAttributes": {
			"reference": "21700",
			"Free Speed / RPM": "1600",
			"Overall Length / inch": "11.4"
		}
	},
	"editorial": {
		"overview": "Master Palm 21700. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed / RPM : 1600.",
			"Overall Length / inch : 11.4.",
			"Overall Length / mm : 290.",
			"Weight / lb : 3.08.",
			"Weight / kg : 1.4.",
			"Exhaust : Handle.",
			"Noise / dBA : 87.",
			"Air Hose Size / inch : 3/8\".",
			"Air Hose Size / mm : 9.5.",
			"Horsepower : 1.2.",
			"kW : 0.9.",
			"Chuck Size / inch : 5/8\"."
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
			"value": "1600",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-185-p1"
			]
		},
		{
			"label": "Overall Length / inch",
			"value": "11.4",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-185-p1"
			]
		},
		{
			"label": "Overall Length / mm",
			"value": "290",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-185-p1"
			]
		},
		{
			"label": "Weight / lb",
			"value": "3.08",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-185-p1"
			]
		},
		{
			"label": "Weight / kg",
			"value": "1.4",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-185-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Handle",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-185-p1"
			]
		},
		{
			"label": "Noise / dBA",
			"value": "87",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-185-p1"
			]
		},
		{
			"label": "Air Hose Size / inch",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-185-p1"
			]
		},
		{
			"label": "Air Hose Size / mm",
			"value": "9.5",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-185-p1"
			]
		},
		{
			"label": "Horsepower",
			"value": "1.2",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-185-p1"
			]
		},
		{
			"label": "kW",
			"value": "0.9",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-185-p1"
			]
		},
		{
			"label": "Chuck Size / inch",
			"value": "5/8\"",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-185-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-masterpalm-tool-185-p1",
			"sourceUrl": "https://www.masterpalm.com/product/spot-drill-21700-201",
			"sourceLabel": "Master Palm, fiche technique officielle 21700",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 fbb6f51b77705c660d4c36871a21b3b2a1881b659c9e15b9a7f2f2ab9bdeb9b1. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-masterpalm-tool-185-p1"
		],
		"workingPressureBar": [
			"october5-tools-masterpalm-tool-185-p1"
		],
		"demandExplanation": [
			"october5-tools-masterpalm-tool-185-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
