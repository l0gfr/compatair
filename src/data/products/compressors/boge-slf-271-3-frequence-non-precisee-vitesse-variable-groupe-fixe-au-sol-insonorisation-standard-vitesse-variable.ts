const product = {
	"id": "boge-slf-271-3-frequence-non-precisee-vitesse-variable-groupe-fixe-au-sol-insonorisation-standard-vitesse-variable",
	"slug": "boge-slf-271-3-frequence-non-precisee-vitesse-variable-groupe-fixe-au-sol-insonorisation-standard-vitesse-variable",
	"brand": "BOGE",
	"model": "SLF 271-3",
	"variant": {
		"familyId": "boge-slf-271-3",
		"label": "groupe fixe au sol ; insonorisation standard ; vitesse variable, 13 bar",
		"distinguishingAttributes": {
			"équipement": "groupe fixe au sol ; insonorisation standard ; vitesse variable",
			"pressionMaximale": "13 bar",
			"cuve": "0 L",
			"régulation": "vitesse variable"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 13,
	"fadCurve": [
		{
			"pressureBar": 7.5,
			"litersPerMinute": 35810
		},
		{
			"pressureBar": 10,
			"litersPerMinute": 31430
		},
		{
			"pressureBar": 13,
			"litersPerMinute": 27510
		}
	],
	"oilType": "oil",
	"powerKw": 200,
	"weightKg": 5100,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/boge-slf-271-3-frequence-non-precisee-vitesse-variable-groupe-fixe-au-sol-insonorisation-standard-vitesse-variable.webp",
		"alt": "Repères techniques : BOGE SLF 271-3, vitesse variable",
		"sourceUrl": "https://www.boge.com/f/287325279136465/x/5b8f9fe934/boge-data-sheet-screw-compressor-s-3.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "groupe fixe au sol ; insonorisation standard ; vitesse variable",
			"evidenceIds": [
				"october2b-boge-s3-data-p4"
			]
		},
		{
			"label": "Pression maximale du tableau constructeur",
			"value": "13 bar",
			"evidenceIds": [
				"october2b-boge-s3-data-p4"
			]
		},
		{
			"label": "FAD à 7,5 bar",
			"value": "8,5 à 35,81 m³/min",
			"evidenceIds": [
				"october2b-boge-s3-data-p4"
			]
		},
		{
			"label": "FAD à 10 bar",
			"value": "7,93 à 31,43 m³/min",
			"evidenceIds": [
				"october2b-boge-s3-data-p4"
			]
		},
		{
			"label": "FAD à 13 bar",
			"value": "8,26 à 27,51 m³/min",
			"evidenceIds": [
				"october2b-boge-s3-data-p4"
			]
		},
		{
			"label": "Périmètre documentaire",
			"value": "Europe",
			"evidenceIds": [
				"october2b-boge-s3-data-p4"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "Groupe seul ; réservoir de stockage externe non inclus",
			"evidenceIds": [
				"october2b-boge-s3-data-p4"
			]
		}
	],
	"editorial": {
		"overview": "BOGE SLF 271-3, vitesse variable. 35 810 L/min à 7,5 bar ; 31 430 L/min à 10 bar ; 27 510 L/min à 13 bar. Moteur 200 kW ; groupe fixe au sol ; insonorisation standard ; vitesse variable.",
		"verifiedFacts": [
			"Débit restitué relié à une pression et aux unités originales de la fiche fabricant.",
			"Périmètre retenu : groupe seul ; réservoir de stockage externe exclu.",
			"Limite de pression documentée : 13 bar ; le point FAD conserve sa pression publiée."
		],
		"limitations": [
			"Les points de vitesse variable sont regroupés dans une seule courbe. Le maximum de chaque plage publié est retenu ; la stabilité à faible charge n’est pas simulée.",
			"Cycle de service non établi par les sources retenues ; la tenue permanente reste indéterminée.",
			"Fréquence du tableau non établie ; aucune transposition des débits entre 50 et 60 Hz.",
			"Les seules pressions FAD retenues sont celles du document. Aucun débit aspiré, extrapolation ou essai d’utilisation CompatAir.",
			"Documentation et disponibilité de la configuration à confirmer avec le constructeur."
		]
	},
	"evidence": [
		{
			"id": "october2b-boge-s3-data-p4",
			"sourceUrl": "https://www.boge.com/f/287325279136465/x/5b8f9fe934/boge-data-sheet-screw-compressor-s-3.pdf#page=4",
			"sourceLabel": "BOGE, fiche technique S-3, 22–250 kW, page PDF 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 5bfbc5da23a4ccdac75e36a4ebf694cdda484b921aedc51697afc2dd0d6bd579 de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "october2b-boge-s3-oil-p2",
			"sourceUrl": "https://www.boge.com/f/287325279136465/x/e22ffc7827/boge-brochure-oil-lubricated-screw-compressor-s-3-series.pdf#page=2",
			"sourceLabel": "BOGE S-3, circuit de lubrification, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 377dea3c353727d638828ef820e002492d42ec28349fba589b2337ff4e260d9b de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october2b-boge-s3-data-p4"
		],
		"maxPressureBar": [
			"october2b-boge-s3-data-p4"
		],
		"fadCurve": [
			"october2b-boge-s3-data-p4"
		],
		"powerKw": [
			"october2b-boge-s3-data-p4"
		],
		"oilType": [
			"october2b-boge-s3-oil-p2"
		],
		"weightKg": [
			"october2b-boge-s3-data-p4"
		]
	},
	"notes": [
		"Les unités bar(g) et psig désignent des pressions relatives lorsque le document les précise ; les autres valeurs en bar sont reprises telles qu’imprimées, sans conversion en pression absolue. Conditions ISO et pression de restitution restent celles du document constructeur."
	]
};

export default product;
