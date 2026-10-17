import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "champion-fm110",
	"slug": "champion-fm110",
	"brand": "Champion",
	"model": "FM110",
	"mpn": "A34905441",
	"variant": {
		"familyId": "champion-fm110",
		"label": "FLOOR, stockage externe",
		"distinguishingAttributes": {
			"équipement": "FLOOR, stockage externe",
			"pressionDeConfiguration": "10 bar",
			"cuve": "0 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [],
	"powerKw": 110,
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/champion-fm110.svg",
		"alt": "Repères techniques : Champion FM110",
		"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt167c47dc7f7db219/bltfdda736d5f38d251/6784ee9ad19b52c44ce02a67/Champion_FM_FMRS_90132.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "FLOOR, stockage externe",
			"evidenceIds": [
				"october4-champion-fm90-132-p3"
			]
		},
		{
			"label": "Pression maximale de fonctionnement publiée",
			"value": "10 bar",
			"evidenceIds": [
				"october4-champion-fm90-132-p3"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "Stockage intégré absent, montage constructeur documenté",
			"evidenceIds": [
				"october4-champion-fm90-132-p3"
			]
		},
		{
			"label": "FAD sous pression",
			"value": "Non qualifié par la source retenue",
			"evidenceIds": [
				"october4-champion-fm90-132-p3"
			]
		},
		{
			"label": "Capacité publiée sous pression, méthode FAD non qualifiée",
			"value": "18 850 L/min à 10 bar",
			"evidenceIds": [
				"october4-champion-fm90-132-p3"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "110 kW",
			"evidenceIds": [
				"october4-champion-fm90-132-p3"
			]
		},
		{
			"label": "Fréquence de la configuration retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october4-champion-fm90-132-p3"
			]
		}
	],
	"editorial": {
		"overview": "FM110, code A34905441, version 10 bar : capacité publiée de 18,85 m³/min, moteur de 110 kW, montage au sol et réseau 400 V à 50 Hz. La méthode de mesure n’est pas qualifiée comme FAD dans le tableau retenu ; la courbe CompatAir reste vide.",
		"verifiedFacts": [
			"Le tableau rattache le code A34905441 à la version 10 bar ; les codes 7,5 et 13 bar sont distincts.",
			"La version FM90 à 10 bar publie 15,51 m³/min pour 90 kW. Le choix relève d’une étude de production industrielle et du réseau."
		],
		"limitations": [
			"Une capacité sous pression est publiée ; le point à confirmer est sa qualification et son protocole FAD.",
			"Le taux de marche et les conditions de fonctionnement continu restent à documenter.",
			"Les petits compresseurs d’atelier éventuellement suggérés sur le seul critère de pression ne sont pas des équivalents de production à ce groupe de 110 kW.",
			"Stockage externe, raccordement, ventilation et disponibilité doivent être validés avec le fournisseur pour le code commandé."
		]
	},
	"evidence": [
		{
			"id": "october4-champion-fm90-132-p3",
			"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blt167c47dc7f7db219/bltfdda736d5f38d251/6784ee9ad19b52c44ce02a67/Champion_FM_FMRS_90132.pdf#page=3",
			"sourceLabel": "Champion, FM et FMRS 90–132, page PDF 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-04",
			"confidence": "B",
			"notes": "SHA-256 7c1ed2902c7e748d4f6631e2dbe9619da7ca922ef9a2ec3bad4f8ee4648bf3b9 de la réponse HTTP originale. Données constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october4-champion-fm90-132-p3"
		],
		"maxPressureBar": [
			"october4-champion-fm90-132-p3"
		],
		"tankLiters": [
			"october4-champion-fm90-132-p3"
		],
		"fadCurve": [
			"october4-champion-fm90-132-p3"
		],
		"powerKw": [
			"october4-champion-fm90-132-p3"
		],
		"oilType": [
			"october4-champion-fm90-132-p3"
		],
		"mpn": [
			"october4-champion-fm90-132-p3"
		]
	},
	"notes": [
		"Portée de la source : capacity-at-pressure-method-unqualified.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	]
};

export default product;
