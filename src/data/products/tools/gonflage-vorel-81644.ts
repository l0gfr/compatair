import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "gonflage-vorel-81644",
	"slug": "gonflage-vorel-81644",
	"categoryId": "gonflage",
	"category": "gonflage",
	"label": "Vorel 81644",
	"brand": "Vorel",
	"model": "81644",
	"mpn": "81644",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/gonflage-vorel-81644.svg",
		"alt": "Repères techniques : Vorel 81644",
		"sourceUrl": "https://toya24.pl/en-PL/products/-inflating-gun-with-extension-10007295",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vorel-81644",
		"label": "Référence 81644",
		"distinguishingAttributes": {
			"reference": "81644",
			"Nozzle diameter": "4 mm",
			"Material": "aluminum"
		}
	},
	"editorial": {
		"overview": "Vorel 81644. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Nozzle diameter : 4 mm.",
			"Material : aluminum.",
			"Acoustic power : <70 dB(A).",
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
			"label": "Nozzle diameter",
			"value": "4 mm",
			"evidenceIds": [
				"october5-tools-yato-tool-030-p1"
			]
		},
		{
			"label": "Material",
			"value": "aluminum",
			"evidenceIds": [
				"october5-tools-yato-tool-030-p1"
			]
		},
		{
			"label": "Acoustic power",
			"value": "<70 dB(A)",
			"evidenceIds": [
				"october5-tools-yato-tool-030-p1"
			]
		},
		{
			"label": "Vibrations",
			"value": "<2.5 m/s²",
			"evidenceIds": [
				"october5-tools-yato-tool-030-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.15 kg",
			"evidenceIds": [
				"october5-tools-yato-tool-030-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-yato-tool-030-p1",
			"sourceUrl": "https://toya24.pl/en-PL/products/-inflating-gun-with-extension-10007295",
			"sourceLabel": "Vorel fiche technique officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 4cfba86f57923adc94fc21653852ef746383cdb94b8c31ebeb09e9d2e4a54ee0. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-yato-tool-030-p1"
		],
		"workingPressureBar": [
			"october5-tools-yato-tool-030-p1"
		],
		"demandExplanation": [
			"october5-tools-yato-tool-030-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
