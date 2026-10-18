import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-nettoyage-yato-yt-2374",
	"slug": "pistolet-nettoyage-yato-yt-2374",
	"categoryId": "pistolet-nettoyage",
	"category": "pistolet-nettoyage",
	"label": "Yato YT-2374",
	"brand": "Yato",
	"model": "YT-2374",
	"mpn": "YT-2374",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-nettoyage-yato-yt-2374.svg",
		"alt": "Repères techniques : Yato YT-2374",
		"sourceUrl": "https://toya24.pl/en-PL/products/-washing-gun-10007178",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "yato-yt-2374",
		"label": "Référence YT-2374",
		"distinguishingAttributes": {
			"reference": "YT-2374",
			"Air supply hose inside diameter": "3/8\" (9.5 mm)",
			"Tank capacity": "0.85 l"
		}
	},
	"editorial": {
		"overview": "Yato YT-2374 : pistolet de nettoyage avec canon de 210 mm et réservoir de 0,85 L. Le YT-23640 voisin est un pistolet à mousse de 1 L : la fonction et l’alimentation produit doivent donc précéder le choix du compresseur.",
		"verifiedFacts": [
			"Air supply hose inside diameter : 3/8\" (9.5 mm).",
			"Tank capacity : 0.85 l.",
			"Nozzle pipe length : 210 mm.",
			"Material : aluminum.",
			"Nozzle material : brass.",
			"Handle material : PVC.",
			"Acoustic power : 103.0 dB(A).",
			"Vibrations : <2.5 m/s².",
			"Weight : 0.46 kg."
		],
		"limitations": [
			"La fiche se contredit sur un débit d’eau, 130 l/h dans la description et 130 l/min dans le tableau. Aucune de ces valeurs ne décrit l’air consommé.",
			"Les 4 bar de service et 8 bar maximum ne fournissent pas un point de consommation ; le diamètre de tuyau de 9,5 mm n’est pas un standard de raccord."
		]
	},
	"specifications": [
		{
			"label": "Air supply hose inside diameter",
			"value": "3/8\" (9.5 mm)",
			"evidenceIds": [
				"october5-tools-yato-tool-009-p1"
			]
		},
		{
			"label": "Tank capacity",
			"value": "0.85 l",
			"evidenceIds": [
				"october5-tools-yato-tool-009-p1"
			]
		},
		{
			"label": "Nozzle pipe length",
			"value": "210 mm",
			"evidenceIds": [
				"october5-tools-yato-tool-009-p1"
			]
		},
		{
			"label": "Material",
			"value": "aluminum",
			"evidenceIds": [
				"october5-tools-yato-tool-009-p1"
			]
		},
		{
			"label": "Nozzle material",
			"value": "brass",
			"evidenceIds": [
				"october5-tools-yato-tool-009-p1"
			]
		},
		{
			"label": "Handle material",
			"value": "PVC",
			"evidenceIds": [
				"october5-tools-yato-tool-009-p1"
			]
		},
		{
			"label": "Acoustic power",
			"value": "103.0 dB(A)",
			"evidenceIds": [
				"october5-tools-yato-tool-009-p1"
			]
		},
		{
			"label": "Vibrations",
			"value": "<2.5 m/s²",
			"evidenceIds": [
				"october5-tools-yato-tool-009-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.46 kg",
			"evidenceIds": [
				"october5-tools-yato-tool-009-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-yato-tool-009-p1",
			"sourceUrl": "https://toya24.pl/en-PL/products/-washing-gun-10007178",
			"sourceLabel": "Yato fiche technique officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 e287a625da316c4bb3e2795a85253a728bff9ae009f50b6b17622ba08a3d9be9. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-yato-tool-009-p1"
		],
		"workingPressureBar": [
			"october5-tools-yato-tool-009-p1"
		],
		"demandExplanation": [
			"october5-tools-yato-tool-009-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
