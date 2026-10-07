import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-yato-yt-0990",
	"slug": "burineur-yato-yt-0990",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Yato YT-0990",
	"brand": "Yato",
	"model": "YT-0990",
	"mpn": "YT-0990",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-yato-yt-0990.svg",
		"alt": "Repères techniques : Yato YT-0990",
		"sourceUrl": "https://toya24.pl/en-PL/products/-air-hammer-10006805",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "yato-yt-0990",
		"label": "Référence YT-0990",
		"distinguishingAttributes": {
			"reference": "YT-0990",
			"Impact frequency": "3200 min⁻¹",
			"Holder size": "10 mm"
		}
	},
	"editorial": {
		"overview": "Yato YT-0990. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Impact frequency : 3200 min⁻¹.",
			"Holder size : 10 mm.",
			"Air supply hose inside diameter : 3/8\" (9.5 mm).",
			"Casing material : aluminum.",
			"Acoustic power : 107.7 ± 2.5 dB(A).",
			"Vibrations : 2.62 ± 9.1 m/s².",
			"Weight : 1.5 kg."
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
			"value": "3200 min⁻¹",
			"evidenceIds": [
				"october5-tools-yato-tool-164-p1"
			]
		},
		{
			"label": "Holder size",
			"value": "10 mm",
			"evidenceIds": [
				"october5-tools-yato-tool-164-p1"
			]
		},
		{
			"label": "Air supply hose inside diameter",
			"value": "3/8\" (9.5 mm)",
			"evidenceIds": [
				"october5-tools-yato-tool-164-p1"
			]
		},
		{
			"label": "Casing material",
			"value": "aluminum",
			"evidenceIds": [
				"october5-tools-yato-tool-164-p1"
			]
		},
		{
			"label": "Acoustic power",
			"value": "107.7 ± 2.5 dB(A)",
			"evidenceIds": [
				"october5-tools-yato-tool-164-p1"
			]
		},
		{
			"label": "Vibrations",
			"value": "2.62 ± 9.1 m/s²",
			"evidenceIds": [
				"october5-tools-yato-tool-164-p1"
			]
		},
		{
			"label": "Weight",
			"value": "1.5 kg",
			"evidenceIds": [
				"october5-tools-yato-tool-164-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-yato-tool-164-p1",
			"sourceUrl": "https://toya24.pl/en-PL/products/-air-hammer-10006805",
			"sourceLabel": "Yato fiche technique officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 1445ac0ee06f4512795496a8d4727076876201e9176c8ae9bb93446d20cf0536. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-yato-tool-164-p1"
		],
		"workingPressureBar": [
			"october5-tools-yato-tool-164-p1"
		],
		"demandExplanation": [
			"october5-tools-yato-tool-164-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
