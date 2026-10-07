import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-master-palm-31020",
	"slug": "meuleuse-master-palm-31020",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Master Palm 31020",
	"brand": "Master Palm",
	"model": "31020",
	"mpn": "31020",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-master-palm-31020.svg",
		"alt": "Repères techniques : Master Palm 31020",
		"sourceUrl": "https://www.masterpalm.com/product/straight-die-grinder-31020-146",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "master-palm-31020",
		"label": "Référence 31020",
		"distinguishingAttributes": {
			"reference": "31020",
			"Free Speed / RPM": "25000",
			"Overall Length / inch": "4.842519685"
		}
	},
	"editorial": {
		"overview": "Master Palm 31020. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed / RPM : 25000.",
			"Overall Length / inch : 4.842519685.",
			"Overall Length / mm : 123.",
			"Weight / lb : 0.682.",
			"Weight / kg : 0.31.",
			"Exhaust : Rear.",
			"Noise / dBA : 81.",
			"Air Hose Size / inch : 3/16.",
			"Air Hose Size / mm : 4.7625.",
			"Horsepower : 0.25.",
			"kW : 0.1875.",
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
			"value": "25000",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-045-p1"
			]
		},
		{
			"label": "Overall Length / inch",
			"value": "4.842519685",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-045-p1"
			]
		},
		{
			"label": "Overall Length / mm",
			"value": "123",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-045-p1"
			]
		},
		{
			"label": "Weight / lb",
			"value": "0.682",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-045-p1"
			]
		},
		{
			"label": "Weight / kg",
			"value": "0.31",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-045-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Rear",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-045-p1"
			]
		},
		{
			"label": "Noise / dBA",
			"value": "81",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-045-p1"
			]
		},
		{
			"label": "Air Hose Size / inch",
			"value": "3/16",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-045-p1"
			]
		},
		{
			"label": "Air Hose Size / mm",
			"value": "4.7625",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-045-p1"
			]
		},
		{
			"label": "Horsepower",
			"value": "0.25",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-045-p1"
			]
		},
		{
			"label": "kW",
			"value": "0.1875",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-045-p1"
			]
		},
		{
			"label": "Collet Size / inch",
			"value": "1/4",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-045-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-masterpalm-tool-045-p1",
			"sourceUrl": "https://www.masterpalm.com/product/straight-die-grinder-31020-146",
			"sourceLabel": "Master Palm, fiche technique officielle 31020",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 66ab6e4b1ac7d1da368220ce6dce341610c04c070ff9fb89abd80a3d682b470c. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-masterpalm-tool-045-p1"
		],
		"workingPressureBar": [
			"october5-tools-masterpalm-tool-045-p1"
		],
		"demandExplanation": [
			"october5-tools-masterpalm-tool-045-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
