import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-hvlp-vorel-80903",
	"slug": "pistolet-peinture-hvlp-vorel-80903",
	"categoryId": "pistolet-peinture-hvlp",
	"category": "pistolet-peinture-hvlp",
	"label": "Vorel 80903",
	"brand": "Vorel",
	"model": "80903",
	"mpn": "80903",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-hvlp-vorel-80903.svg",
		"alt": "Repères techniques : Vorel 80903",
		"sourceUrl": "https://toya24.pl/en-PL/products/spray-gun-with-fluid-cup-hvlp-1000ml-10012432",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vorel-80903",
		"label": "Référence 80903",
		"distinguishingAttributes": {
			"reference": "80903",
			"Type": "HVLP",
			"Nozzle diameter": "1.8 mm"
		}
	},
	"editorial": {
		"overview": "Vorel 80903 : pistolet HVLP à buse de 1,8 mm et réservoir de 1 L. Le 80902 voisin possède une buse de 1,4 mm et un godet de 0,6 L. La capacité de produit et le calibre diffèrent, sans mesure comparative d’air à disposition.",
		"verifiedFacts": [
			"Type : HVLP.",
			"Nozzle diameter : 1.8 mm.",
			"Tank capacity : 1 l.",
			"Material : aluminum, stainless steel.",
			"Acoustic power : 98.9 ± 2.5 dB(A).",
			"Weight : 0.9 kg."
		],
		"limitations": [
			"Les 198 L/min sont publiés sans régime de mesure ; ils ne sont pas traités comme une demande en charge.",
			"La fiche indique 0,3 MPa de service et 0,4 MPa maximum. Le maximum ne renseigne pas une consommation à cette pression."
		]
	},
	"specifications": [
		{
			"label": "Type",
			"value": "HVLP",
			"evidenceIds": [
				"october5-tools-yato-tool-093-p1"
			]
		},
		{
			"label": "Nozzle diameter",
			"value": "1.8 mm",
			"evidenceIds": [
				"october5-tools-yato-tool-093-p1"
			]
		},
		{
			"label": "Tank capacity",
			"value": "1 l",
			"evidenceIds": [
				"october5-tools-yato-tool-093-p1"
			]
		},
		{
			"label": "Material",
			"value": "aluminum, stainless steel",
			"evidenceIds": [
				"october5-tools-yato-tool-093-p1"
			]
		},
		{
			"label": "Acoustic power",
			"value": "98.9 ± 2.5 dB(A)",
			"evidenceIds": [
				"october5-tools-yato-tool-093-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.9 kg",
			"evidenceIds": [
				"october5-tools-yato-tool-093-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-yato-tool-093-p1",
			"sourceUrl": "https://toya24.pl/en-PL/products/spray-gun-with-fluid-cup-hvlp-1000ml-10012432",
			"sourceLabel": "Vorel fiche technique officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 9a43ad62d406b1d8ebc8cd8d4b47ebabe300c07eff51b3353690bdab8093d843. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-yato-tool-093-p1"
		],
		"workingPressureBar": [
			"october5-tools-yato-tool-093-p1"
		],
		"demandExplanation": [
			"october5-tools-yato-tool-093-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
