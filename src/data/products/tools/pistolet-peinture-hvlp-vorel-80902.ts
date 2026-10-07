import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-hvlp-vorel-80902",
	"slug": "pistolet-peinture-hvlp-vorel-80902",
	"categoryId": "pistolet-peinture-hvlp",
	"category": "pistolet-peinture-hvlp",
	"label": "Vorel 80902",
	"brand": "Vorel",
	"model": "80902",
	"mpn": "80902",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-hvlp-vorel-80902.svg",
		"alt": "Repères techniques : Vorel 80902",
		"sourceUrl": "https://toya24.pl/en-PL/products/-spray-gun-10000939",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vorel-80902",
		"label": "Référence 80902",
		"distinguishingAttributes": {
			"reference": "80902",
			"Type": "HVLP",
			"Nozzle diameter": "1.4 mm"
		}
	},
	"editorial": {
		"overview": "Vorel 80902. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Type : HVLP.",
			"Nozzle diameter : 1.4 mm.",
			"Tank capacity : 0.6 l.",
			"Material : aluminum, stainless steel.",
			"Acoustic power : 69.2 dB(A).",
			"Weight : 0.582 kg."
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
			"label": "Type",
			"value": "HVLP",
			"evidenceIds": [
				"october5-tools-yato-tool-130-p1"
			]
		},
		{
			"label": "Nozzle diameter",
			"value": "1.4 mm",
			"evidenceIds": [
				"october5-tools-yato-tool-130-p1"
			]
		},
		{
			"label": "Tank capacity",
			"value": "0.6 l",
			"evidenceIds": [
				"october5-tools-yato-tool-130-p1"
			]
		},
		{
			"label": "Material",
			"value": "aluminum, stainless steel",
			"evidenceIds": [
				"october5-tools-yato-tool-130-p1"
			]
		},
		{
			"label": "Acoustic power",
			"value": "69.2 dB(A)",
			"evidenceIds": [
				"october5-tools-yato-tool-130-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.582 kg",
			"evidenceIds": [
				"october5-tools-yato-tool-130-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-yato-tool-130-p1",
			"sourceUrl": "https://toya24.pl/en-PL/products/-spray-gun-10000939",
			"sourceLabel": "Vorel fiche technique officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 38d3d773063444856734655ff00598363758dfeb9e2ecee4438f11e2e3ba4d78. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-yato-tool-130-p1"
		],
		"workingPressureBar": [
			"october5-tools-yato-tool-130-p1"
		],
		"demandExplanation": [
			"october5-tools-yato-tool-130-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
