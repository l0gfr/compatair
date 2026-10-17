import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-nettoyage-yato-yt-23640",
	"slug": "pistolet-nettoyage-yato-yt-23640",
	"categoryId": "pistolet-nettoyage",
	"category": "pistolet-nettoyage",
	"label": "Yato YT-23640",
	"brand": "Yato",
	"model": "YT-23640",
	"mpn": "YT-23640",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-nettoyage-yato-yt-23640.svg",
		"alt": "Repères techniques : Yato YT-23640",
		"sourceUrl": "https://toya24.pl/en-PL/products/pneumatic-cleaning-gun-1l-10014524",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "yato-yt-23640",
		"label": "Référence YT-23640",
		"distinguishingAttributes": {
			"reference": "YT-23640",
			"Air supply hose inside diameter": "3/8\" (9.5 mm)",
			"Tank capacity": "1 l"
		}
	},
	"editorial": {
		"overview": "Le YT-23640 est décrit comme un générateur de mousse avec réservoir de 1 L et vanne d’aspiration de liquide. Ce choix d’application le distingue des nettoyeurs SIP 02143 et Vorel 81647 à réservoir de 950 ml. Les 113 L/min annoncés ne disposent pas d’un régime et d’une pression de mesure appariés : le verdict reste indéterminé.",
		"verifiedFacts": [
			"Air supply hose inside diameter : 3/8\" (9.5 mm).",
			"Tank capacity : 1 l.",
			"Nozzle pipe length : 220 mm.",
			"Material : aluminum.",
			"Acoustic power : 96.0 ± 3.0 dB(A).",
			"Vibrations : <2.5 m/s².",
			"Weight : 0.53 kg.",
			"La canne mesure 220 mm ; le flexible d’alimentation prescrit a un diamètre intérieur de 3/8 pouce, soit 9,5 mm. Le maximum de 0,62 MPa se convertit en 6,2 bar, sans devenir une pression d’essai du débit."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"Les pressions recommandées ou maximales de cette fiche ne sont pas des points de mesure de consommation.",
			"Sans régime explicite en charge et pression de mesure associée, la consommation éventuelle reste documentaire et ne permet aucun verdict conclusif.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué.",
			"Vérifier le détergent, l’alimentation de liquide et le raccord réel. Le volume du réservoir et la production de mousse ne caractérisent pas le débit d’air en action."
		]
	},
	"specifications": [
		{
			"label": "Air supply hose inside diameter",
			"value": "3/8\" (9.5 mm)",
			"evidenceIds": [
				"october5-tools-yato-tool-109-p1"
			]
		},
		{
			"label": "Tank capacity",
			"value": "1 l",
			"evidenceIds": [
				"october5-tools-yato-tool-109-p1"
			]
		},
		{
			"label": "Nozzle pipe length",
			"value": "220 mm",
			"evidenceIds": [
				"october5-tools-yato-tool-109-p1"
			]
		},
		{
			"label": "Material",
			"value": "aluminum",
			"evidenceIds": [
				"october5-tools-yato-tool-109-p1"
			]
		},
		{
			"label": "Acoustic power",
			"value": "96.0 ± 3.0 dB(A)",
			"evidenceIds": [
				"october5-tools-yato-tool-109-p1"
			]
		},
		{
			"label": "Vibrations",
			"value": "<2.5 m/s²",
			"evidenceIds": [
				"october5-tools-yato-tool-109-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.53 kg",
			"evidenceIds": [
				"october5-tools-yato-tool-109-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-yato-tool-109-p1",
			"sourceUrl": "https://toya24.pl/en-PL/products/pneumatic-cleaning-gun-1l-10014524",
			"sourceLabel": "Yato fiche technique officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 806aba65ebb5a10642bf83ba7be41eba44683158f424f778dde71aa5c843935b. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-yato-tool-109-p1"
		],
		"workingPressureBar": [
			"october5-tools-yato-tool-109-p1"
		],
		"demandExplanation": [
			"october5-tools-yato-tool-109-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
