import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-master-palm-31540",
	"slug": "meuleuse-master-palm-31540",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Master Palm 31540",
	"brand": "Master Palm",
	"model": "31540",
	"mpn": "31540",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-master-palm-31540.svg",
		"alt": "Repères techniques : Master Palm 31540",
		"sourceUrl": "https://www.masterpalm.com/product/3-grinder-31540-219",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "master-palm-31540",
		"label": "Référence 31540",
		"distinguishingAttributes": {
			"reference": "31540",
			"Free Speed / RPM": "12000",
			"Overall Length / inch": "7.3"
		}
	},
	"editorial": {
		"overview": "Master Palm 31540. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed / RPM : 12000.",
			"Overall Length / inch : 7.3.",
			"Overall Length / mm : 185.",
			"Weight / lb : 2.86.",
			"Weight / kg : 1.3.",
			"Exhaust : Side.",
			"Noise / dBA : 92.",
			"Air Hose Size / inch : 3/8\".",
			"Air Hose Size / mm : 9.5.",
			"Disc Size / inch : 4.",
			"Disc Size / mm : 100."
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
			"value": "12000",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-194-p1"
			]
		},
		{
			"label": "Overall Length / inch",
			"value": "7.3",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-194-p1"
			]
		},
		{
			"label": "Overall Length / mm",
			"value": "185",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-194-p1"
			]
		},
		{
			"label": "Weight / lb",
			"value": "2.86",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-194-p1"
			]
		},
		{
			"label": "Weight / kg",
			"value": "1.3",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-194-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Side",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-194-p1"
			]
		},
		{
			"label": "Noise / dBA",
			"value": "92",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-194-p1"
			]
		},
		{
			"label": "Air Hose Size / inch",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-194-p1"
			]
		},
		{
			"label": "Air Hose Size / mm",
			"value": "9.5",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-194-p1"
			]
		},
		{
			"label": "Disc Size / inch",
			"value": "4",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-194-p1"
			]
		},
		{
			"label": "Disc Size / mm",
			"value": "100",
			"evidenceIds": [
				"october5-tools-masterpalm-tool-194-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-masterpalm-tool-194-p1",
			"sourceUrl": "https://www.masterpalm.com/product/3-grinder-31540-219",
			"sourceLabel": "Master Palm, fiche technique officielle 31540",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 eb9996d262b60dfebeb0d7a85e48f5052d9b5bde428a6e53f72678f2f641e378. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-masterpalm-tool-194-p1"
		],
		"workingPressureBar": [
			"october5-tools-masterpalm-tool-194-p1"
		],
		"demandExplanation": [
			"october5-tools-masterpalm-tool-194-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
