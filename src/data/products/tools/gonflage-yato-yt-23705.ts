import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "gonflage-yato-yt-23705",
	"slug": "gonflage-yato-yt-23705",
	"categoryId": "gonflage",
	"category": "gonflage",
	"label": "Yato YT-23705",
	"brand": "Yato",
	"model": "YT-23705",
	"mpn": "YT-23705",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/gonflage-yato-yt-23705.svg",
		"alt": "Repères techniques : Yato YT-23705",
		"sourceUrl": "https://toya24.pl/en-PL/products/air-inflating-gun-10023813",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "yato-yt-23705",
		"label": "Référence YT-23705",
		"distinguishingAttributes": {
			"reference": "YT-23705",
			"Digital control panel": "yes",
			"Display type": "LCD"
		}
	},
	"editorial": {
		"overview": "Yato YT-23705. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Digital control panel : yes.",
			"Display type : LCD.",
			"Hose length : 400 mm.",
			"Acoustic power : 97.1 ± 2.5 dB(A).",
			"Vibrations : <2.5 m/s².",
			"Weight : 0.5 kg."
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
			"label": "Digital control panel",
			"value": "yes",
			"evidenceIds": [
				"october5-tools-yato-tool-040-p1"
			]
		},
		{
			"label": "Display type",
			"value": "LCD",
			"evidenceIds": [
				"october5-tools-yato-tool-040-p1"
			]
		},
		{
			"label": "Hose length",
			"value": "400 mm",
			"evidenceIds": [
				"october5-tools-yato-tool-040-p1"
			]
		},
		{
			"label": "Acoustic power",
			"value": "97.1 ± 2.5 dB(A)",
			"evidenceIds": [
				"october5-tools-yato-tool-040-p1"
			]
		},
		{
			"label": "Vibrations",
			"value": "<2.5 m/s²",
			"evidenceIds": [
				"october5-tools-yato-tool-040-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.5 kg",
			"evidenceIds": [
				"october5-tools-yato-tool-040-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-yato-tool-040-p1",
			"sourceUrl": "https://toya24.pl/en-PL/products/air-inflating-gun-10023813",
			"sourceLabel": "Yato fiche technique officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 7c3bbcad481a32d2966443d7bba620079149ccc75e513f622b770a29e7cd452b. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-yato-tool-040-p1"
		],
		"workingPressureBar": [
			"october5-tools-yato-tool-040-p1"
		],
		"demandExplanation": [
			"october5-tools-yato-tool-040-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
