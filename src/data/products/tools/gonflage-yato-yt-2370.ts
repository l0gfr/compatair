import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "gonflage-yato-yt-2370",
	"slug": "gonflage-yato-yt-2370",
	"categoryId": "gonflage",
	"category": "gonflage",
	"label": "Yato YT-2370",
	"brand": "Yato",
	"model": "YT-2370",
	"mpn": "YT-2370",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/gonflage-yato-yt-2370.svg",
		"alt": "Repères techniques : Yato YT-2370",
		"sourceUrl": "https://toya24.pl/en-PL/products/inflating-gun-with-manometer-10007046",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "yato-yt-2370",
		"label": "Référence YT-2370",
		"distinguishingAttributes": {
			"reference": "YT-2370",
			"Manometer diameter": "75 mm",
			"Hose length": "400 mm"
		}
	},
	"editorial": {
		"overview": "Yato YT-2370. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Manometer diameter : 75 mm.",
			"Hose length : 400 mm.",
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
			"value": "75 mm",
			"evidenceIds": [
				"october5-tools-yato-tool-002-p1"
			]
		},
		{
			"label": "Hose length",
			"value": "400 mm",
			"evidenceIds": [
				"october5-tools-yato-tool-002-p1"
			]
		},
		{
			"label": "Material",
			"value": "aluminum",
			"evidenceIds": [
				"october5-tools-yato-tool-002-p1"
			]
		},
		{
			"label": "Acoustic power",
			"value": "100.0 ± 2.5 dB(A)",
			"evidenceIds": [
				"october5-tools-yato-tool-002-p1"
			]
		},
		{
			"label": "Vibrations",
			"value": "<2.5 m/s²",
			"evidenceIds": [
				"october5-tools-yato-tool-002-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.33 kg",
			"evidenceIds": [
				"october5-tools-yato-tool-002-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-yato-tool-002-p1",
			"sourceUrl": "https://toya24.pl/en-PL/products/inflating-gun-with-manometer-10007046",
			"sourceLabel": "Yato fiche technique officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 66dcedcb8893b538dcff6af278d9282bcd65b0322bc0b6139a2e4c76483325c4. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-yato-tool-002-p1"
		],
		"workingPressureBar": [
			"october5-tools-yato-tool-002-p1"
		],
		"demandExplanation": [
			"october5-tools-yato-tool-002-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
