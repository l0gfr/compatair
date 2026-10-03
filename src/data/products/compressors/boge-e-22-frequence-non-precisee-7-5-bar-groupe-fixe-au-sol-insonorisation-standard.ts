const product = {
	"id": "boge-e-22-frequence-non-precisee-7-5-bar-groupe-fixe-au-sol-insonorisation-standard",
	"slug": "boge-e-22-frequence-non-precisee-7-5-bar-groupe-fixe-au-sol-insonorisation-standard",
	"brand": "BOGE",
	"model": "E 22",
	"variant": {
		"familyId": "boge-e-22",
		"label": "groupe fixe au sol ; insonorisation standard, 7,5 bar",
		"distinguishingAttributes": {
			"équipement": "groupe fixe au sol ; insonorisation standard",
			"pressionMaximale": "7,5 bar",
			"cuve": "0 L",
			"régulation": "vitesse fixe"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 7.5,
	"fadCurve": [
		{
			"pressureBar": 7.5,
			"litersPerMinute": 3300
		}
	],
	"oilType": "oil",
	"powerKw": 22,
	"weightKg": 470,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/boge-e-22-frequence-non-precisee-7-5-bar-groupe-fixe-au-sol-insonorisation-standard.webp",
		"alt": "Repères techniques : BOGE E 22, 7,5 bar",
		"sourceUrl": "https://www.boge.com/f/287325279136465/x/41ce174837/017_e_series_data_en_130526.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "groupe fixe au sol ; insonorisation standard",
			"evidenceIds": [
				"october2b-017-e-series-data-en-130526-p2"
			]
		},
		{
			"label": "Pression maximale du tableau constructeur",
			"value": "7,5 bar",
			"evidenceIds": [
				"october2b-017-e-series-data-en-130526-p2"
			]
		},
		{
			"label": "FAD à 7,5 bar",
			"value": "3,3 m³/min",
			"evidenceIds": [
				"october2b-017-e-series-data-en-130526-p2"
			]
		},
		{
			"label": "Périmètre documentaire",
			"value": "Europe",
			"evidenceIds": [
				"october2b-017-e-series-data-en-130526-p2"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "Groupe seul ; réservoir de stockage externe non inclus",
			"evidenceIds": [
				"october2b-017-e-series-data-en-130526-p2"
			]
		}
	],
	"editorial": {
		"overview": "BOGE E 22, 7,5 bar. 3 300 L/min à 7,5 bar. Moteur 22 kW ; groupe fixe au sol ; insonorisation standard.",
		"verifiedFacts": [
			"Débit restitué relié à une pression et aux unités originales de la fiche fabricant.",
			"Périmètre retenu : groupe seul ; réservoir de stockage externe exclu.",
			"Limite de pression documentée : 7,5 bar ; le point FAD conserve sa pression publiée."
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
			"id": "october2b-017-e-series-data-en-130526-p2",
			"sourceUrl": "https://www.boge.com/f/287325279136465/x/41ce174837/017_e_series_data_en_130526.pdf#page=2",
			"sourceLabel": "BOGE, fiche technique E, 4–30 kW, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 c2cffd529c948f718f9b8c5e1b75b806b4c0767e760d21bb7c23be8e9ceb27b6 de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "october2b-boge-e-oil",
			"sourceUrl": "https://www.boge.com/en-uk/products/compressors/screw-compressors/e-series-up-to-30-kw/",
			"sourceLabel": "BOGE, lubrification et configuration de la série",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 0c6f85bc6a31df9d40e3440d259ab36457fa450b886b9e1bf60808f19581e532 de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october2b-017-e-series-data-en-130526-p2"
		],
		"maxPressureBar": [
			"october2b-017-e-series-data-en-130526-p2"
		],
		"fadCurve": [
			"october2b-017-e-series-data-en-130526-p2"
		],
		"powerKw": [
			"october2b-017-e-series-data-en-130526-p2"
		],
		"oilType": [
			"october2b-boge-e-oil"
		],
		"weightKg": [
			"october2b-017-e-series-data-en-130526-p2"
		]
	},
	"notes": [
		"Les unités bar(g) et psig désignent des pressions relatives lorsque le document les précise ; les autres valeurs en bar sont reprises telles qu’imprimées, sans conversion en pression absolue. Conditions ISO et pression de restitution restent celles du document constructeur."
	]
};

export default product;
