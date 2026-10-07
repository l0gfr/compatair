import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "soufflette-vorel-81640",
	"slug": "soufflette-vorel-81640",
	"categoryId": "soufflette",
	"category": "soufflette",
	"label": "Vorel 81640",
	"brand": "Vorel",
	"model": "81640",
	"mpn": "81640",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/soufflette-vorel-81640.svg",
		"alt": "Repères techniques : Vorel 81640",
		"sourceUrl": "https://toya24.pl/en-PL/products/-blowing-gun-10007198",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vorel-81640",
		"label": "Référence 81640",
		"distinguishingAttributes": {
			"reference": "81640",
			"Nozzle diameter": "2 mm",
			"Acoustic power": "<70 dB(A)"
		}
	},
	"editorial": {
		"overview": "Vorel 81640. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Nozzle diameter : 2 mm.",
			"Acoustic power : <70 dB(A).",
			"Vibrations : <2.5 m/s².",
			"Weight : 0.17 kg."
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
			"value": "2 mm",
			"evidenceIds": [
				"october5-tools-yato-tool-051-p1"
			]
		},
		{
			"label": "Acoustic power",
			"value": "<70 dB(A)",
			"evidenceIds": [
				"october5-tools-yato-tool-051-p1"
			]
		},
		{
			"label": "Vibrations",
			"value": "<2.5 m/s²",
			"evidenceIds": [
				"october5-tools-yato-tool-051-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.17 kg",
			"evidenceIds": [
				"october5-tools-yato-tool-051-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-yato-tool-051-p1",
			"sourceUrl": "https://toya24.pl/en-PL/products/-blowing-gun-10007198",
			"sourceLabel": "Vorel fiche technique officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 bceffc798327cec83e29caf5d907d18cb0215afec2fafad604cf7446bc173c3b. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-yato-tool-051-p1"
		],
		"workingPressureBar": [
			"october5-tools-yato-tool-051-p1"
		],
		"demandExplanation": [
			"october5-tools-yato-tool-051-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
