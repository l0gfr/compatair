import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "gonflage-vorel-81651",
	"slug": "gonflage-vorel-81651",
	"categoryId": "gonflage",
	"category": "gonflage",
	"label": "Vorel 81651",
	"brand": "Vorel",
	"model": "81651",
	"mpn": "81651",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/gonflage-vorel-81651.svg",
		"alt": "Repères techniques : Vorel 81651",
		"sourceUrl": "https://toya24.pl/en-PL/products/inflating-gun-with-manometer-10012202",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vorel-81651",
		"label": "Référence 81651",
		"distinguishingAttributes": {
			"reference": "81651",
			"Manometer diameter": "75 mm",
			"Hose length": "35 cm"
		}
	},
	"editorial": {
		"overview": "Vorel 81651. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Manometer diameter : 75 mm.",
			"Hose length : 35 cm.",
			"Material : aluminum.",
			"Acoustic power : 99.0 ± 3.0 dB(A).",
			"Vibrations : <2.5 m/s².",
			"Weight : 0.3 kg."
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
				"october5-tools-yato-tool-052-p1"
			]
		},
		{
			"label": "Hose length",
			"value": "35 cm",
			"evidenceIds": [
				"october5-tools-yato-tool-052-p1"
			]
		},
		{
			"label": "Material",
			"value": "aluminum",
			"evidenceIds": [
				"october5-tools-yato-tool-052-p1"
			]
		},
		{
			"label": "Acoustic power",
			"value": "99.0 ± 3.0 dB(A)",
			"evidenceIds": [
				"october5-tools-yato-tool-052-p1"
			]
		},
		{
			"label": "Vibrations",
			"value": "<2.5 m/s²",
			"evidenceIds": [
				"october5-tools-yato-tool-052-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.3 kg",
			"evidenceIds": [
				"october5-tools-yato-tool-052-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-yato-tool-052-p1",
			"sourceUrl": "https://toya24.pl/en-PL/products/inflating-gun-with-manometer-10012202",
			"sourceLabel": "Vorel fiche technique officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 692f4f71b7dc6dd596c8a632b6f58479cef7202e10ae87cc0b276a72bf7d22c0. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-yato-tool-052-p1"
		],
		"workingPressureBar": [
			"october5-tools-yato-tool-052-p1"
		],
		"demandExplanation": [
			"october5-tools-yato-tool-052-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
