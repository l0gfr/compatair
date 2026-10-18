import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "champion-fm132",
	"slug": "champion-fm132",
	"brand": "Champion",
	"model": "FM132",
	"mpn": "A34905444",
	"variant": {
		"familyId": "champion-fm132",
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
	"powerKw": 132,
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/champion-fm132.svg",
		"alt": "Repères techniques : Champion FM132",
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
			"value": "21 510 L/min à 10 bar",
			"evidenceIds": [
				"october4-champion-fm90-132-p3"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "132 kW",
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
		"overview": "FM132, code A34905444, version 10 bar : capacité publiée de 21,51 m³/min, moteur de 132 kW et alimentation 400 V à 50 Hz, montage au sol. Le FM110 voisin annonce 18,85 m³/min à 10 bar pour 110 kW. La méthode FAD reste non qualifiée dans ce tableau.",
		"verifiedFacts": [
			"Configuration de pression documentée : 10 bar.",
			"Montage sans réservoir de stockage intégré explicitement documenté."
		],
		"limitations": [
			"Les codes des versions 7,5, 10 et 13 bar sont distincts. Le code A34905444 appartient à la colonne 10 bar.",
			"La capacité sous pression est publiée ; sa qualification et son protocole FAD restent à confirmer. La courbe CompatAir demeure vide.",
			"Le taux de marche reste inconnu. Les petits compresseurs d’atelier éventuellement suggérés ne sont pas des équivalents de production à ce groupe de 132 kW.",
			"Stockage externe, refroidissement, raccordement et disponibilité demandent une étude de la configuration commandée."
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
