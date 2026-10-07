import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-nettoyage-vorel-81647",
	"slug": "pistolet-nettoyage-vorel-81647",
	"categoryId": "pistolet-nettoyage",
	"category": "pistolet-nettoyage",
	"label": "Vorel 81647",
	"brand": "Vorel",
	"model": "81647",
	"mpn": "81647",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-nettoyage-vorel-81647.svg",
		"alt": "Repères techniques : Vorel 81647",
		"sourceUrl": "https://toya24.pl/en-PL/products/-washing-gun-10007357",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vorel-81647",
		"label": "Référence 81647",
		"distinguishingAttributes": {
			"reference": "81647",
			"Tank capacity": "0.95 l",
			"Acoustic power": "<70 dB(A)"
		}
	},
	"editorial": {
		"overview": "Vorel 81647. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Tank capacity : 0.95 l.",
			"Acoustic power : <70 dB(A).",
			"Vibrations : <2.5 m/s².",
			"Weight : 0.46 kg."
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
			"label": "Tank capacity",
			"value": "0.95 l",
			"evidenceIds": [
				"october5-tools-yato-tool-027-p1"
			]
		},
		{
			"label": "Acoustic power",
			"value": "<70 dB(A)",
			"evidenceIds": [
				"october5-tools-yato-tool-027-p1"
			]
		},
		{
			"label": "Vibrations",
			"value": "<2.5 m/s²",
			"evidenceIds": [
				"october5-tools-yato-tool-027-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.46 kg",
			"evidenceIds": [
				"october5-tools-yato-tool-027-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-yato-tool-027-p1",
			"sourceUrl": "https://toya24.pl/en-PL/products/-washing-gun-10007357",
			"sourceLabel": "Vorel fiche technique officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 48ad67a45eccc6c1b7fbbd6e706e4195a36da097482b3a02b492ef98bc1a31c7. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-yato-tool-027-p1"
		],
		"workingPressureBar": [
			"october5-tools-yato-tool-027-p1"
		],
		"demandExplanation": [
			"october5-tools-yato-tool-027-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
