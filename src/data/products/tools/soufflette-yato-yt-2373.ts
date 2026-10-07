import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "soufflette-yato-yt-2373",
	"slug": "soufflette-yato-yt-2373",
	"categoryId": "soufflette",
	"category": "soufflette",
	"label": "Yato YT-2373",
	"brand": "Yato",
	"model": "YT-2373",
	"mpn": "YT-2373",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/soufflette-yato-yt-2373.svg",
		"alt": "Repères techniques : Yato YT-2373",
		"sourceUrl": "https://toya24.pl/en-PL/products/-inflating-gun-with-extension-10007148",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "yato-yt-2373",
		"label": "Référence YT-2373",
		"distinguishingAttributes": {
			"reference": "YT-2373",
			"Nozzle pipe length": "33, 230 mm",
			"Nozzle diameter": "1.8, 4 mm"
		}
	},
	"editorial": {
		"overview": "Yato YT-2373. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Nozzle pipe length : 33, 230 mm.",
			"Nozzle diameter : 1.8, 4 mm.",
			"Material : aluminum.",
			"Handle material : PVC.",
			"Acoustic power : 102.0 dB(A).",
			"Vibrations : <2.5 m/s².",
			"Weight : 0.16 kg."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"Les pressions recommandées ou maximales de cette fiche ne sont pas des points de mesure de consommation.",
			"Sans régime explicite en charge et pression de mesure associée, la consommation éventuelle reste documentaire et ne permet aucun verdict conclusif.",
			"Le titre anglais dit Inflating gun ; la description propre du constructeur décrit un pistolet de soufflage. La contradiction est conservée et la catégorie suit la description fonctionnelle explicite.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Nozzle pipe length",
			"value": "33, 230 mm",
			"evidenceIds": [
				"october5-tools-yato-tool-003-p1"
			]
		},
		{
			"label": "Nozzle diameter",
			"value": "1.8, 4 mm",
			"evidenceIds": [
				"october5-tools-yato-tool-003-p1"
			]
		},
		{
			"label": "Material",
			"value": "aluminum",
			"evidenceIds": [
				"october5-tools-yato-tool-003-p1"
			]
		},
		{
			"label": "Handle material",
			"value": "PVC",
			"evidenceIds": [
				"october5-tools-yato-tool-003-p1"
			]
		},
		{
			"label": "Acoustic power",
			"value": "102.0 dB(A)",
			"evidenceIds": [
				"october5-tools-yato-tool-003-p1"
			]
		},
		{
			"label": "Vibrations",
			"value": "<2.5 m/s²",
			"evidenceIds": [
				"october5-tools-yato-tool-003-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.16 kg",
			"evidenceIds": [
				"october5-tools-yato-tool-003-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-yato-tool-003-p1",
			"sourceUrl": "https://toya24.pl/en-PL/products/-inflating-gun-with-extension-10007148",
			"sourceLabel": "Yato fiche technique officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 38201e506425548e27699693be51d33bc8bc36f12ba33f782ca399c7da3e2bd9. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-yato-tool-003-p1"
		],
		"workingPressureBar": [
			"october5-tools-yato-tool-003-p1"
		],
		"demandExplanation": [
			"october5-tools-yato-tool-003-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
