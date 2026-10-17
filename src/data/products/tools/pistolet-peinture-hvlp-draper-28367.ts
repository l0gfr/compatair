import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-hvlp-draper-28367",
	"slug": "pistolet-peinture-hvlp-draper-28367",
	"categoryId": "pistolet-peinture-hvlp",
	"category": "pistolet-peinture-hvlp",
	"label": "Draper 28367",
	"brand": "Draper",
	"model": "28367",
	"mpn": "28367",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 2.965
	},
	"demandExplanation": "La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-hvlp-draper-28367.webp",
		"alt": "Repères techniques : Draper 28367",
		"sourceUrl": "https://www.drapertools.com/product/28367/hvlp-air-paint-spray-gun-600ml-1-3-1-4-2mm/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "draper-28367",
		"label": "Référence 28367",
		"distinguishingAttributes": {
			"reference": "28367",
			"Champ fabricant : Capacity": "600ml",
			"Champ fabricant : Nozzle size": "1.3, 1.4, 2.0mm"
		}
	},
	"editorial": {
		"overview": "Draper 28367 : un pistolet gravitaire de 600 ml livré avec une buse de 1,3 mm et des jeux de 1,4 et 2,0 mm. Son entrée d’air est en 1/4 BSP et la pression de service annoncée est de 43 psi. Le 28366 voisin est un modèle de 100 ml, livré en 0,8 et 1,0 mm à 50 psi.",
		"verifiedFacts": [
			"Champ fabricant : Capacity : 600ml.",
			"Champ fabricant : Nozzle size : 1.3, 1.4, 2.0mm.",
			"Champ fabricant : Operating air pressure : 43psi.",
			"Champ fabricant : Air inlet : 1/4\" BSP.",
			"Champ fabricant : Weight : 579g."
		],
		"limitations": [
			"Le fabricant ne publie pas de consommation d’air exploitable sur cette fiche ; le besoin de compresseur reste à documenter.",
			"Les trois diamètres sont l’équipement d’un même article 28367 ; ils ne constituent pas trois références de pistolets.",
			"Le choix du calibre de buse dépend du produit à appliquer. Le diamètre du raccord ne fournit pas le débit consommé."
		]
	},
	"specifications": [
		{
			"label": "Champ fabricant : Capacity",
			"value": "600ml",
			"evidenceIds": [
				"october2b-tools-oct2b-draper-28367-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Nozzle size",
			"value": "1.3, 1.4, 2.0mm",
			"evidenceIds": [
				"october2b-tools-oct2b-draper-28367-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Operating air pressure",
			"value": "43psi",
			"evidenceIds": [
				"october2b-tools-oct2b-draper-28367-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Air inlet",
			"value": "1/4\" BSP",
			"evidenceIds": [
				"october2b-tools-oct2b-draper-28367-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Weight",
			"value": "579g",
			"evidenceIds": [
				"october2b-tools-oct2b-draper-28367-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating air pressure: 43psi",
			"evidenceIds": [
				"october2b-tools-oct2b-draper-28367-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-draper-28367-html-p1",
			"sourceUrl": "https://www.drapertools.com/product/28367/hvlp-air-paint-spray-gun-600ml-1-3-1-4-2mm/",
			"sourceLabel": "Draper, fiche technique constructeur 28367",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 7703d6e10a738f00e3fb9bf6ce63501dbddf5cf26ba4faeb4b2c3b0b3e82dd3c. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "october2b-tools-oct2b-draper-28366-html-p1",
			"sourceUrl": "https://www.drapertools.com/product/28366/hvlp-air-paint-spray-gun-100ml/",
			"sourceLabel": "Draper, fiche technique constructeur 28366",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : d1d96e14c0cb2b4da4d23734c7d5dd4f16af09728608db0d7db21468a1ffcf69. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-draper-28367-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-draper-28367-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-draper-28367-html-p1"
		],
		"connectorSize": [
			"october2b-tools-oct2b-draper-28367-html-p1"
		]
	},
	"notes": [
		"La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué."
	],
	"connectorSize": "1/4 BSP"
};

export default product;
