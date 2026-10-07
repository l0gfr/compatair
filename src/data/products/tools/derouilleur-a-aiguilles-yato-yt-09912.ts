import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "derouilleur-a-aiguilles-yato-yt-09912",
	"slug": "derouilleur-a-aiguilles-yato-yt-09912",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Yato YT-09912",
	"brand": "Yato",
	"model": "YT-09912",
	"mpn": "YT-09912",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/derouilleur-a-aiguilles-yato-yt-09912.svg",
		"alt": "Repères techniques : Yato YT-09912",
		"sourceUrl": "https://toya24.pl/en-PL/products/air-needle-scaler-10017761",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "yato-yt-09912",
		"label": "Référence YT-09912",
		"distinguishingAttributes": {
			"reference": "YT-09912",
			"Impact frequency": "4000 min⁻¹",
			"Air supply hose inside diameter": "3/8\" (9.5 mm)"
		}
	},
	"editorial": {
		"overview": "Yato YT-09912. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Impact frequency : 4000 min⁻¹.",
			"Air supply hose inside diameter : 3/8\" (9.5 mm).",
			"Needles quantity : 19.",
			"Needle diameter : 4 mm.",
			"Casing material : aluminum.",
			"Acoustic power : 108.0 ± 3.0 dB(A).",
			"Vibrations : 18.9 ± 1.5 m/s².",
			"Weight : 2.81 kg."
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
			"label": "Impact frequency",
			"value": "4000 min⁻¹",
			"evidenceIds": [
				"october5-tools-yato-tool-101-p1"
			]
		},
		{
			"label": "Air supply hose inside diameter",
			"value": "3/8\" (9.5 mm)",
			"evidenceIds": [
				"october5-tools-yato-tool-101-p1"
			]
		},
		{
			"label": "Needles quantity",
			"value": "19",
			"evidenceIds": [
				"october5-tools-yato-tool-101-p1"
			]
		},
		{
			"label": "Needle diameter",
			"value": "4 mm",
			"evidenceIds": [
				"october5-tools-yato-tool-101-p1"
			]
		},
		{
			"label": "Casing material",
			"value": "aluminum",
			"evidenceIds": [
				"october5-tools-yato-tool-101-p1"
			]
		},
		{
			"label": "Acoustic power",
			"value": "108.0 ± 3.0 dB(A)",
			"evidenceIds": [
				"october5-tools-yato-tool-101-p1"
			]
		},
		{
			"label": "Vibrations",
			"value": "18.9 ± 1.5 m/s²",
			"evidenceIds": [
				"october5-tools-yato-tool-101-p1"
			]
		},
		{
			"label": "Weight",
			"value": "2.81 kg",
			"evidenceIds": [
				"october5-tools-yato-tool-101-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-yato-tool-101-p1",
			"sourceUrl": "https://toya24.pl/en-PL/products/air-needle-scaler-10017761",
			"sourceLabel": "Yato fiche technique officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 bed0270e760d7b7dc985e54a6ac22d8f87b35cb39f76da494762b7e9ea7f62f9. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-yato-tool-101-p1"
		],
		"workingPressureBar": [
			"october5-tools-yato-tool-101-p1"
		],
		"demandExplanation": [
			"october5-tools-yato-tool-101-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
