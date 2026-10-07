import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-graco-airpro-pressure-288933-288933",
	"slug": "pistolet-peinture-graco-airpro-pressure-288933-288933",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Graco AirPro pressure 288933 (réf. 288933)",
	"brand": "Graco",
	"model": "AirPro pressure 288933",
	"mpn": "288933",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-graco-airpro-pressure-288933-288933.svg",
		"alt": "Repères techniques : Graco AirPro pressure 288933 (réf. 288933)",
		"sourceUrl": "https://www.graco.com/content/dam/graco/tech_documents/manuals/312/312414/312414EN-U.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "graco-airpro-pressure-288933",
		"label": "Référence 288933",
		"distinguishingAttributes": {
			"reference": "288933",
			"Orifice Size in. (mm)": "0.086 (2.2)",
			"Spray technology": "Conventional"
		}
	},
	"editorial": {
		"overview": "Graco AirPro pressure 288933 (réf. 288933). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Orifice Size in. (mm) : 0.086 (2.2).",
			"Spray technology : Conventional.",
			"Application : General Metal.",
			"Maximum air working pressure : 100 psi (0.7 MPa, 7 bar).",
			"Maximum fluid working pressure : 300 psi (2.1 MPa, 21 bar).",
			"Weight : 410 g."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"La consommation est liée à une technologie et à une application. Le protocole de mesure ne précise pas explicitement la gâchette entièrement tirée ; le régime ne reçoit donc pas une qualification en charge.",
			"Les variantes à débit accru 24U187 et 24U188 et la version haute production 24D472 ne reprennent pas automatiquement le débit des autres configurations.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Orifice Size in. (mm)",
			"value": "0.086 (2.2)",
			"evidenceIds": [
				"october5-tools-graco-airpro-pressure-p3"
			]
		},
		{
			"label": "Spray technology",
			"value": "Conventional",
			"evidenceIds": [
				"october5-tools-graco-airpro-pressure-p3"
			]
		},
		{
			"label": "Application",
			"value": "General Metal",
			"evidenceIds": [
				"october5-tools-graco-airpro-pressure-p3"
			]
		},
		{
			"label": "Maximum air working pressure",
			"value": "100 psi (0.7 MPa, 7 bar)",
			"evidenceIds": [
				"october5-tools-graco-airpro-pressure-p23"
			]
		},
		{
			"label": "Maximum fluid working pressure",
			"value": "300 psi (2.1 MPa, 21 bar)",
			"evidenceIds": [
				"october5-tools-graco-airpro-pressure-p23"
			]
		},
		{
			"label": "Weight",
			"value": "410 g",
			"evidenceIds": [
				"october5-tools-graco-airpro-pressure-p23"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-graco-airpro-pressure-p3",
			"sourceUrl": "https://www.graco.com/content/dam/graco/tech_documents/manuals/312/312414/312414EN-U.pdf#page=3",
			"sourceLabel": "Graco : graco-airpro-pressure, page PDF 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 db686f2919e70169aab5175ac84b40c5d306d31bd483f4d3723f6b971a0086cb. Aucun essai physique CompatAir."
		},
		{
			"id": "october5-tools-graco-airpro-pressure-p23",
			"sourceUrl": "https://www.graco.com/content/dam/graco/tech_documents/manuals/312/312414/312414EN-U.pdf#page=23",
			"sourceLabel": "Graco : graco-airpro-pressure, page PDF 23",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 db686f2919e70169aab5175ac84b40c5d306d31bd483f4d3723f6b971a0086cb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-graco-airpro-pressure-p3"
		],
		"workingPressureBar": [
			"october5-tools-graco-airpro-pressure-p23"
		],
		"demandExplanation": [
			"october5-tools-graco-airpro-pressure-p3",
			"october5-tools-graco-airpro-pressure-p23"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
