import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-hvlp-yato-yt-2341",
	"slug": "pistolet-peinture-hvlp-yato-yt-2341",
	"categoryId": "pistolet-peinture-hvlp",
	"category": "pistolet-peinture-hvlp",
	"label": "Yato YT-2341",
	"brand": "Yato",
	"model": "YT-2341",
	"mpn": "YT-2341",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-hvlp-yato-yt-2341.svg",
		"alt": "Repères techniques : Yato YT-2341",
		"sourceUrl": "https://toya24.pl/en-PL/products/-spray-gun-with-fluid-cup-hvlp-0-6l-1-5-mm-10006673",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "yato-yt-2341",
		"label": "Référence YT-2341",
		"distinguishingAttributes": {
			"reference": "YT-2341",
			"Type": "HVLP",
			"Coating material flow (water)": "0.15-0.22 l/min"
		}
	},
	"editorial": {
		"overview": "Yato YT-2341 : pistolet HVLP gravitaire de 600 ml à buse de 1,5 mm, contre 1,4 mm pour le YT-2340. La fiche publie séparément 410 L/min d’air et 0,15 à 0,22 L/min d’eau dans sa description du débit produit.",
		"verifiedFacts": [
			"Type : HVLP.",
			"Coating material flow (water) : 0.15-0.22 l/min.",
			"Nozzle diameter : 1.5 mm.",
			"Air supply hose inside diameter : 3/8\" (9.5 mm).",
			"Tank capacity : 0.6 l.",
			"Material : aluminum, stainless steel.",
			"Acoustic power : 87.0 dB(A).",
			"Vibrations : <2.5 m/s².",
			"Weight : 0.64 kg."
		],
		"limitations": [
			"Les 410 L/min ne sont accompagnés ni d’un régime de charge ni d’un point pression–débit complet.",
			"La pression maximale de 0,3 MPa ne constitue pas une pression de mesure. Le débit d’eau ne remplace jamais le besoin d’air."
		]
	},
	"specifications": [
		{
			"label": "Type",
			"value": "HVLP",
			"evidenceIds": [
				"october5-tools-yato-tool-005-p1"
			]
		},
		{
			"label": "Coating material flow (water)",
			"value": "0.15-0.22 l/min",
			"evidenceIds": [
				"october5-tools-yato-tool-005-p1"
			]
		},
		{
			"label": "Nozzle diameter",
			"value": "1.5 mm",
			"evidenceIds": [
				"october5-tools-yato-tool-005-p1"
			]
		},
		{
			"label": "Air supply hose inside diameter",
			"value": "3/8\" (9.5 mm)",
			"evidenceIds": [
				"october5-tools-yato-tool-005-p1"
			]
		},
		{
			"label": "Tank capacity",
			"value": "0.6 l",
			"evidenceIds": [
				"october5-tools-yato-tool-005-p1"
			]
		},
		{
			"label": "Material",
			"value": "aluminum, stainless steel",
			"evidenceIds": [
				"october5-tools-yato-tool-005-p1"
			]
		},
		{
			"label": "Acoustic power",
			"value": "87.0 dB(A)",
			"evidenceIds": [
				"october5-tools-yato-tool-005-p1"
			]
		},
		{
			"label": "Vibrations",
			"value": "<2.5 m/s²",
			"evidenceIds": [
				"october5-tools-yato-tool-005-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.64 kg",
			"evidenceIds": [
				"october5-tools-yato-tool-005-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-yato-tool-005-p1",
			"sourceUrl": "https://toya24.pl/en-PL/products/-spray-gun-with-fluid-cup-hvlp-0-6l-1-5-mm-10006673",
			"sourceLabel": "Yato fiche technique officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 550a9a7eaed837b2df20e60fbedfc3f094dc34846d3213cb17267abe7ded15ea. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-yato-tool-005-p1"
		],
		"workingPressureBar": [
			"october5-tools-yato-tool-005-p1"
		],
		"demandExplanation": [
			"october5-tools-yato-tool-005-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
