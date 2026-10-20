import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "chicago-pneumatic-cpi100-50-hz-8-5-bar-std-groupe-fixe-au-sol-sans-secheur-vitesse-fixe",
	"slug": "chicago-pneumatic-cpi100-50-hz-8-5-bar-std-groupe-fixe-au-sol-sans-secheur-vitesse-fixe",
	"brand": "Chicago Pneumatic",
	"model": "CPI100",
	"variant": {
		"familyId": "chicago-pneumatic-cpi100",
		"label": "STD, groupe fixe au sol, sans sécheur ; vitesse fixe, 50 Hz, 8,5 bar",
		"distinguishingAttributes": {
			"équipement": "STD, groupe fixe au sol, sans sécheur ; vitesse fixe",
			"pressionMaximale": "8,5 bar",
			"cuve": "0 L",
			"régulation": "vitesse fixe",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 8.5,
	"fadCurve": [
		{
			"pressureBar": 8,
			"litersPerMinute": 12983.333
		}
	],
	"oilType": "oil",
	"powerKw": 75,
	"weightKg": 1417,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/chicago-pneumatic-cpi100-50-hz-8-5-bar-std-groupe-fixe-au-sol-sans-secheur-vitesse-fixe.webp",
		"alt": "Repères techniques : Chicago Pneumatic CPI100, 50 Hz, 8,5 bar",
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
			"value": "8,5 bar relatifs",
			"evidenceIds": [
				"october2b-cp-cpi-cpm75-120-p7"
			]
		},
		{
			"label": "FAD à 8 bar",
			"value": "779 m³/h",
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
		"overview": "CPI100 STD50 Hz, version 8,5 bar : 779 m³/h, soit 12983,333 L/min, à 8 bar pour un moteur 75 kW. La version 10 bar de même fréquence annonce 720 m³/h à 9,5 bar. Le groupeSTD de cette ligne pèse 1417 kg.",
		"verifiedFacts": [
			"Débit restitué relié à une pression et aux unités originales de la fiche fabricant.",
			"Périmètre retenu : groupe seul ; réservoir de stockage externe exclu.",
			"Limite de pression documentée : 8,5 bar ; le point FAD conserve sa pression publiée."
		],
		"limitations": [
			"Le point FAD de 8 bar est inférieur au maximum 8,5 bar de cette configuration.",
			"Certaines lignes 60 Hz présentent une référence de mesure supérieure au maximum imprimé ; elles restent distinctes de la ligne 50 Hz retenue.",
			"Le taux de marche est inconnu ; la capacité publiée ne suffit pas à conclure pour un usage permanent.",
			"Le montage STD est sans sécheur ni stockage intégré. Refroidissement, installation et disponibilité restent à confirmer."
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
