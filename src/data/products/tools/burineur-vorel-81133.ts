import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-vorel-81133",
	"slug": "burineur-vorel-81133",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Vorel 81133",
	"brand": "Vorel",
	"model": "81133",
	"mpn": "81133",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-vorel-81133.svg",
		"alt": "Repères techniques : Vorel 81133",
		"sourceUrl": "https://toya24.pl/en-PL/products/air-hammer-10009936",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vorel-81133",
		"label": "Référence 81133",
		"distinguishingAttributes": {
			"reference": "81133",
			"Impact frequency": "4500 min⁻¹",
			"Holder size": "10 mm"
		}
	},
	"editorial": {
		"overview": "Vorel 81133. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Impact frequency : 4500 min⁻¹.",
			"Holder size : 10 mm.",
			"Air supply hose inside diameter : 3/8\" (9.5 mm).",
			"Acoustic power : 96.0 ± 3.0 dB(A).",
			"Vibrations : 9.4 ± 1.5 m/s².",
			"Weight : 1 kg."
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
			"value": "4500 min⁻¹",
			"evidenceIds": [
				"october5-tools-yato-tool-119-p1"
			]
		},
		{
			"label": "Holder size",
			"value": "10 mm",
			"evidenceIds": [
				"october5-tools-yato-tool-119-p1"
			]
		},
		{
			"label": "Air supply hose inside diameter",
			"value": "3/8\" (9.5 mm)",
			"evidenceIds": [
				"october5-tools-yato-tool-119-p1"
			]
		},
		{
			"label": "Acoustic power",
			"value": "96.0 ± 3.0 dB(A)",
			"evidenceIds": [
				"october5-tools-yato-tool-119-p1"
			]
		},
		{
			"label": "Vibrations",
			"value": "9.4 ± 1.5 m/s²",
			"evidenceIds": [
				"october5-tools-yato-tool-119-p1"
			]
		},
		{
			"label": "Weight",
			"value": "1 kg",
			"evidenceIds": [
				"october5-tools-yato-tool-119-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-yato-tool-119-p1",
			"sourceUrl": "https://toya24.pl/en-PL/products/air-hammer-10009936",
			"sourceLabel": "Vorel fiche technique officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 58e6fe96db0cdb731a584c7938ac7d88252b82a08ef5bf9bf09d359cf113ca44. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-yato-tool-119-p1"
		],
		"workingPressureBar": [
			"october5-tools-yato-tool-119-p1"
		],
		"demandExplanation": [
			"october5-tools-yato-tool-119-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
