import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "soufflette-vorel-81632",
	"slug": "soufflette-vorel-81632",
	"categoryId": "soufflette",
	"category": "soufflette",
	"label": "Vorel 81632",
	"brand": "Vorel",
	"model": "81632",
	"mpn": "81632",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/soufflette-vorel-81632.svg",
		"alt": "Repères techniques : Vorel 81632",
		"sourceUrl": "https://toya24.pl/en-PL/products/air-blow-gun-200mm-10012564",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vorel-81632",
		"label": "Référence 81632",
		"distinguishingAttributes": {
			"reference": "81632",
			"Nozzle pipe length": "200 mm",
			"Material": "PVC, metal"
		}
	},
	"editorial": {
		"overview": "Vorel 81632. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Nozzle pipe length : 200 mm.",
			"Material : PVC, metal.",
			"Acoustic power : 102.0 ± 3.0 dB(A).",
			"Vibrations : <2.5 m/s².",
			"Weight : 0.15 kg."
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
			"label": "Nozzle pipe length",
			"value": "200 mm",
			"evidenceIds": [
				"october5-tools-yato-tool-082-p1"
			]
		},
		{
			"label": "Material",
			"value": "PVC, metal",
			"evidenceIds": [
				"october5-tools-yato-tool-082-p1"
			]
		},
		{
			"label": "Acoustic power",
			"value": "102.0 ± 3.0 dB(A)",
			"evidenceIds": [
				"october5-tools-yato-tool-082-p1"
			]
		},
		{
			"label": "Vibrations",
			"value": "<2.5 m/s²",
			"evidenceIds": [
				"october5-tools-yato-tool-082-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.15 kg",
			"evidenceIds": [
				"october5-tools-yato-tool-082-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-yato-tool-082-p1",
			"sourceUrl": "https://toya24.pl/en-PL/products/air-blow-gun-200mm-10012564",
			"sourceLabel": "Vorel fiche technique officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 778bf33710d474839c2aba3c7e2ad2f6fbd0bcc5b9c26b45248ede02832eecf3. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-yato-tool-082-p1"
		],
		"workingPressureBar": [
			"october5-tools-yato-tool-082-p1"
		],
		"demandExplanation": [
			"october5-tools-yato-tool-082-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
