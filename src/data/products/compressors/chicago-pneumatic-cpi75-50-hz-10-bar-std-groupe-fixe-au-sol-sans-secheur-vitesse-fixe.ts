import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "chicago-pneumatic-cpi75-50-hz-10-bar-std-groupe-fixe-au-sol-sans-secheur-vitesse-fixe",
	"slug": "chicago-pneumatic-cpi75-50-hz-10-bar-std-groupe-fixe-au-sol-sans-secheur-vitesse-fixe",
	"brand": "Chicago Pneumatic",
	"model": "CPI75",
	"variant": {
		"familyId": "chicago-pneumatic-cpi75",
		"label": "STD, groupe fixe au sol, sans sécheur ; vitesse fixe, 50 Hz, 10 bar",
		"distinguishingAttributes": {
			"équipement": "STD, groupe fixe au sol, sans sécheur ; vitesse fixe",
			"pressionMaximale": "10 bar",
			"cuve": "0 L",
			"régulation": "vitesse fixe",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 9.5,
			"litersPerMinute": 8933.333
		}
	],
	"oilType": "oil",
	"powerKw": 55,
	"weightKg": 1308,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/chicago-pneumatic-cpi75-50-hz-10-bar-std-groupe-fixe-au-sol-sans-secheur-vitesse-fixe.webp",
		"alt": "Repères techniques : Chicago Pneumatic CPI75, 50 Hz, 10 bar",
		"sourceUrl": "https://compressors.cp.com/content/dam/brands/Chicago%20Pneumatic/compressors/cpvsm-75-120-%282024%29/leaflets/CP%28WW%29%20CPI75-120%20CPM75-120%20%20CPVSM75-120%206999%206106%2082_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "STD, groupe fixe au sol, sans sécheur ; vitesse fixe",
			"evidenceIds": [
				"october2b-cp-cpi-cpm75-120-p7"
			]
		},
		{
			"label": "Pression maximale du tableau constructeur",
			"value": "10 bar relatifs",
			"evidenceIds": [
				"october2b-cp-cpi-cpm75-120-p7"
			]
		},
		{
			"label": "FAD à 9,5 bar",
			"value": "536 m³/h",
			"evidenceIds": [
				"october2b-cp-cpi-cpm75-120-p7"
			]
		},
		{
			"label": "Fréquence de la documentation",
			"value": "50 Hz",
			"evidenceIds": [
				"october2b-cp-cpi-cpm75-120-p7"
			]
		},
		{
			"label": "Périmètre documentaire",
			"value": "International",
			"evidenceIds": [
				"october2b-cp-cpi-cpm75-120-p7"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "Groupe seul ; réservoir de stockage externe non inclus",
			"evidenceIds": [
				"october2b-cp-cpi-cpm75-120-p7"
			]
		}
	],
	"editorial": {
		"overview": "Chicago Pneumatic CPI75, 50 Hz, 10 bar. 8 933,333 L/min à 9,5 bar. Moteur 55 kW ; STD, groupe fixe au sol, sans sécheur ; vitesse fixe.",
		"verifiedFacts": [
			"Débit restitué relié à une pression et aux unités originales de la fiche fabricant.",
			"Périmètre retenu : groupe seul ; réservoir de stockage externe exclu.",
			"Limite de pression documentée : 10 bar ; le point FAD conserve sa pression publiée."
		],
		"limitations": [
			"Page 7, Pression FAD supérieure au maximum de cette configuration ; exclue sans inversion ni correction.",
			"Cette entrée correspond à une configuration constructeur de pression maximale ; aucun nouveau produit n’est créé à partir d’un simple point de test.",
			"Cycle de service non établi par les sources retenues ; la tenue permanente reste indéterminée.",
			"Les seules pressions FAD retenues sont celles du document. Aucun débit aspiré, extrapolation ou essai d’utilisation CompatAir.",
			"Documentation et disponibilité de la configuration à confirmer avec le constructeur."
		]
	},
	"evidence": [
		{
			"id": "october2b-cp-cpi-cpm75-120-p7",
			"sourceUrl": "https://compressors.cp.com/content/dam/brands/Chicago%20Pneumatic/compressors/cpvsm-75-120-%282024%29/leaflets/CP%28WW%29%20CPI75-120%20CPM75-120%20%20CPVSM75-120%206999%206106%2082_EN.pdf#page=7",
			"sourceLabel": "Chicago Pneumatic CPI/CPM/CPVSM 75–120, brochure 6999 6106 82, page PDF 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 f4f20b2a4b11c06341f00b6f37e343e791088aaf4631ecd0b188170df2ba91ca de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "october2b-cp-big-oil-p3",
			"sourceUrl": "https://compressors.cp.com/content/dam/brands/Chicago%20Pneumatic/compressors/cpvsm-75-120-%282024%29/leaflets/CP%28WW%29%20CPI75-120%20CPM75-120%20%20CPVSM75-120%206999%206106%2082_EN.pdf#page=3",
			"sourceLabel": "Chicago Pneumatic CPI/CPM/CPVSM 75–120, brochure 6999 6106 82 ; lubrification du bloc de compression, page PDF 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 f4f20b2a4b11c06341f00b6f37e343e791088aaf4631ecd0b188170df2ba91ca de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october2b-cp-cpi-cpm75-120-p7"
		],
		"maxPressureBar": [
			"october2b-cp-cpi-cpm75-120-p7"
		],
		"fadCurve": [
			"october2b-cp-cpi-cpm75-120-p7"
		],
		"powerKw": [
			"october2b-cp-cpi-cpm75-120-p7"
		],
		"oilType": [
			"october2b-cp-big-oil-p3"
		],
		"weightKg": [
			"october2b-cp-cpi-cpm75-120-p7"
		]
	},
	"notes": [
		"Les unités bar(g) et psig désignent des pressions relatives lorsque le document les précise ; les autres valeurs en bar sont reprises telles qu’imprimées, sans conversion en pression absolue. Conditions ISO et pression de restitution restent celles du document constructeur."
	]
};

export default product;
