import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-yato-yt-3618",
	"slug": "riveteuse-yato-yt-3618",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "Yato YT-3618",
	"brand": "Yato",
	"model": "YT-3618",
	"mpn": "YT-3618",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-yato-yt-3618.svg",
		"alt": "Repères techniques : Yato YT-3618",
		"sourceUrl": "https://toya24.pl/en-PL/products/-pneumatic-riveting-machine-2-4-6-4-mm-1894-kg-10002319",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "yato-yt-3618",
		"label": "Référence YT-3618",
		"distinguishingAttributes": {
			"reference": "YT-3618",
			"Air supply hose inside diameter": "3/8\" (9.5 mm)",
			"Rivets diameter": "2.4, 3.2, 4, 4.8, 6.4 mm"
		}
	},
	"editorial": {
		"overview": "Yato YT-3618. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Air supply hose inside diameter : 3/8\" (9.5 mm).",
			"Rivets diameter : 2.4, 3.2, 4, 4.8, 6.4 mm.",
			"Jaw quantity : 2.",
			"Max. piston stroke : 19 mm.",
			"Acoustic power : 92.1 ± 3.0 dB(A).",
			"Vibrations : 0.6 ± 0.56 m/s².",
			"Weight : 2 kg."
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
				"october5-tools-yato-tool-085-p1"
			]
		},
		{
			"label": "Rivets diameter",
			"value": "2.4, 3.2, 4, 4.8, 6.4 mm",
			"evidenceIds": [
				"october5-tools-yato-tool-085-p1"
			]
		},
		{
			"label": "Jaw quantity",
			"value": "2",
			"evidenceIds": [
				"october5-tools-yato-tool-085-p1"
			]
		},
		{
			"label": "Max. piston stroke",
			"value": "19 mm",
			"evidenceIds": [
				"october5-tools-yato-tool-085-p1"
			]
		},
		{
			"label": "Acoustic power",
			"value": "92.1 ± 3.0 dB(A)",
			"evidenceIds": [
				"october5-tools-yato-tool-085-p1"
			]
		},
		{
			"label": "Vibrations",
			"value": "0.6 ± 0.56 m/s²",
			"evidenceIds": [
				"october5-tools-yato-tool-085-p1"
			]
		},
		{
			"label": "Weight",
			"value": "2 kg",
			"evidenceIds": [
				"october5-tools-yato-tool-085-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-yato-tool-085-p1",
			"sourceUrl": "https://toya24.pl/en-PL/products/-pneumatic-riveting-machine-2-4-6-4-mm-1894-kg-10002319",
			"sourceLabel": "Yato fiche technique officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 86d70f5b4e72e1f50b0fc1700e85a5b7a88d4fc1b142faa177e37659817ae296. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-yato-tool-085-p1"
		],
		"workingPressureBar": [
			"october5-tools-yato-tool-085-p1"
		],
		"demandExplanation": [
			"october5-tools-yato-tool-085-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
