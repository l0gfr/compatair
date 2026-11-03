import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-aircat-4338",
	"slug": "perceuse-aircat-4338",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Aircat 4338",
	"brand": "Aircat",
	"model": "4338",
	"mpn": "4338",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/4-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-aircat-4338.webp",
		"alt": "Repères techniques : Aircat 4338",
		"sourceUrl": "https://continentaltoolgroup.com/product/aircat-6-hp-3-8-composite-reversible-drill/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-4338",
		"label": "Référence 4338",
		"distinguishingAttributes": {
			"reference": "4338",
			"Masse publiée": "2.5 lb",
			"Puissance publiée": "0.6 HP"
		}
	},
	"editorial": {
		"overview": "Aircat 4338. La 4338 est la perceuse réversible composite à mandrin 3/8 pouce, 0,6 HP et longueur 7 pouces. La 4337 est une perceuse d’angle et la 4450 est une version 1/2 pouce, d’après les descriptions liées. Le champ de vitesse est libellé BPM malgré une machine rotative : aucune unité corrigée n’est inventée. Les 6 CFM restent sans régime et pression de mesure établis.",
		"verifiedFacts": [
			"Mandrin : 3/8 pouce.",
			"Sens : Réversible.",
			"Puissance : 0,6 HP.",
			"Longueur : 7 pouces.",
			"Filetage de broche publié : 3/8 × 24.",
			"Vitesse, champ constructeur : 1 800 sous le libellé Free Speed (BPM).",
			"Consommation, régime non précisé : 6 CFM."
		],
		"limitations": [
			"La fiche ne documente pas suffisamment le régime de consommation et son appariement à une pression ; le calcul reste indéterminé."
		]
	},
	"specifications": [
		{
			"label": "Mandrin",
			"value": "3/8 pouce",
			"evidenceIds": [
				"perceuse-aircat-4338-reserved-20261103-1"
			]
		},
		{
			"label": "Sens",
			"value": "Réversible",
			"evidenceIds": [
				"perceuse-aircat-4338-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance",
			"value": "0,6 HP",
			"evidenceIds": [
				"perceuse-aircat-4338-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "7 pouces",
			"evidenceIds": [
				"perceuse-aircat-4338-reserved-20261103-1"
			]
		},
		{
			"label": "Filetage de broche publié",
			"value": "3/8 × 24",
			"evidenceIds": [
				"perceuse-aircat-4338-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse, champ constructeur",
			"value": "1 800 sous le libellé Free Speed (BPM)",
			"evidenceIds": [
				"perceuse-aircat-4338-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation, régime non précisé",
			"value": "6 CFM",
			"evidenceIds": [
				"perceuse-aircat-4338-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-125-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/aircat-6-hp-3-8-composite-reversible-drill/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 4338",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 1556c3a5cba2b0daafd3de9135480f3c86c45f712ccd714a9e8fe96ff0f5f1ce. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "perceuse-aircat-4338-reserved-20261103-1",
			"sourceUrl": "https://continentaltoolgroup.com/product/aircat-6-hp-3-8-composite-reversible-drill/",
			"sourceLabel": "Aircat : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 2f65a7a250617adef23b83a41202fa8eb40a14f2e25a1602cab756e97c7b5ed7. La 4338 est la perceuse réversible composite à mandrin 3/8 pouce, 0,6 HP et longueur 7 pouces. La 4337 est une perceuse d’angle et la 4450 est une version 1/2 pouce, d’après les descriptions liées. Le champ de vitesse est libellé BPM malgré une machine rotative : aucune unité corrigée n’est inventée. Les 6 CFM restent sans régime et pression de mesure établis."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-125-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-125-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-125-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-125-p1"
		],
		"editorial": [
			"perceuse-aircat-4338-reserved-20261103-1"
		],
		"specifications": [
			"perceuse-aircat-4338-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
