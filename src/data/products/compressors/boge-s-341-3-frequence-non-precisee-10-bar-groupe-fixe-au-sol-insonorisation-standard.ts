const product = {
	"id": "boge-s-341-3-frequence-non-precisee-10-bar-groupe-fixe-au-sol-insonorisation-standard",
	"slug": "boge-s-341-3-frequence-non-precisee-10-bar-groupe-fixe-au-sol-insonorisation-standard",
	"brand": "BOGE",
	"model": "S 341-3",
	"variant": {
		"familyId": "boge-s-341-3",
		"label": "groupe fixe au sol ; insonorisation standard, 10 bar",
		"distinguishingAttributes": {
			"équipement": "groupe fixe au sol ; insonorisation standard",
			"pressionMaximale": "10 bar",
			"cuve": "0 L",
			"régulation": "vitesse fixe"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 10,
			"litersPerMinute": 38170
		}
	],
	"oilType": "oil",
	"powerKw": 250,
	"weightKg": 4800,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/boge-s-341-3-frequence-non-precisee-10-bar-groupe-fixe-au-sol-insonorisation-standard.webp",
		"alt": "Repères techniques : BOGE S 341-3, 10 bar",
		"sourceUrl": "https://www.boge.com/f/287325279136465/x/5b8f9fe934/boge-data-sheet-screw-compressor-s-3.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "groupe fixe au sol ; insonorisation standard",
			"evidenceIds": [
				"october2b-boge-s3-data-p4"
			]
		},
		{
			"label": "Pression maximale du tableau constructeur",
			"value": "10 bar",
			"evidenceIds": [
				"october2b-boge-s3-data-p4"
			]
		},
		{
			"label": "FAD à 10 bar",
			"value": "38,17 m³/min",
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
		"overview": "BOGE S 341-3, 10 bar. 38 170 L/min à 10 bar. Moteur 250 kW ; groupe fixe au sol ; insonorisation standard.",
		"verifiedFacts": [
			"Débit restitué relié à une pression et aux unités originales de la fiche fabricant.",
			"Périmètre retenu : groupe seul ; réservoir de stockage externe exclu.",
			"Limite de pression documentée : 10 bar ; le point FAD conserve sa pression publiée."
		],
		"limitations": [
			"Cette entrée correspond à une configuration constructeur de pression maximale ; aucun nouveau produit n’est créé à partir d’un simple point de test.",
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
