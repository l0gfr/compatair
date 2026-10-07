import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-nettoyage-yato-yt-23640",
	"slug": "pistolet-nettoyage-yato-yt-23640",
	"categoryId": "pistolet-nettoyage",
	"category": "pistolet-nettoyage",
	"label": "Yato YT-23640",
	"brand": "Yato",
	"model": "YT-23640",
	"mpn": "YT-23640",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-nettoyage-yato-yt-23640.svg",
		"alt": "Repères techniques : Yato YT-23640",
		"sourceUrl": "https://toya24.pl/en-PL/products/pneumatic-cleaning-gun-1l-10014524",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "yato-yt-23640",
		"label": "Référence YT-23640",
		"distinguishingAttributes": {
			"reference": "YT-23640",
			"Air supply hose inside diameter": "3/8\" (9.5 mm)",
			"Tank capacity": "1 l"
		}
	},
	"editorial": {
		"overview": "Yato YT-23640. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Air supply hose inside diameter : 3/8\" (9.5 mm).",
			"Tank capacity : 1 l.",
			"Nozzle pipe length : 220 mm.",
			"Material : aluminum.",
			"Acoustic power : 96.0 ± 3.0 dB(A).",
			"Vibrations : <2.5 m/s².",
			"Weight : 0.53 kg."
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
			"label": "Air supply hose inside diameter",
			"value": "3/8\" (9.5 mm)",
			"evidenceIds": [
				"october5-tools-yato-tool-109-p1"
			]
		},
		{
			"label": "Tank capacity",
			"value": "1 l",
			"evidenceIds": [
				"october5-tools-yato-tool-109-p1"
			]
		},
		{
			"label": "Nozzle pipe length",
			"value": "220 mm",
			"evidenceIds": [
				"october5-tools-yato-tool-109-p1"
			]
		},
		{
			"label": "Material",
			"value": "aluminum",
			"evidenceIds": [
				"october5-tools-yato-tool-109-p1"
			]
		},
		{
			"label": "Acoustic power",
			"value": "96.0 ± 3.0 dB(A)",
			"evidenceIds": [
				"october5-tools-yato-tool-109-p1"
			]
		},
		{
			"label": "Vibrations",
			"value": "<2.5 m/s²",
			"evidenceIds": [
				"october5-tools-yato-tool-109-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.53 kg",
			"evidenceIds": [
				"october5-tools-yato-tool-109-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-yato-tool-109-p1",
			"sourceUrl": "https://toya24.pl/en-PL/products/pneumatic-cleaning-gun-1l-10014524",
			"sourceLabel": "Yato fiche technique officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 806aba65ebb5a10642bf83ba7be41eba44683158f424f778dde71aa5c843935b. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-yato-tool-109-p1"
		],
		"workingPressureBar": [
			"october5-tools-yato-tool-109-p1"
		],
		"demandExplanation": [
			"october5-tools-yato-tool-109-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
