import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-vorel-81618",
	"slug": "pistolet-peinture-vorel-81618",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Vorel 81618",
	"brand": "Vorel",
	"model": "81618",
	"mpn": "81618",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-vorel-81618.svg",
		"alt": "Repères techniques : Vorel 81618",
		"sourceUrl": "https://toya24.pl/en-PL/products/spray-gun-with-gravity-flow-cup-0-68l-10006698",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vorel-81618",
		"label": "Référence 81618",
		"distinguishingAttributes": {
			"reference": "81618",
			"Nozzle diameter": "1.5 mm",
			"Tank capacity": "0.68 l"
		}
	},
	"editorial": {
		"overview": "Vorel 81618. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Nozzle diameter : 1.5 mm.",
			"Tank capacity : 0.68 l.",
			"Acoustic power : <70 dB(A).",
			"Vibrations : <2.5 m/s².",
			"Weight : 0.64 kg."
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
			"label": "Nozzle diameter",
			"value": "1.5 mm",
			"evidenceIds": [
				"october5-tools-yato-tool-037-p1"
			]
		},
		{
			"label": "Tank capacity",
			"value": "0.68 l",
			"evidenceIds": [
				"october5-tools-yato-tool-037-p1"
			]
		},
		{
			"label": "Acoustic power",
			"value": "<70 dB(A)",
			"evidenceIds": [
				"october5-tools-yato-tool-037-p1"
			]
		},
		{
			"label": "Vibrations",
			"value": "<2.5 m/s²",
			"evidenceIds": [
				"october5-tools-yato-tool-037-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.64 kg",
			"evidenceIds": [
				"october5-tools-yato-tool-037-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-yato-tool-037-p1",
			"sourceUrl": "https://toya24.pl/en-PL/products/spray-gun-with-gravity-flow-cup-0-68l-10006698",
			"sourceLabel": "Vorel fiche technique officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 97ae06ba67e171a58113793c65cc28e61310f7d5cabf80e79da7a1c745ca3046. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-yato-tool-037-p1"
		],
		"workingPressureBar": [
			"october5-tools-yato-tool-037-p1"
		],
		"demandExplanation": [
			"october5-tools-yato-tool-037-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
