import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sableuse-yato-yt-2375",
	"slug": "sableuse-yato-yt-2375",
	"categoryId": "sableuse",
	"category": "sableuse",
	"label": "Yato YT-2375",
	"brand": "Yato",
	"model": "YT-2375",
	"mpn": "YT-2375",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/sableuse-yato-yt-2375.svg",
		"alt": "Repères techniques : Yato YT-2375",
		"sourceUrl": "https://toya24.pl/en-PL/products/-air-sand-blaster-10007208",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "yato-yt-2375",
		"label": "Référence YT-2375",
		"distinguishingAttributes": {
			"reference": "YT-2375",
			"Nozzle diameter": "6 mm",
			"Hose length": "1 m"
		}
	},
	"editorial": {
		"overview": "Yato YT-2375 : pistolet de sablage à aspiration avec tuyau d’abrasif de 1 m. La description annonce une buse de 6,3 mm, tandis que le tableau écrit 6 mm. Cette divergence doit être levée sur la référence livrée avant de choisir les consommables ; elle ne permet pas d’assimiler le montage à la PS/E de 6 mm.",
		"verifiedFacts": [
			"Hose length : 1 m.",
			"Air supply hose inside diameter : 3/8\" (9.5 mm).",
			"Material : aluminum.",
			"Acoustic power : 101.0 dB(A).",
			"Vibrations : <2.03 m/s².",
			"Weight : 0.45 kg."
		],
		"limitations": [
			"Les 160 L/min sont publiés sans régime de mesure ; la plage de service de 2 à 5 bar et le maximum de 8 bar ne suffisent pas au dimensionnement.",
			"Les deux diamètres contradictoires restent visibles, sans arbitrage. Le tuyau d’aspiration ne décrit pas le flexible d’air."
		]
	},
	"specifications": [
		{
			"label": "Nozzle diameter",
			"value": "Description : 6,3 mm ; tableau : 6 mm. Diamètre livré à confirmer.",
			"evidenceIds": [
				"october5-tools-yato-tool-024-p1"
			]
		},
		{
			"label": "Hose length",
			"value": "1 m",
			"evidenceIds": [
				"october5-tools-yato-tool-024-p1"
			]
		},
		{
			"label": "Air supply hose inside diameter",
			"value": "3/8\" (9.5 mm)",
			"evidenceIds": [
				"october5-tools-yato-tool-024-p1"
			]
		},
		{
			"label": "Material",
			"value": "aluminum",
			"evidenceIds": [
				"october5-tools-yato-tool-024-p1"
			]
		},
		{
			"label": "Acoustic power",
			"value": "101.0 dB(A)",
			"evidenceIds": [
				"october5-tools-yato-tool-024-p1"
			]
		},
		{
			"label": "Vibrations",
			"value": "<2.03 m/s²",
			"evidenceIds": [
				"october5-tools-yato-tool-024-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.45 kg",
			"evidenceIds": [
				"october5-tools-yato-tool-024-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-yato-tool-024-p1",
			"sourceUrl": "https://toya24.pl/en-PL/products/-air-sand-blaster-10007208",
			"sourceLabel": "Yato fiche technique officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 7b0ffd92ea2dc3e088e1dec642907c5e04bcb4ef2a7d82a02fd3a5772928a622. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-yato-tool-024-p1"
		],
		"workingPressureBar": [
			"october5-tools-yato-tool-024-p1"
		],
		"demandExplanation": [
			"october5-tools-yato-tool-024-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
