import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "chicago-pneumatic-cpi100-60-hz-10-3-bar-std-groupe-fixe-au-sol-sans-secheur-vitesse-fixe",
	"slug": "chicago-pneumatic-cpi100-60-hz-10-3-bar-std-groupe-fixe-au-sol-sans-secheur-vitesse-fixe",
	"brand": "Chicago Pneumatic",
	"model": "CPI100",
	"variant": {
		"familyId": "chicago-pneumatic-cpi100",
		"label": "STD, groupe fixe au sol, sans sécheur ; vitesse fixe, 60 Hz, 10,3 bar",
		"distinguishingAttributes": {
			"équipement": "STD, groupe fixe au sol, sans sécheur ; vitesse fixe",
			"pressionMaximale": "10,3 bar",
			"cuve": "0 L",
			"régulation": "vitesse fixe",
			"fréquence": "60 Hz"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 10.3,
	"fadCurve": [
		{
			"pressureBar": 9.5,
			"litersPerMinute": 11733.333
		}
	],
	"oilType": "oil",
	"powerKw": 75,
	"weightKg": 1417,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/chicago-pneumatic-cpi100-60-hz-10-3-bar-std-groupe-fixe-au-sol-sans-secheur-vitesse-fixe.webp",
		"alt": "Repères techniques : Chicago Pneumatic CPI100, 60 Hz, 10,3 bar",
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
			"value": "10,3 bar relatifs",
			"evidenceIds": [
				"october2b-cp-cpi-cpm75-120-p7"
			]
		},
		{
			"label": "FAD à 9,5 bar",
			"value": "704 m³/h",
			"evidenceIds": [
				"october2b-cp-cpi-cpm75-120-p7"
			]
		},
		{
			"label": "Fréquence de la documentation",
			"value": "60 Hz",
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
		"overview": "CPI100 STD, version 60 Hz de 10,3 bar : 704 m³/h à la pression de référence de 9,5 bar, soit 11 733,333 L/min. Le groupe de 75 kW est au sol, sans sécheur, avec une masse publiée de 1 417 kg. La version 50 Hz de 10 bar publie 720 m³/h à 9,5 bar.",
		"verifiedFacts": [
			"Débit restitué relié à une pression et aux unités originales de la fiche fabricant.",
			"Périmètre retenu : groupe seul ; réservoir de stockage externe exclu.",
			"Limite de pression documentée : 10,3 bar ; le point FAD conserve sa pression publiée."
		],
		"limitations": [
			"Le point FAD de 9,5 bar est inférieur au maximum de 10,3 bar de cette version ; la réserve signalant un dépassement est retirée.",
			"Les versions 50 Hz et 60 Hz conservent leurs performances propres. Les 704 et 720 m³/h ne sont pas deux points d’une même courbe.",
			"Le taux de marche du groupe complet reste inconnu. La version PLUS avec sécheur est distincte du montage STD.",
			"Le document prévoit 10 224 m³/h d’air de refroidissement et un raccord de sortie de 2½ pouces. Alimentation, implantation et disponibilité locale restent à confirmer."
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
