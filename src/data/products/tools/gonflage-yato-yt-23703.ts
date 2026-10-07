import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "gonflage-yato-yt-23703",
	"slug": "gonflage-yato-yt-23703",
	"categoryId": "gonflage",
	"category": "gonflage",
	"label": "Yato YT-23703",
	"brand": "Yato",
	"model": "YT-23703",
	"mpn": "YT-23703",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/gonflage-yato-yt-23703.svg",
		"alt": "Repères techniques : Yato YT-23703",
		"sourceUrl": "https://toya24.pl/en-PL/products/air-inflating-gun-with-manometer-10013023",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "yato-yt-23703",
		"label": "Référence YT-23703",
		"distinguishingAttributes": {
			"reference": "YT-23703",
			"Manometer diameter": "100 mm",
			"Hose length": "440 mm"
		}
	},
	"editorial": {
		"overview": "Yato YT-23703. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Manometer diameter : 100 mm.",
			"Hose length : 440 mm.",
			"Material : aluminum.",
			"Acoustic power : 100.0 ± 2.5 dB(A).",
			"Vibrations : <2.5 m/s².",
			"Weight : 0.33 kg."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"Les pressions recommandées ou maximales de cette fiche ne sont pas des points de mesure de consommation.",
			"Sans régime explicite en charge et pression de mesure associée, la consommation éventuelle reste documentaire et ne permet aucun verdict conclusif.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Manometer diameter",
			"value": "100 mm",
			"evidenceIds": [
				"october5-tools-yato-tool-007-p1"
			]
		},
		{
			"label": "Hose length",
			"value": "440 mm",
			"evidenceIds": [
				"october5-tools-yato-tool-007-p1"
			]
		},
		{
			"label": "Material",
			"value": "aluminum",
			"evidenceIds": [
				"october5-tools-yato-tool-007-p1"
			]
		},
		{
			"label": "Acoustic power",
			"value": "100.0 ± 2.5 dB(A)",
			"evidenceIds": [
				"october5-tools-yato-tool-007-p1"
			]
		},
		{
			"label": "Vibrations",
			"value": "<2.5 m/s²",
			"evidenceIds": [
				"october5-tools-yato-tool-007-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.33 kg",
			"evidenceIds": [
				"october5-tools-yato-tool-007-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-yato-tool-007-p1",
			"sourceUrl": "https://toya24.pl/en-PL/products/air-inflating-gun-with-manometer-10013023",
			"sourceLabel": "Yato fiche technique officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 596ab58c696a8909adbd09c7f3f375b7c652928c1a9bcaada14f087c660aff61. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-yato-tool-007-p1"
		],
		"workingPressureBar": [
			"october5-tools-yato-tool-007-p1"
		],
		"demandExplanation": [
			"october5-tools-yato-tool-007-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
