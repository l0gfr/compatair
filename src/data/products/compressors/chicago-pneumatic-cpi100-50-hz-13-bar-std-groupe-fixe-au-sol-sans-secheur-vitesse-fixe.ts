import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "chicago-pneumatic-cpi100-50-hz-13-bar-std-groupe-fixe-au-sol-sans-secheur-vitesse-fixe",
	"slug": "chicago-pneumatic-cpi100-50-hz-13-bar-std-groupe-fixe-au-sol-sans-secheur-vitesse-fixe",
	"brand": "Chicago Pneumatic",
	"model": "CPI100",
	"variant": {
		"familyId": "chicago-pneumatic-cpi100",
		"label": "STD, groupe fixe au sol, sans sécheur ; vitesse fixe, 50 Hz, 13 bar",
		"distinguishingAttributes": {
			"équipement": "STD, groupe fixe au sol, sans sécheur ; vitesse fixe",
			"pressionMaximale": "13 bar",
			"cuve": "0 L",
			"régulation": "vitesse fixe",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 13,
	"fadCurve": [
		{
			"pressureBar": 12.5,
			"litersPerMinute": 10366.667
		}
	],
	"oilType": "oil",
	"powerKw": 75,
	"weightKg": 1417,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/chicago-pneumatic-cpi100-50-hz-13-bar-std-groupe-fixe-au-sol-sans-secheur-vitesse-fixe.webp",
		"alt": "Repères techniques : Chicago Pneumatic CPI100, 50 Hz, 13 bar",
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
			"value": "13 bar relatifs",
			"evidenceIds": [
				"october2b-cp-cpi-cpm75-120-p7"
			]
		},
		{
			"label": "FAD à 12,5 bar",
			"value": "622 m³/h",
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
		"overview": "CPI100 STD 50 Hz, version 13 bar : 622 m³/h, soit 10 366,667 L/min, à 12,5 bar pour un moteur de 75 kW. La version 10 bar de la même fréquence annonce 720 m³/h à 9,5 bar. Le groupe STD de cette ligne pèse 1 417 kg.",
		"verifiedFacts": [
			"Débit restitué relié à une pression et aux unités originales de la fiche fabricant.",
			"Périmètre retenu : groupe seul ; réservoir de stockage externe exclu.",
			"Limite de pression documentée : 13 bar ; le point FAD conserve sa pression publiée."
		],
		"limitations": [
			"Le point FAD de 12,5 bar est inférieur au maximum de 13 bar de cette configuration.",
			"Certaines lignes du tableau 60 Hz présentent une pression de référence supérieure au maximum imprimé ; elles ne sont pas utilisées pour corriger la ligne 50 Hz retenue.",
			"Le taux de marche reste inconnu ; le point de capacité ne suffit pas à conclure pour un usage permanent.",
			"Le groupe STD est sans sécheur ni stockage intégré. Installation et disponibilité de cette version restent à confirmer."
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
