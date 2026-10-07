import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "soufflette-ks-tools-515-1216",
	"slug": "soufflette-ks-tools-515-1216",
	"categoryId": "soufflette",
	"category": "soufflette",
	"label": "KS Tools 515.1216",
	"brand": "KS Tools",
	"model": "515.1216",
	"mpn": "515.1216",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"max": 6.3
	},
	"demandExplanation": "La consommation et son point de pression ne sont pas établis de façon exploitable dans la fiche fabricant. Les caractéristiques publiées restent consultables, sans débit de calcul supposé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/soufflette-ks-tools-515-1216.webp",
		"alt": "Repères techniques : KS Tools 515.1216",
		"sourceUrl": "https://www.kstools.com/en/products/special-tools-for-passenger-cars-and-light-commercial-vans/general-workshop-requirements/individual-parts/11399/cooling-system-pneumatic-flush-gun?c=1011737446",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ks-tools-515-1216",
		"label": "Référence 515.1216",
		"distinguishingAttributes": {
			"reference": "515.1216",
			"Intitulé fabricant": "Cooling system pneumatic flush gun",
			"Filetage de raccordement publié": "1/4\"PT"
		}
	},
	"editorial": {
		"overview": "KS Tools 515.1216. La consommation et son point de pression ne sont pas établis de façon exploitable dans la fiche fabricant. Les caractéristiques publiées restent consultables, sans débit de calcul supposé. Intitulé fabricant : Cooling system pneumatic flush gun. Filetage de raccordement publié : 1/4\"PT.",
		"verifiedFacts": [
			"Intitulé fabricant : Cooling system pneumatic flush gun.",
			"Filetage de raccordement publié : 1/4\"PT.",
			"Champ fabricant : Diameter in mm : 19,0 / 29,0 / 32,0 / 36,5 / 40,0.",
			"Pression d’entrée publiée : max. 8,5 bar.",
			"Pression de service, libellé original : max. 6,3 bar (90 psi).",
			"Masse publiée (g) : 300.",
			"Longueur totale publiée (mm) : 350.0."
		],
		"limitations": [
			"La consommation et son point de pression ne sont pas établis de façon exploitable dans la fiche fabricant. Les caractéristiques publiées restent consultables, sans débit de calcul supposé.",
			"La fiche ne relie pas explicitement la consommation à un point de pression mesuré ni à un régime en charge. La pression de service et le débit publié restent deux informations distinctes.",
			"Le champ « min. Tube diameter » ne précise pas littéralement un diamètre intérieur ; aucune section hydraulique n’est déduite de ce libellé.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Intitulé fabricant",
			"value": "Cooling system pneumatic flush gun",
			"evidenceIds": [
				"october3c-tools-ks-product-515-1216-p1"
			]
		},
		{
			"label": "Filetage de raccordement publié",
			"value": "1/4\"PT",
			"evidenceIds": [
				"october3c-tools-ks-product-515-1216-p1"
			]
		},
		{
			"label": "Champ fabricant : Diameter in mm",
			"value": "19,0 / 29,0 / 32,0 / 36,5 / 40,0",
			"evidenceIds": [
				"october3c-tools-ks-product-515-1216-p1"
			]
		},
		{
			"label": "Pression d’entrée publiée",
			"value": "max. 8,5 bar",
			"evidenceIds": [
				"october3c-tools-ks-product-515-1216-p1"
			]
		},
		{
			"label": "Pression de service, libellé original",
			"value": "max. 6,3 bar (90 psi)",
			"evidenceIds": [
				"october3c-tools-ks-product-515-1216-p1"
			]
		},
		{
			"label": "Masse publiée (g)",
			"value": "300",
			"evidenceIds": [
				"october3c-tools-ks-product-515-1216-p1"
			]
		},
		{
			"label": "Longueur totale publiée (mm)",
			"value": "350.0",
			"evidenceIds": [
				"october3c-tools-ks-product-515-1216-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating pressure in bar: max. 6,3 bar (90 psi)",
			"evidenceIds": [
				"october3c-tools-ks-product-515-1216-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-ks-product-515-1216-p1",
			"sourceUrl": "https://www.kstools.com/en/products/special-tools-for-passenger-cars-and-light-commercial-vans/general-workshop-requirements/individual-parts/11399/cooling-system-pneumatic-flush-gun?c=1011737446",
			"sourceLabel": "KS Tools, fiche fabricant 515.1216",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : d97819ebc97bb7c4335fdacc40304ceb1187dd53158bcbffa7221960f0210cd0. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-ks-product-515-1216-p1"
		],
		"workingPressureBar": [
			"october3c-tools-ks-product-515-1216-p1"
		],
		"demandExplanation": [
			"october3c-tools-ks-product-515-1216-p1"
		]
	},
	"notes": [
		"La consommation et son point de pression ne sont pas établis de façon exploitable dans la fiche fabricant. Les caractéristiques publiées restent consultables, sans débit de calcul supposé."
	]
};

export default product;
